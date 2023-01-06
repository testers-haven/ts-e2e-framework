import { Page } from '@playwright/test'
import { BasePage } from './base.page'

export class StoriesPage extends BasePage {
  constructor(page: Page) {
    super(page)
  }

  get title() {
    return this.page.locator('h1', { hasText: 'Stories' })
  }

  get stories() {
    return this.page.locator('div[class="post-item"]')
  }

  async open() {
    await this.page.goto('/stories')
  }
}
