drop user plms_auto7 cascade;
drop user ipa_auto7 cascade;
create user plms_auto7 identified by plms_auto7;
grant create session to plms_auto7;
grant create any table to plms_auto7;
grant create any sequence  to plms_auto7;
grant unlimited tablespace to plms_auto7;

create user ipa_auto7 identified by ipa_auto7;
grant create session to ipa_auto7;
grant create any table to ipa_auto7;
grant create any sequence  to ipa_auto7;
grant unlimited tablespace to ipa_auto7;
quit;