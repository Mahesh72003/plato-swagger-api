var categories = {
"mastercategories":[
{
    "index": 0,
"description": "OFLO REST APIs use HTTP verbs and a RESTful endpoint structure. Request and response payloads are formatted as JSON.\n\nOFLO REST API can be accessed using the following URL format\n\nhttp://host-name:port/{servicename}/{resource}/{resource-specific-parameters}\n-	Host name is the domain.\n-	The resource represents one of the OFLO REST resources. \n-	The resource-specific part of the URL specifies the actual resource being referenced.\n\n",
    "name": "Overview"
},
{
    "index": 1,
	"description": "",
    "name": "obremo-rpm-process-driver-services"
},
{
    "index": 2,
    "description": "",
    "name": "obremo-rpm-projection-services"
},
{
    "index": 3,
    "description": "",
    "name": "obremo-rpm-businessproductdetails-services"
},
{
    "index": 4,
    "description": "",
    "name": "obremo-rpm-businessprocess-services"
},
{
    "index": 5,
    "description": "",
    "name": "obremo-rpm-maintenance-services"
},
{
    "index": 6,
    "description": "",
    "name": "obremo-rpm-sav-account-service"
},
{
    "index": 7,
    "description": "",
    "name": "obremo-rpm-term-deposit-service"
},
{
    "index": 8,
    "description": "",
    "name": "obremo-rpm-lo-loanapplications"
},
{
    "index": 9,
    "description": "",
    "name": "obremo-rpm-cmn-applicantservices"
},
{
    "index": 10,
    "description": "",
    "name": "obremo-rpm-cmn-scorecardservices"
},
{
    "index": 11,
    "description": "",
    "name": "obremo-rpm-cmn-hostservices"
},
{
    "index": 12,
    "description": "",
    "name": "obremo-rpm-cmn-ipaservices"
},
{
    "index": 13,
    "description": "",
    "name": "obremo-rpm-creditcardapplication-services"
},
{
    "index": 14,
    "description": "",
    "name": "obremo-rpm-cmn-collateralservices"
},
{
    "index": 15,
    "description": "",
    "name": "obremo-rpm-cmn-mlservice"
}
]
};
var subCategories = {
"list":[
	{
    "index": 1,
    "yaml": "OFLO/obremo-rpm-process-driver-services/application_transaction_master.yaml",
    "description": "Application Transaction Master contains details of application numbers and related process reference numbers",
	"parentcategory": "obremo-rpm-process-driver-services",
    "displayName": "Application Transaction Master"
},
{
    "index": 2,
    "yaml": "OFLO/obremo-rpm-process-driver-services/cart.yaml",
    "description": "APIs for inserting/deleting from Product Catalogue Cart",
	"parentcategory": "obremo-rpm-process-driver-services",
    "displayName": "Cart"
},
{
    "index": 3,
    "yaml": "OFLO/obremo-rpm-process-driver-services/comment_service.yaml",
    "description": "APIs for storing comments",
	"parentcategory": "obremo-rpm-process-driver-services",
    "displayName": "Comments"
},
{
    "index": 4,
    "yaml": "OFLO/obremo-rpm-process-driver-services/process_driver.yaml",
    "description": "APIs Process Driver operations",
	"parentcategory": "obremo-rpm-process-driver-services",
    "displayName": "Process Driver Services"
},
{
    "index": 5,
    "yaml": "OFLO/obremo-rpm-process-driver-services/process_driver_service.yaml",
    "description": "APIs Process Driver operations for External Systems",
	"parentcategory": "obremo-rpm-process-driver-services",
    "displayName": "Process Driver Services for External System"
},

{
    "index": 6,
    "yaml": "OFLO/obremo-rpm-process-driver-services/product_details.yaml",
    "description": "APIs Process Driver operations for Product Details",
	"parentcategory": "obremo-rpm-process-driver-services",
    "displayName": "Process Driver Product Details"
},
{
    "index": 7,
    "yaml": "OFLO/obremo-rpm-projection-services/batchProcessData.yaml",
    "description": "APIs for fetching data for batch operations",
    "parentcategory": "obremo-rpm-projection-services",
    "displayName": "Batch Process Data"
},
{
    "index": 8,
    "yaml": "OFLO/obremo-rpm-projection-services/dashboard.yaml",
    "description": "APIs for dashboard data",
    "parentcategory": "obremo-rpm-projection-services",
    "displayName": "Dashboard"
},
{
    "index": 9,
    "yaml": "OFLO/obremo-rpm-projection-services/inquiry.yaml",
    "description": "APIs for application enquiry",
    "parentcategory": "obremo-rpm-projection-services",
    "displayName": "Inquiry"
},
{
    "index": 10,
    "yaml": "OFLO/obremo-rpm-projection-services/inquiry_service.yaml",
    "description": "APIs for application enquiry for External Systems",
    "parentcategory": "obremo-rpm-projection-services",
    "displayName": "Inquiry for External Systems"
},
{
    "index": 11,
    "yaml": "OFLO/obremo-rpm-businessproductdetails-services/BusinessProductDetails.yaml",
    "description": "API for Business Product details",
    "parentcategory": "obremo-rpm-businessproductdetails-services",
    "displayName": "Business Product Details"
},
{
    "index": 12,
    "yaml": "OFLO/obremo-rpm-businessproductdetails-services/BussprodHost.yaml",
    "description": "API for Business Product Host Details",
    "parentcategory": "obremo-rpm-businessproductdetails-services",
    "displayName": "Business Product Host Details"
},
{
    "index": 13,
    "yaml": "OFLO/obremo-rpm-businessproductdetails-services/ProdAttr.yaml",
    "description": "API for Business Product Attribute Details",
    "parentcategory": "obremo-rpm-businessproductdetails-services",
    "displayName": "Business Product Attribute Details"
},
{
    "index": 14,
    "yaml": "OFLO/obremo-rpm-businessproductdetails-services/ProdPref.yaml",
    "description": "API for Business Product Preference Details",
    "parentcategory": "obremo-rpm-businessproductdetails-services",
    "displayName": "Business Product Preference Details"
},
{
    "index": 15,
    "yaml": "OFLO/obremo-rpm-businessproductdetails-services/BusProdAggregate.yaml",
    "description": "API for Business product aggregate",
    "parentcategory": "obremo-rpm-businessproductdetails-services",
    "displayName": "Business Product Aggregate Details"
},
{
    "index": 16,
    "yaml": "OFLO/obremo-rpm-businessprocess-services/businessprocess_webapi.yaml",
    "description": "API for Business Process",
    "parentcategory": "obremo-rpm-businessprocess-services",
    "displayName": "Business Process"
},
{
    "index": 17,
    "yaml": "OFLO/obremo-rpm-businessprocess-services/businessprocess_serviceapi.yaml",
    "description": "API for Business Process for External Systems",
    "parentcategory": "obremo-rpm-businessprocess-services",
    "displayName": "Business Process for External Systems"
},
{
    "index": 18,
    "yaml": "OFLO/obremo-rpm-maintenance-services/applicationmaintenance.yaml",
    "description": "API for maintenance data fetch",
    "parentcategory": "obremo-rpm-maintenance-services",
    "displayName": "Maintenance Data"
},
{
    "index": 19,
    "yaml": "OFLO/obremo-rpm-maintenance-services/applicationmaintenance_serviceapi.yaml",
    "description": "API for maintenance data fetch for External Systems",
    "parentcategory": "obremo-rpm-maintenance-services",
    "displayName": "Maintenance Data for External Systems"
},
{
    "index": 20,
    "yaml": "OFLO/obremo-rpm-sav-account-service/accountdetails.yaml",
    "description": "API for Current and Savings Account Account Details",
    "parentcategory": "obremo-rpm-sav-account-service",
    "displayName": "Account Details"
},
{
    "index": 21,
    "yaml": "OFLO/obremo-rpm-sav-account-service/AccServicesPrefDetails.yaml",
    "description": "API for Current and Savings Account Account Service Preference Details",
    "parentcategory": "obremo-rpm-sav-account-service",
    "displayName": "Account Service Preference Details"
},
{
    "index": 22,
    "yaml": "OFLO/obremo-rpm-sav-account-service/ApprovalDetails.yaml",
    "description": "API for Current and Savings Account Approval Details",
    "parentcategory": "obremo-rpm-sav-account-service",
    "displayName": "Approval Details"
},
{
    "index": 23,
    "yaml": "OFLO/obremo-rpm-sav-account-service/assessmentdetails.yaml",
    "description": "API for Current and Savings Account Assessment Details",
    "parentcategory": "obremo-rpm-sav-account-service",
    "displayName": "Assessment Details"
},
{
    "index": 24,
    "yaml": "OFLO/obremo-rpm-sav-account-service/backofficedetails.yaml",
    "description": "API for Current and Savings Account Back Office Details",
    "parentcategory": "obremo-rpm-sav-account-service",
    "displayName": "Back Office Details"
},
{
    "index": 25,
    "yaml": "OFLO/obremo-rpm-sav-account-service/ChargeDetails.yaml",
    "description": "API for Current and Savings Account Charge Details",
    "parentcategory": "obremo-rpm-sav-account-service",
    "displayName": "Charge Details"
},
{
    "index": 26,
    "yaml": "OFLO/obremo-rpm-sav-account-service/InitialFundingDetails.yaml",
    "description": "API for Current and Savings Account Initial Funding Details",
    "parentcategory": "obremo-rpm-sav-account-service",
    "displayName": "Initial Funding Details"
},
{
    "index": 27,
    "yaml": "OFLO/obremo-rpm-sav-account-service/InterestDetails.yaml",
    "description": "API for Current and Savings Account Interest Details",
    "parentcategory": "obremo-rpm-sav-account-service",
    "displayName": "Interest Details"
},
{
    "index": 28,
    "yaml": "OFLO/obremo-rpm-sav-account-service/MandateDetails.yaml",
    "description": "API for Current and Savings Account Mandate Details",
    "parentcategory": "obremo-rpm-sav-account-service",
    "displayName": "Mandate Details"
},
{
    "index": 29,
    "yaml": "OFLO/obremo-rpm-sav-account-service/Nomineedetails.yaml",
    "description": "API for Current and Savings Account Nominee Details",
    "parentcategory": "obremo-rpm-sav-account-service",
    "displayName": "Nominee Details"
},
{
    "index": 30,
    "yaml": "OFLO/obremo-rpm-sav-account-service/ODAdvanceDetails.yaml",
    "description": "API for Current and Savings Account Advance Details",
    "parentcategory": "obremo-rpm-sav-account-service",
    "displayName": "Advance Details"
},
{
    "index": 31,
    "yaml": "OFLO/obremo-rpm-sav-account-service/OdSecuredDetails.yaml",
    "description": "API for Current and Savings Account OD Secured Details",
    "parentcategory": "obremo-rpm-sav-account-service",
    "displayName": "OD Secured Details"
},
{
    "index": 32,
    "yaml": "OFLO/obremo-rpm-sav-account-service/OdTempUnsecureDetails.yaml",
    "description": "API for Current and Savings Account OD Temp Unsecured Details",
    "parentcategory": "obremo-rpm-sav-account-service",
    "displayName": "OD Temp Unsecured Details"
},
{
    "index": 33,
    "yaml": "OFLO/obremo-rpm-sav-account-service/OdUnsecureDetails.yaml",
    "description": "API for Current and Savings Account OD Unsecured Details",
    "parentcategory": "obremo-rpm-sav-account-service",
    "displayName": "OD Unsecured Details"
},
{
    "index": 34,
    "yaml": "OFLO/obremo-rpm-sav-account-service/savingApplication.yaml",
    "description": "API for Current and Savings Account Application",
    "parentcategory": "obremo-rpm-sav-account-service",
    "displayName": "Aggregate Details"
},
{
    "index": 35,
    "yaml": "OFLO/obremo-rpm-term-deposit-service/Accountdetails.yaml",
    "description": "API for Term Deposit Account Details",
    "parentcategory": "obremo-rpm-term-deposit-service",
    "displayName": "Account Details"
},
{
    "index": 36,
    "yaml": "OFLO/obremo-rpm-term-deposit-service/AccServicesPrefDetails.yaml",
    "description": "API for Term Deposit Account Services Preference Details",
    "parentcategory": "obremo-rpm-term-deposit-service",
    "displayName": "Account Services Preference Details"
},
{
    "index": 37,
    "yaml": "OFLO/obremo-rpm-term-deposit-service/ApprovalDetails.yaml",
    "description": "API for Term Deposit Approval Details",
    "parentcategory": "obremo-rpm-term-deposit-service",
    "displayName": "Approval Details"
},
{
    "index": 38,
    "yaml": "OFLO/obremo-rpm-term-deposit-service/InitialFundingDetails.yaml",
    "description": "API for Term Deposit Initial Funding Details",
    "parentcategory": "obremo-rpm-term-deposit-service",
    "displayName": "Initial Funding Details"
},
{
    "index": 39,
    "yaml": "OFLO/obremo-rpm-term-deposit-service/InterestDetails.yaml",
    "description": "API for Term Deposit Interest Details",
    "parentcategory": "obremo-rpm-term-deposit-service",
    "displayName": "Interest Details"
},
{
    "index": 40,
    "yaml": "OFLO/obremo-rpm-term-deposit-service/MandateDetails.yaml",
    "description": "API for Term Deposit Mandate Details",
    "parentcategory": "obremo-rpm-term-deposit-service",
    "displayName": "Mandate Details"
},
{
    "index": 41,
    "yaml": "OFLO/obremo-rpm-term-deposit-service/Nomineedetails.yaml",
    "description": "API for Term Deposit Nominee Details",
    "parentcategory": "obremo-rpm-term-deposit-service",
    "displayName": "Nominee Details"
},
{
    "index": 42,
    "yaml": "OFLO/obremo-rpm-term-deposit-service/TermDepositApplication.yaml",
    "description": "API for Term Deposit Application",
    "parentcategory": "obremo-rpm-term-deposit-service",
    "displayName": "Aggregate Details"
},
{
    "index": 43,
    "yaml": "OFLO/obremo-rpm-lo-loanapplications/Accountcreation.yaml",
    "description": "API for Loans Account Creation",
    "parentcategory": "obremo-rpm-lo-loanapplications",
    "displayName": "Account Creation"
},
{
    "index": 44,
    "yaml": "OFLO/obremo-rpm-lo-loanapplications/Accountdetails.yaml",
    "description": "API for Loans Account Details",
    "parentcategory": "obremo-rpm-lo-loanapplications",
    "displayName": "Account Details"
},
{
    "index": 45,
    "yaml": "OFLO/obremo-rpm-lo-loanapplications/Accountservices.yaml",
    "description": "API for Loans Account Services",
    "parentcategory": "obremo-rpm-lo-loanapplications",
    "displayName": "Account Services"
},
{
    "index": 46,
    "yaml": "OFLO/obremo-rpm-lo-loanapplications/Admissiondetails.yaml",
    "description": "API for Loans Admission Details",
    "parentcategory": "obremo-rpm-lo-loanapplications",
    "displayName": "Admission Details"
},
{
    "index": 47,
    "yaml": "OFLO/obremo-rpm-lo-loanapplications/Approvaldetails.yaml",
    "description": "API for Loans Approval Details",
    "parentcategory": "obremo-rpm-lo-loanapplications",
    "displayName": "Approval Details"
},
{
    "index": 48,
    "yaml": "OFLO/obremo-rpm-lo-loanapplications/Assessmentdetails.yaml",
    "description": "API for Loans Assessment Details",
    "parentcategory": "obremo-rpm-lo-loanapplications",
    "displayName": "Assessment Details"
},
{
    "index": 49,
    "yaml": "OFLO/obremo-rpm-lo-loanapplications/Backofficedetails.yaml",
    "description": "API for Loans Back Office Details",
    "parentcategory": "obremo-rpm-lo-loanapplications",
    "displayName": "Back Office Details"
},
{
    "index": 50,
    "yaml": "OFLO/obremo-rpm-lo-loanapplications/Chargedetails.yaml",
    "description": "API for Loans Charge Details",
    "parentcategory": "obremo-rpm-lo-loanapplications",
    "displayName": "Charge Details"
},
{
    "index": 51,
    "yaml": "OFLO/obremo-rpm-lo-loanapplications/Creditratingdetails.yaml",
    "description": "API for Loans Credit Rating Details",
    "parentcategory": "obremo-rpm-lo-loanapplications",
    "displayName": "Credit Rating Details"
},
{
    "index": 52,
    "yaml": "OFLO/obremo-rpm-lo-loanapplications/Customerdecision.yaml",
    "description": "API for Loans Customer Decision",
    "parentcategory": "obremo-rpm-lo-loanapplications",
    "displayName": "Customer Decision"
},
{
    "index": 53,
    "yaml": "OFLO/obremo-rpm-lo-loanapplications/Disbursementdetails.yaml",
    "description": "API for Loans Disbursement Decision",
    "parentcategory": "obremo-rpm-lo-loanapplications",
    "displayName": "Disbursement Decision"
},
{
    "index": 54,
    "yaml": "OFLO/obremo-rpm-lo-loanapplications/Edufinancialdetails.yaml",
    "description": "API for Loans Education Financial Details",
    "parentcategory": "obremo-rpm-lo-loanapplications",
    "displayName": "Education Financial Details"
},
{
    "index": 55,
    "yaml": "OFLO/obremo-rpm-lo-loanapplications/Guarantordetails.yaml",
    "description": "API for Loans Guarantor Details",
    "parentcategory": "obremo-rpm-lo-loanapplications",
    "displayName": "Guarantor Details"
},
{
    "index": 56,
    "yaml": "OFLO/obremo-rpm-lo-loanapplications/Interestdetails.yaml",
    "description": "API for Loans Interest Details",
    "parentcategory": "obremo-rpm-lo-loanapplications",
    "displayName": "Interest Details"
},
{
    "index": 57,
    "yaml": "OFLO/obremo-rpm-lo-loanapplications/Issueofferdetails.yaml",
    "description": "API for Loans Issue of Offer Details",
    "parentcategory": "obremo-rpm-lo-loanapplications",
    "displayName": "Issue of Offer Details"
},
{
    "index": 58,
    "yaml": "OFLO/obremo-rpm-lo-loanapplications/loanapplication.yaml",
    "description": "API for Loans Application",
    "parentcategory": "obremo-rpm-lo-loanapplications",
    "displayName": "Aggregate Details"
},
{
    "index": 59,
    "yaml": "OFLO/obremo-rpm-lo-loanapplications/loanapplicationservice.yaml",
    "description": "API for Loans Application Service",
    "parentcategory": "obremo-rpm-lo-loanapplications",
    "displayName": "Loan Application"
},
{
    "index": 60,
    "yaml": "OFLO/obremo-rpm-lo-loanapplications/loandetails.yaml",
    "description": "API for Loans Basic Details",
    "parentcategory": "obremo-rpm-lo-loanapplications",
    "displayName": "Loan Details"
},
{
    "index": 61,
    "yaml": "OFLO/obremo-rpm-lo-loanapplications/loanproductdetails.yaml",
    "description": "API for Loans Product Details",
    "parentcategory": "obremo-rpm-lo-loanapplications",
    "displayName": "Loan Product Details"
},
{
    "index": 62,
    "yaml": "OFLO/obremo-rpm-lo-loanapplications/Mandatedetails.yaml",
    "description": "API for Loans Mandate Details",
    "parentcategory": "obremo-rpm-lo-loanapplications",
    "displayName": "Mandate Details"
},
{
    "index": 63,
    "yaml": "OFLO/obremo-rpm-lo-loanapplications/Postamendmentdetails.yaml",
    "description": "API for Loans Post Amendment Details",
    "parentcategory": "obremo-rpm-lo-loanapplications",
    "displayName": "Post Amendment Details"
},
{
    "index": 64,
    "yaml": "OFLO/obremo-rpm-lo-loanapplications/Repaymentdetails.yaml",
    "description": "API for Loans Repayment Details",
    "parentcategory": "obremo-rpm-lo-loanapplications",
    "displayName": "Repayment Details"
},
{
    "index": 65,
    "yaml": "OFLO/obremo-rpm-lo-loanapplications/loansummary.yaml",
    "description": "API for Loans Summary",
    "parentcategory": "obremo-rpm-lo-loanapplications",
    "displayName": "Loan Summary"
},
{
    "index": 66,
    "yaml": "OFLO/obremo-rpm-cmn-applicantservices/applicantAggregateServices.yaml",
    "description": "API for Common Applicant Aggregate",
    "parentcategory": "obremo-rpm-cmn-applicantservices",
    "displayName": "Aggregate Details"
},
{
    "index": 67,
    "yaml": "OFLO/obremo-rpm-cmn-applicantservices/applicantDetailsServiceApi.yaml",
    "description": "API for Common Applicant Details",
    "parentcategory": "obremo-rpm-cmn-applicantservices",
    "displayName": "Applicant Details"
},
{
    "index": 68,
    "yaml": "OFLO/obremo-rpm-cmn-applicantservices/applicantservices.yaml",
    "description": "API for Common Applicant Service Details",
    "parentcategory": "obremo-rpm-cmn-applicantservices",
    "displayName": "Applicant"
},
{
    "index": 69,
    "yaml": "OFLO/obremo-rpm-cmn-applicantservices/ApplicantTypeServices.yaml",
    "description": "API for Common Applicant Type Services",
    "parentcategory": "obremo-rpm-cmn-applicantservices",
    "displayName": "Applicant Type Details"
},
{
    "index": 70,
    "yaml": "OFLO/obremo-rpm-cmn-applicantservices/CustOnboardServices.yaml",
    "description": "API for Common Applicant Customer Onboarding Services",
    "parentcategory": "obremo-rpm-cmn-applicantservices",
    "displayName": "Customer Onboarding Details"
},
{
    "index": 71,
    "yaml": "OFLO/obremo-rpm-cmn-applicantservices/financialdetails.yaml",
    "description": "API for Common Applicant Financial Details",
    "parentcategory": "obremo-rpm-cmn-applicantservices",
    "displayName": "Financial Details"
},
{
    "index": 72,
    "yaml": "OFLO/obremo-rpm-cmn-applicantservices/partyMaintenanceWeb.yaml",
    "description": "API for Party Maintenance for Routing Hub",
    "parentcategory": "obremo-rpm-cmn-applicantservices",
    "displayName": "Party Maintenance"
},
{
    "index": 73,
    "yaml": "OFLO/obremo-rpm-cmn-applicantservices/partyservices.yaml",
    "description": "API for Party Services for Routing Hub",
    "parentcategory": "obremo-rpm-cmn-applicantservices",
    "displayName": "Party Services"
},
{
    "index": 74,
    "yaml": "OFLO/obremo-rpm-cmn-applicantservices/partyservicesWeb.yaml",
    "description": "API for Web Party Services for Routing Hub",
    "parentcategory": "obremo-rpm-cmn-applicantservices",
    "displayName": "Party Web Services"
},
{
    "index": 75,
    "yaml": "OFLO/obremo-rpm-cmn-applicantservices/stakeholderservices.yaml",
    "description": "API for Stakeholder Services",
    "parentcategory": "obremo-rpm-cmn-applicantservices",
    "displayName": "Stakeholder Services"
},
{
    "index": 76,
    "yaml": "OFLO/obremo-rpm-cmn-scorecardservices/assessmentdetails.yaml",
    "description": "API for Scorecard Assessment Details",
    "parentcategory": "obremo-rpm-cmn-scorecardservices",
    "displayName": "Assessment Details"
},
{
    "index": 77,
    "yaml": "OFLO/obremo-rpm-cmn-scorecardservices/attributelist.yaml",
    "description": "API for Scorecard Attribute Details",
    "parentcategory": "obremo-rpm-cmn-scorecardservices",
    "displayName": "Attribute List"
},
{
    "index": 78,
    "yaml": "OFLO/obremo-rpm-cmn-scorecardservices/qualitativeconfiguration.yaml",
    "description": "API for Scorecard Qualitative Configuration",
    "parentcategory": "obremo-rpm-cmn-scorecardservices",
    "displayName": "Qualitative Configuration"
},
{
    "index": 79,
    "yaml": "OFLO/obremo-rpm-cmn-scorecardservices/qualitativeconfigurationds.yaml",
    "description": "API for Scorecard Qualitative DS",
    "parentcategory": "obremo-rpm-cmn-scorecardservices",
    "displayName": "Quantitative Configuration Details"
},
{
    "index": 80,
    "yaml": "OFLO/obremo-rpm-cmn-scorecardservices/quantitativeconfiguration.yaml",
    "description": "API for Scorecard Quantitative Configuration",
    "parentcategory": "obremo-rpm-cmn-scorecardservices",
    "displayName": "Quantitative Configuration"
},
{
    "index": 81,
    "yaml": "OFLO/obremo-rpm-cmn-scorecardservices/scorecardproductdetails.yaml",
    "description": "API for Scorecard Product Details",
    "parentcategory": "obremo-rpm-cmn-scorecardservices",
    "displayName": "Product Details"
},
{
    "index": 82,
    "yaml": "OFLO/obremo-rpm-cmn-scorecardservices/scorecardservices.yaml",
    "description": "API for Scorecard Services",
    "parentcategory": "obremo-rpm-cmn-scorecardservices",
    "displayName": "Aggregate Details"
},
{
    "index": 83,
    "yaml": "OFLO/obremo-rpm-cmn-hostservices/casaapplication.yaml",
    "description": "API for Host Current and Savings Account Application",
    "parentcategory": "obremo-rpm-cmn-hostservices",
    "displayName": "Current and Savings Application"
},
{
    "index": 84,
    "yaml": "OFLO/obremo-rpm-cmn-hostservices/liabilityproduct.yaml",
    "description": "API for Host Liability Product",
    "parentcategory": "obremo-rpm-cmn-hostservices",
    "displayName": "Liability Product Details"
},
{
    "index": 85,
    "yaml": "OFLO/obremo-rpm-cmn-hostservices/loanproduct.yaml",
    "description": "API for Host Loan Product",
    "parentcategory": "obremo-rpm-cmn-hostservices",
    "displayName": "Loan Product Details"
},
{
    "index": 86,
    "yaml": "OFLO/obremo-rpm-cmn-hostservices/Termdeposit.yaml",
    "description": "API for Host Term Deposit",
    "parentcategory": "obremo-rpm-cmn-hostservices",
    "displayName": "Term Deposit Details"
},
{
    "index": 87,
    "yaml": "OFLO/obremo-rpm-maintenance-services/CoreAccount.yaml",
    "description": "API for Core Account Maintenance",
    "parentcategory": "obremo-rpm-maintenance-services",
    "displayName": "Core Account List"
},
{
    "index": 88,
    "yaml": "OFLO/obremo-rpm-maintenance-services/extCommDetails.yaml",
    "description": "API for Awaiting Customer Clarification Details",
    "parentcategory": "obremo-rpm-maintenance-services",
    "displayName": "Awaiting Customer Clarification Details"
},
{
    "index": 89,
    "yaml": "OFLO/obremo-rpm-cmn-ipaservices/approvalipadetails.yaml",
    "description": "API for In-Principle Approval Details",
    "parentcategory": "obremo-rpm-cmn-ipaservices",
    "displayName": "In-Principle Approval Approval Details"
},
{
    "index": 90,
    "yaml": "OFLO/obremo-rpm-cmn-ipaservices/documentLinkage.yaml",
    "description": "API for Document Linkage",
    "parentcategory": "obremo-rpm-cmn-ipaservices",
    "displayName": "In-Principle Approval Document Linkage"
},
{
    "index": 91,
    "yaml": "OFLO/obremo-rpm-cmn-ipaservices/generateipadetails.yaml",
    "description": "API for In-Principle Approval Generate Details",
    "parentcategory": "obremo-rpm-cmn-ipaservices",
    "displayName": "Generate In-Principle Approval Details"
},
{
    "index": 92,
    "yaml": "OFLO/obremo-rpm-cmn-ipaservices/ipadetails.yaml",
    "description": "API for In-Principle Approval Details",
    "parentcategory": "obremo-rpm-cmn-ipaservices",
    "displayName": "In-Principle Approval Details"
},
{
    "index": 93,
    "yaml": "OFLO/obremo-rpm-cmn-ipaservices/ipaproductdetails.yaml",
    "description": "API for In-Principle Approval Product Details",
    "parentcategory": "obremo-rpm-cmn-ipaservices",
    "displayName": "In-Principle Approval Product Details"
},
{
    "index": 94,
    "yaml": "OFLO/obremo-rpm-cmn-ipaservices/ipaservices.yaml",
    "description": "API for In-Principle Approval Aggregate Details",
    "parentcategory": "obremo-rpm-cmn-ipaservices",
    "displayName": "In-Principle Approval Aggregate Details"
},
{
    "index": 95,
    "yaml": "OFLO/obremo-rpm-creditcardapplication-services/creditcarddetails.yaml",
    "description": "API for Credit Card Details",
    "parentcategory": "obremo-rpm-creditcardapplication-services",
    "displayName": "Credit Card Details"
},
{
    "index": 96,
    "yaml": "OFLO/obremo-rpm-creditcardapplication-services/creditcardproductdetails.yaml",
    "description": "API for Credit Card Product Details",
    "parentcategory": "obremo-rpm-creditcardapplication-services",
    "displayName": "Credit Card Product Details"
},
{
    "index": 97,
    "yaml": "OFLO/obremo-rpm-creditcardapplication-services/cardpreference.yaml",
    "description": "API for Credit Card Preference Details",
    "parentcategory": "obremo-rpm-creditcardapplication-services",
    "displayName": "Credit Card Preference Details"
},
{
    "index": 98,
    "yaml": "OFLO/obremo-rpm-creditcardapplication-services/Addoncardholder.yaml",
    "description": "API for Credit Card Addon Details",
    "parentcategory": "obremo-rpm-creditcardapplication-services",
    "displayName": "Credit Card Addon Details"
},
{
    "index": 99,
    "yaml": "OFLO/obremo-rpm-creditcardapplication-services/chargedetails.yaml",
    "description": "API for Credit Card Charge Details",
    "parentcategory": "obremo-rpm-creditcardapplication-services",
    "displayName": "Credit Card Charge Details"
},
{
    "index": 100,
    "yaml": "OFLO/obremo-rpm-creditcardapplication-services/interestdetails.yaml",
    "description": "API for Credit Card Interest Details",
    "parentcategory": "obremo-rpm-creditcardapplication-services",
    "displayName": "Credit Card Interest Details"
},
{
    "index": 101,
    "yaml": "OFLO/obremo-rpm-creditcardapplication-services/assessmentdetails.yaml",
    "description": "API for Credit Card Assessment Details",
    "parentcategory": "obremo-rpm-creditcardapplication-services",
    "displayName": "Credit Card Assessment Details"
},
{
    "index": 102,
    "yaml": "OFLO/obremo-rpm-creditcardapplication-services/approvaldetails.yaml",
    "description": "API for Credit Card Approval Details",
    "parentcategory": "obremo-rpm-creditcardapplication-services",
    "displayName": "Credit Card Approval Details"
},
{
    "index": 103,
    "yaml": "OFLO/obremo-rpm-creditcardapplication-services/creditcardservices.yaml",
    "description": "API for Credit Card Aggregate ",
    "parentcategory": "obremo-rpm-creditcardapplication-services",
    "displayName": "Credit Card Aggregate"
},
{
    "index": 104,
    "yaml": "OFLO/obremo-rpm-cmn-collateralservices/collateraldetails.yaml",
    "description": "API for Collateral Details",
    "parentcategory": "obremo-rpm-cmn-collateralservices",
    "displayName": "Collateral Details"
},
{
    "index": 105,
    "yaml": "OFLO/obremo-rpm-cmn-collateralservices/collateralservices.yaml",
    "description": "API for Collateral Aggregate",
    "parentcategory": "obremo-rpm-cmn-collateralservices",
    "displayName": "Collateral Aggregate Details"
},
{
    "index": 106,
    "yaml": "OFLO/obremo-rpm-cmn-collateralservices/legalopiniondetails.yaml",
    "description": "API for Legal Opinion Details",
    "parentcategory": "obremo-rpm-cmn-collateralservices",
    "displayName": "Collateral Legal Opinion Details"
},
{
    "index": 107,
    "yaml": "OFLO/obremo-rpm-cmn-collateralservices/perfectiondetails.yaml",
    "description": "API for Perfection Details",
    "parentcategory": "obremo-rpm-cmn-collateralservices",
    "displayName": "Collateral Perfection Details"
},
{
    "index": 108,
    "yaml": "OFLO/obremo-rpm-cmn-collateralservices/valuationdetails.yaml",
    "description": "API for Valuation Details",
    "parentcategory": "obremo-rpm-cmn-collateralservices",
    "displayName": "Collateral Valuation Details"
},
{
    "index": 109,
    "yaml": "OFLO/obremo-rpm-cmn-hostservices/collateralcreation.yaml",
    "description": "API for Collateral Creation",
    "parentcategory": "obremo-rpm-cmn-hostservices",
    "displayName": "Collateral Creation"
},
{
    "index": 110,
    "yaml": "OFLO/obremo-rpm-cmn-hostservices/collateralenquiry.yaml",
    "description": "API for Collateral Enquiry",
    "parentcategory": "obremo-rpm-cmn-hostservices",
    "displayName": "Collateral Enquiry"
},
{
    "index": 111,
    "yaml": "OFLO/obremo-rpm-cmn-mlservice/ProcessTimePrediction.yaml",
    "description": "API for Machine Learning Usecase",
    "parentcategory": "obremo-rpm-cmn-mlservice",
    "displayName": "Machine Learning for Process Creation Time Prediction"
}
]}