/// <reference types= "Cypress" />

const browserCombo = [
  { width: 1200, height: 700, name: "chrome" },
  { width: 1200, height: 700, name: "firefox" },
  { width: 1200, height: 700, name: "edgechromium" },
  { width: 768, height: 700, name: "chrome" },
  { width: 768, height: 700, name: "firefox" },
  { width: 768, height: 700, name: "edgechromium" },
  { deviceName: "iPhone X", screenOrientation: "portrait" },
];

const appName = "AppliFashion";
const batchName = "UFG Hackathon";

function eyesCheck(params) {
  cy.eyesOpen({
    appName: appName,
    batchName: batchName,
    testName: params.testName,
    browser: browserCombo,
  });

  if (params.target != "region") {
    cy.eyesCheckWindow({
      tag: params.tag,
    });
  } else {
    cy.eyesCheckWindow({
      tag: params.tag,
      target: "region",
      selector: params.selector,
    });
  }

  cy.eyesClose();
}

describe("AppliFashion", () => {
  beforeEach(() => {
    cy.visit("/gridHackathonV2.html");
  });
  it(`Task 1`, function () {
    eyesCheck({ testName: this.test.title, tag: "Cross-Device Elements Test" });
  });

  it(`Task 2`, function () {
    cy.get("#SPAN__checkmark__107").click();
    cy.get("#filterBtn").click();
    cy.get("#product_grid").should("be.visible");
    eyesCheck({
      testName: this.test.title,
      tag: "Filter Results",
      target: "region",
      selector: "#product_grid",
    });
  });

  it(`Task 3`, function () {
    cy.get("#SPAN__checkmark__107").click();
    cy.get("#filterBtn").click();
    cy.get("#product_grid").children().eq(0).click();
    eyesCheck({ testName: this.test.title, tag: "Product Details test" });
  });
});
