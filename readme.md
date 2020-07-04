# Applitools Testing Hackathon

This is a project about visual testing using `Applitools Ultrafast Grid`.
<br>The test script is written in `Cypress` automation library.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of `Node.js`

## How to run the test

To run the test, run these command in the terminal:

Step 1 - Installing the dependencies:

```
npm i
```

Step 2 - Configuring the Applitools Eyes SDK for Cypress

```
npx eyes-setup
```

Step 3 - Open Cypress Test Runner

```
npx cypress open
```

- Select [ModernTestsV1.spec.js](https://github.com/ChiuWeiBin/Applitools-Testing-Hackathon/blob/master/cypress/integration/ModernTestsV1.spec.js) in the test runner for generating baseline images in `Applitools`

- Select [ModernTestsV2.spec.js](https://github.com/ChiuWeiBin/Applitools-Testing-Hackathon/blob/master/cypress/integration/ModernTestsV2.spec.js) in the test runner for generating checkpoint in `Applitools`

## Test Result

[Eyes Batch Results URL](https://eyes.applitools.com/app/test-results/00000251808435681711?accountId=3iKH871PoUG0uwPaUaWWNw~~&display=gallery&top=00000251808435681711%283%29)

## Credits

This test uses the following packages:

- [Cypress](https://www.npmjs.com/package/cypress)
- [Eyes-Cypress](https://www.npmjs.com/package/@applitools/eyes-cypress)

## Related

[Applitools Cross Browser Testing Hackathon Homepage](https://applitools.com/cross-browser-testing-hackathon-v20-1-instructions/?utm_campaign=Ultrafast-Cross-Browser-Testing-Hackathon)

## Contact

If you want to contact me you can reach me at <wbchiu@financial-link.com> or <chiuweibin.dev@gmail.com>
