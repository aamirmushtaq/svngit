set ORA_SCRIPTS=D:\chetan\Automation\precisionauto-8
sqlplus plms_auto8/plms_auto8@auto @%ORA_SCRIPTS%\reset_org_id.sql
sqlplus ipa_auto8/ipa_auto8@auto @%ORA_SCRIPTS%\reset_org_id.sql
call "IPA restart.bat"
call "PLMS restart.bat"
pause