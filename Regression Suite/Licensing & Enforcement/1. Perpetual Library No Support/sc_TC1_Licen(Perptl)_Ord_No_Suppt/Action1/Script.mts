'File Name: sc_TC1_Licen(Perptl)_Ord_No_Suppt
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
'  Date Started Creation: 25/04/2008
'  Date Ended Creation: 28/04/2008
'  Functions Included: fOpenApplication(),CloseAllBrowsersExceptQC(),Login()
'  History of Changes: 
'--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  1
' Description           :   Log into https://fusion-qa.ptc.com/dailyifa/app/pages/Login/ as user  " admin" and with PW " n10suf"
' Expected Result  : Log in should be successfull for the user and should disply home Page
Reporter.ReportEvent 2, "STEP 1 BEGINS",""

Reporter.ReportEvent micDone, "Open the application", "Close all the browsers and Open the application"
rc=OpenApplication("", blnRet) 'Opening a new browser
If  blnRet = false Then
 	ExitAction(0)
End If
Reporter.ReportEvent micDone, "Login into  the application", "Login into the application with username:" & sLoginID
Browser("Browser").Page("Page").Login  "", "" , blnRet
If  blnRet = false Then
		ExitAction(0)
End If
Browser("Browser").Page("Page").Check CheckPoint("Fusion Administration")

Reporter.ReportEvent 2, "STEP 1 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  2
' Description           :   Create User prof_pt_co3_usr_0200@ptcunoemail.com from Manage Users section with Role as Content,Order,& Account Admin.
' Expected Result  : User Should get created successfully.
Reporter.ReportEvent 2, "STEP 2 BEGINS",""

Browser("Browser").Page("Page").Link("Manage Users").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Manage Users")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Browser").Page("Page").Link("Add New User").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Add New User")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Browser").Page("Page").WebEdit("email").Set "prof_pt_co3_usr_0200@ptcunoemail.com"
Browser("Browser").Page("Page").WebCheckBox("rolesCheckGroup").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").WebCheckBox("rolesCheckGroup")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("Browser").Page("Page").WebCheckBox("rolesCheckGroup_2").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").WebCheckBox("rolesCheckGroup 2")_;_script infofile_;_ZIP::ssf10.xml_;_
Browser("Browser").Page("Page").WebCheckBox("rolesCheckGroup_3").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").WebCheckBox("rolesCheckGroup 3")_;_script infofile_;_ZIP::ssf11.xml_;_
Browser("Browser").Page("Page").WebButton("Submit").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("Submit")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("Browser").Page("Page").WebElement("prof_pt_co3_usr_0200 prof_pt_c").Check CheckPoint("prof_pt_co3_usr_0200 prof_pt_co3_usr_0200") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("prof pt co3 usr 0200 prof pt c")_;_script infofile_;_ZIP::ssf195.xml_;_

Reporter.ReportEvent 2, "STEP 2 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  3
' Description           :   Log out from IPA
' Expected Result  : User should return back to Login Page
Reporter.ReportEvent 2, "STEP 3 BEGINS",""

Browser("Browser").Page("Page").Link("Logout").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Logout")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Browser").Page("Page").Check CheckPoint("com.ptc.fusion.admin.web.pages.Login.title") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf196.xml_;_

Reporter.ReportEvent 2, "STEP 3 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  4
' Description           :   Log into https://fusion-qa.ptc.com/dailyifa/app/pages/Login/ as user  "prof_pt_co3_usr_0200@ptcunoemail.com" and with PW " prof7763"
' Expected Result  : Log in should be successfull for the user and should disply home Page
Reporter.ReportEvent 2, "STEP 4 BEGINS",""

Reporter.ReportEvent micDone, "Login into  the application", "Login into the application with username:" & sLoginID
Browser("Browser").Page("Page").Login  "prof_pt_co3_usr_0200@ptcunoemail.com", "4815b7d631838b2e65ed72ada5bf33983bc49dd114f4" , blnRet
If  blnRet = false Then
		ExitAction(0)
End If
Browser("Browser").Page("Page").Check CheckPoint("Fusion Administration_2") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf17.xml_;_

Reporter.ReportEvent 2, "STEP 4 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  5
' Description           :   Create a new Organization with the Name PTC with Customer Number as 341.
' Expected Result  : Organization with title as PTC should get Created.
Reporter.ReportEvent 2, "STEP 5 BEGINS",""

