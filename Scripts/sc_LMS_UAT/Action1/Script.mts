'File Name: sc_LMS_UAT

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
'  Date Started Creation: 15/04/2008
'  Date Ended Creation: 16/04/2008
'  Functions Included: fOpenApplication(),CloseAllBrowsersExceptQC(),Login()
'  History of Changes: 
'--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
' Step No.   		        :  
'Automationhosted

'1.Test that the license has be transferred to Precision LMS
'2.	Log into Precision LMS as a system administrator
'3.	User the super user log in functionality on the Admin page to log in as the customer contact that was identified on the order.
'4.	When logged in as the customer contact, click on the Admin tab.
'5.	Click on the License Management link.
'6.	In the License management page, the new license should be visible in the table.
'7.	Assign the license to the Customer contact 
'
'Create Groups
'Prior to creating users, you should define any groups that you may want to use.
'
'Create Users
'Now that we have content, a library, an order and a license in the system, you are now ready to add users.
'
'1.	Create a file in Excel.
'2.	In column A create a list of User email addresses for which to create users accounts for.
'3.	Ensure the first line of column A contains only the string Ã¢â‚¬Å“emailÃ¢â‚¬Â
'4.	Save the file in CSV format.
'5.	Login to Precision LSM
'6.	Click on the Admin Tab
'7.	Click on User management
'8.	Click on create users
'9.	Select Upload a file of users
'10.	Click on the browse button and specify the user file.
'11.	Click next, and edit the users 
'12.	Complete the rest of the create user process.
'
'Assign the license to the users.
'Now that we have a license and some users in the system, the next step is to create a relationship between the user and the license by assigning the license to the users.
'
'1.	Log in to Precision LMS as an Admin
'2.	Click on the Admin Tab.
'3.	Click on Assign and View licenses
'4.	Assign licenses to users
'
'Create a New Learning Path
'1.	Click on the Admin tab.
'2.	Click on Manage learning paths 
'3.	Create a new learning path.
'
'Assign the Learning Path
'1.	Go to the Admin tab
'2.	Click on Assign Learning
'3.	Specify that you want to assign a learning path
'4.	Select the learning path
'5.	select some users 
'6.	do not send notifications
'7.	finish the assign learning wizard
'
'Log in as User and Verify 
'1.	Log into Precision LMS as one of the users who have been 
'2.	Verify that the specified training has been assigned (it should be visible from the current learning table).
'
'Start Course
'1.	On the Current learning table select the Start action next to the course you want to start. The Course Viewer should launch with the correct content
'
'Scroll through Course and Launch Assessment
'1.	Scroll to the bottom of the course and click on the assessment.
'2.	Confirm that you want to start the assessment. The course viewer should switch to assessment viewing mode and display the assessment content.
'
'Complete the Assessment
'1.	Answer some of the questions in the assessment and click Submit Assessment. The system should pop a warning that tells you that you have not completed all the questions in the assessment.
'2.	Accept the warning and submit the assessment. The system should load the assessment results environment.
'
'
'Verify that the Course has been completed in the Completed Learning table
'1.	Return to the home tab.
'2.	Click on the completed learning table. 
'3.	The course that you just finished should be visible in this table.
'
'Show Results
'1.	In the completed learning table, locate a completed course and click the results link. The assessment results environment should open.
'
'Initiate a Retest of the Assessment
'1.	In the completed learning table, locate a completed course and click the retest link. The assessment viewer should open allowing you to complete the assessment again.
Reporter.ReportEvent 2, "Script Begins","Login"

'Login to PLMS .Opening a new browser with the URL specified in the startup. 
Reporter.ReportEvent micDone, "Open the application", "Close all the browsers and Open the application"
rc=OpenApplication("http://i2361.ptcnet.ptc.com/automationhosted/", blnRet)
If  blnRet = false Then
 	ExitAction(0)
End If
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Precision LMS")
Browser("Browser").Page("Page").Check CheckPoint("Precision LMS : Login")
Browser("Browser").Page("Page").WebEdit("userId").Set "rkishore"
Browser("Browser").Page("Page").WebEdit("password").SetSecure "Violici143"
Browser("Browser").Page("Page").Link("Login").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Login")_;_script infofile_;_ZIP::ssf619.xml_;_
Browser("Browser").Page("Page").Sync

'Verify all Links from Home page.
Browser("Browser").Page("Page").Check CheckPoint("Welcome to Precision LMS")
Browser("Browser").Page("Page").Link("Home").Check CheckPoint("Home")
Browser("Browser").Page("Page").Link("Find Training").Check CheckPoint("Find Training")
Browser("Browser").Page("Page").Link("Administration").Check CheckPoint("Administration")
Browser("Browser").Page("Page").WebElement("Logged in as Ravi Kishore").Check CheckPoint("Logged in as Ravi Kishore")
Browser("Browser").Page("Page").WebElement("Welcome to Precision LMS").Check CheckPoint("Welcome to Precision LMS_2")
Browser("Browser").Page("Page").Link("My Bookmarks").Check CheckPoint("My Bookmarks")
Browser("Browser").Page("Page").Link("My Account").Check CheckPoint("My Account")
Browser("Browser").Page("Page").Link("Help").Check CheckPoint("Help")
Browser("Browser").Page("Page").Link("Log Out").Check CheckPoint("Log Out")
Browser("Browser").Page("Page").Link("My Account").Click
Browser("Browser").Page("Page").Check CheckPoint("My Account_2")
Browser("Browser").Page("Page").Link("Current Learning").Click
Browser("Browser").Page("Page").Check CheckPoint("My Account_3")
Browser("Browser").Page("Page").Link("Completed Learning").Click
Browser("Browser").Page("Page").Check CheckPoint("My Account_4")
Browser("Browser").Page("Page").Link("Licenses").Click
Browser("Browser").Page("Page").Check CheckPoint("My Account_5")
Browser("Browser").Page("Page").Link("Cancel").Click
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Ok").Click
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("My Bookmarks").Click
Browser("Browser").Page("Page").Link("Cancel_2").Click

'CLick on Admin Tab & Verify all links from the page.
Browser("Browser").Page("Page").Link("Administration").Click
Browser("Browser").Page("Page").Check CheckPoint("Precision LMS : Administration")
Browser("Browser").Page("Page").Link("Assign Learning").Check CheckPoint("Assign Learning")
Browser("Browser").Page("Page").Link("Modify Assignments").Check CheckPoint("Modify Assignments")
Browser("Browser").Page("Page").Link("Create & Edit Learning").Check CheckPoint("Create & Edit Learning Paths")
Browser("Browser").Page("Page").Link("Manage Users").Check CheckPoint("Manage Users")
Browser("Browser").Page("Page").Link("Create & Edit Groups").Check CheckPoint("Create & Edit Groups")
Browser("Browser").Page("Page").Link("View & Assign Licenses").Check CheckPoint("View & Assign Licenses")
Browser("Browser").Page("Page").Link("Learning Summary").Check CheckPoint("Learning Summary")
Browser("Browser").Page("Page").Link("Online Course Usage").Check CheckPoint("Online Course Usage")
Browser("Browser").Page("Page").Link("User Access").Check CheckPoint("User Access")
Browser("Browser").Page("Page").Link("Assessment Results Comparison").Check CheckPoint("Assessment Results Comparison")
Browser("Browser").Page("Page").Link("Group/Users Assessment").Check CheckPoint("Group/Users Assessment Results")
Browser("Browser").Page("Page").Link("Assessment Performance").Check CheckPoint("Assessment Performance Summary")
Browser("Browser").Page("Page").Link("Question Group Analysis").Check CheckPoint("Question Group Analysis")
Browser("Browser").Page("Page").Link("Question Analysis").Check CheckPoint("Question Analysis")
Browser("Browser").Page("Page").Link("Groups & Users").Check CheckPoint("Groups & Users")
Browser("Browser").Page("Page").Link("Users Not Assigned to").Check CheckPoint("Users Not Assigned to a Group")
Browser("Browser").Page("Page").Link("Licenses & Users").Check CheckPoint("Licenses & Users")

