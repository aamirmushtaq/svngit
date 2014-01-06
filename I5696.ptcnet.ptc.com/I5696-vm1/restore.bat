set ORA_SCRIPTS=D:\Automation\I5696.ptcnet.ptc.com\I5696-vm1
sqlplus system/ptcse@auto1 @%ORA_SCRIPTS%\recreate_db.sql
sqlplus PLMS_OPS/PLMS_OPS@auto1 @%ORA_SCRIPTS%\PTC_PLMS_ORDER_INTERFACE.sql

imp system/ptcse@auto1 fromuser=automation_plms touser=automation_plms file="backup_plms_12Video.dmp"
 
@echo PLMS restore Done!

imp system/ptcse@auto1 fromuser=automation_ipa touser=automation_ipa file="backup_ipa_12Video.dmp"

@echo IPA restore Done!
@echo All Done!
pause








