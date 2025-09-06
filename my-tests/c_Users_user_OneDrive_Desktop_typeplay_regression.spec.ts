import { test, expect } from '@playwright/test';

// A regression suite ensures that existing functionality remains intact after new changes.
// These tests are typically more detailed than sanity tests.
test.describe("@Regression Tests for Appointment Booking", () => {

  // The '@regression' tag allows you to run regression tests using `npx playwright test --grep @regression`.
  test('should allow a user to book an appointment regression', async ({ page }) => {
    await page.goto('https://katalon-demo-cura.herokuapp.com/');

    // 1. Navigate to the login page
    await page.getByRole('link', { name: 'Make Appointment' }).click();
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();

    // 2. Login with valid credentials
    // Using demo credentials from the site
    await page.getByLabel('Username').fill('John Doe');
    await page.getByLabel('Password').fill('ThisIsNotAPassword');
    await page.getByRole('button', { name: 'Login' }).click();

    // 3. Fill out the appointment form
    await expect(page.getByRole('heading', { name: 'Make Appointment' })).toBeVisible();

    // Select a facility
    await page.getByLabel('Facility').selectOption('Hongkong CURA Healthcare Center');

    // Check the readmission box
    await page.getByRole('checkbox', { name: 'Apply for hospital readmission' }).check();
    await expect(page.getByRole('checkbox', { name: 'Apply for hospital readmission' })).toBeChecked();

    // Select a healthcare program
    await page.getByRole('radio', { name: 'Medicaid' }).check();

    // Pick a visit date and click outside to close the date picker
    await page.getByLabel('Visit Date (Required)').fill('30/07/2024');
    expect (page.getByLabel('Visit Date (Required)')).toHaveValue('30/07/2024')
    //await page.getByRole('heading', { name: 'Make Appointment' }).click();

    // Add a comment
    await page.getByLabel('Comment').fill('This is a test appointment for regression suite.');

    // 4. Book the appointment and verify confirmation
    await page.getByRole('button', { name: 'Book Appointment' }).click();

    await expect(page.getByRole('heading', { name: 'Appointment Confirmation' })).toBeVisible();
    await expect(page.locator('#comment')).toHaveText('This is a test appointment for regression suite.');
  });
});
