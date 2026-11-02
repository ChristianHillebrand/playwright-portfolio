import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './',

  fullyParallel: true,

  reporter: [
  ['list'],
  ['html', { open: 'never' }]
],

  use: {
    baseURL: 'https://practice.sdetunicorns.com',
    browserName: 'chromium',
    headless: true,
    trace: 'on-first-retry',
  },
});