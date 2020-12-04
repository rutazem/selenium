// helper to setup the browser we want to use
// Chrome is the default,
// supports Firefox via env variable BROWSER
const getChrome = require("../chrome.js");
const getFirefox = require("../firefox.js");

const setupBrowser = async () => {
  const isFirefox = process.env.BROWSER === "firefox";

  if (isFirefox) {
    return await getFirefox();
  }

  return await getChrome();
};

module.exports = setupBrowser;
