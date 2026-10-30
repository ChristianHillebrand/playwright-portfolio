
import { test, expect } from './fixtures';


test('homepage displays the expected title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/SDET Unicorns/i);
});

test('About link opens the About page', async ({ page }) => {
  await page.goto('/');

  const aboutLink = page.getByRole('link', {
    name: 'About',
    exact: true
  }).first();

  await expect(aboutLink).toBeVisible();

  await aboutLink.click();

  await expect(page).toHaveURL(/\/about\/?$/);
});




  
   
 