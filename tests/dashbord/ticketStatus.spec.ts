import { test } from '../../fixtures/page-fixtures';

// test.beforeAll(async ({ loginPage }) => {
//   await loginPage.login();
// });

test.describe('Assert open tickets', () => {
  test('sideBar --> Assert open tickets', async ({ loginPage, sideBarPage, ticketStatusPage }) => {
    test.slow();
    await loginPage.login();
    await sideBarPage.navigateToMenuItem('#menu-item-1');
    await ticketStatusPage.validateStatus();
  });
});