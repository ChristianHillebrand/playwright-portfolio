import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  reporter: 'html',

  use: {
    baseURL: 'https://practice.sdetunicorns.com',
    browserName: 'chromium',
    headless: true,
    trace: 'on-first-retry',
  },
});