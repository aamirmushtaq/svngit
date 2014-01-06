'File Name: SC01_Health_checkup_of_Precision LMS_Production_Instance

'  File Type:  Test Script
'  Data-Driven: No
'  Data-Driven Stand Alone: No 
'  Data-Script Called By:   None
'  Data-Script Calls:  None

'  AUT Created For:  Precision R2.0
'  AUT Version Test Created In:R2.0
'  Web Browser & Version Created For:
'  OS System Created For:  Windows 2K, Windows XP 
'
'  Purpose:  script 's created  for  Precision to validate the UI
'  Pre-Requisite Testcases:None

'  Author:  Ravi Kishore
'  Date Started Creation: 31/08/2009
'  Date Ended Creation: 31/08/2009
'  Functions Included: fOpenApplication(),CloseAllBrowsersExceptQC(),Login()
'  History of Changes: 
'--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
'--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  1
' Description           :   Log into "https://precisionlms.ptc.com" Username : prof_verify_manager@ptcunoemail.com Password : "prof7763"
' Expected Result  : Log in should be successfull for the user
Reporter.ReportEvent 2, "STEP 1 BEGINS",""
 @@ hightlight id_;_262974_;_script infofile_;_ZIP::ssf7.xml_;_
Reporter.ReportEvent micDone, "Open the application", "Close all the browsers and Open the application"
rc=OpenApplication("https://precisionlmstest.ptc.com/", blnRet) 'Opening a new browser
If  blnRet = false Then
 	ExitAction(0)
End If
Reporter.ReportEvent micDone, "Login into  the application", "Login into the application with username:" & sLoginID
Browser("Browser").Page("Page").Login  "precisionuser1@plms.com", "welcome" , blnRet
If  blnRet = false Then
ExitAction(0)
End If
Browser("Browser").Page("Page").Sync
Wait(10)
Browser("Browser").Page("Page").Check CheckPoint("Welcome to Precision LMS") @@ hightlight id_;_Browser("Precision LMS : Login").Page("Precision LMS : Login")_;_script infofile_;_ZIP::ssf6.xml_;_

Reporter.ReportEvent 2, "STEP 1 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  2
' Description           :   Go to Find Training and launch the course "Introduction to Pro/ENGINEER Wildfire 4.0 - Fundamentals". Attempt  topics of the course. Attempting the course assessment is optional.                                
' Expected Result  : As expected , User should see Course "Introduction to Pro/ENGINEER Wildfire 4.0 - Fundamentals" , Launch the course and also Embedded Assessment .
Reporter.ReportEvent 2, "STEP 2 BEGINS","launch the course Introduction to Pro/ENGINEER Wildfire 4.0 - Fundamentals"

