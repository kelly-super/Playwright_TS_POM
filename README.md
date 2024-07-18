Steps to Create a Page Object Model Project by using Playwright and TypeScript.
1. Install Node.js if not intalled before. ( https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)
2. Create a new folder and open the folder in VSCode
3. New a terminal,then run  command "npm init -y" to create a package.json file.
4. Run command "npm init playwright@latest" to install and Setup Playwright
     --Choose TypeScript between JavaScript and TypeScript
     --Name of your tests folder, default is tests
     --Add a GitHub Actions workflow to easily run tests on CI
     --Install Playwright browsers, default is ture.
5.Create a new folder "pages" which will contain all page objects.
6.Create a new file under the root folder and name it to .env which will store the credential( NOTE: DO NOT push it to GitHub, add its filepath to gitignore)
7.Create a new test file and class file under folder "tests""pages" seperately for each page, for example, login.spec.ts and LoginPage.ts
8.In the class file, create element locators and action methods for the coresponding page.
9.In the test file, import the page class, create a instance, and use methods to implement the workflow.
10.Run command "npx playwright test" to check the result.
  


