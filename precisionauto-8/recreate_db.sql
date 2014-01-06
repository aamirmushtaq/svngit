drop user plms_auto8 cascade;
drop user ipa_auto8 cascade;
create user plms_auto8 identified by plms_auto8;
grant create session to plms_auto8;
grant create any table to plms_auto8;
grant create any sequence  to plms_auto8;
grant unlimited tablespace to plms_auto8;

create user ipa_auto8 identified by ipa_auto8;
grant create session to ipa_auto8;
grant create any table to ipa_auto8;
grant create any sequence  to ipa_auto8;
grant unlimited tablespace to ipa_auto8;
quit;