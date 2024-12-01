import { Page, expect } from '@playwright/test';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

async navigate() {
  await this.page.goto('https://www.facebook.com/', {
    timeout: 60000,
    waitUntil: 'load'
  });
}

  async verifyLoginPage() {
    await this.page.waitForSelector('id=email');
  }

  async login(username: string, password: string) {
    await this.page.fill('#email', username);
    await this.page.fill('#pass', password);
    await this.page.click('[name="login"]');
  }
async verifyLoginError() {
  const errorMessageSelector = '._3-95._9ay3.uiBoxRed';

  // Esperar a que el mensaje de error esté visible en la página
  await this.page.waitForSelector(errorMessageSelector, { state: 'visible', timeout: 60000 });

  // Esperar un poco más para asegurarse de que el texto se haya actualizado
  await this.page.waitForTimeout(10000);  // espera de 1 segundo

  // Obtener el texto del mensaje de error
  const errorMessage = await this.page.innerText(errorMessageSelector);

  // Verificar que el mensaje de error es el esperado
  if (!errorMessage.includes('Wrong Credentials')) {
    throw new Error('El mensaje de error no es el esperado.');
  }


}

 async verifyLoginSuccess() {
        const isVisible = await this.page.waitForSelector('text=Welcome', { timeout: 60000 });

     expect(isVisible).toBeTruthy();

     console.log('Inicio de sesión exitoso: El usuario ingresó correctamente a la página principal.');
 }

}
