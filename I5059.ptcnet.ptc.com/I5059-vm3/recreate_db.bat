set ORA_SCRIPTS=E:\Automation\I5059.ptcnet.ptc.com\I5059-vm3
set ORA_SQLS=E:\Automation\I5059.ptcnet.ptc.com\I5059-vm3\Sql_Files
sqlplus system/ptcse@auto3 @%ORA_SCRIPTS%\recreate_db.sql
sqlplus plms_ops/plms_ops@auto3 @%ORA_SQLS%\PTC_PLMS_ORDER_INTERFACE.sql
sqlplus plms_ops/plms_ops@auto3 @%ORA_SQLS%\Part_Number_Information.sql
pause

