const I = require("../../../customSteps");
const data = require("../data/easyData");

module.exports = {
  easySiteLocators: {
  clickInputForms: "(//a)[5]",
  simpleFormDemo: "(//a[contains(text(), 'Sim')])[1]",
  verifyPage: "//h3",
  enterText: "(//input[@type='text'])[1]",
  sameText: "//span[@id='display']",
  valueAfield: "(//input[@type='text'])[2]",
  valueBfield: "(//input[@type='text'])[3]",
  getTotal: "//span[@id='displayvalue']",
  },

  openEasySite() {
    I.click(this.easySiteLocators.clickInputForms);
    I.click(this.easySiteLocators.simpleFormDemo);
  },

  enterText(text) {
    I.seeElement(this.easySiteLocators.verifyPage);
    I.fillFilled(this.easySiteLocators.enterText, text);
  },

  verifyText() {
    I.seeTextEquals(this.easySiteLocators.enterText, this.easySiteLocators.sameText);
  },

  valueA(a) {
    I.fillFilled(this.easySiteLocators.valueAfield, a);
  },

  valueB(b) {
    I.fillFilled(this.easySiteLocators.valueBfield, b);
  },

  getTotal() {
    I.seeTextEquals(data.total, this.easySiteLocators.getTotal);
  }
};