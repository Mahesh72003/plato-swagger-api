var categories = {
	"mastercategories" : [
			{
				"index" : 0,
				"description" : "OBBRN Service APIs use HTTP verbs and a RESTful endpoint structure. Request and response payloads are formatted as JSON.\n\OBBRN Service API can be accessed using the following URL format\n\nhttp://host-name:port/{servicename}/{resource}/{resource-specific-parameters}\n-	Host name is the domain.\n-	The resource represents one of the OBBRN REST resources. \n-	The resource-specific part of the URL specifies the actual resource being referenced.\n\n",
				"name" : "Overview"
			},
			{
				"index" : 1,
				"description" : "",
				"name" : "Cash Domain"
			},
			{
				"index" : 2,
				"description" : "",
				"name" : "Customer Domain"
			},
			{
				"index" : 3,
				"description" : "",
				"name" : "Payments Domain"
			}
			]
};
var subCategories = {
	"list" : [
			{
				"index" : 1,
				"yaml" : "../../OBBRN/obremo-srv-cas-cash-services/transaction/transactionService.yaml",
				"description" : "These services provide a single point for performing the Cash-Transactions. This service owns the responsiblity of initiating various branch related transactions. This includes requests for initiating:\n   -    Cash-Deposit -    Cash-Withdrawal.",
				"parentcategory" : "Cash Domain",
				"displayName" : "API's"
			},
			{
				"index" : 2,
				"yaml" : "../../OBBRN/obremo-srv-cus-customer-services/api/accountBalance/accountBalanceService.yaml",
				"description" : "These services provide a single point for performing the Cash-Transactions. This service owns the responsiblity of initiating various branch related transactions. This includes requests for initiating:\n   -    Account Balance.",
				"parentcategory" : "Customer Domain",
				"displayName" : "API's"
			},
			{
				"index" : 3,
				"yaml" : "../../OBBRN/obremo-srv-pay-payment-services/api/transaction/externalServiceApi.yaml",
				"description" : "These services provide a single point for performing the Cash-Transactions. This service owns the responsiblity of initiating various branch related transactions. This includes requests for initiating:\n   -    Account to Account Transfer.",
				"parentcategory" : "Payments Domain",
				"displayName" : "API's"
			}
			
			]
}
