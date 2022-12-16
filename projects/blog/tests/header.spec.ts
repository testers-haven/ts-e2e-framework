import { test, expect } from '@playwright/test';
import { App } from '../pages/app';
import { allure } from "allure-playwright";

test('header redirects to posts', async ({ page }) => {
    allure.id('RT176266');
    let app = new App(page);
    
    await app.homePage.open();
    await app.header.goToPosts();
      
    await expect(app.postsPage.page).toHaveTitle(/Posts/);
    await expect(app.postsPage.page).toHaveURL(/posts/);
    await expect(app.postsPage.title).toBeVisible();
    await expect(await app.postsPage.posts.count()).toBeGreaterThan(0);
});

test('header redirects to stories', async ({ page }) => {
    allure.id('RT176265');
    let app = new App(page);
    
    await app.homePage.open();
    await app.header.goToStories();
      
    await expect(app.storiesPage.page).toHaveTitle(/Stories/);
    await expect(app.storiesPage.page).toHaveURL(/stories/);
    await expect(app.storiesPage.title).toBeVisible();
    await expect(await app.storiesPage.stories.count()).toBeGreaterThan(0);
});