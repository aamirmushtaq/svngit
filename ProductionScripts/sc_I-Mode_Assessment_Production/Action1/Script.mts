'File Name: sc_I-Mode_Assessment_Production

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
'  Date Started Creation: 03-11-2007
'  Date Ended Creation: 03-11-2007
'  History of Changes: 
'--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  1
' Description           :   Go to PTCU Test <http://www.ptc.com/learning>  and enter the username "prof_qa_user_imode@ptcunoemail.com", password is "rkishore" to login into PTC University.
' Expected Result  : As Expected.

Reporter.ReportEvent 2, "STEP 1 BEGINS",""
SystemUtil.Run "iexplore.exe","","","open"
Browser("My Learning").Page("My Learning").Sync @@ hightlight id_;_Browser("My Learning").Page("My Learning")_;_script infofile_;_ZIP::ssf56.xml_;_
Browser("My Learning").Navigate "http://www.ptc.com/learning"
Browser("My Learning").Page("My Learning").Frame("main").WebEdit("username").Set "prof_qa_user_imode@ptcunoemail.com" @@ hightlight id_;_Browser("My Learning").Page("My Learning").Frame("main").WebEdit("username")_;_script infofile_;_ZIP::ssf57.xml_;_
Browser("My Learning").Page("My Learning").Frame("main").WebEdit("password").SetSecure "45f3fce19af731b046fc205d3607ce072bdfdee20d11" @@ hightlight id_;_Browser("My Learning").Page("My Learning").Frame("main").WebEdit("username")_;_script infofile_;_ZIP::ssf57.xml_;_
'Browser("My Learning").Page("My Learning").Frame("main").WebEdit("username").Set "prof_verify_manager@ptcunoemail.com" @@ hightlight id_;_Browser("My Learning").Page("My Learning").Frame("main").WebEdit("username")_;_script infofile_;_ZIP::ssf57.xml_;_
'Browser("My Learning").Page("My Learning").Frame("main").WebEdit("password").SetSecure "prof7763" @@ hightlight id_;_Browser("My Learning").Page("My Learning").Frame("main").WebEdit("password")_;_script infofile_;_ZIP::ssf58.xml_;_
Browser("My Learning").Page("My Learning").Frame("main").WebButton("login").Click @@ hightlight id_;_Browser("My Learning").Page("My Learning").Frame("main").WebButton("login")_;_script infofile_;_ZIP::ssf59.xml_;_

Reporter.ReportEvent 2, "STEP 1 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step no.   		        :  2
' Description           :   Click the Learning Catalog link at the top of the page. Search for the assessment "Screening - 2nd Interview (Pro/ENGINEER Wildfire 2.0)" under the Delivery Format of "Pro/FICIENCY" .
'                                       Click to register  icon to add this assessment to your enrollments. Click Close.
' Expected Result  :  As Expected.
Reporter.ReportEvent 2, "STEP 2 BEGINS",""

Browser("My Learning").Page("My Learning").Frame("header").Link("Learning Catalog").Click @@ hightlight id_;_Browser("My Learning").Page("My Learning").Frame("header").Link("Learning Catalog")_;_script infofile_;_ZIP::ssf60.xml_;_
Browser("My Learning").Page("My Learning").Frame("contents").WebEdit("desc").Set "screening" @@ hightlight id_;_Browser("My Learning").Page("My Learning").Frame("contents").WebEdit("desc")_;_script infofile_;_ZIP::ssf61.xml_;_
Browser("My Learning").Page("My Learning").Frame("contents").WebList("prodkey").Select "Pro/ENGINEER" @@ hightlight id_;_Browser("My Learning").Page("My Learning").Frame("contents").WebList("prodkey")_;_script infofile_;_ZIP::ssf62.xml_;_
Browser("My Learning").Page("My Learning").Frame("contents").WebList("prodcat").Select "Pro/FICIENCY" @@ hightlight id_;_Browser("My Learning").Page("My Learning").Frame("contents").WebList("prodcat")_;_script infofile_;_ZIP::ssf63.xml_;_
Browser("My Learning").Page("My Learning").Frame("contents").Link("GO").Click @@ hightlight id_;_Browser("My Learning").Page("My Learning").Frame("contents").Link("GO")_;_script infofile_;_ZIP::ssf64.xml_;_
Browser("My Learning").Page("My Learning").Frame("main").Link("Screening - 2nd Interview").Check CheckPoint("Screening - 2nd Interview (Pro/ENGINEER Wildfire 2.0)") @@ hightlight id_;_Browser("My Learning").Page("My Learning").Frame("main").Link("Screening - 2nd Interview")_;_script infofile_;_ZIP::ssf65.xml_;_
Browser("My Learning").Page("My Learning").Frame("main").Image("Click to register").FireEvent "onmouseover" @@ hightlight id_;_Browser("My Learning").Page("My Learning").Frame("main").Image("Click to register")_;_script infofile_;_ZIP::ssf66.xml_;_
Browser("My Learning").Page("My Learning").Frame("main").Image("Click to register").Click @@ hightlight id_;_Browser("My Learning").Page("My Learning").Frame("main").Image("Click to register")_;_script infofile_;_ZIP::ssf67.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Link("Close Shopping Cart").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").Link("Close Shopping Cart")_;_script infofile_;_ZIP::ssf74.xml_;_
'Browser("TBLS - PTC").Page("TBLS - PTC").Link("Close").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").Link("Close")_;_script infofile_;_ZIP::ssf68.xml_;_

