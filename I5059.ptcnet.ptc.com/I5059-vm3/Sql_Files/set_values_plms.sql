update setting_value set value='http://I5059.ptcnet.ptc.com/plms/app/pages/?wicket:bookmarkablePage=:com.ptc.fusion.web.pages.user.ApproveUsers' where setting_key='app.approver_url';
update setting_value set value='/usr1/seuser/d00/apps/plms/tomcat/webapps/plms/WEB-INF/classes/version.properties' where setting_key='app.buildversionfilepath';
update setting_value set value='/help' where setting_key='app.help_base_url';
update setting_value set value='uid=tsuser,ou=People,ou=PTCRoot' where setting_key='app.ldap_dn';
update setting_value set value='mail' where setting_key='app.ldap_mapping_mail_id';
update setting_value set value='uid' where setting_key='app.ldap_mapping_user_id';
update setting_value set value='true' where setting_key='app.ldap_sync_enabled';
update setting_value set value='fusion-qa@ptc.com' where setting_key='app.ldap_sync_error_email';
update setting_value set value='http://I5059.ptcnet.ptc.com/plms/app/?wicket:bookmarkablePage=:com.ptc.fusion.web.pages.ChangePassword' where setting_key='app.local_chg_passwd_link';
update setting_value set value='http://I5059.ptcnet.ptc.com/plms/app/pages/Login' where setting_key='app.login_page_url';
update setting_value set value='http://I5059.ptcnet.ptc.com' where setting_key='app.proeSkillNode';
update setting_value set value='/usr1/seuser/d00/content/plms/uploads/user_models' where setting_key='app.user_upload_model_location';
update setting_value set value='/content' where setting_key='content.content_package_access_url';
update setting_value set value='/usr1/seuser/d00/apps/plms/data/content' where setting_key='content.content_package_storage_location';
update setting_value set value='learn1t' where setting_key='ldap.password';
update setting_value set value='ldap://ldap-util.ptc.com:389/' where setting_key='ldap.url';
update setting_value set value='http://www.ptc.com/appserver/common/account/secure/wamMain.jsp' where setting_key='ldap.url_to_view_account_details';
update setting_value set value='uid=edserv-admin,ou=Directory Administrators,dc=ptc,dc=com' where setting_key='ldap.user';
update setting_value set value='fusion-qa@ptc.com' where setting_key='mail.from_addr';
update setting_value set value='fusion-qa@ptc.com' where setting_key='mail.grading_err_addr';
update setting_value set value='int-mail.ptc.com' where setting_key='mail.host';
update setting_value set value='hq-xpfusion1.ptcnet.ptc.com' where setting_key='proegrading.dsm_host_name';
update setting_value set value='fusion-qa@ptc.com' where setting_key='proegrading.ge_error_notification_mailid';
update setting_value set value='' where setting_key='ldap.pool.debug';
update fusion_user set password = 'MdACE/1OesF2eXaxnYIn83vmYE0Mtc2a' where username = 'precisionlmsadmin';
delete from SETTING_VALUE where SETTING_KEY='app.analytic_js_url';
delete from SETTING_KEY where SETTING_KEY='app.analytic_js_url';
delete from SETTING_VALUE where SETTING_KEY='app.analytic_tracker_id';
delete from SETTING_KEY where SETTING_KEY='app.analytic_tracker_id';
commit;