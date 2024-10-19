import { whatsNewPage } from "../../pages/whatsNewPage";
import whatsNewData from "../../fixtures/whatsNewData.json";
import registerAccountData from "../../fixtures/registerAccountData.json";
const whatsNewPageObj = new whatsNewPage();

describe("Whats New Test Suite-2", () => {
  before(() => {
    cy.login(
      registerAccountData.login.email,
      registerAccountData.login.password
    );
  });

  it("#TC-2 Whats new ", () => {
    whatsNewPageObj.clickWhatsNew();
    //whatsNewPageObj.newLumaYogaCollectionLink();
    whatsNewPageObj.shopNewYogaButton();
    whatsNewPageObj
      .message()
      .should("contain.text", whatsNewData.message.titleMessage);
    whatsNewPageObj.selectCartNewLumaYogaCollection();
    whatsNewPageObj.selectSizeOfDress();
    whatsNewPageObj.selectColourOfDress();
    whatsNewPageObj.typeQty();
    whatsNewPageObj.addToCartButton();
    whatsNewPageObj
      .addToCartmessage()
      .should("contain.text", whatsNewData.message.addToCartMessage);

    //whatsNewPageObj.checkSortByDropDown();
  });
});
