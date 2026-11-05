
# Playwright Automation Portfolio

A hands-on software test automation portfolio demonstrating UI automation, REST API testing, TypeScript, Playwright fixtures, Page Object Model (POM), data-driven testing, reusable test data, and automated test reporting.

**GitHub Repository:** https://github.com/ChristianHillebrand/playwright-portfolio

## Project Overview

This project demonstrates practical software test automation techniques using Playwright and TypeScript.

The portfolio includes browser-based UI tests and REST API tests, with an emphasis on reusable code, maintainable test architecture, functional validation, and reliable test execution.

The project uses a practice website and a demo REST API.

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
├── package-lock.json
└── .gitignore
```

## Automated Test Coverage

**31 automated tests currently passing.**

### 1. REST API Automation — 15 Tests

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
- Testing update requests for nonexistent records
- Validating server error responses and error messages

**Note:** JSONPlaceholder is a simulated API. Its write operations do not persist data, and it accepts some incomplete or incorrectly typed payloads. The nonexistent-record update test documents an observed HTTP 500 response and server error message. This represents the demo API's behavior, not desirable production API behavior.

### 2. Contact Page UI Automation — 12 Tests

- Contact form visibility
- Contact page navigation
- Submit button visibility and enabled state
- Form field input handling
- Required-field validation
- Invalid email validation
- Data-driven testing with multiple invalid email formats
- Successful form submission
- Validation error handling
- Long-input and boundary testing
- Verification that form fields retain entered values

### 3. Homepage UI Automation — 4 Tests

- Homepage title verification
- About page navigation
- Visible heading verification
- Homepage navigation visibility and link-destination validation

## Automation Architecture

### Page Object Model (POM)

Implemented a reusable `ContactPage` class to centralize page locators and navigation methods.

### Custom Playwright Fixtures

Implemented custom fixtures to initialize reusable page objects and navigate to the required application page.

### Reusable Test Data

Separated test data from test logic using dedicated data files for API and UI testing.

### Data-Driven Testing

Used reusable arrays of invalid email addresses to execute the same validation scenario against multiple input formats.

### TypeScript Interfaces

Implemented interfaces to define and enforce consistent test-data structures.

### Playwright Lifecycle Hooks

Demonstrated Playwright lifecycle hooks, including:

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
npm test
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
npm run test:report
```

## Learning & Development

This portfolio is an ongoing project focused on developing practical automation engineering skills.

Current learning areas include:

- Playwright automation
- TypeScript
- JavaScript
- REST API testing with Postman and Playwright
- Test automation architecture
- Page Object Model
- Data-driven testing
- Test data management
- Functional and regression testing
- Git and GitHub

## Professional Background

This project builds upon 21 years of professional experience in software quality assurance, customer support, troubleshooting, and software testing.

It demonstrates the development of hands-on automation skills and the application of established QA experience to modern automated software testing.

## Project Status

**Current status: 31 passing automated tests.**

| Test Category | Passing Tests |
|---|---:|
| REST API Automation | 15 |
| Contact Page UI Automation | 12 |
| Homepage UI Automation | 4 |
| **Total** | **31** |

The project continues to evolve with additional automation scenarios, framework improvements, and testing techniques.

