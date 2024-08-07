import { defineConfig, devices } from "@playwright/test";
import path from "path";
require("dotenv").config();

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */

export const STORAGE_STATE = path.join(__dirname, "playwright/.auth/user.json");

export default defineConfig({
  testDir: "./tests",

  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    baseURL: "https://www.woolworths.co.nz/",
    trace: "on-first-retry",
    testIdAttribute: "data-cy",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "setup",
      testMatch: "**/*.setup.ts",
      use: {
        ...devices["Desktop Chrome"],
        storageState: STORAGE_STATE,
        locale: "en-US",
        launchOptions: {
          executablePath:
            "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
          ignoreDefaultArgs: [
            "--unsafely-disable-devtools-self-xss-warnings",
            "--no-sandbox",
            "--no-startup-window",
          ],
        },
      },
    },
    {
      name: "e2e",
      testMatch: "**/*.spec.ts",
      //   dependencies: ["setup"],
      use: {
        ...devices["Desktop Chrome"],
        storageState: STORAGE_STATE,
        locale: "en-US",
        launchOptions: {
          ignoreDefaultArgs: [
            "--unsafely-disable-devtools-self-xss-warnings",
            "--no-sandbox",
            "--no-startup-window",
            // "--remote-debugging-pipe",
            // "--user-data-dir",
          ],
        },
      },
    },
    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },

    /*  {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        locale: "en-US",
        launchOptions: {
          ignoreDefaultArgs: [
            "--unsafely-disable-devtools-self-xss-warnings",
            "--no-sandbox",
            "--no-startup-window",
            "--remote-debugging-pipe",
            "--user-data-dir",
          ],
        },
      },
    },
   
     {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
*/
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
