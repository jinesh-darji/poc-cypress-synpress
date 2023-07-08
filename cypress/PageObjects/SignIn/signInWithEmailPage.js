class SignInWithEmailPage {
  shortTimeout = 10000;
  mediumTimeout = 300000;
  longTimeout = 600000;
  txtEmail = "//input[@placeholder='Enter you email']";
  btnSignin = "//button[text()='Sign in']";
  btnGoBack = "//p[text()='Go back']";

  get email() {
    return cy.xpath(this.txtEmail, { timeout: this.mediumTimeout });
  }

  get signin() {
    return cy.xpath(this.btnSignin, { timeout: this.mediumTimeout });
  }

  get goBack() {
    return cy.xpath(this.clickGoBack, { timeout: this.mediumTimeout });
  }
}

let signinWithEmail = new SignInWithEmailPage();
export default signinWithEmail;
