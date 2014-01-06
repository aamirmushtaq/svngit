'File Name: sc_TC3_Take_Assmt_Qs_Incrt_&_Partial
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
'  Date Started Creation: 26/06/2008
'  Date Ended Creation: 26/06/2008
'  Functions Included: fOpenApplication(),CloseAllBrowsersExceptQC(),Login()
'  History of Changes: 
'--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  1
' Description           :   Login to Precision LMS with the user "prof_pt_co3_usr_0202@ptcunoemail.com and Password as <prof7763>
' Expected Result  : Login should be successfull for the User.
Reporter.ReportEvent 2, "STEP 1 BEGINS",""

Reporter.ReportEvent micDone, "Open the application", "Close all the browsers and Open the application"
rc=OpenApplication("http://i2361.ptcnet.ptc.com/automationhosted/", blnRet) 'Opening a new browser
If  blnRet = false Then
 	ExitAction(0)
End If
Reporter.ReportEvent micDone, "Login into  the application", "Login into the application with username:" & sLoginID
Browser("Browser").Page("Page").Login  "prof_pt_co3_usr_0202@ptcunoemail.com", "prof7763" , blnRet
If  blnRet = false Then
		ExitAction(0)
End If
Browser("Browser").Page("Page").Check CheckPoint("Welcome to Precision LMS") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf5.xml_;_

Reporter.ReportEvent 2, "STEP 1 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  2
' Description           :   Click on Browse all Training tab from Find Training tab and select Type field as Assessment and click on Update button.
' Expected Result  : As expected ,Assessment Skill Questions - Regression Test should be displayed in table.
Reporter.ReportEvent 2, "STEP 2 BEGINS",""

Browser("Browser").Page("Page").Link("Find Training").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Find Training")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Browse all Training").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Browse all Training")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").WebList("tabs:panel:filterPanel:type").Select "Assessment" @@ hightlight id_;_Browser("Browser").Page("Page").WebList("tabs:panel:filterPanel:type")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Link("Update").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Update")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebElement("Skill Question - Regression").Check CheckPoint("Skill Question - Regression Test") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("Skill Question - Regression")_;_script infofile_;_ZIP::ssf10.xml_;_
Browser("Browser").Page("Page").Link("Skill Question - Regression").Check CheckPoint("Skill Question - Regression Test_2") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Skill Question - Regression")_;_script infofile_;_ZIP::ssf11.xml_;_

Reporter.ReportEvent 2, "STEP 2 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  3
' Description           :   Click the Assessment Skill Questions - Regression Test and click Start button from light box to launch assessment.
' Expected Result  : Assessment Viewer with list of assessment Questions should be displayed.
Reporter.ReportEvent 2, "STEP 3 BEGINS",""

Browser("Browser").Page("Page").Link("Skill Question - Regression").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Skill Question - Regression")_;_script infofile_;_ZIP::ssf12.xml_;_
Wait(5)
Browser("Browser").Page("Page").Link("Start").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Start")_;_script infofile_;_ZIP::ssf13.xml_;_
Wait(10)
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Assessment Viewer").SetToProperty "hwnd", value
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").Check CheckPoint("Assessment Viewer") @@ hightlight id_;_Browser("Assessment Viewer : Skill").Page("Assessment Viewer : Skill")_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Check CheckPoint("Assessment Viewer : Skill Question - Regression Test") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer")_;_script infofile_;_ZIP::ssf15.xml_;_

Reporter.ReportEvent 2, "STEP 3 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  4
' Description           :   Verify that by default , it shows the first question and every question should be as a link which allows to navigate through the assessment via the Navigation map.
' Expected Result  : As expected,it should show the first question .
Reporter.ReportEvent 2, "STEP 4 BEGINS",""

Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 1").Check CheckPoint("Question 1") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 1")_;_script infofile_;_ZIP::ssf16.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Question 1").Check CheckPoint("Question 1_2") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Question 1")_;_script infofile_;_ZIP::ssf17.xml_;_