'Creating Users
Browser("Browser").Page("Page").Link("Manage Users").Click
Browser("Browser").Page("Page").Check CheckPoint("Manage Users_2")
Browser("Browser").Page("Page").WebList("listuserspage.dropDown.groups").Check CheckPoint("listuserspage.dropDown.groups")
Browser("Browser").Page("Page").WebElement("Showing users 1 to 1 of").Check CheckPoint("Showing users 1 to 1 of 1 users")
Browser("Browser").Page("Page").Link("Show Only Inactive Users").Check CheckPoint("Show Only Inactive Users")
Browser("Browser").Page("Page").WebTable("Last Name").Check CheckPoint("Last Name")
Browser("Browser").Page("Page").WebElement("Manage Users").Check CheckPoint("Manage Users_3")
Browser("Browser").Page("Page").Link("Create New User").Click
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").WebRadioGroup("view:radioGroup").Select "#1"
Browser("Browser").Page("Page").WebFile("view:radioGroup:createMultiple").Set "D:\Temp\PrecisionLMS-Team Users.csv"
Browser("Browser").Page("Page").Link("Add To List").Click
Browser("Browser").Page("Page").Check CheckPoint("Create User_2")
Browser("Browser").Page("Page").Link("Next >").Click
Browser("Browser").Page("Page").Check CheckPoint("Create User_3")
Browser("Browser").Page("Page").Link("Edit Table").Click
Browser("Browser").Page("Page").WebCheckBox("view:form:usergroup").Set "ON"
Browser("Browser").Page("Page").WebCheckBox("view:form:usergroup_2").Set "ON"
Browser("Browser").Page("Page").Link("Bulk Edit").Click
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("authrolescheck").Set "ON"
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("authroles").Select "Admin"
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Ok").Click
Browser("Browser").Page("Page").Link("Next >").Click
Browser("Browser").Page("Page").Check CheckPoint("Create User_4")
Browser("Browser").Page("Page").Link("Next >").Click
Browser("Browser").Page("Page").Check CheckPoint("Create User_5")
Wait(5)
Browser("Browser").Page("Page").WebRadioGroup("view:sendNotificationForm:grou").Select "#1"
Browser("Browser").Page("Page").Link("Finish").Click
Wait(5)
Browser("Browser").Page("Page").Check CheckPoint("Manage Users_4")

'Creating Group
Browser("Browser").Page("Page").Link("Administration").Click
Browser("Browser").Page("Page").Link("Create & Edit Groups").Check CheckPoint("Create & Edit Groups_2")
Browser("Browser").Page("Page").Link("Create & Edit Groups").Click
Browser("Browser").Page("Page").Check CheckPoint("Create & Edit Groups_3")
Browser("Browser").Page("Page").WebElement("Create & Edit Groups").Check CheckPoint("Create & Edit Groups_4")
Browser("Browser").Page("Page").WebTable("Last Name").Check CheckPoint("Name")
Browser("Browser").Page("Page").Link("Create New Group").Click
Browser("Browser").Page("Page").Check CheckPoint("Create Group")
Browser("Browser").Page("Page").WebEdit("name").Set "PTC Users"
Browser("Browser").Page("Page").WebEdit("description").Set "PTC Internal Users Group"
Browser("Browser").Page("Page").Link("Select Users").Click
Browser("Browser").Page("Page").Frame("viewerPageMapCreate").Check CheckPoint("viewerPageMapCreate")
Browser("Browser").Page("Page").Frame("viewerPageMapCreate").WebEdit("search").Set "mpbourque"
Browser("Browser").Page("Page").Frame("viewerPageMapCreate").Link("Search").Click
Wait(5)
Browser("Browser").Page("Page").Frame("viewerPageMapCreate").WebCheckBox("WebCheckBox").Set "ON"
Browser("Browser").Page("Page").Frame("viewerPageMapCreate").Link("Ok").Click
Wait(5)
Browser("Browser").Page("Page").Link("Select Users").Click
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Frame("viewerPageMapCreate").WebCheckBox("WebCheckBox").Set "ON"
Wait(5)
Browser("Browser").Page("Page").Frame("viewerPageMapCreate").Link("Ok").Click
Wait(5)
Browser("Browser").Page("Page").Link("Ok").Click
Wait(5)
Browser("Browser").Page("Page").Check CheckPoint("Create & Edit Groups_5")

'Assigning License
Browser("Browser").Page("Page").Link("Administration").Click
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("View & Assign Licenses").Check CheckPoint("View & Assign Licenses_2")
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("View & Assign Licenses").Click
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("View & Assign Licenses_3")
Browser("Browser").Page("Page").WebTable("Last Name").Check CheckPoint("Library")
Browser("Browser").Page("Page").Image("assign-active").Click
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Assign License")
Browser("Browser").Page("Page").Link("Select Users").Click
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Check CheckPoint("modal-dialog-pagemap")
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebEdit("search").Set "mpbourque"
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search").Click
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("WebCheckBox").Set "ON"
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Ok").Click
Wait(5)
Browser("Browser").Page("Page").Check CheckPoint("Assign License_2")
Browser("Browser").Page("Page").Link("Select Users").Click
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("WebCheckBox").Set "ON"
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Ok").Click
Browser("Browser").Page("Page").Sync
'Browser("Browser").Page("Page").Link("Remove").Click
'Wait(5)
'Browser("Browser").Page("Page").Sync
'Browser("Browser").Page("Page").Link("Remove").Click
'Wait(5)
'Browser("Browser").Page("Page").Sync
'Browser("Browser").Page("Page").Link("Select Users").Click
'Browser("Browser").Page("Page").Sync
'Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("selectuserspage.dropDown.group").Select "PTC Users" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("selectuserspage.dropDown.group")_;_script infofile_;_ZIP::ssf620.xml_;_
'Wait(5)
'Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("WebCheckBox").Set "ON"
'Wait(5)
'Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Ok").Click
'Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Assign License_3")
Browser("Browser").Page("Page").Link("Next >").Click
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Assign License_4")
Wait(5)
Browser("Browser").Page("Page").WebRadioGroup("view:sendNotificationForm:grou").Select "#1"
Browser("Browser").Page("Page").Link("Finish").Click
Wait(5)
Browser("Browser").Page("Page").Check CheckPoint("View & Assign Licenses_4")
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Image("delegate-active").Click
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Manage Delegates")
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Select Users").Click
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebEdit("search").Set "mpbourque"
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search").Click
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("WebCheckBox").Set "ON"
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Ok").Click
Wait(5)
Browser("Browser").Page("Page").Link("Submit").Click
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("View & Assign Licenses_5")
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Image("details-active").Click
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("License Deatils")
Browser("Browser").Page("Page").Link("Back").Click
Browser("Browser").Page("Page").Sync

