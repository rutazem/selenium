const setupBrowser = require("./setupBrowser.js");

// a test suite:
describe("testing google.com", () => {
  let driver;

  // this is executed once in the beginning
  beforeAll(async () => {
    driver = await setupBrowser();
  }, 10000);

  // this is exeucted once after all tests are done
  afterAll(async () => {
    await driver.quit();
  }, 100000);

  // one test case, add more below!
  test("it has the expected title", async () => {
    await driver.get("https://www.google.com");
    const title = await driver.getTitle();
    expect(title).toEqual("Google");
  });
});