Browser("Browser").Page("Page").Link("Organizations").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Organizations")_;_script infofile_;_ZIP::ssf18.xml_;_
Browser("Browser").Page("Page").Check CheckPoint("Organizations") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf19.xml_;_
Browser("Browser").Page("Page").Link("Create New Organization").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create New Organization")_;_script infofile_;_ZIP::ssf20.xml_;_
Browser("Browser").Page("Page").WebEdit("organizationName").Set "PTC" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("organizationName")_;_script infofile_;_ZIP::ssf21.xml_;_
Browser("Browser").Page("Page").WebEdit("organizationDesc").Set "Created by rkishore" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("organizationDesc")_;_script infofile_;_ZIP::ssf22.xml_;_
Browser("Browser").Page("Page").Sync
Wait(10)
Browser("Browser").Page("Page").WebEdit("customerNumber").Set "341" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("customerNumber")_;_script infofile_;_ZIP::ssf41.xml_;_
Browser("Browser").Page("Page").Link("Add").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Add")_;_script infofile_;_ZIP::ssf42.xml_;_
Browser("Browser").Page("Page").Sync
Wait(10)
Browser("Browser").Page("Page").WebButton("Save Organization").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("Save Organization")_;_script infofile_;_ZIP::ssf48.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Show all Organizations").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Show all Organizations")_;_script infofile_;_ZIP::ssf356.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebElement("PTC").Check CheckPoint("PTC Org") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("PTC")_;_script infofile_;_ZIP::ssf198.xml_;_

Reporter.ReportEvent 2, "STEP 5 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  6
' Description           :   Package and Push some Pro/F,saba & Coach courses into IPA.
'                                     1. CheckPoint - Pro/INTRALINK Administrator Training (3.2) - Profile ID 75  English(Pro/F)
'                                     2. Precision LMS Only Grading Questions  - Profile ID 3402  English (Pro/F)
'                                    3. Creating Geometry from Surfaces and Curves using Pro/ENGINEER Wildfire 3.0  - TRN-1862 - English  (SABA)
'                                    4. Advanced Assemblies - English (Coach Course)
'                                    5. Arbortext 5.2 - Arbortext Editor - Creating Tables - English (Caoch Course)
' Expected Result  : All the Learning Items should get packaged and Pushed successfully.
Reporter.ReportEvent 2, "STEP 6 BEGINS",""

'Package & Push Coach
Browser("Browser").Page("Page").Link("Coach").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Coach")_;_script infofile_;_ZIP::ssf50.xml_;_
Browser("Browser").Page("Page").Link("Refresh Available Courses").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Refresh Available Courses")_;_script infofile_;_ZIP::ssf51.xml_;_
Wait(15)
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Manage Users")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Browser").Page("Page").Link("Push").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Push")_;_script infofile_;_ZIP::ssf52.xml_;_
Wait(300)
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Manage Users")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Browser").Page("Page").Link("Push_2").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Push 2")_;_script infofile_;_ZIP::ssf53.xml_;_
Wait(300)
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Manage Users")_;_script infofile_;_ZIP::ssf6.xml_;_
'Package & Push ProF
Browser("Browser").Page("Page").Link("Pro/FICIENCY").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Pro/FICIENCY")_;_script infofile_;_ZIP::ssf54.xml_;_
Browser("Browser").Page("Page").Link("Reload Import File").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Reload Import File")_;_script infofile_;_ZIP::ssf55.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Manage Users")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Browser").Page("Page").Link("Push_3").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Push 3")_;_script infofile_;_ZIP::ssf56.xml_;_
Wait(60)
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Manage Users")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Browser").Page("Page").Link("Pro/FICIENCY").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Pro/FICIENCY")_;_script infofile_;_ZIP::ssf57.xml_;_
Browser("Browser").Page("Page").Link("Push").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Push")_;_script infofile_;_ZIP::ssf58.xml_;_
Wait(60)
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Manage Users")_;_script infofile_;_ZIP::ssf6.xml_;_
'Package & Push WBTs
Browser("Browser").Page("Page").Link("Saba").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Saba")_;_script infofile_;_ZIP::ssf59.xml_;_
Browser("Browser").Page("Page").Link("Reload Import File").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Reload Import File")_;_script infofile_;_ZIP::ssf60.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Manage Users")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Browser").Page("Page").Link("Push_4").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Push 4")_;_script infofile_;_ZIP::ssf61.xml_;_
Wait(600)
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Manage Users")_;_script infofile_;_ZIP::ssf6.xml_;_

