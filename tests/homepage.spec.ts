import { test, expect } from './fixtures';

// Runs once before the tests in this file.
test.beforeAll(async () => {
  console.log('Starting homepage test suite');
});

// Runs before every test.
test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

// Runs after every test.
test.afterEach(async ({ page }) => {
  console.log(`Finished test at: ${page.url()}`);
});

// Runs once after the tests in this file.
test.afterAll(async () => {
  console.log('Finished homepage test suite');
});

test('homepage displays the expected title', async ({ page }) => {
  await expect(page).toHaveTitle(/SDET Unicorns/i);
});



test('homepage displays a visible heading', async ({ page }) => {
  const heading = page.getByRole('heading', {
    name: /.+/
  }).filter({ visible: true }).first();

  await expect(heading).toBeVisible();
});



test('About link opens the About page', async ({ page }) => {
  const aboutLink = page.getByRole('link', {
    name: 'About',
    exact: true
  }).first();

  await expect(aboutLink).toBeVisible();

  await aboutLink.click();

  await expect(page).toHaveURL(/about/);
});


test('homepage navigation links have valid destinations', async ({ page }) => {
  const navigation = page.getByRole('navigation').first();

  await expect(navigation).toBeVisible();

  const navigationLinks = navigation.getByRole('link');
  const linkCount = await navigationLinks.count();

  expect(linkCount).toBeGreaterThan(0);

  for (let i = 0; i < linkCount; i++) {
    const href = await navigationLinks.nth(i).getAttribute('href');

    expect(href, `Navigation link ${i + 1} should have a destination`)
      .toBeTruthy();
  }
});



  
   
 