'Creating New Learning Path
Browser("Browser").Page("Page").Link("Administration").Click
Browser("Browser").Page("Page").Check CheckPoint("Precision LMS : Administration_2")
Browser("Browser").Page("Page").Link("Create & Edit Learning").Click
Browser("Browser").Page("Page").Check CheckPoint("Manage Learning Paths")
Browser("Browser").Page("Page").Link("Create new Learning Path").Click
Browser("Browser").Page("Page").Check CheckPoint("Create Learning Path")
Browser("Browser").Page("Page").WebEdit("view:learningPathForm:name").Set "Education Learning Path"
Browser("Browser").Page("Page").WebEdit("view:learningPathForm:descript").Set "PTC Eduction Learning Path used by Internal Users"
Browser("Browser").Page("Page").Link("Next >").Click
Browser("Browser").Page("Page").Check CheckPoint("Create Learning Path_2")
Browser("Browser").Page("Page").Link("Select Learning").Click
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Check CheckPoint("modal-dialog-pagemap_3")
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebEdit("tabs:panel:searchKeyword").Set "Assemblies"
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search_2").Click
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("resultTable:learningItemRow:1:").Set "ON"
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Ok").Click
Wait(60)
Browser("Browser").Page("Page").Link("Select Learning").Click
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Browse all Training").Click
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("tabs:panel:filterPanel:library").Select "Pro/ENGINEER" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("tabs:panel:filterPanel:library")_;_script infofile_;_ZIP::ssf622.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("tabs:panel:filterPanel:type").Select "All" @@ hightlight id_;_Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("tabs:panel:filterPanel:type")_;_script infofile_;_ZIP::ssf623.xml_;_
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Update").Click
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("resultTable:learningItemRow:6:").Set "ON"
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Ok").Click
Wait(120)
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Select Learning").Click
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Advanced Search").Click
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Check CheckPoint("modal-dialog-pagemap_5")
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebEdit("tabs:panel:orField").Set "advanced"
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Search_2").Click
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("resultTable:learningItemRow:2:").Set "ON"
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Ok").Click
Wait(120)
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Select Learning").Click
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Browse all Training").Click
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Check CheckPoint("modal-dialog-pagemap_6")
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("tabs:panel:filterPanel:type").Select "All"
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("tabs:panel:filterPanel:version").Select "All"
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("tabs:panel:filterPanel:languag").Select "All Languages"
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Update").Click
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("resultTable:learningItemRow:8:").Set "ON"
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("resultTable:learningItemRow:9:").Set "ON"
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("resultTable:learningItemRow:10").Set "ON"
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Ok").Click
Wait(60)
Browser("Browser").Page("Page").Check CheckPoint("Create Learning Path_3")
Browser("Browser").Page("Page").Link("Next >").Click
Browser("Browser").Page("Page").WebEdit("view:learningPathActivityForm:").Set "10"
Browser("Browser").Page("Page").WebEdit("view:learningPathActivityForm:_2").Set "1"
Browser("Browser").Page("Page").WebList("view:learningPathActivityForm:").Select "Week(s)"
Browser("Browser").Page("Page").WebEdit("view:learningPathActivityForm:_3").Set "80"
Browser("Browser").Page("Page").WebList("view:learningPathActivityForm:_2").Select "Week(s)"
Browser("Browser").Page("Page").WebList("view:learningPathActivityForm:_3").Select "Week(s)"
Browser("Browser").Page("Page").WebEdit("view:learningPathActivityForm:_4").Set "99"
Browser("Browser").Page("Page").Link("Finish").Click
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Manage Learning Paths_2")

'Assigning Learning Path (Online Courses and Assessments )
Browser("Browser").Page("Page").Link("Administration").Click
Browser("Browser").Page("Page").Link("Assign Learning").Check CheckPoint("Assign Learning_2")
Browser("Browser").Page("Page").Link("Assign Learning").Click
Browser("Browser").Page("Page").Check CheckPoint("Assign Learning Wizard")
Browser("Browser").Page("Page").Link("Next >").Click
Browser("Browser").Page("Page").Check CheckPoint("Assign Learning Wizard_2")
Browser("Browser").Page("Page").Link("Select Learning").Click
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Check CheckPoint("modal-dialog-pagemap_7")
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Browse all Training").Click
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("tabs:panel:filterPanel:library").Select "Arbortext"
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("tabs:panel:filterPanel:languag").Select "All Languages"
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Update").Click
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("resultTable:learningItemRow:6:").Set "ON"
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("resultTable:learningItemRow:7:").Set "ON"
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Ok").Click
Wait(60)
Browser("Browser").Page("Page").Check CheckPoint("Assign Learning Wizard_3")
Browser("Browser").Page("Page").Link("Select Learning").Click
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Browse all Training").Click
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("tabs:panel:filterPanel:library").Select "Pro/Intralink"
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("tabs:panel:filterPanel:type").Select "Assessment"
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebList("tabs:panel:filterPanel:languag").Select "All Languages"
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Update").Click
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").WebCheckBox("resultTable:learningItemRow:6:").Set "ON"
Wait(5)
Browser("Browser").Page("Page").Frame("modal-dialog-pagemap").Link("Ok").Click
Wait(5)
Browser("Browser").Page("Page").Check CheckPoint("Assign Learning Wizard_4")
Browser("Browser").Page("Page").Link("Next >").Click
Browser("Browser").Page("Page").Check CheckPoint("Assign Learning Wizard_5")
Browser("Browser").Page("Page").Link("Select Users").Click
Browser("Browser").Page("Page").Frame("viewerPageMapCreate").WebList("selectuserspage.dropDown.group").Select "PTC Users"
Browser("Browser").Page("Page").Frame("viewerPageMapCreate").WebCheckBox("WebCheckBox").Set "ON"
Browser("Browser").Page("Page").Frame("viewerPageMapCreate").Link("Ok").Click
Browser("Browser").Page("Page").Check CheckPoint("Assign Learning Wizard_6")
Browser("Browser").Page("Page").Link("Next >").Click
Browser("Browser").Page("Page").Check CheckPoint("Assign Learning Wizard_7")
Browser("Browser").Page("Page").WebRadioGroup("view:sendNotificationForm:grou").Select "#1"
Browser("Browser").Page("Page").Link("Finish").Click
Wait(5)
Browser("Browser").Page("Page").Check CheckPoint("Assign Learning Wizard_8")
Browser("Browser").Page("Page").Link("Done").Click
Browser("Browser").Page("Page").Check CheckPoint("Precision LMS : Administration_3")