Reporter.ReportEvent 2, "STEP 6 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  7
' Description           :   Create a New Libraries with Titles as Lib1 , Lib2 & Lib3 by using the Libraries option from the Organizing Content section.
'                                      Note : Lib1 should contain - 
'                                     1. Advanced Assemblies - English (Coach Course)
'                                     2. Arbortext 5.2 - Arbortext Editor - Creating Tables - English (Caoch Course)
'
'                                    Lib2 Should contain - 
'                                   1. CheckPoint - Pro/INTRALINK Administrator Training (3.2) - Profile ID 75  English(Pro/F)
'                                   2. Precision LMS Only Grading Questions  - Profile ID 3402  English (Pro/F)
'
'                                   Lib3 should contain
'                                   1. Creating Geometry from Surfaces and Curves using Pro/ENGINEER Wildfire 3.0  - TRN-1862 - English  (SABA)
' Expected Result  : Libraries should get Created with same Titles and Learning Items
Reporter.ReportEvent 2, "STEP 7 BEGINS",""

Browser("Browser").Page("Page").Link("Libraries").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Libraries")_;_script infofile_;_ZIP::ssf199.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Create New Library").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create New Library")_;_script infofile_;_ZIP::ssf200.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("name").Set "LIB 1" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("name")_;_script infofile_;_ZIP::ssf201.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("description").Set "Created by rkishore" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("description")_;_script infofile_;_ZIP::ssf202.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Add Learning Items").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Add Learning Items")_;_script infofile_;_ZIP::ssf203.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("language").Select "All" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("language")_;_script infofile_;_ZIP::ssf204.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Go").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Go")_;_script infofile_;_ZIP::ssf205.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("selectedItems").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("selectedItems")_;_script infofile_;_ZIP::ssf206.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("selectedItems_2").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("selectedItems 2")_;_script infofile_;_ZIP::ssf207.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Submit").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Submit")_;_script infofile_;_ZIP::ssf208.xml_;_
Wait(5)
Browser("Browser").Page("Page").WebButton("Save").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("Save")_;_script infofile_;_ZIP::ssf209.xml_;_
Wait(5)
Browser("Browser").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_4784960_;_script infofile_;_ZIP::ssf210.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Create New Library").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create New Library")_;_script infofile_;_ZIP::ssf211.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("name").Set "LIB 2" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("name")_;_script infofile_;_ZIP::ssf212.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("description").Set "Created by rkishore" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("description")_;_script infofile_;_ZIP::ssf213.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Add Learning Items").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Add Learning Items")_;_script infofile_;_ZIP::ssf214.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("language").Select "All" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("language")_;_script infofile_;_ZIP::ssf215.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("type").Select "All" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("type")_;_script infofile_;_ZIP::ssf216.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Go").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Go")_;_script infofile_;_ZIP::ssf217.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("selectedItems_3").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("selectedItems 3")_;_script infofile_;_ZIP::ssf218.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("selectedItems_4").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("selectedItems 4")_;_script infofile_;_ZIP::ssf219.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Submit").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Submit")_;_script infofile_;_ZIP::ssf220.xml_;_
Wait(5)
Browser("Browser").Page("Page").WebButton("Save").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("Save")_;_script infofile_;_ZIP::ssf221.xml_;_
Wait(5)
Browser("Browser").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_4981568_;_script infofile_;_ZIP::ssf222.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Create New Library").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create New Library")_;_script infofile_;_ZIP::ssf223.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("name").Set "LIB 3" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("name")_;_script infofile_;_ZIP::ssf224.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("description").Set "Created by rkishore" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("description")_;_script infofile_;_ZIP::ssf225.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Add Learning Items").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Add Learning Items")_;_script infofile_;_ZIP::ssf226.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("language").Select "All" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("language")_;_script infofile_;_ZIP::ssf227.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Go").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Go")_;_script infofile_;_ZIP::ssf228.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("selectedItems_3").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("selectedItems 3")_;_script infofile_;_ZIP::ssf229.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Submit").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Submit")_;_script infofile_;_ZIP::ssf230.xml_;_
Wait(5)
Browser("Browser").Page("Page").WebButton("Save").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("Save")_;_script infofile_;_ZIP::ssf231.xml_;_
Wait(5)
Browser("Browser").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_5178176_;_script infofile_;_ZIP::ssf232.xml_;_
Wait(5)
Browser("Browser").Page("Page").Check CheckPoint("Libraries_2") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf233.xml_;_

