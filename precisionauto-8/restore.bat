set ORA_SCRIPTS=D:\PrecisionLMS\scripts
sqlplus system/ptcse@auto @%ORA_SCRIPTS%\recreate_db.sql

imp system/ptcse@auto fromuser=automation_plms touser=plms_auto8 file="automation_plms.dmp"
 
@echo PLMS restore Done!
pause...

imp system/ptcse@auto fromuser=automation_ipa touser=ipa_auto8 file="automation_ipa.dmp"

@echo IPA restore Done!
@echo All Done!
pause..

rem call "start ipa.bat"
rem pause
rem call "start plms.bat"









