set ORA_SCRIPTS=E:\Automation\i5933.ptcnet.ptc.com\I5933-vm8
set ORA_SQLS=E:\Automation\i5933.ptcnet.ptc.com\I5933-vm8\Sql_Files
sqlplus system/ptcse@auto6 @%ORA_SCRIPTS%\recreate_db.sql
mysql --host=i5933-vm8.ptcnet.ptc.com --user=root --password=root -e "source %ORA_SCRIPTS%\recreate_mysql_db.sql"

mysql --host=i5933-vm8.ptcnet.ptc.com --user=root --password=root --database=automation_plms -e "source %ORA_SCRIPTS%\backup_plms_2.sql"

sqlplus plms_ops/plms_ops@auto6 @%ORA_SQLS%\PTC_PLMS_ORDER_INTERFACE.sql
sqlplus plms_ops/plms_ops@auto6 @%ORA_SQLS%\Part_Number_Information.sql

 
@echo PLMS restore Done!

imp system/ptcse@auto6 fromuser=automation_ipa touser=automation_ipa file="backup_ipa_2.dmp"

@echo IPA restore Done!

mysql --host=i5933-vm8.ptcnet.ptc.com --user=root --password=root --database=automation_plms -e "source %ORA_SQLS%\set_values_plms.sql"
sqlplus automation_ipa/automation_ipa@auto6 @%ORA_SQLS%\set_values_ipa.sql

@echo All Done!
pause








