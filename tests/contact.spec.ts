import { test, expect } from './fixtures';
import {
  validContactData,
  invalidContactData,
  invalidEmailAddresses
} from './test-data/contact.data';

test('contact form has visible input fields', async ({ contactPage }) => {
  await expect(contactPage.contactForm).toBeVisible();

  await expect(contactPage.nameField).toBeVisible();
  await expect(contactPage.phoneField).toBeVisible();
  await expect(contactPage.emailField).toBeVisible();
  await expect(contactPage.messageField).toBeVisible();
});


test('contact page displays the contact form', async ({ contactPage }) => {
  await expect(contactPage.page).toHaveURL(/contact/);

  const contactForm = contactPage.contactForm;

  await expect(contactForm).toBeVisible();
});


test('contact form submit button is visible and enabled', async ({ contactPage }) => {
  await expect(contactPage.submitButton).toBeVisible();
  await expect(contactPage.submitButton).toBeEnabled();
});

test('contact form fields accept user input', async ({ contactPage }) => {

  // Enter information into the contact form
  await contactPage.nameField.fill('John Smith');
  await contactPage.emailField.fill('john@example.com');
  await contactPage.phoneField.fill('2525551234');
  await contactPage.messageField.fill('I am testing the contact form.');

  // Verify that each field contains the expected information
  await expect(contactPage.nameField).toHaveValue('John Smith');
  await expect(contactPage.emailField).toHaveValue('john@example.com');
  await expect(contactPage.phoneField).toHaveValue('2525551234');
  await expect(contactPage.messageField).toHaveValue('I am testing the contact form.');
});


test('Contact link opens the Contact page', async ({ page }) => {
 await page.goto('/');

  const contactLink = page.getByRole('link', {
    name: 'Contact',
    exact: true
  }).first();

  await expect(contactLink).toBeVisible();

  await contactLink.click();

  await expect(page).toHaveURL(/\/contact\/?$/);
});


test('contact form displays validation errors for empty required fields', async ({ contactPage }) => {

  // Submit the empty form to trigger validation errors.
  await contactPage.submitButton.click();

  // Verify that two required-field errors appear.
  await expect(contactPage.requiredFieldErrors).toHaveCount(2);

  // Verify that both required-field errors are visible.
  await expect(contactPage.requiredFieldErrors.nth(0)).toBeVisible();
  await expect(contactPage.requiredFieldErrors.nth(1)).toBeVisible();

  // Verify that the email validation error appears.
  await expect(contactPage.emailValidationError).toBeVisible();
});

for (const email of invalidEmailAddresses) {
  test(`contact form rejects invalid email: ${email}`, async ({ contactPage }) => {

    await contactPage.nameField.fill(invalidContactData.name);
    await contactPage.phoneField.fill(invalidContactData.phone);
    await contactPage.messageField.fill(invalidContactData.message);
    await contactPage.emailField.fill(email);

    await contactPage.submitButton.click();

    // Verify that the email validation error appears.
    await expect(contactPage.emailValidationError).toBeVisible();

    // Verify that no required-field errors appear.
    await expect(
      contactPage.contactForm.getByText('This field is required.', {
        exact: true
      })
    ).toHaveCount(0);
  });
}


test('contact form accepts valid input after validation errors', async ({ contactPage }) => {

  // Submit the empty form to trigger validation errors.
  await contactPage.submitButton.click();

  // Confirm that validation errors appear.
  await expect(contactPage.requiredFieldErrors).toHaveCount(2);
  await expect(contactPage.emailValidationError).toBeVisible();

  // Enter valid test data.
  await contactPage.nameField.fill(validContactData.name);
  await contactPage.emailField.fill(validContactData.email);
  await contactPage.phoneField.fill(validContactData.phone);
  await contactPage.messageField.fill(validContactData.message);

  // Submit the completed form.
  await contactPage.submitButton.click();

  // Verify that the validation errors disappear.
  await expect(contactPage.requiredFieldErrors).toHaveCount(0);
  await expect(contactPage.emailValidationError).toHaveCount(0);
  // Verify that the form was successfully submitted.
  await expect(contactPage.successMessage).toBeVisible();
});


test('contact form accepts long input values', async ({ contactPage }) => {

  const longName = 'Chris '.repeat(50);
  const longMessage = 'This is a boundary testing message. '.repeat(100);

  await contactPage.nameField.fill(longName);
  await contactPage.emailField.fill(validContactData.email);
  await contactPage.phoneField.fill(validContactData.phone);
  await contactPage.messageField.fill(longMessage);

  await expect(contactPage.nameField).toHaveValue(longName);
  await expect(contactPage.messageField).toHaveValue(longMessage);
});