'File Name: sc_ST_RE_03_Admin_Assess_Reports

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
'  Date Started Creation: 09-25-2006
'  Date Ended Creation: 09-25-2006
'  History of Changes: 
'--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  1
' Description           :   Go to <http://www-ed.ptc.com/ptc/tbls> and Log in as the group administrator "qa_ar_mgr" "prof7763".  Click the Admin Tab from global navigation bar.
' Expected Result  : Manage Users and Groups page shpuld be displayed.
Reporter.ReportEvent 2, "STEP 1 BEGINS",""

SystemUtil.Run "IEXPLORE.EXE","","","open"
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Browser").Navigate "http://www-ed.ptc.com/ptc/tbls"
Browser("Browser").Page("TBLS - PTC").WebEdit("uname").Set "qa_ar_mgr" @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC").WebEdit("uname")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Browser").Page("TBLS - PTC").WebEdit("passwd").SetSecure "451a6e720cbca055d2ed5ca72831c4ca56be84745409" @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC").WebEdit("passwd")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Browser").Page("TBLS - PTC_9").WebButton("Logon").Click @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 9").WebButton("Logon")_;_script infofile_;_ZIP::ssf89.xml_;_
Browser("Browser").Page("TBLS - PTC_2").Link("Admin").Click @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 2").Link("Admin")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Browser").Page("TBLS - PTC_3").Check CheckPoint("TBLS - PTC") @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC_3")_;_script infofile_;_ZIP::ssf7.xml_;_

Reporter.ReportEvent 2, "STEP 1 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step no.   		        :  2
' Description           :   Click the Expand All link from the top of the User Tree
' Expected Result  :  All groups and users are expanded and should be displayed.
Reporter.ReportEvent 2, "STEP 2 BEGINS",""

Browser("Browser").Page("TBLS - PTC_3").Link("Expand All").Click @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 3").Link("Expand All")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Browser").Page("TBLS - PTC_4").WebTable("User Tree").Check CheckPoint("User Tree") @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 4").WebTable("User Tree")_;_script infofile_;_ZIP::ssf9.xml_;_

Reporter.ReportEvent 2, "STEP 2 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step no.   		        :  3
' Description           :   Click the Collapse All link from the top of the User Tree.
' Expected Result  :  All groups and users should be collapsed.
Reporter.ReportEvent 2, "STEP 3 BEGINS",""

Browser("Browser").Page("TBLS - PTC_4").Link("Collapse All").Click @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 4").Link("Collapse All")_;_script infofile_;_ZIP::ssf10.xml_;_
Browser("Browser").Page("TBLS - PTC_5").WebTable("User Tree").Check CheckPoint("User Tree_2") @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 5").WebTable("User Tree")_;_script infofile_;_ZIP::ssf11.xml_;_

Reporter.ReportEvent 2, "STEP 3 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step no.   		        :  4
' Description           :   From the User Tree select the user <qa_ar_u1> and select the button "View Reports".
' Expected Result  :  View Reports page is displayed.
Reporter.ReportEvent 2, "STEP 4 BEGINS",""
 @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 4").Link("Collapse All")_;_script infofile_;_ZIP::ssf10.xml_;_
Browser("Browser").Page("TBLS - PTC_5").WebCheckBox("subuser").Set "ON" @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 5").WebCheckBox("subuser")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("Browser").Page("TBLS - PTC_5").Link("View Reports").Click @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 5").Link("View Reports")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Browser").Page("TBLS - PTC_6").Check CheckPoint("TBLS - PTC_2") @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC_6")_;_script infofile_;_ZIP::ssf14.xml_;_

Reporter.ReportEvent 2, "STEP 4 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step no.   		        :  5
' Description           :   Now Click the button "Assessment Reports" to enter the Report Wizard for Assessment Reports.
'                                      Select Next from the instructions page
' Expected Result  :  View Assessment Report page is displayed.
Reporter.ReportEvent 2, "STEP 5 BEGINS",""

