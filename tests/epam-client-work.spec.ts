import { test, expect } from '@playwright/test';

/**
 * Test Scenario: EPAM Client Work Navigation
 *
 * Steps:
 * 1. Navigate to https://www.epam.com/
 * 2. Select "Services" from the header menu
 * 3. Click the "Explore Our Client Work" link
 * 4. Verify that the "Client Work" text is visible on the page
 */
test.describe('EPAM Client Work Navigation', () => {
  test('should navigate to Client Work page via Services menu', async ({ page }) => {

    // Step 1: Navigate to EPAM homepage
    await page.goto('https://www.epam.com/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(5000);

    // Step 2: Select "Services" from the header menu
    // Hover over the Services link in the top navigation to expose the dropdown
    await page.hover('.top-navigation__item-link[href="/services"]');
    await page.waitForTimeout(2000);

    // Step 3: Click the "Explore Our Client Work" link
    // The link is rendered in the hero carousel section of the homepage
    await page.click('a[href="https://www.epam.com/services/client-work"]:visible');
    await page.waitForTimeout(5000);

    // Step 4: Verify that "Client Work" text is visible on the page
    await expect(page).toHaveURL(/\/services\/client-work/);
    await expect(page.locator('body')).toContainText('Client Work');
  });
});
