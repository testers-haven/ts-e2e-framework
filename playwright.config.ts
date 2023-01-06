require('dotenv').config();
import fs from 'fs';

if (!process.env.TEST_ENVIRONMENT) {
  console.log('Add correct environment variable TEST_ENVIRONMENT');
  process.exit(0);
}
const project = process.env.PROJECT;
if (!project) {
  console.log('Add correct environment variable PROJECT',);
  process.exit(0);
}
if (!fs.existsSync(`projects/${project}`)) {
  console.log(`"${project}" project doesn't exist`);
  process.exit(0);
}

module.exports = require(`./projects/${project}/config/project.config.ts`);