export class whatsNewPage {
  webLocators = {
    shopNewYogaButton: ".more.button",
    whatsNewTopTitleText: "span.base", // className = [class="base"]
  };

  clickWhatsNew() {
    cy.get(
      'a[href="https://magento.softwaretestingboard.com/what-is-new.html"]'
    ).click();
  }

  shopNewYogaButton() {
    cy.get(this.webLocators.shopNewYogaButton).click();
  }

  message() {
    return cy.get(this.webLocators.whatsNewTopTitleText);

    //   .invoke("text")
    //   .then((text1) => {
    //     expect(text1).to.eq("New Luma Yoga Collection");
    //   });
  }
}