Browser("Browser").Page("Page").Link("Find Training").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Find Training")_;_script infofile_;_ZIP::ssf211.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebList("ftSearchType").Select "Courses" @@ hightlight id_;_Browser("Browser").Page("Page").WebList("ftSearchType")_;_script infofile_;_ZIP::ssf212.xml_;_
Browser("Browser").Page("Page").WebEdit("searchField").Set "SAB-CEK2701" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("searchField")_;_script infofile_;_ZIP::ssf213.xml_;_
Browser("Browser").Page("Page").WebList("categories").Select "Pro/ENGINEER & Creo Elements" @@ hightlight id_;_Browser("Browser").Page("Page").WebList("categories")_;_script infofile_;_ZIP::ssf214.xml_;_
Browser("Browser").Page("Page").WebList("version").Select "Wildfire 4.0" @@ hightlight id_;_Browser("Browser").Page("Page").WebList("version")_;_script infofile_;_ZIP::ssf215.xml_;_
Browser("Browser").Page("Page").WebButton("Go").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("Go")_;_script infofile_;_ZIP::ssf216.xml_;_
Browser("Browser").Page("Page").Sync
wait(5)
Browser("Browser").Page("Page").Link("Introduction to Pro/ENGINEER").Check CheckPoint("Introduction to Pro/ENGINEER Wildfire 4.0 - Fundamentals_2") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Introduction to Pro/ENGINEER")_;_script infofile_;_ZIP::ssf219.xml_;_
Browser("Browser").Page("Page").Link("Introduction to Pro/ENGINEER").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Introduction to Pro/ENGINEER")_;_script infofile_;_ZIP::ssf217.xml_;_
Browser("Browser").Page("Page").Sync
Wait(10)
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").SetToProperty "hwnd", value @@ hightlight id_;_Browser("Course Viewer : Introduction").Page("Course Viewer : Introduction").Link("Introduction")_;_script infofile_;_ZIP::ssf15.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Introduction").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Introduction")_;_script infofile_;_ZIP::ssf196.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync @@ hightlight id_;_Browser("Course Viewer : Introduction").Page("Course Viewer : Introduction").Link("Understanding the Main")_;_script infofile_;_ZIP::ssf18.xml_;_
Wait(5)
Browser("Course Viewer").Page("Course Viewer").Link("Understanding Pro/ENGINEER").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Understanding Pro/ENGINEER")_;_script infofile_;_ZIP::ssf194.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync @@ hightlight id_;_Browser("Course Viewer : Introduction").Page("Course Viewer : Introduction").Link("Understanding the Main")_;_script infofile_;_ZIP::ssf18.xml_;_
Wait(5)
Browser("Course Viewer").Page("Course Viewer").Link("Using the Pro/ENGINEER").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Using the Pro/ENGINEER")_;_script infofile_;_ZIP::ssf195.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync @@ hightlight id_;_Browser("Course Viewer : Introduction").Page("Course Viewer : Introduction").Link("Understanding the Main")_;_script infofile_;_ZIP::ssf18.xml_;_
Wait(5)
Browser("Course Viewer").Page("Course Viewer").Link("Retake Assessment").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Retake Assessment")_;_script infofile_;_ZIP::ssf90.xml_;_
Wait(5)
Browser("Course Viewer").Page("Course Viewer").Link("Start").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Start")_;_script infofile_;_ZIP::ssf24.xml_;_
Wait(10)
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").SetToProperty "hwnd", value
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5)
Browser("Course Viewer").Page("Course Viewer").Check CheckPoint("Assessment Viewer : Introduction to Pro/ENGINEER Wildfire 4.0 - Fundamentals") @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf25.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync @@ hightlight id_;_Browser("Course Viewer : Introduction").Page("Course Viewer : Introduction").Link("Creating Rounds by Selecting")_;_script infofile_;_ZIP::ssf21.xml_;_
Wait(5)
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#1"
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf27.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync @@ hightlight id_;_Browser("Course Viewer : Introduction").Page("Course Viewer : Introduction").Link("Creating Rounds by Selecting")_;_script infofile_;_ZIP::ssf21.xml_;_
Wait(5)
Browser("Course Viewer").Page("Course Viewer").Link("Submit entire assessment").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Submit entire assessment")_;_script infofile_;_ZIP::ssf192.xml_;_
 @@ hightlight id_;_Browser("Course Viewer : Introduction").Page("Course Viewer : Introduction").Link("Creating Rounds by Selecting")_;_script infofile_;_ZIP::ssf21.xml_;_
Reporter.ReportEvent 2, "STEP 2 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  3
' Description           :   After completing the course check that the course is present in the user's completed learning. Verify the score.
' Expected Result  : As expected ,  Score should be 100%.
Reporter.ReportEvent 2, "STEP 3 BEGINS","Verify the score of Embedded Assessment"

Browser("Course Viewer").Page("Course Viewer").Sync @@ hightlight id_;_Browser("Course Viewer : Introduction").Page("Course Viewer : Introduction").Link("Creating Rounds by Selecting")_;_script infofile_;_ZIP::ssf21.xml_;_
Wait(10)
Browser("Course Viewer").Page("Course Viewer").Frame("modal-dialog-pagemap").Link("Ok").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf82.xml_;_
Wait(20) @@ hightlight id_;_Browser("Course Viewer : Introduction").Page("Course Viewer : Introduction").Link("Creating Rounds by Selecting")_;_script infofile_;_ZIP::ssf21.xml_;_
Browser("Browser").Page("Page").Check CheckPoint("Assessment Result") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf83.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Course Viewer : Introduction").Page("Course Viewer : Introduction").Link("Creating Rounds by Selecting")_;_script infofile_;_ZIP::ssf21.xml_;_
Wait(5)
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Course Viewer : Introduction").Page("Course Viewer : Introduction").Link("Creating Rounds by Selecting")_;_script infofile_;_ZIP::ssf21.xml_;_

Reporter.ReportEvent 2, "STEP 3 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  4
' Description           :   Now go to Find Training and launch the assessment ""Screening - 2nd Interview (Pro/ENGINEER Wildfire 4.0)"". Profie ID "3845"
'                                      Attempt every question (knowledge & skill) in the assessment and in the end submit the assessment for grading.
' Expected Result  : As expected ,  User should see Assessment ""Screening - 2nd Interview (Pro/ENGINEER Wildfire 4.0)"" , Launch the Assessment .
Reporter.ReportEvent 2, "STEP 4 BEGINS","Launch the assessment Benchmark - Comprehensive Evaluation (Pro/ENGINEER Wildfire 3.0)"

