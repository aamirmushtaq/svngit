'File Name: sc_TC4_Licen_Enf_In_FT&LISU_After_Lib_Update
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
'  Date Started Creation: 08/05/2008
'  Date Ended Creation: 08/05/2008
'  Functions Included: fOpenApplication(),CloseAllBrowsersExceptQC(),Login()
'  History of Changes: 
'--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  1
' Description           :   Log into IPA https://fusion-qa.ptc.com/dailyifa/app/pages/Login/   with <prof_pt_co3_usr_0200@ptcunoemail.com> and password <prof7763>.
' Expected Result  : Login should be successfull and should display Welcome page.
Reporter.ReportEvent 2, "STEP 1 BEGINS",""

Reporter.ReportEvent micDone, "Open the application", "Close all the browsers and Open the application"
rc=OpenApplication("", blnRet) 'Opening a new browser
If  blnRet = false Then
 	ExitAction(0)
End If
Reporter.ReportEvent micDone, "Login into  the application", "Login into the application with username:" & sLoginID
Browser("Browser").Page("Page").Login  "prof_pt_co3_usr_0200@ptcunoemail.com", "prof7763" , blnRet
If  blnRet = false Then
ExitAction(0)
End If
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Fusion Administration") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf5.xml_;_

Reporter.ReportEvent 2, "STEP 1 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  2
' Description           :   Goto the Libraries link in the Organiizing content section
' Expected Result  : User Should see all the Libraries available in the system.
Reporter.ReportEvent 2, "STEP 2 BEGINS",""

Browser("Browser").Page("Page").Link("Libraries").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Libraries")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Libraries") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf7.xml_;_

Reporter.ReportEvent 2, "STEP 2 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  3
' Description           :   Edit the Library by clicking on the edit Option from the Actions column.of the Lib 1
' Expected Result  : Edit Library page should open for Lib 1
Reporter.ReportEvent 2, "STEP 3 BEGINS",""

Browser("Browser").Page("Page").WebElement("LIB 1").Check CheckPoint("LIB 1") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("LIB 1")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Edit").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Edit")_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Create/Edit Library") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf15.xml_;_

Reporter.ReportEvent 2, "STEP 3 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  4
' Description           :   Change title from Lib 1 to Lib 4 and delete the course (Advanced Assemblies) from the Library.
' Expected Result  : As expected, Lib 4 title should be created and course (Advanced Assemblies) from the Library should be delected.
Reporter.ReportEvent 2, "STEP 4 BEGINS",""

Browser("Browser").Page("Page").WebEdit("name").Set "LIB 4" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("name")_;_script infofile_;_ZIP::ssf16.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebCheckBox("removeSelectedform:libraryItem").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").WebCheckBox("removeSelectedform:libraryItem")_;_script infofile_;_ZIP::ssf17.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Link("Remove Selected").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Remove Selected")_;_script infofile_;_ZIP::ssf19.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Create/Edit Library_2") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf18.xml_;_

Reporter.ReportEvent 2, "STEP 4 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  5
' Description           :   Save & Push the Updated Library file into PLMS.
' Expected Result  : Save should save the Library and with status as Pending , clicking on push should push the edited library to PLMS.
Reporter.ReportEvent 2, "STEP 5 BEGINS",""

Browser("Browser").Page("Page").WebButton("Save").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("Save")_;_script infofile_;_ZIP::ssf20.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_2230610_;_script infofile_;_ZIP::ssf21.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebElement("LIB 4").Check CheckPoint("LIB 4") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("LIB 4")_;_script infofile_;_ZIP::ssf22.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebElement("Pending").Check CheckPoint("Pending") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("Pending")_;_script infofile_;_ZIP::ssf23.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Link("Push").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Push")_;_script infofile_;_ZIP::ssf24.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").WebElement("Active").Check CheckPoint("Active") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("Active")_;_script infofile_;_ZIP::ssf25.xml_;_

Reporter.ReportEvent 2, "STEP 5 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  6
' Description           :   Log into https://fusion-qa.ptc.com/dailyhosted/app/pages/Login/  Username : prof_pt_co3_usr_0206@ptcunoemail.com Password : prof7763
' Expected Result  : Login should be successfull for the user
Reporter.ReportEvent 2, "STEP 6 BEGINS",""

Reporter.ReportEvent micDone, "Open the application", "Close all the browsers and Open the application"
rc=OpenApplication("http://i2361.ptcnet.ptc.com/automationhosted/", blnRet) 'Opening a new browser
If  blnRet = false Then
 	ExitAction(0)
End If
Reporter.ReportEvent micDone, "Login into  the application", "Login into the application with username:" & sLoginID
Browser("Browser").Page("Page").Login  "prof_pt_co3_usr_0206@ptcunoemail.com", "prof7763" , blnRet
If  blnRet = false Then
ExitAction(0)
End If
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Welcome to Precision LMS") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf12.xml_;_

Reporter.ReportEvent 2, "STEP 6 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  7
' Description           :   Goto Administartion page  , and Click on View & Assign Licenses link then verify the Library Lib 4 is avaliable.
' Expected Result  : Library  Lib 4 should be avaliable in PLMS.
Reporter.ReportEvent 2, "STEP 7 BEGINS",""

