@echo off
@start "Node 1" plink -pw ptcse seuser@i5696-vm4 /usr1/seuser/d00/scripts/plms_tail.sh
@start "Node 2" plink -pw ptcse seuser@i5696-vm5 /usr1/seuser/d00/scripts/plms_tail.sh
echo.




