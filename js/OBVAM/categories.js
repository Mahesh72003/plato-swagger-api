var categoriesCount =0;
var categories = {
"mastercategories":[
{
    "index": categoriesCount++,
"description": "OBVAM REST APIs use HTTP verbs and a RESTful endpoint structure. Request and response payloads are formatted as JSON.\n\nOBVAM REST API can be accessed using the following URL format\n\nhttp://host-name:port/{servicename}/{resource}/{resource-specific-parameters}\n-	Host name is the domain.\n-	The resource represents one of the OBVAM REST resources. \n-	The resource-specific part of the URL specifies the actual resource being referenced.\n\n",
    "name": "Overview"
},
{
    "index": categoriesCount++,
	"description": "",
    "name": "Account Services"
},
{
    "index": categoriesCount++,
    "description": "",
    "name": "Core Services"
},
{
    "index": categoriesCount++,
    "description": "",
    "name": "Charge Services"
},
{
    "index": categoriesCount++,
    "description": "",
    "name": "ECA Services"
},
{
    "index": categoriesCount++,
    "description": "",
    "name": "Entity Services"
},
{
    "index": categoriesCount++,
    "description": "",
    "name": "External Interest Engine Services"
},
{
    "index": categoriesCount++,
    "description": "",
    "name": "Identifier Services"
},
{
    "index": categoriesCount++,
    "description": "",
    "name": "Projection Services"
},
{
    "index": categoriesCount++,
    "description": "",
    "name": "Internal Transfer Services"
},
{
    "index": categoriesCount++,
    "description": "",
    "name": "Statement Services"
},
{
    "index": categoriesCount++,
    "description": "",
    "name": "Transaction Journal Services"
}
]
};
var subCategoriesCount = 1;
var subCategories = {
"list":[
{
	    "index": subCategoriesCount++,
	    "yaml": "../../OBVAM/obvam-account-services/AccountClosureService.yaml",
	    "description": "This service is used to create Virtual Account Closure for Virtual Entity.",
	    "parentcategory": "Account Services",
	    "displayName": "Account Closure"
},

{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-account-services/AccountService.yaml",
    "description": "This service is used to create Virtual Account for Virtual Entity. Virtual Account details such as IBAN and Debit/Credit restrictions, Interest, Overdraft, Real Account Linkage preferences are captured.",
    "parentcategory": "Account Services",
    "displayName": "Account Input"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-account-services/AccountProductService.yaml",
    "description": "This service can create Corporate Specific Virtual Account products. These products are further used to create virtual accounts. Product level preferences must be enabled before enabling the preference for account.",
    "parentcategory": "Account Services",
    "displayName": "Account Product"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-account-services/AccountRangeService.yaml",
    "description": "These are the services that will maintain Account Number Range for a specific Corporate in a Branch.",
    "parentcategory": "Account Services",
    "displayName": "Account Range"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-account-services/AccMapService.yaml",
    "description": "Virtual Account Structure can be created using this service. Through this service, Virtual accounts can be mapped to a real account and the structure can be linked to various virtual accounts as per the customer requirement",
    "parentcategory": "Account Services",
    "displayName": "Account Structure"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-account-services/BranchParametersService.yaml",
    "description": "This services is used to maintain the parameters that are controlled at branch. OBVAM maintains account and IBAN parameters for a branch. It has various parameters to validate the generated account number such as account mask, start and end account number for auto generation, and to validate IBAN format mask for BBAN format mask and data type.",
    "parentcategory": "Account Services",
    "displayName": "Branch Parameters for Virtual Account"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-account-services/balanceServicesApi.yaml",
    "description": "API for Virtual Account Balance Operations",
    "parentcategory": "Account Services",
    "displayName": "Balance for Virtual Account"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-account-services/CreditLimitVaLinkageService.yaml",
    "description": "This service is used to link Internal credit limit to a virtual account. Limit amount can either be mentioned in amount or percentage. During balance calculation, this maintenance will also be included to arrive at effective available balance.",
    "parentcategory": "Account Services",
    "displayName": "Credit Limit Virtual Account Linkage Service"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-account-services/InternalCreditLimitService.yaml",
    "description": "Internal Credit Limit is a facility provided at Real customer level. Through this service, a customer can offer credit line facility to its subsidiaries. A Credit line facility can be linked to multiple virtual accounts that belong to same real customer number.",
    "parentcategory": "Account Services",
    "displayName": "Internal Credit Limit Service"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-account-services/LineLimitUtilizationService.yaml",
    "description": "This Service API is used to track internal credit limit utilization and de-utilization for a virtual account at both contract/transaction and account level. Also this provides the maximum available line amount for a given Line ID.",
    "parentcategory": "Account Services",
    "displayName": "Line Limit Utilization Service"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-account-services/SweepAndValueDatedBalService.yaml",
    "description": "This is a service for fetching value dated Balance details and sweep eligilbe balance for a given virtual account and its value date.",
    "parentcategory": "Account Services",
    "displayName": "Sweep Eligible and Value Dated Balance"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-account-services/ValueDatedBalanceService.yaml",
    "description": "API for VD Balance Operations.",
    "parentcategory": "Account Services",
    "displayName": "Value Dated Balance"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-account-services/VAClosureStatusService.yaml",
    "description": "This is the API used to track the status of Virtual Account Closure Request.",
    "parentcategory": "Account Services",
    "displayName": "Virtual Account Closure Status"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-account-services/VASanctionStatusService.yaml",
    "description": "This Service API is used to handle sanction status for a virtual account.",
    "parentcategory": "Account Services",
    "displayName": "Virtual Account Sanction Status"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-account-services/AccountClosureServiceApi.yaml",
    "description": "This Service API is used to create Virtual Account Closure for Virtual Entity.",
    "parentcategory": "Account Services",
    "displayName": "Account Closure API"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-account-services/AccountH2HFileService.yaml",
    "description": "This service is used for file upload.",
    "parentcategory": "Account Services",
    "displayName": "Account File Upload"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-account-services/AccountTxnRestrService.yaml",
    "description": "This service is used for Account level transaction restrictions.",
    "parentcategory": "Account Services",
    "displayName": "Account Transaction Restriction"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-account-services/AccountTxnUtilizationService.yaml",
    "description": "This service is used for retrieving the Transaction Utilization for a given Virtual Account.",
    "parentcategory": "Account Services",
    "displayName": "Account Transaction Utilization"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-core-services/AccFcltyService.yaml",
    "description": "This is the Service for Account Facility Creation and maintenance. This function is used to define the real customer and its real accounts for which virtual accounts can be created. It has a Real Customer LOV field which has one to many Relation with Real Accounts of that customer.",
	"parentcategory": "Core Services",
    "displayName": "Account Facility"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-core-services/CcyAccGroupService.yaml",
    "description": "This service is used to maintain multi-currency account group. It permits linking a real customer with its account and currency with a unique combination of account currency pair. In an account group, currency cannt be repeated",
    "parentcategory": "Core Services",
    "displayName": "OBVAM Multi Currency Account Groups"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-core-services/AccountProductService.yaml",
    "description": "This service can create Corporate Specific Virtual Account products. These products are further used to create virtual accounts. Product level preferences must be enabled before enabling the preference for account.",
    "parentcategory": "Core Services",
    "displayName": "OBVAM-Core Account Products"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-eca-services/ECABlockService.yaml",
    "description": "ecablock Service allows to block amount on virtual accounts",
    "parentcategory": "ECA Services",
    "displayName": "Amount Block"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-eca-services/RateQueueService.yaml",
    "description": "Amount blocks Service allows to block amount on virtual accounts and it allows to input user rate from an exchange queue",
    "parentcategory": "ECA Services",
    "displayName": "Exchange Rate Queue"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-entity-services/BankParametersService.yaml",
    "description": "This services is used to maintain entity mask and bank code for bank in OBVAM, any UI application can be invoked to validate and persist the data.",
    "parentcategory": "Entity Services",
    "displayName": "Bank Parameters for Virtual Entity"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-entity-services/EntityService.yaml",
    "description": "This service is used to maintain virtual entity and is responsible for validating provided data and maintaining valid virtual entity account to the mask maintained for a bank parameter.",
    "parentcategory": "Entity Services",
    "displayName": "Virtual Entity"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/external-interest-engine-services/InterestLiquidationService.yaml",
    "description": "Interest accrued for a virtual account can be liquidated using this service.",
    "parentcategory": "External Interest Engine Services",
    "displayName": "Interest Liquidation"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-identifier-services/RemitterIdService.yaml",
    "description": "This service provides an endpoint to fetch the remitterIds",
    "parentcategory": "Identifier Services",
    "displayName": "RemitterId Service"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-identifier-services/IdmapService.yaml",
    "description": "This service provides an endpoint to fetch the active identifiers for a customer and is required for remittance creation",
    "parentcategory": "Identifier Services",
    "displayName": "Idmap Service"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-identifier-services/RemitterIdServiceNEW.YAML",
    "description": "This service is used to create remitter list ID. Remitter list ID is mapped to an identifier rule.",
    "parentcategory": "Identifier Services",
    "displayName": "Remitter Service"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-internal-transfer-services/InternalTransfersService.yaml",
    "description": "This services is used for internal transfer that enables balance transfer between two virtual account that belong to a real account.",
    "parentcategory": "Internal Transfer Services",
    "displayName": "Internal Transfer"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-statement-services/AccountStatementService.yaml",
    "description": "This service is used to generate individual and consolidated account statement.",
    "parentcategory": "Statement Services",
    "displayName": "Account Statement"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-statement-services/EntriesService.yaml",
    "description": "This is a service used by the transaction services for inserting data required for statement generation.",
    "parentcategory": "Statement Services",
    "displayName": "Transaction Entries"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-statement-services/StatementPreferencesService.yaml",
    "description": "This is a service used for choosing Statement Preference.",
    "parentcategory": "Statement Services",
    "displayName": "Statement Preference"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-transaction-journal-services/transactionService.yaml",
    "description": "This is the API for Transaction Operations in OBVAM",
    "parentcategory": "Transaction Journal Services",
    "displayName": "Journal Online"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-transaction-journal-services/TxnExchQueueService.yaml",
    "description": "This is a API for hosting Transaction exchange rate queue.",
    "parentcategory": "Transaction Journal Services",
    "displayName": "Transaction Exchange Queue"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/vamlm-charge-services/chargesInqService.yaml",
    "description": "This API facilitates enquiry of all charges associated to a customer within an application based on the selected filters",
    "parentcategory": "Charge Services",
    "displayName": "Charge Inquiry"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/vamlm-charge-services/ChargesService.yaml",
    "description": "This API facilitates charge definition query.",
    "parentcategory": "Charge Services",
    "displayName": "Charge Definition"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/vamlm-charge-services/ExternalChgCalculation.yaml",
    "description": "This API facilitates enquiry for external charge calculation.",
    "parentcategory": "Charge Services",
    "displayName": "External Charge Calculation"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/vamlm-charge-services/ExternalChgPosting.yaml",
    "description": "This API facilitates enquiry for external charge posting.",
    "parentcategory": "Charge Services",
    "displayName": "External Charge Posting"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-account-services/TxnCodeMaintService.yaml",
    "description": "This is the API for TxnCodeMaintService Operations",
    "parentcategory": "Account Services",
    "displayName": "Transaction Code Operations"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-account-services/UncollectedAmtReleaseService.yaml",
    "description": "Uncollected Amount Manual Release Service API",
    "parentcategory": "Account Services",
    "displayName": "Uncollected Amount Manual Release"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-projection-services/CurrencyWiseBalanceService.yaml",
    "description": "API for fetching currency wise balance for virtual account numbers for a real customer number",
    "parentcategory": "Projection Services",
    "displayName": "Currency wise balance"
},
{
    "index": subCategoriesCount++,
    "yaml": "../../OBVAM/obvam-projection-services/distinctCcyService.yaml",
    "description": "API for distinct virtual account currency for a real customer",
    "parentcategory": "Projection Services",
    "displayName": "Distinct Virtual Account Currency"
}
]}