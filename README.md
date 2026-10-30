# Playwright QA Automation Portfolio

## About This Project

This project demonstrates my hands-on development of automated software testing using Playwright and TypeScript.

With 21 years of experience in Quality Assurance and customer support, I am expanding my technical capabilities into browser automation and modern QA engineering practices.

The project focuses on practical UI automation, functional testing, form validation, navigation, and reusable test architecture using the Page Object Model (POM).

## Technologies

- Playwright Test
- TypeScript
- Node.js
- Git and GitHub
- Visual Studio Code

## Automated Test Coverage

The current test suite contains **10 automated UI tests** covering the following scenarios:

### Homepage Testing
1. **Homepage title validation** – verifies that the homepage displays the expected title.
2. **Navigation testing** – verifies that the About link opens the correct page.

### Contact Page and Form Testing
3. **Contact page validation** – verifies that the contact form is displayed.
4. **Form field visibility** – verifies that all expected input fields are visible.
5. **Input testing** – enters sample data and verifies that the fields contain the expected values.
6. **Submit button validation** – verifies that the submit button is visible and enabled.
7. **Contact navigation** – verifies that the Contact link opens the Contact page.
8. **Required-field validation** – verifies that appropriate validation errors appear when required fields are empty.
9. **Invalid email validation** – verifies that the form rejects an invalid email address.
10. **Successful form validation and submission** – verifies that validation errors disappear and the expected confirmation message appears after valid information is submitted.

## Test Architecture

This project uses the **Page Object Model (POM)** to organize and maintain automated tests.

Key components include:

- `pages/ContactPage.ts` – centralizes contact page locators and navigation.
- `tests/fixtures.ts` – provides reusable test setup and the ContactPage object.
- `tests/contact.spec.ts` – contains contact form and validation tests.
- `tests/homepage.spec.ts` – contains homepage and navigation tests.
- `playwright.config.ts` – defines Playwright test configuration.

This structure separates page interactions from test logic, improving readability, reusability, and maintainability.

## How to Run the Tests

### Prerequisites

- Node.js and npm
- Git
- Visual Studio Code (recommended)

### Installation

Clone the repository:

```bash
git clone https://github.com/ChristianHillebrand/playwright-portfolio.git
```

Navigate into the project directory:

```bash
cd playwright-portfolio
```

Install project dependencies:

```bash
npm install
```

Install the Chromium browser:

```bash
npx playwright install chromium
```

### Run All Tests

```bash
npm test
```

### Run Tests with a Visible Browser

```bash
npm run test:headed
```

### View the HTML Test Report

```bash
npm run test:report
```

The HTML report provides a summary of test execution, including passed and failed tests.

## About Me

I bring 21 years of experience in software Quality Assurance and customer support, including functional testing, regression testing, defect investigation, troubleshooting, technical documentation, and customer issue resolution.

Throughout my career, I have worked with complex software applications, investigated difficult application issues, collaborated with development teams, and helped ensure reliable software experiences for customers.

I am currently developing additional technical skills in:

- JavaScript and TypeScript
- Playwright UI automation
- API testing with Postman
- Automated testing practices
- Git and GitHub workflows

My goal is to combine my extensive hands-on QA and customer support experience with modern automation skills to contribute to software quality and reliable application delivery.

## Repository

[GitHub – Playwright QA Automation Portfolio](https://github.com/ChristianHillebrand/playwright-portfolio)
