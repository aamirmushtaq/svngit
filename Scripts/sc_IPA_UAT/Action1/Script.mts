'File Name: sc_IPA_UAT
'  File Type:  Test Script
'  Data-Driven: No
'  Data-Driven Stand Alone: No 
'  Data-Script Called By:   None
'  Data-Script Calls:  None

'  AUT Created For:  Precision R1
'  AUT Version Test Created In:R1.0
'  Web Browser & Version Created For:
'  OS System Created For:  Windows 2K, Windows XP 
'
'  Purpose:  script 's created  for  Precision to validate the UI
'  Pre-Requisite Testcases:None

'  Author:  Ravi Kishore
'  Date Started Creation: 14/04/2008
'  Date Ended Creation: 16/04/2008
'  Functions Included: fOpenApplication(),CloseAllBrowsersExceptQC(),Login()
'  History of Changes: 
'--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  

'IPA Packaging
'1.	Login to IPA as an Admin
'2.	select Coach in the packaging section
'3.	Select the courses to package by clicking the package link for each individual course that you desire to package. The course is added to the package queue. The page and the table refresh when the course is packaged.
'4.	Click the push link, the packaged courses are transferred to Precision LMS
'
'Create a Library
'Now that you have packaged courses and transferred them to Precision LMS, you should create a library to which the course can be associated.
'1.	In the IPA click the Libraries link under the Order Administration section. 
'2.	Click Create new library.
'3.	Enter a name and a description for the library. 
'4.	Add Learning items to the library.
'5.	Click Save. The new library is created
'
'Push the Library to Precision LMS
'Now that you have created a library and assigned learning items to that library, you are now ready to transfer that library to Precision LMS.
'1.	There will be a push mechanism for this, however currently one must download the library file to their local machine and upload it into Precision LMS.
'
'Create an Organization
'Now that you have some content in the system and a library, you can create a new customer in the system.
'2.	In the IPA click the Organizations link under the Order Administration section.
'3.	Click creates new organization.
'4.	Enter the org name,
'5.	enter any desired notes on the organization
'6.	Add a customer to the organization by entering a customer number.
'7.	Click Save organization, the organization is created and the customer is associated with the organization.

'Create an Order 
'1.	In the IPA click the orders link in the order administration section.
'2.	Click Create new order.
'3.	Add a customer to the order by entering a customer number.
'4.	Enter the customer email
'5.	Enter the sales order number
'6.	enter the Order Date
'7.	Enter any notes on the customer
'8.	Click Add New License
'9.	In the Specify License details window enter 
'10.	the number of users
'11.	Enter the assignment type
'12.	Enter the license type
'13.	Enter the license term expiration
'14.	Enter whether the customer has opted for support
'15.	Enter the support expiration date.
'16.	Click submit and the license window closes
'17.	On the main create order page, click submit to create the new order. 
'Pushing a license to Precision LMS.
'Now that you have created a license in the IPA, you need to push that license to Precision LMS

Reporter.ReportEvent 2, "Script Begins","Login"

'Opening a new browser with the URL specified in the startup
Reporter.ReportEvent micDone, "Open the application", "Close all the browsers and Open the application"
rc=OpenApplication("", blnRet) 'Opening a new browser
If  blnRet = false Then
 	ExitAction(0)
End If
'Login wtih Admin Account
Reporter.ReportEvent micDone, "Login into  the application", "Login into the application with username:" & sLoginID
Browser("Browser").Page("Page").Login  "", "" , blnRet
If  blnRet = false Then
		ExitAction(0)
End If
If Browser("Browser").Page("Page").Check (CheckPoint("Fusion Administration")) then
	Reporter.ReportEvent micPass,"Verifying that Welcome Page is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that Welcome Page is  displayed","Failed"
