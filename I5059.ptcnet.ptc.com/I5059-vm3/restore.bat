set ORA_SCRIPTS=E:\Automation\I5059.ptcnet.ptc.com\I5059-vm3
set ORA_SQLS=E:\Automation\I5059.ptcnet.ptc.com\I5059-vm3\Sql_Files
sqlplus system/ptcse@auto3 @%ORA_SCRIPTS%\recreate_db.sql

imp system/ptcse@auto3 fromuser=automation_plms touser=automation_plms file="backup_plms.dmp"
 
@echo PLMS restore Done!

imp system/ptcse@auto3 fromuser=automation_ipa touser=automation_ipa file="backup_ipa.dmp"

@echo IPA restore Done!
@echo All Done!
sqlplus automation_plms/automation_plms@auto3 @%ORA_SQLS%\set_values_plms.sql
sqlplus automation_ipa/automation_ipa@auto3 @%ORA_SQLS%\set_values_ipa.sql
exit 