Reporter.ReportEvent 2, "STEP 7 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  8
' Description           :   Verify the link Orders in the Order Administaration tab
' Expected Result  : Link should be present and should be functional
Reporter.ReportEvent 2, "STEP 8 BEGINS",""
 @@ hightlight id_;_Browser("Browser").Page("Page").Link("Libraries")_;_script infofile_;_ZIP::ssf62.xml_;_
Browser("Browser").Page("Page").Link("Orders").Check CheckPoint("Orders_3") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Orders")_;_script infofile_;_ZIP::ssf234.xml_;_
Browser("Browser").Page("Page").Sync

Reporter.ReportEvent 2, "STEP 8 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  9
' Description           :   Click on the link Orders 
' Expected Result  : On Clicking, it should navigate to Order Management page,page should be labelled as Orders and should have message area with the message 
'                                    "This page shows all orders in the system." and should contain link.Create New Order
Reporter.ReportEvent 2, "STEP 9 BEGINS",""

Browser("Browser").Page("Page").Link("Orders").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Orders")_;_script infofile_;_ZIP::ssf235.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Orders_4") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf236.xml_;_
Browser("Browser").Page("Page").WebElement("This page shows all orders").Check CheckPoint("This page shows all orders in the system.") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("This page shows all orders")_;_script infofile_;_ZIP::ssf237.xml_;_
Browser("Browser").Page("Page").Link("Create New Order").Check CheckPoint("Create New Order") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create New Order")_;_script infofile_;_ZIP::ssf238.xml_;_

Reporter.ReportEvent 2, "STEP 9 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  10-15
' Description           :   Enter all the fields marked with * at the top of the table Licenses
'                                      1.Select customer Number as 
'                                     2.Customer Email - 
'                                     3 Sales Order Number - 
'                                     4. Order Date -
'                                    Click on Add New Licenses button/Link soecified at the top of the table
'                                     Select Libraries Lib1 & Lib2 , and select the  option  "Link these libraries into a single license"
'                                     Select Next  after selecting the libraries from the select Libraries light box
'                                     Specify the License details as Number Of Users ,License Type, Support 
'                                     Click on Submit after entering the data into all mandatory fields
' Expected Result  : All fields should be entered with proper data and should be validated.
'                                   1.Select customer Number as  - 341
'                                  2.Customer Email - prof_pt_co3_usr_0200@ptcunoemail.com
'                                 3 Sales Order Number -  any +ve Integer
'                                 4. Order Date - Leave it with default value.
'                                 Upon clicking,Select Libraries light box should be populated with the list of available Libraries
'                                  Libraries should get selected as Linked Libraries.
'                                 Upon selecting Ok > selecting this should close the lightbox and open a new lightbox with the next page title "specify License Details"
'                                 All the License Details should set as mentioned below,Number Of Users =10,License Type = Perpetual,Support  = No
'                                 Upon Selecting Submit this will close the lightbox and return the specified details to the Licenses table in the main window (the Create Order page).
'                                  The License Details defined in this step will be applied to all Libraries selected on the previous page.
Reporter.ReportEvent 2, "STEP 10 -15 BEGINS",""
 @@ hightlight id_;_1051066_;_script infofile_;_ZIP::ssf108.xml_;_
