import {test, expect } from '@playwright/test';

// test('checkboxandradiobuttons', async({page})=>{
//     await page.goto('https://testautomationpractice.blogspot.com/')
// const maleRadio = page.getByRole('radio', { name: 'Male', exact: true })
// await maleRadio.check();

// await expect(maleRadio).toBeChecked();

// expect(await maleRadio.isChecked()).toBeTruthy

// const femaleradio = page.getByRole('radio',{name:'female',exact:true})
// expect(await femaleradio).not.toBeChecked()

//*[@type='checkbox' and @id='monday']

//  await page.goto('https://testautomationpractice.blogspot.com/')

//  const checkboxlocaters = [
//     "//*[@type='checkbox' and @id='monday']" 
//     , "//*[@type='checkbox' and @id='tuesday']"
//     , "//*[@type='checkbox' and @id='wednesday']"   
//     , "//*[@type='checkbox' and @id='thursday']"
//     , "//*[@type='checkbox' and @id='friday']"
//  ]
//   for(const locaotr of checkboxlocaters){
//  await page.locator(locaotr).check()
//   }
 
// for (const locator of checkboxlocaters){
//    if(await page.locator(locator).isChecked()){
//       await page.locator(locator).uncheck()

//    }
// }



// test('dropdown', async({page})=>{
// await page.goto("https://testautomationpractice.blogspot.com/")

// const options = await page.$$('#country option')

// const countryNames = await Promise.all(
//   options.map(async (opt) => (await opt.textContent())?.trim() ?? "")
// );
//  expect(countryNames).toContain("India")
 
// })


// test("auto sug dropdown", async ({page})=>{

// await page.goto('https://www.redbus.in/')

// const from = page.getByRole('button', { name: /from/i });
// await from.click();

// const fromInput = page.getByRole('textbox', { name: /from/i });
// await fromInput.waitFor({ state: 'visible', timeout: 10000 });
// await fromInput.fill("hyderabad");

// await page.waitForTimeout(2000);

// test('uploadfiles',async({page})=>{


//    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
//    await page.waitForURL("https://davidwalsh.name/demo/multiple-file-upload.php")
//    await page.waitForSelector("//input[@name='filesToUpload']")

// await page.locator("//input[@name='filesToUpload']").setInputFiles(['my tests/uploadfiles/drylab.pdf','my tests/uploadfiles/example.pdf'])

// expect(await page.locator("(//ul[@id='fileList']/li)[1]")).toContainText(['drylab.pdf'])
// expect(await page.locator("(//ul[@id='fileList']/li)[2]")).toContainText(['example.pdf'])
// await page.waitForTimeout(2000)

// await page.locator("//input[@name='filesToUpload']").setInputFiles([])

// expect(await page.locator("(//ul[@id='fileList']/li)[1]")).toHaveText('No Files Selected')

// await page.close()
// })



//  await from.fill('hyderabad')

//const to = await page.locator("(//div[@class='placeHolderContainer___8dac15'])[2]")

// const options = await page$$("(//div[@class='placeHolderContainer___8dac15'])[1]")



// await page.waitForTimeout(5000)

// await page.close()
// })
import path = require("path");
import * as dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '.env') });


test("download file and uploadfile",async ({page})=>{
    
   await page.goto(`${process.env.demo_qa_url}`);
   await console.log('demo_qa_url:', process.env.demo_qa_url);
   await page.waitForTimeout(2000);
await page.locator("(//div[@class='header-wrapper'])[1]").click()
await page.locator("(//li[@id='item-7'])[1]").click()
   await page.locator("//a[@id='downloadButton']")

   const [download] = await Promise.all([
       page.waitForEvent('download'),
       page.locator("//a[@id='downloadButton']").click()
   ])

const filePath = path.join(__dirname, 'downloaded-file.pdf');
  await download.saveAs(filePath);
  console.log('✅ File saved to:', filePath);

  await page.locator("//input[@id='uploadFile']").setInputFiles(filePath);
  await expect(page.locator('//p[@id="uploadedFilePath"]')).toHaveText('C:\\fakepath\\downloaded-file.pdf');
  await page.waitForTimeout(2000);

})
