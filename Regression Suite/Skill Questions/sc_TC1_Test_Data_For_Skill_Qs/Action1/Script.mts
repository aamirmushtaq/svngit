'File Name: sc_TC1_Test_Data_For_Skill_Qs
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
'  Date Started Creation: 22/05/2008
'  Date Ended Creation: 22/05/2008
'  Functions Included: fOpenApplication(),CloseAllBrowsersExceptQC(),Login()
'  History of Changes: 
'--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  1 - 4
' Description           :   Login to Precision LMS with admin user "precisionlmsadmin" and Password as <2learnNow195>
'                                       From Admin tab Click on link Install Packages.
'                                       Import Skill Question Language Tags from location D:\Fusion\FusionRepo\packages\prof\
'                                       Logout from PLMS and Log into https://fusion-qa.ptc.com/dailyifa/app/pages/Login/ as user  " admin" and with PW " n10suf"
' Expected Result  : Login should be successfull for the User.
'                                      As expected , Install Packages page should be displayed.
'                                      Skill Question Language Tags packager should be imported to PLMS.
'                                     Log in should be successfull for the user and should disply home Page
Reporter.ReportEvent 2, "STEP 1- 4 BEGINS",""
 @@ hightlight id_;_Browser("Precision LMS : Login").Page("Precision LMS : Login").WebEdit("userId")_;_script infofile_;_ZIP::ssf364.xml_;_
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
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Manage Users").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Manage Users")_;_script infofile_;_ZIP::ssf377.xml_;_
Browser("Browser").Page("Page").Link("Edit").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Edit")_;_script infofile_;_ZIP::ssf378.xml_;_
Browser("Browser").Page("Page").WebCheckBox("rolesCheckGroup_2").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").WebCheckBox("rolesCheckGroup 2")_;_script infofile_;_ZIP::ssf379.xml_;_
'Browser("Browser").Page("Page").WebCheckBox("rolesCheckGroup_3").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").WebCheckBox("rolesCheckGroup 3")_;_script infofile_;_ZIP::ssf380.xml_;_
Browser("Browser").Page("Page").WebButton("Save User").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("Save User")_;_script infofile_;_ZIP::ssf381.xml_;_
Browser("Browser").Page("Page").Link("Pro/FICIENCY").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Pro/FICIENCY")_;_script infofile_;_ZIP::ssf382.xml_;_
Browser("Browser").Page("Page").Link("Package Language Tags").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Package Language Tags")_;_script infofile_;_ZIP::ssf383.xml_;_
Browser("Browser").Page("Page").Sync
Wait(400)
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Logout").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Logout")_;_script infofile_;_ZIP::ssf384.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf385.xml_;_
Reporter.ReportEvent micDone, "Open the application", "Close all the browsers and Open the application"
rc=OpenApplication("http://i2361.ptcnet.ptc.com/automationhosted/app/", blnRet) 'Opening a new browser
If  blnRet = false Then
 	ExitAction(0)
End If
Reporter.ReportEvent micDone, "Login into  the application", "Login into the application with username:" & sLoginID
Browser("Browser").Page("Page").Login  "precisionlmsadmin", "2learnNow195" , blnRet
If  blnRet = false Then
ExitAction(0)
End If
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Welcome to Precision LMS_3")
Browser("Browser").Page("Page").Link("Administration").Click @@ hightlight id_;_Browser("Welcome to Precision LMS").Page("Welcome to Precision LMS").Link("Administration")_;_script infofile_;_ZIP::ssf356.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Install Packages").Click @@ hightlight id_;_Browser("Welcome to Precision LMS").Page("Welcome to Precision LMS").Link("Install Packages")_;_script infofile_;_ZIP::ssf357.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Import Packages") @@ hightlight id_;_Browser("Welcome to Precision LMS").Page("Welcome to Precision LMS")_;_script infofile_;_ZIP::ssf360.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("packagePath").Set "D:\Fusion\FusionRepo\packages\prof\" @@ hightlight id_;_Browser("Welcome to Precision LMS").Page("Welcome to Precision LMS").WebEdit("packagePath")_;_script infofile_;_ZIP::ssf358.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Import Packages at Path").Click @@ hightlight id_;_Browser("Welcome to Precision LMS").Page("Welcome to Precision LMS").Link("Import Packages at Path")_;_script infofile_;_ZIP::ssf359.xml_;_
Browser("Browser").Page("Page").Sync
Wait(60)
Browser("Browser").Page("Page").Sync
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