Browser("Browser").Page("Page").Link("Create New Order").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create New Order")_;_script infofile_;_ZIP::ssf239.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("customerInput:customerNumber").Set "341" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("customerInput:customerNumber")_;_script infofile_;_ZIP::ssf240.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Select").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Select")_;_script infofile_;_ZIP::ssf241.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("contactEmailId").Set "prof_pt_co3_usr_0200@ptcunoemail.com" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("contactEmailId")_;_script infofile_;_ZIP::ssf242.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("salesOrderNumber").Set "1" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("salesOrderNumber")_;_script infofile_;_ZIP::ssf243.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("notes").Set "Created by rkishore" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("notes")_;_script infofile_;_ZIP::ssf244.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Add New License").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Add New License")_;_script infofile_;_ZIP::ssf245.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Check CheckPoint("modal-dialog-pagemap") @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap")_;_script infofile_;_ZIP::ssf246.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("selectLibraryGroup").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("selectLibraryGroup")_;_script infofile_;_ZIP::ssf247.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("selectLibraryGroup_2").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("selectLibraryGroup 2")_;_script infofile_;_ZIP::ssf248.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("isLinkLibraries").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("isLinkLibraries")_;_script infofile_;_ZIP::ssf249.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Next").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Next")_;_script infofile_;_ZIP::ssf250.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebEdit("usersTextBox").Set "10" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebEdit("usersTextBox")_;_script infofile_;_ZIP::ssf251.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("licenseTypeDropDown").Select "Perpetual" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("licenseTypeDropDown")_;_script infofile_;_ZIP::ssf252.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("supportDropDown").Select "No" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("supportDropDown")_;_script infofile_;_ZIP::ssf253.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Submit_2").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Submit 2")_;_script infofile_;_ZIP::ssf254.xml_;_
Wait(10)
Browser("Browser").Page("Page").WebButton("Submit").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("Submit")_;_script infofile_;_ZIP::ssf255.xml_;_
Browser("Browser").Page("Page").Sync
'Wait(10)
'Browser("Browser").Dialog("Microsoft Internet Explorer").Activate @@ hightlight id_;_7799668_;_script infofile_;_ZIP::ssf279.xml_;_
'Browser("Browser").Dialog("Microsoft Internet Explorer").Static("Changes to any existing").Check CheckPoint("Changes to any existing license will be applied to latest version of that license. Are you sure you are ready to submit this order?") @@ hightlight id_;_5702770_;_script infofile_;_ZIP::ssf257.xml_;_
Wait(5)
Browser("Browser").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_4588500_;_script infofile_;_ZIP::ssf258.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Check CheckPoint("Orders_5") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf259.xml_;_
Browser("Browser").Page("Page").Sync

Reporter.ReportEvent 2, "STEP 10 - 15 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  16 - 19
' Description           :   Repeat the steps 11- 15 but select library as Lib3
'                                       Verify the Licenses table , in the Create Order page
'                                       Click on Submit button after entering the details in all the mandatory fields.
'                                        Clcik on OK in the confirmation page.
' Expected Result  :11-15 steps should be perfomred for creating Perpetual License to Lib3
'                                     The Libraries and Licenses selected/spefied should reflect in  the Licences table
'                                      When the user clicks submit, they should recieve a confirmation page with message "Chnages to Any existing license will be applied to latest version of the License.Are you sure you are ready to submit this order?" and two simple buttons OK and Cancel
'                                       Note : Once an order is submitted, the user will have a much more limited set of things which they can edit. This will be implemented in a separate story.
'                                       On Clicking OK, user should save the Order and should show the same in the Orders page.
Reporter.ReportEvent 2, "STEP 16 - 19 BEGINS",""

Browser("Browser").Page("Page").Link("Create New Order").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create New Order")_;_script infofile_;_ZIP::ssf260.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("customerInput:customerNumber").Set "341" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("customerInput:customerNumber")_;_script infofile_;_ZIP::ssf261.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Select").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Select")_;_script infofile_;_ZIP::ssf262.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("contactEmailId").Set "prof_pt_co3_usr_0200@ptcunoemail.com" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("contactEmailId")_;_script infofile_;_ZIP::ssf266.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("salesOrderNumber").Set "1" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("salesOrderNumber")_;_script infofile_;_ZIP::ssf264.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("notes").Set "created by rkishore" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("notes")_;_script infofile_;_ZIP::ssf265.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Add New License").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Add New License")_;_script infofile_;_ZIP::ssf267.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Check CheckPoint("modal-dialog-pagemap_2") @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap")_;_script infofile_;_ZIP::ssf268.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("selectLibraryGroup_3").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("selectLibraryGroup 3")_;_script infofile_;_ZIP::ssf269.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Next").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Next")_;_script infofile_;_ZIP::ssf270.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebEdit("usersTextBox").Set "10" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebEdit("usersTextBox")_;_script infofile_;_ZIP::ssf271.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("licenseTypeDropDown").Select "Perpetual" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("licenseTypeDropDown")_;_script infofile_;_ZIP::ssf272.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("supportDropDown").Select "No" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("supportDropDown")_;_script infofile_;_ZIP::ssf273.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Submit_2").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Submit 2")_;_script infofile_;_ZIP::ssf274.xml_;_
Wait(10)
Browser("Browser").Page("Page").WebButton("Submit").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("Submit")_;_script infofile_;_ZIP::ssf275.xml_;_
Browser("Browser").Page("Page").Sync
Wait(10)
Browser("Browser").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_5440468_;_script infofile_;_ZIP::ssf276.xml_;_
Browser("Browser").Page("Page").Sync
Wait(10)
Browser("Browser").Page("Page").Check CheckPoint("Orders_6") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf277.xml_;_
Browser("Browser").Page("Page").Sync
 @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("userId")_;_script infofile_;_ZIP::ssf112.xml_;_