Reporter.ReportEvent 2, "STEP 4 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  5
' Description           :   Validate and answer  Questions Partial/partial-popup/wrong-popup/In-Correct answers by clicking "Next Question" button from Assessment Viewer.
'                                       Note :-Cover one scenario with question 3012 as 1st partial answer
'                                       Models can be uploaded from Location D:\Temp\Skill_Qs_Regression from Machine I2361
' Expected Result  : As Expected it should show "Ok" button in light box after answering to all the questions.
Reporter.ReportEvent 2, "STEP 5 BEGINS",""

Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 1").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 1")_;_script infofile_;_ZIP::ssf18.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer")_;_script infofile_;_ZIP::ssf19.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\14884\partial\q14884_j003_datumcurve.prt" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf185.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf186.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_459868_;_script infofile_;_ZIP::ssf187.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\3032\partial-popup\q3032_test.prt" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf188.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf189.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_590940_;_script infofile_;_ZIP::ssf190.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\3039\partial\q3039_test.prt" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf191.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf192.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_722012_;_script infofile_;_ZIP::ssf193.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\4039\partial\q4039_test.prt.5" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf194.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf195.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\3191\partial\q3191_tank_style.prt" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf196.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf197.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_918620_;_script infofile_;_ZIP::ssf198.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\3014\partial\q3014_test.drw" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf199.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf200.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_1049692_;_script infofile_;_ZIP::ssf201.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 8").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 8")_;_script infofile_;_ZIP::ssf202.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\3108\partial\q3108_test.asm" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf203.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf204.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_1115224_;_script infofile_;_ZIP::ssf205.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\3195\partial\q3195_conveyor.asm" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf206.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf207.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_1246296_;_script infofile_;_ZIP::ssf208.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 11").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 11")_;_script infofile_;_ZIP::ssf209.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 13").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 13")_;_script infofile_;_ZIP::ssf213.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 14").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 14")_;_script infofile_;_ZIP::ssf214.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\3173\incorrect\q3173_mounting_plate.prt" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf215.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf216.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_1508440_;_script infofile_;_ZIP::ssf217.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 16").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 16")_;_script infofile_;_ZIP::ssf218.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\3119\incorrect\q3119.m_p" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf219.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf220.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_1705014_;_script infofile_;_ZIP::ssf221.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\3199\partial-popup\q3199.asm" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf222.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf223.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_1836086_;_script infofile_;_ZIP::ssf224.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\3106\incorrect\q3106_test.prt" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf225.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf226.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_1967158_;_script infofile_;_ZIP::ssf227.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\3012\partial-popup\q3012_test.prt" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf228.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf229.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_2098230_;_script infofile_;_ZIP::ssf230.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\3006\partial-popup\q3006_test.prt" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf231.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf232.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_2229302_;_script infofile_;_ZIP::ssf233.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 22").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 22")_;_script infofile_;_ZIP::ssf234.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 23").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 23")_;_script infofile_;_ZIP::ssf235.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\3193\partial\q3193_geometry.prt" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf236.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf237.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_2360374_;_script infofile_;_ZIP::ssf238.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\1167\partial\q1167_test.prt" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf239.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf240.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_2491446_;_script infofile_;_ZIP::ssf241.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\3011\partial\q3011_test.prt" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf242.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf243.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_2622518_;_script infofile_;_ZIP::ssf244.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf245.xml_;_
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Check CheckPoint("modal-dialog-pagemap") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap")_;_script infofile_;_ZIP::ssf95.xml_;_

Reporter.ReportEvent 2, "STEP 5 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  6
' Description           :   Now terminate the assessment by clicking the "ok" button.
' Expected Result  : This should terminate the assessment and take you the Assessment Results page.
Reporter.ReportEvent 2, "STEP 6 BEGINS",""

Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf96.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf97.xml_;_
wait(30)
Browser("Browser").Page("Page").Check CheckPoint("Assessment Result") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf100.xml_;_

Reporter.ReportEvent 2, "STEP 6 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  7
' Description           :   Verify Assessment Results Page.
' Expected Result  : As expected , Title should be Assessment Results and it should have 3 Tabs Summary, Answers and Details 
Reporter.ReportEvent 2, "STEP 7 BEGINS",""

Browser("Browser").Page("Page").Link("Summary").Check CheckPoint("Summary") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Summary")_;_script infofile_;_ZIP::ssf134.xml_;_
Browser("Browser").Page("Page").Link("Answers").Check CheckPoint("Answers") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Answers")_;_script infofile_;_ZIP::ssf135.xml_;_
Browser("Browser").Page("Page").Link("Details").Check CheckPoint("Details") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Details")_;_script infofile_;_ZIP::ssf136.xml_;_