'Assigning Learning Path (Learning Path )
Browser("Browser").Page("Page").Link("Administration").Click
Browser("Browser").Page("Page").Check CheckPoint("Precision LMS : Administration_4")
Browser("Browser").Page("Page").Link("Assign Learning").Click
Browser("Browser").Page("Page").Check CheckPoint("Assign Learning Wizard_9")
Browser("Browser").Page("Page").WebRadioGroup("view:choice").Select ("#1")
Browser("Browser").Page("Page").Link("Next >").Click
Browser("Browser").Page("Page").Check CheckPoint("Assign Learning Wizard_10")
Browser("Browser").Page("Page").WebRadioGroup("view:learningItemsForm:learnin").Select ("#0")
Wait(5)
Browser("Browser").Page("Page").Link("Next >").Click
Browser("Browser").Page("Page").Check CheckPoint("Assign Learning Wizard_11")
Browser("Browser").Page("Page").Link("Select Users").Click
Browser("Browser").Page("Page").Frame("viewerPageMapCreate").Check CheckPoint("viewerPageMapCreate_2")
Browser("Browser").Page("Page").Frame("viewerPageMapCreate").WebEdit("search").Set "mpbourque"
Browser("Browser").Page("Page").Frame("viewerPageMapCreate").Link("Search").Click
Wait(5)
Browser("Browser").Page("Page").Frame("viewerPageMapCreate").WebCheckBox("WebCheckBox").Set "ON"
Browser("Browser").Page("Page").Frame("viewerPageMapCreate").Link("Ok").Click
Wait(5)
Browser("Browser").Page("Page").WebTable("Last Name").Check CheckPoint("Name_4")
Browser("Browser").Page("Page").Link("Next >").Click
Browser("Browser").Page("Page").Check CheckPoint("Assign Learning Wizard_12")
Browser("Browser").Page("Page").WebRadioGroup("view:sendNotificationForm:grou").Select "#1"
Browser("Browser").Page("Page").Link("Finish").Click
Wait(5)
Browser("Browser").Page("Page").Check CheckPoint("Assign Learning Wizard_13")
Browser("Browser").Page("Page").Link("Done").Click
Browser("Browser").Page("Page").Check CheckPoint("Precision LMS : Administration_5")

'Modify Assignments
Browser("Browser").Page("Page").Link("Modify Assignments").Check CheckPoint("Modify Assignments_2")
Browser("Browser").Page("Page").Link("Modify Assignments").Click
Browser("Browser").Page("Page").Check CheckPoint("Modify Assignments_3")
Wait(5)
Browser("Browser").Page("Page").WebRadioGroup("view:choice").Select "#1"
Browser("Browser").Page("Page").Link("Next >").Click
Browser("Browser").Page("Page").Check CheckPoint("Modify Assignments_4")
Browser("Browser").Page("Page").Link("Select Users").Click
Browser("Browser").Page("Page").Frame("viewerPageMapCreate").Check CheckPoint("viewerPageMapCreate_3")
Browser("Browser").Page("Page").Frame("viewerPageMapCreate").WebList("selectuserspage.dropDown.group").Select "PTC Users"
Browser("Browser").Page("Page").Frame("viewerPageMapCreate").WebEdit("search").Set "mpbourque"
Browser("Browser").Page("Page").Frame("viewerPageMapCreate").Link("Search").Click
Wait(5)
Browser("Browser").Page("Page").Frame("viewerPageMapCreate").WebCheckBox("WebCheckBox").Set "ON"
Browser("Browser").Page("Page").Frame("viewerPageMapCreate").Link("Ok").Click
Wait(5)
Browser("Browser").Page("Page").Link("Next >").Click
Browser("Browser").Page("Page").Check CheckPoint("Modify Assignments_5")
Browser("Browser").Page("Page").Link("Edit Table").Click
Wait(5)
Browser("Browser").Page("Page").WebCheckBox("view:assignmentCheckGroup").Set "ON"
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Image("unassign-active").Click
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Modify Assignments_6")
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Next >").Click
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Modify Assignments_7")
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Finish").Click
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Modify Assignment Wizard")
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Link("Done").Click
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Precision LMS : Administration_6")