Reporter.ReportEvent 2, "STEP 16 - 19 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  20
' Description           :   Click on Push Order from the Actions Column of the Order.
' Expected Result  : Push Order should certainly push the order and also the Libraries associated with the Library, and status should change to Pushed
Reporter.ReportEvent 2, "STEP 20 BEGINS",""
 @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("userId")_;_script infofile_;_ZIP::ssf112.xml_;_
Browser("Browser").Page("Page").Link("Push Order_2").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Push Order 2")_;_script infofile_;_ZIP::ssf278.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_5833684_;_script infofile_;_ZIP::ssf281.xml_;_
Wait(5)
Browser("Browser").Page("Page").Link("Push Order_3").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Push Order 2")_;_script infofile_;_ZIP::ssf278.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_5833684_;_script infofile_;_ZIP::ssf281.xml_;_
Wait(5)
Browser("Browser").Page("Page").Check CheckPoint("Orders_7") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf284.xml_;_

Reporter.ReportEvent 2, "STEP 20 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  21
' Description           :   Log in to Precision LMS with the Customer contact "prof_pt_co3_usr_0200@ptcunoemail.com and Password as <prof7763>
' Expected Result  : Log in should be successfull for the User.
Reporter.ReportEvent 2, "STEP 21 BEGINS",""

Browser("Browser").Page("Page").Link("Logout").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Logout")_;_script infofile_;_ZIP::ssf285.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf286.xml_;_
Browser("Browser").Close
'SystemUtil.Run "iexplore.exe","","","open"
'Browser("Browser").Page("Page").Sync
'Browser("Browser").Navigate "http://i2361.ptcnet.ptc.com/automationhosted/" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("userId")_;_script infofile_;_ZIP::ssf288.xml_;_
'Browser("Browser").Page("Page").WebEdit("userId").Set "prof_pt_co3_usr_0200@ptcunoemail.com" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("password")_;_script infofile_;_ZIP::ssf289.xml_;_
'Browser("Browser").Page("Page").WebEdit("password").SetSecure "481f39219a4f1b332a268cc889eb143a4b2d5635f180" @@ hightlight id_;_Browser("Browser").Page("Page").Link("Login")_;_script infofile_;_ZIP::ssf290.xml_;_
'Browser("Browser").Page("Page").Link("Login").Click @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf291.xml_;_
Reporter.ReportEvent micDone, "Open the application", "Close all the browsers and Open the application"
rc=OpenApplication("http://i2361.ptcnet.ptc.com/automationhosted/", blnRet) 'Opening a new browser
If  blnRet = false Then
 	ExitAction(0)
End If
Reporter.ReportEvent micDone, "Login into  the application", "Login into the application with username:" & sLoginID
Browser("Browser").Page("Page").Login  "prof_pt_co3_usr_0200@ptcunoemail.com", "prof7763" , blnRet
If  blnRet = false Then
ExitAction(0)
End If
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Welcome to Precision LMS_3")

Reporter.ReportEvent 2, "STEP 21 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  22
' Description           :   Verify the Licenses are displying into the License Management Page.
' Expected Result  : License Management page should be displayed with the 2 Licenses created.One for the Linked Libraries(Lib1 & Lib2) and One for the Lib3
'                                     Note : Make sure that the available Licenses should be 10 , as what given during the Order Creation.
Reporter.ReportEvent 2, "STEP 22 BEGINS",""
 @@ hightlight id_;_Browser("Browser").Page("Page").Link("Logout")_;_script infofile_;_ZIP::ssf285.xml_;_
Browser("Browser").Page("Page").Link("Administration").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Administration")_;_script infofile_;_ZIP::ssf292.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("View & Assign Licenses").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("View & Assign Licenses")_;_script infofile_;_ZIP::ssf293.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("View & Assign Licenses_3") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf294.xml_;_
Browser("Browser").Page("Page").Sync

Reporter.ReportEvent 2, "STEP 22 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  23
' Description           :   Create 10 Users under the "prof_pt_co3_usr_0200@ptcunoemail.com" with 5 as Admin and 5 as User Privilages.
'                                       Note : Make sure that following users get created under the customer contact from prof_pt_co3_usr_0201@ptcunoemail.com to prof_pt_co3_usr_0205@ptcunoemail.com (Users)
'                                       prof_pt_co3_usr_0206@ptcunoemail.com to prof_pt_co3_usr_0210@ptcunoemail.com (Admin)
' Expected Result  : Users should get created with  Admin & User privilages and should be displayed in Manage Users page.
Reporter.ReportEvent 2, "STEP 23 BEGINS",""
 @@ hightlight id_;_Browser("Browser").Page("Page").Link("Logout")_;_script infofile_;_ZIP::ssf285.xml_;_
