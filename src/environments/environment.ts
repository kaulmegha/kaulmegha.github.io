import {MockContactService} from '../app/services/contact/mock-contact.service';

export const environment = {
  production: false,
  ipInfo: MockContactService,
  build: {version: 'VERSION', commit: 'CI_COMMIT_SHORT_SHA', buildTime: 'BUILD_TIME', buildPipeline: 'CI_PIPELINE_ID'}
};
