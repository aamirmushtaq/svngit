set ORA_SCRIPTS=E:\Automation\I5696.ptcnet.ptc.com\I5696-vm2
set ORA_SQLS=E:\Automation\I5696.ptcnet.ptc.com\I5696-vm2\Sql_Files
sqlplus system/ptcse@auto1 @%ORA_SCRIPTS%\recreate_db.sql

imp system/ptcse@auto1 fromuser=automation_plms touser=automation_plms file="backup_plms_2.dmp"
 
@echo PLMS restore Done!

imp system/ptcse@auto1 fromuser=automation_ipa touser=automation_ipa file="backup_ipa_2.dmp"

@echo IPA restore Done!
@echo All Done!
sqlplus automation_plms/automation_plms@auto1 @%ORA_SQLS%\set_values_plms.sql
sqlplus automation_ipa/automation_ipa@auto1 @%ORA_SQLS%\set_values_ipa.sql
pause








