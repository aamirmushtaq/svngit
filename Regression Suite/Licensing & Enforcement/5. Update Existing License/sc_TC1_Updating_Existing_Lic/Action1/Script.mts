'File Name: sc_TC1_Updating_Existing_Lic
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
'  Date Started Creation: 15/05/2008
'  Date Ended Creation: 15/05/2008
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
' Step No.   		        :  9 - 10
' Description           :   Click on the link Orders  . Click on the link "Create New Order" link
' Expected Result  : On Clicking, it should navigate to Order Management page,page should be labelled as Orders and should have message area with the message 
'                                    "This page shows all orders in the system." and should contain link.Create New Order
'                                      Upon clicking the link, should take the user to Create Order page
Reporter.ReportEvent 2, "STEP 9 - 10 BEGINS",""

Browser("Browser").Page("Page").Link("Orders").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Orders")_;_script infofile_;_ZIP::ssf235.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Orders_4") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf236.xml_;_
Browser("Browser").Page("Page").WebElement("This page shows all orders").Check CheckPoint("This page shows all orders in the system.") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("This page shows all orders")_;_script infofile_;_ZIP::ssf237.xml_;_
Browser("Browser").Page("Page").Link("Create New Order").Check CheckPoint("Create New Order") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create New Order")_;_script infofile_;_ZIP::ssf238.xml_;_
Browser("Browser").Page("Page").Link("Create New Order").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create New Order")_;_script infofile_;_ZIP::ssf239.xml_;_
Browser("Browser").Page("Page").Sync

Reporter.ReportEvent 2, "STEP 9 - 10 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  11-14
' Description           :   Enter all the fields marked with * at the top of the table Licenses
'                                      1.Select customer Number as 
'                                     2.Customer Email - 
'                                     3 Sales Order Number - 
'                                     4. Order Date -
'                                    Click on Add New Licenses button/Link soecified at the top of the table
'                                     Add few Libraries and also give the License details.
'                                    Submit the order And Push to PLMS.
' Expected Result  : All fields should be entered with proper data and should be validated.
'                                   1.Select customer Number as  - 341
'                                  2.Customer Email - prof_pt_co3_usr_0200@ptcunoemail.com
'                                 3 Sales Order Number -  any +ve Integer
'                                 4. Order Date - Leave it with default value.
'                                 Upon clicking,Select Libraries light box should be populated with the list of available Libraries
'                                  Licenses should get created for the selected libraries.
'                                  Order should get created , for the Customer Number and should reflect in the Existing Order list.
Reporter.ReportEvent 2, "STEP 11-14 BEGINS",""
 @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create New Order")_;_script infofile_;_ZIP::ssf239.xml_;_
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
Browser("Browser").Page("Page").Link("Push Order_2").Click
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_5178766_;_script infofile_;_ZIP::ssf398.xml_;_
Wait(5)
Browser("Browser").Page("Page").Sync

Reporter.ReportEvent 2, "STEP 11-14 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  15 - 19
' Description           :   Click on the link "Create New Order" link once again.
'                                       Enter all the fields marked with * at the top of the table Licenses
'                                     1.Select customer Number as 
'                                    2.Customer Email - 
'                                   3 Sales Order Number - 
'                                  4. Order Date -
'                                   Enter the Customer contact , SON, Order Date & Notes details.
'                                   Verify  the Select Existing Licenses button functionality.
'                                   Note :   New License can also be created for the Customer
'                                   The key capability of this functionality is that, if the license has already been assigned to users in Precision, those assignments should be maintained by the system.
'                                    Verify the Licenses table present in the Light Box
' Expected Result  :Upon clicking the link, should take the user to Create Order page
'                                     All fields should be entered with proper data and should be validated.
'                                   1.Select customer Number as  - 341
'                                   2.Customer Email - prof_pt_co3_usr_0200@ptcunoemail.com
'                                  3 Sales Order Number -  any +ve Integer
'                                 4. Order Date - Leave it with default value.
'                                  All the fileds should be entered with the Valid data.
'                                  Select Existing License should be enable
'                                  Clicking on the button should open the Light box,Select Existing License for this Organization.
'                                 The light box Ui should be similar to the Licenses table and with two buttons at the Bottom of the table "Next" and "Cancel"
'                                Next : Will take the user to License details light box
'                               Cancel : Will take user to Create New order Page.
'                               Note : Should be enable , if there is any Order exists for the Organization.
'                              Should show the Latest version of the License.
'                              The Light box should disply the Licenses that are present for the Organization.Where user can select the License and Update the License details.
'                             The list of licenses for this Organization should be presented in a table very similar to the Licenses table on the Create New Order page. Select a single existing license.
'                             Note :Should  be allowed to select one license at a time.Should not show the cancelled Licenses if there any.       
Reporter.ReportEvent 2, "STEP 15 - 19 BEGINS",""

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
Browser("Browser").Page("Page").Link("Select Existing License").Check CheckPoint("Select Existing License") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Select Existing License")_;_script infofile_;_ZIP::ssf356.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Select Existing License").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Select Existing License")_;_script infofile_;_ZIP::ssf357.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Check CheckPoint("modal-dialog-pagemap_3") @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap")_;_script infofile_;_ZIP::ssf358.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Next").Check CheckPoint("Next") @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Next")_;_script infofile_;_ZIP::ssf359.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Cancel").Check CheckPoint("Cancel") @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Cancel")_;_script infofile_;_ZIP::ssf360.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("view:radioGroup").Check CheckPoint("view:radioGroup") @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("view:radioGroup")_;_script infofile_;_ZIP::ssf361.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebTable("Library").Check CheckPoint("Library_2") @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebTable("Library")_;_script infofile_;_ZIP::ssf362.xml_;_
 @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("userId")_;_script infofile_;_ZIP::ssf112.xml_;_
