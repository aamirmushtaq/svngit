drop user automation_plms cascade;
drop user automation_ipa cascade;
create user automation_plms identified by automation_plms;
grant create session to automation_plms;
grant create any table to automation_plms;
grant create any sequence  to automation_plms;
grant unlimited tablespace to automation_plms;

create user automation_ipa identified by automation_ipa;
grant create session to automation_ipa;
grant create any table to automation_ipa;
grant create any sequence  to automation_ipa;
grant unlimited tablespace to automation_ipa;
quit;