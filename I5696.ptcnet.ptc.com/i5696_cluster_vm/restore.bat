set ORA_SCRIPTS=D:\PrecisionLMS\scripts
sqlplus system/ptcse@auto2 @%ORA_SCRIPTS%\recreate_db.sql

imp system/ptcse@auto2 fromuser=automation_plms touser=automation_plms file="backup_plms_elx.dmp"
 
@echo PLMS restore Done!

imp system/ptcse@auto2 fromuser=automation_ipa touser=automation_ipa file="backup_ipa_elx.dmp"

@echo IPA restore Done!
@echo All Done!
pause








