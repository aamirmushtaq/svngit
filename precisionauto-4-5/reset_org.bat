set ORA_SCRIPTS=D:\PrecisionLMS\scripts
sqlplus plms_auto/plms_auto@eplms @%ORA_SCRIPTS%\reset_org_id.sql
sqlplus ipa_auto/ipa_auto@eplms @%ORA_SCRIPTS%\reset_org_id.sql
call "restart ipa.bat"
call "restart plms.bat"
pause