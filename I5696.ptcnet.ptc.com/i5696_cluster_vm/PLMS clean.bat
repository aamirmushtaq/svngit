@echo off
@plink -pw ptcse seuser@i5696-vm4 /usr1/seuser/d00/scripts/plms_clean.sh
@plink -pw ptcse seuser@i5696-vm5 /usr1/seuser/d00/scripts/plms_clean.sh


echo.

pause