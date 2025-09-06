// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://katalon-demo-cura.herokuapp.com/');
//   await page.getByRole('link', { name: 'Make Appointment' }).click();
//   await page.getByLabel('Username').click();
//   await page.getByLabel('Username').fill('John doe');
//   await page.getByLabel('Password').click();
//   await page.getByLabel('Password').fill('Thisisnot a pawsse');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByText('Login failed! Please ensure').click();
// });

// import { test, expect } from '@playwright/test';

// test('login with invalid credentials', async ({ page }) => {
//   // Use a single try...catch block to handle failures for the entire test.
//   try {
//     // 1. Navigate to the page and assert the URL
//     await page.goto('https://katalon-demo-cura.herokuapp.com/');
//     await expect(page).toHaveURL('https://katalon-demo-cura.herokuapp.com/');

//     // 2. Click "Make Appointment" and assert that the login page is visible.
//     await page.getByRole('link', { name: 'Make Appointment' }).click();
//     await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();

//     // 3. Fill in the username and password fields.
//     // Assert that the input fields have the correct values after filling them.
//     await page.getByLabel('Username').fill('John doe');
//     await expect(page.getByLabel('Username')).toHaveValue('John doe');

//     await page.getByLabel('Password').fill('Thisisnot a pawsse');
//     await expect(page.getByLabel('Password')).toHaveValue('Thisisnot a pawssekkkk');

//     // 4. Click the login button.
//     await page.getByRole('button', { name: 'Login' }).click();

//     // 5. Assert that the "Login failed!" message is visible after clicking the button.
//     // This confirms the test has reached the expected failure state.
//     await expect(page.getByText('Login failed! Please ensure')).toBeVisible();

//   } catch (error) {
//     // This block is executed if any step in the `try` block fails.
//     console.error('Test failed:', error);
    
//     // Generate a unique screenshot path using a timestamp.
//     const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
//     const screenshotPath = `my-tests/screenshots/login-test-failure-${timestamp}.png`;
    
//     console.error(`Taking screenshot and saving to: ${screenshotPath}`);
//     await page.screenshot({ path: screenshotPath });
    
//     // Re-throw the error to ensure Playwright marks the test as a failure.
//     throw error;
//   }
// });

// import { test, expect } from '@playwright/test';

// test('login with invalid credentials', async ({ page }) => {
//   // Use a single try...catch block to handle failures for the entire test.
//   try {
//     // 1. Navigate to the page and assert the URL
//     await page.goto('https://katalon-demo-cura.herokuapp.com/');
//     await expect(page).toHaveURL('https://katalon-demo-cura.herokuapp.com/');

//     // 2. Click "Make Appointment" and assert that the login page is visible.
//     await page.getByRole('link', { name: 'Make Appointment' }).click();
//     await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();

//     // 3. Fill in the username and password fields.
//     // Assert that the input fields have the correct values after filling them.
//     await page.getByLabel('Username').fill('John doe');
//     await expect(page.getByLabel('Username')).toHaveValue('John doe');

//     // This locator has been changed to 'passwordddd', which will cause the test to fail.
//     await page.getByLabel('passwordddd').fill('Thisisnot a pawsse');
//     await expect(page.getByLabel('passwordddd')).toHaveValue('Thisisnot a pawsse');

//     // 4. Click the login button.
//     await page.getByRole('button', { name: 'Login' }).click();

//     // 5. Assert that the "Login failed!" message is visible after clicking the button.
//     // This confirms the test has reached the expected failure state.
//     await expect(page.getByText('Login failed! Please ensure')).toBeVisible();

//   } catch (error) {
//     // This block is executed if any step in the `try` block fails.
//     console.error('Test failed:', error);
    
//     // Generate a unique screenshot path using a timestamp.
//     const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
//     const screenshotPath = `my-tests/screenshots/login-test-failure-${timestamp}.png`;
    
//     console.error(`Taking screenshot and saving to: ${screenshotPath}`);
//     await page.screenshot({ path: screenshotPath });
    
