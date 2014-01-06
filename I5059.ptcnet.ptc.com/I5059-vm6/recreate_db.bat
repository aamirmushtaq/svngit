set ORA_SCRIPTS=D:\fusion-qa\Automation\I5696.ptcnet.ptc.com\I5059-vm6
sqlplus system/ptcse@auto4 @%ORA_SCRIPTS%\recreate_db.sql
sqlplus plms_ops/plms_ops@auto4 @%ORA_SCRIPTS%\PTC_PLMS_ORDER_INTERFACE.sql
sqlplus plms_ops/plms_ops@auto4 @%ORA_SCRIPTS%\Part_Number_Information.sql
pause