End If
If Browser("Browser").Page("Page").Link("Help...").Check (CheckPoint("Help...")) then @@ hightlight id_;_Browser("Browser").Page("Page").Link("Help...")_;_script infofile_;_ZIP::ssf95.xml_;_
Reporter.ReportEvent micPass,"Verifying that Help link is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Help link  is  displayed","Failed"
End If
If Browser("Browser").Page("Page").Link("Logout").Check (CheckPoint("Logout")) then @@ hightlight id_;_Browser("Browser").Page("Page").Link("Help...")_;_script infofile_;_ZIP::ssf95.xml_;_
Reporter.ReportEvent micPass,"Verifying that Logout link is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Logout link  is  displayed","Failed"
End If
If Browser("Browser").Page("Page").Link("Manage Users").Check (CheckPoint("Manage Users_3")) then @@ hightlight id_;_Browser("Browser").Page("Page").Link("Help...")_;_script infofile_;_ZIP::ssf95.xml_;_
Reporter.ReportEvent micPass,"Verifying that Manage Users link is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Manage Users link  is  displayed","Failed"
End If

'Create new User with All Roles
Browser("Browser").Page("Page").Link("Manage Users").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Manage Users")_;_script infofile_;_ZIP::ssf6.xml_;_
If Browser("Browser").Page("Page").Check (CheckPoint("Manage Users")) then
	Reporter.ReportEvent micPass,"Verifying that Manage Users Page is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that Manage Users Page is  displayed","Failed"
End If
Browser("Browser").Page("Page").Link("Add New User").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Add New User")_;_script infofile_;_ZIP::ssf8.xml_;_
If Browser("Browser").Page("Page").Check (CheckPoint("Register a IPA system admin")) then
	Reporter.ReportEvent micPass,"Verifying that Register a IPA system admin Page is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that Register a IPA system admin Page is  displayed","Failed"
End If
Browser("Browser").Page("Page").WebEdit("email").Set "rkishore@ptc.com" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("email")_;_script infofile_;_ZIP::ssf10.xml_;_
Browser("Browser").Page("Page").WebCheckBox("rolesCheckGroup").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").WebCheckBox("rolesCheckGroup")_;_script infofile_;_ZIP::ssf11.xml_;_
Browser("Browser").Page("Page").WebCheckBox("rolesCheckGroup_2").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").WebCheckBox("rolesCheckGroup 2")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("Browser").Page("Page").WebCheckBox("rolesCheckGroup_3").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").WebCheckBox("rolesCheckGroup 3")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Browser").Page("Page").WebButton("Submit").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("Submit")_;_script infofile_;_ZIP::ssf14.xml_;_
If Browser("Browser").Page("Page").Check (CheckPoint("Manage Users_2")) then
	Reporter.ReportEvent micPass,"Verifying that Manage Users Page is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that Manage Users Page is  displayed","Failed"
End If
Browser("Browser").Page("Page").Link("Logout").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Logout")_;_script infofile_;_ZIP::ssf16.xml_;_
If Browser("Browser").Page("Page").Check (CheckPoint("com.ptc.fusion.admin.web.pages.Login.title")) then
	Reporter.ReportEvent micPass,"Verifying that Login Page is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that Login Page is  displayed","Failed"
End If
Reporter.ReportEvent micDone, "Login into  the application", "Login into the application with username:" & sLoginID
Browser("Browser").Page("Page").Login  "rkishore", "Violici143" , blnRet
If  blnRet = false Then
		ExitAction(0)
End If
If Browser("Browser").Page("Page").Check (CheckPoint("Fusion Administration_2")) then
	Reporter.ReportEvent micPass,"Verifying that Welcome Page is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that Welcome Page is  displayed","Failed"
