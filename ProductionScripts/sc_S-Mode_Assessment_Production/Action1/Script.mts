'File Name: sc_S-Mode_Assessment_Production

'  File Type:  Test Script
'  Data-Driven: No
'  Data-Driven Stand Alone: No 
'  Data-Script Called By:  
'  Data-Script Calls:  

'  AUT Created For: 
'  AUT Version Test Created In:
'  Web Browser & Version Created For:
'  OS System Created For:  Windows 2K, Windows XP
'
'  Purpose:  script 's created  for  Pro/F  
'  Pre-Requisite Testcases:
'
'  Author:  Ravi Kishore
'  Date Started Creation: 04-03-2007
'  Date Ended Creation: 04-03-2007
'  History of Changes: 
'--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  1
' Description           :   Go to <http://wwwed.ptc.com/ptc/tbls> and enter username "qa_test" and  PW "qa_test".
' Expected Result  : As Expected.
Reporter.ReportEvent 2, "STEP 1 BEGINS",""

SystemUtil.Run "iexplore.exe","","","open"
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Browser").Navigate "http://wwwed.ptc.com/ptc/tbls"
Browser("Browser").Page("Page").WebEdit("uname").Set "qa_test" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("uname")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Browser").Page("Page").WebEdit("passwd").SetSecure "4612330a1ac5e1791df1efef6ad6fb3c931704f4" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("passwd")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Browser").Page("Page").WebButton("Logon").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("Logon")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Browser").Page("Page").Check CheckPoint("TBLS - PTC") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf5.xml_;_

Reporter.ReportEvent 2, "STEP 1 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step no.   		        :  2
' Description           :   Click the "Assess" tab.For the product Pro/ENGINEER and the version as Wildfire, start a new assessment "2D-3D Wildfire Basic [QA Only]" from the Available Assessments table.
'                                       Click "2D-3D Wildfire Basic [QA Only]"  link in Assess table to take the assessment.
' Expected Result  :  As Expected.
Reporter.ReportEvent 2, "STEP 2 BEGINS",""

Browser("Browser").Page("Page").Link("Assess").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Assess")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Browser").Page("Page").Link("2D-3D Wildfire Basic [QA").Check CheckPoint("2D-3D Wildfire Basic [QA Only]") @@ hightlight id_;_Browser("Browser").Page("Page").Link("2D-3D Wildfire Basic [QA")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Browser").Page("Page").Link("2D-3D Wildfire Basic [QA").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("2D-3D Wildfire Basic [QA")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("Browser").Page("Page").Check CheckPoint("TBLS - PTC_2") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("Browser").Page("Page").Link("Take Assessment").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Take Assessment")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Browser").Page("Page").Check CheckPoint("Page") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf14.xml_;_
 @@ hightlight id_;_132246_;_script infofile_;_ZIP::ssf10.xml_;_
Reporter.ReportEvent 2, "STEP 2 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step no.   		        :  3
' Description           :   Now answer all the  questions.This should take you to the "End of Assessment" page. 
' Expected Result  :  As Expected.
Reporter.ReportEvent 2, "STEP 3 BEGINS",""

Browser("Browser").Page("Page").WebRadioGroup("answer").Select "2" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf15.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf16.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "1" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf17.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf18.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "2" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf19.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf20.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "0" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf21.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf22.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "2" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf23.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf24.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "1" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf25.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf26.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "1" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf27.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf28.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "1" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf29.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf30.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "0" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf31.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf32.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "0" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf33.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf34.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "3" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf35.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf36.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "0" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf37.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf38.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "3" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf39.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf40.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "1" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf41.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf42.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "3" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf43.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf44.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "2" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf45.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf46.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "1" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf47.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf48.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebFile("q1161_test.prt").Set "D:\ProductionScripts\Skill Qs Files\q1161_test.prt.2" @@ hightlight id_;_Browser("Browser").Page("Page").WebFile("q1161 test.prt")_;_script infofile_;_ZIP::ssf49.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf50.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebFile("q1165_test.prt").Set "D:\ProductionScripts\Skill Qs Files\q1165_test.prt.2" @@ hightlight id_;_Browser("Browser").Page("Page").WebFile("q1165 test.prt")_;_script infofile_;_ZIP::ssf108.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf109.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "0" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf53.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf54.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "1" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf55.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf56.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "0" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf57.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf58.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "0" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf59.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf60.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "3" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf61.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf62.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "0" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf63.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf64.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "1" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf65.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf66.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "1" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf67.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf68.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "1" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf69.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf70.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "3" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf71.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf72.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "0" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf73.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf74.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "3" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf75.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf76.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "0" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf77.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf78.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "3" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf79.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf80.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "1" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf81.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf82.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "2" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf83.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf84.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "1" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf85.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf86.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "1" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf87.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf88.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "3" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf89.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf90.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "4" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf91.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf92.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "1" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf93.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf94.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "2" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf95.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf96.xml_;_
Browser("Browser").Page("Page").WebRadioGroup("answer").Select "1" @@ hightlight id_;_Browser("Browser").Page("Page").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf97.xml_;_
Browser("Browser").Page("Page").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("Browser").Page("Page").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf98.xml_;_
Browser("Browser").Page("Page").Check CheckPoint("TBLS - PTC_3") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf99.xml_;_
Browser("Browser").Page("Page").Link("Get Results").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Get Results")_;_script infofile_;_ZIP::ssf100.xml_;_
Browser("Browser").Page("Page").Check CheckPoint("TBLS - PTC_4") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf101.xml_;_
Browser("Browser").Page("Page").Image("logout2").Click @@ hightlight id_;_Browser("Browser").Page("Page").Image("logout2")_;_script infofile_;_ZIP::ssf106.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf107.xml_;_
Browser("Browser").Close

Reporter.ReportEvent 2, "STEP 3 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------
