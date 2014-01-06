set ORA_SCRIPTS=C:\Automation\I5059.ptcnet.ptc.com\I5059-vm6
set ORA_SQLS=C:\Automation\I5059.ptcnet.ptc.com\I5059-vm6\Sql_Files
sqlplus system/ptcse@auto4 @%ORA_SCRIPTS%\recreate_db.sql
mysql --host=i5059-vm6.ptcnet.ptc.com --user=root --password=root -e "source %ORA_SCRIPTS%\recreate_mysql_db.sql"


sqlplus plms_ops/plms_ops@auto4 @%ORA_SQLS%\PTC_PLMS_ORDER_INTERFACE.sql
sqlplus plms_ops/plms_ops@auto4 @%ORA_SQLS%\Part_Number_Information.sql
pause

