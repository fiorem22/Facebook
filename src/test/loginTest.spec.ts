import { test, Browser, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages-objects/LoginPage';

test('Login Facebook', async ({ browser }) => {
  const context1 = await browser.newContext();
  const page1 = await context1.newPage();
  const loginPage = new LoginPage(page1);

  await loginPage.navigate();
  await loginPage.verifyLoginPage();

  await loginPage.login('ovgpamela+gmail.com', 'Test2024@');
  await loginPage.verifyLoginSuccess();

  await context1.close();

  const context2 = await browser.newContext();
  const page2 = await context2.newPage();

  const loginPage2 = new LoginPage(page2);

  await loginPage2.navigate();
  await loginPage2.verifyLoginPage();

  await loginPage2.login('frllpamela@gmail.com', 'invalidPassword');
  await loginPage2.verifyLoginError();

  await context2.close();
});