Browser("Browser").Page("Page").Link("Find Training").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Find Training")_;_script infofile_;_ZIP::ssf94.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Course Viewer : Introduction").Page("Course Viewer : Introduction").Link("Creating Rounds by Selecting")_;_script infofile_;_ZIP::ssf21.xml_;_
Browser("Browser").Page("Page").WebList("ftSearchType").Select "Assessments" @@ hightlight id_;_Browser("Browser").Page("Page").WebList("ftSearchType")_;_script infofile_;_ZIP::ssf212.xml_;_
Browser("Browser").Page("Page").WebEdit("searchField").Set "Screening" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("searchField")_;_script infofile_;_ZIP::ssf213.xml_;_
Wait(5)
Browser("Browser").Page("Page").WebList("categories").Select "Pro/ENGINEER & Creo Elements" @@ hightlight id_;_Browser("Browser").Page("Page").WebList("categories")_;_script infofile_;_ZIP::ssf214.xml_;_
Wait(5)
Browser("Browser").Page("Page").WebList("version").Select "Wildfire 4.0" @@ hightlight id_;_Browser("Browser").Page("Page").WebList("version")_;_script infofile_;_ZIP::ssf215.xml_;_
Wait(5)
Browser("Browser").Page("Page").WebButton("Go").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("Go")_;_script infofile_;_ZIP::ssf216.xml_;_
Browser("Browser").Page("Page").Sync
wait(5)
'Browser("Browser").Page("Page").Link("Screening - 2nd Interview").Check CheckPoint("Screening - 2nd Interview (Pro/ENGINEER Wildfire 4.0)") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Screening - 2nd Interview")_;_script infofile_;_ZIP::ssf109.xml_;_
Browser("Browser").Page("Page").Link("Screening - 2nd Interview").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Screening - 2nd Interview")_;_script infofile_;_ZIP::ssf110.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Course Viewer : Introduction").Page("Course Viewer : Introduction").Link("Creating Rounds by Selecting")_;_script infofile_;_ZIP::ssf21.xml_;_
Wait(5)
Browser("Browser").Page("Page").Link("Retest").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Retest")_;_script infofile_;_ZIP::ssf177.xml_;_
Wait(10)
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").SetToProperty "hwnd", value @@ hightlight id_;_Browser("Course Viewer : Introduction").Page("Course Viewer : Introduction").Link("Introduction")_;_script infofile_;_ZIP::ssf15.xml_;_
Wait(5)
Browser("Course Viewer").Page("Course Viewer").Check CheckPoint("Assessment Viewer : Screening - 2nd Interview (Pro/ENGINEER Wildfire 4.0)") @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf112.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#1" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf113.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf114.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync @@ hightlight id_;_Browser("Course Viewer : Introduction").Page("Course Viewer : Introduction").Link("Creating Rounds by Selecting")_;_script infofile_;_ZIP::ssf21.xml_;_
Wait(15)
Browser("Course Viewer").Page("Course Viewer").Link("Question 9").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Question 9")_;_script infofile_;_ZIP::ssf197.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Fusion_QA\Automation\Scripts\SQ_Models\q3120_vase.prt.1" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf198.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf114.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync @@ hightlight id_;_Browser("Course Viewer : Introduction").Page("Course Viewer : Introduction").Link("Creating Rounds by Selecting")_;_script infofile_;_ZIP::ssf21.xml_;_
Wait(15)
Browser("Course Viewer").Page("Course Viewer").Link("Question 11").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Question 11")_;_script infofile_;_ZIP::ssf204.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Fusion_QA\Automation\Scripts\SQ_Models\q3184_dimple.prt.1" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf198.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf114.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync @@ hightlight id_;_Browser("Course Viewer : Introduction").Page("Course Viewer : Introduction").Link("Creating Rounds by Selecting")_;_script infofile_;_ZIP::ssf21.xml_;_
Wait(15)
Browser("Course Viewer").Page("Course Viewer").Link("Question 16").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Question 16")_;_script infofile_;_ZIP::ssf201.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Fusion_QA\Automation\Scripts\SQ_Models\q3198.asm.1" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf198.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf114.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync @@ hightlight id_;_Browser("Course Viewer : Introduction").Page("Course Viewer : Introduction").Link("Creating Rounds by Selecting")_;_script infofile_;_ZIP::ssf21.xml_;_
Wait(15)
Browser("Course Viewer").Page("Course Viewer").Link("Question 24").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Question 24")_;_script infofile_;_ZIP::ssf205.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Fusion_QA\Automation\Scripts\SQ_Models\q3015_test.drw.1" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebFile("response:fileUploads:1:modelFi")_;_script infofile_;_ZIP::ssf161.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebFile("response:fileUploads:1:modelFi").Set "D:\Fusion_QA\Automation\Scripts\SQ_Models\q3015_part.prt.1" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf163.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf156.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync @@ hightlight id_;_Browser("Course Viewer : Introduction").Page("Course Viewer : Introduction").Link("Creating Rounds by Selecting")_;_script infofile_;_ZIP::ssf21.xml_;_
Wait(60)
Browser("Course Viewer").Page("Course Viewer").Frame("modal-dialog-pagemap").Link("Ok").Click

