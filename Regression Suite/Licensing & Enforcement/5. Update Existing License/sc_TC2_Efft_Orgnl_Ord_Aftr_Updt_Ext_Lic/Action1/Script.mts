'File Name: sc_TC2_Efft_On_Orgnl_Ord_After_Updtg_Ext_Licn
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
'  Date Started Creation: 13/05/2008
'  Date Ended Creation: 13/05/2008
'  Functions Included: fOpenApplication(),CloseAllBrowsersExceptQC(),Login()
'  History of Changes: 
'--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  1
' Description           :   Log into https://fusion-qa.ptc.com/dailyhosted/app/pages/Login/ ,Username : prof_pt_co3_usr_0200@ptcunoemail.com,Password : prof7763
' Expected Result  : As Expected,Log in should be successfull for the user
Reporter.ReportEvent 2, "STEP 1 BEGINS",""

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
Browser("Browser").Page("Page").Check CheckPoint("Welcome to Precision LMS") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf5.xml_;_

Reporter.ReportEvent 2, "STEP 1 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  2
' Description           :   Verify the Licenses are displying into the License Management Page.
' Expected Result  : Licenses for the organization should be displyed in the Licenses table of License Management page.
'                                      Note : Make sure that the available Licenses should be 10 , as what given during the Order Creation.
Reporter.ReportEvent 2, "STEP 2 BEGINS",""

Browser("Browser").Page("Page").Link("Administration").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Administration")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("View & Assign Licenses").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("View & Assign Licenses")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("View & Assign Licenses") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebTable("Library").Check CheckPoint("Library") @@ hightlight id_;_Browser("Browser").Page("Page").WebTable("Library")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebElement("10").Check CheckPoint("Avaliable Users") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("10")_;_script infofile_;_ZIP::ssf10.xml_;_
Browser("Browser").Page("Page").Sync

Reporter.ReportEvent 2, "STEP 2 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  3 - 4
' Description           :   Verify the License details by clicking on Details link from the License Management Page for the License
'                                       Verify the Effect of the updated Licenses if " Nothing has yet expired"
' Expected Result  : License details should get Updated like..
'                                    1. Customer Contact Should get Changed
'                                    2. License Type should get changed from Perpetual to Term or Vice Versa,If its chnaged to Term from Perpetual there should be Term Expiration Date.
'                                   3. Support should be changed to No from Yes,If Support chnages from No to Yes , there should be Support Expiration Date
'                                    There should not be any effect  apart from the License details in License Management page.
Reporter.ReportEvent 2, "STEP 3 - 4 BEGINS",""

Browser("Browser").Page("Page").Image("details-active").Click @@ hightlight id_;_Browser("Browser").Page("Page").Image("details-active")_;_script infofile_;_ZIP::ssf11.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Check CheckPoint("License Deatils") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebTable("Precision LMS Order #:").Check CheckPoint("Precision LMS Order Details") @@ hightlight id_;_Browser("Browser").Page("Page").WebTable("Precision LMS Order #:")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebTable("Type:").Check CheckPoint("License Type Details") @@ hightlight id_;_Browser("Browser").Page("Page").WebTable("Type:")_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("Browser").Page("Page").Sync

Reporter.ReportEvent 2, "STEP 3 - 4 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  5
' Description           :   Verify the effect of the Updated Licenses if "The existing license actually expired (type= term)"
' Expected Result  : If the existing Licenses gets expired , with the updates of that licenses the License again should be activated according to the credentials given in the Order.
'                                     Effectable Areas
'                                    1.License Management again will show the License of the Library.
'                                   2. User should able to view the Learning Items in the Find Training. (Check the Categories filter)
'                                  3. Admin should able to see the Learning items in all LISUs..check the categories filter (if there are no other licenses active for the learning items across the Organization).
'                                 Ex : Term / Support expiration dates will be extended.
Reporter.ReportEvent 2, "STEP 5 BEGINS",""

Reporter.ReportEvent 2, "Step-5 Cannot be Automated",""

Reporter.ReportEvent 2, "STEP 5 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  6
' Description           :   Verify the effect of the Updated Licenses if "The support expired (type = term, perpetual)"
' Expected Result  : If the Support of the existing Licenses gets expired , with the updates of that licenses support dates should get increased for the License.
'                                     Effectable Areas
'                                    1.License Management again will show the License of the Library.
'                                   2. User should able to view more Learning Items in the Find Training if there are any new Learning items added to the Library after the Support Exp date.(Check the Categories filter)
'                                  3. Admin should able to see more Learning items in all LISUs  if there are any new Learning items added to the Library after the Support Exp date.Check the Categories filter. (if there are no other licenses active for the learning items across the Organization).
Reporter.ReportEvent 2, "STEP 6 BEGINS",""

Reporter.ReportEvent 2, "Step-6 Cannot be Automated",""

Reporter.ReportEvent 2, "STEP 6 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  7
' Description           :   Log into IFA  https://fusion-qa.ptc.com/dailyifa/app/ with username prof_pt_co3_usr_0200@ptcunoemail.com,Password : prof7763
' Expected Result  : Log in should be successfull and should display the Welcome page.
Reporter.ReportEvent 2, "STEP 7 BEGINS",""

Browser("Browser").Page("Page").Link("Administration").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Administration")_;_script infofile_;_ZIP::ssf15.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf17.xml_;_
Browser("Browser").Page("Page").Link("Log Out").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Log Out")_;_script infofile_;_ZIP::ssf16.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf17.xml_;_
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
Browser("Browser").Page("Page").Check CheckPoint("Fusion Administration") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf22.xml_;_

Reporter.ReportEvent 2, "STEP 7 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  8 - 9
' Description           :   Click on the Edit Option from the Actions column of the Order.Note : Select an order which is having the same License which was updated in other order.
'                                       Verify the SON that is Present in the "Renewal SON" column
' Expected Result  : Edit should open the Edit Order Page , and should have a new column "Renewal SON"Note : Edit Order page - if you edit the Original order, any license 
'                                     which has been updated via another order should have the second SON listed in a column called "Renewal SON." This column can be put in the place of the 
'                                    Actions column on the Edit Order page.
'                                    This column should conatin the SON of the Order where the Existing License is been updated
Reporter.ReportEvent 2, "STEP 8 - 9 BEGINS",""

Browser("Browser").Page("Page").Link("Orders").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Orders")_;_script infofile_;_ZIP::ssf23.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Orders") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf24.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Edit").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Edit")_;_script infofile_;_ZIP::ssf25.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Check CheckPoint("Create/Edit Order") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf26.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebButton("Cancel").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("Cancel")_;_script infofile_;_ZIP::ssf28.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_3607060_;_script infofile_;_ZIP::ssf29.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Logout").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Logout")_;_script infofile_;_ZIP::ssf30.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf31.xml_;_
Browser("Browser").Close

Reporter.ReportEvent 2, "STEP 8 - 9 ENDS","SCRIPT ENDS"
'---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------