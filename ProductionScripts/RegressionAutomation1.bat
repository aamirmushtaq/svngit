@echo off
REM  Launch QTP with the settings specified in the Startup vbs script
call D:\ProductionScripts\Startup.vbs

REM Launch MTM that will use the instance previously created
"C:\Program Files\HP\QuickTest Professional\bin\MultiTestManager.exe"  /TB "D:\ProductionScripts\ProF Performance Production Batch.mtm" /CLOSE_QTP /CLOSE_MTM /LOG /SUMMARY