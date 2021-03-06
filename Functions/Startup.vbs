' ----------------------------------------------------------------------------------------------------------------
'  Function Name: Startup.vbs
'  Purpose:This file is used to make the necessary settings for the QTP and to load Funtions, ObjectRepository, Settings
' ----------------------------------------------------------------------------------------------------------------
Const sLoginID = "admin" '  The gsLoginID parameter will be initialized with the necessary value to login into the application

Const sLoginPassword = "n10suf" '  The gsLoginPassword parameter will be initialized with the value coresponding to the user from gsLoginID

Const sWebSync = 15  ' A default value that can be used inside the scripts for wait statements 


Dim QTApp ' Declare the application object variable 

Set QTApp = CreateObject("QuickTest.Application")  ' Create the application object 

arrTestAddins=Array("Web")

If Not QTApp.Launched Then
	QTApp.SetActiveAddins(arrTestAddins)
	QTApp.Launch
End If


QTApp.test.SetAssociatedAddins arrTestAddins, err

QTApp.Visible = True

QTApp.Options.Run.RunMode = "Fast"

QTApp.Test.Settings.Launchers("Web").Active = False

QTApp.Test.Settings.Launchers("Web").Browser = "IE"


' Settings for iteration 

QTApp.Test.Settings.Run.IterationMode = "rngAll"

QTApp.Test.Settings.Run.StartIteration = 1

QTApp.Test.Settings.Run.EndIteration = 1

QTApp.Test.Settings.Run.ObjectSyncTimeOut = 30000 ' Timeout  Value
QTApp.Test.Settings.Web.BrowserNavigationTimeout = 50000

QTApp.Test.Settings.Run.DisableSmartIdentification = False

QTApp.Test.Settings.Run.OnError = "Dialog"

QTApp.Test.Settings.Resources.DataTablePath = "<Default>"


QTApp.Options.Run.CaptureForTestResults = "Always" 'Setting for Save screen capture to results
Setting("DefaultTimeout") = 50000 'Default timeout value for function exist

' sProjectURL variable is used to store the URL of the application to be tested
Public sProjectURL 
sProjectURL  =  "http://i2361.ptcnet.ptc.com/automationipa/"

Dim osDir

osDir = Environment.Value("TestDir") ' osDir is used to find the drive on which QTP folder exists

osDir = Left(osDir, 1)

Public sRoot_Letter

sRoot_Letter = osDir

Public sRoot_DIR

sRoot_DIR = sRoot_Letter & ":\"

Public sQTP_Dir    ' will store the path for the scripts folder
sQTP_Dir = sRoot_DIR & "Fusion_QA\Automation\" 

Public sFunctions_Dir	' will store the path for Functions folder

sFunctions_Dir = sQTP_Dir & "Functions\" 

Public sTestScripts_Dir	' will store the path for TestScripts folder

sTestScripts_Dir = sQTP_Dir & "Scripts\"
 

'Adding the folder with the Functions

QTApp.Folders.RemoveAll

QTApp.Folders.Add (sFunctions_Dir)

 

'Executing the functions
ExecuteFile "fc_login.vbs"