Reporter.ReportEvent 2, "STEP 1- 4 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  5
' Description           :   Create User prof_pt_co3_usr_0200@ptcunoemail.com from Manage Users section with Role as Content,Order,& Account Admin.
' Expected Result  : User Should get created successfully.
Reporter.ReportEvent 2, "STEP 5 BEGINS",""

Browser("Browser").Page("Page").Link("Manage Users").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Manage Users")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Browser").Page("Page").Link("Add New User").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Add New User")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Browser").Page("Page").WebEdit("email").Set "prof_pt_co3_usr_0200@ptcunoemail.com"
Browser("Browser").Page("Page").WebCheckBox("rolesCheckGroup").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").WebCheckBox("rolesCheckGroup")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebCheckBox("rolesCheckGroup_2").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").WebCheckBox("rolesCheckGroup 2")_;_script infofile_;_ZIP::ssf10.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebCheckBox("rolesCheckGroup_3").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").WebCheckBox("rolesCheckGroup 3")_;_script infofile_;_ZIP::ssf386.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebButton("Submit").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("Submit")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("Browser").Page("Page").WebElement("prof_pt_co3_usr_0200 prof_pt_c").Check CheckPoint("prof_pt_co3_usr_0200 prof_pt_co3_usr_0200") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("prof pt co3 usr 0200 prof pt c")_;_script infofile_;_ZIP::ssf195.xml_;_

Reporter.ReportEvent 2, "STEP 5 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  6
' Description           :   Log out from IPA
' Expected Result  : User should return back to Login Page
Reporter.ReportEvent 2, "STEP 6 BEGINS",""

Browser("Browser").Page("Page").Link("Logout").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Logout")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Browser").Page("Page").Check CheckPoint("com.ptc.fusion.admin.web.pages.Login.title") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf196.xml_;_

Reporter.ReportEvent 2, "STEP 6 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  7
' Description           :   Log into https://fusion-qa.ptc.com/dailyifa/app/pages/Login/ as user  "prof_pt_co3_usr_0200@ptcunoemail.com" and with PW " prof7763"
' Expected Result  : Log in should be successfull for the user and should disply home Page
Reporter.ReportEvent 2, "STEP 7 BEGINS",""

Reporter.ReportEvent micDone, "Login into  the application", "Login into the application with username:" & sLoginID
Browser("Browser").Page("Page").Login  "prof_pt_co3_usr_0200@ptcunoemail.com", "4815b7d631838b2e65ed72ada5bf33983bc49dd114f4" , blnRet
If  blnRet = false Then
		ExitAction(0)
End If
Browser("Browser").Page("Page").Check CheckPoint("Fusion Administration_2") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf17.xml_;_

Reporter.ReportEvent 2, "STEP 7 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  8
' Description           :   Create a new Organization with the Name PTC with Customer Number as 341.
' Expected Result  : Organization with title as PTC should get Created.
Reporter.ReportEvent 2, "STEP 8 BEGINS",""

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
Browser("Browser").Page("Page").Link("Show all Organizations").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Show all Organizations")_;_script infofile_;_ZIP::ssf387.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebElement("PTC").Check CheckPoint("PTC Org") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("PTC")_;_script infofile_;_ZIP::ssf198.xml_;_

Reporter.ReportEvent 2, "STEP 8 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  9
' Description           :   Package and Push ProF Assessment Skill Questions - Regression Test (Profile ID- 3498 )
' Expected Result  : ProF Assessment Skill Questions - Regression Test should get packaged and Pushed successfully to PLMS.
Reporter.ReportEvent 2, "STEP 9 BEGINS",""

