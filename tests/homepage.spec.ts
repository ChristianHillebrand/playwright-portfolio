
import { test, expect } from '@playwright/test';

test('homepage displays the expected title', async ({ page }) => {
  await page.goto('https://practice.sdetunicorns.com/');

  await expect(page).toHaveTitle(/SDET Unicorns/i);
});

test('About link opens the About page', async ({ page }) => {
  await page.goto('https://practice.sdetunicorns.com/');

  const aboutLink = page.getByRole('link', {
    name: 'About',
    exact: true
  }).first();

  await expect(aboutLink).toBeVisible();

  await aboutLink.click();

  await expect(page).toHaveURL(/\/about\/?$/);
});



test('contact form has visible input fields', async ({ page }) => {
  await page.goto('https://practice.sdetunicorns.com/contact/');

  const contactForm = page.locator('form.everest-form');

  await expect(contactForm).toBeVisible();

  const textFields = contactForm.locator('input[type="text"]');
  const emailField = contactForm.locator('input[type="email"]');
  const messageField = contactForm.locator('textarea');

  await expect(textFields.nth(0)).toBeVisible();
  await expect(emailField).toBeVisible();
  await expect(textFields.nth(1)).toBeVisible();
  await expect(messageField).toBeVisible();
});

test('contact page displays the contact form', async ({ page }) => {
  await page.goto('https://practice.sdetunicorns.com/contact/');

  await expect(page).toHaveURL(/contact/);

  const contactForm = page.locator('form.everest-form');

  await expect(contactForm).toBeVisible();
});

test('contact form submit button is visible and enabled', async ({ page }) => {
  await page.goto('https://practice.sdetunicorns.com/contact/');

  const contactForm = page.locator('form.everest-form');
  const submitButton = contactForm.locator('button[type="submit"]');

  await expect(submitButton).toBeVisible();
  await expect(submitButton).toBeEnabled();
});


test('contact form fields accept user input', async ({ page }) => {
  await page.goto('https://practice.sdetunicorns.com/contact/');

  const contactForm = page.locator('form.everest-form');

  const textFields = contactForm.locator('input[type="text"]');
  const emailField = contactForm.locator('input[type="email"]');
  const messageField = contactForm.locator('textarea');

  await textFields.nth(0).fill('Chris Test');
  await emailField.fill('chris.test@example.com');
  await textFields.nth(1).fill('Playwright Practice');
  await messageField.fill('This is an automated test message.');

  await expect(textFields.nth(0)).toHaveValue('Chris Test');
  await expect(emailField).toHaveValue('chris.test@example.com');
  await expect(textFields.nth(1)).toHaveValue('Playwright Practice');
  await expect(messageField).toHaveValue(
    'This is an automated test message.'
  );
});


test('Contact link opens the Contact page', async ({ page }) => {
  await page.goto('https://practice.sdetunicorns.com/');

  const contactLink = page.getByRole('link', {
    name: 'Contact',
    exact: true
  }).first();

  await expect(contactLink).toBeVisible();

  await contactLink.click();

  await expect(page).toHaveURL(/\/contact\/?$/);
});

