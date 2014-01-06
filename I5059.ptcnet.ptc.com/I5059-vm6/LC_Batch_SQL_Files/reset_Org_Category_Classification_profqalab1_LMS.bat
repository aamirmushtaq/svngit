set ORA_SCRIPTS=C:\Automation\I5059.ptcnet.ptc.com\I5059-vm3\LC_Batch_SQL_Files
rem sqlplus automation_plms/automation_plms@Auto1 @%ORA_SCRIPTS%\reset_Org_category_classification.sql
mysql -hi5059-vm6.ptcnet.ptc.com -uroot -proot automation_plms < reset_Org_category_classification.sql
pause
exit