'Launching Online Courses & Assessmnet from Current Learning Tab and Verifying Results.
'Launch  Courses "Best Practices - Using Arbortext 5.2 Styler", Verify and Complete the Course
Browser("Browser").Page("Page").Link("Log Out").Click
Browser("Browser").Page("Page").Check CheckPoint("Precision LMS : Login_2")
Browser("Browser").Page("Page").WebEdit("userId").Set "precisionlmsadmin"
Browser("Browser").Page("Page").WebEdit("password").SetSecure "48105891d0ce42927fa8a3ca90adbacd8f7f01c7df6f55d813c75b2ce9d8"
Browser("Browser").Page("Page").Link("Login").Click
Browser("Browser").Page("Page").Sync
Browser("Browser").Page("Page").Check CheckPoint("Welcome to Precision LMS_3")
Browser("Browser").Page("Page").Link("Administration").Click
Browser("Browser").Page("Page").Link("Super User Login").Check CheckPoint("Super User Login")
Browser("Browser").Page("Page").Link("Super User Login").Click
Browser("Browser").Page("Page").WebEdit("userId").Set "kkapoor"
Browser("Browser").Page("Page").Link("Login").Click
Browser("Browser").Page("Page").Check CheckPoint("Welcome to Precision LMS_4")
Browser("Browser").Page("Page").Link("Best Practices - Using").Check CheckPoint("Best Practices - Using Arbortext 5.2 Styler")
Browser("Browser").Page("Page").WebTable("Last Name").Check CheckPoint("Title")
Browser("Browser").Page("Page").Link("Best Practices - Using").Click
Wait(10)
Browser("Browser").Page("Page").Link("Start").Click
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").SetToProperty "hwnd", value
Browser("Course Viewer").Page("Course Viewer").Check CheckPoint("Course Viewer : Best Practices - Using Arbortext 5.2 Styler") @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Hide Course Map")_;_script infofile_;_ZIP::ssf341.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Hide Course Map").Check CheckPoint("Hide Course Map") @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Fit view")_;_script infofile_;_ZIP::ssf342.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Fit view").Check CheckPoint("Fit view") @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Exercise Mode")_;_script infofile_;_ZIP::ssf343.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Exercise Mode").Check CheckPoint("Exercise Mode") @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Add Bookmark")_;_script infofile_;_ZIP::ssf344.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Add Bookmark").Check CheckPoint("Add Bookmark") @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Email")_;_script infofile_;_ZIP::ssf345.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Email").Check CheckPoint("Email") @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Frame("contentframe")_;_script infofile_;_ZIP::ssf346.xml_;_
Browser("Course Viewer").Page("Course Viewer").Frame("contentframe").Check CheckPoint("contentframe") @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Introduction")_;_script infofile_;_ZIP::ssf347.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Introduction").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Understanding StylerSheets")_;_script infofile_;_ZIP::ssf348.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Understanding StylerSheets").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Demonstration")_;_script infofile_;_ZIP::ssf349.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Demonstration").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Exercise")_;_script infofile_;_ZIP::ssf350.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Exercise").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("StylerSheet Modules")_;_script infofile_;_ZIP::ssf351.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("StylerSheet Modules").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Demonstration 2")_;_script infofile_;_ZIP::ssf352.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Demonstration_2").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Exercise")_;_script infofile_;_ZIP::ssf353.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Exercise").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Creating Format Based")_;_script infofile_;_ZIP::ssf354.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Creating Format Based").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Image("forward icon lg")_;_script infofile_;_ZIP::ssf355.xml_;_
Browser("Course Viewer").Page("Course Viewer").Image("forward_icon_lg").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Image("forward icon lg")_;_script infofile_;_ZIP::ssf356.xml_;_
Browser("Course Viewer").Page("Course Viewer").Image("forward_icon_lg").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Image("forward icon lg")_;_script infofile_;_ZIP::ssf357.xml_;_
Browser("Course Viewer").Page("Course Viewer").Image("forward_icon_lg").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Image("back icon lg")_;_script infofile_;_ZIP::ssf358.xml_;_
Browser("Course Viewer").Page("Course Viewer").Image("back_icon_lg").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Image("back icon lg")_;_script infofile_;_ZIP::ssf359.xml_;_
Browser("Course Viewer").Page("Course Viewer").Image("back_icon_lg").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Image("back icon lg")_;_script infofile_;_ZIP::ssf360.xml_;_
Browser("Course Viewer").Page("Course Viewer").Image("back_icon_lg").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf361.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5)
Browser("Course Viewer").Close
Wait(5) @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf362.xml_;_
Browser("Browser").Page("Page").Check CheckPoint("Welcome to Precision LMS_5") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Best Practices - Using")_;_script infofile_;_ZIP::ssf363.xml_;_
Browser("Browser").Page("Page").Link("Best Practices - Using").Check CheckPoint("Best Practices - Using Arbortext 5.2 Styler_2") @@ hightlight id_;_Browser("Browser").Page("Page").Image("mark complete")_;_script infofile_;_ZIP::ssf364.xml_;_
Browser("Browser").Page("Page").Image("mark_complete").Check CheckPoint("mark_complete") @@ hightlight id_;_Browser("Browser").Page("Page").Image("mark complete")_;_script infofile_;_ZIP::ssf365.xml_;_
Browser("Browser").Page("Page").Image("mark_complete").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_9110100_;_script infofile_;_ZIP::ssf366.xml_;_
Browser("Browser").Dialog("Microsoft Internet Explorer").WinButton("OK").Click
Wait(5) @@ hightlight id_;_Browser("Browser").Page("Page").Link("Completed Learning")_;_script infofile_;_ZIP::ssf367.xml_;_
Browser("Browser").Page("Page").Link("Completed Learning").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Completed Learning")_;_script infofile_;_ZIP::ssf368.xml_;_
'Browser("Browser").Page("Page").Link("Completed Learning").Check CheckPoint("Completed Learning")
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Best Practices - Using")_;_script infofile_;_ZIP::ssf369.xml_;_
Browser("Browser").Page("Page").Link("Best Practices - Using").Check CheckPoint("Best Practices - Using Arbortext 5.2 Styler_3") @@ hightlight id_;_Browser("Browser").Page("Page").WebTable("Last Name")_;_script infofile_;_ZIP::ssf370.xml_;_
Browser("Browser").Page("Page").WebTable("Last Name").Check CheckPoint("Title_2")

'Launch  Courses "Arbortext 5.2 - Arbortext Editor - Creating Tables", Verify and Complete the Course @@ hightlight id_;_Browser("Browser").Page("Page").Link("Current Learning")_;_script infofile_;_ZIP::ssf371.xml_;_
Browser("Browser").Page("Page").Link("Current Learning").Check CheckPoint("Current Learning") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Current Learning")_;_script infofile_;_ZIP::ssf372.xml_;_
Browser("Browser").Page("Page").Link("Current Learning").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Arbortext 5.2 - Arbortext")_;_script infofile_;_ZIP::ssf373.xml_;_
Browser("Browser").Page("Page").Link("Arbortext 5.2 - Arbortext").Check CheckPoint("Arbortext 5.2 - Arbortext Editor - Creating Tables") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Arbortext 5.2 - Arbortext")_;_script infofile_;_ZIP::ssf374.xml_;_
Browser("Browser").Page("Page").Link("Arbortext 5.2 - Arbortext").Click
Wait(10)
Browser("Browser").Page("Page").Link("Start").Click
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").SetToProperty "hwnd", value @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf375.xml_;_
Browser("Course Viewer").Page("Course Viewer").Check CheckPoint("Course Viewer") @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Frame("contentframe")_;_script infofile_;_ZIP::ssf376.xml_;_
Browser("Course Viewer").Page("Course Viewer").Frame("contentframe").Check CheckPoint("contentframe_2") @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Introduction 2")_;_script infofile_;_ZIP::ssf377.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Introduction_2").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Creating Tables")_;_script infofile_;_ZIP::ssf378.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Creating Tables").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Inserting a New Table")_;_script infofile_;_ZIP::ssf379.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Inserting a New Table").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Navigating and Selecting")_;_script infofile_;_ZIP::ssf380.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Navigating and Selecting").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Editing Within a Table")_;_script infofile_;_ZIP::ssf381.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Editing Within a Table").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Inserting Markup")_;_script infofile_;_ZIP::ssf382.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Inserting Markup").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Modifying Cell Format")_;_script infofile_;_ZIP::ssf383.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Modifying Cell Format").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Setting Table, Column")_;_script infofile_;_ZIP::ssf384.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Setting Table, Column").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Setting Table Display")_;_script infofile_;_ZIP::ssf385.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Setting Table Display").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Pasting Excel Tables")_;_script infofile_;_ZIP::ssf386.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Pasting Excel Tables").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Creating Tables 2")_;_script infofile_;_ZIP::ssf387.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Creating Tables_2").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Image("back icon lg")_;_script infofile_;_ZIP::ssf388.xml_;_
Browser("Course Viewer").Page("Course Viewer").Image("back_icon_lg").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Image("back icon lg")_;_script infofile_;_ZIP::ssf389.xml_;_
Browser("Course Viewer").Page("Course Viewer").Image("back_icon_lg").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Image("back icon lg")_;_script infofile_;_ZIP::ssf390.xml_;_
Browser("Course Viewer").Page("Course Viewer").Image("back_icon_lg").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Image("back icon lg")_;_script infofile_;_ZIP::ssf391.xml_;_
Browser("Course Viewer").Page("Course Viewer").Image("back_icon_lg").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf392.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5)
Browser("Course Viewer").Close
Wait(5) @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf393.xml_;_
Browser("Browser").Page("Page").Check CheckPoint("Welcome to Precision LMS_6") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Arbortext 5.2 - Arbortext")_;_script infofile_;_ZIP::ssf394.xml_;_
Browser("Browser").Page("Page").Link("Arbortext 5.2 - Arbortext").Check CheckPoint("Arbortext 5.2 - Arbortext Editor - Creating Tables_2") @@ hightlight id_;_Browser("Browser").Page("Page").Image("delegate-active")_;_script infofile_;_ZIP::ssf395.xml_;_
Browser("Browser").Page("Page").Image("delegate-active").Check CheckPoint("mark_complete_2") @@ hightlight id_;_Browser("Browser").Page("Page").Image("delegate-active")_;_script infofile_;_ZIP::ssf396.xml_;_
Browser("Browser").Page("Page").Image("delegate-active").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_15729196_;_script infofile_;_ZIP::ssf397.xml_;_
Browser("Browser").Dialog("Microsoft Internet Explorer").WinButton("OK").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Completed Learning")_;_script infofile_;_ZIP::ssf398.xml_;_
Browser("Browser").Page("Page").Link("Completed Learning").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Arbortext 5.2 - Arbortext")_;_script infofile_;_ZIP::ssf399.xml_;_
Browser("Browser").Page("Page").Link("Arbortext 5.2 - Arbortext").Check CheckPoint("Arbortext 5.2 - Arbortext Editor - Creating Tables_3") @@ hightlight id_;_Browser("Browser").Page("Page").WebTable("Last Name")_;_script infofile_;_ZIP::ssf400.xml_;_
Browser("Browser").Page("Page").WebTable("Last Name").Check CheckPoint("Title_3")