Reporter.ReportEvent 2, "STEP 7 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  8
' Description           :   Validate Summary Tab.
' Expected Result  : As expected ,It should show below details.
'                                     Your Score :    30%
'                                     Passing Score :         Not Defined
'                                    Status :        Not Defined
'                                   Total Questions :       25
'                                   Questions Answered :    17
'                                  Questions Correct :     0
'                                   Date Attempted :        Current Date
Reporter.ReportEvent 2, "STEP 8 BEGINS",""

Browser("Browser").Page("Page").Check CheckPoint("Summary Report") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf137.xml_;_
Browser("Browser").Page("Page").WebElement("30%").Check CheckPoint("30%_2") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("30%")_;_script infofile_;_ZIP::ssf246.xml_;_
Browser("Browser").Page("Page").WebElement("No Of Qs").Check CheckPoint("25") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("25")_;_script infofile_;_ZIP::ssf139.xml_;_
Browser("Browser").Page("Page").WebElement("Questions Answered").Check CheckPoint("17") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("18")_;_script infofile_;_ZIP::ssf140.xml_;_
Browser("Browser").Page("Page").WebElement("0").Check CheckPoint("Correct 0") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("0")_;_script infofile_;_ZIP::ssf247.xml_;_

Reporter.ReportEvent 2, "STEP 8 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  9
' Description           :   Click on  Answers Tab and validate all  Questions.
' Expected Result  : As expected questions should have different  Partial/partial-popup/wrong-popup/In-Correct answers.
'                                    Note :- Check also questions with pop-up grading results.
Reporter.ReportEvent 2, "STEP 9 BEGINS",""

