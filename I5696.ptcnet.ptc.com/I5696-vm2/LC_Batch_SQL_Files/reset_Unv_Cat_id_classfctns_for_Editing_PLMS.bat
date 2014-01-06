set ORA_SCRIPTS=E:\Automation\I5696.ptcnet.ptc.com\I5696-vm2\LC_Batch_SQL_Files
rem sqlplus automation_plms/automation_plms@Auto1 @%ORA_SCRIPTS%\reset_Unv_Cat_id_classfctns_for_Editing_PLMS.sql
mysql --host=i5696-vm2.ptcnet.ptc.com --user=root --password=root --database=automation_plms -e "source %ORA_SCRIPTS%\reset_Unv_Cat_id_classfctns_for_Editing_PLMS.sql"
pause
exit