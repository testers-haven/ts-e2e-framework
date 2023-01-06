
# Framework & E2E tests
* Best practices & general recommendations for E2E testing: [link](https://coingaming.atlassian.net/wiki/spaces/ENG/pages/9086894135/E2E+Testing)
* JS naming conventions [./docs/js-naming-conventions.md](https://basarat.gitbook.io/typescript/styleguide)


### Projects covered with E2E tests(used in configuration):
* blog

### System requirements
* Docker for allure reports(optional)

### Installation
* `npm install`

### Usage
1. Create our .env file from .env.example
2. Complete the project and environment
3. Optionally `docker-compose up -d` It will spin up docker containers for local Allure reports, reports will be automatically generated every 40seconds(configured in `docker-compose.yml`)
   1. add to .env your local allure server url and set it as true
4. `npm run test` All tests within selected project on selected environment in Chrome(by default) browser.
