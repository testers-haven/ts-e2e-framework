import { Page } from "@playwright/test";
import { HeaderComponent } from "./components/header.component";
import { HomePage } from "./home.page";
import { PostsPage } from "./posts.page";
import { StoriesPage } from "./stories.page";

export class App {
    private readonly _homePage:HomePage;
    private readonly _postsPage:PostsPage;
    private readonly _storiesPage:StoriesPage;
    private readonly _header:HeaderComponent;

    constructor(page: Page) {
        this._homePage = new HomePage(page);
        this._postsPage = new PostsPage(page);
        this._storiesPage = new StoriesPage(page);
        this._header = new HeaderComponent(page);
    }

    public get homePage(): HomePage {
        return this._homePage;
    }

    public get postsPage(): PostsPage {
        return this._postsPage;
    }

    public get storiesPage(): StoriesPage {
        return this._storiesPage;
    }

    public get header(): HeaderComponent {
        return this._header;
    }
  
}