set ORA_SCRIPTS=D:\PrecisionLMS\scripts
sqlplus system/ptcse@auto4 @%ORA_SCRIPTS%\recreate_db.sql

imp system/ptcse@auto4 fromuser=automation_plms touser=automation_plms file="backup_plms_elx.dmp"
 
@echo PLMS restore Done!

imp system/ptcse@auto4 fromuser=automation_ipa touser=automation_ipa file="backup_ipa_elx.dmp"

@echo IPA restore Done!

sqlplus automation_plms/automation_plms@auto4 @%ORA_SCRIPTS%\set_values_plms.sql
sqlplus automation_ipa/automation_ipa@auto4 @%ORA_SCRIPTS%\set_values_ipa.sql

@echo All Done!
pause








