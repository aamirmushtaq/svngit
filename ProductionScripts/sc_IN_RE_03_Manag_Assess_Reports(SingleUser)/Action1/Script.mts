'File Name: sc_IN_RE_03_Manag_Assess_Reports(SingleUser)

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
'  Date Started Creation: 10-09-2006
'  Date Ended Creation: 10-09-2006
'  History of Changes: 
'--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  1
' Description           :   Go to PTCU Test <http://www.ptc.com/learning> and enter the username "prof_verify_manager@ptcunoemail.com", password is "prof7763" to login into PTC University. 
'                                       From the drop-down list in the upper right-hand corner of the screen, select My Team.
' Expected Result  : Team Summary Page should be displayed.
Reporter.ReportEvent 2, "STEP 1 BEGINS",""

SystemUtil.Run "IEXPLORE.EXE","","","open"
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Browser").Navigate "http://www.ptc.com/learning"
Browser("Browser").Page("Page").Frame("main").WebEdit("username").Set "prof_verify_manager@ptcunoemail.com" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("main").WebEdit("username")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Browser").Page("Page").Frame("main").WebEdit("password").SetSecure "452b6d7e2aea5a36bee6ed8b81c74363fb3279a9b0de" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("main").WebEdit("password")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Browser").Page("Page").Frame("main").WebButton("login").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("main").WebButton("login")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Browser").Page("Page").Frame("header").WebList("new_role").Select "My Team" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("header").WebList("new role")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Browser").Page("Page").Frame("main").WebTable("Team Summary - prof_verify").Check CheckPoint("Team Summary - prof_verify manager") @@ hightlight id_;_Browser("Browser").Page("Page").Frame("main").WebTable("Team Summary - prof verify")_;_script infofile_;_ZIP::ssf7.xml_;_

Reporter.ReportEvent 2, "STEP 1 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step no.   		        :  2
' Description           :   Select the link for Pro/FICIENCY Manager Reports.
' Expected Result  :  This will produce a new window that will display the Pro/F interface. The page displayed should be the Manager Reports page.
Reporter.ReportEvent 2, "STEP 2 BEGINS",""

Browser("Browser").Page("Page").Frame("main").Link("Pro/FICIENCY Manager Reporting").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("main").Link("Pro/FICIENCY Manager Reporting")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Check CheckPoint("TBLS - PTC") @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC")_;_script infofile_;_ZIP::ssf10.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebTable("Manager Reports").Check CheckPoint("Manager Reports") @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebTable("Manager Reports")_;_script infofile_;_ZIP::ssf11.xml_;_

Reporter.ReportEvent 2, "STEP 2 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step no.   		        :  3
' Description           :   From the User Tree mark the checkbox beside the user prof_verify_user4@ptcunoemail.com <mailto:prof_verify_user4@ptcunoemail.com> and select the button "View Reports".	
' Expected Result  :  "View Reports" page should be displayed.
Reporter.ReportEvent 2, "STEP 3 BEGINS",""

Browser("TBLS - PTC").Page("TBLS - PTC").WebCheckBox("790455").Set "ON" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebCheckBox("790455")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Link("View Reports").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").Link("View Reports")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Check CheckPoint("TBLS - PTC_2") @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC")_;_script infofile_;_ZIP::ssf14.xml_;_

Reporter.ReportEvent 2, "STEP 3 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step no.   		        :  4
' Description           :   Now click the button "Assessment Reports" to enter the Report 'Wizard' for Assessment Reports.
' Expected Result  :  View Assessment Report page should be displayed.
Reporter.ReportEvent 2, "STEP 4 BEGINS",""

Browser("TBLS - PTC").Page("TBLS - PTC").Link("Assessment Reports").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").Link("Assessment Reports")_;_script infofile_;_ZIP::ssf15.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Check CheckPoint("TBLS - PTC_3") @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC")_;_script infofile_;_ZIP::ssf16.xml_;_

Reporter.ReportEvent 2, "STEP 4 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step no.   		        :  5
' Description           :   The Introduction/Instructions page of the report interface will appear. Read the instructions.                                 
' Expected Result  :  Everything on the page should look as shown in the screen capture in attchment.
Reporter.ReportEvent 2, "STEP 5 BEGINS",""

