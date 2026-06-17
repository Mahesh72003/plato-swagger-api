var categories = {
    "mastercategories":[
        {
            "index": 0,
            "description": "Oracle Banking Electronic Data Exchange for Corporates REST APIs use HTTP verbs and a RESTful endpoint structure. Request and response payloads are formatted as JSON.\n\Oracle Banking Electronic Data Exchange for Corporates REST API can be accessed using the following URL format\n\nhttp://host-name:port/{servicename}/{resource}/{resource-specific-parameters}\n-	Host name is the domain.\n-	The resource represents one of the Oracle Banking Electronic Data Exchange for Corporates REST resources. \n-	The resource-specific part of the URL specifies the actual resource being referenced.\n\n",
            "name": "Overview"
        },
        {
            "index": 1,
            "description": "APIs for file inquiry",
            "name": "File Inquiry"
        },
        {
            "index": 2,
            "description": "APIs which notify Oracle Banking Electronic Data Exchange for Corporates regarding file approval and rejection",
            "name": "File Approval"
        },
		{
            "index": 3,
            "description": "API for fetching transaction details",
            "name": "Transaction Maintenance"
        }

    ]
};
var subCategories = {
    "list":[
        {
            "index": 1,
            "yaml": "../../OBEDX/edx-inquiry-ms/FileInquiry-config.yaml",
            "description": "This is the service for Service APIs of File and Record Inquiry.",
            "parentcategory": "File Inquiry",
            "displayName": "File Inquiry"
        },

        {
            "index": 2,
            "yaml": "../../OBEDX/edx-approval-ms/Approval.yaml",
            "description": "This is the service for Service Orchestrator APIs of approval action on file",
            "parentcategory": "File Approval",
            "displayName": "Resume Approval"
        },
		
		{
            "index": 3,
            "yaml": "../../OBEDX/edx-transaction-ms/TransactionMaintenanceAggregate.yaml",
            "description": "This is the service for Servic API of Transaction Maintenance",
            "parentcategory": "Transaction Maintenance",
            "displayName": "Transaction Maintenance"
        }
    ]}
