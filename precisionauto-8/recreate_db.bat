set ORA_SCRIPTS=D:\chetan\Automation\precisionauto-8
sqlplus system/ptcse@auto @%ORA_SCRIPTS%\recreate_db.sql '(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=precisionauto-3)(PORT=1521)))(CONNECT_DATA=(SID=auto)))'
Pause