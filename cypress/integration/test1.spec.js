/// <reference types= "Cypress" />

describe("Task 1", () => {
  beforeEach(() => {
    //cy.viewport(800, 600);
    cy.visit("/gridHackathonV2.html");
    cy.eyesOpen({
      appName: "Applitools UltraFastGrid | Cross Browser Testing Demo App",
      batchName: "UFG Hackathon",
      testName: "Ultrafast grid demo",
      browser: { width: 800, height: 600 },
    });
  });

  afterEach(() => {
    cy.eyesClose();
  });

  it(`Cross-Device Elements Test`, function () {
    // Navigate to the url we want to test
    // ⭐️ Note to see visual bugs, run the test using the above URL for the 1st run.
    // but then change the above URL to https://demo.applitools.com/index_v2.html
    // (for the 2nd run)

    // Call Open on eyes to initialize a test session

    // check the login page with fluent api, see more info here
    // https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html
    cy.eyesCheckWindow({
      tag: "first page",
      // target: "region",
      fully: true,
    });

    // cy.get("#product_grid").children().its("length").as("productItemCount");
    // cy.get("@productItemCount").then(($length) => {
    //   const productItemCount = $length;
    //   const productItemCountForTagname = $length + 1;
    //   for (var i = 0; i < productItemCount; i++) {
    //     cy.get("#product_grid").children().eq(i).scrollIntoView();
    //     const tagname = "Item " + i;
    //     const cssSelector = "#product_grid>div:nth-child(" + i + ")";
    //     cy.eyesCheckWindow({
    //       tag: tagname,
    //       // target: "region",
    //       // selector: {
    //       //   type: "css",
    //       //   selector: cssSelector, // or '//button'
    //       // },
    //     });
    //   }
    // });

    // cy.get("footer").scrollIntoView();
    // cy.eyesCheckWindow({
    //   tag: "footer",
    //   //target: "region",
    //   // /fully: true,
    // });
  });
});
