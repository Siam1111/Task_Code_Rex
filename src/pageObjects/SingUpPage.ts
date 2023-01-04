import { expect, Locator, Page } from "@playwright/test";
import { getRandomInt } from "lib/utils";

export class SignUpPage {
  page: Page;
  signUpBtn: Locator;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Verify phone
   */
  async verifyPhone() {
    // Fill Phone Number
    // Receive the SMS code
    // Verify Phone Number
  }

  /**
   * Verify Email
   */
  async verifyEmail() {
    // Fill email Number
    // Receive the SMS code
    // Verify Phone Number
  }

  /**
   * Fill up the sign up form
   */
  async fillSignUpForm() {
    // Fill password
    // Select DOB
    // Select gender
    // Fill username
    // Check the check mark
  }

  /**
   * Verify user successfully signed up
   */
  async verifySignUpSuccessful() {
    // Verify User Account showing up
    // Click on the User Account
    // Verify My Account option visible
    // Verify My Wishlist & Followed Stores option visible
    // Verify My Reviewsoption option visible
    // Verify My Returns & Cancellations option visible
    // Verify Logout option visible
  }

  /**
   *  Click on Sign Up button
   */
  async clickOnSignUpBtn() {
    await this.signUpBtn.click();
  }
}
