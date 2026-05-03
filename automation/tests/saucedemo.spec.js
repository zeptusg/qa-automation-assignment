const { test, expect } = require('@playwright/test');

test.describe('SauceDemo basic cart flow', () => {
    test('should login successfully and add one product to the cart', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');    // navigate to the saucedemo website
        // fill login form and submit
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();

        await expect(page).toHaveURL(/.*inventory\.html/);  // assert that we are on the inventory page
        await expect(page.locator('[data-test="title"]')).toHaveText('Products');  // assert that the title is "Products"
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click(); // add backpack to the cart, Selecting a specific product keeps the test deterministic and stable.

        const cartBadge = page.locator('[data-test="shopping-cart-badge"]'); // locate the cart badge element
        await expect(cartBadge).toBeVisible(); // assert that cart badge is visible
        await expect(cartBadge).toHaveText('1'); // assert that the cart badge shows "1" (1 item in the cart)
    });
});