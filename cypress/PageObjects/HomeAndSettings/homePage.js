class HomePage {
  shortTimeout = 10000;
  mediumTimeout = 300000;
  longTimeout = 600000;
  lblDeposit = "//span[text()='Deposit']";
  lblSend = "//span[text()='Send']";
  lblWithdraw = "//span[text()='Withdraw']";
  lblSwap = "//span[text()='Swap']";
  lblBridge = "//span[text()='Bridge']";
  btnSettings =
    "//span[text()='Wallet']//parent::span//parent::div//following-sibling::div[2]//div[2]";
  lblConnected = "//div[text()='Connected']";

  get homePage() {
    return cy.xpath(this.lblSend, { timeout: this.mediumTimeout });
  }

  get connected() {
    return cy.xpath(this.lblConnected, { timeout: this.mediumTimeout });
  }

  get deposit() {
    return cy.xpath(this.lblDeposit, { timeout: this.mediumTimeout });
  }

  get send() {
    return cy.xpath(this.lblSend, { timeout: this.mediumTimeout });
  }

  get withdraw() {
    return cy.xpath(this.lblWithdraw, { timeout: this.mediumTimeout });
  }

  get swap() {
    return cy.xpath(this.lblSwap, { timeout: this.mediumTimeout });
  }

  get bridge() {
    return cy.xpath(this.lblBridge, { timeout: this.mediumTimeout });
  }

  get settings() {
    return cy.xpath(this.btnSettings, { timeout: this.mediumTimeout });
  }
}

let home = new HomePage();
export default home;
