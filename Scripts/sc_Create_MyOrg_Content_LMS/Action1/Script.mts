'File Name: sc_Create_MyOrg_Content_LMS

'  File Type:  Test Script
'  Data-Driven: No
'  Data-Driven Stand Alone: No 
'  Data-Script Called By:   None
'  Data-Script Calls:  None

'  AUT Created For:  Precision R2.0
'  AUT Version Test Created In:R2.0
'  Web Browser & Version Created For:
'  OS System Created For:  Windows 2K, Windows XP 
'
'  Purpose:  script 's created  for  Precision to validate the UI
'  Pre-Requisite Testcases:None

'  Author:  Ravi Kishore
'  Date Started Creation: 17/02/2011
'  Date Ended Creation: 17/02/2011
'  Functions Included: fOpenApplication(),CloseAllBrowsersExceptQC(),Login()
'  History of Changes: 
'--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
'--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Description           :   Log into "https://precisionlms.ptc.com" Username : prof_verify_manager@ptcunoemail.com Password : "prof7763"
' Expected Result  : Log in should be successfull for the user
Reporter.ReportEvent 2, "Test Case BEGINS",""

Reporter.ReportEvent micDone, "Open the application", "Close all the browsers and Open the application"
rc=OpenApplication("http://i4836.ptcnet.ptc.com/plms", blnRet) 'Opening a new browser
If  blnRet = false Then
 	ExitAction(0)
