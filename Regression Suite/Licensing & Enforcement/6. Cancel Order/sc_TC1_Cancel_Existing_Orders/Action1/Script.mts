'File Name: sc_TC1_Cancel_Existing_Orders
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
'  Date Started Creation: 14/05/2008
'  Date Ended Creation: 14/05/2008
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
Browser("Browser").Page("Page").Login  "prof_pt_co3_usr_0200@ptcunoemail.com", "prof7763" , blnRet
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
Wait(120)
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Manage Users")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Browser").Page("Page").Link("Push_2").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Push 2")_;_script infofile_;_ZIP::ssf53.xml_;_
Wait(120)
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
Wait(5)
Browser("Browser").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_4588500_;_script infofile_;_ZIP::ssf258.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Check CheckPoint("Orders_5") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf259.xml_;_
Browser("Browser").Page("Page").Sync

Reporter.ReportEvent 2, "STEP 10 - 15 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  16 
' Description           :   Repeat the steps 11- 15 but select library as Lib3
'                                       Verify the Licenses table , in the Create Order page
'                                       Click on Submit button after entering the details in all the mandatory fields.
'                                        Clcik on OK in the confirmation page.
' Expected Result  :11-15 steps should be perfomred for creating Perpetual License to Lib3
'                                     The Libraries and Licenses selected/spefied should reflect in  the Licences table
'                                      When the user clicks submit, they should recieve a confirmation page with message "Chnages to Any existing license will be applied to latest version of the License.Are you sure you are ready to submit this order?" and two simple buttons OK and Cancel
'                                       Note : Once an order is submitted, the user will have a much more limited set of things which they can edit. This will be implemented in a separate story.
'                                       On Clicking OK, user should save the Order and should show the same in the Orders page.
Reporter.ReportEvent 2, "STEP 16 BEGINS",""

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
Reporter.ReportEvent 2, "STEP 16 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  17
' Description           :   Click on Push Order from the Actions Column of the Order.
' Expected Result  : Push Order should certainly push the order and also the Libraries associated with the Library, and status should change to Pushed
Reporter.ReportEvent 2, "STEP 17 BEGINS",""
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

Reporter.ReportEvent 2, "STEP 17 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  18
' Description           :   Log in to Precision LMS with the Customer contact "prof_pt_co3_usr_0200@ptcunoemail.com and Password as <prof7763>
' Expected Result  : Log in should be successfull for the User.
Reporter.ReportEvent 2, "STEP 18 BEGINS",""

Browser("Browser").Page("Page").Link("Logout").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Logout")_;_script infofile_;_ZIP::ssf285.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf286.xml_;_
Browser("Browser").Close
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

Reporter.ReportEvent 2, "STEP 18 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  19
' Description           :   Assign the Licenses to users from License Management page.Note : Make sure some users already present in the organization
' Expected Result  : License should get assigned to the users.Assign the license to the customer contact too.
Reporter.ReportEvent 2, "STEP 19 BEGINS",""

Browser("Browser").Page("Page").Link("Administration").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Administration")_;_script infofile_;_ZIP::ssf292.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("View & Assign Licenses").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("View & Assign Licenses")_;_script infofile_;_ZIP::ssf293.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("View & Assign Licenses_3") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf294.xml_;_
Browser("Browser").Page("Page").Sync
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

Reporter.ReportEvent 2, "STEP 19 ENDS",""
'---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  20
' Description           :   Launch all the courses from the Find Training page.
' Expected Result  : All the Learning items should be Launchable , and each should display in the Current Learning table.
Reporter.ReportEvent 2, "STEP 20 BEGINS",""

