const  easy  = require("../pages/easyPage");
const openApp = require("../pages/openUrl");
const { data } =  require("../data/easyData");

Given('open easy demo site', () => {
  openApp.openApp();
});

When('go to dummy testing page', () => {
  easy.openEasySite();
});

When('enter the text on input field', () => {
  easy.enterText(data.text);
});

When('enter a and b values', () => {
  enter.valueA(data.valueA);
  enter.valueB(data.valueB);
});

Then('should read the value from text', () => {
  easy.verifyText();
});

Then('verify the value from get total', () => {
  easy.getTotal();
});
