import { test, expect } from '@playwright/test';

import path = require("path"); 
import * as dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '.env') });
import {readcsv} from 'C:/Users/user/OneDrive/Desktop/typeplay/my-tests/utils/csv-reader'; // Adjust the import path as necessary

console.log('../csv-reader')
// The code below is where the crash is likely occurring.
let records: any[] = [];
try {
  let csvFilePath = path.resolve(__dirname, '../testdata.csv'); // my tests\testdata\testdata.csv
  console.log('CSV File Path:', csvFilePath);
  records = readcsv(csvFilePath);
  console.log('Successfully read CSV file with', records.length, 'records.');
} catch (error) {
  // Catch the error and log the full stack trace to the console
  console.error('An error occurred while reading the CSV file:');
  console.error(error);
}

// Only proceed with creating tests if records were successfully loaded
if (records.length > 0) {
  for(const record of records){
    test(`login test for ${record.username}`, async ({ page }) => {
      const loginpage = new loginpage(page);



    //   const loginUrl = `${process.env.cura_url}`;
    //   console.log('cura_url:', process.env.cura_url);
    //   await page.goto(loginUrl);
    //   await page.getByRole('link',{name:'Make Appointment'}).click();
    //   await page.getByLabel('Username').fill(record.username);
    //   await page.getByLabel('Password').fill(record.password);

    //   await page.click('#btn-login');
    });
  }
} else {
  // If the CSV was empty or an error occurred, run a test that intentionally fails
  test.skip('CSV file is empty or could not be read.', () => {
    // This test will be skipped but will provide a clear message in the test report
    // to indicate that the data-driven test could not be set up.
  });
}