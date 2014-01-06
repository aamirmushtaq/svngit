set ORA_SCRIPTS=E:\Automation\i5933.ptcnet.ptc.com\I5933-vm7
set ORA_SQLS=E:\Automation\i5933.ptcnet.ptc.com\I5933-vm7\Sql_Files
sqlplus system/ptcse@auto5 @%ORA_SCRIPTS%\recreate_db.sql
mysql --host=i5933-vm7.ptcnet.ptc.com --user=root --password=root -e "source %ORA_SCRIPTS%\recreate_mysql_db.sql"

mysql --host=i5933-vm7.ptcnet.ptc.com --user=root --password=root --database=automation_plms -e "source %ORA_SCRIPTS%\backup_plms_2.sql"

sqlplus plms_ops/plms_ops@auto5 @%ORA_SQLS%\PTC_PLMS_ORDER_INTERFACE.sql
sqlplus plms_ops/plms_ops@auto5 @%ORA_SQLS%\Part_Number_Information.sql

 
@echo PLMS restore Done!

imp system/ptcse@auto5 fromuser=automation_ipa touser=automation_ipa file="backup_ipa_TC13_pkg2part1.dmp"

@echo IPA restore Done!

rem sqlplus automation_plms/automation_plms@auto6 @%ORA_SCRIPTS%\set_values_plms.sql
mysql --host=i5933-vm7.ptcnet.ptc.com --user=root --password=root --database=automation_plms -e "source %ORA_SQLS%\set_values_plms.sql"
sqlplus automation_ipa/automation_ipa@auto5 @%ORA_SQLS%\set_values_ipa.sql

@echo All Done!
pause








