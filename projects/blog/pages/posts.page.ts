import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class PostsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get title() {
    return this.page.locator('h1', { hasText: "Posts" });
  }

  
  get posts() {
    return this.page.locator('div[class="post-item"]');
  }

  async open() {
    await this.page.goto('/posts');
  }
}