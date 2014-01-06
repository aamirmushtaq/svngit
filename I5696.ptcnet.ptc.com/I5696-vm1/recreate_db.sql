drop user AUTOMATION_PLMS cascade;
create user AUTOMATION_PLMS identified by AUTOMATION_PLMS;
grant create session to AUTOMATION_PLMS;
grant create any table to AUTOMATION_PLMS;
grant create any sequence  to AUTOMATION_PLMS;
grant unlimited tablespace to AUTOMATION_PLMS;

drop user AUTOMATION_IPA cascade;
create user AUTOMATION_IPA identified by AUTOMATION_IPA;
grant create session to AUTOMATION_IPA;
grant create any table to AUTOMATION_IPA;
grant create any sequence  to AUTOMATION_IPA;
grant unlimited tablespace to AUTOMATION_IPA;

drop user PLMS_OPS cascade;
create user PLMS_OPS identified by PLMS_OPS;
grant create session to PLMS_OPS;
grant create any table to PLMS_OPS;
grant create any sequence  to PLMS_OPS;
grant unlimited tablespace to PLMS_OPS;
 
quit;
