import { test } from '@playwright/test';
import { NotificationsPage } from '../pages-objects/NotificationsPage';

test('Facebook notifications', async ({ page }) => {
  const notificationsPage = new NotificationsPage(page);

  await page.goto('https://www.facebook.com');
  await page.fill('[name="email"]', 'ovgpamela@gmail.com');
  await page.fill('[name="pass"]', 'Test2024@');
  await page.click('[name="login"]');

  await page.waitForSelector('text=Welcome', { timeout: 15000 });

  await notificationsPage.openNotifications();

  await notificationsPage.scrollNotifications();

  await notificationsPage.selectRandomNotification();

  //await notificationsPage.verifyPostLoaded();

  await notificationsPage.likePost();

  const isLiked = await notificationsPage.verifyLike();
  console.log(`Estado de "Me gusta": ${isLiked ? 'Correcto' : 'Incorrecto'}`);
});
