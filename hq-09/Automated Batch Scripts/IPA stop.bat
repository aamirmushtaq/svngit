@echo off
@plink -pw ptc@123 seadmin@hq-fusdev09 /d00/scripts/stop_ipa.sh
echo.
pause