Reporter.ReportEvent 2, "STEP 2 ENDS",""
'-------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step no.   		        :  3
' Description           :   Click the My Learning tab. In the enrollments for this account, locate the assessment "Screening - 2nd Interview (Pro/ENGINEER Wildfire 2.0)"
'                                       Click the running man icon.Click the Take Assessment link
' Expected Result  :  As Expected.
Reporter.ReportEvent 2, "STEP 3 BEGINS",""

Browser("My Learning").Page("My Learning").Frame("header").Link("My Learning").Click @@ hightlight id_;_Browser("My Learning").Page("My Learning").Frame("header").Link("My Learning")_;_script infofile_;_ZIP::ssf69.xml_;_
Browser("My Learning").Page("My Learning").Frame("main").Image("Start Class").FireEvent "onmouseover" @@ hightlight id_;_Browser("My Learning").Page("My Learning").Frame("main").Image("Start Class")_;_script infofile_;_ZIP::ssf70.xml_;_
Browser("My Learning").Page("My Learning").Frame("main").Image("Start Class").Click @@ hightlight id_;_Browser("My Learning").Page("My Learning").Frame("main").Image("Start Class")_;_script infofile_;_ZIP::ssf71.xml_;_
Browser("My Learning").Page("My Learning").Frame("main").Link("Take Assessment").Click @@ hightlight id_;_Browser("My Learning").Page("My Learning").Frame("main").Link("Take Assessment")_;_script infofile_;_ZIP::ssf72.xml_;_

Reporter.ReportEvent 2, "STEP 3 ENDS","" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").Link("Start This Assessment")_;_script infofile_;_ZIP::ssf73.xml_;_
'--------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step no.   		        :  4
' Description           :   Now click the "Start This Assessment" button to take the assessment..This should take to the fquestion of the exam.Now answer the  all  questions 
' Expected Result  :  As Expected.
Reporter.ReportEvent 2, "STEP 4 BEGINS",""

Browser("TBLS - PTC").Page("TBLS - PTC").Sync
Browser("TBLS - PTC").Page("TBLS - PTC").Link("Start This Assessment").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").Link("Start This Assessment")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer").Select "0" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer").Select "0" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer").Select "2" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer").Select "1" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Sync
Browser("TBLS - PTC").Page("TBLS - PTC").WebFile("q3032_test.prt").Set "D:\ProductionScripts\Skill Qs Files\q3032_test.prt.2" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebFile("q3032 test.prt")_;_script infofile_;_ZIP::ssf10.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Sync
Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf11.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer").Select "1" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer").Select "0" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf15.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Sync
Browser("TBLS - PTC").Page("TBLS - PTC").WebFile("q3011_test.prt").Set "D:\ProductionScripts\Skill Qs Files\q3011_test.prt.2" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebFile("q3011 test.prt")_;_script infofile_;_ZIP::ssf16.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Sync
Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf17.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer").Select "0" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf18.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf19.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer").Select "1" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf20.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf21.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer").Select "0" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf22.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf23.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer").Select "2" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf24.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf25.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer").Select "1" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf26.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf27.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer").Select "2" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf28.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf29.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer").Select "0" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf30.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf31.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer").Select "0" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf32.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf33.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Sync
Browser("TBLS - PTC").Page("TBLS - PTC").WebFile("q3137_wall.asm").Set "D:\ProductionScripts\Skill Qs Files\q3137_wall.asm.2" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebFile("q3137 wall.asm")_;_script infofile_;_ZIP::ssf34.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Sync
Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf35.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer").Select "4" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf36.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf37.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer").Select "3" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf38.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf39.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer").Select "1" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf40.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf41.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer").Select "4" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf42.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf43.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer").Select "0" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf44.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf45.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer").Select "0" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebRadioGroup("answer")_;_script infofile_;_ZIP::ssf46.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf47.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Sync
Browser("TBLS - PTC").Page("TBLS - PTC").WebFile("q3014_test.drw").Set "D:\ProductionScripts\Skill Qs Files\q3014_test.drw.2" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebFile("q3014 test.drw")_;_script infofile_;_ZIP::ssf48.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Sync
Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("SUBMIT and proceed")_;_script infofile_;_ZIP::ssf49.xml_;_

Reporter.ReportEvent 2, "STEP 4 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step no.   		        :  5
' Description           :   Now terminate the assessment by clicking the "Submit Assessment" button.This should terminate the assessment and take you the detailed results page.
' Expected Result  :  As Expected.
Reporter.ReportEvent 2, "STEP 5 BEGINS",""

Browser("TBLS - PTC").Page("TBLS - PTC").Link("Submit Assessment").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").Link("Submit Assessment")_;_script infofile_;_ZIP::ssf50.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Check CheckPoint("TBLS - PTC") @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC")_;_script infofile_;_ZIP::ssf51.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Link("Logout").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").Link("Logout")_;_script infofile_;_ZIP::ssf52.xml_;_
Browser("TBLS - PTC").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_3606494_;_script infofile_;_ZIP::ssf53.xml_;_
'Browser("My Learning").Page("My Learning").Frame("header").Link("Log Off").Click @@ hightlight id_;_Browser("My Learning").Page("My Learning").Frame("header").Link("Log Off")_;_script infofile_;_ZIP::ssf54.xml_;_
Browser("My Learning").Page("My Learning").Sync @@ hightlight id_;_Browser("My Learning").Page("My Learning")_;_script infofile_;_ZIP::ssf75.xml_;_
Browser("My Learning").Close

Reporter.ReportEvent 2, "STEP 5 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------

