// to use firefox browser instead of Chrome
const { Builder } = require("selenium-webdriver");

const getFirefox = async () => {
  // create the web driver instance for firefox
  let driver = await new Builder().forBrowser("firefox").build();

  return driver;
};

module.exports = getFirefox;
