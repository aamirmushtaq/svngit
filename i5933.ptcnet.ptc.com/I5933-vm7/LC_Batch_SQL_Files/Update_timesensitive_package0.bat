set ORA_SCRIPTS=E:\Automation\i5933.ptcnet.ptc.com\I5933-vm7\LC_Batch_SQL_Files
mysql --host=i5696-vm2.ptcnet.ptc.com --user=root --password=root --database=automation_plms -e "source %ORA_SCRIPTS%\backup_plms_uc49.sql"
pause
EXIT