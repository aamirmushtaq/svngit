set ORA_SCRIPTS=D:\Automation\I5696.ptcnet.ptc.com\I5696-vm1
sqlplus system/ptcse@auto1 @%ORA_SCRIPTS%\recreate_db.sql
sqlplus plms_ops/plms_ops@auto1 @%ORA_SCRIPTS%\PTC_PLMS_ORDER_INTERFACE.sql
sqlplus plms_ops/plms_ops@auto1 @%ORA_SCRIPTS%\Part_Number_Information.sql
pause

