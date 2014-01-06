set ORA_SCRIPTS=E:\Automation\i5933.ptcnet.ptc.com\I5933-vm7
set ORA_SQLS=E:\Automation\i5933.ptcnet.ptc.com\I5933-vm7\Sql_Files
sqlplus system/ptcse@auto5 @%ORA_SCRIPTS%\recreate_db.sql
sqlplus plms_ops/plms_ops@auto5 @%ORA_SQLS%\PTC_PLMS_ORDER_INTERFACE.sql
sqlplus plms_ops/plms_ops@auto5 @%ORA_SQLS%\Part_Number_Information.sql
pause

