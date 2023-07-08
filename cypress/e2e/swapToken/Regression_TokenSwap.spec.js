import { assert } from "chai";
import signin from "../../PageObjects/SignIn/signInPage";
import home from "../../PageObjects/HomeAndSettings/homePage";
import settingoptions from "../../PageObjects/HomeAndSettings/settingOptions";
import transaction from "../../PageObjects/TransactionFlow/transactionPage";
import transactionreview from "../../PageObjects/TransactionFlow/transactionReviewPage";

const shortTimeout = 2000;

describe("Regression Test Cases of the Swap Token Flows", () => {
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

  it("REGRESSION: Perform the Swap Token Transaction with exceeded amount on Xdai Network", () => {
    cy.fixture("transaction").then((data) => {
      // select and enter the details for the Swap Token with exceeded amount
      try {
        // click on the swap label
        home.swap.click();

        // click on the select chain and token dropdown
        transaction.selectChaiAndToken.click();

        // click on the Gnosis chain option
        transaction.gnosisChain_ChainList.click();

        // click on the USDC token option
        transaction.uSDC_TokenList.click();

        // click on the none label
        transaction.none.click();

        // enter the token name in search field
        transaction.search_Token.type(data.usdt_tokenname);

        // click on the searched token
        transaction.uSDT_Text_TokenList.click();

        // enter the token value in the you swap field
        transaction.youSwap.type(data.you_swap_exceeded); // transaction with exceeded amount

        // wait for the element
        cy.wait(shortTimeout);

        // validate the offers are displayed in the offer list
        transaction.offerOption.should("not.exist");

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

  it("REGRESSION: Perform the Swap Token Transaction with zero amount and without amount on Xdai Network", () => {
    cy.fixture("transaction").then((data) => {
      // select and enter the details for the Swap Token with zero amount and without amount
      try {
        // click on the swap label
        home.swap.click();

        // click on the select chain and token dropdown
        transaction.selectChaiAndToken.click();

        // click on the Gnosis chain option
        transaction.gnosisChain_ChainList.click();

        // click on the USDC token option
        transaction.uSDC_TokenList.click();

        // click on the none label
        transaction.none.click();

        // enter the token name in search field
        transaction.search_Token.type(data.usdt_tokenname);

        // click on the searched token
        transaction.uSDT_Text_TokenList.click();

        // enter the token value in the you swap field
        transaction.youSwap.type(data.you_swap_zero); // transaction with zero amount

        // validate the no options label in offer section
        transaction.noOption_Offer.should("be.visible");

        // wait for the element
        cy.wait(shortTimeout);

        // validate the review button
        transaction.review.should("not.exist");

        // clear the you swap field
        transaction.youSwapClear.clear(); // transaction without amount

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

  it("REGRESSION: Perform the Swap Token Transaction with the same receiver on Xdai Network", () => {
    cy.fixture("transaction").then((data) => {
      // select and enter the details for the swap token with same receiver
      try {
        // click on the swap label
        home.swap.click();

        // click on the select chain and token dropdown
        transaction.selectChaiAndToken.click();

        // click on the Gnosis chain option
        transaction.gnosisChain_ChainList.click();

        // click on the USDC token option
        transaction.uSDC_TokenList.click();

        // click on the none label
        transaction.none.click();

        // enter the token name in search field
        transaction.search_Token.type(data.usdc_tokenname);

        // click on the searched token
        transaction.uSDC_Text_TokenList.click();

        // enter the token value in the you swap field
        transaction.youSwap.type(data.you_swap);

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

  it("REGRESSION: Verify the Edit Transaction Details Functionality while performing the Swap Token on Xdai Network", () => {
    cy.fixture("transaction").then((data) => {
      // select and enter the details for the Swap Token
      try {
        // click on the swap label
        home.swap.click();

        // click on the select chain and token dropdown
        transaction.selectChaiAndToken.click();

        // click on the Gnosis chain option
        transaction.gnosisChain_ChainList.click();

        // click on the USDC token option
        transaction.uSDC_TokenList.click();

        // click on the none label
        transaction.none.click();

        // enter the token name in search field
        transaction.search_Token.type(data.usdt_tokenname);

        // click on the searched token
        transaction.uSDT_Text_TokenList.click();

        // enter the token value in the you swap field
        transaction.youSwap.type(data.you_swap);

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

        // clear the value of you swap field
        transaction.youSwapClear.clear();

        // enter the token value in the you swap field
        transaction.youSwap.type(data.you_swap_exceeded); // transaction with exceeded amount

        // click on the review button
        transaction.review.click();

        // validate the transaction reverted label
        transactionreview.transactionReverted.should("be.visible");

        // validate the execute fail button
        transactionreview.executeFail.should("be.visible");

        // click on the edit transaction details button
        transactionreview.editSwapTransaction.click();

        // clear the you swap field
        transaction.youSwapClear.clear();

        // enter updated details in the you swap field
        transaction.youSwap.type(data.you_swap_updated); // transaction with valid amount

        // click on the save button
        transaction.save.click();

        // validate the execute button
        transactionreview.execute.should("be.visible");

        // click on the edit transaction details button
        transactionreview.editSwapTransaction.click();

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

  it("REGRESSION: Perform the Swap Token Transaction with Xdai Network and multiple transactions", () => {
    let transaction_count = Math.floor(Math.random() * (4 - 2 + 1) + 2); // generate random number between 2 to 4

    cy.fixture("transaction").then((data) => {
      // select and enter the details for the Swap Token
      try {
        // click on the swap label
        home.swap.click();

        for (let x = 0; x < transaction_count; x++) {
          // click on the select chain and token dropdown
          transaction.selectChaiAndToken.click();

          // click on the Gnosis chain option
          transaction.gnosisChain_ChainList.click();

          // click on the USDT token option
          transaction.uSDT_xDai_TokenList.click();

          // click on the none label
          transaction.none.click();

          // enter the token name in search field
          transaction.search_Token.type(data.usdc_tokenname);

          // click on the searched token
          transaction.uSDC_Text_Search_TokenList.click();

          // enter the token value in the you swap field
          transaction.youSwap.type(data.you_swap);

          // validate the offers are displayed in the offer list
          transaction.offerOption.should("be.visible");

          // wait for the element
          cy.wait(shortTimeout);

          // click on the first offer from the offer list
          transaction.offerOption.click();

          if (!(x === transaction_count - 1)) {
            // wait for the element
            cy.wait(shortTimeout);

            // click on the add transactions
            transaction.addTransaction.click();

            // click on the swap assert option
            transaction.swapAsset.click();
          }
        }

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

      // execute the details for the Swap Token
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
          "The estimation of the Swap Token transaction is not performed."
        );
      }

      // submiting the details for the Swap Token
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

  it("REGRESSION: Perform the Swap Token Transaction with Matic, BNB, Xdai, Optimism, and Arbitrum Networks", () => {
    cy.fixture("transaction").then((data) => {
      // select and enter the details for the Swap Token with polygon, bnb chain, gnosis chain, optimism, and Arbitrum
      try {
        // click on the swap label
        home.swap.click();

        // click on the select chain and token dropdown
        transaction.selectChaiAndToken.click();

        // click on the Gnosis chain option
        transaction.polygon_ChainList.click();

        // click on the USDC token option
        transaction.uSDC_Polygon_TokenList.click();

        // click on the none label
        transaction.none.click();

        // enter the token name in search field
        transaction.search_Token.type(data.usdt_tokenname);

        // click on the searched token
        transaction.uSDT_Text_Search_TokenList.click();

        // enter the token value in the you swap field
        transaction.youSwap.type(data.you_swap);

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

        // click on the swap assert option
        transaction.swapAsset.click();

        // click on the select chain and token dropdown
        transaction.selectChaiAndToken.click();

        // click on the BNB chain option
        transaction.bNBChain_ChainList.click();

        // click on the USDC token option
        transaction.uSDC_BNBChain_TokenList.click();

        // click on the none label
        transaction.none.click();

        // enter the token name in search field
        transaction.search_Token.type(data.usdt_tokenname);

        // click on the searched token
        transaction.uSDT_Text_Search_TokenList.click();

        // enter the token value in the you swap field
        transaction.youSwap.type(data.you_swap);

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

        // click on the swap assert option
        transaction.swapAsset.click();

        // click on the select chain and token dropdown
        transaction.selectChaiAndToken.click();

        // click on the Gnosis chain option
        transaction.gnosisChain_ChainList.click();

        // click on the USDC token option
        transaction.uSDC_xDai_TokenList.click();

        // click on the none label
        transaction.none.click();

        // enter the token name in search field
        transaction.search_Token.type(data.usdt_tokenname);

        // click on the searched token
        transaction.uSDT_Text_Search_TokenList.click();

        // enter the token value in the you swap field
        transaction.youSwap.type(data.you_swap);

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

        // click on the swap assert option
        transaction.swapAsset.click();

        // click on the select chain and token dropdown
        transaction.selectChaiAndToken.click();

        // click on the Optimism chain option
        transaction.optimism_ChainList.click();

        // click on the USDC token option
        transaction.uSDC_Optimism_TokenList.click();

        // click on the none label
        transaction.none.click();

        // enter the token name in search field
        transaction.search_Token.type(data.usdt_tokenname);

        // click on the searched token
        transaction.uSDT_Text_Search_TokenList.click();

        // enter the token value in the you swap field
        transaction.youSwap.type(data.you_swap);

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

        // click on the swap assert option
        transaction.swapAsset.click();

        // click on the select chain and token dropdown
        transaction.selectChaiAndToken.click();

        // click on the Arbitrum chain option
        transaction.arbitrum_ChainList.click();

        // click on the USDC token option
        transaction.uSDC_Arbitrum_TokenList.click();

        // click on the none label
        transaction.none.click();

        // enter the token name in search field
        transaction.search_Token.type(data.usdt_tokenname);

        // click on the searched token
        transaction.uSDT_Text_Search_TokenList.click();

        // enter the token value in the you swap field
        transaction.youSwap.type(data.you_swap);

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

      // execute the details for the Swap Token with polugon, bnb chain, gnosis chain, optimism, and Arbitrum
      try {
        // waiting for the element
        cy.wait(shortTimeout);

        // click on the paying fees with filed
        transactionreview.payingFeesWith_Matic.click();

        // click on the USDC token
        transactionreview.USDC_TokenList_Polygon.click();

        // wait for the element
        cy.wait(shortTimeout);

        // click on the paying fees with filed
        transactionreview.payingFeesWith_Bnb.click();

        // click on the USDC token
        transactionreview.USDC_TokenList_BNBChain.click();

        // wait for the element
        cy.wait(shortTimeout);

        // click on the paying fees with filed
        transactionreview.payingFeesWith_xDai.click();

        // click on the USDC token
        transactionreview.USDC_TokenList_GnosisChain.click();

        // wait for the element
        cy.wait(shortTimeout);

        // click on the paying fees with filed
        transactionreview.payingFeesWith_Optimism.click();

        // click on the USDC token
        transactionreview.USDC_TokenList_Optimism.click();

        // wait for the element
        cy.wait(shortTimeout);

        // click on the paying fees with filed
        transactionreview.payingFeesWith_Arbitrum.click();

        // click on the USDC token
        transactionreview.USDC_TokenList_Arbitrum.click();

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
          "The estimation of the Swap Token transaction is not performed."
        );
      }

      // submiting the details for the Swap Token with polugon, bnb chain, gnosis chain, optimism, and Arbitrum
      try {
        // validate the transaction completed label of polygon netwotk
        transactionreview.transactionCompletedSwap_Polygon.should("be.visible");

        // validate the transaction completed label of bnb chain netwotk
        transactionreview.transactionCompletedSwap_BNBChain.should(
          "be.visible"
        );

        // validate the transaction completed label of gnosis chain netwotk
        transactionreview.transactionCompletedSwap_GnosisChain.should(
          "be.visible"
        );

        // validate the transaction completed label of optimism netwotk
        transactionreview.transactionCompletedSwap_Optimism.should(
          "be.visible"
        );

        // validate the transaction completed label of arbitrum netwotk
        transactionreview.transactionCompletedSwap_Arbitrum.should(
          "be.visible"
        );

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

  xit("REGRESSION: Verify the Start Multi Call Functionality with Swap asset while performing the Swap Token on Xdai Network", () => {
    cy.fixture("transaction").then((data) => {
      // select and enter the details for the Swap Token
      try {
        // click on the swap label
        home.swap.click();

        // click on the select chain and token dropdown
        transaction.selectChaiAndToken.click();

        // click on the Gnosis chain option
        transaction.gnosisChain_ChainList.click();

        // click on the USDT token option
        transaction.uSDT_TokenList.click();

        // click on the none label
        transaction.none.click();

        // enter the token name in search field
        transaction.search_Token.type(data.usdc_tokenname);

        // click on the searched token
        transaction.uSDC_Text_TokenList.click();

        // enter the token value in the you swap field
        transaction.youSwap.type(data.you_swap);

        // validate the offers are displayed in the offer list
        transaction.offerOption.should("be.visible");

        // wait for the element
        cy.wait(shortTimeout);

        // click on the first offer from the offer list
        transaction.offerOption.click();

        // wait for the element
        cy.wait(shortTimeout);

        // click on the start multi call button
        transaction.startMultiCall.click();

        // click on the swap assert option
        transaction.startMultiCall_SwapAsset.click();

        // wait for the element
        cy.wait(shortTimeout);

        // click on the none label
        transaction.none.click();

        // enter the token name in search field
        transaction.search_Token.type(data.matic_tokenname);

        // click on the searched token
        transaction.matic_Text_TokenList.click();

        // enter the token value in the you swap field
        transaction.youSwap.type(data.you_swap);

        // validate the offers are displayed in the offer list
        transaction.offerOption.should("be.visible");

        // wait for the element
        cy.wait(shortTimeout);

        // click on the first offer from the offer list
        transaction.offerOption.click();

        // wait for the element
        cy.wait(shortTimeout);

        // click on the continue multi call button
        transaction.continueMultiCall.click();

        // validate the start multi call button
        transaction.startMultiCall.should("be.visible");

        // click on the review button
        transaction.review.click();
      } catch (e) {
        console.error(e);
        assert.fail(
          "An error is displayed while selection of the chain and token."
        );
      }

      // execute the details for the Swap Token
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
        transactionreview.executeFail.should("be.visible");
        assert.fail(
          "The estimation of the Swap Token transaction is not performed."
        );
      }

      // submiting the details for the Swap Token
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

  xit("REGRESSION: Verify the Start Multi Call Functionality with Swap asset while performing the Swap Token and Send Token on Xdai Network", () => {});

  xit("REGRESSION: Verify the Start Multi Call Functionality with Swap asset while performing the Swap Token and Bridge Token on Xdai Network", () => {});
});
