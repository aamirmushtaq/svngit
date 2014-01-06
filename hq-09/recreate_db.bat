set ORA_SCRIPTS=C:\Fusion_QA\Automation\hq-09
sqlplus system/ptcse@eplms @%ORA_SCRIPTS%\recreate_db.sql '(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=hq-fusdev03)(PORT=1521)))(CONNECT_DATA=(SID=eplms)))'
Pause



