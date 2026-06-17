var categories = {
  mastercategories: [
    {
      index: 0,
      description: 'OBCLPM Service APIs use HTTP verbs and a RESTful endpoint structure. Request and response payloads are formatted as JSON.\n\nOBCLPM Service API can be accessed using the following URL format\n\nhttp://host-name:port/{servicename}/{resource}/{resource-specific-parameters}\n-    Host name is the domain.\n-    The resource represents one of the OBCLPM REST resources. \n-    The resource-specific part of the URL specifies the actual resource being referenced.\n\n',
      name: 'Overview',
    },
    {
      index: 1,
      description: '',
      name: 'Loan Application Services',
    },
    {
      index: 2,
      description: '',
      name: 'Syndication Application Services',
    },
    {
      index: 3,
      description: '',
      name: 'Business Process Services',
    },
    {
      index: 4,
      description: '',
      name: 'Business Product Services',
    },
    {
      index: 5,
      description: '',
      name: 'Application Maintenance Services',
    },
    {
      index: 6,
      description: '',
      name: 'CMC Party Services',
    },
    {
      index: 7,
      description: '',
      name: 'Condition-Subsequent Services',
    },
    {
      index: 8,
      description: '',
      name: 'Covenants Services',
    },
    {
      index: 9,
      description: '',
      name: 'Backoffice Services',
    },
    {
      index: 10,
      description: '',
      name: 'Handoff Services',
    },
    {
      index: 11,
      description: '',
      name: 'Orchestration Services',
    },
    {
      index: 12,
      description: '',
      name: 'Party Services',
    },
    {
      index: 13,
      description: '',
      name: 'Transactionorchestrator Services',
    },
    {
      index: 14,
      description: '',
      name: 'Payment Services',
    },
    {
      index: 15,
      description: '',
      name: 'NLP Processing Services',
    }
  ]
};
/*
	{
      index: 16,
      description: '',
      name: 'Batch Forget-Customer Services',
    }
*/	
var subCategories = {
  list: [
    {
      index: 1,
      yaml: '../../OBCLPM/clmo-loanapplication-services/loanapplicationservice.yaml',
      description: 'This is the API for LoanApplication Operations. This function is used to create different categories of loan application, update the different data segments for the specified loan application number.',
      parentcategory: 'Loan Application Services',
      displayName: 'Loan Application Service API',
    },
    {
      index: 2,
      yaml: '../../OBCLPM/clmo-loanapplication-services/loanapplication.yaml',
      description: 'This is the API for LoanApplication Operations. This function is used to create different categories of loan application, update the different data segments for the specified loan application number.',
      parentcategory: 'Loan Application Services',
      displayName: 'Loan Application',
    },
    {
      index: 1,
      yaml: '../../OBCLPM/clmo-syndicationapplication-services/syndicationapplicationservice.yaml',
      description: 'This is the API for SyndicationApplication Operations. This function is used to create different categories of syndication application, update the different data segments for the specified syndication application number.',
      parentcategory: 'Syndication Application Services',
      displayName: 'Syndication Application Service API',
    },
    {
      index: 2,
      yaml: '../../OBCLPM/clmo-syndicationapplication-services/syndicationapplication.yaml',
      description: 'This is the API for SyndicationApplication Operations. This function is used to create different categories of syndication application, update the different data segments for the specified syndication application number.',
      parentcategory: 'Syndication Application Services',
      displayName: 'Syndication Application',
    },
    {
      index: 1,
      yaml: '../../OBCLPM/clmo-businessprocess-services/businessprocess_serviceapi.yaml',
      description: 'This is the API for Business Process Operations. These apis can be used to get all the approved business processes and to get all data segments of the process corresponding to given product  and life cycles codes.',
      parentcategory: 'Business Process Services',
      displayName: 'Business Process Service API',
    },
    {
      index: 2,
      yaml: '../../OBCLPM/clmo-businessprocess-services/businessprocess_webapi.yaml',
      description: 'This is the API for Business Process Operations. These apis can be used to get all the approved business processes and to get all data segments of the process corresponding to given product  and life cycles codes.',
      parentcategory: 'Business Process Services',
      displayName: 'Business Process Web API',
    },
    {
      index: 1,
      yaml: '../../OBCLPM/clmo-businessproduct-services/businessproduct_serviceapi.yaml',
      description: 'This is the API for Business Process Operations. These apis can be used to get all the approved business products and to get all back office products mapped to given  business product code.',
      parentcategory: 'Business Product Services',
      displayName: 'Business Product Service API',
    },
    {
      index: 2,
      yaml: '../../OBCLPM/clmo-businessproduct-services/businessproduct_webapi.yaml',
      description: 'This is the API for Business Process Operations. These apis can be used to get all the approved business products and to get all back office products mapped to given  business product code.',
      parentcategory: 'Business Product Services',
      displayName: 'Business Product Web API',
    },
    {
      index: 1,
      yaml: '../../OBCLPM/clmo-maintenance-services/applicationmaintenance_serviceapi.yaml',
      description: 'This is the API for Application Maintenance Operations. These apis can be used to get all the approved lifecycle codes.',
      parentcategory: 'Application Maintenance Services',
      displayName: 'Application Maintenance Service API',
    },
    {
      index: 2,
      yaml: '../../OBCLPM/clmo-maintenance-services/applicationmaintenance.yaml',
      description: 'This is the API for Application Maintenance Operations. These apis can be used to get all the approved lifecycle codes.',
      parentcategory: 'Application Maintenance Services',
      displayName: 'Application Maintenance Web API',
    },
    {
      index: 1,
      yaml: '../../OBCLPM/clmo-cmc-party-services/partymaintenance.yaml',
      description: 'This is the API for CMC Party Operations.',
      parentcategory: 'CMC Party Services',
      displayName: 'Party Services',
    },
    {
      index: 1,
      yaml: '../../OBCLPM/clmo-conditionsubsequent-services/conditionsubsequent.yaml',
      description: 'This is the API for Condition subsequet Operations.',
      parentcategory: 'Condition-Subsequent Services',
      displayName: 'Condition Subsequent Services',
    },
    {
      index: 1,
      yaml: '../../OBCLPM/clmo-covenants-services/covenants.yaml',
      description: 'This is the API for Covenants Operations.',
      parentcategory: 'Covenants Services',
      displayName: 'Covenents Services',
    },
    {
      index: 1,
      yaml: '../../OBCLPM/clmo-backoffice-services/backoffice.yaml',
      description: 'This is the API for Backoffice Operations. It is used to talk to backoffice service to get the product details',
      parentcategory: 'Backoffice Services',
      displayName: 'Backoffice Services',
    },
    {
      index: 1,
      yaml: '../../OBCLPM/clmo-handoff-services/handoffservice.yaml',
      description: 'This is the API for Handoff Operations.',
      parentcategory: 'Handoff Services',
      displayName: 'Handoff Services',
    },
    {
      index: 1,
      yaml: '../../OBCLPM/clmo-orchestration-services/orchestration.yaml',
      description: 'This is the API for Orchestration Operations.',
      parentcategory: 'Orchestration Services',
      displayName: 'Orchestration Services',
    },
    {
      index: 1,
      yaml: '../../OBCLPM/clmo-party-services/partyapplication.yaml',
      description: 'This is the API for Party Operations. These apis can be used to get all party details.',
      parentcategory: 'Party Services',
      displayName: 'Party Services',
    },
    {
      index: 1,
      yaml: '../../OBCLPM/clmo-transactionorchestrator-services/applicationtransactionmaster.yaml',
      description: 'This is the API for application Transactionorchestrator Operations.',
      parentcategory: 'Transactionorchestrator Services',
      displayName: ' Application Transactionorchestrator Services',
    },
    {
      index: 2,
      yaml: '../../OBCLPM/clmo-transactionorchestrator-services/applicationinvitationstatus.yaml',
      description: 'This is the API for Application invitation Operations.',
      parentcategory: 'Transactionorchestrator Services',
      displayName: 'Application Invitation Status',
    },
    {
      index: 3,
      yaml: '../../OBCLPM/clmo-transactionorchestrator-services/applicationmilestone.yaml',
      description: 'This is the API for Application milestone Operations.',
      parentcategory: 'Transactionorchestrator Services',
      displayName: 'Application Milestone',
    },
    {
      index: 4,
      yaml: '../../OBCLPM/clmo-transactionorchestrator-services/dashboards.yaml',
      description: 'This is the API for Dashboard Operations.',
      parentcategory: 'Transactionorchestrator Services',
      displayName: 'Dashboard Services',
    },
    {
      index: 5,
      yaml: '../../OBCLPM/clmo-transactionorchestrator-services/transactionorchestrator.yaml',
      description: 'This is the API for Transactionorchestrator Operations.',
      parentcategory: 'Transactionorchestrator Services',
      displayName: 'Transactionorchestrator Services',
    },
    {
      index: 6,
      yaml: '../../OBCLPM/clmo-transactionorchestrator-services/widgetfilterpreference.yaml',
      description: 'This is the API for filtering the widget preference Operations.',
      parentcategory: 'Transactionorchestrator Services',
      displayName: 'Widgetfilterpreference Services',
    },
    {
      index: 1,
      yaml: '../../OBCLPM/clmo-payment-services/paymentservice.yaml',
      description: 'This is the API for Payment Operations.',
      parentcategory: 'Payment Services',
      displayName: 'Payment Service API',
    },
    {
      index: 2,
      yaml: '../../OBCLPM/clmo-payment-services/payment.yaml',
      description: 'This is the API for Payment Operations.',
      parentcategory: 'Payment Services',
      displayName: 'Payment Service Web API',
    },
    {
      index: 1,
      yaml: '../../OBCLPM/clmo-nlp-processing-services/nlpprocessingservice.yaml',
      description: 'This is the API for NLP Operations.',
      parentcategory: 'NLP Processing Services',
      displayName: 'NLP Processing Service API',
    },
    {
      index: 2,
      yaml: '../../OBCLPM/clmo-nlp-processing-services/nlpprocessingapplication.yaml',
      description: 'This is the API for Payment Operations.',
      parentcategory: 'NLP Processing Services',
      displayName: 'NLP Processing Service Web API',
    }
  ]
};
/*
    {
      index: 1,
      yaml: '../../OBCLPM/clmo-batch-forgetcustomer-services/platoBatchServer.yaml',
      description: 'This is the API for Party Operations. These apis can be used to get all party details.',
      parentcategory: 'Batch Forget-Customer Services',
      displayName: 'Batch Forget-Customer Service API',
    }
*/
