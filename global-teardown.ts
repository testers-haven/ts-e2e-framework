import { FullConfig } from '@playwright/test';
import { reportToAllure } from 'allure-service-client';

async function globalTeardown(config: FullConfig) {
    const projectVar = process.env.PROJECT;
    if (process.env.ALLURE_GENERATE_REPORT === 'true') {
      let allureReporter = config.reporter
      .find(r => r.some(t => t.includes('allure') ))?.find(r => r.outputFolder !== undefined);
      let options = {
        project: projectVar,
        resultsFolder: allureReporter.outputFolder,
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