Browser("Browser").Page("Page").Link("Find Training").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Find Training")_;_script infofile_;_ZIP::ssf358.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Link("Browse all Training").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Browse all Training")_;_script infofile_;_ZIP::ssf359.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Link("Advanced Assemblies").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Advanced Assemblies")_;_script infofile_;_ZIP::ssf360.xml_;_
Wait(10)
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").SetToProperty "hwnd", value
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5)
Browser("Course Viewer").Page("Course Viewer").Link("Layers").Click @@ hightlight id_;_Browser("Course Viewer : Advanced").Page("Course Viewer : Advanced").Link("Layers")_;_script infofile_;_ZIP::ssf361.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(10)
Browser("Course Viewer").Page("Course Viewer").Link("Adding Relations").Click @@ hightlight id_;_Browser("Course Viewer : Advanced").Page("Course Viewer : Advanced").Link("Adding Relations")_;_script infofile_;_ZIP::ssf362.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(10)
Browser("Course Viewer").Close
Wait(10)
Browser("Browser").Page("Page").Link("Arbortext 5.2 - Arbortext").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Arbortext 5.2 - Arbortext")_;_script infofile_;_ZIP::ssf364.xml_;_
Wait(10)
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").SetToProperty "hwnd", value
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5)
Browser("Course Viewer").Page("Course Viewer").Link("Inserting a New Table").Click @@ hightlight id_;_Browser("Course Viewer : Advanced").Page("Course Viewer : Advanced").Link("Inserting a New Table")_;_script infofile_;_ZIP::ssf365.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(10)
Browser("Course Viewer").Page("Course Viewer").Link("Modifying Cell Format").Click @@ hightlight id_;_Browser("Course Viewer : Advanced").Page("Course Viewer : Advanced")_;_script infofile_;_ZIP::ssf367.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(10)
Browser("Course Viewer").Close @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf368.xml_;_
Wait(10)
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Home")_;_script infofile_;_ZIP::ssf369.xml_;_
Browser("Browser").Page("Page").Link("Home").Click @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf370.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Home")_;_script infofile_;_ZIP::ssf369.xml_;_
Wait(5)
Browser("Browser").Page("Page").Check CheckPoint("Welcome to Precision LMS_4") @@ hightlight id_;_Browser("Browser").Page("Page").WebTable("Customer Number")_;_script infofile_;_ZIP::ssf371.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Home")_;_script infofile_;_ZIP::ssf369.xml_;_
Wait(5)
Browser("Browser").Page("Page").WebTable("Customer Number").Check CheckPoint("Current Learning Table")
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Home")_;_script infofile_;_ZIP::ssf369.xml_;_

Reporter.ReportEvent 2, "STEP 20 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  21
' Description           :   Select Mark Complete from the Actions column of the Current Learning table.
' Expected Result  : Mark Complete should move  the Learning item from Current to Completed Learning table.
Reporter.ReportEvent 2, "STEP 21 BEGINS",""
 @@ hightlight id_;_Browser("Browser").Page("Page").Link("Manage Users")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Browser").Page("Page").Image("mark_complete-active").Click @@ hightlight id_;_Browser("Browser").Page("Page").Image("mark complete-active")_;_script infofile_;_ZIP::ssf372.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Home")_;_script infofile_;_ZIP::ssf369.xml_;_
Wait(5)
Browser("Browser").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_854202_;_script infofile_;_ZIP::ssf373.xml_;_
Wait(5) @@ hightlight id_;_Browser("Browser").Page("Page").Link("Home")_;_script infofile_;_ZIP::ssf369.xml_;_
Browser("Browser").Page("Page").Image("mark_complete-active").Click @@ hightlight id_;_Browser("Browser").Page("Page").Image("mark complete-active")_;_script infofile_;_ZIP::ssf374.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Home")_;_script infofile_;_ZIP::ssf369.xml_;_
Wait(5)
Browser("Browser").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_1706270_;_script infofile_;_ZIP::ssf375.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Home")_;_script infofile_;_ZIP::ssf369.xml_;_
Browser("Browser").Page("Page").Link("Completed Learning").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Completed Learning")_;_script infofile_;_ZIP::ssf376.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Home")_;_script infofile_;_ZIP::ssf369.xml_;_
Wait(5)
Browser("Browser").Page("Page").Check CheckPoint("Welcome to Precision LMS_5") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf377.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Home")_;_script infofile_;_ZIP::ssf369.xml_;_
Wait(5)
Browser("Browser").Page("Page").WebTable("Customer Number").Check CheckPoint("Completed Learning Table") @@ hightlight id_;_Browser("Browser").Page("Page").WebTable("Customer Number")_;_script infofile_;_ZIP::ssf378.xml_;_

