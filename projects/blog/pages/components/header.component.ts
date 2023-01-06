import { Page } from '@playwright/test'
import { BasePage } from '../base.page'

export class HeaderComponent extends BasePage {
  constructor(page: Page) {
    super(page)
  }

  get storiesLink() {
    return this.page.locator('div[class="nav-line"]').getByText('Stories')
  }

  get postsLink() {
    return this.page.locator('div[class="nav-line"]').getByText('Posts')
  }

  async goToStories() {
    await this.storiesLink.click()
  }

  async goToPosts() {
    await this.postsLink.click()
  }
}
