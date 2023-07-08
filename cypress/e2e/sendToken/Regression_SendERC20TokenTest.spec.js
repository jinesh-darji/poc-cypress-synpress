import { assert } from "chai";
import signin from "../../PageObjects/SignIn/signInPage";
import home from "../../PageObjects/HomeAndSettings/homePage";
import settingoptions from "../../PageObjects/HomeAndSettings/settingOptions";
import transaction from "../../PageObjects/TransactionFlow/transactionPage";
import transactionreview from "../../PageObjects/TransactionFlow/transactionReviewPage";

const shortTimeout = 3000;

describe("Regression Test Cases of the Send ERC20 Token Flows", () => {
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

  it("REGRESSION: Perform the Send ERC20 Token Transaction with exceeded amount on Xdai Network", () => {
    cy.fixture("transaction").then((data) => {
      // select and enter the details for sending the ERC20 token with exceeded amount
      try {
        // click on the send label
        home.send.click();

        // click on the select chain and token dropdown
        transaction.selectChaiAndToken.click();

        // click on the Gnosis chain option
        transaction.gnosisChain_ChainList.click();

        // click on the USDC token option
        transaction.uSDC_TokenList.click();

        // enter the token value in the you send field
        transaction.youSend.type(data.you_send_exceeded); // exceeded amount

        // enter the valie address in the receiver address field
        transaction.receiverAddress.type(data.receiver_address);

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
          "The estimation of the send ERC20 token transaction is performed without sufficient balance."
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

  it("REGRESSION: Perform the Send ERC20 Token Transaction with an invalid receiver address and without a receiver address on Xdai Network", () => {
    cy.fixture("transaction").then((data) => {
      // select and enter the details for sending the ERC20 token with invalid receiver address
      try {
        // click on the send label
        home.send.click();

        // click on the select chain and token dropdown
        transaction.selectChaiAndToken.click();

        // click on the Gnosis chain option
        transaction.gnosisChain_ChainList.click();

        // click on the USDC token option
        transaction.uSDC_TokenList.click();

        // enter the token value in the you send field
        transaction.youSend.type(data.you_send);

        // enter the invalid address in the receiver address field
        transaction.receiverAddress.type(data.receiver_address_invalid); // transaction with invalid receiver address

        // wait for the element
        cy.wait(shortTimeout);

        // verify the review button
        transaction.review.should("not.exist");

        // clear the receiver address field
        transaction.receiverAddressClear.clear(); // transaction without receiver address

        // wait for the element
        cy.wait(shortTimeout);

        // verify the review button
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

  it("REGRESSION: Perform the Send ERC20 Token Transaction with zero amount and without amount on Xdai Network", () => {
    cy.fixture("transaction").then((data) => {
      // select and enter the details for sending the ERC20 token with zero amount and without amount
      try {
        // click on the send label
        home.send.click();

        // click on the select chain and token dropdown
        transaction.selectChaiAndToken.click();

        // click on the Gnosis chain option
        transaction.gnosisChain_ChainList.click();

        // click on the USDC token option
        transaction.xDAI_TokenList.click();

        // enter the token value in the you send field
        transaction.youSend.type(data.you_send); // transaction with zero amount

        // enter the valie address in the receiver address field
        transaction.receiverAddress.type(data.receiver_address);

        // wait for the element
        cy.wait(shortTimeout);

        // verify the review button
        transaction.review.should("not.exist");

        // clear the you send field
        transaction.youSendClear.clear(); // transaction without amount

        // wait for the element
        cy.wait(shortTimeout);

        // verify the review button
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

  it("REGRESSION: Perform the Send ERC20 Token Transaction with the same receiver address on Xdai Network", () => {
    cy.fixture("transaction").then((data) => {
      // select and enter the details for sending the ERC20 token with same receiver address
      try {
        // click on the send label
        home.send.click();

        // click on the select chain and token dropdown
        transaction.selectChaiAndToken.click();

        // click on the Gnosis chain option
        transaction.gnosisChain_ChainList.click();

        // click on the USDC token option
        transaction.uSDC_TokenList.click();

        // enter the token value in the you send field
        transaction.youSend.type(data.you_send);

        // enter the valie address in the receiver address field
        transaction.receiverAddress.type(data.receiver_address_same); // transaction with same receiver address

        // click on the review button
        transaction.review.click();
      } catch (e) {
        console.error(e);
        assert.fail(
          "An error is displayed while selection of the chain and token."
        );
      }

      // execute the details for sending the ERC20 token
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
          "The estimation of the send ERC20 token transaction is not performed."
        );
      }

      // submiting the details for sending the ERC20 token
      try {
        // validate the transaction completed label
        transactionreview.transactionCompleted.should("be.visible");

        // click on the leave button
        transactionreview.leave.click();

        // verify home screen
        home.homePage.should("be.visible");
      } catch (e) {
        console.error(e);
        assert.fail("The send ERC20 token transaction not completed.");
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

  it("REGRESSION: Verify the Edit Transaction Details Functionality while performing the Send ERC20 Token on Xdai Network", () => {
    cy.fixture("transaction").then((data) => {
      // select and enter the details for sending the ERC20 token
      try {
        // click on the send label
        home.send.click();

        // click on the select chain and token dropdown
        transaction.selectChaiAndToken.click();

        // click on the Gnosis chain option
        transaction.gnosisChain_ChainList.click();

        // click on the USDC token option
        transaction.uSDC_TokenList.click();

        // enter the token value in the you send field
        transaction.youSend.type(data.you_send);

        // enter the valie address in the receiver address field
        transaction.receiverAddress.type(data.receiver_address_same); // transaction with same receiver address

        // click on the review button
        transaction.review.click();
      } catch (e) {
        console.error(e);
        assert.fail(
          "An error is displayed while selection of the chain and token."
        );
      }

      // validate the edit feature of the trnasaction details on trnasaction review screen
      try {
        // validate the execute fail button
        transactionreview.execute.should("be.visible");

        // click on the go back button
        transactionreview.goBack.click();

        // clear the value of you send field
        transaction.youSendClear.clear();

        // enter the token value in the you send field
        transaction.youSend.type(data.you_send_exceeded); // transaction with exceeded amount

        // click on the review button
        transaction.review.click();

        // validate the execute fail button
        transactionreview.executeFail.should("be.visible");

        // click on the edit transaction details button
        transactionreview.editTransaction.click();

        // clear the you send field
        transaction.youSendClear.clear();

        // enter updated details in the you send field
        transaction.youSend.type(data.you_send_updated); // transaction with valid amount

        // clear the receiver address field
        transaction.receiverAddressClear.clear();

        // enter the valie address in the receiver address field
        transaction.receiverAddress.type(data.receiver_address); // transaction with valid receiver address

        // click on the save button
        transaction.save.click();

        // validate the execute button
        transactionreview.execute.should("be.visible");

        // click on the edit transaction details button
        transactionreview.editTransaction.click();

        // click on the go back to preview button
        transaction.goBackToPreview.click();
      } catch (e) {
        console.error(e);
        assert.fail(
          "The estimation of the send ERC20 token transaction is performed without sufficient balance."
        );
      }

      // execute the updated details for sending the ERC20 token
      try {
        // wait for the element
        cy.wait(shortTimeout);

        // click on the paying fees with filed
        transactionreview.payingFeesWith.click();

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
          "The estimation of the send ERC20 token transaction is not performed."
        );
      }

      // submiting the updated details for sending the ERC20 token
      try {
        // validate the transaction completed label
        transactionreview.transactionCompleted.should("be.visible");

        // click on the leave button
        transactionreview.leave.click();

        // verify home screen
        home.homePage.should("be.visible");
      } catch (e) {
        console.error(e);
        assert.fail("The send ERC20 token transaction not completed.");
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

  it("REGRESSION: Perform the Send ERC20 Token Transaction with Xdai Network and multiple transactions", () => {
    let transaction_count = Math.floor(Math.random() * (4 - 2 + 1) + 2); // generate random number between 2 to 4

    cy.fixture("transaction").then((data) => {
      // select and enter the details for sending the ERC20 token
      try {
        // click on the send label
        home.send.click();

        for (let x = 0; x < transaction_count; x++) {
          // click on the select chain and token dropdown
          transaction.selectChaiAndToken.click();

          // click on the Gnosis chain option
          transaction.gnosisChain_ChainList.click();

          // click on the USDT token option
          transaction.uSDT_xDai_TokenList.click();

          // enter the token value in the you send field
          transaction.youSend.type(data.you_send);

          // enter the valie address in the receiver address field
          transaction.receiverAddress.type(data.receiver_address);

          if (!(x === transaction_count - 1)) {
            // click on the add transactions
            transaction.addTransaction.click();

            // click on the send assert option
            transaction.sendAsset.click();
          }
        }

        // click on the review button
        transaction.review.click();
      } catch (e) {
        console.error(e);
        assert.fail(
          "An error is displayed while selection of the chain and token."
        );
      }

      // execute the details for sending the ERC20 token
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
          "The estimation of the send ERC20 token transaction is not performed."
        );
      }

      // submiting the details for sending the ERC20 token
      try {
        // validate the leave button
        transactionreview.leave.should("be.visible");

        // click on the leave button
        transactionreview.leave.click();

        // verify home screen
        home.homePage.should("be.visible");
      } catch (e) {
        console.error(e);
        assert.fail("The send ERC20 token transaction not completed.");
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

  xit("REGRESSION: Perform the Send ERC20 Token Transaction with Matic, BNB, Xdai, Optimism, and Arbitrum Networks", () => {
    cy.fixture("transaction").then((data) => {
      // select and enter the details for sending the ERC20 token with polugon, bnb chain, gnosis chain, optimism, and Arbitrum
      try {
        // click on the send label
        home.send.click();

        // click on the select chain and token dropdown
        transaction.selectChaiAndToken.click();

        // click on the polygon chain option
        transaction.polygon_ChainList.click();

        // click on the USDC token option
        transaction.uSDC_Polygon_TokenList.click();

        // enter the token value in the you send field
        transaction.youSend.type(data.you_send);

        // enter the valie address in the receiver address field
        transaction.receiverAddress.type(data.receiver_address);

        // click on the add transactions
        transaction.addTransaction.click();

        // click on the send assert option
        transaction.sendAsset.click();

        // click on the select chain and token dropdown
        transaction.selectChaiAndToken.click();

        // click on the BNB chain option
        transaction.bNBChain_ChainList.click();

        // click on the USDC token option
        transaction.uSDC_BNBChain_TokenList.click();

        // enter the token value in the you send field
        transaction.youSend.type(data.you_send);

        // enter the valie address in the receiver address field
        transaction.receiverAddress.type(data.receiver_address);

        // click on the add transactions
        transaction.addTransaction.click();

        // click on the send assert option
        transaction.sendAsset.click();

        // click on the select chain and token dropdown
        transaction.selectChaiAndToken.click();

        // click on the Gnosis chain option
        transaction.gnosisChain_ChainList.click();

        // click on the USDC token option
        transaction.uSDC_xDai_TokenList.click();

        // enter the token value in the you send field
        transaction.youSend.type(data.you_send);

        // enter the valie address in the receiver address field
        transaction.receiverAddress.type(data.receiver_address);

        // click on the add transactions
        transaction.addTransaction.click();

        // click on the send assert option
        transaction.sendAsset.click();

        // click on the select chain and token dropdown
        transaction.selectChaiAndToken.click();

        // click on the Optimism chain option
        transaction.optimism_ChainList.click();

        // click on the USDC token option
        transaction.uSDC_Optimism_TokenList.click();

        // enter the token value in the you send field
        transaction.youSend.type(data.you_send);

        // enter the valie address in the receiver address field
        transaction.receiverAddress.type(data.receiver_address);

        // click on the add transactions
        transaction.addTransaction.click();

        // click on the send assert option
        transaction.sendAsset.click();

        // click on the select chain and token dropdown
        transaction.selectChaiAndToken.click();

        // click on the Arbitrum chain option
        transaction.arbitrum_ChainList.click();

        // click on the USDC token option
        transaction.uSDC_Arbitrum_TokenList.click();

        // enter the token value in the you send field
        transaction.youSend.type(data.you_send);

        // enter the valie address in the receiver address field
        transaction.receiverAddress.type(data.receiver_address);

        // click on the review button
        transaction.review.click();
      } catch (e) {
        console.error(e);
        assert.fail(
          "An error is displayed while selection of the chain and token."
        );
      }

      // execute the details for sending the ERC20 token with polugon, bnb chain, gnosis chain, optimism, and Arbitrum
      try {
        // validate the execute button
        transactionreview.execute.should("be.visible");

        // click on the execute button
        transactionreview.execute.click();

        // wait for the element
        cy.wait(shortTimeout);

        // switch to metamast
        cy.confirmMetamaskSignatureRequest();

        // wait for the element
        cy.wait(shortTimeout);

        // switch to metamast
        cy.confirmMetamaskSignatureRequest();

        // wait for the element
        cy.wait(shortTimeout);

        // switch to metamast
        cy.confirmMetamaskSignatureRequest();

        // wait for the element
        cy.wait(shortTimeout);

        // switch to metamast
        cy.confirmMetamaskSignatureRequest();

        // wait for the element
        cy.wait(shortTimeout);

        // switch to metamast
        cy.confirmMetamaskSignatureRequest();
      } catch (e) {
        console.error(e);
        transactionreview.executeFail.should("be.visible");
        assert.fail(
          "The estimation of the send ERC20 token transaction is not performed."
        );
      }

      // submiting the details for sending the ERC20 token with polugon, bnb chain, gnosis chain, optimism, and Arbitrum
      try {
        // validate the transaction completed label of polygon netwotk
        transactionreview.transactionCompleted_Polygon.should("be.visible");

        // validate the transaction completed label of bnb chain netwotk
        transactionreview.transactionCompleted_BNBChain.should("be.visible");

        // validate the transaction completed label of gnosis chain netwotk
        transactionreview.transactionCompleted_GnosisChain.should("be.visible");

        // validate the transaction completed label of optimism netwotk
        transactionreview.transactionCompleted_Optimism.should("be.visible");

        // validate the transaction completed label of arbitrum netwotk
        transactionreview.transactionCompleted_Arbitrum.should("be.visible");

        // click on the leave button
        transactionreview.leave.click();

        // verify home screen
        home.homePage.should("be.visible");
      } catch (e) {
        console.error(e);
        assert.fail("The send ERC20 token transaction not completed.");
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