''Review Course . @@ hightlight id_;_Browser("Browser").Page("Page").Link("Arbortext 5.2 - Arbortext")_;_script infofile_;_ZIP::ssf401.xml_;_
Browser("Browser").Page("Page").Link("Arbortext 5.2 - Arbortext").Click
Wait(10) @@ hightlight id_;_Browser("Browser").Page("Page").Link("Review")_;_script infofile_;_ZIP::ssf409.xml_;_
Browser("Browser").Page("Page").Link("Review").Click
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").SetToProperty "hwnd", value @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf402.xml_;_
Browser("Course Viewer").Page("Course Viewer").Check CheckPoint("Course Viewer") @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Introduction 2")_;_script infofile_;_ZIP::ssf403.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Introduction_2").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Image("forward icon lg")_;_script infofile_;_ZIP::ssf404.xml_;_
Browser("Course Viewer").Page("Course Viewer").Image("forward_icon_lg").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Image("forward icon lg")_;_script infofile_;_ZIP::ssf405.xml_;_
Browser("Course Viewer").Page("Course Viewer").Image("forward_icon_lg").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Editing Within a Table")_;_script infofile_;_ZIP::ssf406.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Editing Within a Table").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf407.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5)
Browser("Course Viewer").Close
Wait(5) @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf408.xml_;_
Browser("Browser").Page("Page").Check CheckPoint("Welcome to Precision LMS_7")
Browser("Browser").Page("Page").Sync

'Launch  Assessment "CheckPoint - Pro/INTRALINK Administrator Training (3.2)", Verify and Review  the Results. @@ hightlight id_;_Browser("Browser").Page("Page").Link("Current Learning")_;_script infofile_;_ZIP::ssf410.xml_;_
Browser("Browser").Page("Page").Link("Current Learning").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("CheckPoint - Pro/INTRALINK")_;_script infofile_;_ZIP::ssf411.xml_;_
Browser("Browser").Page("Page").Link("CheckPoint - Pro/INTRALINK").Check CheckPoint("CheckPoint - Pro/INTRALINK Administrator Training (3.2)") @@ hightlight id_;_Browser("Browser").Page("Page").Link("CheckPoint - Pro/INTRALINK")_;_script infofile_;_ZIP::ssf412.xml_;_
Browser("Browser").Page("Page").Link("CheckPoint - Pro/INTRALINK").Click
Wait(10)
Browser("Browser").Page("Page").Link("Start").Click
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").SetToProperty "hwnd", value
Browser("Course Viewer").Page("Course Viewer").Check CheckPoint("Assessment Viewer : CheckPoint - Pro/INTRALINK Administrator Training (3.2)") @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf415.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Hide Course Map").Check CheckPoint("Hide Course Map_2") @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf416.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#1" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf417.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf407.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf418.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#1" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf419.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf407.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf420.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#1" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf421.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf407.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf422.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#0" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf423.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf407.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf424.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#0" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf425.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf407.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf426.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#1" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf427.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf407.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf428.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#0" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf429.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf407.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf430.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#1" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf431.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf407.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf432.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#1" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf433.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf407.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Submit entire assessment")_;_script infofile_;_ZIP::ssf434.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#0" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf435.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Submit entire assessment").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf407.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf436.xml_;_
Browser("Course Viewer").Page("Course Viewer").Frame("modal-dialog-pagemap").Link("Ok").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf407.xml_;_
Wait(10) @@ hightlight id_;_Browser("Browser").Page("Page").Link("Summary")_;_script infofile_;_ZIP::ssf437.xml_;_
Browser("Browser").Page("Page").Check CheckPoint("Assessment Result") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Answers")_;_script infofile_;_ZIP::ssf439.xml_;_
Browser("Browser").Page("Page").Link("Summary").Check CheckPoint("Summary") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Details")_;_script infofile_;_ZIP::ssf440.xml_;_
Browser("Browser").Page("Page").Link("Answers").Check CheckPoint("Answers") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Summary")_;_script infofile_;_ZIP::ssf441.xml_;_
Browser("Browser").Page("Page").Link("Details").Check CheckPoint("Details") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Answers")_;_script infofile_;_ZIP::ssf442.xml_;_
Browser("Browser").Page("Page").Link("Summary").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("View All Answer Details")_;_script infofile_;_ZIP::ssf443.xml_;_
Browser("Browser").Page("Page").Link("Answers").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf444.xml_;_
Browser("Browser").Page("Page").Link("View All Answer Details").Check CheckPoint("View All Answer Details") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Details")_;_script infofile_;_ZIP::ssf445.xml_;_
Browser("Browser").Page("Page").Check CheckPoint("Assessment Result_2") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf446.xml_;_
Browser("Browser").Page("Page").Link("Details").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Show All Subgroups")_;_script infofile_;_ZIP::ssf447.xml_;_
Browser("Browser").Page("Page").Check CheckPoint("Assessment Result_3") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Hide All Subgroups")_;_script infofile_;_ZIP::ssf448.xml_;_
Browser("Browser").Page("Page").Link("Show All Subgroups").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Answers")_;_script infofile_;_ZIP::ssf449.xml_;_
Browser("Browser").Page("Page").Link("Hide All Subgroups").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Question 1")_;_script infofile_;_ZIP::ssf450.xml_;_
Browser("Browser").Page("Page").Link("Answers").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Question 1")_;_script infofile_;_ZIP::ssf451.xml_;_
Browser("Browser").Page("Page").Link("Question 1").Check CheckPoint("Question 1") @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf452.xml_;_
Browser("Browser").Page("Page").Link("Question 1").Click
Wait(10)
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").SetToProperty "hwnd", value @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf453.xml_;_
Browser("Course Viewer").Page("Course Viewer").Check CheckPoint("Assessment Viewer : CheckPoint - Pro/INTRALINK Administrator Training (3.2)_2") @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf454.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf455.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf456.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf457.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf458.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf459.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf460.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf461.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf462.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf463.xml_;_
Browser("Course Viewer").Close
Wait(5) @@ hightlight id_;_Browser("Browser").Page("Page").Link("Home 2")_;_script infofile_;_ZIP::ssf464.xml_;_
Browser("Browser").Page("Page").Check CheckPoint("Assessment Result_4") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf465.xml_;_
Browser("Browser").Page("Page").Link("Home_2").Click
Browser("Browser").Page("Page").Check CheckPoint("Welcome to Precision LMS_8")