End If
If Browser("Browser").Page("Page").Link("Help...").Check (CheckPoint("Help..._2")) then @@ hightlight id_;_Browser("Browser").Page("Page").Link("Help...")_;_script infofile_;_ZIP::ssf95.xml_;_
Reporter.ReportEvent micPass,"Verifying that Help link is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Help link  is  displayed","Failed"
End If
If Browser("Browser").Page("Page").Link("Logout").Check (CheckPoint("Logout_2")) then @@ hightlight id_;_Browser("Browser").Page("Page").Link("Help...")_;_script infofile_;_ZIP::ssf95.xml_;_
Reporter.ReportEvent micPass,"Verifying that Logout link is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Logout link  is  displayed","Failed"
End If
If Browser("Browser").Page("Page").Link("Manage Users").Check (CheckPoint("Manage Users_4")) then @@ hightlight id_;_Browser("Browser").Page("Page").Link("Help...")_;_script infofile_;_ZIP::ssf95.xml_;_
Reporter.ReportEvent micPass,"Verifying that Manage Users link is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Manage Users link  is  displayed","Failed"
End If
If Browser("Browser").Page("Page").Link("Organizations").Check (CheckPoint("Organizations_3")) then
Reporter.ReportEvent micPass,"Verifying that Organizations  link is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Organizations link  is  displayed","Failed"
End If
If Browser("Browser").Page("Page").Link("Orders").Check (CheckPoint("Orders_3")) then @@ hightlight id_;_Browser("Browser").Page("Page").Link("Help...")_;_script infofile_;_ZIP::ssf95.xml_;_
Reporter.ReportEvent micPass,"Verifying that Orders  link is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Orders  link  is  displayed","Failed"
End If
If Browser("Browser").Page("Page").Link("Coach").Check (CheckPoint("Coach")) then @@ hightlight id_;_Browser("Browser").Page("Page").Link("Help...")_;_script infofile_;_ZIP::ssf95.xml_;_
Reporter.ReportEvent micPass,"Verifying that Coach link is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Coach link  is  displayed","Failed"
End If
If Browser("Browser").Page("Page").Link("Pro/FICIENCY").Check (CheckPoint("Pro/FICIENCY")) then @@ hightlight id_;_Browser("Browser").Page("Page").Link("Help...")_;_script infofile_;_ZIP::ssf95.xml_;_
Reporter.ReportEvent micPass,"Verifying that Pro/FICIENCY link is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Pro/FICIENCY link  is  displayed","Failed"
End If
If Browser("Browser").Page("Page").Link("Saba").Check (CheckPoint("Saba")) then @@ hightlight id_;_Browser("Browser").Page("Page").Link("Help...")_;_script infofile_;_ZIP::ssf95.xml_;_
Reporter.ReportEvent micPass,"Verifying that Saba link is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Saba link  is  displayed","Failed"
End If
If Browser("Browser").Page("Page").Link("Classifications").Check (CheckPoint("Classifications")) then @@ hightlight id_;_Browser("Browser").Page("Page").Link("Help...")_;_script infofile_;_ZIP::ssf95.xml_;_
Reporter.ReportEvent micPass,"Verifying that Classifications link is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Classifications link  is  displayed","Failed"
End If
If Browser("Browser").Page("Page").Link("Classification Mapping").Check (CheckPoint("Classification Mapping")) then @@ hightlight id_;_Browser("Browser").Page("Page").Link("Help...")_;_script infofile_;_ZIP::ssf95.xml_;_
Reporter.ReportEvent micPass,"Verifying that Classification Mapping link is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Classification Mapping link  is  displayed","Failed"
End If
If Browser("Browser").Page("Page").Link("Libraries").Check (CheckPoint("Libraries_3")) then @@ hightlight id_;_Browser("Browser").Page("Page").Link("Help...")_;_script infofile_;_ZIP::ssf95.xml_;_
Reporter.ReportEvent micPass,"Verifying that Libraries link is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Libraries link  is  displayed","Failed"
End If

'Package & Push Online Courses and Push to PLMS

'Coach Packager
Browser("Browser").Page("Page").Link("Coach").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Coach")_;_script infofile_;_ZIP::ssf22.xml_;_
If Browser("Browser").Page("Page").Link("Refresh Available Courses").Check (CheckPoint("Refresh Available Courses")) then
    Reporter.ReportEvent micPass,"Verifying that Refresh Available Courses link is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Refresh Available Courses link  is  displayed","Failed"