Reporter.ReportEvent 2, "STEP 21 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  22
' Description           :   Save some Book marks from the course viewer.
' Expected Result  : Book Marks should get saved and should display in the My Bookmarks list.
Reporter.ReportEvent 2, "STEP 22 BEGINS",""

Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Home")_;_script infofile_;_ZIP::ssf369.xml_;_
Wait(5)
Browser("Browser").Page("Page").Link("Advanced Assemblies").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Advanced Assemblies")_;_script infofile_;_ZIP::ssf379.xml_;_
Wait(5)
Browser("Browser").Page("Page").Link("Review").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Review")_;_script infofile_;_ZIP::ssf394.xml_;_
Wait(10)
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").SetToProperty "hwnd", value
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5)
Browser("Course Viewer").Page("Course Viewer").Link("Feedback").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Feedback")_;_script infofile_;_ZIP::ssf380.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5)
Browser("Course Viewer").Page("Course Viewer").Link("Add Bookmark").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Add Bookmark")_;_script infofile_;_ZIP::ssf381.xml_;_
Wait(5)
Browser("Course Viewer").Page("Course Viewer").Frame("modal-dialog-pagemap").Check CheckPoint("modal-dialog-pagemap_3") @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Frame("modal-dialog-pagemap")_;_script infofile_;_ZIP::ssf382.xml_;_
Wait(5)
Browser("Course Viewer").Page("Course Viewer").Frame("modal-dialog-pagemap").Link("Save").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Frame("modal-dialog-pagemap").Link("Save")_;_script infofile_;_ZIP::ssf383.xml_;_
Wait(5)
Browser("Course Viewer").Page("Course Viewer").Sync @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf384.xml_;_
Browser("Course Viewer").Close
Wait(5)
Browser("Browser").Page("Page").Check CheckPoint("Welcome to Precision LMS_6") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf385.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Home")_;_script infofile_;_ZIP::ssf369.xml_;_
Wait(5)
Browser("Browser").Page("Page").Link("My Bookmarks").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("My Bookmarks")_;_script infofile_;_ZIP::ssf386.xml_;_
Wait(5) @@ hightlight id_;_Browser("Browser").Page("Page").Link("Home")_;_script infofile_;_ZIP::ssf369.xml_;_
Browser("Browser").Page("Page").WebElement("My Bookmarks").Check CheckPoint("My Bookmarks") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("My Bookmarks")_;_script infofile_;_ZIP::ssf391.xml_;_
Wait(5)
Browser("Browser").Page("Page").WebTable("Bookmarks").Check CheckPoint("Bookmarks") @@ hightlight id_;_Browser("Browser").Page("Page").WebTable("Bookmarks")_;_script infofile_;_ZIP::ssf392.xml_;_
Wait(5)
Browser("Browser").Page("Page").Link("Cancel").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Cancel")_;_script infofile_;_ZIP::ssf393.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Home")_;_script infofile_;_ZIP::ssf369.xml_;_

Reporter.ReportEvent 2, "STEP 22 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  23
' Description           :   Log into IFA https://fusion-qa.ptc.com/dailyifa/app/ as <prof_pt_co3_usr_0200@ptcunoemail.com> and pwd <prof7763>
' Expected Result  : Log in should be successfull for the user .
Reporter.ReportEvent 2, "STEP 23 BEGINS",""

Reporter.ReportEvent micDone, "Open the application", "Close all the browsers and Open the application"
rc=OpenApplication("", blnRet) 'Opening a new browser
If  blnRet = false Then
 	ExitAction(0)
End If
Reporter.ReportEvent micDone, "Login into  the application", "Login into the application with username:" & sLoginID
Browser("Browser").Page("Page").Login  "prof_pt_co3_usr_0200@ptcunoemail.com", "prof7763" , blnRet
If  blnRet = false Then
		ExitAction(0)
End If @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf17.xml_;_
Browser("Browser").Page("Page").Check CheckPoint("Fusion Administration_2")

Reporter.ReportEvent 2, "STEP 23 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  24
' Description           :   Click on the link Orders 
' Expected Result  : On Clicking, it should navigate to Order Management page,page should be labelled as Orders and should have message area with the message 
'                                     "This page shows all orders in the system." and should contain link.Create New Order
Reporter.ReportEvent 2, "STEP 24 BEGINS",""
 @@ hightlight id_;_Browser("Browser").Page("Page").Link("Organizations")_;_script infofile_;_ZIP::ssf18.xml_;_
