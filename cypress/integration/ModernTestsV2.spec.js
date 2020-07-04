/// <reference types= "Cypress" />
// const url = "https://htmlstream.com/front/html/landings/onepage-corporate.html";
// const url = "https://applitools.com/request-demo/";
// const url = "http://127.0.0.1:8080/gridHackathonV1.html";
// const url = "http://127.0.0.1:8080/gridHackathonV1.html";
// const url = "http://127.0.0.1:8080/gridHackathonV2.html";
// const url = "https://demo.applitools.com/gridHackathonV2.html";
// const url = "https://getbootstrap.com/docs/4.4/examples/carousel/";

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
const testName = "Task 1";
const stepName = "Cross-Device Elements Test";

function eyesCheck(params) {
  cy.eyesOpen({
    appName: appName,
    batchName: batchName,
    testName: params.testName,
    browser: browserCombo,
  });

  cy.eyesCheckWindow({
    tag: stepName,
  });

  cy.eyesClose();
}

describe("AppliFashion", () => {
  it(`Task 1`, function () {
    cy.visit("/gridHackathonV1.html");
    //cy.visit("/gridHackathonV2.html");
    eyesCheck({ testName: this.test.title });
  });
});
