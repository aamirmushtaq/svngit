@echo off
@plink -pw ptcse seuser@i5696-vm4 /usr1/seuser/d00/scripts/plms_stop.sh
@plink -pw ptcse seuser@i5696-vm5 /usr1/seuser/d00/scripts/plms_stop.sh

echo.

pause