Browser("Browser").Page("Page").Link("Administration").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Administration")_;_script infofile_;_ZIP::ssf296.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Manage Users").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Manage Users")_;_script infofile_;_ZIP::ssf297.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Create New User").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create New User")_;_script infofile_;_ZIP::ssf298.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebRadioGroup("view:radioGroup").Select "#0" @@ script infofile_;_ZIP::ssf299.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("view:radioGroup:createSingleUs").Set "prof_pt_co3_usr_0201@ptcunoemail.com" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("view:radioGroup:createSingleUs")_;_script infofile_;_ZIP::ssf300.xml_;_
Wait(5)
Browser("Browser").Page("Page").Link("Add To List").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Add To List")_;_script infofile_;_ZIP::ssf301.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").WebEdit("view:radioGroup:createSingleUs").Set "prof_pt_co3_usr_0202@ptcunoemail.com" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("view:radioGroup:createSingleUs")_;_script infofile_;_ZIP::ssf302.xml_;_
Wait(5)
Browser("Browser").Page("Page").Link("Add To List").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Add To List")_;_script infofile_;_ZIP::ssf303.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").WebEdit("view:radioGroup:createSingleUs").Set "prof_pt_co3_usr_0203@ptcunoemail.com" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("view:radioGroup:createSingleUs")_;_script infofile_;_ZIP::ssf304.xml_;_
Wait(5)
Browser("Browser").Page("Page").Link("Add To List").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Add To List")_;_script infofile_;_ZIP::ssf305.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").WebEdit("view:radioGroup:createSingleUs").Set "prof_pt_co3_usr_0204@ptcunoemail.com" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("view:radioGroup:createSingleUs")_;_script infofile_;_ZIP::ssf306.xml_;_
Wait(5)
Browser("Browser").Page("Page").Link("Add To List").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Add To List")_;_script infofile_;_ZIP::ssf307.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").WebEdit("view:radioGroup:createSingleUs").Set "prof_pt_co3_usr_0205@ptcunoemail.com" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("view:radioGroup:createSingleUs")_;_script infofile_;_ZIP::ssf308.xml_;_
Wait(5)
Browser("Browser").Page("Page").Link("Add To List").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Add To List")_;_script infofile_;_ZIP::ssf309.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").WebEdit("view:radioGroup:createSingleUs").Set "prof_pt_co3_usr_0206@ptcunoemail.com" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("view:radioGroup:createSingleUs")_;_script infofile_;_ZIP::ssf310.xml_;_
Wait(5)
Browser("Browser").Page("Page").Link("Add To List").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Add To List")_;_script infofile_;_ZIP::ssf311.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").WebEdit("view:radioGroup:createSingleUs").Set "prof_pt_co3_usr_0207@ptcunoemail.com" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("view:radioGroup:createSingleUs")_;_script infofile_;_ZIP::ssf312.xml_;_
Wait(5)
Browser("Browser").Page("Page").Link("Add To List").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Add To List")_;_script infofile_;_ZIP::ssf313.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").WebEdit("view:radioGroup:createSingleUs").Set "prof_pt_co3_usr_0208@ptcunoemail.com" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("view:radioGroup:createSingleUs")_;_script infofile_;_ZIP::ssf314.xml_;_
Wait(5)
Browser("Browser").Page("Page").Link("Add To List").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Add To List")_;_script infofile_;_ZIP::ssf315.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").WebEdit("view:radioGroup:createSingleUs").Set "prof_pt_co3_usr_0209@ptcunoemail.com" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("view:radioGroup:createSingleUs")_;_script infofile_;_ZIP::ssf316.xml_;_
Wait(5)
Browser("Browser").Page("Page").Link("Add To List").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Add To List")_;_script infofile_;_ZIP::ssf317.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").WebEdit("view:radioGroup:createSingleUs").Set "prof_pt_co3_usr_0210@ptcunoemail.com" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("view:radioGroup:createSingleUs")_;_script infofile_;_ZIP::ssf318.xml_;_
Wait(5)
Browser("Browser").Page("Page").Link("Add To List").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Add To List")_;_script infofile_;_ZIP::ssf319.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Link("Next >").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Next >")_;_script infofile_;_ZIP::ssf320.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Link("Edit Table").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Edit Table")_;_script infofile_;_ZIP::ssf321.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").WebCheckBox("view:form:usergroup").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").WebCheckBox("view:form:usergroup")_;_script infofile_;_ZIP::ssf322.xml_;_
Wait(5)
Browser("Browser").Page("Page").WebCheckBox("view:form:usergroup_2").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").WebCheckBox("view:form:usergroup 2")_;_script infofile_;_ZIP::ssf323.xml_;_
Wait(5)
Browser("Browser").Page("Page").WebCheckBox("view:form:usergroup_3").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").WebCheckBox("view:form:usergroup 3")_;_script infofile_;_ZIP::ssf324.xml_;_
Wait(5)
Browser("Browser").Page("Page").WebCheckBox("view:form:usergroup_4").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").WebCheckBox("view:form:usergroup 4")_;_script infofile_;_ZIP::ssf325.xml_;_
Wait(5)
Browser("Browser").Page("Page").WebCheckBox("view:form:usergroup_5").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").WebCheckBox("view:form:usergroup 5")_;_script infofile_;_ZIP::ssf326.xml_;_
Wait(5)
Browser("Browser").Page("Page").Link("Bulk Edit").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Bulk Edit")_;_script infofile_;_ZIP::ssf351.xml_;_
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("authrolescheck").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("authrolescheck")_;_script infofile_;_ZIP::ssf327.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("authroles").Select "Admin" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("authroles")_;_script infofile_;_ZIP::ssf328.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("OK").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("OK")_;_script infofile_;_ZIP::ssf329.xml_;_
Wait(5)
Browser("Browser").Page("Page").Link("Next >").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Next >")_;_script infofile_;_ZIP::ssf330.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Link("Next >").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Next >")_;_script infofile_;_ZIP::ssf331.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").WebRadioGroup("view:sendNotificationForm:grou").Select "#1" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("view:sendNotificationForm:grou")_;_script infofile_;_ZIP::ssf332.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Link("Finish").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Finish")_;_script infofile_;_ZIP::ssf333.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Manage Users") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf334.xml_;_

