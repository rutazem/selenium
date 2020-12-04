const getFirefox = require("./firefox.js");

(async function myFunction() {
  let driver = await getFirefox();
  try {
    await driver.get("https://www.google.com");
    const title = await driver.getTitle();
    console.log("The current page's title is: ", title);

    driver.quit();
  } catch (anyError) {
    console.error(anyError);
    // make sure we quit properly if anything goes wrong
    driver.quit();
  }
})();
