var categories = {
"mastercategories":[
{
    "index": 0,
"description": "OBCM Service APIs use HTTP verbs and a RESTful endpoint structure. Request and response payloads are formatted as JSON.\n\OBCM Service API can be accessed using the following URL format\n\nhttp://host-name:port/{servicename}/{resource}/{resource-specific-parameters}\n-	Host name is the domain.\n-	The resource represents one of the OBCM REST resources. \n-	The resource-specific part of the URL specifies the actual resource being referenced.\n\n",
    "name": "Overview"
},
{
    "index": 1,
	"description": "",
    "name": "Credit Initiation Services"
}
]
};
var subCategories = {
	"list":[
	{
		"index": 1,
		"yaml": "OBCM/obtfpm-drawings-datasegments-services/drawing.yaml",
		"description": "These services provide a single point of entry to initiate various processes in Trade Finance. \n\nThis service owns the responsiblity of initiating various Trade Finance processes. \n\nThis includes, requests for initiating   \n\n\n-    Import LC Issuance \n\n-    Import LC Amendmnet \n\n-    Discrepancy Acceptance by Applicant \n\n-    Guarantee Issuance",
		"parentcategory": "Credit Initiation Services",
		"displayName": "Credit Initiation Services"
	}
	]
}
