import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  
  get title() {
    return this.page.locator('h1', { hasText: "A Tester's Haven" });
  }

  get linktree() {
    return this.page.locator('a[href="https://linktr.ee/MMark4"]');
  }

  async paragraph(text:string) {
    return this.page.locator('p', { hasText: text });
   }
}