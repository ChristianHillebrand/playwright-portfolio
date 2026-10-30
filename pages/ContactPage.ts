
import { type Page, type Locator } from '@playwright/test';

export class ContactPage {
  readonly page: Page;
  readonly contactForm: Locator;
  readonly nameField: Locator;
  readonly emailField: Locator;
  readonly phoneField: Locator;
  readonly messageField: Locator;
  readonly submitButton: Locator;
  readonly requiredFieldErrors: Locator;
  readonly emailValidationError: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.contactForm = page.locator('form.everest-form');

    const textFields = this.contactForm.locator('input[type="text"]');

    this.nameField = textFields.nth(0);
    this.phoneField = textFields.nth(1);
    this.emailField = this.contactForm.locator('input[type="email"]');
    this.messageField = this.contactForm.locator('textarea');

    this.submitButton = this.contactForm.locator(
      'button[type="submit"]'
    );

    this.requiredFieldErrors = this.contactForm.getByText(
      'This field is required.',
      { exact: true }
    );

    this.emailValidationError = this.contactForm.getByText(
      'Please enter a valid email address.',
      { exact: true }
    );

  this.successMessage = this.page.getByText(
  'Thanks for contacting us! We will be in touch with you shortly',
  { exact: true }
);
  }

  async goto() {
    await this.page.goto('/contact/');
  }
}
