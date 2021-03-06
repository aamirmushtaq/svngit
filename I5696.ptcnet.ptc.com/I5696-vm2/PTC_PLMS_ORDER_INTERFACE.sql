CREATE TABLE PTC_PLMS_ORDER_INTERFACE
(
  TRX_ID                        NUMBER          NOT NULL,
  ORDER_ID                      NUMBER          NOT NULL,
  LINE_ID                       NUMBER          NOT NULL,
  PART_NUMBER                   VARCHAR2(200 BYTE) NOT NULL,
  SALES_ORDER                   NUMBER          NOT NULL,
  SALES_ORDER_DATE              DATE            NOT NULL,
  CUST_NUM                      VARCHAR2(100 BYTE) NOT NULL,
  CUST_NAME                     VARCHAR2(240 BYTE) NOT NULL,
  CONTACT_EMAIL                 VARCHAR2(240 BYTE),
  TRAINING_CONTACT_NAME         VARCHAR2(100 BYTE),
  SALES_CHANNEL_CODE            VARCHAR2(50 BYTE) NOT NULL,
  LICENSE_TIMING                VARCHAR2(240 BYTE) NOT NULL,
  BILL_TO_CITY                  VARCHAR2(30 BYTE) NOT NULL,
  BILL_TO_STATE                 VARCHAR2(30 BYTE),
  AR_OU_COUNTRY                 VARCHAR2(10 BYTE) NOT NULL,
  SHIP_TO_CUSTOMER_NAME         VARCHAR2(240 BYTE) NOT NULL,
  QTY_PURCHASED                 NUMBER          NOT NULL,
  DURATION_SUPPORT              NUMBER,
  END_DATE_SUPPORT              DATE,
  DELIVERY_ID                   NUMBER          NOT NULL,
  CREATED_ON                    DATE            NOT NULL,
  CREATED_BY                    VARCHAR2(500 BYTE) NOT NULL,
  UPDATED_ON                    DATE,
  UPDATED_BY                    VARCHAR2(500 BYTE),
  PLMS_PROCESS_IND              VARCHAR2(1 BYTE) DEFAULT 'N' NOT NULL,
  WELCOME_LETTER_DELIVERY_DATE  DATE,
  ORCL_PROCESS_IND              VARCHAR2(1 BYTE),
  ATTRIBUTE1                    VARCHAR2(500 BYTE),
  ATTRIBUTE2                    VARCHAR2(500 BYTE),
  ATTRIBUTE3                    VARCHAR2(500 BYTE),
  ATTRIBUTE4                    VARCHAR2(500 BYTE),
  ATTRIBUTE5                    VARCHAR2(500 BYTE)
);


CREATE INDEX PTC_PLMS_ORDER_INTERFACE_N1 ON PTC_PLMS_ORDER_INTERFACE
(PLMS_PROCESS_IND);

CREATE INDEX PTC_PLMS_ORDER_INTERFACE_N2 ON PTC_PLMS_ORDER_INTERFACE
(ORCL_PROCESS_IND);

CREATE INDEX PTC_PLMS_ORDER_INTERFACE_N3 ON PTC_PLMS_ORDER_INTERFACE
(LINE_ID);

CREATE INDEX PTC_PLMS_ORDER_INTERFACE_N4 ON PTC_PLMS_ORDER_INTERFACE
(DELIVERY_ID);


CREATE UNIQUE INDEX PTC_PLMS_ORDER_INTERFACE_U1 ON PTC_PLMS_ORDER_INTERFACE
(TRX_ID);

                                 
                                  
CREATE TABLE PTC_PLMS_PART_NUM_V
(
  ITEM_NUMBER       VARCHAR2(163 BYTE) NOT NULL,
  DESCRIPTION       VARCHAR2(240 BYTE) NOT NULL,
  CREATION_DATE     DATE                                 
);

quit;