Reporter.ReportEvent 2, "STEP 4 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  5
' Description           :   After completing the assessment check that the assessment is present in completed learning. Verify the score.
' Expected Result  : As expected ,  Score should be 100%.
Reporter.ReportEvent 2, "STEP 5 BEGINS","Verify the score of Assessment"
 @@ hightlight id_;_Browser("Course Viewer : Introduction").Page("Course Viewer : Introduction").Link("Creating Rounds by Selecting")_;_script infofile_;_ZIP::ssf21.xml_;_
Wait(60)
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Assessment Results") @@ hightlight id_;_Browser("Browser").Page("Page").WebTable("Score")_;_script infofile_;_ZIP::ssf169.xml_;_
Browser("Browser").Page("Page").Link("Home").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("My Account")_;_script infofile_;_ZIP::ssf171.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)

Reporter.ReportEvent 2, "STEP 5 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  6
' Description           :   Now go to Find Training and launch the assessment ""SScreening - 2nd Interview (Pro/ENGINEER Wildfire 5.0)". Profie ID "4546"
'                                      Attempt every question (knowledge & skill) in the assessment and in the end submit the assessment for grading.
' Expected Result  : As expected ,  User should see Assessment ""Screening - 2nd Interview (Pro/ENGINEER Wildfire 5.0)"" , Launch the Assessment .
Reporter.ReportEvent 2, "STEP 6 BEGINS","Launch the assessment Screening - 2nd Interview (Pro/ENGINEER Wildfire 5.0)"

