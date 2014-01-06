set ORA_SCRIPTS=E:\Automation\i5933.ptcnet.ptc.com\I5933-vm7
set ORA_SQLS=E:\Automation\i5933.ptcnet.ptc.com\I5933-vm7\Sql_Files
sqlplus system/ptcse@auto5 @%ORA_SCRIPTS%\recreate_db.sql

imp system/ptcse@auto5 fromuser=automation_plms touser=automation_plms file="backup_plms_2.dmp"
 
@echo PLMS restore Done!

imp system/ptcse@auto5 fromuser=automation_ipa touser=automation_ipa file="backup_ipa_5_mysql.dmp"

@echo IPA restore Done!
@echo All Done!
sqlplus automation_plms/automation_plms@auto5 @%ORA_SQLS%\set_values_plms.sql
sqlplus automation_ipa/automation_ipa@auto5 @%ORA_SQLS%\set_values_ipa.sql
sqlplus plms_ops/plms_ops@auto5 @%ORA_SQLS%\PTC_PLMS_ORDER_INTERFACE.sql
sqlplus plms_ops/plms_ops@auto5 @%ORA_SQLS%\Part_Number_Information.sql
pause








