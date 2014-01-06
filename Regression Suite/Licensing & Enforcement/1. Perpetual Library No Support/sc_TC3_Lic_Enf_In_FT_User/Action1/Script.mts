'File Name: sc_TC3_Licen_Enf_In_FT_For_Users
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
'  Date Started Creation: 06/05/2008
'  Date Ended Creation: 06/05/2008
'  Functions Included: fOpenApplication(),CloseAllBrowsersExceptQC(),Login()
'  History of Changes: 
'--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  1
' Description           :   Log into https://fusion-qa.ptc.com/dailyhosted/app/pages/Login/  Username : prof_pt_co3_usr_0201@ptcunoemail.com Password : prof7763
' Expected Result  : Log in should be successfull for the user
Reporter.ReportEvent 2, "STEP 1 BEGINS",""

Reporter.ReportEvent micDone, "Open the application", "Close all the browsers and Open the application"
rc=OpenApplication("http://i2361.ptcnet.ptc.com/automationhosted/", blnRet) 'Opening a new browser
If  blnRet = false Then
 	ExitAction(0)
End If
Reporter.ReportEvent micDone, "Login into  the application", "Login into the application with username:" & sLoginID
Browser("Browser").Page("Page").Login  "prof_pt_co3_usr_0201@ptcunoemail.com", "prof7763" , blnRet
If  blnRet = false Then
ExitAction(0)
End If
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Welcome to Home Page") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf9.xml_;_

Reporter.ReportEvent 2, "STEP 1 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  2
' Description           :   Verify the User see 2 Tabs.
' Expected Result  : As expected , User should see Home , Find Training Tabs.
Reporter.ReportEvent 2, "STEP 2 BEGINS",""

Browser("Browser").Page("Page").Link("Home").Check CheckPoint("Home") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Home")_;_script infofile_;_ZIP::ssf10.xml_;_
Browser("Browser").Page("Page").Link("Find Training").Check CheckPoint("Find Training") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Find Training")_;_script infofile_;_ZIP::ssf11.xml_;_

Reporter.ReportEvent 2, "STEP 2 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  3
' Description           :   Click on Find Training Tab.
' Expected Result  : Find Training page should have 3 Tabs called, Search (By default),Browse All Training & Advanced Search.
Reporter.ReportEvent 2, "STEP 3 BEGINS",""

Browser("Browser").Page("Page").Link("Find Training").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Find Training")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Search").Check CheckPoint("Search") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Search")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Browser").Page("Page").Link("Browse all Training").Check CheckPoint("Browse all Training") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Browse all Training")_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("Browser").Page("Page").Link("Advanced Search").Check CheckPoint("Advanced Search") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Advanced Search")_;_script infofile_;_ZIP::ssf15.xml_;_

Reporter.ReportEvent 2, "STEP 3 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  4
' Description           :   Verify the Courses & Assessements retuned when the Search Button is clicked in search Tab.
' Expected Result  : Search should run the same query , as what running in Browse All Training tab .It should return  results based on Default filter settings ,
'                                     Category (All, Version (all) , Type (Online Courses) , Language (English)
Reporter.ReportEvent 2, "STEP 4 BEGINS",""

Browser("Browser").Page("Page").Link("Search").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Search")_;_script infofile_;_ZIP::ssf16.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Search_2").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Search 2")_;_script infofile_;_ZIP::ssf17.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebList("tabs:panel:filterPanel:library").Check CheckPoint("tabs:panel:filterPanel:library") @@ hightlight id_;_Browser("Browser").Page("Page").WebList("tabs:panel:filterPanel:library")_;_script infofile_;_ZIP::ssf18.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebList("tabs:panel:filterPanel:type").Check CheckPoint("tabs:panel:filterPanel:type") @@ hightlight id_;_Browser("Browser").Page("Page").WebList("tabs:panel:filterPanel:type")_;_script infofile_;_ZIP::ssf19.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebList("tabs:panel:filterPanel:version").Check CheckPoint("tabs:panel:filterPanel:version") @@ hightlight id_;_Browser("Browser").Page("Page").WebList("tabs:panel:filterPanel:version")_;_script infofile_;_ZIP::ssf20.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebList("tabs:panel:filterPanel:languag").Check CheckPoint("tabs:panel:filterPanel:language") @@ hightlight id_;_Browser("Browser").Page("Page").WebList("tabs:panel:filterPanel:languag")_;_script infofile_;_ZIP::ssf21.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebElement("2 results found in 2 courses").Check CheckPoint("2 results found in 2 courses") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("2 results found in 2 courses")_;_script infofile_;_ZIP::ssf22.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebElement("Advanced Assemblies").Check CheckPoint("Advanced Assemblies") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("Advanced Assemblies")_;_script infofile_;_ZIP::ssf23.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebElement("Arbortext 5.2 - Arbortext").Check CheckPoint("Arbortext 5.2 - Arbortext Editor - Creating Tables") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("Arbortext 5.2 - Arbortext")_;_script infofile_;_ZIP::ssf24.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Browse all Training").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Browse all Training")_;_script infofile_;_ZIP::ssf25.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Precision LMS : Find Training") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf26.xml_;_

