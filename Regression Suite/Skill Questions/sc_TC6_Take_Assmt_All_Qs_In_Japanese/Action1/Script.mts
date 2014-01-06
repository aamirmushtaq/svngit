'File Name: sc_TC6_Take_Assmt_All_Qs_In_Japanese
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
' Description           :   Login to Precision LMS with the user "prof_pt_co3_usr_0205@ptcunoemail.com and Password as <prof7763>.
'                                      Note : - Change Language to Japanese.
' Expected Result  : Login should be successfull for the User.
Reporter.ReportEvent 2, "STEP 1 BEGINS",""

Reporter.ReportEvent micDone, "Open the application", "Close all the browsers and Open the application"
rc=OpenApplication("http://i2361.ptcnet.ptc.com/automationhosted/", blnRet) 'Opening a new browser
If  blnRet = false Then
 	ExitAction(0)
End If
Reporter.ReportEvent micDone, "Login into  the application", "Login into the application with username:" & sLoginID
Browser("Browser").Page("Page").Login  "prof_pt_co3_usr_0205@ptcunoemail.com", "prof7763" , blnRet
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
' Description           :   Validate and answer   Questions Correct by clicking "Next Question" button from Assessment Viewer.
'                                      Models can be uploaded from Location D:\Temp\Skill_Qs_Regression from Machine I2361
' Expected Result  : As Expected it should show "Ok" button in light box after answering to all the questions.
Reporter.ReportEvent 2, "STEP 5 BEGINS",""
 @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 1")_;_script infofile_;_ZIP::ssf18.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 1").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 1")_;_script infofile_;_ZIP::ssf18.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer")_;_script infofile_;_ZIP::ssf19.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\14884\correct\q14884_j003_datumcurve.prt" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf21.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf22.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_4917074_;_script infofile_;_ZIP::ssf23.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\3032\correct\q3032_test.prt" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf37.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf38.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_3213010_;_script infofile_;_ZIP::ssf39.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\3039\correct\q3039_test.prt" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf40.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf41.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_3344082_;_script infofile_;_ZIP::ssf42.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\4039\correct\q4039_test.prt" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf43.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf44.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_3475154_;_script infofile_;_ZIP::ssf45.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\3191\correct\q3191_tank_style.prt" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf46.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf47.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_2885444_;_script infofile_;_ZIP::ssf48.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\3014\correct\q3014_test.drw" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf49.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf50.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_5769042_;_script infofile_;_ZIP::ssf51.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 8").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 8")_;_script infofile_;_ZIP::ssf178.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\3108\correct\q3108_test.asm" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf53.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf54.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_3147588_;_script infofile_;_ZIP::ssf55.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\3195\correct\q3195_conveyor.asm" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf56.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf57.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_6031186_;_script infofile_;_ZIP::ssf58.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 14").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 14")_;_script infofile_;_ZIP::ssf175.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\3173\correct\q3173_mounting_plate.prt" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf65.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf66.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_6293330_;_script infofile_;_ZIP::ssf67.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 16").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 16")_;_script infofile_;_ZIP::ssf176.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\3119\correct\q3119.m_p" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf69.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf70.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_3671876_;_script infofile_;_ZIP::ssf71.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\3199\correct\q3199.asm" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf72.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf73.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_4523730_;_script infofile_;_ZIP::ssf74.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\3106\correct\q3106_test.prt" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf75.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf76.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_3934020_;_script infofile_;_ZIP::ssf77.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\3012\correct\q3012_test.prt" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf78.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf79.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_6817618_;_script infofile_;_ZIP::ssf80.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\3006\correct\q3006_test.prt" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf81.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf82.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_4916946_;_script infofile_;_ZIP::ssf83.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 23").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 23")_;_script infofile_;_ZIP::ssf177.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\3193\correct\q3193_geometry.prt" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf86.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf87.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_7079762_;_script infofile_;_ZIP::ssf88.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\1167\correct\q1167_test.prt" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf89.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf90.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_4458308_;_script infofile_;_ZIP::ssf91.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\3011\correct\q3011_test.prt" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf92.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf93.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
wait(5)
Browser("Assessment Viewer").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_5440710_;_script infofile_;_ZIP::ssf94.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
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
'                                     Your Score :    72%
'                                     Passing Score :         Not Defined
'                                    Status :        Not Defined
'                                   Total Questions :       25
'                                   Questions Answered :    18
'                                  Questions Correct :     18
'                                   Date Attempted :        Current Date
Reporter.ReportEvent 2, "STEP 8 BEGINS",""

Browser("Browser").Page("Page").Check CheckPoint("Summary Report") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf137.xml_;_
Browser("Browser").Page("Page").WebElement("Score").Check CheckPoint("68%") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("72%")_;_script infofile_;_ZIP::ssf138.xml_;_
Browser("Browser").Page("Page").WebElement("No Of Qs").Check CheckPoint("25") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("25")_;_script infofile_;_ZIP::ssf139.xml_;_
Browser("Browser").Page("Page").WebElement("Questions Answered").Check CheckPoint("17") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("18")_;_script infofile_;_ZIP::ssf140.xml_;_
Browser("Browser").Page("Page").WebElement("Questions Correct").Check CheckPoint("Correct 17") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("18 2")_;_script infofile_;_ZIP::ssf141.xml_;_

Reporter.ReportEvent 2, "STEP 8 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  9
' Description           :   Click on  Answers Tab and validate all  Questions.
' Expected Result  : As expected questions should have Correct answers.
Reporter.ReportEvent 2, "STEP 9 BEGINS",""

