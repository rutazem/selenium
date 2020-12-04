/*
 *  Setup selenium webdriver for Chrome
 *  Make sure your local chromedriver binary is at the expected path!
 */
const chrome = require("selenium-webdriver/chrome");

const getChrome = async () => {
  let service = new chrome.ServiceBuilder(
    // this needs to be the path to your local chromedriver binary
    "./webdriver/chromedriver"
  ).build();

  // configure browser options ...
  let options = new chrome.Options();

  // Use options for Headless Chrome for Github Actions
  if (process.env.CI) {
    options = options.headless();
  }

  let driver = chrome.Driver.createSession(options, service);

  return driver;
};

module.exports = getChrome;
