import {test, expect } from '@playwright/test';

try {
test ('alerts and popups', async({page})=>{
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/')
    await page.once('dialog', async dialog => {
        console.log('Dialog message:', dialog.message());
        const promptmsg = 'playwright test'
        await dialog.accept(promptmsg);
        console.log('Dialog accepted with message:', promptmsg);
        // await dialog.dismiss()
      });
  try { 
    await expect (page.getByText('See a sample prompt.')).toBeVisible();
    await page.getByText('See a sample prompt', {exact :true}).click();

    const resultText = await page.locator('#result').textContent();
    expect(resultText).toContain('playwright test');
    
    console.log('See a sample prompt is visible');
    console.log('Clicked on "See a sample prompt"');}
    catch (error) {

        console.error('Error clicking on "See a sample prompt":', error);
        const screenshotPath = 'my-tests/screenshots/error-screenshot.png';
    
        await page.screenshot({ path: screenshotPath });
         console.error(`Taking screenshot and saved to ${screenshotPath}`);
        await page.waitForTimeout(5000); // Wait for 2 seconds before closing the page
        throw error; // Re-throw the error after logging
        }
   await page.close();


})}
catch (error) {
  // Catch the error and log the full stack trace to the console
  console.error('An error occurred while running the alerts and popups test:');
  console.error(error);
}