Reporter.ReportEvent 2, "STEP 23 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  24
' Description           :   Assign the License of Linked Libraries  to the Users & Admin.Note : Do not assign the Lib3 License
' Expected Result  : Linked Libraries License should get assigned to the Users & Admins.
Reporter.ReportEvent 2, "STEP 24 BEGINS",""

Browser("Browser").Page("Page").Link("Administration").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Administration")_;_script infofile_;_ZIP::ssf335.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("View & Assign Licenses").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("View & Assign Licenses")_;_script infofile_;_ZIP::ssf336.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("View & Assign Licenses_4") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf337.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Image("assign-active").Click @@ hightlight id_;_Browser("Browser").Page("Page").Image("details-active")_;_script infofile_;_ZIP::ssf338.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Link("Select Users").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Select Users")_;_script infofile_;_ZIP::ssf339.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("WebCheckBox").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("WebCheckBox")_;_script infofile_;_ZIP::ssf340.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("usergroup").Set "OFF" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("usergroup")_;_script infofile_;_ZIP::ssf341.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("OK").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("OK")_;_script infofile_;_ZIP::ssf342.xml_;_
Wait(5)
Browser("Browser").Page("Page").Link("Next >").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Next >")_;_script infofile_;_ZIP::ssf343.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").WebRadioGroup("view:sendNotificationForm:grou").Select "#1" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("view:sendNotificationForm:grou")_;_script infofile_;_ZIP::ssf344.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Link("Finish").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Finish")_;_script infofile_;_ZIP::ssf345.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Image("details-active").Click @@ hightlight id_;_Browser("Browser").Page("Page").Image("details-active")_;_script infofile_;_ZIP::ssf346.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Check CheckPoint("License Deatils_3") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf347.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Link("Back").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Back")_;_script infofile_;_ZIP::ssf348.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Link("Administration").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Administration")_;_script infofile_;_ZIP::ssf349.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf355.xml_;_
Browser("Browser").Page("Page").Link("Log Out").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Log Out")_;_script infofile_;_ZIP::ssf354.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf355.xml_;_
Browser("Browser").Close

Reporter.ReportEvent 2, "STEP 24 ENDS","SCRIPT ENDS"
'---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
