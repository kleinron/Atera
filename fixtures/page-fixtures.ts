import { test as baseTest } from '@playwright/test';
import { LoginPage, SideBarPage, TicketStatusPage } from '../utils/imports.ts';

type MyFixtures = {
    loginPage: LoginPage;
    sideBarPage: SideBarPage;
    ticketStatusPage: TicketStatusPage;
}

export const test = baseTest.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    sideBarPage: async ({ page }, use) => {
        await use(new SideBarPage(page));
    },
    ticketStatusPage: async ({ page }, use) => {
        await use(new TicketStatusPage(page));
    },
})

export { expect } from '@playwright/test';
