class SigninPage {
  shortTimeout = 10000;
  mediumTimeout = 300000;
  longTimeout = 600000;
  lblSignin = "//h1[text()='Sign in']";
  btnSocialTab = "//div[text()='Social']";
  btnGoogle = "Google";
  btnApple = "Apple";
  btnFacebook = "Facebook";
  btnDiscord = "Discord";
  btnTwitter = "Twitter";
  btnEmail = "Email";
  btnGitHub = "GitHub";
  btnTwitch = "Twitch";
  btnWeb3Tab = "//div[text()='Web3']";
  btnMetaMask = "MetaMask";
  btnCoinbaseWallet = "Coinbase Wallet";
  btnWalletConnect = "WalletConnect";
  lnkShowMore = "//p[text()='more']";
  lnkShowLess = "//p[text()='less']";

  get openURL() {
    return cy;
  }

  get signInPage() {
    return cy.xpath(this.lblSignin, { timeout: this.mediumTimeout });
  }

  get socialTab() {
    return cy.xpath(this.btnSocialTab, { timeout: this.mediumTimeout });
  }

  get google_Social() {
    return cy.contains(this.btnGoogle, { timeout: this.mediumTimeout });
  }

  get apple_Social() {
    return cy.contains(this.btnApple, { timeout: this.mediumTimeout });
  }

  get facebook_Social() {
    return cy.contains(this.btnFacebook, { timeout: this.mediumTimeout });
  }

  get discord_Social() {
    return cy.contains(this.btnDiscord, { timeout: this.mediumTimeout });
  }

  get twitter_Social() {
    return cy.contains(this.btnTwitter, { timeout: this.mediumTimeout });
  }

  get email_Social() {
    return cy.contains(this.btnEmail, { timeout: this.mediumTimeout });
  }

  get gitHub_Social() {
    return cy.contains(this.btnGitHub, { timeout: this.mediumTimeout });
  }

  get twitch_Social() {
    return cy.contains(this.btnTwitch, { timeout: this.mediumTimeout });
  }

  get web3Tab() {
    return cy.xpath(this.btnWeb3Tab, { timeout: this.mediumTimeout });
  }

  get metaMask_Web3() {
    return cy.contains(this.btnMetaMask, { timeout: this.mediumTimeout });
  }

  get coinbaseWallet_Web3() {
    return cy.contains(this.btnCoinbaseWallet, { timeout: this.mediumTimeout });
  }

  get walletConnect_Web3() {
    return cy.contains(this.btnWalletConnect, { timeout: this.mediumTimeout });
  }

  get showMore() {
    return cy.xpath(this.lnkShowMore, { timeout: this.mediumTimeout });
  }

  get showLess() {
    return cy.xpath(this.lnkShowLess, { timeout: this.mediumTimeout });
  }
}

let signin = new SigninPage();
export default signin;
