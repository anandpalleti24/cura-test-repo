//
import { test } from '@playwright/test';
import { loginpage } from './src/loginpage'; // Adjust the import path as necessary
import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '.env') });

console.log(__dirname)
// Using a relative path is more portable than a hardcoded absolute path.
import { readcsv } from './utils/csv-reader';

// Using __dirname makes the path relative to the current file, which is more robust.
const csvFilePath = path.resolve(__dirname, 'testdata/testdata.csv');
console.log('CSV File Path:', csvFilePath);
const records = readcsv(csvFilePath);
console.log('Successfully read CSV file with', records.length, 'records.');

for (const record of records) {
  // The test name now correctly references the lowercase 'expectedresult' from the CSV.
  test(`login test for ${record.username}(Expected: ${record.expectedresult}) @sanity`, async ({ page }) => {
    // The try...catch block must be inside the test function to catch runtime errors
    // and to have access to the 'page' object.
    try {
      const loginpageins = new loginpage(page);
      await loginpageins.goto();
      await loginpageins.navigateToMakeAppointment();
      await loginpageins.login(record.username, record.password);
      // Corrected property name to match the CSV header 'expectedresult'.
      if (record.expectedresult === 'success') {
        await loginpageins.validateLogin();
      } else if (record.expectedresult === 'failure') {
        await loginpageins.invalidLogin(record.username, record.password);
      }
      // It's generally not recommended to close the page manually. Playwright handles cleanup.
      // await loginpageins.close();
    } catch (error) {
      console.error(`Test failed for user: ${record.username}`);
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const screenshotPath = path.join(__dirname, 'screenshots', `failure-${record.username}-${timestamp}.png`);

      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`Screenshot saved to ${screenshotPath}`);
      // Re-throw the error to ensure Playwright marks the test as failed.
      throw error;
    }
  });
}
