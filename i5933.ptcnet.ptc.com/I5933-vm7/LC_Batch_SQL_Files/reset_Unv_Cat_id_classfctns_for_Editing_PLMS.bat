set ORA_SCRIPTS=E:\Automation\i5933.ptcnet.ptc.com\I5933-vm7\LC_Batch_SQL_Files
rem sqlplus automation_plms/automation_plms@auto5 @%ORA_SCRIPTS%\reset_Unv_Cat_id_classfctns_for_Editing_PLMS.sql
mysql --host=i5933-vm7.ptcnet.ptc.com --user=root --password=root --database=automation_plms -e "source %ORA_SCRIPTS%\reset_Unv_Cat_id_classfctns_for_Editing_PLMS.sql"
pause
exit