Browser("Browser").Page("Page").Link("Administration").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Administration")_;_script infofile_;_ZIP::ssf26.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("View & Assign Licenses").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("View & Assign Licenses")_;_script infofile_;_ZIP::ssf27.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("View & Assign Licenses") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf28.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebElement("LIB 4").Check CheckPoint("LIB 4_2") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("LIB 4")_;_script infofile_;_ZIP::ssf29.xml_;_
Browser("Browser").Page("Page").Sync

Reporter.ReportEvent 2, "STEP 7 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  8
' Description           :   Click on Find Training Tab.
' Expected Result  : Find Training page should have 3 Tabs called, Search (By default),Browse All Training & Advanced Search.
Reporter.ReportEvent 2, "STEP 8 BEGINS",""

Browser("Browser").Page("Page").Link("Find Training").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Find Training")_;_script infofile_;_ZIP::ssf30.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Search").Check CheckPoint("Search") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Search")_;_script infofile_;_ZIP::ssf31.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Browse all Training").Check CheckPoint("Browse all Training") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Browse all Training")_;_script infofile_;_ZIP::ssf32.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Advanced Search").Check CheckPoint("Advanced Search") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Advanced Search")_;_script infofile_;_ZIP::ssf33.xml_;_
Browser("Browser").Page("Page").Sync

Reporter.ReportEvent 2, "STEP 8 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  9
' Description           :   Search with the Keyword (Advanced Assemblies) in Search or Advanced Search tab of FT.
' Expected Result  : As expected,Advanced Assemblies should not come in the results table and message should be No Results Found.
Reporter.ReportEvent 2, "STEP 9 BEGINS",""
 @@ hightlight id_;_Browser("Browser").Page("Page").Link("Search")_;_script infofile_;_ZIP::ssf34.xml_;_
Browser("Browser").Page("Page").Link("Advanced Search").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Advanced Search")_;_script infofile_;_ZIP::ssf37.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("tabs:panel:andField").Set "Advanced Assemblies" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("tabs:panel:andField")_;_script infofile_;_ZIP::ssf38.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Link("Search_2").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Search 2")_;_script infofile_;_ZIP::ssf39.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebElement("No Results Found").Check CheckPoint("No Results Found") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("No Results Found")_;_script infofile_;_ZIP::ssf40.xml_;_
Browser("Browser").Page("Page").Sync

Reporter.ReportEvent 2, "STEP 9 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  10
' Description           :   Click on Administration tab.
' Expected Result  : Adminstration page should be displayed.
Reporter.ReportEvent 2, "STEP 10 BEGINS",""

Browser("Browser").Page("Page").Link("Administration").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Administration")_;_script infofile_;_ZIP::ssf26.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Precision LMS : Administration") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf41.xml_;_
Browser("Browser").Page("Page").Sync

Reporter.ReportEvent 2, "STEP 10 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  11
' Description           :   Click on Select Learning link from  Assign Learning wizard Step-2
' Expected Result  : LISU should display with tabs Search, Browse All Training & Advanced search
Reporter.ReportEvent 2, "STEP 11 BEGINS",""

Browser("Browser").Page("Page").Link("Assign Learning").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Assign Learning")_;_script infofile_;_ZIP::ssf42.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Next >").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Next >")_;_script infofile_;_ZIP::ssf43.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Link("Select Learning").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Select Learning")_;_script infofile_;_ZIP::ssf44.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Check CheckPoint("modal-dialog-pagemap") @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap")_;_script infofile_;_ZIP::ssf45.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search").Check CheckPoint("Search_2") @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search")_;_script infofile_;_ZIP::ssf46.xml_;_
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Browse all Training").Check CheckPoint("Browse all Training_2") @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Browse all Training")_;_script infofile_;_ZIP::ssf47.xml_;_
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Advanced Search").Check CheckPoint("Advanced Search_2") @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Advanced Search")_;_script infofile_;_ZIP::ssf48.xml_;_

Reporter.ReportEvent 2, "STEP 11 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  12
' Description           :   Search with the Keyword (Advanced Assemblies) in Search or Advanced Search tab of FT.
' Expected Result  : As expected,Advanced Assemblies should not come in the results table and message should be No Results Found.
Reporter.ReportEvent 2, "STEP 12 BEGINS",""

Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Advanced Search").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Advanced Search")_;_script infofile_;_ZIP::ssf49.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebEdit("tabs:panel:andField").Set "Advanced Assemblies" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebEdit("tabs:panel:andField")_;_script infofile_;_ZIP::ssf50.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search_2").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search 2")_;_script infofile_;_ZIP::ssf51.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebElement("No Results Found").Check CheckPoint("No Results Found_2") @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebElement("No Results Found")_;_script infofile_;_ZIP::ssf52.xml_;_
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Cancel").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Cancel")_;_script infofile_;_ZIP::ssf53.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Link("Administration").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Administration")_;_script infofile_;_ZIP::ssf54.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_8455386_;_script infofile_;_ZIP::ssf55.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Link("Log Out").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Log Out")_;_script infofile_;_ZIP::ssf56.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf57.xml_;_
Browser("Browser").Close

Reporter.ReportEvent 2, "STEP 12 ENDS","SCRIPT ENDS"
'--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