Browser("Browser").Page("Page").Link("My Account").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("My Account")_;_script infofile_;_ZIP::ssf194.xml_;_
Browser("Browser").Page("Page").WebList("languages").Select "Japanese" @@ hightlight id_;_Browser("Browser").Page("Page").WebList("languages")_;_script infofile_;_ZIP::ssf195.xml_;_
Browser("Browser").Page("Page").Link("Save").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Save")_;_script infofile_;_ZIP::ssf196.xml_;_
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Ok").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf197.xml_;_
Browser("Browser").Page("Page").Link("Answers").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Answers")_;_script infofile_;_ZIP::ssf198.xml_;_
Browser("Browser").Page("Page").Check CheckPoint("評価テスト結果") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf199.xml_;_
Browser("Browser").Page("Page").Link("問題 1").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 1")_;_script infofile_;_ZIP::ssf201.xml_;_
Wait(10) @@ hightlight id_;_Browser("Browser").Page("Page").Link("Question 1")_;_script infofile_;_ZIP::ssf144.xml_;_
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Assessment Viewer").SetToProperty "hwnd", value
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 1").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 2")_;_script infofile_;_ZIP::ssf202.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 1")_;_script infofile_;_ZIP::ssf147.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 2").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 3")_;_script infofile_;_ZIP::ssf203.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 1")_;_script infofile_;_ZIP::ssf147.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 3").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 4")_;_script infofile_;_ZIP::ssf204.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 1")_;_script infofile_;_ZIP::ssf147.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 4").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 5")_;_script infofile_;_ZIP::ssf205.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 1")_;_script infofile_;_ZIP::ssf147.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 5").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 6")_;_script infofile_;_ZIP::ssf206.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 1")_;_script infofile_;_ZIP::ssf147.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 6").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 8")_;_script infofile_;_ZIP::ssf207.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 1")_;_script infofile_;_ZIP::ssf147.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 8").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 9")_;_script infofile_;_ZIP::ssf208.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 1")_;_script infofile_;_ZIP::ssf147.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 9").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 14")_;_script infofile_;_ZIP::ssf209.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 1")_;_script infofile_;_ZIP::ssf147.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 14").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 16")_;_script infofile_;_ZIP::ssf210.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 1")_;_script infofile_;_ZIP::ssf147.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 16").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 17")_;_script infofile_;_ZIP::ssf211.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 1")_;_script infofile_;_ZIP::ssf147.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 17").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 18")_;_script infofile_;_ZIP::ssf212.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 1")_;_script infofile_;_ZIP::ssf147.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 18").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 18")_;_script infofile_;_ZIP::ssf213.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 1")_;_script infofile_;_ZIP::ssf147.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 19").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 20")_;_script infofile_;_ZIP::ssf216.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 1")_;_script infofile_;_ZIP::ssf147.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 20").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 23")_;_script infofile_;_ZIP::ssf217.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 1")_;_script infofile_;_ZIP::ssf147.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 23").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 24")_;_script infofile_;_ZIP::ssf218.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 1")_;_script infofile_;_ZIP::ssf147.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 24").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 25")_;_script infofile_;_ZIP::ssf219.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 1")_;_script infofile_;_ZIP::ssf147.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("問題 25").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer")_;_script infofile_;_ZIP::ssf220.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 1")_;_script infofile_;_ZIP::ssf147.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Check CheckPoint("評価テストビューア : Skill Question - Regression Test")

Reporter.ReportEvent 2, "STEP 9 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  10
' Description           :   Click on Details Tab and validate questions Groups.
' Expected Result  : As expected, It should show all sub-groups related to this assessment.
Reporter.ReportEvent 2, "STEP 10 BEGINS",""
 @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer")_;_script infofile_;_ZIP::ssf221.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Browser("Assessment Viewer").Close @@ hightlight id_;_Browser("Browser").Page("Page").Link("Details")_;_script infofile_;_ZIP::ssf222.xml_;_
Browser("Browser").Page("Page").Link("Details").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("すべてのサブグループを表示")_;_script infofile_;_ZIP::ssf223.xml_;_
Browser("Browser").Page("Page").Link("すべてのサブグループを表示").Click
Browser("Browser").Page("Page").Sync
Wait(5) @@ hightlight id_;_Browser("Browser").Page("Page").Link("すべてのサブグループを非表示")_;_script infofile_;_ZIP::ssf224.xml_;_
Browser("Browser").Page("Page").Link("すべてのサブグループを非表示").Click
Browser("Browser").Page("Page").Sync
Wait(5) @@ hightlight id_;_Browser("Browser").Page("Page").Link("個人のアカウント")_;_script infofile_;_ZIP::ssf225.xml_;_
Browser("Browser").Page("Page").Link("個人のアカウント").Click
Browser("Browser").Page("Page").Sync
Wait(5) @@ hightlight id_;_Browser("Browser").Page("Page").WebList("languages")_;_script infofile_;_ZIP::ssf226.xml_;_
Browser("Browser").Page("Page").WebList("languages").Select "英語"
Browser("Browser").Page("Page").Sync
Wait(5) @@ hightlight id_;_Browser("Browser").Page("Page").Link("保存")_;_script infofile_;_ZIP::ssf227.xml_;_
Browser("Browser").Page("Page").Link("保存").Click
Browser("Browser").Page("Page").Sync
Wait(5) @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf228.xml_;_
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Ok").Click
Browser("Browser").Page("Page").Sync
Wait(5) @@ hightlight id_;_Browser("Browser").Page("Page").Link("Log Out")_;_script infofile_;_ZIP::ssf229.xml_;_
Browser("Browser").Page("Page").Link("Log Out").Click @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf230.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Close

Reporter.ReportEvent 2, "STEP 10 ENDS","SCRIPT ENDS"
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
