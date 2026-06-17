var categories = {
	"mastercategories": [
		{
			"index": 0,
			"description": "OBCM Service APIs use HTTP verbs and a RESTful endpoint structure. Request and response payloads are formatted as JSON.\nOBCM Service API can be accessed using the following URL format. Host name is the domain.\n-  The resource represents one of the OBCM REST resources. \n-   The resource-specific part of the URL specifies the actual resource being referenced.\n\n",
			"name": "Overview"
		},
		{
			"index": 1,
			"description": "",
			"name": "Oracle Banking Cashflow Forecasting Service"
		},
		{
			"index": 2,
			"description": "",
			"name": "Oracle Banking Cashflow Projection Service"
		},
		{
			"index": 3,
			"description": "",
			"name": "Oracle Banking Collections Transaction Service"
		},
		{
			"index": 4,
			"description": "",
			"name": "Oracle Banking Collections Report Service"
		}
	]
};
var subCategories = {
	"list": [
		{
			"index": 1,
			"html": "html/OBCM/obcm-cashflow-forecasting-services/cashflowProjections-publisher.html",
			"description": "This service is used to publish Cashflow Master transactions to Cashflow Projection service",
			"parentcategory": "Oracle Banking Cashflow Forecasting Service",
			"displayName": "Cashflow Projections Publisher Events"
		},
		{
			"index": 4,
			"html": "html/OBCM/obcm-cashflow-forecasting-services/cashflowTwTransaction-publisher.html",
			"description": "This service is used to publish cashflow Work transactions to Cashflow Projection service",
			"parentcategory": "Oracle Banking Cashflow Forecasting Service",
			"displayName": "Cashflow TW Transactions Publisher event"
		},
		{
			"index": 6,
			"html": "html/OBCM/obcm-cashflow-projection-services/cashflowProjections-subscriber.html",
			"description": "This service is used to subscribe cashflow Master transactions from Cashflow Forecasting service",
			"parentcategory": "Oracle Banking Cashflow Projection Service",
			"displayName": "Cashflow Projections Subscriber events"
		},
		{
			"index": 7,
			"html": "html/OBCM/obcm-cashflow-projection-services/cashflowTwTransaction-subscriber.html",
			"description": "This service is used to subscribe cashflow  Work transactions from Cashflow Forecasting service",
			"parentcategory": "Oracle Banking Cashflow Projection Service",
			"displayName": "Cashflow TW Transaction Subscriber events"
		},
		{
			"index": 8,
			"html": "html/OBCM/obcm-cashflow-projection-services/cashflowTxnUpdate-publisher.html",
			"description": "This service is used to publish cashflow transactions update to Cashflow Forecasting service",
			"parentcategory": "Oracle Banking Cashflow Projection Service",
			"displayName": "Cashflow Transactions Updated Publisher events"
		},
		{
			"index": 9,
			"html": "html/OBCM/obcm-collections-transaction-services/cashSlipTxnTmDetail-publisher.html",
			"description": "This service is used to publish Cash Slip Master transactions from Collection transaction service",
			"parentcategory": "Oracle Banking Collections Transaction Service",
			"displayName": "Cashslip Transaction TM Details Publisher events"
		},
		{
			"index": 10,
			"html": "html/OBCM/obcm-collections-transaction-services/cashSlipTxnTwDetail-publisher.html",
			"description": "This service is used to publish Cash Slip Work transactions from Collection transaction service",
			"parentcategory": "Oracle Banking Collections Transaction Service",
			"displayName": "Cashslip Transaction TW Details Publisher events"
		},
		{
			"index": 11,
			"html": "html/OBCM/obcm-collections-transaction-services/cashWithdrawalTmDetail-publisher.html",
			"description": "This service is used to publish CashWithdrawal Master transactions from Collection transaction service",
			"parentcategory": "Oracle Banking Collections Transaction Service",
			"displayName": "Cash Withdrawal Transaction TM Details Publisher events"
		},
		{
			"index": 12,
			"html": "html/OBCM/obcm-collections-transaction-services/cashWithdrawalTwDetail-publisher.html",
			"description": "This service is used to publish CashWithdrawal Work transactions from Collection transaction service",
			"parentcategory": "Oracle Banking Collections Transaction Service",
			"displayName": "Cash Withdrawal Transaction TW Details Publisher events"
		},
		{
			"index": 13,
			"html": "html/OBCM/obcm-collections-transaction-services/depSlipTxnTmDetail-publisher.html",
			"description": "This service is used to publish Instrument Deposit Master transactions from Collection transaction service",
			"parentcategory": "Oracle Banking Collections Transaction Service",
			"displayName": "Instrument Deposit Slip TM Details Publisher events"
		},
		{
			"index": 14,
			"html": "html/OBCM/obcm-collections-transaction-services/depSlipTxnTwDetail-publisher.html",
			"description": "This service is used to publish Instrument Deposit Work transactions from Collection transaction service",
			"parentcategory": "Oracle Banking Collections Transaction Service",
			"displayName": "Instrument Deposit Slip TW Details Publisher events"
		},
		{
			"index": 15,
			"html": "html/OBCM/obcm-report-services/cashSlipTxnTmDetail-subscriber.html",
			"description": "This service is used to Subscribe Cash Slip Master transactions",
			"parentcategory": "Oracle Banking Collections Report Service",
			"displayName": "Cashslip Transaction TM Details Subscriber events"
		},
		{
			"index": 16,
			"html": "html/OBCM/obcm-report-services/cashSlipTxnTwDetail-subscriber.html",
			"description": "This service is used to Subscribe Cash Slip Work transactions",
			"parentcategory": "Oracle Banking Collections Report Service",
			"displayName": "Cashslip Transaction TW Details Subscriber events"
		},
		{
			"index": 17,
			"html": "html/OBCM/obcm-report-services/cashWithdrawalTmDetail-subscriber.html",
			"description": "This service is used to Subscribe Cash Withdrawal Master transactions",
			"parentcategory": "Oracle Banking Collections Report Service",
			"displayName": "Cash Withdrawal Transaction TM Details Subscriber events"
		},
		{
			"index": 18,
			"html": "html/OBCM/obcm-report-services/cashWithdrawalTwDetail-subscriber.html",
			"description": "This service is used to Subscribe Cash Withdrawal Work transactions",
			"parentcategory": "Oracle Banking Collections Report Service",
			"displayName": "Cash Withdrawal Transaction TW Details Subscriber events"
		},
		{
			"index": 19,
			"html": "html/OBCM/obcm-report-services/depSlipTxnTmDetail-subscriber.html",
			"description": "This service is used to Subscribe Deposit Slip Master transactions",
			"parentcategory": "Oracle Banking Collections Report Service",
			"displayName": "Instrument Deposit Slip TM Details Subscriber events"
		},
		{
			"index": 20,
			"html": "html/OBCM/obcm-report-services/depSlipTxnTwDetail-subscriber.html",
			"description": "This service is used to Subscribe Deposit Slip Work transactions",
			"parentcategory": "Oracle Banking Collections Report Service",
			"displayName": "Instrument Deposit Slip TW Details Subscriber events"
		},
		{
			"index": 21,
			"html": "html/OBCM/obcm-report-services/platoAlertMessage-publisher.html",
			"description": "The service publishes alerts on Plato Alerts Management Service",
			"parentcategory": "Oracle Banking Collections Report Service",
			"displayName": "Plato Alert Messsage Publisher events"
		}
	]
}