# SauceDemo Playwright Test

Basic Playwright test for SauceDemo: login, verify the products page, add one item to the cart, and check that the cart badge shows `1`.

## How To Run

1. Install Node.js if it is not already installed.
2. Unzip the project and open a terminal in the project folder.
3. Install dependencies:

```bash
npm install
```

4. Install Playwright browsers:

```bash
npx playwright install
```

5. Run the test:

```bash
npm test
```

## Optional

Run with the browser visible:

```bash
npm run test:headed
```

Open the HTML report after a run:

```bash
npm run test:report
```
