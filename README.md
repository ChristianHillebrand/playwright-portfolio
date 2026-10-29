

# Playwright QA Automation Portfolio

## About This Project

This project demonstrates my hands-on learning and development in automated software testing using Playwright and TypeScript.

With 21 years of experience in Quality Assurance and customer support, I am expanding my testing skills into browser automation and modern QA engineering practices.

## Technologies

- Playwright Test
- TypeScript
- Node.js
- Git and GitHub
- Visual Studio Code

## Automated Test Coverage

The current test suite includes six automated tests:

1. **Homepage title validation** — verifies that the homepage displays the expected title.
2. **Navigation testing** — verifies that the About link opens the correct page.
3. **Contact page validation** — verifies that the contact form is visible.
4. **Form field validation** — verifies that the expected input fields are visible.
5. **Input testing** — enters sample data and verifies that the form fields accept the values.
6. **Submit button validation** — verifies that the contact form's submit button is visible and enabled.

## How to Run the Tests

### Prerequisites

- Node.js and npm
- Git
- Visual Studio Code (recommended)

### Installation

Clone the repository and navigate into the project folder:

```bash
git clone https://github.com/ChristianHillebrand/playwright-portfolio.git
cd playwright-portfolio
```

Install the project dependencies:

```bash
npm install
```

Install the Chromium browser used by Playwright:

```bash
npx playwright install chromium
```

### Run the Tests

```bash
npx playwright test tests/homepage.spec.ts --reporter=list
```

### View the HTML Test Report

```bash
npx playwright test tests/homepage.spec.ts --reporter=html
npx playwright show-report
```

## About Me

I bring extensive experience in software quality assurance, customer support, defect investigation, regression testing, and troubleshooting complex application issues.

I am currently developing my skills in JavaScript, Playwright automation, API testing fundamentals, and Git-based development workflows.

My goal is to combine my established QA experience with modern automation skills to contribute to software quality and reliable user experiences.

---

**Repository:** https://github.com/ChristianHillebrand/playwright-portfolio