Browser("TBLS - PTC").Page("TBLS - PTC").WebTable("Report").Check CheckPoint("Report") @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebTable("Report")_;_script infofile_;_ZIP::ssf17.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebTable("Assessment Reports - Introduct").Check CheckPoint("Assessment Reports - Introduction") @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebTable("Assessment Reports - Introduct")_;_script infofile_;_ZIP::ssf18.xml_;_

Reporter.ReportEvent 2, "STEP 5 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step no.   		        :  6
' Description           :   Select Next from the instructions page
' Expected Result  :  View Assessment Report page is displayed.
Reporter.ReportEvent 2, "STEP 6 BEGINS",""

Browser("TBLS - PTC").Page("TBLS - PTC").Link("Next").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").Link("Next")_;_script infofile_;_ZIP::ssf19.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Check CheckPoint("TBLS - PTC_4") @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC")_;_script infofile_;_ZIP::ssf20.xml_;_

Reporter.ReportEvent 2, "STEP 6 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step no.   		        :  7
' Description           :  The first step in the process is to select the "assessment name(s)" for which you wish to generate a report. Select the assessment "Screening - 2nd Interview (Pro/E Wildfire)" and click the next button.
' Expected Result  :  View Assessment Report page is displayed.
Reporter.ReportEvent 2, "STEP 7 BEGINS",""

 @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebCheckBox("examListNames")_;_script infofile_;_ZIP::ssf21.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebList("product").Select "Pro/ENGINEER" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebList("product")_;_script infofile_;_ZIP::ssf153.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebCheckBox("examListNames_3").Set "ON" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebCheckBox("examListNames 3")_;_script infofile_;_ZIP::ssf154.xml_;_
'Browser("TBLS - PTC").Page("TBLS - PTC").WebCheckBox("examListNames_2").Set "ON" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebCheckBox("examListNames 2")_;_script infofile_;_ZIP::ssf23.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Link("Next").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").Link("Next")_;_script infofile_;_ZIP::ssf24.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Check CheckPoint("TBLS - PTC_5") @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC")_;_script infofile_;_ZIP::ssf25.xml_;_

Reporter.ReportEvent 2, "STEP 7 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step no.   		        :  8
' Description           :  Click the Show Full List button in order to see all the result sets for the selected assessment name(s) for the selected user(s). In this case, select the assessment you just completed. 
'                                      Select that assessments result set and click the Next button.
' Expected Result  : View Assessment Report page is displayed.
Reporter.ReportEvent 2, "STEP 8 BEGINS",""

Browser("TBLS - PTC").Page("TBLS - PTC").Link("Show Full List").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").Link("Show Full List")_;_script infofile_;_ZIP::ssf108.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebCheckBox("examList").Set "ON" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebCheckBox("examList")_;_script infofile_;_ZIP::ssf109.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Link("Next").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").Link("Next")_;_script infofile_;_ZIP::ssf110.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Check CheckPoint("TBLS - PTC_6") @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC")_;_script infofile_;_ZIP::ssf111.xml_;_

Reporter.ReportEvent 2, "STEP 8 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step no.   		        :  9
' Description           :  From the drop down list, select Summary Statistics and click the Generate button.
' Expected Result  : The resulting report should look like that shown in the screen capture in attachment.
Reporter.ReportEvent 2, "STEP 9 BEGINS",""

Browser("TBLS - PTC").Page("TBLS - PTC").WebList("ReportType").Select "Summary Statistics" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebList("ReportType")_;_script infofile_;_ZIP::ssf112.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Link("Generate").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").Link("Generate")_;_script infofile_;_ZIP::ssf113.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebTable("Report").Check CheckPoint("Report_2") @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebTable("Report")_;_script infofile_;_ZIP::ssf114.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebTable("Assessment Reports - Introduct").Check CheckPoint("Statistics - Summary") @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebTable("Assessment Reports - Introduct")_;_script infofile_;_ZIP::ssf115.xml_;_

