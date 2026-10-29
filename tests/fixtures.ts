
import { test as base, expect, type Page } from '@playwright/test';

type MyFixtures = {
  contactPage: Page;
};

export const test = base.extend<MyFixtures>({
  contactPage: async ({ page }, use) => {
    await page.goto('https://practice.sdetunicorns.com/contact/');

    await use(page);
  },
});

export { expect };
