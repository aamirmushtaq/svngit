@echo off
REM  Launch QTP with the settings specified in the Startup vbs script
call D:\Fusion_QA\Automation\Batch\Startup_QTP.vbs


REM Launch MTM that will use the instance previously created
"C:\Program Files\Mercury Interactive\QuickTest Professional\bin\MultiTestManager.exe"  /TB "D:\Fusion_QA\Automation\Batch\Regression Batch\Lic & Enf Batch\Term_Lib_With_Supt_Batch.mtm" /CLOSE_QTP /CLOSE_MTM /LOG /SUMMARY