Browser("Browser").Page("TBLS - PTC_6").Link("Assessment Reports").Click @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 6").Link("Assessment Reports")_;_script infofile_;_ZIP::ssf15.xml_;_
Browser("Browser").Page("TBLS - PTC_7").WebTable("Report").Check CheckPoint("Report") @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 7").WebTable("Report")_;_script infofile_;_ZIP::ssf16.xml_;_
Browser("Browser").Page("TBLS - PTC_7").Link("Next").Click @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 7").Link("Next")_;_script infofile_;_ZIP::ssf17.xml_;_
Browser("Browser").Page("TBLS - PTC_8").Check CheckPoint("TBLS - PTC_3") @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC_8")_;_script infofile_;_ZIP::ssf18.xml_;_

Reporter.ReportEvent 2, "STEP 5 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step no.   		        :  6
' Description           :   Select the assessment "2D-3D Wildfire Basic [QA Only]" in the steps 1 & 2b, and the Show Full List button in step 2a of the Report Wizard.
'                                       Generate the Summary Stats. Click on Show Attempted and Show Peer Comparision on LHP.
' Expected Result  :  Report data should be as per the the excel sheet attached in this step.
Reporter.ReportEvent 2, "STEP 6 BEGINS",""
 @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 8").WebCheckBox("examListNames")_;_script infofile_;_ZIP::ssf36.xml_;_
Browser("Browser").Page("TBLS - PTC_8").WebCheckBox("examListNames").Set "ON" @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 8").WebCheckBox("examListNames")_;_script infofile_;_ZIP::ssf40.xml_;_
Browser("Browser").Page("TBLS - PTC_8").Link("Next").Click @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 8").Link("Next")_;_script infofile_;_ZIP::ssf41.xml_;_
Browser("Browser").Page("TBLS - PTC_10").Check CheckPoint("TBLS - PTC_5") @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC_10")_;_script infofile_;_ZIP::ssf42.xml_;_
Browser("Browser").Page("TBLS - PTC_10").Link("Show Full List").Click @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 10").Link("Show Full List")_;_script infofile_;_ZIP::ssf43.xml_;_
Browser("Browser").Page("TBLS - PTC_16").Check CheckPoint("TBLS - PTC_6") @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC_16")_;_script infofile_;_ZIP::ssf44.xml_;_
Browser("Browser").Page("TBLS - PTC_16").WebCheckBox("examList").Set "ON" @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 16").WebCheckBox("examList")_;_script infofile_;_ZIP::ssf45.xml_;_
Browser("Browser").Page("TBLS - PTC_16").Link("Next").Click @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 16").Link("Next")_;_script infofile_;_ZIP::ssf46.xml_;_
Browser("Browser").Page("TBLS - PTC_12").WebList("ReportType").Select "Summary Statistics" @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 12").WebList("ReportType")_;_script infofile_;_ZIP::ssf47.xml_;_
Browser("Browser").Page("TBLS - PTC_12").Link("Generate").Click @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 12").Link("Generate")_;_script infofile_;_ZIP::ssf48.xml_;_
Browser("Browser").Page("TBLS - PTC_13").WebTable("Report").Check CheckPoint("Report_4") @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 13").WebTable("Report")_;_script infofile_;_ZIP::ssf49.xml_;_
Browser("Browser").Page("TBLS - PTC_13").Link("Show Attempted").Click @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 13").Link("Show Attempted")_;_script infofile_;_ZIP::ssf50.xml_;_
Browser("Browser").Page("TBLS - PTC_17").Check CheckPoint("TBLS - PTC_7") @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC_17")_;_script infofile_;_ZIP::ssf51.xml_;_
Browser("Browser").Page("TBLS - PTC_17").Link("Show Peer Comparison").Click @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 17").Link("Show Peer Comparison")_;_script infofile_;_ZIP::ssf52.xml_;_
Browser("Browser").Page("TBLS - PTC_18").Check CheckPoint("TBLS - PTC_8") @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC_18")_;_script infofile_;_ZIP::ssf53.xml_;_

Reporter.ReportEvent 2, "STEP 6 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step no.   		        :  7
' Description           :  Generate the Detailed Stats. Click on Show Attempted ,Show Peer Comparision Show Source Data and Show Subsectios on LHP validate data.
' Expected Result  :  Report data should be as per the the excel sheet attached.
Reporter.ReportEvent 2, "STEP 7 BEGINS",""

