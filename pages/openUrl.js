const I = require("../../customSteps");

module.exports = {
  // Setting URL
  fields: {
    AppUrl: "https://www.seleniumeasy.com/test/",
  },
  // Hit URL Method
  openApp() {
    I.amOnPage(this.fields.AppUrl);
  },
};
