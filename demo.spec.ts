import { test, expect, Page } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.gumtree.com.au/
  await page.goto('https://www.gumtree.com.au/', { waitUntil: "domcontentloaded" });

  // Click text=I Understand
  await page.click('text=I Understand');

  // Click [placeholder="Australia"]
  await page.click('[placeholder="Australia"]');

  // Fill [placeholder="Australia"]
  await page.focus('[placeholder="Australia"]');
  await page.keyboard.type('brisbane region');

  // Click text=Brisbane Region, QLD
  await page.click('text=Brisbane Region, QLD');

  // Click [placeholder="I'm looking for..."]
  await page.click('[placeholder="I\'m looking for..."]');

  // Fill [placeholder="I'm looking for..."]
  await page.focus('[placeholder="I\'m looking for..."]');
  await page.keyboard.type('dumbbells');

  // Click a:has-text("dumbbells in Gym & Fitness")
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'domcontentloaded'}),
    page.click('a:has-text("dumbbells in Gym & Fitness")')
  ]);

  // How many ads are there
  let count = (await page.$$('div.user-ad-collection-new-design a')).length

  // Take the number of ads or 5 which ever lower
  let numberOfItems = Math.min(count, 5);
  console.log(`Count = ${count}. Number of items: ${numberOfItems}`)

  for (let index = 0; index < numberOfItems; index++) {
    let link = await page.$(`div.user-ad-collection-new-design a >> nth=${index}`)
    let href = await link.getAttribute('href');

    if (!href || !href.startsWith('/')) {
      console.log(`Skipping ${href}`)
      continue;
    }

    await Promise.all([
      page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
      page.click(`div.user-ad-collection-new-design a >> nth=${index}`)
    ])

    await page.goBack()
  }
});