Browser("Browser").Page("TBLS - PTC_18").WebList("ReportType").Select "Detailed Statistics" @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 18").WebList("ReportType")_;_script infofile_;_ZIP::ssf54.xml_;_
Browser("Browser").Page("TBLS - PTC_18").Link("Generate").Click @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 18").Link("Generate")_;_script infofile_;_ZIP::ssf55.xml_;_
Browser("Browser").Sync
Browser("Browser").Page("TBLS - PTC_14").Check CheckPoint("TBLS - PTC_9") @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC_14")_;_script infofile_;_ZIP::ssf56.xml_;_
Browser("Browser").Page("TBLS - PTC_14").Link("Show Attempted").Click @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 14").Link("Show Attempted")_;_script infofile_;_ZIP::ssf57.xml_;_
Browser("Browser").Sync
Browser("Browser").Page("TBLS - PTC_17").Check CheckPoint("TBLS - PTC_10") @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC_17")_;_script infofile_;_ZIP::ssf58.xml_;_
Browser("Browser").Page("TBLS - PTC_17").Link("Show Peer Comparison").Click @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 17").Link("Show Peer Comparison")_;_script infofile_;_ZIP::ssf59.xml_;_
Browser("Browser").Sync
Browser("Browser").Page("TBLS - PTC_18").Check CheckPoint("TBLS - PTC_11") @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC_18")_;_script infofile_;_ZIP::ssf60.xml_;_
Browser("Browser").Page("TBLS - PTC_18").Link("Show Source Data").Click @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 18").Link("Show Source Data")_;_script infofile_;_ZIP::ssf61.xml_;_
Browser("Browser").Sync
Browser("Browser").Page("TBLS - PTC_19").Check CheckPoint("TBLS - PTC_12") @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC_19")_;_script infofile_;_ZIP::ssf62.xml_;_
Browser("Browser").Page("TBLS - PTC_19").Link("Show Subsections").Click @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 19").Link("Show Subsections")_;_script infofile_;_ZIP::ssf63.xml_;_
Browser("Browser").Sync
Browser("Browser").Page("TBLS - PTC_20").WebTable("Overall Statistics").Check CheckPoint("Overall Statistics_2") @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 20").WebTable("Overall Statistics")_;_script infofile_;_ZIP::ssf64.xml_;_
 @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 14").WebTable("Activities List")_;_script infofile_;_ZIP::ssf35.xml_;_
Reporter.ReportEvent 2, "STEP 7 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step no.   		        :  8
' Description           :  Generate the Training Recommendations and validate data.
' Expected Result  : Report data should be as per the the excel sheet attached.
Reporter.ReportEvent 2, "STEP 8 BEGINS",""
 @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 14").WebTable("Activities List")_;_script infofile_;_ZIP::ssf35.xml_;_
Browser("Browser").Page("TBLS - PTC_20").WebList("ReportType").Select "Training Recommendations" @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 20").WebList("ReportType")_;_script infofile_;_ZIP::ssf65.xml_;_
Browser("Browser").Page("TBLS - PTC_20").Link("Generate").Click @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 20").Link("Generate")_;_script infofile_;_ZIP::ssf66.xml_;_
Browser("Browser").Page("TBLS - PTC_14").Check CheckPoint("TBLS - PTC_13") @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC_14")_;_script infofile_;_ZIP::ssf67.xml_;_

Reporter.ReportEvent 2, "STEP 8 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step no.   		        :  9
' Description           :  From the User Tree select the user <qa_ar_u1> and select the button "View Reports".
'                                     Now select the  button "Learning Activity Report" .Select all the status and learning activity filters.
' Expected Result  : The output of the report should have following activities in Status Column:
'                                     2 completed assessment
'                                      4 assigned assessments
Reporter.ReportEvent 2, "STEP 9 BEGINS",""
 @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 14").WebTable("Activities List")_;_script infofile_;_ZIP::ssf35.xml_;_
