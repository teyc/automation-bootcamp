import { test, expect, Page } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.gumtree.com.au/
  await page.goto('https://www.gumtree.com.au/');

  // Click text=I Understand
  await page.click('text=I Understand');

  // Click [placeholder="Australia"]
  await page.click('[placeholder="Australia"]');

  // Fill [placeholder="Australia"]
  await page.fill('[placeholder="Australia"]', 'brisbane regio');

  // Click text=Brisbane Region, QLD
  await page.click('text=Brisbane Region, QLD');

  // Click [placeholder="I'm looking for..."]
  await page.click('[placeholder="I\'m looking for..."]');

  // Fill [placeholder="I'm looking for..."]
  await page.fill('[placeholder="I\'m looking for..."]', 'dumbbells');

  // Click a:has-text("dumbbells in Gym & Fitness")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.gumtree.com.au/s-gym-fitness/brisbane/dumbbells/k0c18565l3005721' }*/),
    page.click('a:has-text("dumbbells in Gym & Fitness")')
  ]);

  // Click text=Adjustable Bench, Dumbbells & Weights
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.gumtree.com.au/s-ad/chandler/gym-fitness/adjustable-bench-dumbbells-weights/1280682856' }*/),
    page.click('text=Adjustable Bench, Dumbbells & Weights')
  ]);


});