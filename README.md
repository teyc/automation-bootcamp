# Automation Bootcamp

## Preparation day - Preparation and set up

Just as in strength training, you'd have equipment like weights, sleds. With computer
automation you'd have tools that you will learn to operate. Here is a shopping list of
tools you will need (they are free, you only need to download and install them).

1. Watch demo video

2. Download and install VS Code https://code.visualstudio.com/

3. Download and install nodejs

4. Download and unzip this folder. You should note where you have unzipped this.

5. Launch VS Code

6. Select File > Open Workspace.... > (choose `automation-bootcamp.workspace` )

7. Type `CTRL + ~`

    a. `npx playwright install`

    b. `npm i`

## Day 1 - Running demo

1. `npm run test`

2. Show detailed logs

```
$env:DEBUG="pw:api"
npm run test
```

3. Trace

```
npx playwright show-trace test-results\trace.zip

```

## Day 2 - Advanced

1. testMatch

```
let links = await page.$$('div.a')
let href = await links[0].getAttribute('href')
```

https://demoqa.com/