Browser("Browser").Page("TBLS - PTC_14").Link("Admin").Click @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 14").Link("Admin")_;_script infofile_;_ZIP::ssf68.xml_;_
Browser("Browser").Page("TBLS - PTC_3").WebCheckBox("subuser").Set "ON" @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 3").WebCheckBox("subuser")_;_script infofile_;_ZIP::ssf69.xml_;_
Browser("Browser").Page("TBLS - PTC_3").Link("View Reports").Click @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 3").Link("View Reports")_;_script infofile_;_ZIP::ssf70.xml_;_
Browser("Browser").Page("TBLS - PTC_21").Link("Learning Activity Report").Click @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 21").Link("Learning Activity Report")_;_script infofile_;_ZIP::ssf71.xml_;_
Browser("Browser").Page("TBLS - PTC_22").WebCheckBox("completed").Set "ON" @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 22").WebCheckBox("completed")_;_script infofile_;_ZIP::ssf72.xml_;_
Browser("Browser").Page("TBLS - PTC_22").WebCheckBox("inprogress").Set "ON" @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 22").WebCheckBox("inprogress")_;_script infofile_;_ZIP::ssf73.xml_;_
Browser("Browser").Page("TBLS - PTC_22").WebCheckBox("assigned").Set "ON" @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 22").WebCheckBox("assigned")_;_script infofile_;_ZIP::ssf74.xml_;_
Browser("Browser").Page("TBLS - PTC_22").WebCheckBox("assessment").Set "ON" @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 22").WebCheckBox("assessment")_;_script infofile_;_ZIP::ssf75.xml_;_
Browser("Browser").Page("TBLS - PTC_22").WebCheckBox("webcourse").Set "ON" @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 22").WebCheckBox("webcourse")_;_script infofile_;_ZIP::ssf76.xml_;_
Browser("Browser").Page("TBLS - PTC_22").Link("Update Report").Click @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 22").Link("Update Report")_;_script infofile_;_ZIP::ssf77.xml_;_
Browser("Browser").Page("TBLS - PTC_23").WebTable("Reports").Check CheckPoint("Reports") @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 23").WebTable("Reports")_;_script infofile_;_ZIP::ssf78.xml_;_
Browser("Browser").Page("TBLS - PTC_9").Check CheckPoint("TBLS - PTC_16") @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC_9")_;_script infofile_;_ZIP::ssf90.xml_;_
'Browser("Browser").Page("TBLS - PTC_23").Check CheckPoint("TBLS - PTC_14") @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC_23")_;_script infofile_;_ZIP::ssf79.xml_;_
 @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC_14")_;_script infofile_;_ZIP::ssf67.xml_;_
Reporter.ReportEvent 2, "STEP 9 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step no.   		        :  10
' Description           :  Now change the options in the status and learning filters and verify the output of the updated report is appropriate.
' Expected Result  : As Expected.
Reporter.ReportEvent 2, "STEP 10 BEGINS",""
 @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC_14")_;_script infofile_;_ZIP::ssf67.xml_;_
Browser("Browser").Page("TBLS - PTC_23").WebCheckBox("completed").Set "OFF" @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 23").WebCheckBox("completed")_;_script infofile_;_ZIP::ssf80.xml_;_
Browser("Browser").Page("TBLS - PTC_23").WebCheckBox("inprogress").Set "OFF" @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 23").WebCheckBox("inprogress")_;_script infofile_;_ZIP::ssf81.xml_;_
Browser("Browser").Page("TBLS - PTC_23").WebCheckBox("assigned").Set "OFF" @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 23").WebCheckBox("assigned")_;_script infofile_;_ZIP::ssf82.xml_;_
Browser("Browser").Page("TBLS - PTC_23").WebCheckBox("webcourse").Set "OFF" @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 23").WebCheckBox("webcourse")_;_script infofile_;_ZIP::ssf83.xml_;_
Browser("Browser").Page("TBLS - PTC_23").WebCheckBox("assessment").Set "OFF" @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 23").WebCheckBox("assessment")_;_script infofile_;_ZIP::ssf84.xml_;_
Browser("Browser").Page("TBLS - PTC_23").Link("Update Report").Click @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 23").Link("Update Report")_;_script infofile_;_ZIP::ssf85.xml_;_
'Browser("Browser").Page("TBLS - PTC_23").Check CheckPoint("TBLS - PTC_15") @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC_23")_;_script infofile_;_ZIP::ssf86.xml_;_
Browser("Browser").Page("TBLS - PTC_23").Image("logout2").Click @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC 23").Image("logout2")_;_script infofile_;_ZIP::ssf87.xml_;_
Browser("Browser").Page("TBLS - PTC_24").Sync @@ hightlight id_;_Browser("Browser").Page("TBLS - PTC_24")_;_script infofile_;_ZIP::ssf88.xml_;_
Browser("Browser").Close

Reporter.ReportEvent 2, "STEP 10 ENDS",""
Reporter.ReportEvent 2, "END Of Test Case",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------