End If
Browser("Browser").Page("Page").Sync
If Browser("Browser").Page("Page").Link("Expanded View").Check (CheckPoint("Expanded View")) then
Reporter.ReportEvent micPass,"Verifying that Expanded View link is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Expanded View link  is  displayed","Failed"
End If
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Refresh Available Courses").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Refresh Available Courses")_;_script infofile_;_ZIP::ssf23.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Sync
'If Browser("Browser").Page("Page").Check (CheckPoint("List Coach Courses")) then
'	Reporter.ReportEvent micPass,"Verifying that List Coach Courses are displayed","Passed"
'else
'	Reporter.ReportEvent micFail,"Verifying that List Coach Courses are displayed","Failed"
'End If
Browser("Browser").Page("Page").Sync
If Browser("Browser").Page("Page").Link("Edit").Check (CheckPoint("Edit")) then @@ hightlight id_;_Browser("Browser").Page("Page").Link("Refresh Available Courses")_;_script infofile_;_ZIP::ssf109.xml_;_
Reporter.ReportEvent micPass,"Verifying that Edit link is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Edit  link  is  displayed","Failed"
End If
If Browser("Browser").Page("Page").Link("Push").Check (CheckPoint("Push")) then @@ hightlight id_;_Browser("Browser").Page("Page").Link("Refresh Available Courses")_;_script infofile_;_ZIP::ssf109.xml_;_
Reporter.ReportEvent micPass,"Verifying that Push  link is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Push  link  is  displayed","Failed"
End If
If Browser("Browser").Page("Page").Link("Package Only").Check (CheckPoint("Package Only")) then @@ hightlight id_;_Browser("Browser").Page("Page").Link("Refresh Available Courses")_;_script infofile_;_ZIP::ssf109.xml_;_
Reporter.ReportEvent micPass,"Verifying that Package Only link is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Package Only link  is  displayed","Failed"
End If
Browser("Browser").Page("Page").Link("Push").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Push")_;_script infofile_;_ZIP::ssf25.xml_;_
Browser("Browser").Page("Page").Sync
Wait(60)
Browser("Browser").Page("Page").Link("Coach").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Coach")_;_script infofile_;_ZIP::ssf26.xml_;_
Browser("Browser").Page("Page").Sync
If Browser("Browser").Page("Page").WebElement("Pushed").Check (CheckPoint("Pushed_3")) then
	Reporter.ReportEvent micPass,"Verifying that Coach Packager is Pushed and have status as Pushed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that Coach Packager is Pushed and have status as Pushed","Failed"
End If
Browser("Browser").Page("Page").Link("Push_2").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Push 2")_;_script infofile_;_ZIP::ssf192.xml_;_
Browser("Browser").Page("Page").Sync
Wait(600)
Browser("Browser").Page("Page").Link("Push_9").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Push 9")_;_script infofile_;_ZIP::ssf203.xml_;_
'Browser("Browser").Page("Page").Link("Push_7").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Push 7")_;_script infofile_;_ZIP::ssf194.xml_;_
Browser("Browser").Page("Page").Sync
Wait(400)
Browser("Browser").Page("Page").Link("Push_8").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Push 8")_;_script infofile_;_ZIP::ssf197.xml_;_
Browser("Browser").Page("Page").Sync
Wait(180)
Browser("Browser").Page("Page").Link("Coach").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Coach")_;_script infofile_;_ZIP::ssf26.xml_;_
Browser("Browser").Page("Page").Sync
'ProF Packager
Browser("Browser").Page("Page").Link("Pro/FICIENCY").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Pro/FICIENCY")_;_script infofile_;_ZIP::ssf27.xml_;_
If Browser("Browser").Page("Page").Link("Add New Package").Check (CheckPoint("Add New Package")) then @@ hightlight id_;_Browser("Browser").Page("Page").Link("Refresh Available Courses")_;_script infofile_;_ZIP::ssf109.xml_;_
Reporter.ReportEvent micPass,"Verifying that Add New Package link is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Add New Package  link  is  displayed","Failed"
End If
If Browser("Browser").Page("Page").Link("Reload Import File").Check (CheckPoint("Reload Import File")) then @@ hightlight id_;_Browser("Browser").Page("Page").Link("Add New Package")_;_script infofile_;_ZIP::ssf115.xml_;_
Reporter.ReportEvent micPass,"Verifying that Reload Import File link is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Reload Import File  link  is  displayed","Failed"
End If
If Browser("Browser").Page("Page").Link("Package Language Tags").Check (CheckPoint("Package Language Tags")) then @@ hightlight id_;_Browser("Browser").Page("Page").Link("Refresh Available Courses")_;_script infofile_;_ZIP::ssf109.xml_;_
Reporter.ReportEvent micPass,"Verifying that Package Language Tags link is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Package Language Tags  link  is  displayed","Failed"
End If
If Browser("Browser").Page("Page").Link("Refresh").Check (CheckPoint("Refresh")) then @@ hightlight id_;_Browser("Browser").Page("Page").Link("Refresh Available Courses")_;_script infofile_;_ZIP::ssf109.xml_;_
Reporter.ReportEvent micPass,"Verifying that Refresh link is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Refresh  link  is  displayed","Failed"
End If
Browser("Browser").Page("Page").Link("Reload Import File").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Reload Import File")_;_script infofile_;_ZIP::ssf28.xml_;_
Browser("Browser").Page("Page").Sync
If Browser("Browser").Page("Page").Check (CheckPoint("Proficiency packager")) then
	Reporter.ReportEvent micPass,"Verifying that Proficiency packager page is displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that Proficiency packager page is displayed","Failed"
