import { test as base, expect } from '@playwright/test';
import { ContactPage } from '../pages/ContactPage';

type MyFixtures = {
  contactPage: ContactPage;
};

export const test = base.extend<MyFixtures>({
  contactPage: async ({ page }, use) => {
    const contactPage = new ContactPage(page);

    await contactPage.goto();

    await use(contactPage);
  },
});

export { expect };

