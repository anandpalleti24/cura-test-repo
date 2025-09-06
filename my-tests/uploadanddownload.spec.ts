import {test, expect} from 'playwright/test'
import * as fs from 'fs'
import * as path from 'path'

test('uploadand download',async ({page})=>{

await page.goto('https://demoqa.com/upload-download')



const downloadpromise = page.waitForEvent('download')

const downloadbutton = page.getByRole('link',{name : 'Download'});

await downloadbutton.click()
// const downloadpromise = await page.waitForEvent("download")

const download = await downloadpromise;
expect (download.suggestedFilename()).toBe('sampleFile.jpeg')
console.log(download.suggestedFilename())



})

test.only('upload file',async({page})=>{

await page.goto('https://demoqa.com/upload-download')

const filename = 'uploadtest.txt';
const filepath = path.join(__dirname,'..',filename)
fs.writeFileSync(filepath,"this is the content of the file")
await page.locator('#uploadFile').setInputFiles(filepath)

const uploadedPath = page.locator('#uploadedFilePath');
  await expect(uploadedPath).toBeVisible();
  await expect(uploadedPath).toContainText('uploadtest.txt');


})