End If
Reporter.ReportEvent micDone, "Login into  the application", "Login into the application with username:" & sLoginID
Browser("Browser").Page("Page").Login  "prof_verify_manager@ptcunoemail.com", "prof7763" , blnRet
If  blnRet = false Then
ExitAction(0)
End If
Browser("Browser").Page("Page").Sync
Wait(10)
Browser("Browser").Page("Page").Link("Administration").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Administration")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Manage Courses & Assessments").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Manage Courses & Assessments")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Create Course").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create Course")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Start by selecting content").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Start by selecting content")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search")_;_script infofile_;_ZIP::ssf9.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("radioGroup").Select "#0" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("radioGroup")_;_script infofile_;_ZIP::ssf21.xml_;_
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Choose Topics").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Choose Topics")_;_script infofile_;_ZIP::ssf10.xml_;_
Wait(10)
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").Page("Course Viewer").Sync
Browser("Course Viewer").Page("Course Viewer").Link("Select All").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Select All")_;_script infofile_;_ZIP::ssf11.xml_;_
Wait(10)
Browser("Course Viewer").Page("Course Viewer").Link("Add").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Add")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("titleContainer:tabs:panel:titl").Set "(My Org) Windchill PDMLink 9.0 - Application Orientation" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("titleContainer:tabs:panel:titl")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Licensing").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Licensing")_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebList("titleContainer:tabs:panel:libr").Select "PTC Test Org Custom Library" @@ hightlight id_;_Browser("Browser").Page("Page").WebList("titleContainer:tabs:panel:libr")_;_script infofile_;_ZIP::ssf15.xml_;_
Browser("Browser").Page("Page").Link("Save & Close").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Save & Close")_;_script infofile_;_ZIP::ssf16.xml_;_
Browser("Browser").Page("Page").Sync
Wait(10)
Browser("Browser").Page("Page").Image("options-active").Click @@ hightlight id_;_Browser("Browser").Page("Page").Image("options-active")_;_script infofile_;_ZIP::ssf17.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("stateChoiceGroup").Select "#1" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("stateChoiceGroup")_;_script infofile_;_ZIP::ssf18.xml_;_
Wait(20)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Save").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Save")_;_script infofile_;_ZIP::ssf19.xml_;_
Wait(10)
Browser("Browser").Dialog("Windows Internet Explorer").WinButton("OK").Click @@ hightlight id_;_918674_;_script infofile_;_ZIP::ssf20.xml_;_
Browser("Browser").Page("Page").Sync
Wait(10)
'------------------------------
Browser("Browser").Page("Page").Link("Create Course").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create Course")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Start by selecting content").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Start by selecting content")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search")_;_script infofile_;_ZIP::ssf9.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("radioGroup").Select "#1" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("radioGroup")_;_script infofile_;_ZIP::ssf21.xml_;_
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Choose Topics").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Choose Topics")_;_script infofile_;_ZIP::ssf10.xml_;_
Wait(10)
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").Page("Course Viewer").Sync
Browser("Course Viewer").Page("Course Viewer").Link("Select All").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Select All")_;_script infofile_;_ZIP::ssf11.xml_;_
Wait(10)
Browser("Course Viewer").Page("Course Viewer").Link("Add").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Add")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("titleContainer:tabs:panel:titl").Set "(My Org) Windchill PDMLink 9.0/9.1 Business Administration" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("titleContainer:tabs:panel:titl")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Licensing").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Licensing")_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebList("titleContainer:tabs:panel:libr").Select "PTC Test Org Custom Library" @@ hightlight id_;_Browser("Browser").Page("Page").WebList("titleContainer:tabs:panel:libr")_;_script infofile_;_ZIP::ssf15.xml_;_
Browser("Browser").Page("Page").Link("Save & Close").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Save & Close")_;_script infofile_;_ZIP::ssf16.xml_;_
Browser("Browser").Page("Page").Sync
Wait(10)
Browser("Browser").Page("Page").Image("options-active").Click @@ hightlight id_;_Browser("Browser").Page("Page").Image("options-active")_;_script infofile_;_ZIP::ssf17.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("stateChoiceGroup").Select "#1" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("stateChoiceGroup")_;_script infofile_;_ZIP::ssf18.xml_;_
Wait(20)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Save").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Save")_;_script infofile_;_ZIP::ssf19.xml_;_
Wait(10)
Browser("Browser").Dialog("Windows Internet Explorer").WinButton("OK").Click @@ hightlight id_;_918674_;_script infofile_;_ZIP::ssf20.xml_;_
Browser("Browser").Page("Page").Sync
Wait(10)
'------------------------------
Browser("Browser").Page("Page").Link("Create Course").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create Course")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Start by selecting content").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Start by selecting content")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search")_;_script infofile_;_ZIP::ssf9.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("radioGroup").Select "#2" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("radioGroup")_;_script infofile_;_ZIP::ssf21.xml_;_
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Choose Topics").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Choose Topics")_;_script infofile_;_ZIP::ssf10.xml_;_
Wait(10)
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").Page("Course Viewer").Sync
Browser("Course Viewer").Page("Course Viewer").Link("Select All").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Select All")_;_script infofile_;_ZIP::ssf11.xml_;_
Wait(10)
Browser("Course Viewer").Page("Course Viewer").Link("Add").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Add")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("titleContainer:tabs:panel:titl").Set "(My Org) Windchill 9.0/9.1 System Administration" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("titleContainer:tabs:panel:titl")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Licensing").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Licensing")_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebList("titleContainer:tabs:panel:libr").Select "PTC Test Org Custom Library" @@ hightlight id_;_Browser("Browser").Page("Page").WebList("titleContainer:tabs:panel:libr")_;_script infofile_;_ZIP::ssf15.xml_;_
Browser("Browser").Page("Page").Link("Save & Close").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Save & Close")_;_script infofile_;_ZIP::ssf16.xml_;_
Browser("Browser").Page("Page").Sync
Wait(10)
Browser("Browser").Page("Page").Image("options-active").Click @@ hightlight id_;_Browser("Browser").Page("Page").Image("options-active")_;_script infofile_;_ZIP::ssf17.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("stateChoiceGroup").Select "#1" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("stateChoiceGroup")_;_script infofile_;_ZIP::ssf18.xml_;_
Wait(20)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Save").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Save")_;_script infofile_;_ZIP::ssf19.xml_;_
Wait(10)
Browser("Browser").Dialog("Windows Internet Explorer").WinButton("OK").Click @@ hightlight id_;_918674_;_script infofile_;_ZIP::ssf20.xml_;_
Browser("Browser").Page("Page").Sync
Wait(10)
'------------------------------
Browser("Browser").Page("Page").Link("Create Course").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create Course")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Start by selecting content").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Start by selecting content")_;_script infofile_;_ZIP::ssf8.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("tabs:panel:filterPanel:languag").Select "French" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("tabs:panel:filterPanel:languag")_;_script infofile_;_ZIP::ssf23.xml_;_
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search")_;_script infofile_;_ZIP::ssf9.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("radioGroup").Select "#0" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("radioGroup")_;_script infofile_;_ZIP::ssf21.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Choose Topics").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Choose Topics")_;_script infofile_;_ZIP::ssf10.xml_;_
Wait(10)
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").Page("Course Viewer").Sync
Browser("Course Viewer").Page("Course Viewer").Link("Select All").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Select All")_;_script infofile_;_ZIP::ssf11.xml_;_
Wait(10)
Browser("Course Viewer").Page("Course Viewer").Link("Add").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Add")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("titleContainer:tabs:panel:titl").Set "(My Org) Windchill PDMLink 9.0 - Orientation de l'application" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("titleContainer:tabs:panel:titl")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Licensing").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Licensing")_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebList("titleContainer:tabs:panel:libr").Select "PTC Test Org Custom Library" @@ hightlight id_;_Browser("Browser").Page("Page").WebList("titleContainer:tabs:panel:libr")_;_script infofile_;_ZIP::ssf15.xml_;_
Browser("Browser").Page("Page").Link("Save & Close").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Save & Close")_;_script infofile_;_ZIP::ssf16.xml_;_
Browser("Browser").Page("Page").Sync
Wait(10)
Browser("Browser").Page("Page").Image("options-active").Click @@ hightlight id_;_Browser("Browser").Page("Page").Image("options-active")_;_script infofile_;_ZIP::ssf17.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("stateChoiceGroup").Select "#1" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("stateChoiceGroup")_;_script infofile_;_ZIP::ssf18.xml_;_
Wait(20)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Save").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Save")_;_script infofile_;_ZIP::ssf19.xml_;_
Wait(10)
Browser("Browser").Dialog("Windows Internet Explorer").WinButton("OK").Click @@ hightlight id_;_918674_;_script infofile_;_ZIP::ssf20.xml_;_
Browser("Browser").Page("Page").Sync
Wait(10)
'------------------------------
Browser("Browser").Page("Page").Link("Create Course").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create Course")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Start by selecting content").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Start by selecting content")_;_script infofile_;_ZIP::ssf8.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("tabs:panel:filterPanel:languag").Select "French" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("tabs:panel:filterPanel:languag")_;_script infofile_;_ZIP::ssf23.xml_;_
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search")_;_script infofile_;_ZIP::ssf9.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("radioGroup").Select "#1" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("radioGroup")_;_script infofile_;_ZIP::ssf21.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Choose Topics").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Choose Topics")_;_script infofile_;_ZIP::ssf10.xml_;_
Wait(10)
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").Page("Course Viewer").Sync
Browser("Course Viewer").Page("Course Viewer").Link("Select All").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Select All")_;_script infofile_;_ZIP::ssf11.xml_;_
Wait(10)
Browser("Course Viewer").Page("Course Viewer").Link("Add").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Add")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("titleContainer:tabs:panel:titl").Set "(My Org) Administration de Windchill PDMLink 9.0/9.1" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("titleContainer:tabs:panel:titl")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Licensing").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Licensing")_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebList("titleContainer:tabs:panel:libr").Select "PTC Test Org Custom Library" @@ hightlight id_;_Browser("Browser").Page("Page").WebList("titleContainer:tabs:panel:libr")_;_script infofile_;_ZIP::ssf15.xml_;_
Browser("Browser").Page("Page").Link("Save & Close").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Save & Close")_;_script infofile_;_ZIP::ssf16.xml_;_
Browser("Browser").Page("Page").Sync
Wait(10)
Browser("Browser").Page("Page").Image("options-active").Click @@ hightlight id_;_Browser("Browser").Page("Page").Image("options-active")_;_script infofile_;_ZIP::ssf17.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("stateChoiceGroup").Select "#1" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("stateChoiceGroup")_;_script infofile_;_ZIP::ssf18.xml_;_
Wait(20)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Save").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Save")_;_script infofile_;_ZIP::ssf19.xml_;_
Wait(10)
Browser("Browser").Dialog("Windows Internet Explorer").WinButton("OK").Click @@ hightlight id_;_918674_;_script infofile_;_ZIP::ssf20.xml_;_
Browser("Browser").Page("Page").Sync
Wait(10)
'------------------------------
Browser("Browser").Page("Page").Link("Create Course").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create Course")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Start by selecting content").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Start by selecting content")_;_script infofile_;_ZIP::ssf8.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("tabs:panel:filterPanel:languag").Select "German" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("tabs:panel:filterPanel:languag")_;_script infofile_;_ZIP::ssf23.xml_;_
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search")_;_script infofile_;_ZIP::ssf9.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("radioGroup").Select "#0" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("radioGroup")_;_script infofile_;_ZIP::ssf21.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Choose Topics").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Choose Topics")_;_script infofile_;_ZIP::ssf10.xml_;_
Wait(10)
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").Page("Course Viewer").Sync
Browser("Course Viewer").Page("Course Viewer").Link("Select All").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Select All")_;_script infofile_;_ZIP::ssf11.xml_;_
Wait(10)
Browser("Course Viewer").Page("Course Viewer").Link("Add").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Add")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("titleContainer:tabs:panel:titl").Set "(My Org) Windchill PDMLink 9.0 - Geschäftsadministration" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("titleContainer:tabs:panel:titl")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Licensing").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Licensing")_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebList("titleContainer:tabs:panel:libr").Select "PTC Test Org Custom Library" @@ hightlight id_;_Browser("Browser").Page("Page").WebList("titleContainer:tabs:panel:libr")_;_script infofile_;_ZIP::ssf15.xml_;_
Browser("Browser").Page("Page").Link("Save & Close").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Save & Close")_;_script infofile_;_ZIP::ssf16.xml_;_
Browser("Browser").Page("Page").Sync
Wait(10)
Browser("Browser").Page("Page").Image("options-active").Click @@ hightlight id_;_Browser("Browser").Page("Page").Image("options-active")_;_script infofile_;_ZIP::ssf17.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("stateChoiceGroup").Select "#1" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("stateChoiceGroup")_;_script infofile_;_ZIP::ssf18.xml_;_
Wait(20)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Save").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Save")_;_script infofile_;_ZIP::ssf19.xml_;_
Wait(10)
Browser("Browser").Dialog("Windows Internet Explorer").WinButton("OK").Click @@ hightlight id_;_918674_;_script infofile_;_ZIP::ssf20.xml_;_
Browser("Browser").Page("Page").Sync
Wait(10)
'------------------------------
Browser("Browser").Page("Page").Link("Create Course").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create Course")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Start by selecting content").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Start by selecting content")_;_script infofile_;_ZIP::ssf8.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("tabs:panel:filterPanel:languag").Select "Japanese" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("tabs:panel:filterPanel:languag")_;_script infofile_;_ZIP::ssf23.xml_;_
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search")_;_script infofile_;_ZIP::ssf9.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("radioGroup").Select "#0" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("radioGroup")_;_script infofile_;_ZIP::ssf21.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Choose Topics").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Choose Topics")_;_script infofile_;_ZIP::ssf10.xml_;_
Wait(10)
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").Page("Course Viewer").Sync
Browser("Course Viewer").Page("Course Viewer").Link("Select All").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Select All")_;_script infofile_;_ZIP::ssf11.xml_;_
Wait(10)
Browser("Course Viewer").Page("Course Viewer").Link("Add").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Add")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("titleContainer:tabs:panel:titl").Set "(My Org) Windchill PDMLink 9.0/9.1 - ビジネス管理" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("titleContainer:tabs:panel:titl")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Licensing").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Licensing")_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebList("titleContainer:tabs:panel:libr").Select "PTC Test Org Custom Library" @@ hightlight id_;_Browser("Browser").Page("Page").WebList("titleContainer:tabs:panel:libr")_;_script infofile_;_ZIP::ssf15.xml_;_
Browser("Browser").Page("Page").Link("Save & Close").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Save & Close")_;_script infofile_;_ZIP::ssf16.xml_;_
Browser("Browser").Page("Page").Sync
Wait(10)
Browser("Browser").Page("Page").Image("options-active").Click @@ hightlight id_;_Browser("Browser").Page("Page").Image("options-active")_;_script infofile_;_ZIP::ssf17.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("stateChoiceGroup").Select "#1" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("stateChoiceGroup")_;_script infofile_;_ZIP::ssf18.xml_;_
Wait(20)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Save").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Save")_;_script infofile_;_ZIP::ssf19.xml_;_
Wait(10)
Browser("Browser").Dialog("Windows Internet Explorer").WinButton("OK").Click @@ hightlight id_;_918674_;_script infofile_;_ZIP::ssf20.xml_;_
Browser("Browser").Page("Page").Sync
Wait(10)
'------------------------------
Browser("Browser").Page("Page").Link("Create Course").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create Course")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Start by selecting content").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Start by selecting content")_;_script infofile_;_ZIP::ssf8.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("tabs:panel:filterPanel:languag").Select "Simplified Chinese" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("tabs:panel:filterPanel:languag")_;_script infofile_;_ZIP::ssf23.xml_;_
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search")_;_script infofile_;_ZIP::ssf9.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("radioGroup").Select "#0" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("radioGroup")_;_script infofile_;_ZIP::ssf21.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Choose Topics").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Choose Topics")_;_script infofile_;_ZIP::ssf10.xml_;_
Wait(10)
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").Page("Course Viewer").Sync
Browser("Course Viewer").Page("Course Viewer").Link("Select All").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Select All")_;_script infofile_;_ZIP::ssf11.xml_;_
Wait(10)
Browser("Course Viewer").Page("Course Viewer").Link("Add").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Add")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("titleContainer:tabs:panel:titl").Set "(My Org) Windchill PDMLink 9.0/9.1 业务管理" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("titleContainer:tabs:panel:titl")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Licensing").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Licensing")_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebList("titleContainer:tabs:panel:libr").Select "PTC Test Org Custom Library" @@ hightlight id_;_Browser("Browser").Page("Page").WebList("titleContainer:tabs:panel:libr")_;_script infofile_;_ZIP::ssf15.xml_;_
Browser("Browser").Page("Page").Link("Save & Close").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Save & Close")_;_script infofile_;_ZIP::ssf16.xml_;_
Browser("Browser").Page("Page").Sync
Wait(10)
Browser("Browser").Page("Page").Image("options-active").Click @@ hightlight id_;_Browser("Browser").Page("Page").Image("options-active")_;_script infofile_;_ZIP::ssf17.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("stateChoiceGroup").Select "#1" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("stateChoiceGroup")_;_script infofile_;_ZIP::ssf18.xml_;_
Wait(20)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Save").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Save")_;_script infofile_;_ZIP::ssf19.xml_;_
Wait(10)
Browser("Browser").Dialog("Windows Internet Explorer").WinButton("OK").Click @@ hightlight id_;_918674_;_script infofile_;_ZIP::ssf20.xml_;_
Browser("Browser").Page("Page").Sync
Wait(10)
'------------------------------
Browser("Browser").Page("Page").Link("Create Course").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create Course")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Start by selecting content").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Start by selecting content")_;_script infofile_;_ZIP::ssf8.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("tabs:panel:filterPanel:languag").Select "Traditional Chinese" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("tabs:panel:filterPanel:languag")_;_script infofile_;_ZIP::ssf23.xml_;_
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search")_;_script infofile_;_ZIP::ssf9.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("radioGroup").Select "#0" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("radioGroup")_;_script infofile_;_ZIP::ssf21.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Choose Topics").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Choose Topics")_;_script infofile_;_ZIP::ssf10.xml_;_
Wait(10)
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").Page("Course Viewer").Sync
Browser("Course Viewer").Page("Course Viewer").Link("Select All").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Select All")_;_script infofile_;_ZIP::ssf11.xml_;_
Wait(10)
Browser("Course Viewer").Page("Course Viewer").Link("Add").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Add")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("titleContainer:tabs:panel:titl").Set "(My Org) Windchill PDMLink 9.0 - 應用程式的介紹及說明" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("titleContainer:tabs:panel:titl")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Licensing").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Licensing")_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebList("titleContainer:tabs:panel:libr").Select "PTC Test Org Custom Library" @@ hightlight id_;_Browser("Browser").Page("Page").WebList("titleContainer:tabs:panel:libr")_;_script infofile_;_ZIP::ssf15.xml_;_
Browser("Browser").Page("Page").Link("Save & Close").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Save & Close")_;_script infofile_;_ZIP::ssf16.xml_;_
Browser("Browser").Page("Page").Sync
Wait(10)
Browser("Browser").Page("Page").Image("options-active").Click @@ hightlight id_;_Browser("Browser").Page("Page").Image("options-active")_;_script infofile_;_ZIP::ssf17.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("stateChoiceGroup").Select "#1" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("stateChoiceGroup")_;_script infofile_;_ZIP::ssf18.xml_;_
Wait(20)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Save").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Save")_;_script infofile_;_ZIP::ssf19.xml_;_
Wait(10)
Browser("Browser").Dialog("Windows Internet Explorer").WinButton("OK").Click @@ hightlight id_;_918674_;_script infofile_;_ZIP::ssf20.xml_;_
Browser("Browser").Page("Page").Sync
Wait(10)
'------------------------------
Browser("Browser").Page("Page").Link("Create Course").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create Course")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Start by selecting content").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Start by selecting content")_;_script infofile_;_ZIP::ssf8.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("tabs:panel:filterPanel:languag").Select "Italian" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("tabs:panel:filterPanel:languag")_;_script infofile_;_ZIP::ssf23.xml_;_
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search")_;_script infofile_;_ZIP::ssf9.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("radioGroup").Select "#0" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("radioGroup")_;_script infofile_;_ZIP::ssf21.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Choose Topics").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Choose Topics")_;_script infofile_;_ZIP::ssf10.xml_;_
Wait(10)
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").Page("Course Viewer").Sync
Browser("Course Viewer").Page("Course Viewer").Link("Select All").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Select All")_;_script infofile_;_ZIP::ssf11.xml_;_
Wait(10)
Browser("Course Viewer").Page("Course Viewer").Link("Add").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Add")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("titleContainer:tabs:panel:titl").Set "(My Org) Windchill PDMLink 9.0 - Cenni preliminari sull'applicazione" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("titleContainer:tabs:panel:titl")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Licensing").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Licensing")_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebList("titleContainer:tabs:panel:libr").Select "PTC Test Org Custom Library" @@ hightlight id_;_Browser("Browser").Page("Page").WebList("titleContainer:tabs:panel:libr")_;_script infofile_;_ZIP::ssf15.xml_;_
Browser("Browser").Page("Page").Link("Save & Close").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Save & Close")_;_script infofile_;_ZIP::ssf16.xml_;_
Browser("Browser").Page("Page").Sync
Wait(10)
Browser("Browser").Page("Page").Image("options-active").Click @@ hightlight id_;_Browser("Browser").Page("Page").Image("options-active")_;_script infofile_;_ZIP::ssf17.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("stateChoiceGroup").Select "#1" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("stateChoiceGroup")_;_script infofile_;_ZIP::ssf18.xml_;_
Wait(20)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Save").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Save")_;_script infofile_;_ZIP::ssf19.xml_;_
Wait(10)
Browser("Browser").Dialog("Windows Internet Explorer").WinButton("OK").Click @@ hightlight id_;_918674_;_script infofile_;_ZIP::ssf20.xml_;_
Browser("Browser").Page("Page").Sync
Wait(10)
'------------------------------
Browser("Browser").Page("Page").Link("Create Course").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create Course")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Start by selecting content").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Start by selecting content")_;_script infofile_;_ZIP::ssf8.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("tabs:panel:filterPanel:languag").Select "Korean" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("tabs:panel:filterPanel:languag")_;_script infofile_;_ZIP::ssf23.xml_;_
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search")_;_script infofile_;_ZIP::ssf9.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("radioGroup").Select "#0" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("radioGroup")_;_script infofile_;_ZIP::ssf21.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Choose Topics").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Choose Topics")_;_script infofile_;_ZIP::ssf10.xml_;_
Wait(10)
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").Page("Course Viewer").Sync
Browser("Course Viewer").Page("Course Viewer").Link("Select All").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Select All")_;_script infofile_;_ZIP::ssf11.xml_;_
Wait(10)
Browser("Course Viewer").Page("Course Viewer").Link("Add").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Add")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("titleContainer:tabs:panel:titl").Set "(My Org) Windchill PDMLink 9.0 - Application Orientation" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("titleContainer:tabs:panel:titl")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Licensing").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Licensing")_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebList("titleContainer:tabs:panel:libr").Select "PTC Test Org Custom Library" @@ hightlight id_;_Browser("Browser").Page("Page").WebList("titleContainer:tabs:panel:libr")_;_script infofile_;_ZIP::ssf15.xml_;_
Browser("Browser").Page("Page").Link("Save & Close").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Save & Close")_;_script infofile_;_ZIP::ssf16.xml_;_
Browser("Browser").Page("Page").Sync
Wait(10)
Browser("Browser").Page("Page").Image("options-active").Click @@ hightlight id_;_Browser("Browser").Page("Page").Image("options-active")_;_script infofile_;_ZIP::ssf17.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("stateChoiceGroup").Select "#1" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("stateChoiceGroup")_;_script infofile_;_ZIP::ssf18.xml_;_
Wait(20)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Save").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Save")_;_script infofile_;_ZIP::ssf19.xml_;_
Wait(10)
Browser("Browser").Dialog("Windows Internet Explorer").WinButton("OK").Click @@ hightlight id_;_918674_;_script infofile_;_ZIP::ssf20.xml_;_
Browser("Browser").Page("Page").Sync
Wait(10)
'------------------------------
Browser("Browser").Page("Page").Link("Create Course").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create Course")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Start by selecting content").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Start by selecting content")_;_script infofile_;_ZIP::ssf8.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("tabs:panel:filterPanel:languag").Select "English" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("tabs:panel:filterPanel:languag")_;_script infofile_;_ZIP::ssf23.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("tabs:panel:filterPanel:content").Select "PTC Custom" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("tabs:panel:filterPanel:content")_;_script infofile_;_ZIP::ssf25.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search")_;_script infofile_;_ZIP::ssf9.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("radioGroup").Select "#0" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("radioGroup")_;_script infofile_;_ZIP::ssf21.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Choose Topics").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Choose Topics")_;_script infofile_;_ZIP::ssf10.xml_;_
Wait(10)
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").Page("Course Viewer").Sync
Browser("Course Viewer").Page("Course Viewer").Link("Select All").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Select All")_;_script infofile_;_ZIP::ssf11.xml_;_
Wait(10)
Browser("Course Viewer").Page("Course Viewer").Link("Add").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Add")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("titleContainer:tabs:panel:titl").Set "(My Org) PACCAR - Windchill PDMLink for Pro/E User" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("titleContainer:tabs:panel:titl")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Licensing").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Licensing")_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebList("titleContainer:tabs:panel:libr").Select "PTC Test Org Custom Library" @@ hightlight id_;_Browser("Browser").Page("Page").WebList("titleContainer:tabs:panel:libr")_;_script infofile_;_ZIP::ssf15.xml_;_
Browser("Browser").Page("Page").Link("Save & Close").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Save & Close")_;_script infofile_;_ZIP::ssf16.xml_;_
Browser("Browser").Page("Page").Sync
Wait(10)
Browser("Browser").Page("Page").Image("options-active").Click @@ hightlight id_;_Browser("Browser").Page("Page").Image("options-active")_;_script infofile_;_ZIP::ssf17.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("stateChoiceGroup").Select "#1" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("stateChoiceGroup")_;_script infofile_;_ZIP::ssf18.xml_;_
Wait(20)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Save").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Save")_;_script infofile_;_ZIP::ssf19.xml_;_
Wait(10)
Browser("Browser").Dialog("Windows Internet Explorer").WinButton("OK").Click @@ hightlight id_;_918674_;_script infofile_;_ZIP::ssf20.xml_;_
Browser("Browser").Page("Page").Sync
Wait(10)
'------------------------------
Browser("Browser").Page("Page").Link("Create Assessment").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create Assessment")_;_script infofile_;_ZIP::ssf27.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Start by selecting content").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Start by selecting content")_;_script infofile_;_ZIP::ssf8.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search")_;_script infofile_;_ZIP::ssf9.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Choose Questions").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Choose Questions")_;_script infofile_;_ZIP::ssf30.xml_;_
Wait(10)
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").Page("Course Viewer").Sync
Browser("Course Viewer").Page("Course Viewer").Link("Select All").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Select All")_;_script infofile_;_ZIP::ssf11.xml_;_
Wait(10)
Browser("Course Viewer").Page("Course Viewer").Link("Add and Close").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Add and Close")_;_script infofile_;_ZIP::ssf32.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("rightHandPane:tabs:panel:title").Set "(My Org) Screening - 2nd Interview (Pro/ENGINEER Wildfire 3.0)" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("rightHandPane:tabs:panel:title")_;_script infofile_;_ZIP::ssf40.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Licensing").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Licensing")_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebList("rightHandPane:tabs:panel:libra").Select "PTC Test Org Custom Library" @@ hightlight id_;_Browser("Browser").Page("Page").WebList("rightHandPane:tabs:panel:libra")_;_script infofile_;_ZIP::ssf34.xml_;_
Browser("Browser").Page("Page").Link("Save & Close").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Save & Close")_;_script infofile_;_ZIP::ssf16.xml_;_
Browser("Browser").Page("Page").Sync
Wait(10)
Browser("Browser").Page("Page").Image("options-active").Click @@ hightlight id_;_Browser("Browser").Page("Page").Image("options-active")_;_script infofile_;_ZIP::ssf17.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("stateChoiceGroup").Select "#1" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("stateChoiceGroup")_;_script infofile_;_ZIP::ssf18.xml_;_
Wait(20)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Save").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Save")_;_script infofile_;_ZIP::ssf19.xml_;_
Wait(10)
Browser("Browser").Dialog("Windows Internet Explorer").WinButton("OK").Click @@ hightlight id_;_918674_;_script infofile_;_ZIP::ssf20.xml_;_
Browser("Browser").Page("Page").Sync
Wait(10)
Browser("Browser").Page("Page").Link("Log Out").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Log Out")_;_script infofile_;_ZIP::ssf42.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf43.xml_;_
Browser("Browser").CloseAllTabs
Reporter.ReportEvent 2, "Test Case ENDS",""
'----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------