//     // Re-throw the error to ensure Playwright marks the test as a failure.
//     throw error;
//   }
// });

// import { test, expect } from '@playwright/test';

// test('login with invalid credentials', async ({ page }) => {
//   // Use a single try...catch block to handle failures for the entire test.
//   try {
//     // 1. Navigate to the page and assert the URL
//     await page.goto('https://katalon-demo-cura.herokuapp.com/');
//     await expect(page).toHaveURL('https://katalon-demo-cura.herokuapp.com/');

//     // 2. Click "Make Appointment" and assert that the login page is visible.
//     await page.getByRole('link', { name: 'Make Appointment' }).click();
//     await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();

//     // 3. Fill in the username and password fields.
//     // Assert that the input fields have the correct values after filling them.
//     await page.getByLabel('Username').fill('John doe');
//     await expect(page.getByLabel('Username')).toHaveValue('John doe');

//     // This locator has been changed to 'passwordddd', which will cause the test to fail.
//     await page.getByLabel('passwordddd').fill('Thisisnot a pawsse');
//     await expect(page.getByLabel('passwordddd')).toHaveValue('Thisisnot a pawsse');

//     // 4. Click the login button.
//     await page.getByRole('button', { name: 'Login' }).click();

//     // 5. Assert that the "Login failed!" message is visible after clicking the button.
//     // This confirms the test has reached the expected failure state.
//     await expect(page.getByText('Login failed! Please ensure')).toBeVisible();

//   } catch (error) {
//     // This block is executed if any step in the `try` block fails.
//     console.error('Test failed:', error);
    
//     // Generate a unique screenshot path using a timestamp.
//     const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
//     const screenshotPath = `my-tests/screenshots/login-test-failure-${timestamp}.png`;
    
//     console.error(`Taking screenshot and saving to: ${screenshotPath}`);
//     // This line will now succeed because we have removed the conflicting page.close()
//     await page.waitForTimeout(1000); 
//     await page.screenshot({ path: screenshotPath });
    
//     // Re-throw the error to ensure Playwright marks the test as a failure.
//     throw error;
//   }
// });


import { test, expect } from '@playwright/test';

test.describe('Login test suite', () => {

  test('login with invalid credentials', async ({ page }) => {
    // 1. Navigate to the page and assert the URL
    await page.goto('https://katalon-demo-cura.herokuapp.com/');
    await expect(page).toHaveURL('https://katalon-demo-cura.herokuapp.com/');

    // 2. Click "Make Appointment" and assert that the login page is visible.
    await page.getByRole('link', { name: 'Make Appointment' }).click();
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();

    // 3. Fill in the username and password fields.
    // Assert that the input fields have the correct values after filling them.
    await page.getByLabel('Username').fill('John doe');
    await expect(page.getByLabel('Username')).toHaveValue('John doe');

    // This locator has been changed to 'passwordddd', which will cause the test to fail.
    await page.getByLabel('passwordddd').fill('Thisisnot a pawsse');
    await expect(page.getByLabel('passwordddd')).toHaveValue('Thisisnot a pawsse');

    // 4. Click the login button.
    await page.getByRole('button', { name: 'Login' }).click();

    // 5. Assert that the "Login failed!" message is visible after clicking the button.
    // This confirms the test has reached the expected failure state.
    await expect(page.getByText('Login failed! Please ensure')).toBeVisible();
  });

  // This hook runs after all tests in this describe block have finished.
  test.afterAll(async ({ page }, testInfo) => {
    // Check if the test's final status is not what was expected.
    // This will be true for failures, timeouts, etc.
    if (testInfo.status !== testInfo.expectedStatus) {
      console.error('Test failed:', testInfo.error?.message);
      
      // Generate a unique screenshot path using a timestamp.
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const screenshotPath = `my-tests/screenshots/login-test-failure-${timestamp}.png`;
      
      console.error(`Taking screenshot and saving to: ${screenshotPath}`);
      // This will now reliably capture the screenshot because it runs before
      // the browser context is closed.
      await page.screenshot({ path: screenshotPath });
    }
  });

});