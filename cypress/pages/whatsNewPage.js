export class whatsNewPage {
  webLocators = {
    shopNewYogaButton: ".more.button",
    whatsNewTopTitleText: "span.base",
    addToCartText: ".message-success.success.message",
    clickWhatsNewLink:
      'a[href="https://magento.softwaretestingboard.com/what-is-new.html"]',
    newLumaYogaCollectionLink:
      'a[href="https://magento.softwaretestingboard.com/collections/yoga-new.html"]',
    selectCartNewLumaYogaCollection: "li[class ='item product product-item']",
    selectSizeOfDress: "#option-label-size-143-item-171",
    selectColourOfDress: "#option-label-color-93-item-57",
    typeQty: 'input[name="qty"]',
    addToCartButton: 'button[class="action primary tocart"]',
    cartCheckOut:
      'a[href="https://magento.softwaretestingboard.com/checkout/cart/"]',

    proceedToCheckout: '[data-role="proceed-to-checkout"]',

    firstName: 'input[name="firstname"]',
    lastName: 'input[name="lastname"]',
    company: 'input[name="company"]',
    streetAddress: 'input[name="street[0]"]',
    city: 'input[name="city"]',
    postalCode: 'input[name="postcode"]',
    telephone: 'input[name="telephone"]',
  };

  clickWhatsNew() {
    cy.get(this.webLocators.clickWhatsNewLink).click();
  }

  // checking whats new page -> New Luma Yoga Collection links

  // newLumaYogaCollectionLink() {
  //   cy.get(this.webLocators.newLumaYogaCollectionLink).click().should("contain", "New Luma Yoga Collection");
  // }

  shopNewYogaButton() {
    cy.get(this.webLocators.shopNewYogaButton)
      .click()
      .should("contain", "Shop New Yoga");
  }

  message() {
    return cy.get(this.webLocators.whatsNewTopTitleText);

    //   .invoke("text")
    //   .then((text1) => {
    //     expect(text1).to.eq("New Luma Yoga Collection");
    //   });
  }

  // Select the carts
  selectCartNewLumaYogaCollection() {
    cy.get(this.webLocators.selectCartNewLumaYogaCollection).eq(0).click();
    cy.get("span.base").should("contain", "Echo Fit Compression Short");
  }

  selectSizeOfDress() {
    cy.get(this.webLocators.selectSizeOfDress).click();
  }
  selectColourOfDress() {
    cy.get(this.webLocators.selectColourOfDress).click();
  }
  typeQty() {
    cy.get(this.webLocators.typeQty).clear();
    cy.get(this.webLocators.typeQty).type("4");
  }
  addToCartButton() {
    cy.get(this.webLocators.addToCartButton).click();
  }

  addToCartmessage() {
    return cy.get(this.webLocators.addToCartText).click();
  }

  cartCheckOut() {
    cy.get(this.webLocators.cartCheckOut).first().click();
    cy.get('[class="action viewcart"]').click();
  }

  proceedToCheckout() {
    cy.get(this.webLocators.proceedToCheckout).click();
  }
  verifyShippingText() {
    cy.get("div")
      .find('[class="step-title"]')
      .should("contain", "Shipping Address");
    cy.get("div")
      .find('[class="step-title"]')
      .should("contain", "Shipping Methods");
  }
  shippingAddressFName(FName) {
    cy.get(this.webLocators.firstName).clear().type(FName);
  }
  shippingAddressLName(LName) {
    cy.get(this.webLocators.lastName).clear().type(LName);
  }
  shippingAddressCompany(companyName) {
    cy.get(this.webLocators.company).type(companyName);
  }
  shippingAddressStreet(streetAddress) {
    cy.get(this.webLocators.streetAddress).type(streetAddress);
  }
  shippingAddressCity(city) {
    cy.get(this.webLocators.city).type(city);
  }

  stateByDropDown() {
    //cy.get("select").find("#G363LA5").select("18");
  }

  shippingAddressPostalCode(postalCode) {
    cy.get(this.webLocators.postalCode).type(postalCode);
  }
  countryByDropDown() {
    cy.get('[name="country_id"]').select("Bangladesh");
  }

  shippingAddressTelephone(telephone) {
    cy.get(this.webLocators.telephone).type(telephone);
  }

  shippingMethods() {
    cy.get('input[type="radio"]').check("flatrate_flatrate");
  }

  // checkGridItems() {
  //   cy.get("strong.modes-mode.active.mode-grid").first().click();
  //   cy.get('[title="Grid"]').should("have.class");
  // }

  // Checking dropdown in whats new linked page

  checkSortByDropDown() {
    cy.get("#sorter").should("be.visible");
    cy.get(".sorter-options option:selected")
      .first()
      .should("contain", "Position");
    cy.get(".sorter-options").first().select("name");
    cy.get(".sorter-options").should("contain", "Product Name");
    cy.get(".sorter-options").first().select("price");
    cy.get(".sorter-options").should("contain", "Price");
  }
}
