set ORA_SCRIPTS=E:\Automation\I5696.ptcnet.ptc.com\I5696-vm2
set ORA_SQLS=E:\Automation\i5696.ptcnet.ptc.com\I5696-vm2\Sql_Files
sqlplus system/ptcse@auto1 @%ORA_SCRIPTS%\recreate_db.sql
mysql --host=i5696-vm2.ptcnet.ptc.com --user=root --password=root -e "source %ORA_SCRIPTS%\recreate_mysql_db.sql"

mysql --host=i5696-vm2.ptcnet.ptc.com --user=root --password=root --database=automation_plms -e "source %ORA_SCRIPTS%\backup_plms_tc12pck1final.sql"

sqlplus plms_ops/plms_ops@auto1 @%ORA_SQLS%\PTC_PLMS_ORDER_INTERFACE.sql
sqlplus plms_ops/plms_ops@auto1 @%ORA_SQLS%\Part_Number_Information.sql

 
@echo PLMS restore Done!

imp system/ptcse@auto1 fromuser=automation_ipa touser=automation_ipa file="backup_ipa_tc12pck1final.dmp"

@echo IPA restore Done!


mysql --host=i5696-vm2.ptcnet.ptc.com --user=root --password=root --database=automation_plms -e "source %ORA_SQLS%\set_values_plms.sql"
sqlplus automation_ipa/automation_ipa@auto1 @%ORA_SQLS%\set_values_ipa.sql

@echo All Done!
pause








