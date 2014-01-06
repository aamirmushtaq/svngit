set ORA_SCRIPTS=D:\PrecisionLMS\scripts
sqlplus automation_plms/automation_plms@eplms @%ORA_SCRIPTS%\reset_org_id.sql
sqlplus automation_ipa/automation_ipa@eplms @%ORA_SCRIPTS%\reset_org_id.sql
call "restart ipa.bat"
call "restart plms.bat"
pause