End If
If Browser("Browser").Page("Page").Link("Push_4").Check (CheckPoint("Push_2")) then @@ hightlight id_;_Browser("Browser").Page("Page").Link("Refresh Available Courses")_;_script infofile_;_ZIP::ssf109.xml_;_
Reporter.ReportEvent micPass,"Verifying that Push link is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Push  link  is  displayed","Failed"
End If
If Browser("Browser").Page("Page").Link("Edit_2").Check (CheckPoint("Edit_2")) then @@ hightlight id_;_Browser("Browser").Page("Page").Link("Refresh Available Courses")_;_script infofile_;_ZIP::ssf109.xml_;_
Reporter.ReportEvent micPass,"Verifying that Edit link is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Edit  link  is  displayed","Failed"
End If
Browser("Browser").Page("Page").Link("Push_2").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Push 2")_;_script infofile_;_ZIP::ssf30.xml_;_
Browser("Browser").Page("Page").Sync
Wait(60)
Browser("Browser").Page("Page").Link("Pro/FICIENCY").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Pro/FICIENCY")_;_script infofile_;_ZIP::ssf31.xml_;_
Browser("Browser").Page("Page").Sync
If Browser("Browser").Page("Page").Check (CheckPoint("Proficiency packager_5")) then
	Reporter.ReportEvent micPass,"Verifying that User Pushed is rkishore","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that User Pushed is rkishore","Failed"
End If
If Browser("Browser").Page("Page").Check (CheckPoint("Proficiency packager_4")) then
	Reporter.ReportEvent micPass,"Verifying that ProF Packager is Pushed and have status as Pushed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that ProF Packager is Pushed and have status as Pushed","Failed"
End If

''Saba Packager
Browser("Browser").Page("Page").Link("Saba").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Saba")_;_script infofile_;_ZIP::ssf32.xml_;_
If Browser("Browser").Page("Page").Link("Add New Course").Check (CheckPoint("Add New Course")) then @@ hightlight id_;_Browser("Browser").Page("Page").Link("Refresh Available Courses")_;_script infofile_;_ZIP::ssf109.xml_;_
Reporter.ReportEvent micPass,"Verifying that Add New Course link is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Add New Course  link  is  displayed","Failed"
End If
If Browser("Browser").Page("Page").Link("Reload Import File").Check (CheckPoint("Reload Import File_2")) then @@ hightlight id_;_Browser("Browser").Page("Page").Link("Refresh Available Courses")_;_script infofile_;_ZIP::ssf109.xml_;_
Reporter.ReportEvent micPass,"Verifying that Reload Import File link is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Reload Import File  link  is  displayed","Failed"
End If
If Browser("Browser").Page("Page").Link("Add New Custom Course").Check (CheckPoint("Add New Custom Course")) then @@ hightlight id_;_Browser("Browser").Page("Page").Link("Refresh Available Courses")_;_script infofile_;_ZIP::ssf109.xml_;_
Reporter.ReportEvent micPass,"Verifying that Add New Custom Course link is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Add New Custom Course  link  is  displayed","Failed"
End If
If Browser("Browser").Page("Page").Link("Refresh").Check (CheckPoint("Refresh_2")) then @@ hightlight id_;_Browser("Browser").Page("Page").Link("Refresh Available Courses")_;_script infofile_;_ZIP::ssf109.xml_;_
Reporter.ReportEvent micPass,"Verifying that Refresh link is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Refresh  link  is  displayed","Failed"
End If
Browser("Browser").Page("Page").Link("Reload Import File").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Reload Import File")_;_script infofile_;_ZIP::ssf33.xml_;_
Browser("Browser").Page("Page").Sync
If Browser("Browser").Page("Page").Check (CheckPoint("Package WBT Course")) then
	Reporter.ReportEvent micPass,"Verifying that Package WBT Course page is displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that Package WBT Course page is displayed","Failed"
