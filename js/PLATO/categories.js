var categories = {
  mastercategories: [
    {
      "index": 0,
      "description": "PLATO Overview",
      "name": "Overview",
    },
    {
      "index": 1,
      "description": "This service provides the centralized PLATO API features.",
      "name": "Plato Api",
    },
    {
      "index": 2,
      "description": "This service provides the centralized PLATO Batch Core features.",
      "name": "plato-batch-server",
    },
    {
      "index": 3,
      "description": "This is a sample server reports server.",
      "name": "reports-service",
    }
  ]
};
var subCategories = {
  list: [
    {
      "index": 1,
      "yaml": "PLATO/Api.yml",
      "description": "login Api",
      "parentcategory": "Plato Api",
      "displayName": "Login",
    },
    {
      "index": 2,
      "yaml": "PLATO/Alerts.yml",
      "description": "Alerts API",
      "parentcategory": "Plato Api",
      "displayName": "Alerts",
    },
    {
      "index": 3,
      "yaml": "PLATO/Feed-Services.yaml",
      "description": "Feed Services API",
      "parentcategory": "Plato Api",
      "displayName": "Feed Services",
    },
    {
      "index": 4,
      "yaml": "PLATO/Feed.yml",
      "description": "Feed API",
      "parentcategory": "Plato Api",
      "displayName": "Feed Services",
    },
    {
      "index": 5,
      "yaml": "PLATO/plato-batch-server/BatchCoreJobLauncherController.yaml",
      "description": "Batch Core Job Launcher API",
      "parentcategory": "plato-batch-server",
      "displayName": "Batch Core Job Launcher Controller",
    },
    {
      "index": 6,
      "yaml": "PLATO/plato-batch-server/JobLauncherController.yaml",
      "description": "JobLauncherController",
      "parentcategory": "plato-batch-server",
      "displayName": "JobLauncherController.yaml",
    },
    {
      "index": 7,
      "yaml": "PLATO/plato-batch-server/JobExplorerController.yaml",
      "description": "Job Explorer Controller API",
      "parentcategory": "plato-batch-server",
      "displayName": "Job Explorer Controller",
    },
    {
      "index": 8,
      "yaml": "PLATO/plato-batch-server/JobRegistryController.yaml",
      "description": "Job Registry Controller API",
      "parentcategory": "plato-batch-server",
      "displayName": "Job Registry Controller",
    },
    {
      "index": 9,
      "yaml": "PLATO/plato-batch-server/JobTriggerDefinitionsController.yaml",
      "description": "Job Trigger Definitions Controller API",
      "parentcategory": "plato-batch-server",
      "displayName": "Job Trigger Definitions Controller",
    },
    {
      "index": 10,
      "yaml": "PLATO/reports-service/ReportMetadata.yaml",
      "description": "Report Metadata API",
      "parentcategory": "reports-service",
      "displayName": "Report Metadata",
    },
    {
      "index": 11,
      "yaml": "PLATO/reports-service/TemplateMetadata.yaml",
      "description": "Template Metadata API",
      "parentcategory": "reports-service",
      "displayName": "Template Metadata",
    },
  ]
};
