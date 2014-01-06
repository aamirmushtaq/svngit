set ORA_SCRIPTS=E:\Automation\i5933.ptcnet.ptc.com\I5933-vm8
set ORA_SQLS=E:\Automation\i5933.ptcnet.ptc.com\I5933-vm8\Sql_Files
sqlplus system/ptcse@auto6 @%ORA_SCRIPTS%\recreate_db.sql
sqlplus plms_ops/plms_ops@auto6 @%ORA_SQLS%\PTC_PLMS_ORDER_INTERFACE.sql
sqlplus plms_ops/plms_ops@auto6 @%ORA_SQLS%\Part_Number_Information.sql
pause

