var categories = {
"mastercategories":[
		{
		    "index": 0,
		    "description": "OBMA Service APIs use HTTP verbs and a RESTful endpoint structure. Request and response payloads are formatted as JSON.\n\n",
		    "name": "Overview"
		},{
		    "index": 1,
			"description": "",
		    "name": "Plato Alerts Management Services"
		},{
		    "index": 2,
			"description": "",
		    "name": "Routing Hub"
		},{
		    "index": 3,
		    "description": "",
		    "name": "Plato Batch Server"
		},{
            "index": 4,
            "description": "",
            "name": "Common Core Branch"
        }, {
            "index": 5,
            "description": "",
            "name": "Common Core Branch EOD"
        }, {
            "index": 6,
            "description": "",
            "name": "Common Core Customer"
        }, {
            "index": 7,
            "description": "",
            "name": "Common Core Account"
        }, {
            "index": 8,
            "description": "",
            "name": "Common Core External Chart of Accounts"
        }, {
            "index": 9,
            "description": "",
            "name": "Common Core Transaction Code"
        }, {
            "index": 10,
            "description": "",
            "name": "Common Core Currency"
        }
		, {
            "index": 11,
            "description": "",
            "name": "Common Core External Virtual Account"
        }, {
            "index": 12,
            "description": "",
            "name": "Common Core External System Services"
        }, {
            "index": 13,
            "description": "",
            "name": "Common Core Settlements Services"
        }, {
            "index": 14,
            "description": "",
            "name": "Common Core Charges Calculation Services"
        }, {
            "index": 15,
            "description": "",
            "name": "Common Core Screen Class"
        }, {
            "index": 16,
            "description": "",
            "name": "Plato Feed Services"
        }, {
            "index": 17,
            "description": "",
            "name": "Credit Decision and Pricing Services"
        }, {
            "index": 18,
            "description": "",
            "name": "Bureau Integration Services"
        }
]
};
var subCategories = {
	"list":[
	{
		"index": 1,
		"yaml": "plato-alerts-management-services/Alerts.yaml",
		"description": "This is a sample server plato-alerts-services server.",
		"parentcategory": "Plato Alerts Management Services",
		"displayName": "Alerts"
	}, {
		"index": 2,
		"yaml": "plato-alerts-management-services/AlertApplicability.yaml",
		"description": "This is a sample server plato-alerts-applicability-rules-services server.",
		"parentcategory": "Plato Alerts Management Services",
		"displayName": "Alert Applicability"
	}, {
		"index": 3,
		"yaml": "plato-alerts-management-services/AlertDeliveryMode.yaml",
		"description": "This is a sample server plato-alerts-delivery-modes-services server.",
		"parentcategory": "Plato Alerts Management Services",
		"displayName": "Alert Delivery Mode"
	}, {
		"index": 4,
		"yaml": "plato-alerts-management-services/AlertEventProcess.yaml",
		"description": "This is a sample server Event server.",
		"parentcategory": "Plato Alerts Management Services",
		"displayName": "Alert Event Process"
	}, {
		"index": 5,
		"yaml": "plato-alerts-management-services/AlertFrequency.yaml",
		"description": "This is a sample server plato-alerts-frequencies-services server.",
		"parentcategory": "Plato Alerts Management Services",
		"displayName": "Alert Frequency"
	}, {
		"index": 6,
		"yaml": "plato-alerts-management-services/AlertGenerator.yaml",
		"description": "This is a sample server plato-alerts-generator-services server.",
		"parentcategory": "Plato Alerts Management Services",
		"displayName": "Alert Generator"
	}, {
		"index": 7,
		"yaml": "cmc-obrh-service/route.yaml",
		"description": "This service will invoke the target system service on behalf of source system.",
		"parentcategory": "Routing Hub",
		"displayName": "Route"
	}, {
        "index": 8,
        "yaml": "../../PLATO/plato-batch-server/JobExplorerController.yaml",
        "description": "These are the sample API's for exploring job Statuses.",
        "parentcategory": "Plato Batch Server",
        "displayName": "Job Explorer Controller"
    }, {
        "index": 9,
        "yaml": "../../PLATO/plato-batch-server/JobLauncherController.yaml",
        "description": "These are the sample API's in the job launcher controller of PlatoBatchServer.",
        "parentcategory": "Plato Batch Server",
        "displayName": "Job Launcher Controller"
    }, {
        "index": 10,
        "yaml": "../../PLATO/plato-batch-server/JobRegistryController.yaml",
        "description": "These are the sample API's in the job registry controller of PlatoBatchServer.",
        "parentcategory": "Plato Batch Server",
        "displayName": "Job Registry Controller"
    }, {
        "index": 11,
        "yaml": "../../PLATO/plato-batch-server/JobTriggerDefinitionsController.yaml",
        "description": "These are the sample API's in the job trigger defination controller of PlatoBatchServer.",
        "parentcategory": "Plato Batch Server",
        "displayName": "Job Trigger Defination Controller"
    }, {
        "index": 12,
        "yaml": "../../PLATO/plato-batch-server/BatchCoreJobLauncherController.yaml",
        "description": "These are the sample API's for launching a job in the platoBatchCore.",
        "parentcategory": "Plato Batch Server",
        "displayName": "Batch Core Job Launcher"
    }, {
        "index": 13,
        "yaml": "../../CMC/cmc-branch-services/api/BranchService.yaml",
        "description": "These services provide a single point for performing the Branch-Transactions.",
        "parentcategory": "Common Core Branch",
        "displayName": "Common Core Branch"
    }, {
        "index": 14,
        "yaml": "../../CMC/cmc-branch-services/api/Branch.yaml",
        "description": "These services provide a single point for performing the Branch Details.",
        "parentcategory": "Common Core Branch",
        "displayName": "Common Core Branch Details"
    },{
        "index": 15,
        "yaml": "../../CMC/cmc-branch-services/api/branchEodService.yaml",
        "description": "These services provide a single point for performing the Branch-Transactions.",
        "parentcategory": "Common Core Branch EOD",
        "displayName": "Common Core Branch EOD"
    },{
        "index": 16,
        "yaml": "../../CMC/cmc-customer-services/api/CoreCustomerService.yaml",
        "description": "These services provide a single point for performing the Customer-Transactions.",
        "parentcategory": "Common Core Customer",
        "displayName": "Common Core Customer"
    },
    {
        "index": 17,
        "yaml": "../../CMC/cmc-customer-services/api/CoreCustomer.yaml",
        "description": "These services provide a single point for performing the Customer-Transactions.",
        "parentcategory": "Common Core Customer",
        "displayName": "Common Core Customer Details Service"
    }, {
        "index": 18,
        "yaml": "../../CMC/cmc-account-services/api/CoreAccountService.yaml",
        "description": "These services provide a single point for performing the Account-Transactions.",
        "parentcategory": "Common Core Account",
        "displayName": "Common Core Account"
    }, {
        "index": 19,
        "yaml": "../../CMC/cmc-external-chart-account-services/api/ExternalChartAccountService.yaml",
        "description": "These services provide a single point for performing the External Chart of Accounts-Transactions.",
        "parentcategory": "Common Core External Chart of Accounts",
        "displayName": "Common Core External Chart of Accounts"
    }, {
        "index": 20,
        "yaml": "../../CMC/cmc-txn-code-services/api/CoreTrnCodeService.yaml",
        "description": "These services provide a single point for performing the Transaction Code-Transactions.",
        "parentcategory": "Common Core Transaction Code",
        "displayName": "Common Core Transaction Code"
    }, {
        "index": 21,
        "yaml": "../../CMC/cmc-currency-services/api/CurrencyService.yaml",
        "description": "These services provide a single point for performing the Currency-Transactions.",
        "parentcategory": "Common Core Currency",
        "displayName": "Common Core Currency"
    }
	, {
        "index": 22,
        "yaml": "../../CMC/cmc-external-virtual-account-services/CoreVirtualAccountService.yaml",
        "description": "These services provide a single point for performing the External Virtual Account-Transactions. .",
        "parentcategory": "Common Core External Virtual Account",
        "displayName": "Common Core External Virtual Account"
    }
	, {
        "index": 23,
        "yaml": "../../CMC/cmc-external-virtual-account-services/StructuredAddressServiceVA.yaml",
        "description": "These services provide a single point for performing the Virtual Account Structured Address-Transactions.",
        "parentcategory": "Common Core External Virtual Account",
        "displayName": "Common Core External Virtual Account Structured Address"
    }, {
		"index": 24,
		"yaml": "cmc-external-system-services/EcaSystemService.yaml",
		"description": "This is a sample server ecasystems server.",
		"parentcategory": "Common Core External System Services",
		"displayName": "Eca System"
	}, {
		"index": 25,
		"yaml": "cmc-external-system-services/uploadSourcePreferenceService.yaml",
		"description": "This is a sample server uploadSourcePreferenceService server.",
		"parentcategory": "Common Core External System Services",
		"displayName": "Source Preference"
	}, {
		"index": 26,
		"yaml": "cmc-settlements-services/BicDirectoryService.yaml",
		"description": "This is a sample server bicdirectorys server.",
		"parentcategory": "Common Core Settlements Services",
		"displayName": "Bic Directory"
	}, {
		"index": 27,
		"yaml": "cmc-charges-calculation-services/chgprctmplAggregate.yaml",
		"description": "Provides APIs for price rule maintenance.",
		"parentcategory": "Common Core Charges Calculation Services",
		"displayName": "Common Core Charges Calculation Services- Charge Price Aggregate Service"
	}, {
		"index": 28,
		"yaml": "cmc-charges-calculation-services/chgService.yaml",
		"description": "This is a sample server chgService server.",
		"parentcategory": "Common Core Charges Calculation Services",
		"displayName": "Common Core Charges Calculation Services- Charge Service"
	}, {
		"index": 29,
		"yaml": "cmc-screenclass-services/ScreenClass.yaml",
		"description": "This is a sample server screenclass server.",
		"parentcategory": "Common Core Screen Class",
		"displayName": "Common Core Screen Class - Maintenance"
	},
	{
        "index": 30,
        "yaml": "../../PLATO/Feed-Services.yaml",
        "description": "These are the sample API's for the Feed Service Operations",
        "parentcategory": "Plato Feed Services",
        "displayName": "Plato Feed Services"
    },
	{
		"index": 31,
		"yaml": "cmc-opds-services/CreditDecision.yaml",
		"description": "These are the sample API's for the Credit Decision and Pricing Services Operations",
		"parentcategory": "Credit Decision and Pricing Services",
		"displayName": "Credit Decision and Pricing Services"
	},
	{
		"index":32,
		"yaml": "cmc-obcbs-services/creditbureau.yaml",
		"description": "These are the sample API's for the Bureau Integration Services Operations",
		"parentcategory": "Bureau Integration Services",
		"displayName": "Bureau Integration Services"
	}
	]
}
