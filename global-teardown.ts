import { FullConfig } from '@playwright/test';
import { reportToAllure } from 'allure-service-client';
import { reportToXrayWithJunitReport} from 'xray-client';

async function globalTeardown(config: FullConfig) {
  const projectVar = process.env.PROJECT;
  if (process.env.ALLURE_GENERATE_REPORT === 'true') {
    let options = {
      project: projectVar,
      resultsFolder: config.reporter.find(r => r.some(t => t.includes('allure') ))[1].outputFolder,
      cleanupFilesAfterUpload: false,
      host: process.env.ALLURE_HOST,
    };

    try {
      await reportToAllure(options);
    } catch (e) {
      console.error('Allure Error response: ', e);
    }
  }
}

export default globalTeardown;