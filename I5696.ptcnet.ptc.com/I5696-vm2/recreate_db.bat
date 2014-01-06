set ORA_SCRIPTS=E:\Automation\I5696.ptcnet.ptc.com\I5696-vm2
set ORA_SQLS=E:\Automation\I5696.ptcnet.ptc.com\I5696-vm2\Sql_Files
sqlplus system/ptcse@auto1 @%ORA_SCRIPTS%\recreate_db.sql
sqlplus plms_ops/plms_ops@auto1 @%ORA_SQLS%\PTC_PLMS_ORDER_INTERFACE.sql
sqlplus plms_ops/plms_ops@auto1 @%ORA_SQLS%\Part_Number_Information.sql
pause