End If
If Browser("Browser").Page("Page").Link("Package").Check (CheckPoint("Package_2")) then @@ hightlight id_;_Browser("Browser").Page("Page").Link("Refresh Available Courses")_;_script infofile_;_ZIP::ssf109.xml_;_
Reporter.ReportEvent micPass,"Verifying that Package link is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Package  link  is  displayed","Failed"
End If
If Browser("Browser").Page("Page").Link("Push_3").Check (CheckPoint("Push_3")) then @@ hightlight id_;_Browser("Browser").Page("Page").Link("Refresh Available Courses")_;_script infofile_;_ZIP::ssf109.xml_;_
Reporter.ReportEvent micPass,"Verifying that Push link is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Push  link  is  displayed","Failed"
End If
If Browser("Browser").Page("Page").Link("Edit_3").Check (CheckPoint("Edit_3")) then @@ hightlight id_;_Browser("Browser").Page("Page").Link("Refresh Available Courses")_;_script infofile_;_ZIP::ssf109.xml_;_
Reporter.ReportEvent micPass,"Verifying that Edit link is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Edit  link  is  displayed","Failed"
End If
Browser("Browser").Page("Page").Link("Push_3").Click
Browser("Browser").Page("Page").Sync
Wait(600) @@ hightlight id_;_Browser("Browser").Page("Page").Link("Saba")_;_script infofile_;_ZIP::ssf36.xml_;_
Browser("Browser").Page("Page").Link("Saba").Click
Browser("Browser").Page("Page").Sync
If Browser("Browser").Page("Page").WebElement("rkishore").Check (CheckPoint("rkishore")) then @@ hightlight id_;_Browser("Browser").Page("Page").Link("Refresh Available Courses")_;_script infofile_;_ZIP::ssf109.xml_;_
Reporter.ReportEvent micPass,"Verifying that rkishore text  is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that rkishore text  is  displayed","Failed"
End If
If Browser("Browser").Page("Page").WebElement("Pushed").Check (CheckPoint("Pushed")) then @@ hightlight id_;_Browser("Browser").Page("Page").Link("Refresh Available Courses")_;_script infofile_;_ZIP::ssf109.xml_;_
Reporter.ReportEvent micPass,"Verifying that Pushed Text is  displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that  Pushed Text  is  displayed","Failed"
End If

'Create Organization @@ hightlight id_;_Browser("Browser").Page("Page").Link("Organizations")_;_script infofile_;_ZIP::ssf37.xml_;_
Browser("Browser").Page("Page").Link("Organizations").Click
If Browser("Browser").Page("Page").Check (CheckPoint("Organizations")) then
	Reporter.ReportEvent micPass,"Verifying that Organizations page is displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that Organizations page is displayed","Failed"
End If @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create New Organization")_;_script infofile_;_ZIP::ssf39.xml_;_
Browser("Browser").Page("Page").Link("Create New Organization").Click
If Browser("Browser").Page("Page").Check (CheckPoint("Create Organization")) then
	Reporter.ReportEvent micPass,"Verifying that Create Organization page is displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that Create Organization page is displayed","Failed"
End If @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("organizationName")_;_script infofile_;_ZIP::ssf41.xml_;_
Browser("Browser").Page("Page").WebEdit("organizationName").Set "PTC Org" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("organizationDesc")_;_script infofile_;_ZIP::ssf42.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("organizationDesc").Set "For internal use by PTC employees" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("customerNumber")_;_script infofile_;_ZIP::ssf43.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("customerNumber").Set "341" @@ hightlight id_;_Browser("Browser").Page("Page").Link("Add")_;_script infofile_;_ZIP::ssf44.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Add").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("Save Organization")_;_script infofile_;_ZIP::ssf45.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebButton("Save Organization").Click
Browser("Browser").Page("Page").Sync
If Browser("Browser").Page("Page").Check (CheckPoint("Organizations_2")) then
	Reporter.ReportEvent micPass,"Verifying that Organizations page is displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that Organizations page is displayed","Failed"
