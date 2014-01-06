set ORA_SCRIPTS=C:\Automation\I5059.ptcnet.ptc.com\I5059-vm6\LC_Batch_SQL_Files
rem sqlplus automation_plms/automation_plms@auto4 @%ORA_SCRIPTS%\reset_Unv_Cat_id_classfctns_for_Editing_PLMS.sql
mysql -hi5059-vm6.ptcnet.ptc.com -uroot -proot automation_plms < reset_Unv_Cat_id_classfctns_for_Editing_PLMS.sql

pause