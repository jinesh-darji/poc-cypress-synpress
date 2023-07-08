class TransactionPage {
  shortTimeout = 10000;
  mediumTimeout = 300000;
  longTimeout = 600000;
  lblSendToken = "//h3[text()='Send asset']";
  btnKeyBased = "//div[text()='Key based']";
  btnSmartWallet = "//div[text()='Smart Wallet']";
  lblSelectChaiAndToken = "//div[text()='Select chain and token']";
  lblSelectChainAndTokenFrom =
    "//label[text()='From']//following-sibling::div[text()='Select chain and token']";
  lblSelectChainAndTokenTo =
    "//label[text()='To']//following-sibling::div[text()='Select chain and token']";
  lblEthereum_ChainList =
    "//img[@alt='Ethereum']//parent::div[text()='Ethereum']";
  lblPolygon_ChainList = "//img[@alt='Polygon']//parent::div[text()='Polygon']";
  lblBNBChain_ChainList =
    "//img[@alt='BNB Chain']//parent::div[text()='BNB Chain']";
  lblGnosisChain_ChainList =
    "//img[@alt='Gnosis Chain']//parent::div[text()='Gnosis Chain']";
  lblAvalanche_ChainList =
    "//img[@alt='Avalanche']//parent::div[text()='Avalanche']";
  lblOptimism_ChainList =
    "//img[@alt='Optimism']//parent::div[text()='Optimism']";
  lblArbitrum_ChainList =
    "//img[@alt='Arbitrum']//parent::div[text()='Arbitrum']";
  lblAurora_ChainList = "//img[@alt='Aurora']//parent::div[text()='Aurora']";
  lblFantom_ChainList = "//img[@alt='Fantom']//parent::div[text()='Fantom']";
  lblMoonbeam_ChainList =
    "//img[@alt='Moonbeam']//parent::div[text()='Moonbeam']";
  lblCELO_ChainList = "//img[@alt='CELO']//parent::div[text()='CELO']";
  txtReceiverAddress =
    "//label[text()='Receiver address']//following-sibling::div//input[contains(@id,'etherspot-text-input') and @value='']";
  txtReceiverAddressClear =
    "//label[text()='Receiver address']//following-sibling::div//input[contains(@id,'etherspot-text-input')]";
  lblUSDC_TokenList = "//img[@alt='USDC']";
  lblUSDT_TokenList = "//img[@alt='USDT']";
  lblUSDC_xDai_TokenList =
    "//div[text()='Gnosis Chain']//following-sibling::div//img[@alt='USDC']";
  lblUSDT_xDai_TokenList =
    "//div[text()='Gnosis Chain']//following-sibling::div//img[@alt='USDT']";
  lblUSDC_Polygon_TokenList =
    "//div[text()='Polygon']//following-sibling::div//img[@alt='USDC']";
  lblUSDT_Polygon_TokenList =
    "//div[text()='Polygon']//following-sibling::div//img[@alt='USDT']";
  lblUSDC_BNBChain_TokenList =
    "//div[text()='BNB Chain']//following-sibling::div//img[@alt='USDC']";
  lblUSDT_BNBChain_TokenList =
    "//div[text()='BNB Chain']//following-sibling::div//img[@alt='USDT']";
  lblUSDC_Optimism_TokenList =
    "//div[text()='Optimism']//following-sibling::div//img[@alt='USDC']";
  lblUSDT_Optimism_TokenList =
    "//div[text()='Optimism']//following-sibling::div//img[@alt='USDT']";
  lblUSDC_Arbitrum_TokenList =
    "//div[text()='Arbitrum']//following-sibling::div//img[@alt='USDC']";
  lblUSDT_Arbitrum_TokenList =
    "//div[text()='Arbitrum']//following-sibling::div//img[@alt='USDT']";
  lblUSDT_Text_TokenList = "//span[text()='USDT']";
  lblUSDC_Text_TokenList = "//span[text()='USDC']";
  lblUSDC_Text_Search_TokenList =
    "//input[@placeholder='Search']//parent::label//following-sibling::div//span[text()='USDC']";
  lblUSDT_Text_Search_TokenList =
    "//input[@placeholder='Search']//parent::label//following-sibling::div//span[text()='USDT']";
  lblUSDC_Text_Class_TokenList =
    "//img[@alt='USDC']//following-sibling::div//div[text()='USDT' and @class]";
  lblUSDT_Text_Class_TokenList =
    "//img[@alt='USDT']//following-sibling::div//div[text()='USDT' and @class]";
  lblMatic_Text_TokenList = "//span[text()='MATIC']";
  lblMatic_TokenList =
    "//img[@alt='Matic']//following-sibling::div//div[text()='Matic']";
  lblBNB_TokenList =
    "(//img[@alt='BNB']//following-sibling::div//div[text()='BNB'])[1]";
  lblxDAI_TokenList =
    "//img[@alt='xDAI']//following-sibling::div//div[text()='xDAI']";
  lblOptimism_TokenList =
    "//img[@alt='Optimism']//following-sibling::div//div[text()='Optimism']";
  lblArbitrum_TokenList =
    "//img[@alt='Arbitrum']//following-sibling::div//div[text()='Arbitrum']";
  lblsKLIMA_TokenList =
    "//label[text()='To']//following-sibling::div//div[text()='sKLIMA']";
  txtYouSend =
    "//label[text()='You send']//following-sibling::div//input[contains(@id,'etherspot-text-input') and @value='']";
  txtYouSwap =
    "//label[text()='You swap']//following-sibling::div//input[contains(@id,'etherspot-text-input') and @value='']";
  txtYouStake =
    "//label[text()='You stake']//following-sibling::div//input[contains(@id,'etherspot-text-input') and @value='']";
  txtYouSendClear =
    "//label[text()='You send']//following-sibling::div//input[contains(@id,'etherspot-text-input')]";
  txtYouSwapClear =
    "//label[text()='You swap']//following-sibling::div//input[contains(@id,'etherspot-text-input')]";
  txtYouStakeClear =
    "//label[text()='You stake']//following-sibling::div//input[contains(@id,'etherspot-text-input')]";
  lblWallet_CrossChain =
    "//div[text()='You will receive on']//following-sibling::div//div[text()='Wallet']";
  lblSmartWallet_CrossChain =
    "//div[text()='You will receive on']//following-sibling::div//div[text()='Smart Wallet']";
  lblCustom_CrossChain =
    "//div[text()='You will receive on']//following-sibling::div//div[text()='Custom']";
  txtCustomAddress_CrossChain = "//input[@placeholder='Insert address']";
  btnReview = "//div[text()='Review']";
  btnSave = "//div[text()='Save']";
  btnGoBackToPreview = "//button[text()='Go back to preview']";
  btnAddTransaction = "//span[text()='Add transaction']";
  lblMaxOneBridgeTransaction =
    "//div[text()='Asset bridge (Max. 1 bridge per batch)']";
  btnStartMultiCall = "//div[text()='Start Multi-Call']";
  btnContinueMultiCall = "//div[text()='Continue Multi-Call']";
  lblBridgeAsset = "//div[text()='Bridge asset']";
  lblAssertBridge = "//div[text()='Asset bridge']";
  lblSendAsset = "//div[text()='Send asset']";
  lblSwapAsset = "//div[text()='Swap asset']";
  lblKlimaStaking = "//div[text()='Klima Staking']";
  lblPillarDAONFTMembership = "//div[text()='Pillar DAO NFT Membership']";
  lblPLRStaking = "//div[text()='PLR Staking']";
  lblNone = "//div[text()='None']";
  txtSearch_Token = "//input[@placeholder='Search']";
  lblOfferOption = "(//label[text()='Offer']//following-sibling::div//img)[1]";
  lblRouteOption = "(//label[text()='Route']//following-sibling::div//img)[1]";
  lblSelectedOffer =
    "(//label[text()='Offer']//following-sibling::div//img//following-sibling::div/div/span)[1]";
  lblNoOptions_Offer =
    "//label[text()='Offer']//following-sibling::div[text()='No options']";
  lblNoOptions_Route =
    "//label[text()='Route']//following-sibling::div[text()='No options']";
  lblOnlyOneSklima = "//div[contains(text(),'Cannot add klima staking block')]";
  btnClose_OnlyOneSklima =
    "//div[contains(text(),'Cannot add klima staking block')]//preceding-sibling::span";

  get sendTokenScreen() {
    return cy.xpath(this.lblSendToken, { timeout: this.mediumTimeout });
  }

  get keyBasedTab() {
    return cy.xpath(this.btnKeyBased, {
      timeout: this.mediumTimeout,
    });
  }

  get smartWalletTab() {
    return cy.xpath(this.btnSmartWallet, {
      timeout: this.mediumTimeout,
    });
  }

  get selectChaiAndToken() {
    return cy.xpath(this.lblSelectChaiAndToken, {
      timeout: this.mediumTimeout,
    });
  }

  get selectChainAndTokenFrom() {
    return cy.xpath(this.lblSelectChainAndTokenFrom, {
      timeout: this.mediumTimeout,
    });
  }

  get selectChainAndTokenTo() {
    return cy.xpath(this.lblSelectChainAndTokenTo, {
      timeout: this.mediumTimeout,
    });
  }

  get ethereum_ChainList() {
    return cy.xpath(this.lblEthereum_ChainList, {
      timeout: this.mediumTimeout,
    });
  }

  get polygon_ChainList() {
    return cy.xpath(this.lblPolygon_ChainList, { timeout: this.mediumTimeout });
  }

  get bNBChain_ChainList() {
    return cy.xpath(this.lblBNBChain_ChainList, {
      timeout: this.mediumTimeout,
    });
  }

  get gnosisChain_ChainList() {
    return cy.xpath(this.lblGnosisChain_ChainList, {
      timeout: this.mediumTimeout,
    });
  }

  get avalanche_ChainList() {
    return cy.xpath(this.lblAvalanche_ChainList, {
      timeout: this.mediumTimeout,
    });
  }

  get optimism_ChainList() {
    return cy.xpath(this.lblOptimism_ChainList, {
      timeout: this.mediumTimeout,
    });
  }

  get arbitrum_ChainList() {
    return cy.xpath(this.lblArbitrum_ChainList, {
      timeout: this.mediumTimeout,
    });
  }

  get aurora_ChainList() {
    return cy.xpath(this.lblAurora_ChainList, { timeout: this.mediumTimeout });
  }

  get fantom_ChainList() {
    return cy.xpath(this.lblFantom_ChainList, { timeout: this.mediumTimeout });
  }

  get moonbeam_ChainList() {
    return cy.xpath(this.lblMoonbeam_ChainList, {
      timeout: this.mediumTimeout,
    });
  }

  get cELO_ChainList() {
    return cy.xpath(this.lblCELO_ChainList, { timeout: this.mediumTimeout });
  }

  get receiverAddress() {
    return cy.xpath(this.txtReceiverAddress, { timeout: this.mediumTimeout });
  }

  get receiverAddressClear() {
    return cy.xpath(this.txtReceiverAddressClear, {
      timeout: this.mediumTimeout,
    });
  }

  get matic_TokenList() {
    return cy.xpath(this.lblMatic_TokenList, { timeout: this.mediumTimeout });
  }

  get uSDC_TokenList() {
    return cy.xpath(this.lblUSDC_TokenList, { timeout: this.mediumTimeout });
  }

  get uSDT_TokenList() {
    return cy.xpath(this.lblUSDT_TokenList, { timeout: this.mediumTimeout });
  }

  get uSDC_xDai_TokenList() {
    return cy.xpath(this.lblUSDC_xDai_TokenList, {
      timeout: this.mediumTimeout,
    });
  }

  get uSDT_xDai_TokenList() {
    return cy.xpath(this.lblUSDT_xDai_TokenList, {
      timeout: this.mediumTimeout,
    });
  }

  get uSDC_Polygon_TokenList() {
    return cy.xpath(this.lblUSDC_Polygon_TokenList, {
      timeout: this.mediumTimeout,
    });
  }

  get uSDT_Polygon_TokenList() {
    return cy.xpath(this.lblUSDT_Polygon_TokenList, {
      timeout: this.mediumTimeout,
    });
  }

  get uSDC_BNBChain_TokenList() {
    return cy.xpath(this.lblUSDC_BNBChain_TokenList, {
      timeout: this.mediumTimeout,
    });
  }

  get uSDT_BNBChain_TokenList() {
    return cy.xpath(this.lblUSDT_BNBChain_TokenList, {
      timeout: this.mediumTimeout,
    });
  }

  get uSDC_Optimism_TokenList() {
    return cy.xpath(this.lblUSDC_Optimism_TokenList, {
      timeout: this.mediumTimeout,
    });
  }

  get uSDT_Optimism_TokenList() {
    return cy.xpath(this.lblUSDT_Optimism_TokenList, {
      timeout: this.mediumTimeout,
    });
  }

  get uSDC_Arbitrum_TokenList() {
    return cy.xpath(this.lblUSDC_Arbitrum_TokenList, {
      timeout: this.mediumTimeout,
    });
  }

  get uSDT_Arbitrum_TokenList() {
    return cy.xpath(this.lblUSDT_Arbitrum_TokenList, {
      timeout: this.mediumTimeout,
    });
  }

  get uSDT_Text_TokenList() {
    return cy.xpath(this.lblUSDT_Text_TokenList, {
      timeout: this.mediumTimeout,
    });
  }

  get uSDC_Text_TokenList() {
    return cy.xpath(this.lblUSDC_Text_TokenList, {
      timeout: this.mediumTimeout,
    });
  }

  get uSDC_Text_Search_TokenList() {
    return cy.xpath(this.lblUSDC_Text_Search_TokenList, {
      timeout: this.mediumTimeout,
    });
  }

  get uSDT_Text_Search_TokenList() {
    return cy.xpath(this.lblUSDT_Text_Search_TokenList, {
      timeout: this.mediumTimeout,
    });
  }

  get uSDC_Text_Class_TokenList() {
    return cy.xpath(this.lblUSDC_Text_Class_TokenList, {
      timeout: this.mediumTimeout,
    });
  }

  get uSDT_Text_Class_TokenList() {
    return cy.xpath(this.lblUSDT_Text_Class_TokenList, {
      timeout: this.mediumTimeout,
    });
  }

  get matic_Text_TokenList() {
    return cy.xpath(this.lblMatic_Text_TokenList, {
      timeout: this.mediumTimeout,
    });
  }

  get bNB_TokenList() {
    return cy.xpath(this.lblBNB_TokenList, { timeout: this.mediumTimeout });
  }

  get xDAI_TokenList() {
    return cy.xpath(this.lblxDAI_TokenList, { timeout: this.mediumTimeout });
  }

  get optimism_TokenList() {
    return cy.xpath(this.lblOptimism_TokenList, {
      timeout: this.mediumTimeout,
    });
  }

  get arbitrum_TokenList() {
    return cy.xpath(this.lblArbitrum_TokenList, {
      timeout: this.mediumTimeout,
    });
  }

  get sKLIMA_TokenList() {
    return cy.xpath(this.lblsKLIMA_TokenList, { timeout: this.mediumTimeout });
  }

  get youSend() {
    return cy.xpath(this.txtYouSend, { timeout: this.mediumTimeout });
  }

  get youSwap() {
    return cy.xpath(this.txtYouSwap, { timeout: this.mediumTimeout });
  }

  get youStake() {
    return cy.xpath(this.txtYouStake, { timeout: this.mediumTimeout });
  }

  get youSendClear() {
    return cy.xpath(this.txtYouSendClear, { timeout: this.mediumTimeout });
  }

  get youSwapClear() {
    return cy.xpath(this.txtYouSwapClear, { timeout: this.mediumTimeout });
  }

  get youStakeClear() {
    return cy.xpath(this.txtYouStakeClear, { timeout: this.mediumTimeout });
  }

  get wallet_CrossChain() {
    return cy.xpath(this.lblWallet_CrossChain, { timeout: this.mediumTimeout });
  }

  get smartWallet_CrossChain() {
    return cy.xpath(this.lblSmartWallet_CrossChain, {
      timeout: this.mediumTimeout,
    });
  }

  get custom_CrossChain() {
    return cy.xpath(this.lblCustom_CrossChain, { timeout: this.mediumTimeout });
  }

  get customAddress_CrossChain() {
    return cy.xpath(this.txtCustomAddress_CrossChain, {
      timeout: this.mediumTimeout,
    });
  }

  get offerOption() {
    return cy.xpath(this.lblOfferOption, { timeout: this.mediumTimeout });
  }

  get routeOption() {
    return cy.xpath(this.lblRouteOption, { timeout: this.mediumTimeout });
  }

  get selectedOfferOption() {
    return cy.xpath(this.lblSelectedOfferOption, {
      timeout: this.mediumTimeout,
    });
  }

  get save() {
    return cy.xpath(this.btnSave, { timeout: this.mediumTimeout });
  }

  get goBackToPreview() {
    return cy.xpath(this.btnGoBackToPreview, { timeout: this.mediumTimeout });
  }

  get review() {
    return cy.xpath(this.btnReview, { timeout: this.mediumTimeout });
  }

  get addTransaction() {
    return cy.xpath(this.btnAddTransaction, { timeout: this.mediumTimeout });
  }

  get maxOneBridgeTransaction() {
    return cy.xpath(this.lblMaxOneBridgeTransaction, {
      timeout: this.mediumTimeout,
    });
  }

  get startMultiCall() {
    return cy.xpath(this.btnStartMultiCall, { timeout: this.mediumTimeout });
  }

  get startMultiCall_SendAsset() {
    return cy.xpath(this.lblSendAsset, { timeout: this.mediumTimeout });
  }

  get startMultiCall_SwapAsset() {
    return cy.xpath(this.lblSwapAsset, { timeout: this.mediumTimeout });
  }

  get startMultiCall_BridgeAsset() {
    return cy.xpath(this.lblBridgeAsset, { timeout: this.mediumTimeout });
  }

  get continueMultiCall() {
    return cy.xpath(this.btnContinueMultiCall, { timeout: this.mediumTimeout });
  }

  get assertBridg() {
    return cy.xpath(this.lblAssertBridge, { timeout: this.mediumTimeout });
  }

  get sendAsset() {
    return cy.xpath(this.lblSendAsset, { timeout: this.mediumTimeout });
  }

  get swapAsset() {
    return cy.xpath(this.lblSwapAsset, { timeout: this.mediumTimeout });
  }

  get klimaStaking() {
    return cy.xpath(this.lblKlimaStaking, { timeout: this.mediumTimeout });
  }

  get pillarDAONFTMembership() {
    return cy.xpath(this.lblPillarDAONFTMembership, {
      timeout: this.mediumTimeout,
    });
  }

  get pLRStaking() {
    return cy.xpath(this.lblPLRStaking, { timeout: this.mediumTimeout });
  }

  get none() {
    return cy.xpath(this.lblNone, { timeout: this.mediumTimeout });
  }

  get search_Token() {
    return cy.xpath(this.txtSearch_Token, { timeout: this.mediumTimeout });
  }

  get noOption_Offer() {
    return cy.xpath(this.lblNoOptions_Offer, { timeout: this.mediumTimeout });
  }

  get noOption_Route() {
    return cy.xpath(this.lblNoOptions_Route, { timeout: this.mediumTimeout });
  }

  get onlyOneSklima() {
    return cy.xpath(this.lblOnlyOneSklima, { timeout: this.mediumTimeout });
  }

  get close_OnlyOneSklima() {
    return cy.xpath(this.btnClose_OnlyOneSklima, {
      timeout: this.mediumTimeout,
    });
  }
}

let transaction = new TransactionPage();
export default transaction;
