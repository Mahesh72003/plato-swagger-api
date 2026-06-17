var asyncCategoriesCount =0;
var categories = {
"mastercategories":[
{
    "index": asyncCategoriesCount++,
    "description": "OBVAM is using kafka as part of event driven architecture. Async APIs used to describe asynchronous APIs. Request and response of kafka event payloads are formatted as JSON.\n\n",
    "name": "Overview"
},
{
    "index": asyncCategoriesCount++,
	"description": "",
    "name": "Account Services"
},
{
    "index": asyncCategoriesCount++,
    "description": "",
    "name": "Core Services"
},
{
    "index": asyncCategoriesCount++,
    "description": "",
    "name": "Charge Services"
},
{
    "index": asyncCategoriesCount++,
    "description": "",
    "name": "ECA Services"
},
{
    "index": asyncCategoriesCount++,
    "description": "",
    "name": "Entity Services"
},
{
    "index": asyncCategoriesCount++,
    "description": "",
    "name": "Identifier Services"
},
{
    "index": asyncCategoriesCount++,
    "description": "",
    "name": "Internal Transfer Services"
},
{
    "index": asyncCategoriesCount++,
    "description": "",
    "name": "Projection Services"
},
{
    "index": asyncCategoriesCount++,
    "description": "",
    "name": "Statement Services"
},
{
    "index": asyncCategoriesCount++,
    "description": "",
    "name": "Transaction Journal Services"
},
{
    "index": asyncCategoriesCount++,
    "description": "",
    "name": "External Interest Engine Services"
},
{
    "index": asyncCategoriesCount++,
    "description": "",
    "name": "External Liquidity Management Services"
},
{
    "index": asyncCategoriesCount++,
    "description": "",
    "name": "External DDA Services"
}
]
};
var asyncSubCategoriesCount = 1;
var subCategories = {
"list":[
{
	"index": asyncSubCategoriesCount++,
	"html": "html/OBVAM/obvam-account-services/AccountBalanceNotification.html",
	"description": "Event is generated to provide the Account balance notification to reporting service.",
	"parentcategory": "Account Services",
	"displayName": "Account Balance Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-account-services/GenericDashboardEventRequest.html",
    "description": "Event is generated for unauthorised transaction count.",
    "parentcategory": "Account Services",
    "displayName": "Generic Dashboard Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-account-services/VASanctionCheckUpdate.html",
    "description": "Event is generated when an Account Sanction Status is updated.",
    "parentcategory": "Account Services",
    "displayName": "VA Sanction Check Update Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-account-services/VirtualEntityNotification.html",
    "description": "Event is generated when a Virtual Entity is Created/Modified/Closed/Re-Opened.",
    "parentcategory": "Account Services",
    "displayName": "Virtual Entity Notification Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-account-services/BranchChargeEventRequest.html",
    "description": "Event raised to push branch level currency conversion configuration for Charges.",
    "parentcategory": "Account Services",
    "displayName": "Branch Charge Event Request"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-account-services/structureChargesNotification.html",
    "description": "Event raised on creation or updation of Cutomer in account core services.",
    "parentcategory": "Account Services",
    "displayName": "Structure Charges Notification"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-account-services/VamChargeBasisEventRequest.html",
    "description": "Event raised to update the action and count  related to Account and trancsection.",
    "parentcategory": "Account Services",
    "displayName": "Vam Charge Basis Event Request"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-core-services/AccountFacility.html",
    "description": "This event is used to send account facility notification.",
    "parentcategory": "Core Services",
    "displayName": "Account Facility Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-core-services/ccyAccGroup.html",
    "description": "This event is used to send multi ccy account request.",
    "parentcategory": "Core Services",
    "displayName": "CCY Account Group Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-core-services/AccountFacility.html",
    "description": "Event is generated when a Virtual Account Facility is Created/ Modified /Closed.",
    "parentcategory": "Core Services",
    "displayName": "Account Facility Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-core-services/ccyAccGroup.html",
    "description": "To populate data in projection service for Virtual Multi-Currency Account Group.",
    "parentcategory": "Core Services",
    "displayName": "CCY Account Group Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-core-services/GenericDashboardEventRequest.html",
    "description": "Event is generated for unauthorised transaction count.",
    "parentcategory": "Core Services",
    "displayName": "Generic Dashboard Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-core-services/BankChargeEventRequest.html",
    "description": "Event raised to push branch level currency conversion configuration for Charges.",
    "parentcategory": "Core Services",
    "displayName": "Bank Charge Event Request"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-core-services/PricingMap.html",
    "description": "Event raised to push Charge Preferences at Customer level.",
    "parentcategory": "Core Services",
    "displayName": "Pricing Map"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-eca-services/AmountBlockAuthorized.html",
    "description": "Event is generated when ECA amount block is authorized.",
    "parentcategory": "ECA Services",
    "displayName": "Amount Block Authorized Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-eca-services/AmountBlockCreated.html",
    "description": "Event is generated when ECA amount block is created.",
    "parentcategory": "ECA Services",
    "displayName": "Amount Block Created Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-eca-services/AmountBlockDeleted.html",
    "description": "Event is generated when ECA amount block is deleted.",
    "parentcategory": "ECA Services",
    "displayName": "Amount Block Deleted Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-eca-services/AmountBlockExchRateQueue.html",
    "description": "Event is generated when an Amount Block is placed into exchange rate queue.",
	"parentcategory": "ECA Services",
    "displayName": "Amount Block Exchange Rate Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-eca-services/AmountBlockReleased.html",
    "description": "Event is generated when ECA amount block is released.",
    "parentcategory": "ECA Services",
    "displayName": "Amount Block Released Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-eca-services/GenericDashboardEventRequest.html",
    "description": "Event is generated for unauthorised transaction count.",
    "parentcategory": "ECA Services",
    "displayName": "Generic Dashboard Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-entity-services/GenericDashboardEventRequest.html",
    "description": "Event is generated for unauthoried transaction count.",
    "parentcategory": "Entity Services",
    "displayName": "Generic Dashboard Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-entity-services/StatementPreferenceEvent.html",
    "description": "",
    "parentcategory": "Entity Services",
    "displayName": "Statement Preference Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-entity-services/VirtualEntityNotification.html",
    "description": "Event is generated when a Virtual Entity is Created/Modified/Closed/Re-Opened.",
    "parentcategory": "Entity Services",
    "displayName": "Virtual Entity Notification Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-identifier-services/GenericDashboardEventRequest.html",
    "description": "Event is generated for unauthorised transaction count.",
    "parentcategory": "Identifier Services",
    "displayName": "Generic Dashboard Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-identifier-services/Identifier.html",
    "description": "Event is generated when a Virtual Identifier is Created/ Modified/ Closed / Re-Opened.",
    "parentcategory": "Identifier Services",
    "displayName": "Identifier Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-internal-transfer-services/GenericDashboardEventRequest.html",
    "description": "Event is generated for unauthorised transaction count.",
    "parentcategory": "Internal Transfer Services",
    "displayName": "Generic Dashboard Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-internal-transfer-services/GenericNotification.html",
    "description": "Event is generated whenever there is a debit or credit on a virtual account. These debits or credits can be originated from any source like journal postings, internal transfers or interest liquidation.",
    "parentcategory": "Internal Transfer Services",
    "displayName": "Generic Notification Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-internal-transfer-services/InternalBookingAuthorized.html",
    "description": "Event is generated when an Internal Transfer transaction is authorized.",
    "parentcategory": "Internal Transfer Services",
    "displayName": "Internal Booking Authorized Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-internal-transfer-services/VamChargeBasisEventRequest.html",
    "description": "Event raised to update the action and count related to a)account Creation/Closure/Reopen b)Transaction create/reverse c)sweep transaction in oblm.",
    "parentcategory": "Internal Transfer Services",
    "displayName": "Vam Charge Basis Event Request"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-projection-services/AccountBalanceNotification.html",
    "description": "Event is generated to provide the Account balance notification to reporting service.",
    "parentcategory": "Projection Services",
    "displayName": "Account Balance Notification Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-projection-services/AccountFacility.html",
    "description": "Event is generated when a Virtual Account Facility is Created/ Modified /Closed.",
    "parentcategory": "Projection Services",
    "displayName": "Account Facility Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-projection-services/AccountStructure.html",
    "description": "Event is generated when a Virtual Account Structure is Created/ Modified/Closed/Re-Opened.",
    "parentcategory": "Projection Services",
    "displayName": "Account Structure Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-projection-services/ccyAccGroup.html",
    "description": "To populate data in projection service for Virtual Multi-Currency Account Group.",
    "parentcategory": "Projection Services",
    "displayName": "CCY Account Group Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-projection-services/GenericDashboardEventRequest.html",
    "description": "Event is generated for unauthoried transaction count.",
    "parentcategory": "Projection Services",
    "displayName": "Generic Dashboard Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-projection-services/Identifier.html",
    "description": "Event is generated when a Virtual Identifier is Created/ Modified/ Closed / Re-Opened.",
    "parentcategory": "Projection Services",
    "displayName": "Identifier Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-projection-services/InternalBookingAuthorized.html",
    "description": "Event is generated when an Internal Transfer transaction is authorized.",
    "parentcategory": "Projection Services",
    "displayName": "Internal Booking Authorized Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-projection-services/TransactionJournalAuthorized.html",
    "description": "Event is generated to make statement entries from transaction journal.",
    "parentcategory": "Projection Services",
    "displayName": "Transaction Journal Authorized Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-projection-services/VASanctionCheckUpdate.html",
    "description": "Event is generated when an Account Sanction Status is updated.",
    "parentcategory": "Projection Services",
    "displayName": "VA Sanction Check Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-projection-services/VirtualAccount.html",
    "description": "Event is generated when a Virtual Account Structure is Created/ Modified/Closed/Re-Opened.",
    "parentcategory": "Projection Services",
    "displayName": "Virtual Account Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-projection-services/VirtualEntityNotification.html",
    "description": "Event is generated when a Virtual Entity is Created/ Modified/Closed/Re-Opened.",
    "parentcategory": "Projection Services",
    "displayName": "Virtual Entity Notification Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-statement-services/AmountBlockAuthorized.html",
    "description": "Event is generated when ECA amount block is authorized.",
    "parentcategory": "Statement Services",
    "displayName": "Amount Block Authorized Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-statement-services/AmountBlockCreated.html",
    "description": "Event is generated when ECA amount block is created.",
    "parentcategory": "Statement Services",
    "displayName": "Amount Block Created Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-statement-services/AmountBlockDeleted.html",
    "description": "Event is generated when ECA amount block is deleted.",
    "parentcategory": "Statement Services",
    "displayName": "Amount Block Deleted Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-statement-services/AmountBlockReleased.html",
    "description": "Event is generated when ECA amount block is released.",
    "parentcategory": "Statement Services",
    "displayName": "Amount Block Released Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-statement-services/GenerateStmtEvent.html",
    "description": "Event is generated after statement gets generated.",
    "parentcategory": "Statement Services",
    "displayName": "Statement Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-statement-services/GenericDashboardEventRequest.html",
    "description": "Event is generated for unauthorised transaction count.",
    "parentcategory": "Statement Services",
    "displayName": "Generic Dashboard Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-statement-services/InternalBookingAuthorized.html",
    "description": "Event is generated when an Internal Transfer transaction is authorized.",
    "parentcategory": "Statement Services",
    "displayName": "Internal Booking Authorized Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-statement-services/StatementPreferenceEvent.html",
    "description": "",
    "parentcategory": "Statement Services",
    "displayName": "Statement Preference Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-statement-services/TransactionJournalAuthorized.html",
    "description": "Event is generated to make statement entries from transaction journal.",
    "parentcategory": "Statement Services",
    "displayName": "Transaction Journal Authorized Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-transaction-journal-services/GenericDashboardEventRequest.html",
    "description": "Event is generated for unauthoried transaction count.",
    "parentcategory": "Transaction Journal Services",
    "displayName": "Generic Dashboard Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-transaction-journal-services/GenericNotification.html",
    "description": "Event is generated whenever there is a debit or credit on a virtual account. These debits or credits can be originated from any source like journal postings, internal transfers or interest liquidation.",
    "parentcategory": "Transaction Journal Services",
    "displayName": "Generic Notification Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-transaction-journal-services/TransactionExchRateQueue.html",
    "description": "Event is generated for exchange rate queue notification for transactions.",
    "parentcategory": "Transaction Journal Services",
    "displayName": "Transaction Exchange Rate Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-transaction-journal-services/TransactionJournalAuthorized.html",
    "description": "Event is generated to make statement entries from transaction journal.",
    "parentcategory": "Transaction Journal Services",
    "displayName": "Transaction Journal Authorized Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-transaction-journal-services/TxnExternalAccountEntries.html",
    "description": "Event is generated when async mode is Y for transactions, publish transactions to external-DDA so that batch can process the records.",
    "parentcategory": "Transaction Journal Services",
    "displayName": "Transaction Journal Account Entries Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-transaction-journal-services/VamChargeBasisEventRequest.html",
    "description": "Event raised to update the action and count related to a)account Creation/Closure/Reopen b)Transaction create/reverse c)sweep transaction in oblm.",
    "parentcategory": "Transaction Journal Services",
    "displayName": "Vam Charge Basis Event Request"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-transaction-journal-services/TxnFailedNotification.html",
    "description": "Event will be raised when we post a journal entry and that got failed.",
    "parentcategory": "Transaction Journal Services",
    "displayName": "Txn Failed Notification"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/external-interest-engine-service/GenericDashboardEventRequest.html",
    "description": "Event is generated for unauthoried transaction count.",
    "parentcategory": "External Interest Engine Services",
    "displayName": "Generic Dashboard Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/external-interest-engine-service/VirtualAccount.html",
    "description": "Event is generated when a Virtual Account is Created/ Modified/Closed/Re-Opened.",
    "parentcategory": "External Interest Engine Services",
    "displayName": "Virtual Account Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/external-liquidity-management-service/AccountStructure.html",
    "description": "Event is generated when a Virtual Account Structure is Created/ Modified/Closed/Re-Opened.",
    "parentcategory": "External Liquidity Management Services",
    "displayName": "Account Structure Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/external-liquidity-management-service/GenericDashboardEventRequest.html",
    "description": "Event is generated for unauthorised transaction count.",
    "parentcategory": "External Liquidity Management Services",
    "displayName": "Generic Dashboard Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/external-liquidity-management-service/VirtualAccount.html",
    "description": "Event is generated when a Virtual Account is Created/ Modified/Closed/Re-Opened.",
    "parentcategory": "External Liquidity Management Services",
    "displayName": "Virtual Account Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-external-dda-services/GenericDashboardEventRequest.html",
    "description": "Event is generated for unauthoried transaction count.",
    "parentcategory": "External DDA Services",
    "displayName": "Generic Dashboard Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/obvam-external-dda-services/TxnExternalAccountEntries.html",
    "description": "Event is generated when async mode is Y for transactions, publish transactions to external-DDA so that batch can process the records.",
    "parentcategory": "External DDA Services",
    "displayName": "Transaction External Account Entries Event"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/vamlm-charge-services/BankChargeEventRequest.html",
    "description": "Event raised to push the charge preferences at bank level.",
    "parentcategory": "Charge Services",
    "displayName": "Bank Charge Event Request"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/vamlm-charge-services/BranchChargeEventRequest.html",
    "description": "Event raised to push branch level currency conversion configuration for Charges",
    "parentcategory": "Charge Services",
    "displayName": "Branch Charge Event Request"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/vamlm-charge-services/GenericDashboardEventRequest.html",
    "description": "Event is generated for unauthoried transaction count.",
    "parentcategory": "Charge Services",
    "displayName": "Generic Dashboard Event Request"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/vamlm-charge-services/pricingMap.html",
    "description": "Event raised on creation or updation of Cutomer in account core services.",
    "parentcategory": "Charge Services",
    "displayName": "Pricing Map"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/vamlm-charge-services/StructureCharges.html",
    "description": "Event raised on creation or updation of Cutomer in account core services.",
    "parentcategory": "Charge Services",
    "displayName": "Structure Charges Notification"
},
{
    "index": asyncSubCategoriesCount++,
    "html": "html/OBVAM/vamlm-charge-services/VamChargeBasisEventRequest.html",
    "description": "Event raised to update the action and count  related to Account and trancsection.",
    "parentcategory": "Charge Services",
    "displayName": "Vam Charge Basis Event Request"
}
]}