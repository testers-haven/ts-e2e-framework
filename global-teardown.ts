import { FullConfig } from '@playwright/test';
import { reportToAllure } from 'allure-service-client';
import { reportToXrayWithJunitReport} from 'xray-client';

async function globalTeardown(config: FullConfig) {
  const projectVar = process.env.PROJECT;
  if (process.env.ALLURE_GENERATE_REPORT === 'true') {
    let options = {
      project: projectVar,
      resultsFolder: `projects/${projectVar}/reports/allure/`,
      cleanupFilesAfterUpload: false,
      host: process.env.ALLURE_HOST,
    };

    try {
      await reportToAllure(options);
    } catch (e) {
      console.error('Allure Error response: ', e);
    }
  }
  if (process.env.XRAY_GENERATE_REPORT === 'true') {
    try {
      let options = {
        project: 'CS',
        resultsFolder: `projects/${projectVar}/reports/junit/`,
        resultsFile: 'report.xml',
        host: process.env.XRAY_HOST,
        testPlan: process.env.XRAY_TESTPLAN,
        security: {
          client_id: process.env.XRAY_ID,
          client_secret: process.env.XRAY_SECRET,
        },
      };
      await reportToXrayWithJunitReport(options);
    } catch (e) {
      console.error('Xray Error response: ', e);
    }
  }
}

export default globalTeardown;