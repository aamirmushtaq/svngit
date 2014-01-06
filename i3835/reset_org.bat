cd C:\Fusion_QA\Automation\i3835
mysql -h precisionauto-1 -uroot -proot<reset_org_id.sql
call "IPA restart.bat"
call "PLMS restart.bat"
pause