Browser("Browser").Page("Page").Link("Pro/FICIENCY").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Pro/FICIENCY")_;_script infofile_;_ZIP::ssf365.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Manage Users")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Browser").Page("Page").Link("Reload Import File").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Reload Import File")_;_script infofile_;_ZIP::ssf366.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Manage Users")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Browser").Page("Page").Link("Push_5").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Push 5")_;_script infofile_;_ZIP::ssf367.xml_;_
Wait(120)
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Manage Users")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Browser").Page("Page").Link("Pro/FICIENCY").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Pro/FICIENCY")_;_script infofile_;_ZIP::ssf368.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Manage Users")_;_script infofile_;_ZIP::ssf6.xml_;_

Reporter.ReportEvent 2, "STEP 9 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  10
' Description           :   Create a New Librarie with Title as Pro/ENGINEER by using the Libraries option from the Organizing Content section.
'                                      Note : Pro/ENGINEER should contain - Skill Questions - Regression Test
' Expected Result  : Libraries with title Pro/ENGINEER should get Created with Learning Items Skill Questions - Regression Test.
Reporter.ReportEvent 2, "STEP 10 BEGINS",""

Browser("Browser").Page("Page").Link("Libraries").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Libraries")_;_script infofile_;_ZIP::ssf199.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Create New Library").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create New Library")_;_script infofile_;_ZIP::ssf200.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("name").Set "Pro/ENGINEER" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("name")_;_script infofile_;_ZIP::ssf201.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("description").Set "Created by rkishore" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("description")_;_script infofile_;_ZIP::ssf202.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Add Learning Items").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Add Learning Items")_;_script infofile_;_ZIP::ssf203.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("language").Select "All" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("language")_;_script infofile_;_ZIP::ssf204.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("type").Select "Assessment" @@ hightlight id_;_Browser("Create/Edit Library").Page("Create/Edit Library").Frame("modal-dialog-pagemap").WebList("type")_;_script infofile_;_ZIP::ssf369.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Go").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Go")_;_script infofile_;_ZIP::ssf205.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("WebCheckBox").Set "ON" @@ hightlight id_;_Browser("Create/Edit Library").Page("Create/Edit Library").Frame("modal-dialog-pagemap").WebCheckBox("WebCheckBox")_;_script infofile_;_ZIP::ssf370.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Submit").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebButton("Submit")_;_script infofile_;_ZIP::ssf208.xml_;_
Wait(5)
Browser("Browser").Page("Page").WebButton("Save").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("Save")_;_script infofile_;_ZIP::ssf209.xml_;_
Wait(5)
Browser("Browser").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_4784960_;_script infofile_;_ZIP::ssf210.xml_;_
Browser("Browser").Page("Page").Sync

Reporter.ReportEvent 2, "STEP 10 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  11
' Description           :   Click on the link Orders 
' Expected Result  : On Clicking, it should navigate to Order Management page.
Reporter.ReportEvent 2, "STEP 11 BEGINS",""

Browser("Browser").Page("Page").Link("Orders").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Orders")_;_script infofile_;_ZIP::ssf235.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Orders_4") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf236.xml_;_
Browser("Browser").Page("Page").WebElement("This page shows all orders").Check CheckPoint("This page shows all orders in the system.") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("This page shows all orders")_;_script infofile_;_ZIP::ssf237.xml_;_
Browser("Browser").Page("Page").Link("Create New Order").Check CheckPoint("Create New Order") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Create New Order")_;_script infofile_;_ZIP::ssf238.xml_;_