Reporter.ReportEvent 2, "STEP 9 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step no.   		        :  10
' Description           :  From the left navigation menu, click the Show Attempted link.
' Expected Result  : The report should look as shown in attchment.
Reporter.ReportEvent 2, "STEP 10 BEGINS",""

Browser("TBLS - PTC").Page("TBLS - PTC").Link("Show Menu").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").Link("Show Menu")_;_script infofile_;_ZIP::ssf116.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Link("Show Attempted").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").Link("Show Attempted")_;_script infofile_;_ZIP::ssf117.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Check CheckPoint("TBLS - PTC_7") @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC")_;_script infofile_;_ZIP::ssf118.xml_;_
 @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC")_;_script infofile_;_ZIP::ssf121.xml_;_
Reporter.ReportEvent 2, "STEP 10 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  11
' Description           :   From the left navigation menu, click the Show Peer Comparison link.
'                                      Note, the actual values displayed in the Corp and World columns may not be the same as those shown in the screen capture, but the general appearance of the columns should be consistent.
' Expected Result  : The report should look as shown in attachment.
Reporter.ReportEvent 2, "STEP 11 BEGINS",""

Browser("TBLS - PTC").Page("TBLS - PTC").Link("Show Menu").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").Link("Show Menu")_;_script infofile_;_ZIP::ssf119.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Link("Show Peer Comparison").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").Link("Show Peer Comparison")_;_script infofile_;_ZIP::ssf120.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Check CheckPoint("TBLS - PTC_8") @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC")_;_script infofile_;_ZIP::ssf121.xml_;_

Reporter.ReportEvent 2, "STEP 11 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step no.   		        :  12
' Description           :   From the drop down list, select Detailed Statistics and click the Generate button.
' Expected Result  :  View Assessment Report should be displayed.
Reporter.ReportEvent 2, "STEP 12 BEGINS",""

Browser("TBLS - PTC").Page("TBLS - PTC").WebList("ReportType").Select "Detailed Statistics" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebList("ReportType")_;_script infofile_;_ZIP::ssf122.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Link("Generate").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").Link("Generate")_;_script infofile_;_ZIP::ssf123.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Check CheckPoint("TBLS - PTC_9") @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC")_;_script infofile_;_ZIP::ssf124.xml_;_
 @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC")_;_script infofile_;_ZIP::ssf136.xml_;_
Reporter.ReportEvent 2, "STEP 12 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step no.   		        :  13
' Description           :   Verify the statistics against those in the excel workbook from the attchment:
'                                       specifically, verify that your results match those on the three "results" worksheets.
'                                        Click the Show Subsections link at the top of the results table and compare to results from file. 
' Expected Result  :  As Expected.
Reporter.ReportEvent 2, "STEP 13 BEGINS",""
 @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").Link("Show Menu")_;_script infofile_;_ZIP::ssf125.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Link("Show Menu").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").Link("Show Menu")_;_script infofile_;_ZIP::ssf134.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Link("Show Subsections").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").Link("Show Subsections")_;_script infofile_;_ZIP::ssf135.xml_;_
'Browser("TBLS - PTC").Sync
Browser("TBLS - PTC").Sync
Browser("TBLS - PTC").Page("TBLS - PTC").Check CheckPoint("TBLS - PTC_13") @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC")_;_script infofile_;_ZIP::ssf136.xml_;_
Browser("TBLS - PTC").Sync

Reporter.ReportEvent 2, "STEP 13 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step no.   		        :  14
' Description           :   From the left navigation menu, click the Show Attempted link.
' Expected Result  :  The report should look as shown in attachment.
Reporter.ReportEvent 2, "STEP 14 BEGINS",""

Browser("TBLS - PTC").Page("TBLS - PTC").Link("Show Menu").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").Link("Show Menu")_;_script infofile_;_ZIP::ssf125.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Link("Show Attempted").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").Link("Show Attempted")_;_script infofile_;_ZIP::ssf126.xml_;_
'Browser("TBLS - PTC").Sync
Browser("TBLS - PTC").Sync
Browser("TBLS - PTC").Page("TBLS - PTC").Check CheckPoint("TBLS - PTC_10") @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC")_;_script infofile_;_ZIP::ssf127.xml_;_
'Browser("TBLS - PTC").Sync
 @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC")_;_script infofile_;_ZIP::ssf133.xml_;_
