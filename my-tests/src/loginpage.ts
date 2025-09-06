import { Page, expect } from "playwright/test";

export class loginpage{
     readonly page: Page
    readonly username_text;
    readonly password_text;
    readonly login_button;
    readonly make_appointment_link;
    readonly login_url = process.env.cura_url || 'https://example.com/login'; // Default URL if not set in .env
   readonly loginsuccess_text;
   readonly loginerror_text;
    constructor (page: Page) {
        this.page = page;
    this.username_text = page.getByLabel('Username');
    this.password_text = page.getByLabel('Password');
    this.login_button = page.getByRole('button', { name: 'Login' });
    this.make_appointment_link = page.getByRole('link', { name: 'Make Appointment' });
    this.loginsuccess_text =this.page.locator("//div[@class='col-sm-12 text-center']/h2");
    this.loginerror_text = this.page.locator("//p[@class='lead text-danger']"); // Example error message
    }
    async goto() {
        await this.page.goto(this.login_url);
    }   
        async login(username: string, password: string) {
        await this.username_text.fill(username);
        await this.password_text.fill(password);
        await this.login_button.click();
    }
    async navigateToMakeAppointment() {
        await this.make_appointment_link.click();
    }   

    async close() {
        await this.page.close();
    }           

    async validateLogin() {
        // Add validation logic here, e.g., checking for a successful login message or redirect
 // Example text to check
 const successText = 'Make Appointment'; // Adjust this based on your application's success message
        await expect(this.loginsuccess_text).toHaveText(successText);
    }   


    async invalidLogin(username: string, password: string) {
        await this.username_text.fill(username);
        await this.password_text.fill(password);
        await this.login_button.click();
        // Add validation for invalid login, e.g., checking for an error message
        const errorMessage = "Login failed! Please ensure the username and password are valid." // Example text to check
        await expect(this.loginerror_text).toBeVisible();
        await expect(this.loginerror_text).toHaveText(errorMessage);
    }
}