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

describe("Smoke Test Case of the Token Swap Flow", () => {
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
      "SMOKE: Perform the Token Swap Transaction with single transaction on " +
        chainLocator[i] +
        " Network",
      () => {
        cy.fixture("transaction").then((data) => {
          // select and enter the details for token swap
          try {
            // wait for the element
            cy.wait(shortTimeout);

            // click on the swap label
            home.swap.click();

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

            // click on the USDC token option
            cy.xpath(
              "//div[text()='" +
                chainLocator[i] +
                "']//following-sibling::div//img[@alt='USDC']",
              { timeout: longTimeout }
            ).click();

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

          // execute the details for token swap
          try {
            // waiting for the element
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
              "The estimation of the token swap transaction is not performed."
            );
          }

          // submiting the details for the token swap
          try {
            // validate the transaction completed label
            transactionreview.transactionCompleted.should("be.visible");

            // click on the leave button
            transactionreview.leave.click();

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
      }
    );

    it(
      "SMOKE: Perform the cross chain swap flow and receive on smart wallet with single transaction on " +
        chainLocator[i] +
        " Network",
      () => {
        cy.fixture("transaction").then((data) => {
          // select and enter the details for cross chain swap
          try {
            // wait for the element
            cy.wait(shortTimeout);

            // click on the bridge label
            home.bridge.click();

            // click on the select chain and token dropdown
            transaction.selectChainAndTokenFrom.click();

            // click on the arbitrum chain option
            cy.xpath(
              "//img[@alt='" +
                chainLocator[i] +
                "']//parent::div[text()='" +
                chainLocator[i] +
                "']",
              { timeout: longTimeout }
            ).click();

            // click on the USDC token option
            cy.xpath(
              "//div[text()='" +
                chainLocator[i] +
                "']//following-sibling::div//img[@alt='USDC']",
              { timeout: longTimeout }
            ).click();

            // click on the select chain and token dropdown
            transaction.selectChainAndTokenTo.click();

            if (!(chainLocator[i] === "BNB Chain")) {
              // click on the BNB chain option
              transaction.bNBChain_ChainList.click();
            } else {
              // click on the polygon option
              transaction.polygon_ChainList.click();
            }

            // enter the token name in search field
            transaction.search_Token.type(data.usdt_tokenname);

            // click on the searched token
            transaction.uSDT_Text_Class_TokenList.click();

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

          // execute the details for cross chain swap
          try {
            // waiting for the element
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
              "The estimation of the cross chain swap transaction is not performed."
            );
          }

          // submiting the details for the cross chain swap
          try {
            // validate the transaction completed label
            transactionreview.transactionCompleted.should("be.visible");

            // click on the leave button
            transactionreview.leave.click();

            // verify home screen
            home.homePage.should("be.visible");
          } catch (e) {
            console.error(e);
            assert.fail("The cross chain swap transaction not completed.");
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
      "SMOKE: Perform the cross chain swap flow and receive on wallet with single transaction on " +
        chainLocator[i] +
        " Network",
      () => {
        cy.fixture("transaction").then((data) => {
          // select and enter the details for cross chain swap
          try {
            // click on the bridge label
            home.bridge.click();

            // click on the select chain and token dropdown
            transaction.selectChainAndTokenFrom.click();

            // click on the arbitrum chain option
            cy.xpath(
              "//img[@alt='" +
                chainLocator[i] +
                "']//parent::div[text()='" +
                chainLocator[i] +
                "']",
              { timeout: longTimeout }
            ).click();

            // click on the USDC token option
            cy.xpath(
              "//div[text()='" +
                chainLocator[i] +
                "']//following-sibling::div//img[@alt='USDC']",
              { timeout: longTimeout }
            ).click();

            // click on the select chain and token dropdown
            transaction.selectChainAndTokenTo.click();

            if (!(chainLocator[i] === "BNB Chain")) {
              // click on the BNB chain option
              transaction.bNBChain_ChainList.click();
            } else {
              // click on the polygon option
              transaction.polygon_ChainList.click();
            }

            // enter the token name in search field
            transaction.search_Token.type(data.usdt_tokenname);

            // click on the searched token
            transaction.uSDT_Text_Class_TokenList.click();

            // enter the token value in the you swap field
            transaction.youSwap.type(data.you_swap);

            // click on the smart wallet tab
            transaction.wallet_CrossChain.click(); // RECEIVE ON WALLET

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

          // execute the details for cross chain swap
          try {
            // waiting for the element
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
              "The estimation of the cross chain swap transaction is not performed."
            );
          }

          // submiting the details for the cross chain swap
          try {
            // validate the transaction completed label
            transactionreview.transactionCompleted.should("be.visible");

            // click on the leave button
            transactionreview.leave.click();

            // verify home screen
            home.homePage.should("be.visible");
          } catch (e) {
            console.error(e);
            assert.fail("The cross chain swap transaction not completed.");
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
      "SMOKE: Perform the cross chain swap flow and receive on custom address with single transaction on " +
        chainLocator[i] +
        " Network",
      () => {
        cy.fixture("transaction").then((data) => {
          // select and enter the details for cross chain swap
          try {
            // click on the bridge label
            home.bridge.click();

            // click on the select chain and token dropdown
            transaction.selectChainAndTokenFrom.click();

            // click on the arbitrum chain option
            cy.xpath(
              "//img[@alt='" +
                chainLocator[i] +
                "']//parent::div[text()='" +
                chainLocator[i] +
                "']",
              { timeout: longTimeout }
            ).click();

            // click on the USDC token option
            cy.xpath(
              "//div[text()='" +
                chainLocator[i] +
                "']//following-sibling::div//img[@alt='USDC']",
              { timeout: longTimeout }
            ).click();

            // click on the select chain and token dropdown
            transaction.selectChainAndTokenTo.click();

            if (!(chainLocator[i] === "BNB Chain")) {
              // click on the BNB chain option
              transaction.bNBChain_ChainList.click();
            } else {
              // click on the polygon option
              transaction.polygon_ChainList.click();
            }

            // enter the token name in search field
            transaction.search_Token.type(data.usdt_tokenname);

            // click on the searched token
            transaction.uSDT_Text_Class_TokenList.click();

            // enter the token value in the you swap field
            transaction.youSwap.type(data.you_swap);

            // click on the smart wallet tab
            transaction.custom_CrossChain.click(); // RECEIVE ON CUSTOM ADDRESS

            // enter the custom address in the field
            transaction.customAddress_CrossChain.type(data.receiver_address);

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

          // execute the details for cross chain swap
          try {
            // waiting for the element
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
              "The estimation of the cross chain swap transaction is not performed."
            );
          }

          // submiting the details for the cross chain swap
          try {
            // validate the transaction completed label
            transactionreview.transactionCompleted.should("be.visible");

            // click on the leave button
            transactionreview.leave.click();

            // verify home screen
            home.homePage.should("be.visible");
          } catch (e) {
            console.error(e);
            assert.fail("The cross chain swap transaction not completed.");
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