End If

'Create Library & Push @@ hightlight id_;_Browser("Browser").Page("Page").Link("Libraries")_;_script infofile_;_ZIP::ssf47.xml_;_
Browser("Browser").Page("Page").Link("Libraries").Click
Browser("Browser").Page("Page").Sync
If Browser("Browser").Page("Page").Check (CheckPoint("Libraries")) then
	Reporter.ReportEvent micPass,"Verifying that Libraries page is displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that Libraries page is displayed","Failed"
End If @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create New Library")_;_script infofile_;_ZIP::ssf49.xml_;_
Browser("Browser").Page("Page").Link("Create New Library").Click
Browser("Browser").Page("Page").Sync
If Browser("Browser").Page("Page").Check (CheckPoint("Create/Edit Library")) then
	Reporter.ReportEvent micPass,"Verifying that Create/Edit Library page is displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that Create/Edit Library page is displayed","Failed"
End If @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("name")_;_script infofile_;_ZIP::ssf51.xml_;_
Browser("Browser").Page("Page").WebEdit("name").Set "Pro/ENGINEER" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("name")_;_script infofile_;_ZIP::ssf135.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("description").Set "Pro/ENGINEER Course" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("description")_;_script infofile_;_ZIP::ssf136.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Add Learning Items").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Add Learning Items")_;_script infofile_;_ZIP::ssf137.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("language").Select "All" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("language")_;_script infofile_;_ZIP::ssf138.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("type").Select "All" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("type")_;_script infofile_;_ZIP::ssf139.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Go").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Go")_;_script infofile_;_ZIP::ssf140.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("selectedItems_3").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("selectedItems 3")_;_script infofile_;_ZIP::ssf198.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("selectedItems_4").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("selectedItems 4")_;_script infofile_;_ZIP::ssf199.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Submit").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Submit")_;_script infofile_;_ZIP::ssf142.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebButton("Save").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("Save")_;_script infofile_;_ZIP::ssf143.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_3080428_;_script infofile_;_ZIP::ssf144.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Create New Library").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create New Library")_;_script infofile_;_ZIP::ssf145.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("name").Set "Pro/Intralink" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("name")_;_script infofile_;_ZIP::ssf146.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("description").Set "Pro/Intralink Course" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("description")_;_script infofile_;_ZIP::ssf147.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Add Learning Items").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Add Learning Items")_;_script infofile_;_ZIP::ssf148.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("language").Select "All" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("language")_;_script infofile_;_ZIP::ssf149.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("type").Select "All" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("type")_;_script infofile_;_ZIP::ssf150.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Go").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Go")_;_script infofile_;_ZIP::ssf151.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("selectedItems_2").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("selectedItems 2")_;_script infofile_;_ZIP::ssf179.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Submit").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Submit")_;_script infofile_;_ZIP::ssf153.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebButton("Save").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("Save")_;_script infofile_;_ZIP::ssf154.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_3277036_;_script infofile_;_ZIP::ssf155.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Create New Library").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create New Library")_;_script infofile_;_ZIP::ssf156.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("name").Set "Arbortext" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("name")_;_script infofile_;_ZIP::ssf157.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("description").Set "Arbortext Course" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("description")_;_script infofile_;_ZIP::ssf158.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Add Learning Items").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Add Learning Items")_;_script infofile_;_ZIP::ssf159.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("language").Select "All" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("language")_;_script infofile_;_ZIP::ssf160.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("type").Select "All" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("type")_;_script infofile_;_ZIP::ssf161.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Go").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Go")_;_script infofile_;_ZIP::ssf162.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("selectedItems_5").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("selectedItems 5")_;_script infofile_;_ZIP::ssf200.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("selectedItems").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("selectedItems")_;_script infofile_;_ZIP::ssf201.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("selectedItems_6").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("selectedItems 6")_;_script infofile_;_ZIP::ssf202.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Submit").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Submit")_;_script infofile_;_ZIP::ssf164.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebButton("Save").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("Save")_;_script infofile_;_ZIP::ssf166.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_3539180_;_script infofile_;_ZIP::ssf167.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Push_2").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Push 2")_;_script infofile_;_ZIP::ssf168.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Push_5").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Push 5")_;_script infofile_;_ZIP::ssf169.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Push_6").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Push 6")_;_script infofile_;_ZIP::ssf170.xml_;_
wait(5)
If Browser("Browser").Page("Page").Check (CheckPoint("Libraries_2")) then
	Reporter.ReportEvent micPass,"Verifying that Libraries page is displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that Libraries page is displayed","Failed"
