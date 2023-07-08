class TransactionReviewPage {
  shortTimeout = 10000;
  mediumTimeout = 300000;
  longTimeout = 600000;
  btnExetuce = "//div[text()='Execute']";
  btnExetuceFail = "//div[text()='Estimation failed']";
  btnGoBack = "//button[text()='Go back']";
  lblTransactionCompleted = "//span[text()='Transaction completed']";
  lblEstimatingSecondTransaction =
    "//span[text()='Estimating second transaction']";
  lblTransactionCompleted_Polygon =
    "//span[text()='Polygon']//parent::div//parent::div//parent::div//following-sibling::div//span[text()='Transaction completed']";
  lblTransactionCompleted_BNBChain =
    "//span[text()='BNB Chain']//parent::div//parent::div//parent::div//following-sibling::div//span[text()='Transaction completed']";
  lblTransactionCompleted_GnosisChain =
    "//span[text()='Gnosis Chain']//parent::div//parent::div//parent::div//following-sibling::div//span[text()='Transaction completed']";
  lblTransactionCompleted_Optimism =
    "//span[text()='Optimism']//parent::div//parent::div//parent::div//following-sibling::div//span[text()='Transaction completed']";
  lblTransactionCompleted_Arbitrum =
    "//span[text()='Arbitrum']//parent::div//parent::div//parent::div//following-sibling::div//span[text()='Transaction completed']";
  lblTransactionCompletedSwap_Polygon =
    "//span[text()='Polygon']//parent::div//parent::div//parent::div//parent::div//following-sibling::div//span[text()='Transaction completed']";
  lblTransactionCompletedSwap_BNBChain =
    "//span[text()='BNB Chain']//parent::div//parent::div//parent::div//parent::div//following-sibling::div//span[text()='Transaction completed']";
  lblTransactionCompletedSwap_GnosisChain =
    "//span[text()='Gnosis Chain']//parent::div//parent::div//parent::div//parent::div//following-sibling::div//span[text()='Transaction completed']";
  lblTransactionCompletedSwap_Optimism =
    "//span[text()='Optimism']//parent::div//parent::div//parent::div//parent::div//following-sibling::div//span[text()='Transaction completed']";
  lblTransactionCompletedSwap_Arbitrum =
    "//span[text()='Arbitrum']//parent::div//parent::div//parent::div//parent::div//following-sibling::div//span[text()='Transaction completed']";
  lblTransactionReverted = "//span[text()='Transaction reverted']";
  lblDuplicationAddress =
    "//span[text()='Destination address should not be the same as sender address']";
  lblEmptyBatch = "//span[text()='Can not estimate empty batch']";
  btnLeave = "//button[text()='Leave']";
  lblTransactionSent = "//div[text()='Transaction sent']";
  bntCloseTransactionSent =
    "//div[text()='Transaction sent']//preceding-sibling::span";
  btnEditTransaction =
    "//h3[text()='Send asset']//following-sibling::div//*[@color='#fff' and @fill='none']";
  btnEditSwapTransaction =
    "//h3[text()='Swap asset']//following-sibling::div//*[@color='#fff' and @fill='none']";
  btnEditKlimaDaoStakingTransaction =
    "//h3[text()='Klima DAO Staking']//following-sibling::div//*[@color='#fff' and @fill='none']";
  btnEditBridgeTransaction =
    "//h3[text()='Asset bridge']//following-sibling::div//*[@color='#fff' and @fill='none']";
  lblPayingFeesWith = "//span[text()='Paying fees with']";
  lblPayingFeesWith_Matic =
    "//img[@alt='MATIC']//preceding-sibling::span[text()='Paying fees with']";
  lblPayingFeesWith_Bnb =
    "//img[@alt='BNB']//preceding-sibling::span[text()='Paying fees with']";
  lblPayingFeesWith_xDai =
    "//img[@alt='XDAI']//preceding-sibling::span[text()='Paying fees with']";
  lblPayingFeesWith_Optimism =
    "(//img[@alt='ETH']//preceding-sibling::span[text()='Paying fees with'])[1]";
  lblPayingFeesWith_Arbitrum =
    "(//img[@alt='ETH']//preceding-sibling::span[text()='Paying fees with'])[2]";
  lblPayingFeesWith_ETH =
    "//img[@alt='ETH']//preceding-sibling::span[text()='Paying fees with']";
  lblUSDC_TokenList = "//div[text()='USDC']";
  lblUSDT_TokenList = "//div[text()='USDT']";
  lblUSDC_TokenList_Polygon =
    "//span[text()='Polygon']//parent::div//parent::div//parent::div//following-sibling::div//div[text()='USDC']";
  lblUSDC_TokenList_BNBChain =
    "//span[text()='BNB Chain']//parent::div//parent::div//parent::div//following-sibling::div//div[text()='USDC']";
  lblUSDC_TokenList_GnosisChain =
    "//span[text()='Gnosis Chain']//parent::div//parent::div//parent::div//following-sibling::div//div[text()='USDC']";
  lblUSDC_TokenList_Optimism =
    "//span[text()='Optimism']//parent::div//parent::div//parent::div//following-sibling::div//div[text()='USDC']";
  lblUSDC_TokenList_Arbitrum =
    "//span[text()='Arbitrum']//parent::div//parent::div//parent::div//following-sibling::div//div[text()='USDC']";
  lblSelectedOffer =
    "(//label[text()='Route']//following-sibling::div//img//following-sibling::div/span)[1]";

  get payingFeesWith() {
    return cy.xpath(this.lblPayingFeesWith, { timeout: this.mediumTimeout });
  }

  get payingFeesWith_Matic() {
    return cy.xpath(this.lblPayingFeesWith_Matic, {
      timeout: this.mediumTimeout,
    });
  }

  get payingFeesWith_Bnb() {
    return cy.xpath(this.lblPayingFeesWith_Bnb, {
      timeout: this.mediumTimeout,
    });
  }

  get payingFeesWith_xDai() {
    return cy.xpath(this.lblPayingFeesWith_xDai, {
      timeout: this.mediumTimeout,
    });
  }

  get payingFeesWith_Optimism() {
    return cy.xpath(this.lblPayingFeesWith_Optimism, {
      timeout: this.mediumTimeout,
    });
  }

  get payingFeesWith_Arbitrum() {
    return cy.xpath(this.lblPayingFeesWith_Arbitrum, {
      timeout: this.mediumTimeout,
    });
  }

  get payingFeesWith_ETH() {
    return cy.xpath(this.lblPayingFeesWith_ETH, {
      timeout: this.mediumTimeout,
    });
  }

  get USDC_TokenList() {
    return cy.xpath(this.lblUSDC_TokenList, { timeout: this.mediumTimeout });
  }

  get USDT_TokenList() {
    return cy.xpath(this.lblUSDT_TokenList, { timeout: this.mediumTimeout });
  }

  get USDC_TokenList_Polygon() {
    return cy.xpath(this.lblUSDC_TokenList_Polygon, {
      timeout: this.mediumTimeout,
    });
  }

  get USDC_TokenList_BNBChain() {
    return cy.xpath(this.lblUSDC_TokenList_BNBChain, {
      timeout: this.mediumTimeout,
    });
  }

  get USDC_TokenList_GnosisChain() {
    return cy.xpath(this.lblUSDC_TokenList_GnosisChain, {
      timeout: this.mediumTimeout,
    });
  }

  get USDC_TokenList_Optimism() {
    return cy.xpath(this.lblUSDC_TokenList_Optimism, {
      timeout: this.mediumTimeout,
    });
  }

  get USDC_TokenList_Arbitrum() {
    return cy.xpath(this.lblUSDC_TokenList_Arbitrum, {
      timeout: this.mediumTimeout,
    });
  }

  get selectedOffer() {
    return cy.xpath(this.lblSelectedOffer, { timeout: this.mediumTimeout });
  }

  get execute() {
    return cy.xpath(this.btnExetuce, { timeout: this.mediumTimeout });
  }

  get executeFail() {
    return cy.xpath(this.btnExetuceFail, { timeout: this.mediumTimeout });
  }

  get goBack() {
    return cy.xpath(this.btnGoBack, { timeout: this.mediumTimeout });
  }

  get transactionCompleted() {
    return cy.xpath(this.lblTransactionCompleted, {
      timeout: this.longTimeout,
    });
  }

  get estimatingSecondTransaction() {
    return cy.xpath(this.lblEstimatingSecondTransaction, {
      timeout: this.longTimeout,
    });
  }

  get transactionCompleted_Polygon() {
    return cy.xpath(this.lblTransactionCompleted_Polygon, {
      timeout: this.longTimeout,
    });
  }

  get transactionCompleted_BNBChain() {
    return cy.xpath(this.lblTransactionCompleted_BNBChain, {
      timeout: this.longTimeout,
    });
  }

  get transactionCompleted_GnosisChain() {
    return cy.xpath(this.lblTransactionCompleted_GnosisChain, {
      timeout: this.longTimeout,
    });
  }

  get transactionCompleted_Optimism() {
    return cy.xpath(this.lblTransactionCompleted_Optimism, {
      timeout: this.longTimeout,
    });
  }

  get transactionCompleted_Arbitrum() {
    return cy.xpath(this.lblTransactionCompleted_Arbitrum, {
      timeout: this.longTimeout,
    });
  }

  get transactionCompletedSwap_Polygon() {
    return cy.xpath(this.lblTransactionCompletedSwap_Polygon, {
      timeout: this.longTimeout,
    });
  }

  get transactionCompletedSwap_BNBChain() {
    return cy.xpath(this.lblTransactionCompletedSwap_BNBChain, {
      timeout: this.longTimeout,
    });
  }

  get transactionCompletedSwap_GnosisChain() {
    return cy.xpath(this.lblTransactionCompletedSwap_GnosisChain, {
      timeout: this.longTimeout,
    });
  }

  get transactionCompletedSwap_Optimism() {
    return cy.xpath(this.lblTransactionCompletedSwap_Optimism, {
      timeout: this.longTimeout,
    });
  }

  get transactionCompletedSwap_Arbitrum() {
    return cy.xpath(this.lblTransactionCompletedSwap_Arbitrum, {
      timeout: this.longTimeout,
    });
  }

  get transactionReverted() {
    return cy.xpath(this.lblTransactionReverted, {
      timeout: this.mediumTimeout,
    });
  }

  get duplicationAddress() {
    return cy.xpath(this.lblDuplicationAddress, {
      timeout: this.mediumTimeout,
    });
  }

  get emptyBatch() {
    return cy.xpath(this.lblEmptyBatch, { timeout: this.mediumTimeout });
  }

  get editTransaction() {
    return cy.xpath(this.btnEditTransaction, { timeout: this.mediumTimeout });
  }

  get editSwapTransaction() {
    return cy.xpath(this.btnEditSwapTransaction, {
      timeout: this.mediumTimeout,
    });
  }

  get editKlimaDaoStakingTransaction() {
    return cy.xpath(this.btnEditKlimaDaoStakingTransaction, {
      timeout: this.mediumTimeout,
    });
  }

  get editBridgeTransaction() {
    return cy.xpath(this.btnEditBridgeTransaction, {
      timeout: this.mediumTimeout,
    });
  }

  get leave() {
    return cy.xpath(this.btnLeave, { timeout: this.mediumTimeout });
  }

  get transactionSent() {
    return cy.xpath(this.lblTransactionSent, { timeout: this.longTimeout });
  }

  get closeTransactionSent() {
    return cy.xpath(this.bntCloseTransactionSent, {
      timeout: this.longTimeout,
    });
  }
}

let transactionreview = new TransactionReviewPage();
export default transactionreview;
