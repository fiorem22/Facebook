import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/test',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  retries: 0,
  reporter: [['list'], ['html']],
  use: {
    baseURL: 'https://www.facebook.com',
    trace: 'on-first-retry',
    video: 'on',
    screenshot: 'on',
    headless: false,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 0,
    navigationTimeout: 30 * 1000,
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
