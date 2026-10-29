
import { test, expect, type Page } from '@playwright/test';

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
  await openContactPage(page);

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
  await openContactPage(page);

  await expect(page).toHaveURL(/contact/);

  const contactForm = page.locator('form.everest-form');

  await expect(contactForm).toBeVisible();
});

test('contact form submit button is visible and enabled', async ({ page }) => {
  await openContactPage(page);

  const contactForm = page.locator('form.everest-form');
  const submitButton = contactForm.locator('button[type="submit"]');

  await expect(submitButton).toBeVisible();
  await expect(submitButton).toBeEnabled();
});


test('contact form fields accept user input', async ({ page }) => {
  await openContactPage(page);

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


test('contact form displays validation errors for empty required fields', async ({ page }) => {
  await openContactPage(page);

  const contactForm = page.locator('form.everest-form');
  const submitButton = contactForm.locator('button[type="submit"]');

  await expect(contactForm).toBeVisible();

  // Submit the form without entering any data.
  await submitButton.click();

  // Find the validation messages.
  const requiredFieldErrors = contactForm.getByText(
    'This field is required.',
    { exact: true }
  );

  const emailValidationError = contactForm.getByText(
    'Please enter a valid email address.',
    { exact: true }
  );

  // Verify that both required-field errors appear.
  await expect(requiredFieldErrors).toHaveCount(2);
  await expect(requiredFieldErrors.nth(0)).toBeVisible();
  await expect(requiredFieldErrors.nth(1)).toBeVisible();

  // Verify that the email validation error appears.
  await expect(emailValidationError).toBeVisible();
});

test('contact form rejects an invalid email address', async ({ page }) => {
  await openContactPage(page);

  const contactForm = page.locator('form.everest-form');
  const submitButton = contactForm.locator('button[type="submit"]');

  const textFields = contactForm.locator('input[type="text"]');
  const emailField = contactForm.locator('input[type="email"]');
  const messageField = contactForm.locator('textarea');

  // Complete the other fields.
  await textFields.nth(0).fill('Chris Test');
  await textFields.nth(1).fill('2525550123');
  await messageField.fill('Testing invalid email validation.');

  // Enter an invalid email address.
  await emailField.fill('not-an-email');

  // Attempt to submit the form.
  await submitButton.click();

  // Verify that the email validation error appears.
  await expect(
    contactForm.getByText('Please enter a valid email address.', {
      exact: true
    })
  ).toBeVisible();

  // Verify that the other required fields were accepted.
  await expect(
    contactForm.getByText('This field is required.', {
      exact: true
    })
  ).toHaveCount(0);
});


test('contact form accepts valid input after validation errors', async ({ page }) => {
  await openContactPage(page);

  const contactForm = page.locator('form.everest-form');
  const submitButton = contactForm.locator('button[type="submit"]');

  const textFields = contactForm.locator('input[type="text"]');
  const emailField = contactForm.locator('input[type="email"]');
  const messageField = contactForm.locator('textarea');

  // Submit the empty form to trigger validation errors.
  await submitButton.click();

  // Confirm that the validation errors appear.
  await expect(
    contactForm.getByText('This field is required.', { exact: true })
  ).toHaveCount(2);

  await expect(
    contactForm.getByText('Please enter a valid email address.', {
      exact: true
    })
  ).toBeVisible();

  // Enter valid test data.
  await textFields.nth(0).fill('Chris Test');
  await emailField.fill('chris.test@example.com');
  await textFields.nth(1).fill('2525550123');
  await messageField.fill('Testing successful form validation.');

  // Submit the completed form.
  await submitButton.click();

  // Verify that the validation errors are gone.
  await expect(
    contactForm.getByText('This field is required.', { exact: true })
  ).toHaveCount(0);

  await expect(
    contactForm.getByText('Please enter a valid email address.', {
      exact: true
    })
  ).toHaveCount(0);
});


async function openContactPage(page: Page) {
  await page.goto('https://practice.sdetunicorns.com/contact/');
}
