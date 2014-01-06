set ORA_SCRIPTS=E:\Automation\I5696.ptcnet.ptc.com\i5696_cluster_vm
set ORA_SQLS=E:\Automation\I5696.ptcnet.ptc.com\i5696_cluster_vm\Sql_Files
sqlplus system/ptcse@auto2 @%ORA_SCRIPTS%\recreate_db.sql
mysql --host=i5696-vm4.ptcnet.ptc.com --user=root --password=root -e "source %ORA_SCRIPTS%\recreate_mysql_db.sql"

mysql --host=i5696-vm4.ptcnet.ptc.com --user=root --password=root --database=automation_plms -e "source %ORA_SCRIPTS%\backup_plms_fe1.sql"

sqlplus plms_ops/plms_ops@auto2 @%ORA_SQLS%\PTC_PLMS_ORDER_INTERFACE.sql
sqlplus plms_ops/plms_ops@auto2 @%ORA_SQLS%\Part_Number_Information.sql

 
@echo PLMS restore Done!

imp system/ptcse@auto2 fromuser=automation_ipa touser=automation_ipa file="backup_ipa_fe1.dmp"

@echo IPA restore Done!


mysql --host=i5696-vm4.ptcnet.ptc.com --user=root --password=root --database=automation_plms -e "source %ORA_SQLS%\set_values_plms.sql"
sqlplus automation_ipa/automation_ipa@auto2 @%ORA_SQLS%\set_values_ipa.sql

@echo All Done!
pause








