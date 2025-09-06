import{test,expect}from"playwright/test"


test("test filure screenshot", async({page})=>{

try {
     await page.goto("https://katalon-demo-cura.herokuapp.com/")
   const expectedtitle = 'CURA Healthcare Service'
    const actualtitle = await page.title()
  
    expect(actualtitle).toBe(expectedtitle)

   const makeappoinmet =  page.locator("//a[@id='btn-make-appointment']")
  await  expect (makeappoinmet).toBeVisible()
  await  makeappoinmet.click()

   const login_button_check =  page.getByRole('heading',{name: 'Login'})
     await  expect(login_button_check).toBeVisible()

  const username = await page.locator("//input[@id='txt-username']")
     expect(username).toBeVisible()
      expect(username).toBeEditable()
       await username.fill("John Doe")

  const password = await page.locator("//input[@id='txt-password']")
        expect(password).toBeVisible()
        expect(password).toBeEditable()
        password.fill("ThisIsNotAPassword")

    const login_button = page.locator("//button[@id='btn-login']")

        expect (login_button).toBeVisible()
        expect (login_button).toBeEnabled()
      await  login_button.click()

    const makeopthead = page.getByRole('heading',{name: 'Make Appointment'})
     await  expect(makeopthead).toBeVisible()

     const facility = page.getByLabel('facility').selectOption('Hongkong CURA Healthcare Center')
    
     page.getByRole('checkbox',{name:'Apply for hospital readmission'}).check()

     await expect(page.getByRole('checkbox',{name:'Apply for hospital readmission'})).toBeChecked()

     
  await expect (page.getByRole('radio',{name: 'Medicare'})).toBeChecked()

   if(await page.getByRole('radio',{name: 'Medicare'}).isChecked()){
await page.waitForTimeout(3000)
await page.getByRole('radio',{name: 'Medicaid'}).check()
expect (await page.getByRole('radio',{name: 'Medicaid'})).toBeChecked()
   }
}

catch(error){
   const filepath = `my-tests/screenshots/failure-${Date.now()}-.png`

   await page.screenshot({path : filepath, fullPage : true})
console.error(`screenshot stored in -${filepath}`)

}


})