Reporter.ReportEvent 2, "STEP 4 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  5
' Description           :   Go to Browse All Training tab ,Set all the filters as ALL and verify the results
' Expected Result  : All the Courses & Assessments associated with the Libary should present in the Find Training and should return all the 4 courses
'                                     Category Filter should show only following categories as User/Admin is Having License for Leafrning Items belongs to these categories
'                                     Pro/ENGINEER
'                                     Arbortext 
'                                    Pro/Intralink
'                                    Coach for Pro/ENGINEER
'
'                                   1. CheckPoint - Pro/INTRALINK Administrator Training (3.2) - Profile ID 75  English(Pro/F)
'                                   2. Precision LMS Only Grading Questions  - Profile ID 3402  English (Pro/F)
'                                   3. Advanced Assemblies - English (Coach Course)
'                                   4. Arbortext 5.2 - Arbortext Editor - Creating Tables - English (Caoch Course)
Reporter.ReportEvent 2, "STEP 5 BEGINS",""

Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebList("tabs:panel:filterPanel:type").Select "All" @@ hightlight id_;_Browser("Browser").Page("Page").WebList("tabs:panel:filterPanel:type")_;_script infofile_;_ZIP::ssf27.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").WebList("tabs:panel:filterPanel:languag").Select "All Languages" @@ hightlight id_;_Browser("Browser").Page("Page").WebList("tabs:panel:filterPanel:languag")_;_script infofile_;_ZIP::ssf28.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").Link("Update").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Update")_;_script infofile_;_ZIP::ssf29.xml_;_
Browser("Browser").Page("Page").Sync
Wait(5)
Browser("Browser").Page("Page").WebElement("Showing courses 1 to 4").Check CheckPoint("Showing courses 1 to 4 of 4 courses") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("Showing courses 1 to 4")_;_script infofile_;_ZIP::ssf30.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebList("tabs:panel:filterPanel:library").Check CheckPoint("tabs:panel:filterPanel:library_2") @@ hightlight id_;_Browser("Browser").Page("Page").WebList("tabs:panel:filterPanel:library")_;_script infofile_;_ZIP::ssf31.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebElement("Advanced Assemblies").Check CheckPoint("Advanced Assemblies_2") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("Advanced Assemblies")_;_script infofile_;_ZIP::ssf32.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebElement("Arbortext 5.2 - Arbortext").Check CheckPoint("Arbortext 5.2 - Arbortext Editor - Creating Tables_2") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("Arbortext 5.2 - Arbortext")_;_script infofile_;_ZIP::ssf33.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebElement("CheckPoint - Pro/INTRALINK").Check CheckPoint("CheckPoint - Pro/INTRALINK Administrator Training (3.2)") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("CheckPoint - Pro/INTRALINK")_;_script infofile_;_ZIP::ssf34.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebElement("Precision LMS Only Grading").Check CheckPoint("Precision LMS Only Grading Questions") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("Precision LMS Only Grading")_;_script infofile_;_ZIP::ssf35.xml_;_
Browser("Browser").Page("Page").Sync

Reporter.ReportEvent 2, "STEP 5 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  6
' Description           :   Verify that User  is able to Launch and View the Contents of the Courses/Assessments for which admin is having License.
' Expected Result  : The User can only launch a course for which they have a specific license.
Reporter.ReportEvent 2, "STEP 6 BEGINS",""

Browser("Browser").Page("Page").Link("Advanced Assemblies").Check CheckPoint("Advanced Assemblies_3") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Advanced Assemblies")_;_script infofile_;_ZIP::ssf36.xml_;_
Browser("Browser").Page("Page").Link("Advanced Assemblies").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Advanced Assemblies")_;_script infofile_;_ZIP::ssf37.xml_;_
Wait(10)
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").SetToProperty "hwnd", value
Browser("Course Viewer").Page("Course Viewer").Link("Analysis Datum").Click @@ hightlight id_;_Browser("Course Viewer : Advanced").Page("Course Viewer : Advanced").Link("Analysis Datum")_;_script infofile_;_ZIP::ssf38.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5)
Browser("Course Viewer").Page("Course Viewer").Link("Using a Skeleton Part").Click @@ hightlight id_;_Browser("Course Viewer : Advanced").Page("Course Viewer : Advanced").Link("Using a Skeleton Part")_;_script infofile_;_ZIP::ssf39.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5)
Browser("Course Viewer").Page("Course Viewer").Link("Creating a Mold Cavity").Click @@ hightlight id_;_Browser("Course Viewer : Advanced").Page("Course Viewer : Advanced").Link("Creating a Mold Cavity")_;_script infofile_;_ZIP::ssf40.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Browser("Course Viewer").Close
Wait(5)

Reporter.ReportEvent 2, "STEP 6 ENDS",""
'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  7
' Description           :   Search with the Keyword (Creating Geometry from Surfaces and Curves using Pro/ENGINEER Wildfire 3.0  ) in Search or Advanced Search tab of FT.
' Expected Result  : Search should not Return any course/Assessment as the Admin is not having any License.
Reporter.ReportEvent 2, "STEP 7 BEGINS",""

Browser("Browser").Page("Page").Link("Advanced Search").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Advanced Search")_;_script infofile_;_ZIP::ssf42.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Precision LMS : Find Training_2") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf43.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebEdit("tabs:panel:andField").Set "Creating Geometry from Surfaces and Curves using Pro/ENGINEER Wildfire 3.0" @@ hightlight id_;_Browser("Browser").Page("Page").WebEdit("tabs:panel:andField")_;_script infofile_;_ZIP::ssf44.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Search_2").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Search 2")_;_script infofile_;_ZIP::ssf45.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebElement("No Results Found").Check CheckPoint("No Results Found") @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("No Results Found")_;_script infofile_;_ZIP::ssf46.xml_;_
Browser("Browser").Page("Page").Link("Find Training").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Find Training")_;_script infofile_;_ZIP::ssf47.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf49.xml_;_
Browser("Browser").Page("Page").Link("Log Out").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Log Out")_;_script infofile_;_ZIP::ssf48.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf49.xml_;_
Browser("Browser").Close

Reporter.ReportEvent 2, "STEP 7 ENDS","SCRIPT ENDS"
'--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------