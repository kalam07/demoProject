exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome'
    },
    // windowSize: "maximize",
    //   waitForNavigation: "networkidle0",
    //   waitForTimeout: 10000,
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: "features/easy.feature/*.feature",
    steps: [
        "steps/easySteps.js",
    ],
  },
  name: "codecept",
};