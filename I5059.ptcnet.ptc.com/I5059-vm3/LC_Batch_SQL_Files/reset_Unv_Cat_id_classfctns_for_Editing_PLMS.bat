set ORA_SCRIPTS=E:\Automation\I5059.ptcnet.ptc.com\I5059-vm3\LC_Batch_SQL_Files
rem sqlplus automation_plms/automation_plms@Auto3 @%ORA_SCRIPTS%\reset_Unv_Cat_id_classfctns_for_Editing_PLMS.sql
mysql --host=i5059-vm3.ptcnet.ptc.com --user=root --password=root --database=automation_plms -e "source %ORA_SCRIPTS%\reset_Unv_Cat_id_classfctns_for_Editing_PLMS.sql"
pause
exit