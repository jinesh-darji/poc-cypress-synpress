class SettingOptions {
  shortTimeout = 10000;
  mediumTimeout = 300000;
  longTimeout = 600000;
  btnDashboard = "//a[text()='Dashboard']";
  btnProfile = "//div[text()='Profile']";
  btnHistory = "//div[text()='History']";
  btnDeployments = "//div[text()='Deployments']";
  btnTheme = "//div[text()='Theme']";
  btnSystemInfo = "//div[text()='System Info']";
  btnEnvironment = "//div[text()='Environment']";
  btnAboutEtherspot = "//a[text()='About Etherspot']";
  btnLogout = "//div[text()='Logout']";

  get dashboardOption() {
    return cy.xpath(this.btnDashboard, { timeout: this.mediumTimeout });
  }

  get profileOption() {
    return cy.xpath(this.btnProfile, { timeout: this.mediumTimeout });
  }

  get historyOption() {
    return cy.xpath(this.btnHistory, { timeout: this.mediumTimeout });
  }

  get deploymentsOption() {
    return cy.xpath(this.btnDeployments, { timeout: this.mediumTimeout });
  }

  get themeOption() {
    return cy.xpath(this.btnTheme, { timeout: this.mediumTimeout });
  }

  get systemInfoOption() {
    return cy.xpath(this.btnSystemInfo, { timeout: this.mediumTimeout });
  }

  get environmentOption() {
    return cy.xpath(this.btnEnvironment, { timeout: this.mediumTimeout });
  }

  get aboutEthersportOption() {
    return cy.xpath(this.btnAboutEtherspot, { timeout: this.mediumTimeout });
  }

  get logoutOption() {
    return cy.xpath(this.btnLogout, { timeout: this.mediumTimeout });
  }
}

let settingoptions = new SettingOptions();
export default settingoptions;
