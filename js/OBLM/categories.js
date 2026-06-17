var categories = {
"mastercategories":[
{
    "index": 0,
	"description": "OBLM Service APIs use HTTP verbs and a RESTful endpoint structure. Request and response payloads are formatted as JSON.\n\n",
    "name": "Overview"
},
{
	"index": 1,
	"description": "",
	"name": "Interest Input Services"
},
{
	"index": 2,
	"description": "",
	"name": "Online Liquidation Services"
},
{
	"index": 3,
	"description": "",
	"name": "Batch Services"
},
{
	"index": 4,
	"description": "",
	"name": "Cash Concentration Services"
},
{
	"index": 5,
	"description": "",
	"name": "Dashboard Services"
},
{
	"index": 6,
	"description": "",
	"name": "ICL Services"
},
{
	"index": 7,
	"description": "",
	"name": "Integration Services"
},
{
	"index": 8,
	"description": "",
	"name": "Maintenance Services"
},
{
	"index": 9,
	"description": "",
	"name": "Messaging Services"
},
{
	"index": 10,
	"description": "",
	"name": "Pool Services"
},
{
	"index": 11,
	"description": "",
	"name": "Report Services"
},
{
	"index": 12,
	"description": "",
	"name": "RTL Services"
},
{
	"index": 13,
	"description": "",
	"name": "Structure Services"
},
{
	"index": 14,
	"description": "",
	"name": "Sweep Services"
},
{
    "index": 15,
    "description": "",
    "name": "Charge Services"
},
]
};
var subCategories = {
	"list":[
	{
		"index": 1,
		"yaml": "oblm-batch-services/batchData.yaml",
		"description": "This is a sample server batch server.",
		"parentcategory": "Batch Services",
		"displayName": "Batch Services - Batch Data related API"
	},
	{
		"index": 2,
		"yaml": "oblm-batch-services/batchProcess.yaml",
		"description": "This is a sample server batch server.",
		"parentcategory": "Batch Services",
		"displayName": "Batch Services - Batch Process related API"
	},
	{
		"index": 3,
		"yaml": "oblm-batch-services/fileUpload.yaml",
		"description": "This is a sample server batch server.",
		"parentcategory": "Batch Services",
		"displayName": "Batch Services - File Upload related API"
	},
	{
		"index": 4,
		"yaml": "oblm-batch-services/Frequency.yaml",
		"description": "This is a sample server frequency server.",
		"parentcategory": "Batch Services",
		"displayName": "Batch Services - Frequency related API"
	},
	{
		"index": 5,
		"yaml": "oblm-batch-services/JobScheduler.yaml",
		"description": "This is a sample server job scheduler server.",
		"parentcategory": "Batch Services",
		"displayName": "Batch Services - Job Scheduler related API"
	},
	{
		"index": 6,
		"yaml": "oblm-batch-services/scheduledsweeps.yaml",
		"description": "This is a sample  server.",
		"parentcategory": "Batch Services",
		"displayName": "Batch Services - Scheduled Sweeps related API"
	},
	{
		"index": 7,
		"yaml": "oblm-cash-concentration-services/SweepInstruction.yaml",
		"description": "This is a sample server instruction server.",
		"parentcategory": "Cash Concentration Services",
		"displayName": "Cash Concentration Services - Sweep Instruction related API"
	},
	{
		"index": 8,
		"yaml": "oblm-cash-concentration-services/SweepProducts.yaml",
		"description": "This is a sample server sweepproducts server.",
		"parentcategory": "Cash Concentration Services",
		"displayName": "Cash Concentration Services - Sweep Products related API"
	},
	{
		"index": 9,
		"yaml": "oblm-dashboard-services/account.yaml",
		"description": "This is a sample server account server.",
		"parentcategory": "Dashboard Services",
		"displayName": "Dashboard Services - Account related API"
	},
	{
		"index": 10,
		"yaml": "oblm-dashboard-services/accountmap.yaml",
		"description": "This is a sample server account map server.",
		"parentcategory": "Dashboard Services",
		"displayName": "Dashboard Services - Account Map related API"
	},
	{
		"index": 11,
		"yaml": "oblm-dashboard-services/currencybalance.yaml",
		"description": "This is a sample server currency balance server.",
		"parentcategory": "Dashboard Services",
		"displayName": "Dashboard Services - Currency Balance related API"
	},
	{
		"index": 12,
		"yaml": "oblm-dashboard-services/currencyliability.yaml",
		"description": "This is a sample server currency liability server.",
		"parentcategory": "Dashboard Services",
		"displayName": "Dashboard Services - Currency Liability related API"
	},
	{
		"index": 13,
		"yaml": "oblm-dashboard-services/Customer.yaml",
		"description": "This is a sample server Customer server.",
		"parentcategory": "Dashboard Services",
		"displayName": "Dashboard Services - Customer related API"
	},
	{
		"index": 14,
		"yaml": "oblm-dashboard-services/customeraccountbalance.yaml",
		"description": "This is a sample server customer account balance server.",
		"parentcategory": "Dashboard Services",
		"displayName": "Dashboard Services - Customer Account Balance related API"
	},
	{
		"index": 15,
		"yaml": "oblm-dashboard-services/effectivebalance.yaml",
		"description": "This is a sample server effective balance server.",
		"parentcategory": "Dashboard Services",
		"displayName": "Dashboard Services - Effective Balance related API"
	},
	{
		"index": 16,
		"yaml": "oblm-dashboard-services/events.yaml",
		"description": "This is a sample server events server.",
		"parentcategory": "Dashboard Services",
		"displayName": "Dashboard Services - Events related API"
	},
	{
		"index": 17,
		"yaml": "oblm-dashboard-services/interestdetails.yaml",
		"description": "This is a sample server interest details server.",
		"parentcategory": "Dashboard Services",
		"displayName": "Dashboard Services - Interest Details related API"
	},
	{
		"index": 18,
		"yaml": "oblm-dashboard-services/investmentdetails.yaml",
		"description": "This is a sample server investment details server.",
		"parentcategory": "Dashboard Services",
		"displayName": "Dashboard Services - Investment Details related API"
	},
	{
		"index": 19,
		"yaml": "oblm-dashboard-services/rmdashboard.yaml",
		"description": "This is a sample server rm dashboard server.",
		"parentcategory": "Dashboard Services",
		"displayName": "Dashboard Services - RM Dashboard related API"
	},
	{
		"index": 20,
		"yaml": "oblm-dashboard-services/scheduledsweeps.yaml",
		"description": "This is a sample server scheduled sweeps server.",
		"parentcategory": "Dashboard Services",
		"displayName": "Dashboard Services - Scheduled Sweeps related API"
	},
	{
		"index": 21,
		"yaml": "oblm-dashboard-services/topcrossbordersweeps.yaml",
		"description": "This is a sample server top cross border sweeps server.",
		"parentcategory": "Dashboard Services",
		"displayName": "Dashboard Services - Top Cross Border Sweeps related API"
	},
	{
		"index": 22,
		"yaml": "oblm-dashboard-services/topcustomersbalance.yaml",
		"description": "This is a sample server top customers balance server.",
		"parentcategory": "Dashboard Services",
		"displayName": "Dashboard Services - topcustomersbalance related API"
	},
	{
		"index": 23,
		"yaml": "oblm-dashboard-services/topcustomersweeps.yaml",
		"description": "This is a sample server top customer sweeps server.",
		"parentcategory": "Dashboard Services",
		"displayName": "Dashboard Services - Top Customer Sweeps related API"
	},
	{
		"index": 24,
		"yaml": "oblm-dashboard-services/UserLinkage.yaml",
		"description": "This is a sample server rmLinkage server.",
		"parentcategory": "Dashboard Services",
		"displayName": "Dashboard Services - UserLinkage related API"
	},
	{
		"index": 25,
		"yaml": "oblm-icl-services/Customer.yaml",
		"description": "This is a sample server Customer server.",
		"parentcategory": "ICL Services",
		"displayName": "ICL Services - Customer related API"
	},
	{
		"index": 26,
		"yaml": "oblm-icl-services/Loan.yaml",
		"description": "This is a sample server Loan server.",
		"parentcategory": "ICL Services",
		"displayName": "ICL Services - Loan related API"
	},
	{
		"index": 27,
		"yaml": "oblm-icl-services/LoanTransaction.yaml",
		"description": "This is a sample server Loan Transaction server.",
		"parentcategory": "ICL Services",
		"displayName": "ICL Services - Loan Transaction related API"
	},
	{
		"index": 28,
		"yaml": "oblm-integration-services/BalanceFetch.yaml",
		"description": "This is a sample server balance server.",
		"parentcategory": "Integration Services",
		"displayName": "Integration Services - BalanceFetch related API"
	},
	{
		"index": 29,
		"yaml": "oblm-integration-services/Event.yaml",
		"description": "This is a sample server eventlog server.",
		"parentcategory": "Integration Services",
		"displayName": "Integration Services - Event related API"
	},
	{
		"index": 30,
		"yaml": "oblm-integration-services/ExternalSystem.yaml",
		"description": "This is a sample server external system setup server.",
		"parentcategory": "Integration Services",
		"displayName": "Integration Services - ExternalSystem relared API"
	},
	{
		"index": 31,
		"yaml": "oblm-integration-services/ExternalSystemLog.yaml",
		"description": "This is a sample server external system log server.",
		"parentcategory": "Integration Services",
		"displayName": "Integration Services - ExternalSystemLog related API"
	},
	{
		"index": 32,
		"yaml": "oblm-integration-services/Interface.yaml",
		"description": "This is a sample server interface server.",
		"parentcategory": "Integration Services",
		"displayName": "Integration Services - Interface related API"
	},
	{
		"index": 33,
		"yaml": "oblm-integration-services/PaymentInterface.yaml",
		"description": "This is a sample server payment interface server.",
		"parentcategory": "Integration Services",
		"displayName": "Integration Services - PaymentInterface"
	},
	{
		"index": 34,
		"yaml": "oblm-integration-services/TransactionLog.yaml",
		"description": "This is a sample server transactionLog server.",
		"parentcategory": "Integration Services",
		"displayName": "Integration Services - TransactionLog related API"
	},
	{
		"index": 35,
		"yaml": "oblm-maintenance-services/Account.yaml",
		"description": "This is a sample server account server.",
		"parentcategory": "Maintenance Services",
		"displayName": "Maintenance Services - Account related API"
	},
	{
		"index": 36,
		"yaml": "oblm-maintenance-services/AccountService.yaml",
		"description": "This is a sample server account service server.",
		"parentcategory": "Maintenance Services",
		"displayName": "Maintenance Services - AccountService related API"
	},
	{
		"index": 37,
		"yaml": "oblm-maintenance-services/ApplicationParameters.yaml",
		"description": "This is a sample server application parameters server.",
		"parentcategory": "Maintenance Services",
		"displayName": "Maintenance Services - ApplicationParameters related API"
	},
	{
		"index": 38,
		"yaml": "oblm-maintenance-services/BankParameters.yaml",
		"description": "This is a sample server bank parameters server.",
		"parentcategory": "Maintenance Services",
		"displayName": "Maintenance Services - BankParameters related API"
	},
	{
		"index": 39,
		"yaml": "oblm-maintenance-services/BranchParameters.yaml",
		"description": "This is a sample server BranchParameters server.",
		"parentcategory": "Maintenance Services",
		"displayName": "Maintenance Services - Branch Parameters related API"
	},
	{
		"index": 40,
		"yaml": "oblm-maintenance-services/Cities.yaml",
		"description": "This is a sample server sweepproducts server.",
		"parentcategory": "Maintenance Services",
		"displayName": "Maintenance Services - Sweep Products related API"
	},
	{
		"index": 41,
		"yaml": "oblm-maintenance-services/CoreAccount.yaml",
		"description": "This is a sample server coreaccounts server.",
		"parentcategory": "Maintenance Services",
		"displayName": "Maintenance Services - Core Accounts related API"
	},
	{
		"index": 42,
		"yaml": "oblm-maintenance-services/CoreVirtualAccountService.yaml",
		"description": "This is a sample server core virtual accounts server.",
		"parentcategory": "Maintenance Services",
		"displayName": "Maintenance Services - Core Virtual Account Service related API"
	},
	{
		"index": 43,
		"yaml": "oblm-maintenance-services/CountryParameters.yaml",
		"description": "This is a sample server country parameters server.",
		"parentcategory": "Maintenance Services",
		"displayName": "Maintenance Services - CountryParameters related API"
	},
	{
		"index": 44,
		"yaml": "oblm-maintenance-services/CurrencyCutoff.yaml",
		"description": "This is a sample server currency cutoff server.",
		"parentcategory": "Maintenance Services",
		"displayName": "Maintenance Services - currency cutoff related API"
	},
	{
		"index": 45,
		"yaml": "oblm-maintenance-services/CurrencyParameters.yaml",
		"description": "This is a sample server currency parameters server.",
		"parentcategory": "Maintenance Services",
		"displayName": "Maintenance Services - CurrencyParameters related API"
	},
	{
		"index": 46,
		"yaml": "oblm-maintenance-services/Customer.yaml",
		"description": "This is a sample server customer server.",
		"parentcategory": "Maintenance Services",
		"displayName": "Maintenance Services - Customer related API"
	},
	{
		"index": 47,
		"yaml": "oblm-maintenance-services/CustomerService.yaml",
		"description": "This is a sample server customer server.",
		"parentcategory": "Maintenance Services",
		"displayName": "Maintenance Services - Customer Service related API"
	},
	{
		"index": 48,
		"yaml": "oblm-maintenance-services/Event.yaml",
		"description": "This is a sample server account maintenance server.",
		"parentcategory": "Maintenance Services",
		"displayName": "Maintenance Services - Event related API"
	},
	{
		"index": 49,
		"yaml": "oblm-maintenance-services/Frequency.yaml",
		"description": "This is a sample server frequency server.",
		"parentcategory": "Maintenance Services",
		"displayName": "Maintenance Services - Frequency related API"
	},
	{
		"index": 50,
		"yaml": "oblm-maintenance-services/IntAccountGroup.yaml",
		"description": "This is a sample server interest account group server.",
		"parentcategory": "Maintenance Services",
		"displayName": "Maintenance Services - IntAccountGroup related API"
	},
	{
		"index": 51,
		"yaml": "oblm-maintenance-services/MessageType.yaml",
		"description": "This is a sample server sweepproducts server.",
		"parentcategory": "Maintenance Services",
		"displayName": "Maintenance Services - MessageType related API"
	},
	{
		"index": 52,
		"yaml": "oblm-maintenance-services/SweepInstruction.yaml",
		"description": "This is a sample server instruction server.",
		"parentcategory": "Maintenance Services",
		"displayName": "Maintenance Services - Sweep Instruction related API"
	},
	{
		"index": 53,
		"yaml": "oblm-maintenance-services/TimeZone.yaml",
		"description": "This is a sample server timezone server.",
		"parentcategory": "Maintenance Services",
		"displayName": "Maintenance Services - TimeZone related API"
	},
	{
		"index": 54,
		"yaml": "oblm-maintenance-services/UnAuthRecords.yaml",
		"description": "This is a sample server sweepproducts server.",
		"parentcategory": "Maintenance Services",
		"displayName": "Maintenance Services - UnAuthRecords related API"
	},
	{
		"index": 55,
		"yaml": "oblm-maintenance-services/UserLinkage.yaml",
		"description": "This is a sample server rmlinkage server.",
		"parentcategory": "Maintenance Services",
		"displayName": "Maintenance Services - UserLinkage related API"
	},
	{
		"index": 56,
		"yaml": "oblm-pool-services/pool.yaml",
		"description": "This is a sample server pool batch server.",
		"parentcategory": "Pool Services",
		"displayName": "Pool Services - Pool related API"
	},
	{
		"index": 57,
		"yaml": "oblm-pool-services/realloc.yaml",
		"description": "This is a sample server pool reallocation server.",
		"parentcategory": "Pool Services",
		"displayName": "Pool Services - Realloc related API"
	},
	{
		"index": 58,
		"yaml": "oblm-report-services/CustomerReport.yaml",
		"description": "This is a sample server customer server.",
		"parentcategory": "Report Services",
		"displayName": "Report Services - Customer Report related API"
	},
	{
		"index": 59,
		"yaml": "oblm-report-services/ExceptionReport.yaml",
		"description": "This is a sample server.",
		"parentcategory": "Report Services",
		"displayName": "Report Services - Exception Report related API"
	},
	{
		"index": 60,
		"yaml": "oblm-report-services/InterestAccrualReport.yaml",
		"description": "This is a sample server interestAccrual server.",
		"parentcategory": "Report Services",
		"displayName": "Report Services - Interest Accrual Report related API"
	},
	{
		"index": 61,
		"yaml": "oblm-report-services/InterestPaidReport.yaml",
		"description": "This is a sample server InterestPaid server.",
		"parentcategory": "Report Services",
		"displayName": "Report Services - Interest Paid Report related API"
	},
	{
		"index": 62,
		"yaml": "oblm-report-services/InterestReallocationReport.yaml",
		"description": "This is a sample server InterestReallocation server.",
		"parentcategory": "Report Services",
		"displayName": "Report Services - Interest Reallocation Report related API"
	},
	{
		"index": 63,
		"yaml": "oblm-report-services/QCInterfaceReport.yaml",
		"description": "This is a sample server QC Interface server.",
		"parentcategory": "Report Services",
		"displayName": "Report Services - QC Interface Report related API"
	},
	{
		"index": 64,
		"yaml": "oblm-report-services/Reports.yaml",
		"description": "This is Reports Microservice.",
		"parentcategory": "Report Services",
		"displayName": "Report Services - Reports related API"
	},
	{
		"index": 65,
		"yaml": "oblm-report-services/StructureContributionReport.yaml",
		"description": "This is a sample server structurereport server.",
		"parentcategory": "Report Services",
		"displayName": "Report Services - Structure Contribution Report related API"
	},
	{
		"index": 66,
		"yaml": "oblm-report-services/StructureCreatedReport.yaml",
		"description": "This is a sample server structurereport server.",
		"parentcategory": "Report Services",
		"displayName": "Report Services - Structure Created Report related API"
	},
	{
		"index": 67,
		"yaml": "oblm-report-services/StructureDetailsReport.yaml",
		"description": "This is a sample server structurereport server.",
		"parentcategory": "Report Services",
		"displayName": "Report Services - Structure Details Report related API"
	},
	{
		"index": 68,
		"yaml": "oblm-report-services/StructureModifiedReport.yaml",
		"description": "This is a sample server structurereport server.",
		"parentcategory": "Report Services",
		"displayName": "Report Services - Structure Modified Report related API"
	},
	{
		"index": 69,
		"yaml": "oblm-report-services/SweepStructureReport.yaml",
		"description": "This is a sample server customer server.",
		"parentcategory": "Report Services",
		"displayName": "Report Services - SweepStructureReport related API"
	},
	{
		"index": 70,
		"yaml": "oblm-report-services/SweepSummaryReport.yaml",
		"description": "This is a sample server customer server.",
		"parentcategory": "Report Services",
		"displayName": "Report Services - SweepSummaryReport related API"
	},
	{
		"index": 71,
		"yaml": "oblm-rtl-services/Account.yaml",
		"description": "This is a sample server account maintenance server.",
		"parentcategory": "RTL Services",
		"displayName": "RTL Services - Account related API"
	},
	{
		"index": 72,
		"yaml": "oblm-rtl-services/RtlParam.yaml",
		"description": "This is a sample server realtimeliquidityparameter server.",
		"parentcategory": "RTL Services",
		"displayName": "RTL Services - RtlParam related API"
	},
	{
		"index": 73,
		"yaml": "oblm-rtl-services/RtlTxnMonitor.yaml",
		"description": "This is a sample server realtimeliquiditytransaction server.",
		"parentcategory": "RTL Services",
		"displayName": "RTL Services - RtlTxnMonitor related API"
	},
	{
		"index": 74,
		"yaml": "oblm-rtl-services/Structure.yaml",
		"description": "This is a sample server realtimeliquiditystructure server.",
		"parentcategory": "RTL Services",
		"displayName": "RTL Services - Structure related API"
	},
	{
		"index": 75,
		"yaml": "oblm-structure-services/IeStructure.yaml",
		"description": "This is a sample server interestenhancement server.",
		"parentcategory": "Structure Services",
		"displayName": "Structure Services - IeStructure related API"
	},
	{
		"index": 76,
		"yaml": "oblm-structure-services/StructureMaintenance.yaml",
		"description": "This is a sample server structure server.",
		"parentcategory": "Structure Services",
		"displayName": "Structure Services - Structure Maintenance related API"
	},
	{
		"index": 77,
		"yaml": "oblm-sweep-services/Contribution.yaml",
		"description": "This is a sample server Contribution server.",
		"parentcategory": "Sweep Services",
		"displayName": "Sweep Services - Contribution related API"
	},
	{
		"index": 78,
		"yaml": "oblm-sweep-services/ICVDBAL.yaml",
		"description": "This is a sample server IC Input  server.",
		"parentcategory": "Sweep Services",
		"displayName": "Sweep Services - ICVDBAL related API"
	},
	{
		"index": 79,
		"yaml": "oblm-sweep-services/realloc.yaml",
		"description": "This is a sample server Sweep Reallocation server.",
		"parentcategory": "Sweep Services",
		"displayName": "Sweep Services - realloc related API"
	},
	{
		"index": 80,
		"yaml": "oblm-sweep-services/ReverseSweepMonitor.yaml",
		"description": "This is a sample server reversesweepmonitor server.",
		"parentcategory": "Sweep Services",
		"displayName": "Sweep Services - ReverseSweepMonitor related API"
	},
	{
		"index": 81,
		"yaml": "oblm-sweep-services/ReverseSweepService.yaml",
		"description": "This is a sample server sweep server.",
		"parentcategory": "Sweep Services",
		"displayName": "Sweep Services - ReverseSweepService related API"
	},
	{
		"index": 82,
		"yaml": "oblm-sweep-services/SweepLog.yaml",
		"description": "This is a sample server sweepmonitor server.",
		"parentcategory": "Sweep Services",
		"displayName": "Sweep Services - Sweep Log related API"
	},
	{
		"index": 83,
		"yaml": "oblm-sweep-services/SweepMaster.yaml",
		"description": "This is a sample server Sweep Master server.",
		"parentcategory": "Sweep Services",
		"displayName": "Sweep Services - SweepMaster related API"
	},
	{
		"index": 84,
		"yaml": "oblm-sweep-services/SweepService.yaml",
		"description": "This is a sample server sweep server.",
		"parentcategory": "Sweep Services",
		"displayName": "Sweep Services - SweepService related API"
	},
	{
		"index": 85,
		"yaml": "oblm-sweep-services/SystemAccount.yaml",
		"description": "This is a sample server sweepmonitor server.",
		"parentcategory": "Sweep Services",
		"displayName": "Sweep Services - SystemAccount related API"
	},
	{
		"index": 86,
		"yaml": "oblm-messaging-services/Account.yaml",
		"description": "This is a sample account maintenance server.",
		"parentcategory": "Messaging Services",
		"displayName": "Messaging Services - Account related API"
	},
	{
		"index": 87,
		"yaml": "oblm-messaging-services/BalanceFetch.yaml",
		"description": "This is a sample balance server.",
		"parentcategory": "Messaging Services",
		"displayName": "Messaging Services - Balance Fetch related API"
	},
	{
		"index": 88,
		"yaml": "oblm-messaging-services/BankParameters.yaml",
		"description": "This is a sample bank server.",
		"parentcategory": "Messaging Services",
		"displayName": "Messaging Services - Bank Parameters related API"
	},
	{
		"index": 89,
		"yaml": "oblm-messaging-services/BranchParameters.yaml",
		"description": "This is a sample branch server.",
		"parentcategory": "Messaging Services",
		"displayName": "Messaging Services - Branch Parameters related API"
	},
	{
		"index": 90,
		"yaml": "oblm-messaging-services/ExternalMessage.yaml",
		"description": "This is a sample external message api.",
		"parentcategory": "Messaging Services",
		"displayName": "Messaging Services - External Message related API"
	},
	{
		"index": 91,
		"yaml": "oblm-messaging-services/ExternalMessageLog.yaml",
		"description": "This is a sample external message log server.",
		"parentcategory": "Messaging Services",
		"displayName": "Messaging Services - External Message Log related API"
	},
	{
		"index": 92,
		"yaml": "oblm-messaging-services/SweepLog.yaml",
		"description": "This is a sample sweepmonitor server.",
		"parentcategory": "Messaging Services",
		"displayName": "Messaging Services - Sweep Log related API"
	},
	{
		"index": 93,
		"yaml": "../../OBLM/obic-interest-input-services/icquery.yaml",
		"description": "These services provide a single point of entry to initiate various processes. " +
				"\nCreate, read and modify below resources" +
				"\nProducs, Group mappings, Account related queries",
		"parentcategory": "Interest Input Services",
		"displayName": "Interest Input Services  - Account and Product related api"
	},
	{
		"index": 94,
		"yaml": "../../OBLM/obic-interest-input-services/intInput.yaml",
		"description": "These services provide a single point of entry to initiate various processes. " +
				"\nCreate, read and modify below resources" +
				"\nSpecial/General rates, Ic Accounts",
		"parentcategory": "Interest Input Services",
		"displayName": "Interest Input Services  - Rate and Account related api"
	},
	{
		"index": 95,
		"yaml": "../../OBLM/obic-online-liquidation-services/onliq.yaml",
		"description": "This Service is used to maintain Core Branch Parameters." +
				"\nThis Service will allow us to maintain the parameters for branch that are common across the services using the branch service." +
				"\nBranch Code Uniquely Distinguishes a Branch.",
		"parentcategory": "Online Liquidation Services",
		"displayName": "Online Liquidation Services  - Branch parameter related api"
	},
	{
		"index": 96,
		"yaml": "../../OBLM/vamlm-charge-services/chargesInqService.yaml",
		"description": "This API facilitates enquiry of all charges associated to a customer within an application based on the selected filters",
		"parentcategory": "Charge Services",
		"displayName": "Charge Inquiry"
	},
	{
		"index": 97,
		"yaml": "../../OBLM/vamlm-charge-services/ChargesService.yaml",
		"description": "This API facilitates charge definition query.",
		"parentcategory": "Charge Services",
		"displayName": "Charge Definition"
	}
	]
}