Browser("Browser").Page("Page").Link("Orders").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Orders")_;_script infofile_;_ZIP::ssf235.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Orders_4") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf236.xml_;_
Browser("Browser").Page("Page").WebElement("This page shows all orders").Check CheckPoint("This page shows all orders in the system.") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("This page shows all orders")_;_script infofile_;_ZIP::ssf237.xml_;_
Browser("Browser").Page("Page").Link("Create New Order").Check CheckPoint("Create New Order") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create New Order")_;_script infofile_;_ZIP::ssf238.xml_;_

Reporter.ReportEvent 2, "STEP 24 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  25
' Description           :   Click on the Link "Cancel" from the Actions column of the order for which the users are having Licenses.
' Expected Result  : Selecting the Cancel option should prompt the user with a javascript confirmation saying:"Are you sure you want to cancel this order?" and with two Options 
'                                       Ok          : Clicking OK should cancel the Order
'                                      Cancel   : Clicking Cancel should not cancel the Order
Reporter.ReportEvent 2, "STEP 25 BEGINS",""

Browser("Browser").Page("Page").Link("Cancel_2").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Cancel 2")_;_script infofile_;_ZIP::ssf395.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Dialog("Microsoft Internet Explorer").Activate @@ hightlight id_;_2296180_;_script infofile_;_ZIP::ssf396.xml_;_
Wait(5)
Browser("Browser").Dialog("Microsoft Internet Explorer").Check CheckPoint("Microsoft Internet Explorer") @@ hightlight id_;_2296180_;_script infofile_;_ZIP::ssf397.xml_;_
Wait(5)
Browser("Browser").Dialog("Microsoft Internet Explorer").Activate @@ hightlight id_;_2296180_;_script infofile_;_ZIP::ssf399.xml_;_
Wait(5)
Browser("Browser").Dialog("Microsoft Internet Explorer").WinButton("OK").Check CheckPoint("OK") @@ hightlight id_;_7604866_;_script infofile_;_ZIP::ssf400.xml_;_
Wait(5)
Browser("Browser").Dialog("Microsoft Internet Explorer").WinButton("Cancel").Check CheckPoint("Cancel") @@ hightlight id_;_5179962_;_script infofile_;_ZIP::ssf401.xml_;_
Wait(5)
Browser("Browser").Dialog("Microsoft Internet Explorer").Activate @@ hightlight id_;_2296180_;_script infofile_;_ZIP::ssf402.xml_;_
Wait(5)

Reporter.ReportEvent 2, "STEP 25 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  26
' Description           :   Click on OK from the Pop Up message and Observe the state of the Order
' Expected Result  : Clicking OK should cancel the Order , and Order state shiould get changed to Pending 
'                                      Note : In the IPA, the order details and the license details should be maintained, but all licenses in the order should be deactivated
Reporter.ReportEvent 2, "STEP 26 BEGINS",""

Browser("Browser").Dialog("Microsoft Internet Explorer").Activate @@ hightlight id_;_3672462_;_script infofile_;_ZIP::ssf403.xml_;_
Wait(5)
Browser("Browser").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_6621660_;_script infofile_;_ZIP::ssf404.xml_;_
Wait(5)
Browser("Browser").Page("Page").Check CheckPoint("Orders_8") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf405.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").WebElement("Pending").Check CheckPoint("Pending") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("Pending")_;_script infofile_;_ZIP::ssf406.xml_;_
Browser("Browser").Page("Page").Sync

Reporter.ReportEvent 2, "STEP 26 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  27
' Description           :   Push the Cancelled Order to Precision , by clicking Push link from the Actions Column
' Expected Result  : Cancelled Order should get pushed to PLMS and Order status turns to Cancelled when the cancelled order is pushed to PLMS.
Reporter.ReportEvent 2, "STEP 27 BEGINS",""

Browser("Browser").Page("Page").Link("Push Order_2").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Push Order 2")_;_script infofile_;_ZIP::ssf407.xml_;_
Wait(5)
Browser("Browser").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_18680204_;_script infofile_;_ZIP::ssf408.xml_;_
Wait(5)
Browser("Browser").Page("Page").Check CheckPoint("Orders_9") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf409.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").WebElement("Canceled").Check CheckPoint("Canceled") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("Canceled")_;_script infofile_;_ZIP::ssf410.xml_;_
Browser("Browser").Page("Page").Sync

Reporter.ReportEvent 2, "STEP 27 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  28
' Description           :   Login into https://fusion-qa.ptc.com/dailyhosted/app/pages/Login/  with user as customet contact
' Expected Result  : Login should be successful for the user and should display the landing page.
Reporter.ReportEvent 2, "STEP 28 BEGINS",""
 @@ hightlight id_;_Browser("Browser").Page("Page").Link("Logout")_;_script infofile_;_ZIP::ssf285.xml_;_
