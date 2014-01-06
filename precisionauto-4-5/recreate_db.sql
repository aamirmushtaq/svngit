drop user plms_auto cascade;
drop user ipa_auto cascade;
create user plms_auto identified by plms_auto;
grant create session to plms_auto;
grant create any table to plms_auto;
grant create any sequence  to plms_auto;
grant unlimited tablespace to plms_auto;

create user ipa_auto identified by ipa_auto;
grant create session to ipa_auto;
grant create any table to ipa_auto;
grant create any sequence  to ipa_auto;
grant unlimited tablespace to ipa_auto;
quit;