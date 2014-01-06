'File Name: sc_TC1_Dlgts_Status_After_Editing_Cust_Cont
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
Browser("Browser").Page("Page").Login  "prof_pt_co3_usr_0200@ptcunoemail.com", "prof7763" , blnRet
If  blnRet = false Then
		ExitAction(0)
End If
Browser("Browser").Page("Page").Check CheckPoint("Fusion Administration_2") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf17.xml_;_

Reporter.ReportEvent 2, "STEP 4 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  5 - 6
' Description           :   Verify the link Orders in the Order Administaration from Left menu.Click on the link Orders.
'                                      Note : Make sure Packages & Libraries are already created before making order
' Expected Result  : Orders Link should be avaliable and should be functional.
'                                      As expected, it should navigate to Orders page and page should be labelled as Orders and should have message area with the message
'                                      "This page shows all orders in the system." and should contain link.Create New Order
Reporter.ReportEvent 2, "STEP 5 - 6 BEGINS",""

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
'Libs
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
'Orders
Browser("Browser").Page("Page").Link("Orders").Check CheckPoint("Orders_3") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Orders")_;_script infofile_;_ZIP::ssf234.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Orders").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Orders")_;_script infofile_;_ZIP::ssf235.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Orders_4") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf236.xml_;_
Browser("Browser").Page("Page").WebElement("This page shows all orders").Check CheckPoint("This page shows all orders in the system.") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("This page shows all orders")_;_script infofile_;_ZIP::ssf237.xml_;_
Browser("Browser").Page("Page").Link("Create New Order").Check CheckPoint("Create New Order") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create New Order")_;_script infofile_;_ZIP::ssf238.xml_;_

Reporter.ReportEvent 2, "STEP 5 - 6 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  7
' Description           :   Create some orders in IPA
' Expected Result  : Orders should get created and should display in the Existing Orders page with state as "Created" in State column
Reporter.ReportEvent 2, "STEP 7 BEGINS",""

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
'Order 2
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

Reporter.ReportEvent 2, "STEP 7 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  8
' Description           :   Click on "Push" link from the Actions column
' Expected Result  : It should display in the License Management page for the Customer contact only.
'                                     Note : If customer contact is not present in the PLMS , this action should create the same in the Specified Organization.
'                                    If the Customer is already present in the PLMS , in different Organization.Pushing this License should chnage the Organization and should display the Licenses in.
'                                   the License Management page for the customer.
Reporter.ReportEvent 2, "STEP 8 BEGINS",""

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

Reporter.ReportEvent 2, "STEP 8 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  9
' Description           :   Log in to Precision LMS with the Customer contact "prof_pt_co3_usr_0200@ptcunoemail.com and Password as <prof7763>
' Expected Result  : Log in should be successfull for the User.
Reporter.ReportEvent 2, "STEP 9 BEGINS",""

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

Reporter.ReportEvent 2, "STEP 9 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  10
' Description           :   Click Veiw & Assign Licenses link under User Administration section.
' Expected Result  : Page for license management should be available
Reporter.ReportEvent 2, "STEP 10 BEGINS",""

Browser("Browser").Page("Page").Link("Administration").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Administration")_;_script infofile_;_ZIP::ssf292.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("View & Assign Licenses").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("View & Assign Licenses")_;_script infofile_;_ZIP::ssf293.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("View & Assign Licenses_3") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf294.xml_;_
Browser("Browser").Page("Page").Sync

Reporter.ReportEvent 2, "STEP 10 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  11
' Description           :   Click on the Delegate link from the Actions column of the License.
'                                       Note : This option should be available only for the Customer contact of the License and not for all.
' Expected Result  : Should open the page with label as  Manage Delegate.
Reporter.ReportEvent 2, "STEP 11 BEGINS",""
 @@ hightlight id_;_1051066_;_script infofile_;_ZIP::ssf108.xml_;_
Wait(5) @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create New Order")_;_script infofile_;_ZIP::ssf239.xml_;_
Browser("Browser").Page("Page").Image("assign-active_2").Click @@ hightlight id_;_Browser("Browser").Page("Page").Image("assign-active 2")_;_script infofile_;_ZIP::ssf450.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Manage Delegates") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf451.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebElement("prof_pt_co3_usr_0200,").Check CheckPoint("prof_pt_co3_usr_0200, prof_pt_co3_usr_0200") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("prof pt co3 usr 0200,")_;_script infofile_;_ZIP::ssf452.xml_;_
Browser("Browser").Page("Page").Sync

Reporter.ReportEvent 2, "STEP 11 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  12 
' Description           :   Verify the UI of the Manage Delegates page.
' Expected Result  :UI should contain...
'                                    1. Title of the Page "Manage Delegates" and text area below the title
'                                    2. Add Users button below the Text Area.
'                                    3. The page should conatin a User Collection Table containing Current Delegates for the License on the Manage Delegates page,
'                                    and Table should contain 4 columns (Name, Email, Role, Action)
'                                     4. Submit & Cancel buttons at the bottom of the page.
'                                    Submit   : assigns delegate status to new users in the table and revokes delegate status for users who have been removed from the table. 
'                                   Cancel   : Will keps the user in Manage delegates page itself.
Reporter.ReportEvent 2, "STEP 12 BEGINS",""
 @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create New Order")_;_script infofile_;_ZIP::ssf260.xml_;_
Browser("Browser").Page("Page").WebElement("Manage Delegates").Check CheckPoint("Manage Delegates_2") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("Manage Delegates")_;_script infofile_;_ZIP::ssf453.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Select Users").Check CheckPoint("Select Users") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Select Users")_;_script infofile_;_ZIP::ssf454.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebTable("Customer Number").Check CheckPoint("User Collection Table") @@ hightlight id_;_Browser("Browser").Page("Page").WebTable("Customer Number")_;_script infofile_;_ZIP::ssf455.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Submit").Check CheckPoint("Submit") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Submit")_;_script infofile_;_ZIP::ssf456.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Cancel_3").Check CheckPoint("Cancel_2") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Cancel 3")_;_script infofile_;_ZIP::ssf457.xml_;_
Browser("Browser").Page("Page").Sync
 @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("userId")_;_script infofile_;_ZIP::ssf112.xml_;_
Reporter.ReportEvent 2, "STEP 12 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  13
' Description           :   Verify the User Collection Table for the existance of Deligates.
' Expected Result  : If Delegates exist for this license then the table should be prepopulated with the existing Delegates.
'                                    Column    Default value
'                                   Name :         Should show the name.
'                                   Email :          LDAP account
'                                 Action:         Remove (Action should not be populated for the Customer Contact)
Reporter.ReportEvent 2, "STEP 13 BEGINS",""
 @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("userId")_;_script infofile_;_ZIP::ssf112.xml_;_
Browser("Browser").Page("Page").WebTable("Customer Number").Check CheckPoint("User Collection Table") @@ hightlight id_;_Browser("Browser").Page("Page").WebTable("Customer Number")_;_script infofile_;_ZIP::ssf455.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebTable("Customer Number").Check CheckPoint("Delegates Table") @@ hightlight id_;_Browser("Browser").Page("Page").WebTable("Customer Number")_;_script infofile_;_ZIP::ssf458.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Administration").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Administration")_;_script infofile_;_ZIP::ssf459.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Log Out").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Log Out")_;_script infofile_;_ZIP::ssf460.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf461.xml_;_
Browser("Browser").Close

Reporter.ReportEvent 2, "STEP 13 ENDS","SCRIPT ENDS"
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------