import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/test', // Directorio donde están tus casos de prueba
  timeout: 30 * 1000, // Tiempo máximo para cada prueba (30 segundos)
  expect: {
    timeout: 5000, // Tiempo máximo para los selectores de expect
  },
  retries: 0, // Número de reintentos en caso de fallo
  reporter: [['list'], ['html']], // Reportes: consola y archivo HTML
  use: {
    baseURL: 'https://www.facebook.com', // URL base para las pruebas
    trace: 'on-first-retry', // Habilitar trazas en el primer reintento
    video: 'on', // Grabar video de las pruebas
    screenshot: 'on', // Tomar capturas de pantalla automáticas
    headless: false, // Mostrar navegador; cambiar a true para modo headless
    viewport: { width: 1280, height: 720 }, // Tamaño de la ventana del navegador
    actionTimeout: 0, // Tiempo para que una acción específica falle (sin límite)
    navigationTimeout: 30 * 1000, // Tiempo para que falle una navegación (30 segundos)
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'Desktop Edge',
      use: {
        ...devices['Desktop Edge'],
      },
    },
  ],
});
