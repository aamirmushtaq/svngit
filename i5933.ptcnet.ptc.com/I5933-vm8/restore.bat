set ORA_SCRIPTS=E:\Automation\i5933.ptcnet.ptc.com\I5933-vm8
set ORA_SQLS=E:\Automation\i5933.ptcnet.ptc.com\I5933-vm8\Sql_Files
sqlplus system/ptcse@auto6 @%ORA_SCRIPTS%\recreate_db.sql
sqlplus plms_ops/plms_ops@auto6 @%ORA_SQLS%\PTC_PLMS_ORDER_INTERFACE.sql
sqlplus plms_ops/plms_ops@auto6 @%ORA_SQLS%\Part_Number_Information.sql
imp system/ptcse@auto6 fromuser=automation_plms touser=automation_plms file="backup_plms_fe1.dmp"
 
@echo PLMS restore Done!

imp system/ptcse@auto6 fromuser=automation_ipa touser=automation_ipa file="backup_ipa_fe1.dmp"

@echo IPA restore Done!
@echo All Done!
sqlplus automation_plms/automation_plms@auto6 @%ORA_SQLS%\set_values_plms.sql
sqlplus automation_ipa/automation_ipa@auto6 @%ORA_SQLS%\set_values_ipa.sql
pause
exit








