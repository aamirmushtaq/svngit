set ORA_SCRIPTS=D:\PrecisionLMS\scripts
sqlplus plms_auto7/plms_auto7@auto @%ORA_SCRIPTS%\reset_org_id.sql
sqlplus ipa_auto7/ipa_auto7@auto @%ORA_SCRIPTS%\reset_org_id.sql
call "restart ipa.bat"
call "restart plms.bat"
pause