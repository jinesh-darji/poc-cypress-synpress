import { assert } from "chai";
import signin from "../../PageObjects/SignIn/signInPage";
import home from "../../PageObjects/HomeAndSettings/homePage";
import settingoptions from "../../PageObjects/HomeAndSettings/settingOptions";
import transaction from "../../PageObjects/TransactionFlow/transactionPage";
import transactionreview from "../../PageObjects/TransactionFlow/transactionReviewPage";

const shortTimeout = 2000;

describe("Regression Test Cases of the Staking Flows on sKLIMA", () => {
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

  it("REGRESSION: Perform the Staking Transaction on sKLIMA with exceeded amount on Xdai Network", () => {
    cy.fixture("transaction").then((data) => {
      // select and enter the details for the Swap Token with exceeded amount
      try {
        // click on the add transaction
        transaction.addTransaction.click();

        // click on the klima option
        transaction.klimaStaking.click();

        // click on the select chain and token dropdown
        transaction.selectChaiAndToken.click();

        // click on the Gnosis chain option
        transaction.gnosisChain_ChainList.click();

        // click on the xDai token option
        transaction.xDAI_TokenList.click();

        // validate the default sklima token
        transaction.sKLIMA_TokenList.should("be.visible");

        // enter the token value in the you stake field
        transaction.youStake.type(data.you_stake_exceeded); // transaction with exceeded amount

        // click on the smart wallet tab
        transaction.smartWallet_CrossChain.click(); // RECEIVE ON SMART WALLET

        // validate the offers are displayed in the offer list
        transaction.offerOption.should("not.exist");

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
        transactionreview.transactionReverted.should("be.visible");

        // validate the execute fail button
        transactionreview.executeFail.should("be.visible");
      } catch (e) {
        console.error(e);
        assert.fail(
          "The estimation of the Swap Token transaction is performed without sufficient balance."
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

  it("REGRESSION: Perform the Staking Transaction on sKLIMA with zero amount and without amount on Xdai Network", () => {
    cy.fixture("transaction").then((data) => {
      // select and enter the details for the Swap Token with zero amount and without amount
      try {
        // click on the add transaction
        transaction.addTransaction.click();

        // click on the klima option
        transaction.klimaStaking.click();

        // click on the select chain and token dropdown
        transaction.selectChaiAndToken.click();

        // click on the Gnosis chain option
        transaction.gnosisChain_ChainList.click();

        // click on the xDai token option
        transaction.xDAI_TokenList.click();

        // validate the default sklima token
        transaction.sKLIMA_TokenList.should("be.visible");

        // enter the token value in the you stake field
        transaction.youStake.type(data.you_stake_zero); // transaction with zero amount

        // validate the no options label in offer section
        transaction.noOption_Offer.should("be.visible");

        // wait for the element
        cy.wait(shortTimeout);

        // validate the review button
        transaction.review.should("not.exist");

        // clear the you stake field
        transaction.youStakeClear.clear(); // transaction without amount

        // wait for the element
        cy.wait(shortTimeout);

        // validate the no options label in offer section
        transaction.noOption_Offer.should("not.exist");

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

  it("REGRESSION: Verify the Edit Transaction Details Functionality while performing the Staking Transaction on sKLIMA on Xdai Network", () => {
    cy.fixture("transaction").then((data) => {
      // select and enter the details for the Swap Token
      try {
        // click on the add transaction
        transaction.addTransaction.click();

        // click on the klima option
        transaction.klimaStaking.click();

        // click on the select chain and token dropdown
        transaction.selectChaiAndToken.click();

        // click on the Gnosis chain option
        transaction.gnosisChain_ChainList.click();

        // click on the xDai token option
        transaction.xDAI_TokenList.click();

        // validate the default sklima token
        transaction.sKLIMA_TokenList.should("be.visible");

        // enter the token value in the you stake field
        transaction.youStake.type(data.you_stake_xdai);

        // validate the offers are displayed in the offer list
        transaction.offerOption.should("be.visible");

        // wait for the element
        cy.wait(shortTimeout);

        // click on the first offer from the offer list
        transaction.offerOption.click();

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

        // clear the value of you stake field
        transaction.youStakeClear.clear();

        // enter the token value in the you stake field
        transaction.youStake.type(data.you_stake_exceeded); // transaction with exceeded amount

        // click on the review button
        transaction.review.click();

        // validate the transaction reverted label
        transactionreview.transactionReverted.should("be.visible");

        // validate the execute fail button
        transactionreview.executeFail.should("be.visible");

        // click on the edit transaction details button
        transactionreview.editKlimaDaoStakingTransaction.click();

        // clear the you stake field
        transaction.youStakeClear.clear();

        // enter updated details in the you stake field
        transaction.youStake.type(data.you_stake_updated); // transaction with valid amount

        // click on the save button
        transaction.save.click();

        // validate the execute button
        transactionreview.execute.should("be.visible");

        // click on the edit transaction details button
        transactionreview.editKlimaDaoStakingTransaction.click();

        // click on the go back to preview button
        transaction.goBackToPreview.click();
      } catch (e) {
        console.error(e);
        assert.fail(
          "The estimation of the Swap Token transaction is performed without sufficient balance."
        );
      }

      // execute the updated details for the Swap Token
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
          "The estimation of the Swap Token transaction is not performed."
        );
      }

      // submiting the updated details for the Swap Token
      try {
        // validate the transaction completed label
        transactionreview.transactionCompleted.should("be.visible");

        // click on the leave button
        transactionreview.leave.click();

        // verify home screen
        home.homePage.should("be.visible");
      } catch (e) {
        console.error(e);
        assert.fail("The Swap Token transaction not completed.");
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

  it("REGRESSION: Perform the Staking Transaction on sKLIMA with more than one time on Xdai Network", () => {
    cy.fixture("transaction").then((data) => {
      // select and enter the details for the Swap Token
      try {
        // click on the add transaction
        transaction.addTransaction.click();

        // click on the klima option
        transaction.klimaStaking.click();

        // click on the select chain and token dropdown
        transaction.selectChaiAndToken.click();

        // click on the Gnosis chain option
        transaction.gnosisChain_ChainList.click();

        // click on the xDai token option
        transaction.xDAI_TokenList.click();

        // validate the default sklima token
        transaction.sKLIMA_TokenList.should("be.visible");

        // enter the token value in the you stake field
        transaction.youStake.type(data.you_stake_xdai);

        // click on the smart wallet tab
        transaction.smartWallet_CrossChain.click(); // RECEIVE ON SMART WALLET

        // validate the offers are displayed in the offer list
        transaction.offerOption.should("be.visible");

        // wait for the element
        cy.wait(shortTimeout);

        // click on the first offer from the offer list
        transaction.offerOption.click();

        // wait for the element
        cy.wait(shortTimeout);

        // click on the add transactions
        transaction.addTransaction.click();

        // click on the klima option
        transaction.klimaStaking.click();

        // wait for the element
        cy.wait(shortTimeout);

        // validate the only one sklima validation
        transaction.onlyOneSklima.should("be.visible");

        // click on the close button
        transaction.close_OnlyOneSklima.click();
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

  it("REGRESSION: Perform the Staking Transaction on sKLIMA and receive on same custom address with single transaction on Xdai Network", () => {
    cy.fixture("transaction").then((data) => {
      // select and enter the details for token swap
      try {
        // click on the add transaction
        transaction.addTransaction.click();

        // click on the klima option
        transaction.klimaStaking.click();

        // click on the select chain and token dropdown
        transaction.selectChaiAndToken.click();

        // click on the Gnosis chain option
        transaction.gnosisChain_ChainList.click();

        // click on the xDai token option
        transaction.xDAI_TokenList.click();

        // validate the default sklima token
        transaction.sKLIMA_TokenList.should("be.visible");

        // enter the token value in the you stake field
        transaction.youStake.type(data.you_stake_xdai);

        // click on the smart wallet tab
        transaction.custom_CrossChain.click(); // RECEIVE ON CUSTOM ADDRESS

        // enter the custom address in the field
        transaction.customAddress_CrossChain.type(data.receiver_address_same);

        // validate the offers are displayed in the offer list
        transaction.offerOption.should("be.visible");

        // wait for the element
        cy.wait(shortTimeout);

        // click on the first offer from the offer list
        transaction.offerOption.click();

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

      // execute the details for token swap
      try {
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
        transactionreview.executeFail.should("be.visible");
        assert.fail(
          "The estimation of the token swap transaction is not performed."
        );
      }

      // submiting the details for token swap
      try {
        // validate the transaction completed label
        transactionreview.transactionCompleted.should("be.visible");

        // validate the estimation second transaction
        transactionreview.estimatingSecondTransaction.should("be.visible");

        // wait for the element
        cy.wait(shortTimeout);

        // switch to metamast and confirm the request
        cy.confirmMetamaskSignatureRequest();

        // click on the leave button
        transactionreview.transactionSent.should("be.visible");

        // click on the close button
        transactionreview.closeTransactionSent.click();

        // verify home screen
        home.homePage.should("be.visible");
      } catch (e) {
        console.error(e);
        assert.fail("The token swap transaction not completed.");
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

  it("REGRESSION: Perform the Staking Transaction on sKLIMA and receive on invalid custom address with single transaction on Xdai Network", () => {
    cy.fixture("transaction").then((data) => {
      // select and enter the details for token swap
      try {
        // click on the add transaction
        transaction.addTransaction.click();

        // click on the klima option
        transaction.klimaStaking.click();

        // click on the select chain and token dropdown
        transaction.selectChaiAndToken.click();

        // click on the Gnosis chain option
        transaction.gnosisChain_ChainList.click();

        // click on the xDai token option
        transaction.xDAI_TokenList.click();

        // validate the default sklima token
        transaction.sKLIMA_TokenList.should("be.visible");

        // enter the token value in the you stake field
        transaction.youStake.type(data.you_stake_xdai);

        // click on the smart wallet tab
        transaction.custom_CrossChain.click(); // RECEIVE ON CUSTOM ADDRESS

        // enter the custom address in the field
        transaction.customAddress_CrossChain.type(
          data.receiver_address_invalid
        );

        // validate the offers are displayed in the offer list
        transaction.offerOption.should("not.exist");

        // wait for the element
        cy.wait(shortTimeout);

        // click on the review button
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

  it("REGRESSION: Validate the Staking Transaction validation on sKLIMA when already one transaction added on Xdai Network", () => {
    cy.fixture("transaction").then((data) => {
      // select and enter the details for sending the Native token
      try {
        // wait for the element
        cy.wait(shortTimeout);

        // click on the send label
        home.send.click();

        // click on the select chain and token dropdown
        transaction.selectChaiAndToken.click();

        // click on the Gnosis chain option
        transaction.gnosisChain_ChainList.click();

        // click on the xdai token option
        transaction.xDAI_TokenList.click();

        // enter the token value in the you send field
        transaction.youSend.type(data.you_send);

        // enter the valie address in the receiver address field
        transaction.receiverAddress.type(data.receiver_address);

        // wait for the element
        cy.wait(shortTimeout);

        // click on the add transactions
        transaction.addTransaction.click();

        // click on the klima option
        transaction.klimaStaking.click();

        // wait for the element
        cy.wait(shortTimeout);

        // validate the only one sklima validation
        transaction.onlyOneSklima.should("be.visible");

        // click on the close button
        transaction.close_OnlyOneSklima.click();
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