'Re-Test Of an Assessment , Reeview Results & Questions. @@ hightlight id_;_Browser("Browser").Page("Page").Link("Completed Learning")_;_script infofile_;_ZIP::ssf466.xml_;_
Browser("Browser").Page("Page").Link("Completed Learning").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("CheckPoint - Pro/INTRALINK")_;_script infofile_;_ZIP::ssf467.xml_;_
Browser("Browser").Page("Page").Link("CheckPoint - Pro/INTRALINK").Check CheckPoint("CheckPoint - Pro/INTRALINK Administrator Training (3.2)_2") @@ hightlight id_;_Browser("Browser").Page("Page").Link("CheckPoint - Pro/INTRALINK")_;_script infofile_;_ZIP::ssf468.xml_;_
Browser("Browser").Page("Page").Link("CheckPoint - Pro/INTRALINK").Click
Wait(10) @@ hightlight id_;_Browser("Browser").Page("Page").Link("Retest")_;_script infofile_;_ZIP::ssf509.xml_;_
Browser("Browser").Page("Page").Link("Retest").Click
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").SetToProperty "hwnd", value @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf469.xml_;_
Browser("Course Viewer").Page("Course Viewer").Check CheckPoint("Assessment Viewer : CheckPoint - Pro/INTRALINK Administrator Training (3.2)_3") @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf470.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#0" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf471.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf472.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#1" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf473.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf474.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#0" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf475.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf476.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#1" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf477.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf478.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#2" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf479.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf480.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#1" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf481.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf482.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#0" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf483.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf484.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#1" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf485.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf486.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#1" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf487.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf488.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#2" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Submit entire assessment")_;_script infofile_;_ZIP::ssf489.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Submit entire assessment").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf490.xml_;_
Browser("Course Viewer").Page("Course Viewer").Frame("modal-dialog-pagemap").Link("Ok").Click
Wait(10) @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf491.xml_;_
Browser("Browser").Page("Page").Check CheckPoint("Assessment Result_5") @@ hightlight id_;_Browser("Browser").Page("Page").WebList("resultSelector")_;_script infofile_;_ZIP::ssf492.xml_;_
Browser("Browser").Page("Page").WebList("resultSelector").Check CheckPoint("resultSelector") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Answers")_;_script infofile_;_ZIP::ssf493.xml_;_
Browser("Browser").Page("Page").Link("Answers").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf494.xml_;_
Browser("Browser").Page("Page").Check CheckPoint("Assessment Result_6") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Details")_;_script infofile_;_ZIP::ssf495.xml_;_
Browser("Browser").Page("Page").Link("Details").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf496.xml_;_
Browser("Browser").Page("Page").Check CheckPoint("Assessment Result_7") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Show All Subgroups")_;_script infofile_;_ZIP::ssf497.xml_;_
Browser("Browser").Page("Page").Link("Show All Subgroups").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Hide All Subgroups")_;_script infofile_;_ZIP::ssf498.xml_;_
Browser("Browser").Page("Page").Link("Hide All Subgroups").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Answers")_;_script infofile_;_ZIP::ssf499.xml_;_
Browser("Browser").Page("Page").Link("Answers").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Question 1")_;_script infofile_;_ZIP::ssf500.xml_;_
Browser("Browser").Page("Page").Link("Question 1").Click
Wait(10)
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").SetToProperty "hwnd", value @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf501.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf502.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf503.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf504.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf505.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5)
Browser("Course Viewer").Close
Wait(5) @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf506.xml_;_
Browser("Browser").Page("Page").Check CheckPoint("Assessment Result_8") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Home 2")_;_script infofile_;_ZIP::ssf507.xml_;_
Browser("Browser").Page("Page").Link("Home_2").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf508.xml_;_
Browser("Browser").Page("Page").Check CheckPoint("Welcome to Precision LMS_9")