Browser("Browser").Page("Page").Link("Answers").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Answers")_;_script infofile_;_ZIP::ssf142.xml_;_
Browser("Browser").Page("Page").Check CheckPoint("Answers Tab") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf143.xml_;_
Browser("Browser").Page("Page").Link("Question 1").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Question 1")_;_script infofile_;_ZIP::ssf144.xml_;_
Wait(10) @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer")_;_script infofile_;_ZIP::ssf145.xml_;_
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Assessment Viewer").SetToProperty "hwnd", value
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 1").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 1")_;_script infofile_;_ZIP::ssf147.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Partially Correct").Check CheckPoint("Partially Correct") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Partially Correct")_;_script infofile_;_ZIP::ssf262.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("50%").Check CheckPoint("50%") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("50%")_;_script infofile_;_ZIP::ssf263.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result").Check CheckPoint("Result") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result")_;_script infofile_;_ZIP::ssf261.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 2").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 2")_;_script infofile_;_ZIP::ssf148.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Partially Correct").Check CheckPoint("Partially Correct_2") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Partially Correct")_;_script infofile_;_ZIP::ssf265.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("40%").Check CheckPoint("40%") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("40%")_;_script infofile_;_ZIP::ssf266.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result").Check CheckPoint("Result_2") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result")_;_script infofile_;_ZIP::ssf267.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Click Here").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Click Here")_;_script infofile_;_ZIP::ssf248.xml_;_
Browser("Detail of Actual Result").Page("Detail of Actual Result").WebTable("#").Check CheckPoint("Actual Results") @@ hightlight id_;_Browser("Detail of Actual Result").Page("Detail of Actual Result").WebTable("#")_;_script infofile_;_ZIP::ssf249.xml_;_
Browser("Detail of Actual Result").Page("Detail of Actual Result").Sync @@ hightlight id_;_Browser("Detail of Actual Result").Page("Detail of Actual Result")_;_script infofile_;_ZIP::ssf250.xml_;_
Wait(5)
Browser("Detail of Actual Result").Close
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 3").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 3")_;_script infofile_;_ZIP::ssf149.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Partially Correct").Check CheckPoint("Partially Correct_3") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Partially Correct")_;_script infofile_;_ZIP::ssf269.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("60%").Check CheckPoint("60%") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("60%")_;_script infofile_;_ZIP::ssf270.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result").Check CheckPoint("Result_3") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result")_;_script infofile_;_ZIP::ssf271.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 4").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 4")_;_script infofile_;_ZIP::ssf150.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Partially Correct").Check CheckPoint("Partially Correct_4") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Partially Correct")_;_script infofile_;_ZIP::ssf273.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("15%").Check CheckPoint("15%") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("15%")_;_script infofile_;_ZIP::ssf274.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result").Check CheckPoint("Result_4") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result")_;_script infofile_;_ZIP::ssf275.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 5").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 5")_;_script infofile_;_ZIP::ssf151.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Partially Correct").Check CheckPoint("Partially Correct_5") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Partially Correct")_;_script infofile_;_ZIP::ssf277.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("30%").Check CheckPoint("30%_3") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("30%")_;_script infofile_;_ZIP::ssf278.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result").Check CheckPoint("Result_5") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result")_;_script infofile_;_ZIP::ssf279.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 6").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 6")_;_script infofile_;_ZIP::ssf152.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Partially Correct").Check CheckPoint("Partially Correct_6") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Partially Correct")_;_script infofile_;_ZIP::ssf281.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("90%").Check CheckPoint("90%") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("90%")_;_script infofile_;_ZIP::ssf282.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result").Check CheckPoint("Result_6") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result")_;_script infofile_;_ZIP::ssf283.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 7").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 7")_;_script infofile_;_ZIP::ssf284.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Not Answered").Check CheckPoint("Not Answered") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Not Answered")_;_script infofile_;_ZIP::ssf285.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("0%").Check CheckPoint("0%") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("0%")_;_script infofile_;_ZIP::ssf286.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 8").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 8")_;_script infofile_;_ZIP::ssf153.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Partially Correct").Check CheckPoint("Partially Correct_7") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Partially Correct")_;_script infofile_;_ZIP::ssf288.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("25%").Check CheckPoint("25%") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("25%")_;_script infofile_;_ZIP::ssf289.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result").Check CheckPoint("Result_7") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result")_;_script infofile_;_ZIP::ssf290.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 9").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 9")_;_script infofile_;_ZIP::ssf154.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Partially Correct").Check CheckPoint("Partially Correct_8") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Partially Correct")_;_script infofile_;_ZIP::ssf292.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("80%").Check CheckPoint("80%") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("80%")_;_script infofile_;_ZIP::ssf293.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result").Check CheckPoint("Result_8") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result")_;_script infofile_;_ZIP::ssf294.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 14").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 14")_;_script infofile_;_ZIP::ssf156.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Incorrect").Check CheckPoint("Incorrect") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Incorrect")_;_script infofile_;_ZIP::ssf296.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("0%_2").Check CheckPoint("0%_2") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("0% 2")_;_script infofile_;_ZIP::ssf297.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result").Check CheckPoint("Result_9") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result")_;_script infofile_;_ZIP::ssf298.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 16").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 16")_;_script infofile_;_ZIP::ssf157.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Incorrect").Check CheckPoint("Incorrect_2") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Incorrect")_;_script infofile_;_ZIP::ssf300.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("0%_2").Check CheckPoint("0%_3") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("0% 2")_;_script infofile_;_ZIP::ssf301.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result").Check CheckPoint("Result_10") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result")_;_script infofile_;_ZIP::ssf302.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 17").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 17")_;_script infofile_;_ZIP::ssf158.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Partially Correct").Check CheckPoint("Partially Correct_9") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Partially Correct")_;_script infofile_;_ZIP::ssf304.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("85%").Check CheckPoint("85%") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("85%")_;_script infofile_;_ZIP::ssf305.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result").Check CheckPoint("Result_11") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result")_;_script infofile_;_ZIP::ssf306.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Click Here").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Click Here")_;_script infofile_;_ZIP::ssf251.xml_;_
Browser("Detail of Actual Result").Page("Detail of Actual Result").Check CheckPoint("Detail of Actual Result") @@ hightlight id_;_Browser("Detail of Actual Result").Page("Detail of Actual Result")_;_script infofile_;_ZIP::ssf252.xml_;_
Browser("Detail of Actual Result").Page("Detail of Actual Result").Sync @@ hightlight id_;_Browser("Detail of Actual Result").Page("Detail of Actual Result")_;_script infofile_;_ZIP::ssf253.xml_;_
Wait(5)
Browser("Detail of Actual Result").Close
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 18").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 18")_;_script infofile_;_ZIP::ssf159.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Incorrect").Check CheckPoint("Incorrect_3") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Incorrect")_;_script infofile_;_ZIP::ssf308.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("0%_2").Check CheckPoint("0%_4") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("0% 2")_;_script infofile_;_ZIP::ssf309.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result").Check CheckPoint("Result_12") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result")_;_script infofile_;_ZIP::ssf310.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 19").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 19")_;_script infofile_;_ZIP::ssf160.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Partially Correct").Check CheckPoint("Partially Correct_10") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Partially Correct")_;_script infofile_;_ZIP::ssf312.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("30%").Check CheckPoint("30%_4") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("30%")_;_script infofile_;_ZIP::ssf313.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result").Check CheckPoint("Result_13") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result")_;_script infofile_;_ZIP::ssf314.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Click Here").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Click Here")_;_script infofile_;_ZIP::ssf254.xml_;_
Browser("Detail of Actual Result").Page("Detail of Actual Result").Check CheckPoint("Detail of Actual Result_2") @@ hightlight id_;_Browser("Detail of Actual Result").Page("Detail of Actual Result")_;_script infofile_;_ZIP::ssf255.xml_;_
Browser("Detail of Actual Result").Page("Detail of Actual Result").Sync @@ hightlight id_;_Browser("Detail of Actual Result").Page("Detail of Actual Result")_;_script infofile_;_ZIP::ssf256.xml_;_
Wait(5)
Browser("Detail of Actual Result").Close
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 20").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 20")_;_script infofile_;_ZIP::ssf161.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Partially Correct").Check CheckPoint("Partially Correct_11") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Partially Correct")_;_script infofile_;_ZIP::ssf316.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("85%").Check CheckPoint("85%_2") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("85%")_;_script infofile_;_ZIP::ssf317.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result").Check CheckPoint("Result_14") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result")_;_script infofile_;_ZIP::ssf318.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Click Here").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Click Here")_;_script infofile_;_ZIP::ssf257.xml_;_
Browser("Detail of Actual Result").Page("Detail of Actual Result").Check CheckPoint("Detail of Actual Result_3") @@ hightlight id_;_Browser("Detail of Actual Result").Page("Detail of Actual Result")_;_script infofile_;_ZIP::ssf258.xml_;_
Browser("Detail of Actual Result").Page("Detail of Actual Result").Sync @@ hightlight id_;_Browser("Detail of Actual Result").Page("Detail of Actual Result")_;_script infofile_;_ZIP::ssf259.xml_;_
Wait(5)
Browser("Detail of Actual Result").Close
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 23").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 23")_;_script infofile_;_ZIP::ssf162.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Partially Correct").Check CheckPoint("Partially Correct_12") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Partially Correct")_;_script infofile_;_ZIP::ssf321.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("10%").Check CheckPoint("10%") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("10%")_;_script infofile_;_ZIP::ssf322.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result").Check CheckPoint("Result_15") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result")_;_script infofile_;_ZIP::ssf323.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 24").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 24")_;_script infofile_;_ZIP::ssf163.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Partially Correct").Check CheckPoint("Partially Correct_13") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Partially Correct")_;_script infofile_;_ZIP::ssf325.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("90%").Check CheckPoint("90%_2") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("90%")_;_script infofile_;_ZIP::ssf326.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result").Check CheckPoint("Result_16") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result")_;_script infofile_;_ZIP::ssf327.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 25").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 25")_;_script infofile_;_ZIP::ssf164.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer")_;_script infofile_;_ZIP::ssf165.xml_;_
Wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Partially Correct").Check CheckPoint("Partially Correct_14") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Partially Correct")_;_script infofile_;_ZIP::ssf329.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("50%").Check CheckPoint("50%_2") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("50%")_;_script infofile_;_ZIP::ssf330.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result").Check CheckPoint("Result_17") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result")_;_script infofile_;_ZIP::ssf331.xml_;_
Browser("Assessment Viewer").Close
Browser("Browser").Page("Page").Check CheckPoint("Assessment Result_2") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf166.xml_;_

Reporter.ReportEvent 2, "STEP 9 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  10
' Description           :   Click on Details Tab and validate questions Groups.
' Expected Result  : As expected, It should show all sub-groups related to this assessment.
Reporter.ReportEvent 2, "STEP 10 BEGINS",""

Browser("Browser").Page("Page").Link("Details").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Details")_;_script infofile_;_ZIP::ssf167.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Details Tab") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf168.xml_;_
Browser("Browser").Page("Page").Link("Show All Subgroups").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Show All Subgroups")_;_script infofile_;_ZIP::ssf169.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Link("Hide All Subgroups").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Hide All Subgroups")_;_script infofile_;_ZIP::ssf170.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Link("Log Out").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Log Out")_;_script infofile_;_ZIP::ssf171.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf172.xml_;_
Browser("Browser").Close

Reporter.ReportEvent 2, "STEP 10 ENDS","SCRIPT ENDS"
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------