Reporter.ReportEvent 2, "STEP 15 - 19 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  20
' Description           :   Select any License and Click Next.Note : License should be selected before moving to Next light box.
' Expected Result  : The License Details page should be populated with the current details for the selected license.Count Users should not be editable.
'                                      Note : There Should be validation , after clicking next without selecting any License.
Reporter.ReportEvent 2, "STEP 20 BEGINS",""

Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Next").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Next")_;_script infofile_;_ZIP::ssf367.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebElement("Please Select any of the").Check CheckPoint("Please Select any of the license") @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebElement("Please Select any of the")_;_script infofile_;_ZIP::ssf368.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("view:radioGroup").Select "#0" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebRadioGroup("view:radioGroup")_;_script infofile_;_ZIP::ssf363.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Next").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Next")_;_script infofile_;_ZIP::ssf364.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Check CheckPoint("modal-dialog-pagemap_4") @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap")_;_script infofile_;_ZIP::ssf365.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebEdit("usersTextBox").Check CheckPoint("usersTextBox") @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebEdit("usersTextBox")_;_script infofile_;_ZIP::ssf366.xml_;_

Reporter.ReportEvent 2, "STEP 20 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  21
' Description           :   Edit the existing License details.
' Expected Result  : Existing Licenses should get updated.Note : Change the License type from Term to Perpetual or Perpetual to Term (Or Renewal the Term Expiration Date)
'                                     Adding the Support to the Existing License if there is no support earlier.
Reporter.ReportEvent 2, "STEP 21 BEGINS",""

Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("licenseTypeDropDown").Select "Term"
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebEdit("licenseDateContainer:termExpDa").Check CheckPoint("licenseDateContainer:termExpDateField")
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebEdit("licenseDateContainer:termExpDa").Click
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("select").Click
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("select").Select "December"
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("select_2").Click
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("select_2").Select "2018"
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebElement("8").Click
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("supportDropDown").Select "Yes"
Wait(10)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebEdit("supportDateContainer:supportEx").Check CheckPoint("supportDateContainer:supportExpDateField")
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebEdit("supportDateContainer:supportEx").Click
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("select").Click
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("select").Select "December"
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("select_2").Click
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("select_2").Select "2018"
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebElement("8").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebElement("8")_;_script infofile_;_ZIP::ssf386.xml_;_
Wait(5)

Reporter.ReportEvent 2, "STEP 21 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  22
' Description           :   Click on Submit button from the Light box.
' Expected Result  : Clicking on Submit , ashould bring the user back to Create Order page and the License details should be populated in the License table.
Reporter.ReportEvent 2, "STEP 22 BEGINS",""

Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Submit_2").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Submit 2")_;_script infofile_;_ZIP::ssf388.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Check CheckPoint("Create/Edit Order") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf389.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebTable("Library").Check CheckPoint("Library_3") @@ hightlight id_;_Browser("Browser").Page("Page").WebTable("Library")_;_script infofile_;_ZIP::ssf390.xml_;_
Browser("Browser").Page("Page").Sync

Reporter.ReportEvent 2, "STEP 22 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  23
' Description           :   Click on Submit Button from the Create Order page.
' Expected Result  : Clicking on Submit , should create the order and the same should reflect in the License table.Note : The new order should display in the Orders table as new entry..
Reporter.ReportEvent 2, "STEP 23 BEGINS",""
 @@ hightlight id_;_Browser("Browser").Page("Page").Link("Administration")_;_script infofile_;_ZIP::ssf296.xml_;_
Browser("Browser").Page("Page").WebButton("Submit").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("Submit")_;_script infofile_;_ZIP::ssf391.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_4523406_;_script infofile_;_ZIP::ssf392.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Check CheckPoint("Orders_8") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf393.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebTable("Customer Number").Check CheckPoint("Order Date") @@ hightlight id_;_Browser("Browser").Page("Page").WebTable("Customer Number")_;_script infofile_;_ZIP::ssf394.xml_;_
Browser("Browser").Page("Page").Sync

Reporter.ReportEvent 2, "STEP 23 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  24
' Description           :   Try assigning the :updated License to the same Organization.(Push Order to PLMS).
' Expected Result  : License details should get reflected as per the updates.
Reporter.ReportEvent 2, "STEP 24 BEGINS",""
 @@ hightlight id_;_Browser("Browser").Page("Page").Link("Administration")_;_script infofile_;_ZIP::ssf335.xml_;_
Browser("Browser").Page("Page").Link("Push Order_3").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Push Order 3")_;_script infofile_;_ZIP::ssf395.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_5047694_;_script infofile_;_ZIP::ssf396.xml_;_
Wait(5)
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Orders_9") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf399.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebTable("Customer Number").Check CheckPoint("Order Date_2") @@ hightlight id_;_Browser("Browser").Page("Page").WebTable("Customer Number")_;_script infofile_;_ZIP::ssf400.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Logout").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Logout")_;_script infofile_;_ZIP::ssf401.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf402.xml_;_
Browser("Browser").Close

Reporter.ReportEvent 2, "STEP 24 ENDS","SCRIPT ENDS"
'---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------