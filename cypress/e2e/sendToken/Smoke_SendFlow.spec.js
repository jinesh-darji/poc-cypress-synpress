import { assert } from "chai";
import signin from "../../PageObjects/SignIn/signInPage";
import home from "../../PageObjects/HomeAndSettings/homePage";
import settingoptions from "../../PageObjects/HomeAndSettings/settingOptions";
import transaction from "../../PageObjects/TransactionFlow/transactionPage";
import transactionreview from "../../PageObjects/TransactionFlow/transactionReviewPage";

const shortTimeout = 3000;
const mediumTimeout = 10000;
const longTimeout = 300000;

let chainLocator = [
  "Polygon",
  "BNB Chain",
  "Gnosis Chain",
  "Optimism",
  "Arbitrum",
];
let tokenLocator = ["Matic", "BNB", "xDAI", "Optimism", "Arbitrum"];

describe("Smoke Test Case of the Send Native Token Flow", () => {
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

  for (let i = 0; i < chainLocator.length; i++) {
    it(
      "SMOKE: Perform the Send Native Token Transaction with single transaction on " +
        chainLocator[i] +
        " Network",
      () => {
        cy.fixture("transaction").then((data) => {
          // select and enter the details for sending the Native token
          try {
            // wait for the element
            cy.wait(shortTimeout);

            // click on the send label
            home.send.click();

            // click on the select chain and token dropdown
            transaction.selectChaiAndToken.click();

            // click on the respective chain option
            cy.xpath(
              "//img[@alt='" +
                chainLocator[i] +
                "']//parent::div[text()='" +
                chainLocator[i] +
                "']",
              { timeout: longTimeout }
            ).click();

            // click on the respective token option
            if (!(tokenLocator[i] === "BNB")) {
              cy.xpath(
                "//img[@alt='" +
                  tokenLocator[i] +
                  "']//following-sibling::div//div[text()='" +
                  tokenLocator[i] +
                  "']",
                { timeout: longTimeout }
              ).click();
            } else {
              cy.xpath(
                "(//img[@alt='" +
                  tokenLocator[i] +
                  "']//following-sibling::div//div[text()='" +
                  tokenLocator[i] +
                  "'])[1]",
                { timeout: longTimeout }
              ).click();
            }

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

          // execute the details for sending the Native token
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
              "The estimation of the send native transaction is not performed."
            );
          }

          // submiting the details for sending the Native token
          try {
            // validate the transaction completed label
            transactionreview.transactionCompleted.should("be.visible");

            // click on the leave button
            transactionreview.leave.click();

            // verify home screen
            home.homePage.should("be.visible");
          } catch (e) {
            console.error(e);
            assert.fail("The send native token transaction not completed.");
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
      }
    );

    it(
      "SMOKE: Perform the Send ERC20 Token Transaction with single transaction on " +
        chainLocator[i] +
        " Network",
      () => {
        cy.fixture("transaction").then((data) => {
          // select and enter the details for sending the ERC20 token
          try {
            // wait for the element
            cy.wait(shortTimeout);

            // click on the send label
            home.send.click();

            // click on the select chain and token dropdown
            transaction.selectChaiAndToken.click();

            // click on the respective chain option
            cy.xpath(
              "//img[@alt='" +
                chainLocator[i] +
                "']//parent::div[text()='" +
                chainLocator[i] +
                "']",
              { timeout: longTimeout }
            ).click();

            // click on the respective token option
            cy.xpath(
              "//div[text()='" +
                chainLocator[i] +
                "']//following-sibling::div//img[@alt='USDC']",
              { timeout: longTimeout }
            ).click();

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

          // execute the details for sending the ERC20 token
          try {
            // wait for the element
            cy.wait(mediumTimeout);

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
      }
    );
  }
});
