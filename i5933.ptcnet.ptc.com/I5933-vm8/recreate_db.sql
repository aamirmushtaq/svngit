drop user automation_plms cascade;
drop user automation_ipa cascade;
drop user plms_ops cascade;


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

create user plms_ops identified by plms_ops;
grant create session to plms_ops;
grant create any table to plms_ops;
grant create any sequence  to plms_ops;
grant unlimited tablespace to plms_ops;
quit;