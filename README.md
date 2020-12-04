# Template: Selenium Testing with Javascript and Jest

## Instructions

This is a template repository: you can use it to create your own repository, copying the files and folder structure from this template.

To create your own repository, find the button "Use this template" above the file list and click it. You will be asked to give your repo a name (you can also use the name of the template, as the new repo will be created in your own GitHub account). You can also customise your repositories with the same options as if you were creating a new repository from scratch.

For detailed instructions on creating a template (including screenshots) please check out the [Github docs](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template).

After you have created your own repository, you are ready to get started with the next steps below!

Selenium works with a range of different browsers. We have set-up this project to support Chrome and Firefox.

### Set up Webdriver for Selenium in Chrome

To allow your application to control the browser you need to have browser-specific WebDriver binaries installed.
Go to the [Downloads Page for Chromedriver](https://chromedriver.chromium.org/downloads) and select the appropriate version for your Chrome Installation and Operating System.

Download the correct version of Chromedriver and move it to the `webdriver` folder of this project.
This is where the application code will look for the driver.


#### Set up Webdriver for Selenium in Firefox

**This won't work on Windows unfortunately**

Go to the [Downloads Page for Geckodriver](https://github.com/mozilla/geckodriver/releases) and select the latest versin for your Operating System.

Download the right version of Geckodriver and move it to the `webdriver` folder of this project.

The npm scripts for Firefox will add this folder to the $PATH variable to make it available for the application.

## Set up all other libraries

Let npm install all required dependencies in this repo.
These are the bindings for selenium, [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) and the test framework [jest](https://jestjs.io).
```
npm install
```

### Test that your webdriver is setup correctly

The repo contains a small node.js script that runs selenium to make it easy for you to check that everything works.

If you are using the default Chrome, run the following command:

```
npm run run:chrome
```

If you are using Firefox, run the following command:
```
npm run run:firefox
```

If everything is setup correctly, you should see selenium in action!
It will start the browser, go to a URL and print to the console.

### Run Tests

After you are sure Selenium is setup correctly, you can execute the jest tests.
Run the following command in your console:
```
npm test
```

If you are using firefox run this command instead:
```
npm run test:firefox
```

This will execute all test files in the repo. If you haven't added any, this will be one test from `tests/example.test.js`.
You should see the browser automation running again and then some output of the test success or failure in the console.


## Github Actions

THis repo also contains a [Workflow for Github Actions](https://docs.github.com/en/free-pro-team@latest/actions).
Every time a new commit to the master branch is pushed, the action will run the test command.

To make this work, the browser is running in ["headless"](https://en.wikipedia.org/wiki/Headless_browser) mode.

Go to the Actions tab on Github to see the result of the run.

## Add your own tests!

Create new files in the `/tests` folder for your own test cases.
You can use the existing test as the basis for future tests.

To learn more about the commands to control the Browser with selenium, check the [Javascript docs for Selenium](https://www.selenium.dev/selenium/docs/api/javascript/index.html).
There is also a useful tutorial on [Browser Manipulation](https://www.selenium.dev/documentation/en/webdriver/browser_manipulation/) in different programming languages.

A good starting point are the available commands on the [WebDriver class](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebDriver.html) - this is what the `setupBrowser` utility function returns.


If you need different assertions or lifecycles, check the [API docs for Jest](https://jestjs.io/docs/en/api).
