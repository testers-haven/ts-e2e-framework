import { test, expect } from '@playwright/test';
import { App } from '../pages/app';
import { allure } from "allure-playwright";


test('homepage has title and links to intro page', async ({ page }) => {
  allure.id('ST176243');
  const app = new App(page);
  
  await app.homePage.open();

  await expect(app.homePage.page).toHaveTitle(/Home/);
  await expect(app.homePage.page).toHaveURL(/blog.testerhaven.com/);
  await expect(app.homePage.title).toBeVisible();
  await expect(app.homePage.linktree).toBeVisible();
  await expect(await app.homePage.paragraph("Hi, I'm Manuel")).toBeVisible();
  await expect(await app.homePage.paragraph("Posts page is")).toBeVisible();
  await expect(await app.homePage.paragraph("Stories page is")).toBeVisible();
});