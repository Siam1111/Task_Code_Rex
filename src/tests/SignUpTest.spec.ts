import { test } from "@playwright/test";
import { SignUpPage } from "../pageObjects/SingUpPage";

test.describe("Sign up process", () => {
  test("Verify 'Sign Up' process with phone number", async ({ page }) => {
    const signUpPage = new SignUpPage(page);

    // Step 1: Navigate to sign up page
    await page.goto("/");

    // Step 2: Verify phone number
    await signUpPage.verifyPhone();

    // Step 3: Fill up the sign up form
    await signUpPage.fillSignUpForm();

    // Step 4: Click on 'Sign Up' button
    await signUpPage.clickOnSignUpBtn();

    // Step 5: Verify user successfully signed up
    await signUpPage.verifySignUpSuccessful();
  });

  test("Verify 'Sign Up' process with email", async ({ page }) => {
    const signUpPage = new SignUpPage(page);

    // Step 1: Navigate to sign up page
    await page.goto("/");

    // Step 2: Verify email
    await signUpPage.verifyEmail();

    // Step 3: Fill up the sign up form
    await signUpPage.fillSignUpForm();

    // Step 4: Click on 'Sign Up' button
    await signUpPage.clickOnSignUpBtn();

    // Step 5: Verify user successfully signed up
    await signUpPage.verifySignUpSuccessful();
  });
});
