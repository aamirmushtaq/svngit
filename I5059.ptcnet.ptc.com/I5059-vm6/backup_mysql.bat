set NLS_LANG=american_america.UTF8
@echo off
for /f "tokens=1,2" %%u in ('date /t') do set d=%%v
for /f "tokens=1" %%u in ('time /t') do set t=%%u
if "%t:~1,1%"==":" set t=0%t%
set timestr=%d:~6,4%%d:~0,2%%d:~3,2%_%t:~0,2%%t:~3,2%

set backup_file_plms=backup_plms_fe1_pkg0.sql
set backup_file_ipa=backup_ipa_fe1_pkg0.dmp


@echo Backing up automation to %backup_file_plms% ...

mysqldump --user=root --password=root --host=i5059-vm6.ptcnet.ptc.com --result-file=%backup_file_plms% automation_plms

@echo Done with the plms backup!

@echo Backing up automation to %backup_file_ipa% ...

exp system/ptcse@auto4 owner=automation_ipa file=%backup_file_ipa% statistics=none consistent=y

@echo Done with ipa backup

@echo All Done!

pause