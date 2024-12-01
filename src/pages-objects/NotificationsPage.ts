import { Page } from '@playwright/test';

export class NotificationsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private notificationsIcon = '[aria-label="Notifications"]';

  private notificationsMenu = 'a[href="https://www.facebook.com/Ensedeciencia/posts/pfbid02W2qHpe2NxPZV5byt2741fymkmYdchGiLw4EVWgHqYh1pJ2YwQVbdjZZTdHfyx8iel?comment_id=592482223261723&notif_id=1732943456073996&notif_t=comment_mention&ref=notif"]';


  private notificationItems = 'a[href="https://www.facebook.com/Ensedeciencia/posts/pfbid02W2qHpe2NxPZV5byt2741fymkmYdchGiLw4EVWgHqYh1pJ2YwQVbdjZZTdHfyx8iel?comment_id=592482223261723&notif_id=1732943456073996&notif_t=comment_mention&ref=notif"]';

  private likeButton = 'div[aria-label="Like"]';

  private unlikeButton = 'div[aria-label="Unlike"]';

  async openNotifications() {
    await this.page.click(this.notificationsIcon);
    await this.page.waitForSelector(this.notificationsMenu, { timeout: 15000, visible: true });
  }

  async scrollNotifications() {
    await this.page.waitForSelector(this.notificationsMenu, { timeout: 5000, visible: true });

    await this.page.evaluate(() => {
      const notificationsMenu = document.querySelector('div[role="menu"]');
      if (notificationsMenu) {
        notificationsMenu.scrollBy(0, 100);
      }
    });
  }

  async selectRandomNotification() {
    await this.page.waitForSelector(this.notificationItems, { timeout: 8000, visible: true });

    const notifications = await this.page.$$(this.notificationItems);

    if (notifications.length === 0) {
      throw new Error('No hay notificaciones disponibles');
    }

    const randomIndex = Math.floor(Math.random() * notifications.length);
    const notification = notifications[randomIndex];

    const notificationText = await notification.textContent();
    console.log(`Notificación seleccionada: ${notificationText?.trim()}`);

    await notification.click();
  }

  async likePost() {
    await this.page.click(this.likeButton);
  }

  async verifyLike() {
    const isLiked = await this.page.isVisible(this.unlikeButton);
    return isLiked;
  }
}
