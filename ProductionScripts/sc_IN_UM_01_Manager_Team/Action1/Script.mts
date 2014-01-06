'File Name: sc_IN_UM_01_Manager_Team

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
'  Date Started Creation: 09-28-2006
'  Date Ended Creation: 09-28-2006
'  History of Changes: 
'--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  1
' Description           :   Go to PTCU Test <http://www.ptc.com/learning>  and enter the username "prof_verify_manager@ptcunoemail.com", 
'                                       password is "prof7763" to login into PTC University. 
'                                      From the drop-down list in the upper right-hand corner of the screen, select My Team.
' Expected Result  : Team Summary Page should be displayed.
Reporter.ReportEvent 2, "STEP 1 BEGINS",""

SystemUtil.Run "IEXPLORE.EXE","","","open"
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Browser").Navigate "http://www.ptc.com/learning"
Browser("Browser").Page("Page").Frame("main").WebEdit("username").Set "prof_verify_manager@ptcunoemail.com" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("main").WebEdit("username")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Browser").Page("Page").Frame("main").WebEdit("password").SetSecure "451bc1fbfdbf658c029caba708b525483e132dff4b8f" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("main").WebEdit("password")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Browser").Page("Page").Frame("main").WebButton("login").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("main").WebButton("login")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Browser").Sync
'Browser("Browser").Page("Page").Check CheckPoint("My Home") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("Browser").Page("Page").Frame("header").WebList("new_role").Select "My Team" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("header").WebList("new role")_;_script infofile_;_ZIP::ssf10.xml_;_
Browser("Browser").Page("Page").Frame("main").WebTable("Team Summary - prof_verify").Check CheckPoint("Team Summary - prof_verify manager") @@ hightlight id_;_Browser("Browser").Page("Page").Frame("main").WebTable("Team Summary - prof verify")_;_script infofile_;_ZIP::ssf11.xml_;_

Reporter.ReportEvent 2, "STEP 1 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step no.   		        :  2
' Description           :   Select the link for Pro/FICIENCY Manager Reports.
' Expected Result  :  This will produce a new window that will display the Pro/F interface. The page displayed should be the Manager Reports page.
Reporter.ReportEvent 2, "STEP 2 BEGINS",""

Browser("Browser").Page("Page").Frame("main").Link("Pro/FICIENCY Manager Reporting").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("main").Link("Pro/FICIENCY Manager Reporting")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("Browser").Sync
Browser("TBLS - PTC").Page("TBLS - PTC").Check CheckPoint("TBLS - PTC") @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").WebTable("Manager Reports").Check CheckPoint("Manager Reports") @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").WebTable("Manager Reports")_;_script infofile_;_ZIP::ssf14.xml_;_

Reporter.ReportEvent 2, "STEP 2 ENDS",""
'-------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step no.   		        :  3
' Description           :   The User Tree should look similar to  the screen capture in attachment.
' Expected Result  :  All the appropriate users should be shown in this tree.Verify the layout of the page.
'                                      Note:The number of assessments for each user might be different.
Reporter.ReportEvent 2, "STEP 3 BEGINS",""

Browser("TBLS - PTC").Page("TBLS - PTC").Check CheckPoint("TBLS - PTC") @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC")_;_script infofile_;_ZIP::ssf15.xml_;_
Browser("TBLS - PTC").Page("TBLS - PTC").Link("Logout").Click @@ hightlight id_;_Browser("TBLS - PTC").Page("TBLS - PTC").Link("Logout")_;_script infofile_;_ZIP::ssf16.xml_;_
Browser("TBLS - PTC").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_983806_;_script infofile_;_ZIP::ssf17.xml_;_
Browser("Browser").Page("Page").Frame("header").Link("Log Off").Click @@ hightlight id_;_Browser("Browser").Page("Page").Frame("header").Link("Log Off")_;_script infofile_;_ZIP::ssf18.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf19.xml_;_
Browser("Browser").Close

Reporter.ReportEvent 2, "STEP 3 ENDS",""
'--------------------------------------------------------------------------------------------------------------------------------------------------------------
