var categories = {
	"mastercategories" : [
			{
				"index" : 0,
				"description" : "OBPY Service APIs use HTTP verbs and a RESTful endpoint structure. Request and response payloads are formatted as JSON.\n\OBPY Service API can be accessed using the following URL format. Host name is the domain.\n-  The resource represents one of the OBPY REST resources. \n-   The resource-specific part of the URL specifies the actual resource being referenced.\n\n",
				"name" : "Overview"
			},
			{
				"index" : 1,
				"description" : "OBPY Service APIs use HTTP verbs and a RESTful endpoint structure. Request and response payloads are formatted as JSON.\n\OBPY Service API can be accessed using the following URL format. Host name is the domain.\n-  The resource represents one of the OBPY REST resources. \n-   The resource-specific part of the URL specifies the actual resource being referenced.\n\n",
				"name" : "Oracle Banking Enterprise Party Management - Party Service"
			},
			{
				"index" : 2,
				"description" : "OBPY Service APIs use HTTP verbs and a RESTful endpoint structure. Request and response payloads are formatted as JSON.\n\OBPY Service API can be accessed using the following URL format. Host name is the domain.\n-  The resource represents one of the OBPY REST resources. \n-   The resource-specific part of the URL specifies the actual resource being referenced.\n\n",
				"name" : "Oracle Banking Enterprise Party Management - Party Service - Service API"
			},
			{
				"index" : 3,
				"description" : "OBPY Service APIs use HTTP verbs and a RESTful endpoint structure. Request and response payloads are formatted as JSON.\n\OBPY Service API can be accessed using the following URL format. Host name is the domain.\n-  The resource represents one of the OBPY REST resources. \n-   The resource-specific part of the URL specifies the actual resource being referenced.\n\n",
				"name" : "Oracle Banking Enterprise Party Management - Party Stakeholder API"
			},
		
			{
				"index" : 5,
				"description" : "OBPY Service APIs use HTTP verbs and a RESTful endpoint structure. Request and response payloads are formatted as JSON.\n\OBPY Service API can be accessed using the following URL format. Host name is the domain.\n-  The resource represents one of the OBPY REST resources. \n-   The resource-specific part of the URL specifies the actual resource being referenced.\n\n",
				"name" : "Oracle Banking Enterprise Party Management - Process Driver API"
			},
			{
				"index" : 6,
				"description" : "OBPY Service APIs use HTTP verbs and a RESTful endpoint structure. Request and response payloads are formatted as JSON.\n\OBPY Service API can be accessed using the following URL format. Host name is the domain.\n-  The resource represents one of the OBPY REST resources. \n-   The resource-specific part of the URL specifies the actual resource being referenced.\n\n",
				"name" : "Oracle Banking Enterprise Party Management - KYC Service"
			},
			{
				"index" : 7,
				"description" : "OBPY Service APIs use HTTP verbs and a RESTful endpoint structure. Request and response payloads are formatted as JSON.\n\OBPY Service API can be accessed using the following URL format. Host name is the domain.\n-  The resource represents one of the OBPY REST resources. \n-   The resource-specific part of the URL specifies the actual resource being referenced.\n\n",
				"name" : "Oracle Banking Enterprise Party Management - KYC Service - Service API"
			},
			{
				"index" : 8,
				"description" : "OBPY Service APIs use HTTP verbs and a RESTful endpoint structure. Request and response payloads are formatted as JSON.\n\OBPY Service API can be accessed using the following URL format. Host name is the domain.\n-  The resource represents one of the OBPY REST resources. \n-   The resource-specific part of the URL specifies the actual resource being referenced.\n\n",
				"name" : "Oracle Banking Enterprise Party Management - Maintenance Service"
			},
			{
				"index" : 9,
				"description" : "OBPY Service APIs use HTTP verbs and a RESTful endpoint structure. Request and response payloads are formatted as JSON.\n\OBPY Service API can be accessed using the following URL format. Host name is the domain.\n-  The resource represents one of the OBPY REST resources. \n-   The resource-specific part of the URL specifies the actual resource being referenced.\n\n",
				"name" : "Oracle Banking Enterprise Party Management - Business Process Service - Web API"
			},
			{
				"index" : 10,
				"description" : "OBPY Service APIs use HTTP verbs and a RESTful endpoint structure. Request and response payloads are formatted as JSON.\n\OBPY Service API can be accessed using the following URL format. Host name is the domain.\n-  The resource represents one of the OBPY REST resources. \n-   The resource-specific part of the URL specifies the actual resource being referenced.\n\n",
				"name" : "Oracle Banking Enterprise Party Management - Business Process Service - Service API"
			},
			{
				"index" : 11,
				"description" : "OBPY Service APIs use HTTP verbs and a RESTful endpoint structure. Request and response payloads are formatted as JSON.\n\OBPY Service API can be accessed using the following URL format. Host name is the domain.\n-  The resource represents one of the OBPY REST resources. \n-   The resource-specific part of the URL specifies the actual resource being referenced.\n\n",
				"name" : "Oracle Banking Enterprise Party Management - Stage Service"
			},
			{
				"index" : 12,
				"description" : "OBPY Service APIs use HTTP verbs and a RESTful endpoint structure. Request and response payloads are formatted as JSON.\n\OBPY Service API can be accessed using the following URL format. Host name is the domain.\n-  The resource represents one of the OBPY REST resources. \n-   The resource-specific part of the URL specifies the actual resource being referenced.\n\n",
				"name" : "Oracle Banking Enterprise Party Management - Handoff Service"
			},
			{
				"index" : 13,
				"description" : "OBPY Service APIs use HTTP verbs and a RESTful endpoint structure. Request and response payloads are formatted as JSON.\n\OBPY Service API can be accessed using the following URL format. Host name is the domain.\n-  The resource represents one of the OBPY REST resources. \n-   The resource-specific part of the URL specifies the actual resource being referenced.\n\n",
				"name" : "Oracle Banking Enterprise Party Management - Adapter Service"
			},
			{
				"index" : 14,
				"description" : "OBPY Service APIs use HTTP verbs and a RESTful endpoint structure. Request and response payloads are formatted as JSON.\n\OBPY Service API can be accessed using the following URL format. Host name is the domain.\n-  The resource represents one of the OBPY REST resources. \n-   The resource-specific part of the URL specifies the actual resource being referenced.\n\n",
				"name" : "Oracle Banking Enterprise Party Management - Customer Service"
			} ]
};
var subCategories = {
	"list" : [
			{
				"index" : 1,
				"yaml" : "obpy-party-services/partyservicesWeb.yaml",
				"description" : "These services provide a single point of entry to initiate various processes. \n\nThis service owns the responsiblity of initiating various processes. \n\nOBPY service responses are of generic format { errors: {},data: {},paging: {}}*. \n\nSo, in this API document following error response can be ignored - Could not resolve reference: Could not resolve pointer: /definitions/ResponseModel. \n\nThis includes, requests for initiating \n\n\n- Retail Onboarding \n\n\n- Corporate Onboarding \n\n\n- SMB Onboarding \n\n\n- SME Onboarding",
				"parentcategory" : "Oracle Banking Enterprise Party Management - Party Service",
				"displayName" : "obpy-party-services"
			},
			{
				"index" : 2,
				"yaml" : "obpy-party-services/partyservices.yaml",
				"description" : "These services provide a single point of entry to initiate various processes through service API's. \n\nThis service owns the responsiblity of initiating various processes. \n\nOBPY service responses are of generic format { errors: {},data: {},paging: {}}*. \n\nSo, in this API document following error response can be ignored - Could not resolve reference: Could not resolve pointer: /definitions/ResponseModel. \n\nThis includes, requests for initiating \n\n\n- Retail Onboarding \n\n\n- Corporate Onboarding \n\n\n- SMB Onboarding \n\n\n- SME Onboarding",
				"parentcategory" : "Oracle Banking Enterprise Party Management - Party Service - Service API",
				"displayName" : "obpy-party-services - Service API"
			},
			{
				"index" : 3,
				"yaml" : "obpy-party-services/customerStakeholder.yaml",
				"description" : "These services provide a single point of entry to initiate various processes. \n\nOBPY service responses are of generic format { errors: {},data: {},paging: {}}*. \n\nSo, in this API document following error response can be ignored - Could not resolve reference: Could not resolve pointer: /definitions/ResponseModel. \n\nThis holds services for customer stakeholder operations",
				"parentcategory" : "Oracle Banking Enterprise Party Management - Party Stakeholder API",
				"displayName" : "obpy-party-services - Party Stakeholder API"
			},
			
			{
				"index" : 5,
				"yaml" : "obpy-party-services/processDriver.yaml",
				"description" : "These services provide a single point of entry to initiate various processes through service API's. \n\nOBPY service responses are of generic format { errors: {},data: {},paging: {}}*. \n\nSo, in this API document following error response can be ignored - Could not resolve reference: Could not resolve pointer: /definitions/ResponseModel. \n\nThis service is hold API for process driver",
				"parentcategory" : "Oracle Banking Enterprise Party Management - Process Driver API",
				"displayName" : "obpy-party-services - Process Driver"
			},
			{
				"index" : 6,
				"yaml" : "obpy-party-kyc-services/partykycservicesWeb.yaml",
				"description" : "These services provide a single point of entry to initiate various processes. \n\nThis service owns the responsiblity of initiating various processes. \n\nOBPY service responses are of generic format { errors: {},data: {},paging: {}}*. \n\nSo, in this API document following error response can be ignored - Could not resolve reference: Could not resolve pointer: /definitions/ResponseModel. \n\nThis includes, requests for initiating \n\n\n- Various types of KYC",
				"parentcategory" : "Oracle Banking Enterprise Party Management - KYC Service",
				"displayName" : "obpy-party-kyc-services"
			},
			{
				"index" : 7,
				"yaml" : "obpy-party-kyc-services/partykycservices.yaml",
				"description" : "These services provide a single point of entry to initiate various processes. \n\nThis service owns the responsiblity of initiating various processes. \n\nOBPY service responses are of generic format { errors: {},data: {},paging: {}}*. \n\nSo, in this API document following error response can be ignored - Could not resolve reference: Could not resolve pointer: /definitions/ResponseModel. \n\nThis includes, requests for initiating \n\n\n- Various types of KYC",
				"parentcategory" : "Oracle Banking Enterprise Party Management - KYC Service - Service API",
				"displayName" : "obpy-party-kyc-services - Service API"
			},
			{
				"index" : 8,
				"yaml" : "obpy-party-maintenance-service/MaintenanceWeb.yaml",
				"description" : "These services provide a single point of entry to all static data configured accross the party API's. \n\nOBPY service responses are of generic format { errors: {},data: {},paging: {}}*. \n\nSo, in this API document following error response can be ignored - Could not resolve reference: Could not resolve pointer: /definitions/ResponseModel.",
				"parentcategory" : "Oracle Banking Enterprise Party Management - Maintenance Service",
				"displayName" : "obpy-party-maintenance-service - Service API"
			},
			{
				"index" : 9,
				"yaml" : "obpy-businessprocess-services/businessprocess_webapi.yaml",
				"description" : "These services provide a single point of entry to initiate various processes. \n\nThis service owns the responsiblity of initiating various processes. \n\nOBPY service responses are of generic format { errors: {},data: {},paging: {}}*. \n\nSo, in this API document following error response can be ignored - Could not resolve reference: Could not resolve pointer: /definitions/ResponseModel. \n\nThis includes, requests for initiating \n\n\n- Retail Onboarding \n\n\n- Corporate Onboarding \n\n\n- Retail Amendment",
				"parentcategory" : "Oracle Banking Enterprise Party Management - Business Process Service - Web API",
				"displayName" : "obpy-businessprocess-services - Web API"
			},
			{
				"index" : 10,
				"yaml" : "obpy-businessprocess-services/businessprocess_serviceapi.yaml",
				"description" : "These services provide a single point of entry to initiate various processes. \n\nThis service owns the responsiblity of initiating various processes. \n\nOBPY service responses are of generic format { errors: {},data: {},paging: {}}*. \n\nSo, in this API document following error response can be ignored - Could not resolve reference: Could not resolve pointer: /definitions/ResponseModel. \n\nThis includes, requests for initiating \n\n\n- Retail Onboarding \n\n\n- Corporate Onboarding \n\n\n- Retail Amendment",
				"parentcategory" : "Oracle Banking Enterprise Party Management - Business Process Service - Service API",
				"displayName" : "obpy-businessprocess-services - Service API"
			},
			{
				"index" : 11,
				"yaml" : "obpy-stage-services/stage.yaml",
				"description" : "These services provide a single point of entry to all stage configurations and TCM validations. \n\nOBPY service responses are of generic format { errors: {},data: {},paging: {}}*. \n\nSo, in this API document following error response can be ignored - Could not resolve reference: Could not resolve pointer: /definitions/ResponseModel.",
				"parentcategory" : "Oracle Banking Enterprise Party Management - Stage Service",
				"displayName" : "obpy-stage-services"
			},
			{
				"index" : 12,
				"yaml" : "obpy-party-handoff-services/handoff.yaml",
				"description" : "These services provide a single point of entry to all Host Handoffs. \n\nOBPY service responses are of generic format { errors: {},data: {},paging: {}}*. \n\nSo, in this API document following error response can be ignored - Could not resolve reference: Could not resolve pointer: /definitions/ResponseModel.",
				"parentcategory" : "Oracle Banking Enterprise Party Management - Handoff Service",
				"displayName" : "obpy-party-handoff-services"
			},
			{
				"index" : 13,
				"yaml" : "obpy-party-adapter-services/customerWeb.yaml",
				"description" : "These services provide a acts as a adapter layer for the Retail Customer 360 screens and account 360 screens. \n\nOBPY service responses are of generic format { errors: {},data: {},paging: {}}*. \n\nSo, in this API document following error response can be ignored - Could not resolve reference: Could not resolve pointer: /definitions/ResponseModel. \nIt has the Capability to adapt to the configured Host and fetch the data.",
				"parentcategory" : "Oracle Banking Enterprise Party Management - Adapter Service",
				"displayName" : "obpy-party-adapter-services"
			},
			{
				"index" : 14,
				"yaml" : "obpy-customer-services/retailWeb.yaml",
				"description" : "These services provide a single point of entry to fetch the customer and account information from Host - FCUBS for 360 screens.  \n\nOBPY service responses are of generic format { errors: {},data: {},paging: {}}*. \n\nSo, in this API document following error response can be ignored - Could not resolve reference: Could not resolve pointer: /definitions/ResponseModel.",
				"parentcategory" : "Oracle Banking Enterprise Party Management - Customer Service",
				"displayName" : "obpy-customer-services"
			}

	]
}