update CATEGORY set UNV_CAT_ID='cat_id_97e28e13-86c8-4ef2-b723-92a0bf64b9b5' where NAME='Windchill PDMLink';
update CATEGORY set UNV_CAT_ID='cat_id_666389c4-06a6-407e-a2ef-c62162c29c09' where NAME='Creo Parametric';
update CATEGORY set UNV_CAT_ID='cat_id_9cc7b15a-76e2-42b2-8e9b-43eea59171ca' where NAME='Creo Direct';
update CLASSFCTN set UNV_CAT_ID='class_id_e0533700-04e9-44d6-bd8f-ca9d698a1383' where CATEGORYVERSION='1.0' AND CATEGORY_CATEGORY_ID IN(SELECT CATEGORY_ID FROM CATEGORY WHERE NAME='Creo Parametric');
update CLASSFCTN set UNV_CAT_ID='class_id_c01efad9-eb4b-4e63-9537-e739c261c340' where CATEGORYVERSION='2.0' AND CATEGORY_CATEGORY_ID IN(SELECT CATEGORY_ID FROM CATEGORY WHERE NAME='Creo Parametric');
update organization set UNV_ORG_ID='unv_org_9c77ab81-24a0-4471-bdb9-1d35d71e718f' where name='PTC';
commit; 