End If

'Create Order & Push @@ hightlight id_;_Browser("Browser").Page("Page").Link("Orders")_;_script infofile_;_ZIP::ssf63.xml_;_
Browser("Browser").Page("Page").Link("Orders").Click
If Browser("Browser").Page("Page").Check (CheckPoint("Orders")) then
	Reporter.ReportEvent micPass,"Verifying that Orders page is displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that Orders page is displayed","Failed"
End If @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create New Order")_;_script infofile_;_ZIP::ssf65.xml_;_
Browser("Browser").Page("Page").Link("Create New Order").Click
If Browser("Browser").Page("Page").Check (CheckPoint("Create/Edit Order")) then
	Reporter.ReportEvent micPass,"Verifying that Create/Edit Order page is displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that Create/Edit Order page is displayed","Failed"
End If @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("customerInput:customerNumber")_;_script infofile_;_ZIP::ssf67.xml_;_
Browser("Browser").Page("Page").WebEdit("customerInput:customerNumber").Set "341" @@ hightlight id_;_Browser("Browser").Page("Page").Link("Select")_;_script infofile_;_ZIP::ssf68.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Select").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("contactEmailId")_;_script infofile_;_ZIP::ssf69.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("contactEmailId").Set "rkishore@ptc.com" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("salesOrderNumber")_;_script infofile_;_ZIP::ssf70.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("salesOrderNumber").Set "1" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("notes")_;_script infofile_;_ZIP::ssf71.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("notes").Set "Created by rkishore" @@ hightlight id_;_Browser("Browser").Page("Page").Link("Add New License")_;_script infofile_;_ZIP::ssf72.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Add New License").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("selectLibraryGroup")_;_script infofile_;_ZIP::ssf73.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("WebCheckBox_2").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("WebCheckBox 2")_;_script infofile_;_ZIP::ssf186.xml_;_
Wait(5) @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("selectLibraryGroup 4")_;_script infofile_;_ZIP::ssf183.xml_;_
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("isLinkLibraries").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("isLinkLibraries")_;_script infofile_;_ZIP::ssf184.xml_;_
Wait(5) @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Next")_;_script infofile_;_ZIP::ssf74.xml_;_
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Next").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Next")_;_script infofile_;_ZIP::ssf185.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebEdit("usersTextBox").Set "1000" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("licenseTypeDropDown")_;_script infofile_;_ZIP::ssf76.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("licenseTypeDropDown").Select "Perpetual" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("supportDropDown")_;_script infofile_;_ZIP::ssf77.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("supportDropDown").Select "No" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Submit 2")_;_script infofile_;_ZIP::ssf78.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Submit_2").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("Submit")_;_script infofile_;_ZIP::ssf79.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebButton("Submit").Click @@ hightlight id_;_2753852_;_script infofile_;_ZIP::ssf80.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf81.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Push Order").Click @@ hightlight id_;_3343382_;_script infofile_;_ZIP::ssf83.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Dialog("Microsoft Internet Explorer").WinButton("OK").Click
wait(5)
If Browser("Browser").Page("Page").Check (CheckPoint("Orders_2")) then
	Reporter.ReportEvent micPass,"Verifying that Orders page is displayed","Passed"
else
	Reporter.ReportEvent micFail,"Verifying that Orders page is displayed","Failed"
End If @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf81.xml_;_

'Logout & Close Browser
Browser("Browser").Page("Page").Link("Logout").Click @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf85.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Close

Reporter.ReportEvent 2, "Script ENDS","Logout"
