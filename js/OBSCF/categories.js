var categories = {
	"mastercategories":[
	{
		"index": 0,
	    "description": "OBSCF Service APIs use HTTP verbs and a RESTful endpoint structure. Request and response payloads are formatted as JSON.\n\n",
    	"name": "Overview"
	},
	{
		"index": 1,
		"description": "",
		"name": "OBSCF Core Services"
	},
	{
		"index": 2,
		"description": "",
		"name": "OBSCF Finance Services"
	},
	{
		"index": 3,
		"description": "",
		"name": "OBSCF Limits Services"
	},
	{
		"index": 4,
		"description": "",
		"name": "OBSCF Report Services"
	},
	{
		"index": 5,
		"description": "",
		"name": "OBSCFCM EOD Batch Services"
	},
	{
		"index": 6,
		"description": "",
		"name": "OBSCFCM Account Maintenance Services"
	},
	{
		"index": 7,
		"description": "",
		"name": "OBSCFCM Charges Services"
	},
	{
		"index": 8,
		"description": "",
		"name": "OBSCFCM Core Services"
	},
	{
		"index": 9,
		"description": "",
		"name": "OBSCFCM Filter Services"
	},
	{
		"index": 10,
		"description": "",
		"name": "OBSCFCM Instruments Receivables Services"
	},
	{
		"index": 11,
		"description": "",
		"name": "OBSCFCM Manual Recon Services"
	},
	{
		"index": 12,
		"description": "",
		"name": "OBSCFCM Master Maintenance Services"
	},
	{
		"index": 13,
		"description": "",
		"name": "OBSCFCM Report Services"
	},
	{
		"index": 14,
		"description": "",
		"name": "OBSCFCM Workflow Managenent Services"
	},
	{
		"index": 15,
		"description": "",
		"name": "OBSCF FCI Messaging Service"
	}	
	]
	};
	var subCategories = {
		"list":[
		{
			"index": 1,
			"yaml": "obscf-core-services/coreServiceExt.yaml",
			"description": "Provides APIs for program and product related operations.",
			"parentcategory": "OBSCF Core Services",
			"displayName": "Core Service APIs"
		},	
		{
			"index": 2,
			"yaml": "obscf-core-services/coreServiceV1Ext.yaml",
			"description": "Provides v1 APIs for program and product related operations.",
			"parentcategory": "OBSCF Core Services",
			"displayName": "Core Service v1 APIs"
		},
		{
			"index": 3,
			"yaml": "obscf-core-services/coreServiceV3Ext.yaml",
			"description": "Provides v3 APIs for program and product related operations.",
			"parentcategory": "OBSCF Core Services",
			"displayName": "Core Service v3 APIs"
		},
		{
			"index": 4,
			"yaml": "obscf-core-services/coreServiceV4Ext.yaml",
			"description": "Provides v4 APIs for program and product related operations.",
			"parentcategory": "OBSCF Core Services",
			"displayName": "Core Service v4 APIs"
		},
		{
			"index": 5,
			"yaml": "obscf-finance-services/financeChargesServiceExt.yaml",
			"description": "Provides APIs for charges operations on finances.",
			"parentcategory": "OBSCF Finance Services",
			"displayName": "Finance Charges Service APIs"
		},
		{
			"index": 6,
			"yaml": "obscf-finance-services/financeLoanServiceExt.yaml",
			"description": "Provides APIs to perform operations on finances.",
			"parentcategory": "OBSCF Finance Services",
			"displayName": "Finance Loan Service APIs"
		},
		{
			"index": 7,
			"yaml": "obscf-finance-services/financeLoanServiceV2Ext.yaml",
			"description": "Provides APIs to perform enquiry operations on finances.",
			"parentcategory": "OBSCF Finance Services",
			"displayName": "Finance Loan Service v2 APIs"
		},
		{
			"index": 8,
			"yaml": "obscf-finance-services/financeTxnServiceApiExt.yaml",
			"description": "Provides APIs to perform enquiry operations on finances.",
			"parentcategory": "OBSCF Finance Services",
			"displayName": "Finance Transaction Service APIs"
		},
		{
			"index": 9,
			"yaml": "obscf-finance-services/financeTxnServiceV1ApiExt.yaml",
			"description": "Provides APIs to perform enquiry operations on finances.",
			"parentcategory": "OBSCF Finance Services",
			"displayName": "Finance Transaction Service v1 APIs"
		},
		{
			"index": 10,
			"yaml": "obscf-finance-services/limitsTxnServiceApiExt.yaml",
			"description": "Provides APIs to perform enquiry operations on limits.",
			"parentcategory": "OBSCF Finance Services",
			"displayName": "Limits Transaction Service APIs"
		},
		{
			"index": 11,
			"yaml": "obscf-finance-services/loanAndPaymentServiceApiExt.yaml",
			"description": "Provides APIs for managing contracts created by finance.",
			"parentcategory": "OBSCF Finance Services",
			"displayName": "Loan and Payment Service APIs"
		},
		{
			"index": 12,
			"yaml": "obscf-limits-services/LimitsServiceExt.yaml",
			"description": "Provides API to perform various operation such as block, utilize, release, unblock the limits and fetch the limits details.",
			"parentcategory": "OBSCF Limits Services",
			"displayName": "Limits Service APIs"
		},
		{
			"index": 13,
			"yaml": "obscf-report-services/eventServiceExt.yaml",
			"description": "Provides APIs for Event Data Management.",
			"parentcategory": "OBSCF Report Services",
			"displayName": "Event Service APIs"
		},
		{
			"index": 14,
			"yaml": "obscfcm-eod-batch/eodService.yaml",
			"description": "Provides APIs to trigger all the required end of day events for the application.",
			"parentcategory": "OBSCFCM EOD Batch Services",
			"displayName": "EOD Service APIs"
		},
		{
			"index": 15,
			"yaml": "obscfcm-account-maintenance-services/fcubs-accounting-serviceExt.yaml",
			"description": "Provides APIs to perform operations on FCUBS.",
			"parentcategory": "OBSCFCM Account Maintenance Services",
			"displayName": "FCUBS Accounting APIs"
		},
		{
			"index": 16,
			"yaml": "obscfcm-account-maintenance-services/obscfcm-accounting-serviceExt.yaml",
			"description": "Provides APIs to perform operations on accounting.",
			"parentcategory": "OBSCFCM Account Maintenance Services",
			"displayName": "Accounting APIs"
		},
		{
			"index": 17,
			"yaml": "obscfcm-account-maintenance-services/pooling-accounting-serviceExt.yaml",
			"description": "Provides APIs to perform pooling operations on accounting.",
			"parentcategory": "OBSCFCM Account Maintenance Services",
			"displayName": "Pooling Accounting Service APIs"
		},
		{
			"index": 18,
			"yaml": "obscfcm-account-maintenance-services/vam-serviceExt.yaml",
			"description": "Provides APIs for Virtual Account Management.",
			"parentcategory": "OBSCFCM Account Maintenance Services",
			"displayName": "VAM Service APIs"
		},
		{
			"index": 19,
			"yaml": "obscfcm-charges-services/chargesEnqServiceExt.yaml",
			"description": "Provides APIs to facilitate maintenance of charge enquiries. ",
			"parentcategory": "OBSCFCM Charges Services",
			"displayName": "Charges Enquiry Service APIs"
		},
		{
			"index": 20,
			"yaml": "obscfcm-charges-services/chgPrcTmpltServiceExt.yaml",
			"description": "Provides APIs to get pricing categories, methods and charges applicable for a given transaction.",
			"parentcategory": "OBSCFCM Charges Services",
			"displayName": "Charges Pricing Template Service APIs"
		},
		{
			"index": 21,
			"yaml": "obscfcm-core-services/customerServiceExt.yaml",
			"description": "Provides APIs to perform operations on customer delinquency status.",
			"parentcategory": "OBSCFCM Core Services",
			"displayName": "Customer Division Orchestrator APIs"
		},
		{
			"index": 22,
			"yaml": "obscfcm-core-services/divisionCodeService.yaml",
			"description": "Provides APIs to perform operations on customer's division code.",
			"parentcategory": "OBSCFCM Core Services",
			"displayName": "Division Code APIs"
		},
		{
			"index": 23,
			"yaml": "obscfcm-core-services/nonCustomerService.yaml",
			"description": "Provides APIs to perform operations on non-customer.",
			"parentcategory": "OBSCFCM Core Services",
			"displayName": "Non-Customer Service APIs"
		},
		{
			"index": 24,
			"yaml": "obscfcm-core-services/nonCustService.yaml",
			"description": "Provides APIs to perform operations on non-customer.",
			"parentcategory": "OBSCFCM Core Services",
			"displayName": "Non-Customer Service APIs v2"
		},
		{
			"index": 25,
			"yaml": "obscfcm-core-services/paymentTermsService.yaml",
			"description": "Provides APIs to perform operations on payment terms.",
			"parentcategory": "OBSCFCM Core Services",
			"displayName": "Payment Term Service APIs"
		},
		{
			"index": 26,
			"yaml": "obscfcm-core-services/relationshipYamlService.yaml",
			"description": "Provides APIs to perform operations on relationship master.",
			"parentcategory": "OBSCFCM Core Services",
			"displayName": "Relationship Service APIs"
		},
		{
			"index": 27,
			"yaml": "obscfcm-core-services/supplierCommodityYamlService.yaml",
			"description": "Provides APIs to perform operations on supplier commodity.",
			"parentcategory": "OBSCFCM Core Services",
			"displayName": "Supplier Commodity Service APIs"
		},
		{
			"index": 28,
			"yaml": "obscfcm-filter-services/filterServiceExt.yaml",
			"description": "Provides filter queries for respective categories for all applicable filter criteria and filters the best possible result for that category.",
			"parentcategory": "OBSCFCM Filter Services",
			"displayName": "Filter Service APIs"
		},
		{
			"index": 29,
			"yaml": "obscfcm-instruments-receivables-services/instrumentFinanceService.yaml",
			"description": "Provides APIs to perform finance operations on instruments.",
			"parentcategory": "OBSCFCM Instruments Receivables Services",
			"displayName": "Instrument Finance Service APIs"
		},
		{
			"index": 30,
			"yaml": "obscfcm-instruments-receivables-services/invoiceChargesService.yaml",
			"description": "Provides APIs to perform charges operations on invoices.",
			"parentcategory": "OBSCFCM Instruments Receivables Services",
			"displayName": "Invoice Charges Service APIs"
		},
		{
			"index": 31,
			"yaml": "obscfcm-instruments-receivables-services/invoiceProcessService.yaml",
			"description": "Provides APIs to perform various operations on invoices.",
			"parentcategory": "OBSCFCM Instruments Receivables Services",
			"displayName": "Invoice process Service APIs"
		},
		{
			"index": 32,
			"yaml": "obscfcm-instruments-receivables-services/invoicingService.yaml",
			"description": "Provides APIs to perform operations on invoices.",
			"parentcategory": "OBSCFCM Instruments Receivables Services",
			"displayName": "Invoicing Service APIs"
		},
		{
			"index": 33,
			"yaml": "obscfcm-instruments-receivables-services/invoicingServiceV2.yaml",
			"description": "Provides APIs to perform operations on invoices.",
			"parentcategory": "OBSCFCM Instruments Receivables Services",
			"displayName": "Invoicing Service v2 APIs"
		},
		{
			"index": 34,
			"yaml": "obscfcm-instruments-receivables-services/CreditNoteService.yaml",
			"description": "Provides APIs to perform operations on credit notes.",
			"parentcategory": "OBSCFCM Instruments Receivables Services",
			"displayName": "Credit Note APIs"
		},
		{
			"index": 35,
			"yaml": "obscfcm-instruments-receivables-services/paymentService.yaml",
			"description": "Provides APIs for various payment related processes.",
			"parentcategory": "OBSCFCM Instruments Receivables Services",
			"displayName": "Payment Service APIs"
		},
		{
			"index": 36,
			"yaml": "obscfcm-instruments-receivables-services/poChargesService.yaml",
			"description": "Provides APIs for purchase order charges.",
			"parentcategory": "OBSCFCM Instruments Receivables Services",
			"displayName": "Purchase Order Charges Service APIs"
		},
		{
			"index": 37,
			"yaml": "obscfcm-instruments-receivables-services/PoService.yaml",
			"description": "Provides APIs to perform operations on purchase orders.",
			"parentcategory": "OBSCFCM Instruments Receivables Services",
			"displayName": "Purchase Order Service APIs"
		},
        {
			"index": 38,
			"yaml": "obscfcm-instruments-receivables-services/discountOfferServiceApi.yaml",
			"description": "Provides APIs to perform operations on dynamic discounting.",
			"parentcategory": "OBSCFCM Instruments Receivables Services",
			"displayName": "Dynamic Discounting Service APIs"
		},
		{
			"index": 39,
			"yaml": "obscfcm-manual-recon-services/manualReconServiceExt.yaml",
			"description": "Provides APIs to make reconcilation, dereconcilation, allocation and deallocation transactions.",
			"parentcategory": "OBSCFCM Manual Recon Services",
			"displayName": "Manual Recon Service APIs"
		},
		{
			"index": 40,
			"yaml": "obscfcm-manual-recon-services/AutoReconServiceExt.yaml",
			"description": "Provides APIs to configure reconcilation rules.",
			"parentcategory": "OBSCFCM Manual Recon Services",
			"displayName": "Auto Reconcilation Service APIs"
		},
		{
			"index": 41,
			"yaml": "obscfcm-manual-recon-services/ReconRuleServiceExt.yaml",
			"description": "Provides APIs to fetch reconcilation category and attributes detail.",
			"parentcategory": "OBSCFCM Manual Recon Services",
			"displayName": "Reconcilation Rule Service APIs"
		},
		{
			"index": 42,
			"yaml": "obscfcm-manual-recon-services/VAMServiceExt.yaml",
			"description": "Provides APIs to VAM service for fetching Virtual Account Number.",
			"parentcategory": "OBSCFCM Manual Recon Services",
			"displayName": "VAM Service calling APIs"
		},
		{
			"index": 43,
			"yaml": "obscfcm-master-maintenance-services/masterMaintenanceServiceExt.yaml",
			"description": "Provides APIs for maintaining system, application and other parameters.",
			"parentcategory": "OBSCFCM Master Maintenance Services",
			"displayName": "Master Maintenance Services APIs"
		},
		{
			"index": 44,
			"yaml": "obscfcm-report-services/eventServiceExt.yaml",
			"description": "Provides APIs for Event Data Management.",
			"parentcategory": "OBSCFCM Report Services",
			"displayName": "Event Service APIs"
		},
		{
			"index": 45,
			"yaml": "obscfcm-report-services/reconServiceExt.yaml",
			"description": "Provides APIs for Reconcilation.",
			"parentcategory": "OBSCFCM Report Services",
			"displayName": "Recon Service APIs"
		},
		{
			"index": 46,
			"yaml": "obscfcm-report-services/relationshipServiceExt.yaml",
			"description": "Provides APIs for maintaining relationships between corporates and their buyers and sellers.",
			"parentcategory": "OBSCFCM Report Services",
			"displayName": "Relationship Service APIs"
		},
		{
			"index": 47,
			"yaml": "obscfcm-workflow-management-services/conductorExt.yaml",
			"description": "Provides APIs to interface between conductor and the service.",
			"parentcategory": "OBSCFCM Workflow Managenent Services",
			"displayName": "Conductor Service APIs"
		},
		{
			"index": 48,
			"yaml": "obscf-fci-messaging-service/fciMessageService.yaml",
			"description": "Provides API to interface between fci messaging service and fci messaging adaptor.",
			"parentcategory": "OBSCF FCI Messaging Service",
			"displayName": "FCI Messaging Service APIs"
		},
        {
            "index": 49,
            "yaml": "obscfcm-instruments-receivables-services/invoicingServiceV3.yaml",
            "description": "Provides APIs to perform operations on invoices.",
            "parentcategory": "OBSCFCM Instruments Receivables Services",
            "displayName": "Invoicing Service v3 APIs"
        }
		]
	}