Browser("Browser").Page("Page").Link("Find Training").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Find Training")_;_script infofile_;_ZIP::ssf94.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Course Viewer : Introduction").Page("Course Viewer : Introduction").Link("Creating Rounds by Selecting")_;_script infofile_;_ZIP::ssf21.xml_;_
Browser("Browser").Page("Page").WebList("ftSearchType").Select "Assessments" @@ hightlight id_;_Browser("Browser").Page("Page").WebList("ftSearchType")_;_script infofile_;_ZIP::ssf212.xml_;_
Browser("Browser").Page("Page").WebEdit("searchField").Set "Screening" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("searchField")_;_script infofile_;_ZIP::ssf213.xml_;_
wait(5)
Browser("Browser").Page("Page").WebList("categories").Select "Pro/ENGINEER & Creo Elements" @@ hightlight id_;_Browser("Browser").Page("Page").WebList("categories")_;_script infofile_;_ZIP::ssf214.xml_;_
wait(5)
Browser("Browser").Page("Page").WebList("version").Select "Elements/Pro 5.0" @@ hightlight id_;_Browser("Browser").Page("Page").WebList("version")_;_script infofile_;_ZIP::ssf215.xml_;_
wait(5)
Browser("Browser").Page("Page").WebButton("Go").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("Go")_;_script infofile_;_ZIP::ssf216.xml_;_
Browser("Browser").Page("Page").Sync
'Browser("Browser").Page("Page").Link("Screening - 2nd Interview_2").Check CheckPoint("Screening - 2nd Interview (Pro/ENGINEER Wildfire 5.0)") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Screening - 2nd Interview 2")_;_script infofile_;_ZIP::ssf206.xml_;_
Browser("Browser").Page("Page").Link("Screening - 2nd Interview_2").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Screening - 2nd Interview")_;_script infofile_;_ZIP::ssf110.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Course Viewer : Introduction").Page("Course Viewer : Introduction").Link("Creating Rounds by Selecting")_;_script infofile_;_ZIP::ssf21.xml_;_
Wait(5)
Browser("Browser").Page("Page").Link("Retest").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Retest")_;_script infofile_;_ZIP::ssf177.xml_;_
Wait(10)
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").SetToProperty "hwnd", value @@ hightlight id_;_Browser("Course Viewer : Introduction").Page("Course Viewer : Introduction").Link("Introduction")_;_script infofile_;_ZIP::ssf15.xml_;_
Wait(5)
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#1" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf113.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf114.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync @@ hightlight id_;_Browser("Course Viewer : Introduction").Page("Course Viewer : Introduction").Link("Creating Rounds by Selecting")_;_script infofile_;_ZIP::ssf21.xml_;_
Wait(15)
Browser("Course Viewer").Page("Course Viewer").Link("Question 9").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Question 9")_;_script infofile_;_ZIP::ssf197.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Fusion_QA\Automation\Scripts\SQ_Models\q3120_vase.prt.1" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf198.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf114.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync @@ hightlight id_;_Browser("Course Viewer : Introduction").Page("Course Viewer : Introduction").Link("Creating Rounds by Selecting")_;_script infofile_;_ZIP::ssf21.xml_;_
Wait(15)
Browser("Course Viewer").Page("Course Viewer").Link("Question 11").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Question 11")_;_script infofile_;_ZIP::ssf204.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Fusion_QA\Automation\Scripts\SQ_Models\q3184_dimple.prt.1" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf198.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf114.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync @@ hightlight id_;_Browser("Course Viewer : Introduction").Page("Course Viewer : Introduction").Link("Creating Rounds by Selecting")_;_script infofile_;_ZIP::ssf21.xml_;_
Wait(15)
Browser("Course Viewer").Page("Course Viewer").Link("Question 16").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Question 16")_;_script infofile_;_ZIP::ssf201.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Fusion_QA\Automation\Scripts\SQ_Models\q3198.asm.1" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebFile("response:fileUploads:0:modelFi")_;_script infofile_;_ZIP::ssf198.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf114.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync @@ hightlight id_;_Browser("Course Viewer : Introduction").Page("Course Viewer : Introduction").Link("Creating Rounds by Selecting")_;_script infofile_;_ZIP::ssf21.xml_;_
Wait(15)
Browser("Course Viewer").Page("Course Viewer").Link("Question 24").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Question 24")_;_script infofile_;_ZIP::ssf205.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebFile("response:fileUploads:0:modelFi").Set "D:\Fusion_QA\Automation\Scripts\SQ_Models\q3015_test.drw.1" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebFile("response:fileUploads:1:modelFi")_;_script infofile_;_ZIP::ssf161.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebFile("response:fileUploads:1:modelFi").Set "D:\Fusion_QA\Automation\Scripts\SQ_Models\q3015_part.prt.1" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf163.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf156.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync @@ hightlight id_;_Browser("Course Viewer : Introduction").Page("Course Viewer : Introduction").Link("Creating Rounds by Selecting")_;_script infofile_;_ZIP::ssf21.xml_;_
Wait(60)
Browser("Course Viewer").Page("Course Viewer").Frame("modal-dialog-pagemap").Link("Ok").Click

Reporter.ReportEvent 2, "STEP 6 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  7
' Description           :   After completing the assessment check that the assessment is present in completed learning. Verify the score.
' Expected Result  : As expected ,  Score should be 100%.
Reporter.ReportEvent 2, "STEP 7 BEGINS","Verify the score of Assessment"
 @@ hightlight id_;_Browser("Course Viewer : Introduction").Page("Course Viewer : Introduction").Link("Creating Rounds by Selecting")_;_script infofile_;_ZIP::ssf21.xml_;_
Wait(60)
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Assessment Results") @@ hightlight id_;_Browser("Browser").Page("Page").WebTable("Score")_;_script infofile_;_ZIP::ssf169.xml_;_
Browser("Browser").Page("Page").Link("Home").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("My Account")_;_script infofile_;_ZIP::ssf171.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)

Reporter.ReportEvent 2, "STEP 7 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  8
' Description           :   Now logout and close the browser.
' Expected Result  : As expected ,  Now logout and close the browser.
Reporter.ReportEvent 2, "STEP 8 BEGINS","Now logout and close the browser."
 @@ hightlight id_;_Browser("Browser").Page("Page").Link("Log Out")_;_script infofile_;_ZIP::ssf85.xml_;_
Browser("Browser").Page("Page").Link("Log Out").Click @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf86.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Close

Reporter.ReportEvent 2, "STEP 8 ENDS","END OF SCRIPT"
'----------------------------------------------------------------------------------------------------------------------"END OF SCRIPT"---------------------------------------------------------------------------------------------------------------------------------------------------------