Reporter.ReportEvent 2, "STEP 14 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step no.   		        :  15
' Description           :   From the left navigation menu, click the Show Peer Comparison link.
'                                       Note, the actual values displayed in the World column may not be the same as those shown in the screen capture, but the general appearance of the columns should be consistent.                      
' Expected Result  :  The report should look as shown in sheet.
Reporter.ReportEvent 2, "STEP 15 BEGINS",""

Browser("TBLS - PTC").Page("TBLS - PTC").Link("Show Menu").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").Link("Show Menu")_;_script infofile_;_ZIP::ssf128.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Link("Show Peer Comparison").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").Link("Show Peer Comparison")_;_script infofile_;_ZIP::ssf129.xml_;_
Browser("TBLS - PTC").Sync
'Browser("TBLS - PTC").Sync
Browser("TBLS - PTC").Page("TBLS - PTC").Check CheckPoint("TBLS - PTC_11") @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC")_;_script infofile_;_ZIP::ssf130.xml_;_
Browser("TBLS - PTC").Sync
Browser("TBLS - PTC").Page("TBLS - PTC").Link("Show Menu").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").Link("Show Menu")_;_script infofile_;_ZIP::ssf131.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Link("Show Source Data").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").Link("Show Source Data")_;_script infofile_;_ZIP::ssf132.xml_;_
'Browser("TBLS - PTC").Sync
Browser("TBLS - PTC").Sync
Browser("TBLS - PTC").Page("TBLS - PTC").Check CheckPoint("TBLS - PTC_12") @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC")_;_script infofile_;_ZIP::ssf133.xml_;_
Browser("TBLS - PTC").Sync

Reporter.ReportEvent 2, "STEP 15 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step no.   		        :  16 @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").Link("Show Menu")_;_script infofile_;_ZIP::ssf128.xml_;_
' Description           :  Select the Recommended Training for the drop-down list and generate the report. Select Pro/ENGINEER Wildfire 2.0 as the version and update the report. 
'                                      The Recommended Training report should be displayed for the assessment you completed (Screening - 2nd Interview (Pro/E Wildfire).
'                                      Note, the results in the report may not be the same as those shown in this screen capture, but the page should look much the same.
' Expected Result  :  The page should look similar to the one shown in the screen capture in attachment.
Reporter.ReportEvent 2, "STEP 16 BEGINS",""

Browser("TBLS - PTC").Page("TBLS - PTC").WebList("ReportType").Select "Recommended Training" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebList("ReportType")_;_script infofile_;_ZIP::ssf142.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Link("Generate").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").Link("Generate")_;_script infofile_;_ZIP::ssf143.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Check CheckPoint("TBLS - PTC_15") @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC")_;_script infofile_;_ZIP::ssf144.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebList("lstSuppPrdVers").Select "Pro/ENGINEER Wildfire 2.0" @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebList("lstSuppPrdVers")_;_script infofile_;_ZIP::ssf145.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("Update Report").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebButton("Update Report")_;_script infofile_;_ZIP::ssf146.xml_;_
'Browser("TBLS - PTC").Page("TBLS - PTC").WebTable("Recommended Training").Check CheckPoint("Recommended Training") @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebTable("Recommended Training")_;_script infofile_;_ZIP::ssf147.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Check CheckPoint("TBLS - PTC_16") @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC")_;_script infofile_;_ZIP::ssf148.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Link("Logout").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").Link("Logout")_;_script infofile_;_ZIP::ssf149.xml_;_
Browser("TBLS - PTC").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_2885480_;_script infofile_;_ZIP::ssf150.xml_;_
Browser("Browser").Page("Page").Frame("header").Link("Log Off").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("header").Link("Log Off")_;_script infofile_;_ZIP::ssf151.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf152.xml_;_
Browser("Browser").Close

Reporter.ReportEvent 2, "STEP 16 ENDS",""
Reporter.ReportEvent 2, "End Of Test Case",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------
