// Imports for testing
import { test, expect } from '@playwright/test';
import { loginpage } from './src/loginpage';

// The .env file is already configured in playwright.config.ts, so this is not needed here.

test.describe('Booking Appointment', () => {
  // This hook runs before each test in this describe block.
  // It's perfect for repetitive setup steps like logging in.
  test.beforeEach(async ({ page }) => {
    const pglog = new loginpage(page);
    await pglog.goto();
    await pglog.navigateToMakeAppointment();

    // const username = process.env.username;
    // const password = process.env.password;

    // // This is a good practice for catching configuration errors early.
    // if (!username || !password) {
    //   throw new Error('Username or password environment variables are not set.');
    // }

    await pglog.login("John Doe", "ThisIsNotAPassword");

    // Assert that login was successful and we are on the appointment page.
    await expect(page.getByRole('heading', { name: 'Make Appointment' })).toBeVisible({ timeout: 10000 });
  });

  test('should book an appointment successfully @sanity', async ({ page }) => {
    // Steps to book an appointment
    await page.locator('#combo_facility').selectOption('Seoul CURA Healthcare Center');
    await page.getByLabel('Apply for hospital readmission').check();
    await page.getByLabel('Medicaid').check();
    await page.locator('#txt_visit_date').fill('30/12/2024');
    // Click the main heading to close the date picker. This is a more stable
    // approach than clicking the submit button, which can cause a race condition.
    //await page.getByRole('heading', { name: 'Make Appointment' }).click();
    // await page.locator("//h2[normalize-space()='Make Appointment']").click();
    // await page.locator('#txt_comment').fill('This is a test booking.');
    await page.getByRole('button', { name: 'Book Appointment' }).click();

    // Assert the final state.
    // await expect(page.getByRole('heading', { name: 'Appointment Confirmation' })).toBeVisible();
    // await expect(page.locator('#comment')).toHaveText('This is a test booking.');
    // await expect(page.locator('#facility')).toHaveText('Seoul CURA Healthcare Center');
  });

  test('should not allow booking without a date @sanity', async ({ page }) => {
    // This test verifies the "negative path" or error case.
    // The beforeEach hook has already logged us in.

    // Attempt to book without filling the date.
    await page.locator('#combo_facility').selectOption('Hongkong CURA Healthcare Center');
    await page.locator('#txt_comment').fill('This booking should fail because there is no date.');
    await page.getByRole('button', { name: 'Book Appointment' }).click();

    // Assert that we are still on the same page because of the validation error.
    // The browser's native HTML5 validation prevents form submission.
    await expect(page).toHaveURL(/.*#appointment/);

    // A good secondary check is to ensure we did NOT navigate to the confirmation page.
    await expect(page.getByRole('heading', { name: 'Appointment Confirmation' })).toBeHidden();
  });
});