'Self Assigned,Find Training , Launching WBT Cousre and Also Embeded Assessment. @@ hightlight id_;_Browser("Browser").Page("Page").Link("Find Training")_;_script infofile_;_ZIP::ssf510.xml_;_
Browser("Browser").Page("Page").Link("Find Training").Check CheckPoint("Find Training_2") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Find Training")_;_script infofile_;_ZIP::ssf511.xml_;_
Browser("Browser").Page("Page").Link("Find Training").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf512.xml_;_
Browser("Browser").Page("Page").Check CheckPoint("Precision LMS : Find Training") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Browse all Training")_;_script infofile_;_ZIP::ssf513.xml_;_
Browser("Browser").Page("Page").Link("Browse all Training").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf514.xml_;_
Browser("Browser").Page("Page").Check CheckPoint("Precision LMS : Find Training_2") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Creating Geometry from")_;_script infofile_;_ZIP::ssf515.xml_;_
Browser("Browser").Page("Page").Link("Creating Geometry from").Check CheckPoint("Creating Geometry from Surfaces and Curves using Pro/ENGINEER Wildfire 3.0") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Creating Geometry from")_;_script infofile_;_ZIP::ssf516.xml_;_
Browser("Browser").Page("Page").Link("Creating Geometry from").Click
Wait(10)
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").SetToProperty "hwnd", value @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf517.xml_;_
Browser("Course Viewer").Page("Course Viewer").Check CheckPoint("Course Viewer : Creating Geometry from Surfaces and Curves using Pro/ENGINEER Wildfire 3.0") @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Frame("contentframe")_;_script infofile_;_ZIP::ssf518.xml_;_
Browser("Course Viewer").Page("Course Viewer").Frame("contentframe").Check CheckPoint("contentframe_3") @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Lab/Demo Files (Commercial)")_;_script infofile_;_ZIP::ssf519.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Lab/Demo Files (Commercial)").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Lab/Demo Files (Training")_;_script infofile_;_ZIP::ssf520.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Lab/Demo Files (Training").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("1.1 Watch the Lecture")_;_script infofile_;_ZIP::ssf521.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("1.1 Watch the Lecture").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("1.2 Demonstration - Creating")_;_script infofile_;_ZIP::ssf522.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("1.2 Demonstration - Creating").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("1.3 Demonstration - Designing")_;_script infofile_;_ZIP::ssf523.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("1.3 Demonstration - Designing").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("1.4 Perform the Exercises")_;_script infofile_;_ZIP::ssf524.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("1.4 Perform the Exercises").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("1.5 Check Your Knowledge")_;_script infofile_;_ZIP::ssf525.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("1.5 Check Your Knowledge").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Assessment")_;_script infofile_;_ZIP::ssf526.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Assessment").Check CheckPoint("Assessment")
Browser("Course Viewer").Page("Course Viewer").Sync @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Image("forward icon lg")_;_script infofile_;_ZIP::ssf527.xml_;_
Browser("Course Viewer").Page("Course Viewer").Image("forward_icon_lg").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Frame("modal-dialog-pagemap").Link("Start")_;_script infofile_;_ZIP::ssf528.xml_;_
Browser("Course Viewer").Page("Course Viewer").Frame("modal-dialog-pagemap").Link("Start").Check CheckPoint("Start")
Wait(10) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Frame("modal-dialog-pagemap").Link("Start")_;_script infofile_;_ZIP::ssf529.xml_;_
Browser("Course Viewer").Page("Course Viewer").Frame("modal-dialog-pagemap").Link("Start").Click
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").SetToProperty "hwnd", value @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf530.xml_;_
Browser("Course Viewer").Page("Course Viewer").Check CheckPoint("Assessment Viewer : Creating Geometry from Surfaces and Curves using Pro/ENGINEER Wildfire 3.0") @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf531.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#0" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf532.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf533.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#0" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf534.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf535.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#0" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf536.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf537.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#2" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf538.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf539.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#0" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf540.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf541.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#1" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf542.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf543.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#0" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf544.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf545.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#0" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf546.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf547.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#0" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf548.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf549.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#1" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Submit entire assessment")_;_script infofile_;_ZIP::ssf550.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Submit entire assessment").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf551.xml_;_
Browser("Course Viewer").Page("Course Viewer").Frame("modal-dialog-pagemap").Link("Ok").Click
Wait(10) @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf552.xml_;_
Browser("Browser").Page("Page").Check CheckPoint("Assessment Result_9") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Answers")_;_script infofile_;_ZIP::ssf553.xml_;_
Browser("Browser").Page("Page").Link("Answers").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Details")_;_script infofile_;_ZIP::ssf554.xml_;_
Browser("Browser").Page("Page").Link("Details").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Show All Subgroups")_;_script infofile_;_ZIP::ssf555.xml_;_
Browser("Browser").Page("Page").Link("Show All Subgroups").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Hide All Subgroups")_;_script infofile_;_ZIP::ssf556.xml_;_
Browser("Browser").Page("Page").Link("Hide All Subgroups").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Answers")_;_script infofile_;_ZIP::ssf557.xml_;_
Browser("Browser").Page("Page").Link("Answers").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Question 1")_;_script infofile_;_ZIP::ssf558.xml_;_
Browser("Browser").Page("Page").Link("Question 1").Click
Wait(10)
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").SetToProperty "hwnd", value @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf559.xml_;_
Browser("Course Viewer").Page("Course Viewer").Check CheckPoint("Assessment Viewer : Creating Geometry from Surfaces and Curves using Pro/ENGINEER Wildfire 3.0_2") @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf560.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf561.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf562.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf563.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf564.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf565.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf566.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf567.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf568.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf569.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf570.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5)
Browser("Course Viewer").Close
Wait(5) @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf571.xml_;_
Browser("Browser").Page("Page").Check CheckPoint("Assessment Result_10") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Home 2")_;_script infofile_;_ZIP::ssf572.xml_;_
Browser("Browser").Page("Page").Link("Home_2").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Completed Learning")_;_script infofile_;_ZIP::ssf573.xml_;_
Browser("Browser").Page("Page").Link("Completed Learning").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Creating Geometry from")_;_script infofile_;_ZIP::ssf574.xml_;_
Browser("Browser").Page("Page").Link("Creating Geometry from").Check CheckPoint("Creating Geometry from Surfaces and Curves using Pro/ENGINEER Wildfire 3.0_2")

'Re-Take Assessment and Review Results. @@ hightlight id_;_Browser("Browser").Page("Page").Link("Creating Geometry from")_;_script infofile_;_ZIP::ssf575.xml_;_
Browser("Browser").Page("Page").Link("Creating Geometry from").Click
Wait(10)
Browser("Browser").Page("Page").Link("Retest").Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("Retest")_;_script infofile_;_ZIP::ssf630.xml_;_
Wait(10)
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").SetToProperty "hwnd", value @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf593.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#0" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf594.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf586.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf595.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#1" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf596.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf586.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf597.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#0" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf598.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf586.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf599.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#1" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf600.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf586.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf601.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#1" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf602.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf586.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf603.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#1" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf604.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf586.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf605.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#0" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf606.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf586.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf607.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#0" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf608.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf586.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf609.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#1" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf610.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf586.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group")_;_script infofile_;_ZIP::ssf611.xml_;_
Browser("Course Viewer").Page("Course Viewer").WebRadioGroup("response:group").Select "#2" @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next Question")_;_script infofile_;_ZIP::ssf612.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next Question").Click @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer")_;_script infofile_;_ZIP::ssf586.xml_;_
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Frame("modal-dialog-pagemap").Link("Ok")_;_script infofile_;_ZIP::ssf613.xml_;_
Browser("Course Viewer").Page("Course Viewer").Frame("modal-dialog-pagemap").Link("Ok").Click
Wait(10) @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf552.xml_;_
Browser("Browser").Page("Page").Check CheckPoint("Assessment Result_9") @@ hightlight id_;_Browser("Browser").Page("Page").Link("Answers")_;_script infofile_;_ZIP::ssf553.xml_;_
Browser("Browser").Page("Page").Link("Answers").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Details")_;_script infofile_;_ZIP::ssf554.xml_;_
Browser("Browser").Page("Page").Link("Details").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Show All Subgroups")_;_script infofile_;_ZIP::ssf555.xml_;_
Browser("Browser").Page("Page").Link("Show All Subgroups").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Hide All Subgroups")_;_script infofile_;_ZIP::ssf556.xml_;_
Browser("Browser").Page("Page").Link("Hide All Subgroups").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Answers")_;_script infofile_;_ZIP::ssf557.xml_;_
Browser("Browser").Page("Page").Link("Answers").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Question 1")_;_script infofile_;_ZIP::ssf558.xml_;_
Browser("Browser").Page("Page").Link("Question 1").Click
Wait(10)
value = Browser("creationtime:=1").GetROProperty("hwnd")
Browser("Course Viewer").SetToProperty "hwnd", value @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf560.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf561.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf562.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf563.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf564.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf565.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf566.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf567.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf568.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5) @@ hightlight id_;_Browser("Course Viewer").Page("Course Viewer").Link("Next")_;_script infofile_;_ZIP::ssf569.xml_;_
Browser("Course Viewer").Page("Course Viewer").Link("Next").Click
Browser("Course Viewer").Page("Course Viewer").Sync
Wait(5)
Browser("Course Viewer").Close
Wait(5) @@ hightlight id_;_Browser("Browser").Page("Page").Link("Home 2")_;_script infofile_;_ZIP::ssf572.xml_;_
Browser("Browser").Page("Page").Link("Home_2").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page").Link("Log Out")_;_script infofile_;_ZIP::ssf614.xml_;_
Browser("Browser").Page("Page").Link("Log Out").Click
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf615.xml_;_
Browser("Browser").Page("Page").Check CheckPoint("Precision LMS : Login_3") @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf616.xml_;_
Browser("Browser").Page("Page").Sync
Browser("Browser").Close

Reporter.ReportEvent 2, "Script ENDS","Logout"
