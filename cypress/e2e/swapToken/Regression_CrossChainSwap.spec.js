import { assert } from "chai";
import signin from "../../PageObjects/SignIn/signInPage";
import home from "../../PageObjects/HomeAndSettings/homePage";
import settingoptions from "../../PageObjects/HomeAndSettings/settingOptions";
import transaction from "../../PageObjects/TransactionFlow/transactionPage";
import transactionreview from "../../PageObjects/TransactionFlow/transactionReviewPage";

const shortTimeout = 2000;

describe("Regression Test Cases of the Cross Chain Swap Flows", () => {
  beforeEach(() => {
    cy.disconnectMetamaskWalletFromAllDapps();

    // perform the signin with metamask extention
    try {
      // Visit the root URL of the DApp
      cy.visit("/");

      // click on the web3 tab
      signin.web3Tab.click();

      // click on the matamask option
      signin.metaMask_Web3.click();

      // wait for the element
      cy.wait(shortTimeout);

      // Accept the Metamask access request by clicking the "Connect" button in the Metamask popup
      cy.acceptMetamaskAccess(true).should("be.true");

      // wait for the element
      cy.wait(shortTimeout);

      // switch to metamast
      cy.confirmMetamaskSignatureRequest();

      // validate the home screen
      home.homePage.should("be.visible");
    } catch (e) {
      console.error(e);
      assert.fail("The signin with metamask is not completed.");
    }
  });

  it("REGRESSION: Perform the Cross Chain Swap Transaction with exceeded amount on Xdai and Bsc Network", () => {
    cy.fixture("transaction").then((data) => {
      // select and enter the details for the Cross Chain Swap with exceeded amount
      try {
        // click on the bridge label
        home.bridge.click();

        // click on the select chain and token dropdown
        transaction.selectChainAndTokenFrom.click();

        // click on the Gnosis chain option
        transaction.gnosisChain_ChainList.click(); // FROM: xDai Chain

        // click on the USDC token option
        transaction.uSDC_xDai_TokenList.click();

        // click on the select chain and token dropdown
        transaction.selectChainAndTokenTo.click();

        // click on the Gnosis chain option
        transaction.bNBChain_ChainList.click(); // TO: BSC Chain

        // enter the token name in search field
        transaction.search_Token.type(data.usdt_tokenname);

        // click on the searched token
        transaction.uSDT_BNBChain_TokenList.click();

        // enter the token value in the you swap field
        transaction.youSwap.type(data.you_swap_exceeded); // transaction with exceeded amount

        // click on the smart wallet tab
        transaction.smartWallet_CrossChain.click(); // RECEIVE ON SMART WALLET

        // wait for the element
        cy.wait(shortTimeout);

        // validate the offers are displayed in the offer list
        transaction.routeOption.should("not.exist");

        // wait for the element
        cy.wait(shortTimeout);

        // click on the review button
        transaction.review.click();
      } catch (e) {
        console.error(e);
        assert.fail(
          "An error is displayed while selection of the chain and token."
        );
      }

      // validate the respective validation while submiting the details
      try {
        // validate the transaction reverted label
        transactionreview.emptyBatch.should("be.visible");

        // validate the execute fail button
        transactionreview.executeFail.should("be.visible");
      } catch (e) {
        console.error(e);
        assert.fail(
          "The estimation of the Cross Chain Swap transaction is performed without sufficient balance."
        );
      }

      // perform the signout
      try {
        // click on the setting icon
        home.settings.click();

        // click on the logout option
        settingoptions.logoutOption.click();
      } catch (e) {
        console.error(e);
        assert.fail("The signout from the application is not completed.");
      }
    });
  });

  it("REGRESSION: Perform the Cross Chain Swap Transaction with zero amount and without amount on Xdai and Bsc Network", () => {
    cy.fixture("transaction").then((data) => {
      // select and enter the details for the Cross Chain Swap with zero amount and without amount
      try {
        // click on the bridge label
        home.bridge.click();

        // click on the select chain and token dropdown
        transaction.selectChainAndTokenFrom.click();

        // click on the Gnosis chain option
        transaction.gnosisChain_ChainList.click(); // FROM: xDai Chain

        // click on the USDC token option
        transaction.uSDC_xDai_TokenList.click();

        // click on the select chain and token dropdown
        transaction.selectChainAndTokenTo.click();

        // click on the Gnosis chain option
        transaction.bNBChain_ChainList.click(); // TO: BSC Chain

        // enter the token name in search field
        transaction.search_Token.type(data.usdt_tokenname);

        // click on the searched token
        transaction.uSDT_BNBChain_TokenList.click();

        // enter the token value in the you swap field
        transaction.youSwap.type(data.you_swap_zero); // transaction with zero amount

        // validate the no options label in route section
        transaction.noOption_Route.should("be.visible");

        // wait for the element
        cy.wait(shortTimeout);

        // validate the review button
        transaction.review.should("not.exist");

        // clear the you swap field
        transaction.youSwapClear.clear(); // transaction without amount

        // wait for the element
        cy.wait(shortTimeout);

        // validate the no options label in route section
        transaction.noOption_Route.should("not.exist");

        // wait for the element
        cy.wait(shortTimeout);

        // validate the review button
        transaction.review.should("not.exist");
      } catch (e) {
        console.error(e);
        assert.fail(
          "An error is displayed while selection of the chain and token."
        );
      }

      // perform the signout
      try {
        // click on the setting icon
        home.settings.click();

        // click on the logout option
        settingoptions.logoutOption.click();
      } catch (e) {
        console.error(e);
        assert.fail("The signout from the application is not completed.");
      }
    });
  });

  it("REGRESSION: Verify the Edit Transaction Details Functionality while performing the Cross Chain Swap on Xdai and Bsc Network", () => {
    cy.fixture("transaction").then((data) => {
      // select and enter the details for the Cross Chain Swap
      try {
        // click on the bridge label
        home.bridge.click();

        // click on the select chain and token dropdown
        transaction.selectChainAndTokenFrom.click();

        // click on the Gnosis chain option
        transaction.gnosisChain_ChainList.click(); // FROM: xDai Chain

        // click on the USDC token option
        transaction.uSDC_xDai_TokenList.click();

        // click on the select chain and token dropdown
        transaction.selectChainAndTokenTo.click();

        // click on the Gnosis chain option
        transaction.bNBChain_ChainList.click(); // TO: BSC Chain

        // enter the token name in search field
        transaction.search_Token.type(data.usdt_tokenname);

        // click on the searched token
        transaction.uSDT_BNBChain_TokenList.click();

        // enter the token value in the you swap field
        transaction.youSwap.type(data.you_swap);

        // click on the smart wallet tab
        transaction.smartWallet_CrossChain.click(); // RECEIVE ON SMART WALLET

        // validate the routes are displayed in the route list
        transaction.routeOption.should("be.visible");

        // wait for the element
        cy.wait(shortTimeout);

        // click on the review button
        transaction.review.click();
      } catch (e) {
        console.error(e);
        assert.fail(
          "An error is displayed while selection of the chain and token."
        );
      }

      // validate the edit feature of the transaction details on transaction review screen
      try {
        // validate the execute fail button
        transactionreview.execute.should("be.visible");

        // click on the go back button
        transactionreview.goBack.click();

        // clear the value of you swap field
        transaction.youSwapClear.clear();

        // enter the token value in the you swap field
        transaction.youSwap.type(data.you_swap_exceeded); // transaction with exceeded amount

        // wait for the element
        cy.wait(shortTimeout);

        // validate the routes are displayed in the route list
        transaction.routeOption.should("not.exist");

        // click on the review button
        transaction.review.click();

        // validate the transaction reverted label
        transactionreview.emptyBatch.should("be.visible");

        // validate the execute fail button
        transactionreview.executeFail.should("be.visible");

        // click on the edit transaction details button
        transactionreview.editBridgeTransaction.click();

        // clear the you swap field
        transaction.youSwapClear.clear();

        // enter updated details in the you swap field
        transaction.youSwap.type(data.you_swap_updated); // transaction with valid amount

        // validate the routes are displayed in the route list
        transaction.routeOption.should("be.visible");

        // click on the save button
        transaction.save.click();

        // validate the execute button
        transactionreview.execute.should("be.visible");

        // click on the edit transaction details button
        transactionreview.editBridgeTransaction.click();

        // click on the go back to preview button
        transaction.goBackToPreview.click();
      } catch (e) {
        console.error(e);
        assert.fail(
          "The estimation of the Cross Chain Swap transaction is performed without sufficient balance."
        );
      }

      // execute the updated details for the Cross Chain Swap
      try {
        // waiting for the element
        cy.wait(shortTimeout);

        // click on the paying fees with filed
        transactionreview.payingFeesWith_xDai.click();

        // click on the USDC token
        transactionreview.USDC_TokenList.click();

        // validate the execute button
        transactionreview.execute.should("be.visible");

        // click on the execute button
        transactionreview.execute.click();

        // wait for the element
        cy.wait(shortTimeout);

        // switch to metamast
        cy.confirmMetamaskSignatureRequest();
      } catch (e) {
        console.error(e);
        transactionreview.clickExecuteFail.should("be.visible");
        assert.fail(
          "The estimation of the Cross Chain Swap transaction is not performed."
        );
      }

      // submiting the updated details for the Cross Chain Swap
      try {
        // validate the transaction completed label
        transactionreview.transactionCompleted.should("be.visible");

        // click on the leave button
        transactionreview.leave.click();

        // verify home screen
        home.homePage.should("be.visible");
      } catch (e) {
        console.error(e);
        assert.fail("The Cross Chain Swap transaction not completed.");
      }

      // perform the signout
      try {
        // click on the setting icon
        home.settings.click();

        // click on the logout option
        settingoptions.logoutOption.click();
      } catch (e) {
        console.error(e);
        assert.fail("The signout from the application is not completed.");
      }
    });
  });

  it("REGRESSION: Validate the Cross Chain Swap Transaction with Xdai and Bsc Network perfomr only one per batch", () => {
    cy.fixture("transaction").then((data) => {
      // select and enter the details for the Cross Chain Swap
      try {
        // click on the bridge label
        home.bridge.click();

        // click on the select chain and token dropdown
        transaction.selectChainAndTokenFrom.click();

        // click on the Gnosis chain option
        transaction.gnosisChain_ChainList.click(); // FROM: xDai Chain

        // click on the USDC token option
        transaction.uSDC_xDai_TokenList.click();

        // click on the select chain and token dropdown
        transaction.selectChainAndTokenTo.click();

        // click on the Gnosis chain option
        transaction.bNBChain_ChainList.click(); // TO: BSC Chain

        // enter the token name in search field
        transaction.search_Token.type(data.usdt_tokenname);

        // click on the searched token
        transaction.uSDT_BNBChain_TokenList.click();

        // enter the token value in the you swap field
        transaction.youSwap.type(data.you_swap);

        // click on the smart wallet tab
        transaction.smartWallet_CrossChain.click(); // RECEIVE ON SMART WALLET

        // validate the routes are displayed in the route list
        transaction.routeOption.should("be.visible");

        // wait for the element
        cy.wait(shortTimeout);

        // click on the add transactions
        transaction.addTransaction.click();

        // validate the validate statement
        transaction.maxOneBridgeTransaction.should("be.visible");
      } catch (e) {
        console.error(e);
        assert.fail(
          "An error is displayed while selection of the chain and token."
        );
      }

      // perform the signout
      try {
        // click on the setting icon
        home.settings.click();

        // click on the logout option
        settingoptions.logoutOption.click();
      } catch (e) {
        console.error(e);
        assert.fail("The signout from the application is not completed.");
      }
    });
  });
});
