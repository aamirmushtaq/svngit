'File Name: sc_TC4_Take_Assmt_Q3012_2nd_Partial_Ans
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
' Description           :   Login to Precision LMS with the user "prof_pt_co3_usr_0203@ptcunoemail.com and Password as <prof7763>
' Expected Result  : Login should be successfull for the User.
Reporter.ReportEvent 2, "STEP 1 BEGINS",""

Reporter.ReportEvent micDone, "Open the application", "Close all the browsers and Open the application"
rc=OpenApplication("http://i2361.ptcnet.ptc.com/automationhosted/", blnRet) 'Opening a new browser
If  blnRet = false Then
 	ExitAction(0)
End If
Reporter.ReportEvent micDone, "Login into  the application", "Login into the application with username:" & sLoginID
Browser("Browser").Page("Page").Login  "prof_pt_co3_usr_0203@ptcunoemail.com", "prof7763" , blnRet
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
' Description           :   Validate and answer question 3012 with 2nd partial answer and Click Submit Entire Assessment
'                                      Note :-Models can be uploaded from Location D:\Temp\Skill_Qs_Regression from Machine I2361
' Expected Result  : As Expected it should show "Ok" button in light box after answering to all the questions.
Reporter.ReportEvent 2, "STEP 5 BEGINS",""

Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 1").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 1")_;_script infofile_;_ZIP::ssf18.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer")_;_script infofile_;_ZIP::ssf19.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 19").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Question 19")_;_script infofile_;_ZIP::ssf185.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer")_;_script infofile_;_ZIP::ssf19.xml_;_
Wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Temp\Skill_Qs_Regression\3012\partial-popup\q3012_test.prt.1" @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf186.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer")_;_script infofile_;_ZIP::ssf19.xml_;_
Wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Submit entire assessment").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Submit entire assessment")_;_script infofile_;_ZIP::ssf187.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer")_;_script infofile_;_ZIP::ssf19.xml_;_

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
'                                     Your Score :    2%
'                                     Passing Score :         Not Defined
'                                    Status :        Not Defined
'                                   Total Questions :       25
'                                   Questions Answered :    1
'                                  Questions Correct :     0
'                                   Date Attempted :        Current Date
Reporter.ReportEvent 2, "STEP 8 BEGINS",""

Browser("Browser").Page("Page").Check CheckPoint("Summary Report") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf137.xml_;_
Browser("Browser").Page("Page").WebElement("2%").Check CheckPoint("Score") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("2%")_;_script infofile_;_ZIP::ssf189.xml_;_
Browser("Browser").Page("Page").WebElement("25").Check CheckPoint("No Of Qs") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("No Of Qs")_;_script infofile_;_ZIP::ssf190.xml_;_
Browser("Browser").Page("Page").WebElement("1").Check CheckPoint("Answered") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("1")_;_script infofile_;_ZIP::ssf191.xml_;_
Browser("Browser").Page("Page").WebElement("0").Check CheckPoint("Correct") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("0")_;_script infofile_;_ZIP::ssf192.xml_;_

Reporter.ReportEvent 2, "STEP 8 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  9
' Description           :   Click on  Answers Tab and validate 3012 Question.
' Expected Result  : As expected ,3012 Question should have different  Partial answer.
'                                     Note :- Check also questions with pop-up grading results.
Reporter.ReportEvent 2, "STEP 9 BEGINS",""

Browser("Browser").Page("Page").Link("Answers").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Answers")_;_script infofile_;_ZIP::ssf142.xml_;_
Browser("Browser").Page("Page").Check CheckPoint("Answers Tab") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf143.xml_;_
Browser("Browser").Page("Page").Link("Question 19").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Question 19")_;_script infofile_;_ZIP::ssf193.xml_;_
Wait(10) @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer")_;_script infofile_;_ZIP::ssf145.xml_;_
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Assessment Viewer").SetToProperty "hwnd", value
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5)
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Partially Correct").Check CheckPoint("Partially Correct") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("Partially Correct")_;_script infofile_;_ZIP::ssf197.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("40%").Check CheckPoint("40%") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebElement("40%")_;_script infofile_;_ZIP::ssf198.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result").Check CheckPoint("Result") @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").WebTable("Result")_;_script infofile_;_ZIP::ssf199.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Link("Click Here").Click @@ hightlight id_;_Browser("Assessment Viewer").Page("Assessment Viewer").Link("Click Here")_;_script infofile_;_ZIP::ssf194.xml_;_
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5)
Browser("Detail of Actual Result").Page("Detail of Actual Result").Check CheckPoint("Detail of Actual Result") @@ hightlight id_;_Browser("Detail of Actual Result").Page("Detail of Actual Result")_;_script infofile_;_ZIP::ssf195.xml_;_
Browser("Detail of Actual Result").Page("Detail of Actual Result").Sync @@ hightlight id_;_Browser("Detail of Actual Result").Page("Detail of Actual Result")_;_script infofile_;_ZIP::ssf196.xml_;_
Wait(5)
Browser("Detail of Actual Result").Close
Browser("Assessment Viewer").Page("Assessment Viewer").Sync
Wait(5)
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