Browser("Browser").Page("Page").Link("Logout").Click @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf286.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Close
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

Reporter.ReportEvent 2, "STEP 28 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  29
' Description           :   Verify the License Management page in the Administration section for the Customer Contact.
' Expected Result  : Once the access has been removed, the licenses should no longer show up in the Assign Licenses page in Precision.
'                                      Note : The licenses associated with the order are no longer displayed in the license table for that organization in Precision.
Reporter.ReportEvent 2, "STEP 29 BEGINS",""

Browser("Browser").Page("Page").Link("Administration").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Administration")_;_script infofile_;_ZIP::ssf411.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Link("View & Assign Licenses").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("View & Assign Licenses")_;_script infofile_;_ZIP::ssf412.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Check CheckPoint("View & Assign Licenses_5") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf413.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebElement("LIB 3").Check CheckPoint("LIB 3") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("LIB 3")_;_script infofile_;_ZIP::ssf414.xml_;_
Browser("Browser").Page("Page").Sync

Reporter.ReportEvent 2, "STEP 29 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
'Step No.   		        :  30 -31
' Description           :   Verify the effect of the License when the License is not been assigned to any user.
'                                        Verify whether the user is able to Lauch the Courses/Assessments once the Order is been cancelled.
'                                       Note : Try Launching the Courses from
'                                       Current Learning table by clicking on 
'                                      Title of the Course , Start, Resume , Course Icon
'                                      Completed Learning Table by clicking on
'                                      Title of the Course, Review , Results (Detail link from Answers tab) , Retest , Resume Retest , Course Icon.
'                                       My Bookmarks by clicking on
'                                      Links from the saved Bookmarks.
'                                     Find Training by clicking on (for User)
'                                     No items should be displayed after cancellation of the Order.
'                                    LISU (for admin)
'                                   Learning items should not be displayed unless if there are any Licenses exists for the Learning items which are associated with the Cancelled Order.
'                                   Admin Level Reports
'                                  Drill down reports.
'                                  Email Link from the Course viewer
'                                  Try accessing the link which was sent by the email option of the Course Viewer.
' Expected Result  : When the License has not been assigned to any user , 
'                                       nothing should happen in FT , LIST, Current & Completed Learning , Bookmarks ,Email link sent from the Course Viewer areas.
'                                      Only effected area should be the License Management page  , where this particular license should be deleted from the List.All the Learning items should be Launchable ,
'                                      and each should display in the Current Learning table.
'                                     User should not be allowed to access the content once the Licenses is cancelled.
'                                     Note : If any users were assigned to this license, that access should be expired so that no user has access to the specified libraries.
'                                    This should be expected regardless of the License type and support Expiration Dates.
'                                    This function should work when:
'                                    1.      The license has been assigned to users
'                                    2.      Before and after expiration dates have been reached (Term dates and support dates)
Reporter.ReportEvent 2, "STEP 30 -31 BEGINS",""

