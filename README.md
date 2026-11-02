
# Playwright Automation Portfolio

A hands-on software test automation portfolio demonstrating UI testing, REST API testing, TypeScript, Playwright fixtures, Page Object Model (POM), reusable test data, and automated test reporting.

**GitHub Repository:** https://github.com/ChristianHillebrand/playwright-portfolio

## Project Overview

This project demonstrates practical automation testing techniques using Playwright with TypeScript.

The portfolio includes browser-based UI tests and REST API tests, with an emphasis on reusable code, maintainable test architecture, and reliable test execution.

The project uses a practice e-commerce website and a demo REST API.

## Technologies & Tools

- Playwright
- TypeScript
- JavaScript
- Node.js
- REST API Testing
- Git and GitHub
- Visual Studio Code
- HTML Test Reporting

## Project Structure

```text
playwright-portfolio/
│
├── api-tests/
│   ├── posts.spec.ts
│   └── test-data/
│       └── posts.data.ts
│
├── pages/
│   └── ContactPage.ts
│
├── tests/
│   ├── test-data/
│   │   └── contact.data.ts
│   ├── fixtures.ts
│   ├── contact.spec.ts
│   └── homepage.spec.ts
│
├── playwright.config.ts
├── package.json
└── .gitignore
```

## Automated Test Coverage

**24 automated tests currently passing**

### 1. API Automation — 14 Tests

Using the JSONPlaceholder demo REST API:

- GET requests and response validation
- POST requests and new record creation
- PUT requests and record updates
- DELETE requests
- HTTP status-code validation
- Response content-type validation
- Required response-property validation
- Data-driven API testing
- Testing API behavior with missing fields
- Testing API behavior with incorrect data types

**Note:** JSONPlaceholder is a simulated API. Its write operations do not persist data, and it accepts some incomplete or incorrectly typed payloads. The related tests document that behavior rather than demonstrate strict server-side validation.

### 2. Contact Page UI Automation — 8 Tests

- Contact form visibility
- Contact page navigation
- Submit button visibility and enabled state
- Form field input validation
- Required-field validation
- Invalid email validation
- Successful form submission
- Validation error handling

### 3. Homepage UI Automation — 2 Tests

- Homepage title verification
- About page navigation

## Automation Architecture

### Page Object Model (POM)

Implemented a reusable `ContactPage` class to centralize page locators and navigation methods.

### Custom Playwright Fixtures

Implemented custom fixtures to initialize reusable page objects and navigate to the required application page.

### Reusable Test Data

Separated test data from test logic using dedicated data files for API and UI testing.

### TypeScript Interfaces

Implemented interfaces to define and enforce consistent test-data structures.

### Playwright Lifecycle Hooks

Demonstrated all four major lifecycle hooks:

- `beforeAll()`
- `beforeEach()`
- `afterEach()`
- `afterAll()`

### Parallel Test Execution

Configured Playwright to support parallel execution using multiple workers.

### HTML Reporting

Configured Playwright's HTML reporter to generate test execution reports.

## Running the Tests

Clone the repository:

```bash
git clone https://github.com/ChristianHillebrand/playwright-portfolio.git
```

Navigate into the project:

```bash
cd playwright-portfolio
```

Install dependencies:

```bash
npm install
```

Install the Chromium browser:

```bash
npx playwright install chromium
```

Run the complete test suite:

```bash
npx playwright test
```

Run API tests only:

```bash
npx playwright test api-tests/posts.spec.ts
```

Run contact page tests only:

```bash
npx playwright test tests/contact.spec.ts
```

Run homepage tests only:

```bash
npx playwright test tests/homepage.spec.ts
```

Run tests with one worker:

```bash
npx playwright test --workers=1
```

View the HTML test report:

```bash
npx playwright show-report
```

## Learning & Development

This portfolio is an ongoing project focused on developing practical automation engineering skills.

Current learning areas include:

- Playwright automation
- TypeScript
- JavaScript
- REST API testing with Postman and Playwright
- Test automation architecture
- Reusable test frameworks
- Test data management
- Git and GitHub

## Professional Background

This project builds upon more than 21 years of professional experience in software quality assurance, customer support, troubleshooting, and software testing.

The goal is to demonstrate the transition from extensive manual QA experience into modern automated software testing.

## Project Status

**Current status: 24 passing automated tests.**

Additional automation scenarios, framework improvements, and testing techniques will be added as the project develops.

