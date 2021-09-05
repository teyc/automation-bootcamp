import { test, expect } from '@playwright/test'

test.describe('sortable', () => {
    test('list',  async ({page}) => {

        await page.goto('https://demoqa.com/sortable')

        await page.dragAndDrop('text=One', 'text=Five')

        let result = await page.$$eval('#demo-tabpane-list .list-group-item', node => node.flatMap(n => n.textContent))

        expect(result.join(',')).toBe('Two,Three,Four,Five,One,Six')

    })

    test('grid', async ({page}) => {

        await page.goto('https://demoqa.com/sortable')

        await page.click('#demo-tab-grid')

        await page.dragAndDrop('#demo-tabpane-grid :text("One")', '#demo-tabpane-grid :text("Five")')

        let result = await page.$$eval('#demo-tabpane-grid .list-group-item', node => node.flatMap(n => n.textContent))

        expect(result.join(',')).toBe('Two,Three,Four,Five,One,Six,Seven,Eight,Nine')

    })
})