Browser("Browser").Page("Page").Link("Home").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Home")_;_script infofile_;_ZIP::ssf415.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Check CheckPoint("Current Learning Page") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf416.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").WebTable("Customer Number").Check CheckPoint("Current Learning Table1") @@ hightlight id_;_Browser("Browser").Page("Page").WebTable("Customer Number")_;_script infofile_;_ZIP::ssf417.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Link("Completed Learning").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Completed Learning")_;_script infofile_;_ZIP::ssf418.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Link("Advanced Assemblies").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Advanced Assemblies")_;_script infofile_;_ZIP::ssf419.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Link("Cancel").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Cancel")_;_script infofile_;_ZIP::ssf421.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Link("Arbortext 5.2 - Arbortext").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Arbortext 5.2 - Arbortext")_;_script infofile_;_ZIP::ssf420.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Link("Cancel").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Cancel")_;_script infofile_;_ZIP::ssf421.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Check CheckPoint("Completed Learning Page") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf422.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Link("My Bookmarks").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("My Bookmarks")_;_script infofile_;_ZIP::ssf423.xml_;_
Wait(10)
Browser("Browser").Page("Page").Link("Feedback").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Feedback")_;_script infofile_;_ZIP::ssf439.xml_;_
Wait(10)
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").SetToProperty "hwnd", value
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5)
Browser("Course Viewer").Page("Course Viewer").Check CheckPoint("Error Page") @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf424.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Browser("Course Viewer").Page("Course Viewer").WebElement("Content access denied").Check CheckPoint("Content access denied") @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebElement("Content access denied")_;_script infofile_;_ZIP::ssf425.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf426.xml_;_
Browser("Course Viewer").Close
Wait(5)
Browser("Browser").Page("Page").Link("Find Training").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Find Training")_;_script infofile_;_ZIP::ssf427.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Check CheckPoint("Find Training_No Courses") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("No Results Found")_;_script infofile_;_ZIP::ssf429.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").WebElement("No Results Found").Check CheckPoint("No Results Found") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Administration")_;_script infofile_;_ZIP::ssf430.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Link("Administration").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Assign Learning")_;_script infofile_;_ZIP::ssf431.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Link("Assign Learning").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Next >")_;_script infofile_;_ZIP::ssf432.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Link("Next >").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Select Learning")_;_script infofile_;_ZIP::ssf433.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Link("Select Learning").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Browse all Training")_;_script infofile_;_ZIP::ssf435.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Browse all Training").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap")_;_script infofile_;_ZIP::ssf434.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Check CheckPoint("modal-dialog-pagemap_4") @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Cancel")_;_script infofile_;_ZIP::ssf436.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Cancel").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Administration")_;_script infofile_;_ZIP::ssf437.xml_;_
Wait(5)
Browser("Browser").Page("Page").Link("Administration").Click @@ hightlight id_;_6294158_;_script infofile_;_ZIP::ssf438.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Dialog("Microsoft Internet Explorer").WinButton("OK").Click
Wait(5)
Browser("Browser").Page("Page").Sync

Reporter.ReportEvent 2, "STEP 30 -31 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  32
' Description           :   Log into IFA https://fusion-qa.ptc.com/dailyifa/app/ as <prof_pt_co3_usr_0200@ptcunoemail.com> and pwd <prof7763>
' Expected Result  : Log in should be successfull.
Reporter.ReportEvent 2, "STEP 32 BEGINS",""

Browser("Browser").Page("Page").Link("Log Out").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Log Out")_;_script infofile_;_ZIP::ssf440.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf441.xml_;_
Browser("Browser").Close
Reporter.ReportEvent micDone, "Open the application", "Close all the browsers and Open the application"
rc=OpenApplication("", blnRet) 'Opening a new browser
If  blnRet = false Then
 	ExitAction(0)
End If
Reporter.ReportEvent micDone, "Login into  the application", "Login into the application with username:" & sLoginID
Browser("Browser").Page("Page").Login  "prof_pt_co3_usr_0200@ptcunoemail.com", "prof7763" , blnRet
If  blnRet = false Then
		ExitAction(0) @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf17.xml_;_
End If
Browser("Browser").Page("Page").Check CheckPoint("Fusion Administration_2")

Reporter.ReportEvent 2, "STEP 32 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  33 -34
' Description           :   Try creating new order and Verify , the License table in the Light box while updating the Existing License details.
'                                       Click on the edit option from the actions column of the Cancelled Order.
' Expected Result  : Licesnes should not get displayed in the License light box , while Updating the Existing Licenses.
'                                     Edit should open the Edit Order page and notify The Updated On field should be populated with the date on which the order was cancelled.
Reporter.ReportEvent 2, "STEP 33 -34 BEGINS",""

Browser("Browser").Page("Page").Link("Orders").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Orders")_;_script infofile_;_ZIP::ssf442.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Check CheckPoint("Orders Page") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf443.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Edit").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Edit")_;_script infofile_;_ZIP::ssf444.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Check CheckPoint("Create/Edit Order") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf445.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebButton("Cancel").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("Cancel")_;_script infofile_;_ZIP::ssf446.xml_;_
Wait(5)
Browser("Browser").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_7275842_;_script infofile_;_ZIP::ssf447.xml_;_
Wait(5)
Browser("Browser").Page("Page").Link("Logout").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Logout")_;_script infofile_;_ZIP::ssf448.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf449.xml_;_
Browser("Browser").Close

Reporter.ReportEvent 2, "STEP 33 -34 ENDS","SCRIPT ENDS"
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------