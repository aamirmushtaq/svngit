'Functions Summary
' OpenApplication(byRef blnReturn)
' CloseAllBrowsersExceptQC()
' Login(objPage,user,password,byRef blnReturn)


'******************************************************************************************************
' Purpose:  This function will check that there isn't any browser opened and it opens the application specified by global parameter from Startup.vbs sProjectURL
' Inputs:
' Returns: blnRet = this variable will return true if the action could be performed and false if the action couldn't be performed
'@Description  Opens the browser with the specified URL
'@Documentation  This function will open the application
''''''''''''''''''''''''''''CALL EXAMPLE''''''''''''''''''
'**OpenApplication**
'
'	  rc=OpenApplication("", blnRet) 'Opening a new browser
'	 If  blnRet = false Then
'		ExitAction(0)
'	 End If
'
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'********************************************************************************************************
Function OpenApplication(sURL, ByRef blnReturn)

	If sURL = "" Then
	   sURL = sProjectURL
	End If

	'Checking if the application is opened before, closes all the browsers and the reports opened
	nbQCBrowsers = CloseAllBrowsersExceptQC()
	SystemUtil.CloseProcessByName("qtreport.exe") 

	blnReturn = true

		
	SystemUtil.Run "iexplore.exe", sURL, "", "", 3	
	
	' Constructing a generic description for a broswer instance
	set oDesc = Description.Create()
	oDesc("nativeclass").Value = "IEFrame"


	'Wait until Browser opens 
	
	Dim intDiff: intDiff = 0
	Dim intStartTime: intStartTime = Timer
	Dim intEndTime, iNumOfBrowsers
	
	Dim condOpenedBrowsers ' will keep the condition iNumOfBrowsers<>1, meaning the browser is not opened still and visible on desktop
	
	Do 
		wait(1) 
		set ChildElements = Desktop.ChildObjects(oDesc) ' Gets the collection of browsers that are visible on the desktop
		iNumOfBrowsers = ChildElements.Count

		intEndTime = Timer
		intDiff = intEndTime - intStartTime  
		condOpenedBrowsers = iNumOfBrowsers<>nbQCBrowsers+1 
	Loop While condOpenedBrowsers  and  intDiff < sWebSync
			
	  	
	If  condOpenedBrowsers Then ' The browser didn't become visible in "sWebSync" secs - this constant is defined in the startup
		blnReturn = false
		Exit Function
	End If
		
	Browser("micclass:=Browser").SetTOProperty "creationtime", nbQCBrowsers
	'destroy objects to release the memory allotted to them
	set oDesc=nothing
	set ChildElements=nothing
	
End Function 


'*********************************************************
' Purpose: 	Closes all the browsers and  the QTP Results except QC
' Inputs: 
' Returns: 
'@Description  Close the browsers
'@Documentation  This function will close all the browsers and  the QTP Results except QC
'*********************************************************

Function CloseAllBrowsersExceptQC()
	Dim  nbOfBrowsers , ChildElements, sBrowName, i
	Dim nbQCBrowsers:nbQCBrowsers=0

    	' Getting the collection of the opened browsers
    	Set oDesc = Description.Create()
	oDesc("nativeclass").Value = "IEFrame"
	set ChildElements = Desktop.ChildObjects(oDesc)
	nbOfBrowsers = ChildElements.Count

	
    	nbQCBrowsers = 0 ' the variables will store the number of opened QC instances

	Dim reg_Exp,match, matches
	Set reg_Exp = New RegExp
	reg_Exp.Pattern = "Mercury Quality Center"
	reg_Exp.IgnoreCase  = True


	For i = 0 to nbOfBrowsers - 1
		sBrowName = ChildElements(i).GetROProperty("text") ' gets the name of the current browser
		Set matches = reg_Exp.Execute(sBrowName)
		If matches.Count <> 0 Then ' Found QC instance
			nbQCBrowsers = nbQCBrowsers + 1
		Else
			ChildElements(i).Close	' IE instance other than QC
		End If
	Next
	
	CloseAllBrowsersExceptQC = nbQCBrowsers
 

  	'destroying the  objects
	set oDesc=nothing
	set ChildElements=nothing
	set reg_Exp = nothing	

End Function


''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' Purpose: Login into the application
' Inputs: user = the value of the user to login
'         if user = "" than the function will log into the application with the value from the global parameter sLoginID declared in Startup.vbs
'         password = the correspondinf password for the user we login
'	  if password = "" than the function will log into the application with the value from the global parameter sLoginPassword declared in Startup.vbs
' Returns: blnRet = this variable will return true if the action could be performed and false if the action couldn't be performed
'@Description  Log into the application
'@Documentation  Log into the application with the user = <user> and password = <password>
'**Login**
'
'	rc = Browser("Browser").Page("Page").Login(user,password,blnRet)
'	If  blnRet = false Then
'		ExitAction(0)
'	End If
'
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''

Function Login(objPage,user,password,byRef blnReturn)
	
	blnReturn = true
	
	If objPage.exist(10) Then
		objPage.Sync
	Else 
		Reporter.ReportEvent micFail, "Login Operation - Failed.", "Login operation Failed because the Page  was not found." 
		blnReturn = false		
		Exit Function

	End If

	
	If objPage.WebEdit("userId").exist(5) Then
		If (user = "") Then
			user = sLoginID 
		End if

		objPage.WebEdit("userId").Set user
	Else
		blnReturn = false	
		Reporter.ReportEvent micFail, "Login Operation - Failed.", "Login operation Failed because the edit box for Username was not found."
		Exit Function

	End If

	If objPage.WebEdit("password").exist(5) Then
		If (password = "") Then
			password = sLoginPassword 
		End If
		
		objPage.WebEdit("password").SetSecure  password

	Else
		blnReturn = false
		Reporter.ReportEvent micFail, "Login Operation - Failed.", "Login operation Failed because the edit box for Password was not found."
		Exit Function

	End If

Set objLogin = Description.Create
objLogin("name").value = "Login"
objLogin("html tag").RegularExpression = True
objLogin("html tag").value = "A|INPUT"

	If objPage.WebElement(objLogin).exist(5) Then
		objPage.WebElement(objLogin).Click
	Else
		blnReturn = false	
		Reporter.ReportEvent micFail, "Login Operation - Failed.", "Login operation Failed because the Login button was not found." 

	End If

Set objLogin = Nothing
End Function

RegisterUserFunc "Page","Login","Login"