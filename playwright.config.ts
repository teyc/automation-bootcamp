import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry',
    video: 'on-first-retry',
    navigationTimeout: 0,
  },
  // testMatch: 'demoqa.com/sortable.spec.ts',
  // reporter: [
  //   ['list'],
  //   ['dot'],
  //   ['experimental-allure-playwright'],
  // ]
};
export default config;