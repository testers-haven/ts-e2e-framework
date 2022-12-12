import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test('homepage has title and links to intro page', async ({ page }) => {
  let home = new HomePage(page);
  
  await home.open();

  await expect(home.page).toHaveTitle(/Playwright/);
  await expect(home.getStartedLink).toHaveAttribute('href', '/docs/intro');

  await home.getStarted();

  await expect(home.page).toHaveURL(/.*intro/);
});