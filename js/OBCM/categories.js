var categories = {
	"mastercategories":[
	{
		"index": 0,
	    "description": "OBCM Service APIs use HTTP verbs and a RESTful endpoint structure. Request and response payloads are formatted as JSON.",
		"name": "Overview"
	},
	{
		"index": 1,
		"description": "",
		"name": "Oracle Banking Collections Transaction Services"
	},
	{
		"index": 2,
		"description": "",
		"name": "Oracle Banking Cashflow Forecasting Service"
	},
	{
		"index": 3,
		"description": "",
		"name": "Oracle Banking Collections maintenance Service"
	},
	{
		"index": 4,
		"description": "",
		"name": "Oracle Banking Cashflow Projection Service"
	},
	{
		"index": 5,
		"description": "",
		"name": "Oracle Banking Cashflow Report Service"
	},
	{
		"index": 6,
		"description": "",
		"name": "Oracle Banking Netting Service"
	},
	{
		"index": 7,
		"description": "",
		"name": "OBSCFCM EOD Batch Services"
	},
	{
		"index": 8,
		"description": "",
		"name": "OBSCFCM Account Maintenance Services"
	},
	{
		"index": 9,
		"description": "",
		"name": "OBSCFCM Charges Services"
	},
	{
		"index": 10,
		"description": "",
		"name": "OBSCFCM Core Services"
	},
	{
		"index": 11,
		"description": "",
		"name": "OBSCFCM Filter Services"
	},
	{
		"index": 12,
		"description": "",
		"name": "OBSCFCM Instruments Receivables Services"
	},
	{
		"index": 13,
		"description": "",
		"name": "OBSCFCM Manual Recon Services"
	},
	{
		"index": 14,
		"description": "",
		"name": "OBSCFCM Master Maintenance Services"
	},
	{
		"index": 15,
		"description": "",
		"name": "OBSCFCM Report Services"
	},
	{
		"index": 16,
		"description": "",
		"name": "OBSCFCM Workflow Managenent Services"
	}
	]
	}; 
	var subCategories = {
		"list":[
		{
			"index": 1,
			"yaml": "obcm-collections-transaction-services/batchService.yaml",
			"description": "Provides APIs for purge and reject related operation on Instrument collection.",
			"parentcategory": "Oracle Banking Collections Transaction Services",
			"displayName": "Instrument Collection Purge/ Reject API"
		},
		{
			"index": 2,
			"yaml": "obcm-collections-transaction-services/cashSlipService.yaml",
			"description": "Provides APIs to Cash Deposit Inquiry and duplicate check and Put request from Channel.",
			"parentcategory": "Oracle Banking Collections Transaction Services",
			"displayName": "Cash Deposit Service APIs"
		},
		{
			"index": 3,
			"yaml": "obcm-collections-transaction-services/instrumentManagementService.yaml",
			"description": "Provides APIs to Purge and Reject of Instrument management related functions.",
			"parentcategory": "Oracle Banking Collections Transaction Services",
			"displayName": "Instrument Management Purge/Reject API"
		},
		{
			"index": 4,
			"yaml": "obcm-collections-transaction-services/instrumentService.yaml",
			"description": "Provides APIs for PUT request from channel , Inquiry and Duplicate check validation for Instrument Collection.",
			"parentcategory": "Oracle Banking Collections Transaction Services",
			"displayName": "Instrument Collection APIs"
		},
		{
			"index": 5,
			"yaml": "obcm-collections-transaction-services/poolingJob.yaml",
			"description": "Provides DTO's for pooling job related operations.",
			"parentcategory": "Oracle Banking Collections Transaction Services",
			"displayName": "Pooling Job DTO's"
		},
		{
			"index": 6,
			"yaml": "obcm-collections-transaction-services/transaction.yaml",
			"description": "Provides APIs for arrangement related details and Pooling date.",
			"parentcategory": "Oracle Banking Collections Transaction Services",
			"displayName": "Arrangement Details and Pooling Date APIs"
		},	
		{
			"index":7,
			"yaml": "obcm-collections-transaction-services/withdrawalEntryService.yaml",
			"description": "Provides APIs for Inquiry, PUT request from external channel, Reject and Authorise.",
			"parentcategory": "Oracle Banking Collections Transaction Services",
			"displayName": "Cashwithdrawal APIs"
		},
		{
			"index":8,
			"yaml": "obcm-collections-transaction-services/collectionChargesService.yaml",
			"description": "Provides APIs for Cash Deposit related charges.",
			"parentcategory": "Oracle Banking Collections Transaction Services",
			"displayName": "Cash Deposit Charges APIs"
		},
		{
			"index":9,
			"yaml": "obcm-collections-transaction-services/paymentService.yaml",
			"description": "Provides APIs and models required for obcm obpm intgration.",
			"parentcategory": "Oracle Banking Collections Transaction Services",
			"displayName": "Payment Integration APIs"
		},
		{
			"index": 101,
			"yaml": "obcm-cashflow-forecasting-services/cashflowReporting.yaml",
			"description": "Provides APIs to Inquire on existing Cashflow Txn.",
			"parentcategory": "Oracle Banking Cashflow Forecasting Service",
			"displayName": "Cashflow Report APIs"
		},
		{
			"index": 102,
			"yaml": "obcm-cashflow-forecasting-services/cashflowTxnTWList.yaml",
			"description": "Provides APIs for various Cashflow Transaction and it's related operation.",
			"parentcategory": "Oracle Banking Cashflow Forecasting Service",
			"displayName": "Upload Cashflow Transaction APIs "
		},
		{
			"index": 201,
			"yaml": "obcm-collections-maintenance-services/productService.yaml",
			"description": "Provides list of the products available for Cash Deposit and Instrument Deposit.",
			"parentcategory": "Oracle Banking Collections maintenance Service",
			"displayName": "Cash and Instrument Product APIs"
		},
		{
			"index": 202,
			"yaml": "obcm-collections-maintenance-services/LocationLinkService.yaml",
			"description": "Provides list of Inquiry APIs for location master, Correspondent Bank and Outside Network Bank.",
			"parentcategory": "Oracle Banking Collections maintenance Service",
			"displayName": "Location Service APIs"
		},
		{
			"index": 203,
			"yaml": "obcm-collections-maintenance-services/LocationClusterService.yaml",
			"description": "Provides list of Inquiry APIs for location cluster.",
			"parentcategory": "Oracle Banking Collections maintenance Service",
			"displayName": "Location Cluster Service APIs"
		},
		{
			"index": 204,
			"yaml": "obcm-collections-maintenance-services/courierSetupYamlService.yaml",
			"description": "Provides Inquiry APIs for the list of Courier Maintained. ",
			"parentcategory": "Oracle Banking Collections maintenance Service",
			"displayName": "Courier Setup Service APIs"
		},
		{
			"index": 205,
			"yaml": "obcm-collections-maintenance-services/arrangementDecisioningYamlService.yaml",
			"description": "Provides Inquiry APIs for Arrangement Decisioning master. ",
			"parentcategory": "Oracle Banking Collections maintenance Service",
			"displayName": "Arrangement Decisioning Service APIs"
		},
		{
			"index": 206,
			"yaml": "obcm-collections-maintenance-services/cashDenomMaintMasterDetailService.yaml",
			"description": "Provides List of Service API's for Cash Denomination. ",
			"parentcategory": "Oracle Banking Collections maintenance Service",
			"displayName": "Cash Denominations Master Maintenance Details Service APIs"
		},
		{
			"index": 207,
			"yaml": "obcm-collections-maintenance-services/routingService.yaml",
			"description": "Provides GET API for Routing information. ",
			"parentcategory": "Oracle Banking Collections maintenance Service",
			"displayName": "Routing Service APIs"
		},
		{
			"index": 208,
			"yaml": "obcm-collections-maintenance-services/corporateInformationService.yaml",
			"description": "Provides API for products of corporate. ",
			"parentcategory": "Oracle Banking Collections maintenance Service",
			"displayName": "Corporate Product Information Service APIs"
		},
		{
			"index": 209,
			"yaml": "obcm-collections-maintenance-services/bankbranchservice.yaml",
			"description": "Provides API for BankBranch Operations ",
			"parentcategory": "Oracle Banking Collections maintenance Service",
			"displayName": "Bank Branch Service APIs"
		},
		/*{
			"index": 228,
			"yaml": "obcm-collections-maintenance-services/bankbranchservice.yaml",
			"description": "This service performs bank branch related operations. \  ",
			"parentcategory": "Oracle Banking Collections maintenance Service",
			"displayName": "API for bank branch related operations."
		},*/
		{
			"index": 301,
			"yaml": "obcm-cashflow-projection-services/cashflowForecastingReport.yaml",
			"description": "Provides APIs for fetching actual and predicted cashflows based on given set of parameters.",
			"parentcategory": "Oracle Banking Cashflow Projection Service",
			"displayName": "Cashflow Aggregate APIs "
		},
		{
			"index": 302,
			"yaml": "obcm-cashflow-projection-services/cashflowDailySummary.yaml",
			"description": "Provides APIs for cashflow forecasting daily summary service. ",
			"parentcategory": "Oracle Banking Cashflow Projection Service",
			"displayName": "Cashflow Forecasting Daily Summary Service APIs"
		},
		{
			"index":303,
			"yaml": "obcm-cashflow-projection-services/cashflowSearch.yaml",
			"description": "Provides APIs and models required for Cashflow Search.",
			"parentcategory": "Oracle Banking Cashflow Projection Service",
			"displayName": "Cashflow Search APIs"
		},
		{
			"index": 401,
			"yaml": "obcm-report-services/cashDashboardReportService.yaml",
			"description": "Provides APIs for Report related Operations. ",
			"parentcategory": "Oracle Banking Cashflow Report Service",
			"displayName": "Cashflow Report Service APIs"
		},
		{
			"index": 501,
			"yaml": "obcm-netting-service/nettingService.yaml",
			"description": "Get Netting Transaction Details ",
			"parentcategory": "Oracle Banking Netting Service",
			"displayName": "OBCM Netting Service"
		},
		{
			"index": 1114,
			"yaml": "obscfcm-eod-batch/eodService.yaml",
			"description": "Provides APIs to trigger all the required end of day events for the application.",
			"parentcategory": "OBSCFCM EOD Batch Services",
			"displayName": "EOD Service APIs"
		},
		{
			"index": 1115,
			"yaml": "obscfcm-account-maintenance-services/fcubs-accounting-serviceExt.yaml",
			"description": "Provides APIs to perform operations on FCUBS.",
			"parentcategory": "OBSCFCM Account Maintenance Services",
			"displayName": "FCUBS Accounting APIs"
		},
		{
			"index": 1116,
			"yaml": "obscfcm-account-maintenance-services/obscfcm-accounting-serviceExt.yaml",
			"description": "Provides APIs to perform operations on accounting.",
			"parentcategory": "OBSCFCM Account Maintenance Services",
			"displayName": "Accounting APIs"
		},
		{
			"index": 1117,
			"yaml": "obscfcm-account-maintenance-services/pooling-accounting-serviceExt.yaml",
			"description": "Provides APIs to perform pooling operations on accounting.",
			"parentcategory": "OBSCFCM Account Maintenance Services",
			"displayName": "Pooling Accounting Service APIs"
		},
		{
			"index": 1118,
			"yaml": "obscfcm-account-maintenance-services/vam-serviceExt.yaml",
			"description": "Provides APIs for Virtual Account Management.",
			"parentcategory": "OBSCFCM Account Maintenance Services",
			"displayName": "VAM Service APIs"
		},
		{
			"index": 1119,
			"yaml": "obscfcm-charges-services/chargesEnqServiceExt.yaml",
			"description": "Provides APIs to facilitate maintenance of charge enquiries. ",
			"parentcategory": "OBSCFCM Charges Services",
			"displayName": "Charges Enquiry Service APIs"
		},
		{
			"index": 1120,
			"yaml": "obscfcm-charges-services/chgPrcTmpltServiceExt.yaml",
			"description": "Provides APIs to get pricing categories, methods and charges applicable for a given transaction.",
			"parentcategory": "OBSCFCM Charges Services",
			"displayName": "Charges Pricing Template Service APIs"
		},
		{
			"index": 1121,
			"yaml": "obscfcm-core-services/customerServiceExt.yaml",
			"description": "Provides APIs to perform operations on customer delinquency status.",
			"parentcategory": "OBSCFCM Core Services",
			"displayName": "Customer Division Orchestrator APIs"
		},
		{
			"index": 1122,
			"yaml": "obscfcm-core-services/divisionCodeService.yaml",
			"description": "Provides APIs to perform operations on customer's division code.",
			"parentcategory": "OBSCFCM Core Services",
			"displayName": "Division Code APIs"
		},
		{
			"index": 1123,
			"yaml": "obscfcm-core-services/nonCustomerService.yaml",
			"description": "Provides APIs to perform operations on non-customer.",
			"parentcategory": "OBSCFCM Core Services",
			"displayName": "Non-Customer Service APIs"
		},
		{
			"index": 1124,
			"yaml": "obscfcm-core-services/nonCustService.yaml",
			"description": "Provides APIs to perform operations on non-customer.",
			"parentcategory": "OBSCFCM Core Services",
			"displayName": "Non-Customer Service APIs v2"
		},
		{
			"index": 1125,
			"yaml": "obscfcm-core-services/paymentTermsService.yaml",
			"description": "Provides APIs to perform operations on payment terms.",
			"parentcategory": "OBSCFCM Core Services",
			"displayName": "Payment Term Service APIs"
		},
		{
			"index": 1126,
			"yaml": "obscfcm-core-services/relationshipYamlService.yaml",
			"description": "Provides APIs to perform operations on relationship master.",
			"parentcategory": "OBSCFCM Core Services",
			"displayName": "Relationship Service APIs"
		},
		{
			"index": 1127,
			"yaml": "obscfcm-core-services/supplierCommodityYamlService.yaml",
			"description": "Provides APIs to perform operations on supplier commodity.",
			"parentcategory": "OBSCFCM Core Services",
			"displayName": "Supplier Commodity Service APIs"
		},
		{
			"index": 1128,
			"yaml": "obscfcm-filter-services/filterServiceExt.yaml",
			"description": "Provides filter queries for respective categories for all applicable filter criteria and filters the best possible result for that category.",
			"parentcategory": "OBSCFCM Filter Services",
			"displayName": "Filter Service APIs"
		},
		/*{
			"index": 1129,
			"yaml": "obscfcm-instruments-receivables-services/instrumentFinanceService.yaml",
			"description": "Provides APIs to perform finance operations on instruments.",
			"parentcategory": "OBSCFCM Instruments Receivables Services",
			"displayName": "Instrument Finance Service APIs"
		},*/
		{
			"index": 1130,
			"yaml": "obscfcm-instruments-receivables-services/invoiceChargesService.yaml",
			"description": "Provides APIs to perform charges operations on invoices.",
			"parentcategory": "OBSCFCM Instruments Receivables Services",
			"displayName": "Invoice Charges Service APIs"
		},
		{
			"index": 1131,
			"yaml": "obscfcm-instruments-receivables-services/invoiceProcessService.yaml",
			"description": "Provides APIs to perform various operations on invoices.",
			"parentcategory": "OBSCFCM Instruments Receivables Services",
			"displayName": "Invoice process Service APIs"
		},
		{
			"index": 1132,
			"yaml": "obscfcm-instruments-receivables-services/invoicingService.yaml",
			"description": "Provides APIs to perform operations on invoices.",
			"parentcategory": "OBSCFCM Instruments Receivables Services",
			"displayName": "Invoicing Service APIs"
		},
		{
			"index": 1133,
			"yaml": "obscfcm-instruments-receivables-services/invoicingServiceV2.yaml",
			"description": "Provides APIs to perform operations on invoices.",
			"parentcategory": "OBSCFCM Instruments Receivables Services",
			"displayName": "Invoicing Service v2 APIs"
		},
		{
			"index": 1134,
			"yaml": "obscfcm-instruments-receivables-services/CreditNoteService.yaml",
			"description": "Provides APIs to perform operations on credit notes.",
			"parentcategory": "OBSCFCM Instruments Receivables Services",
			"displayName": "Credit Note APIs"
		},
		{
			"index": 1135,
			"yaml": "obscfcm-instruments-receivables-services/paymentService.yaml",
			"description": "Provides APIs for various payment related processes.",
			"parentcategory": "OBSCFCM Instruments Receivables Services",
			"displayName": "Payment Service APIs"
		},
		{
			"index": 1136,
			"yaml": "obscfcm-instruments-receivables-services/poChargesService.yaml",
			"description": "Provides APIs for purchase order charges.",
			"parentcategory": "OBSCFCM Instruments Receivables Services",
			"displayName": "Purchase Order Charges Service APIs"
		},
		{
			"index": 1137,
			"yaml": "obscfcm-instruments-receivables-services/PoService.yaml",
			"description": "Provides APIs to perform operations on purchase orders.",
			"parentcategory": "OBSCFCM Instruments Receivables Services",
			"displayName": "Purchase Order Service APIs"
		},
		{
			"index": 1138,
			"yaml": "obscfcm-manual-recon-services/manualReconServiceExt.yaml",
			"description": "Provides APIs to make reconcilation, dereconcilation, allocation and deallocation transactions.",
			"parentcategory": "OBSCFCM Manual Recon Services",
			"displayName": "Manual Recon Service APIs"
		},
		{
			"index": 1139,
			"yaml": "obscfcm-manual-recon-services/AutoReconServiceExt.yaml",
			"description": "Provides APIs to configure reconcilation rules.",
			"parentcategory": "OBSCFCM Manual Recon Services",
			"displayName": "Auto Reconcilation Service APIs"
		},
		{
			"index": 1140,
			"yaml": "obscfcm-manual-recon-services/ReconRuleServiceExt.yaml",
			"description": "Provides APIs to fetch reconcilation category and attributes detail.",
			"parentcategory": "OBSCFCM Manual Recon Services",
			"displayName": "Reconcilation Rule Service APIs"
		},
		{
			"index": 1141,
			"yaml": "obscfcm-manual-recon-services/VAMServiceExt.yaml",
			"description": "Provides APIs to VAM service for fetching Virtual Account Number.",
			"parentcategory": "OBSCFCM Manual Recon Services",
			"displayName": "VAM Service calling APIs"
		},
		{
			"index": 1142,
			"yaml": "obscfcm-master-maintenance-services/masterMaintenanceServiceExt.yaml",
			"description": "Provides APIs for maintaining system, application and other parameters.",
			"parentcategory": "OBSCFCM Master Maintenance Services",
			"displayName": "Master Maintenance Services APIs"
		},
		{
			"index": 1143,
			"yaml": "obscfcm-report-services/eventServiceExt.yaml",
			"description": "Provides APIs for Event Data Management.",
			"parentcategory": "OBSCFCM Report Services",
			"displayName": "Event Service APIs"
		},
		{
			"index": 1144,
			"yaml": "obscfcm-report-services/reconServiceExt.yaml",
			"description": "Provides APIs for Reconcilation.",
			"parentcategory": "OBSCFCM Report Services",
			"displayName": "Recon Service APIs"
		},
		{
			"index": 1145,
			"yaml": "obscfcm-report-services/relationshipServiceExt.yaml",
			"description": "Provides APIs for maintaining relationships between corporates and their buyers and sellers.",
			"parentcategory": "OBSCFCM Report Services",
			"displayName": "Relationship Service APIs"
		},
		{
			"index": 1146,
			"yaml": "obscfcm-workflow-management-services/conductorExt.yaml",
			"description": "Provides APIs to interface between conductor and the service.",
			"parentcategory": "OBSCFCM Workflow Managenent Services",
			"displayName": "Conductor Service APIs"
		}
		]
	}