Reporter.ReportEvent 2, "STEP 11 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  12-17
' Description           :   Enter all the fields marked with * at the top of the table Licenses
'                                      1.Select customer Number as 
'                                     2.Customer Email - 
'                                     3 Sales Order Number - 
'                                     4. Order Date -
'                                    Click on Add New Licenses button/Link soecified at the top of the table
'                                     Click Next  after selecting the librarie Pro/ENGINEER from the select Libraries light box and click Ok button.
'                                     Specify the License details as Number Of Users ,License Type, Support 
'                                     Click on Submit after entering the data into all mandatory fields
' Expected Result  : All fields should be entered with proper data and should be validated.
'                                   1.Select customer Number as  - 341
'                                  2.Customer Email - prof_pt_co3_usr_0200@ptcunoemail.com
'                                 3 Sales Order Number -  any +ve Integer
'                                 4. Order Date - Leave it with default value.
'                                 Upon clicking,Select Libraries light box should be populated with the list of Pro/ENGINEER Librarie.
'                                 Upon selecting Ok > selecting this should close the lightbox and open a new lightbox with the next page title "specify License Details"
'                                 All the License Details should set as mentioned below,Number Of Users =10,License Type = Perpetual,Support  = No
'                                 Upon Selecting Submit this will close the lightbox and return the specified details to the Licenses table in the main window (the Create Order page).
Reporter.ReportEvent 2, "STEP 12-17 BEGINS",""
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
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("WebCheckBox").Set "ON" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("selectLibraryGroup")_;_script infofile_;_ZIP::ssf247.xml_;_
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

Reporter.ReportEvent 2, "STEP 12-17 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  18
' Description           :   Click on Push Order from the Actions Column of the Order.
' Expected Result  : Push Order should certainly push the order and also the Libraries associated with the Library, and status should change to Pushed
Reporter.ReportEvent 2, "STEP 18 BEGINS",""
 @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("userId")_;_script infofile_;_ZIP::ssf112.xml_;_
Browser("Browser").Page("Page").Link("Push Order_2").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Push Order 2")_;_script infofile_;_ZIP::ssf278.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_5833684_;_script infofile_;_ZIP::ssf281.xml_;_
Wait(5)
Browser("Browser").Page("Page").Sync

Reporter.ReportEvent 2, "STEP 18 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  19
' Description           :   Logout from IPA & Log in to Precision LMS with the Customer contact "prof_pt_co3_usr_0200@ptcunoemail.com and Password as <prof7763>
' Expected Result  : Log in should be successfull for the User.
Reporter.ReportEvent 2, "STEP 19 BEGINS",""

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

Reporter.ReportEvent 2, "STEP 19 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  20
' Description           :   Verify the Licenses are displying into the License Management Page.
' Expected Result  : License Management page should be displayed with the 1 Licenses created.
Reporter.ReportEvent 2, "STEP 20 BEGINS",""
 @@ hightlight id_;_Browser("Browser").Page("Page").Link("Logout")_;_script infofile_;_ZIP::ssf285.xml_;_
Browser("Browser").Page("Page").Link("Administration").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Administration")_;_script infofile_;_ZIP::ssf292.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("View & Assign Licenses").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("View & Assign Licenses")_;_script infofile_;_ZIP::ssf293.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("View & Assign Licenses_3") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf294.xml_;_
Browser("Browser").Page("Page").Sync

Reporter.ReportEvent 2, "STEP 20 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  21
' Description           :   Create 5 Users under the "prof_pt_co3_usr_0200@ptcunoemail.com" with 5 as User Privilages.
'                                       Note : Make sure that following users get created under the customer contact from prof_pt_co3_usr_0201@ptcunoemail.com to prof_pt_co3_usr_0205@ptcunoemail.com (Users)
' Expected Result  : 5 Users should get created with user privilages and should be displayed in Manage Users page.
Reporter.ReportEvent 2, "STEP 21 BEGINS",""
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
Browser("Browser").Page("Page").Link("Next >").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Next >")_;_script infofile_;_ZIP::ssf320.xml_;_
Browser("Browser").Page("Page").Sync
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

Reporter.ReportEvent 2, "STEP 21 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  22
' Description           :   Assign the License  to the Users.
' Expected Result  : License should get assigned to the Users.
Reporter.ReportEvent 2, "STEP 22 BEGINS",""

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

Reporter.ReportEvent 2, "STEP 22 ENDS","SCRIPT ENDS"
'---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



