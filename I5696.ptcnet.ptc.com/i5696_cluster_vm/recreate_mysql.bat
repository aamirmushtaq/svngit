set ORA_SCRIPTS=E:\Automation\I5696.ptcnet.ptc.com\i5696_cluster_vm
set ORA_SQLS=E:\Automation\I5696.ptcnet.ptc.com\i5696_cluster_vm\Sql_Files
sqlplus system/ptcse@auto2 @%ORA_SCRIPTS%\recreate_db.sql
mysql --host=i5696-vm4.ptcnet.ptc.com --user=root --password=root -e "source %ORA_SCRIPTS%\recreate_mysql_db.sql"


sqlplus plms_ops/plms_ops@auto2 @%ORA_SQLS%\PTC_PLMS_ORDER_INTERFACE.sql
sqlplus plms_ops/plms_ops@auto2 @%ORA_SQLS%\Part_Number_Information.sql
pause

