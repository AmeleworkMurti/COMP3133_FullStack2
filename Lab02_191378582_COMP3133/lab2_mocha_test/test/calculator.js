const { expect } = require("chai");

const { add, sub, mul, div } = require("../app/calculator");

//  pass/fail messages per test
function runWithMessage(testName, fn) {
  try {
    fn();
    console.log(`PASS: ${testName}`);
  } catch (err) {
    console.log(` FAIL: ${testName} -> ${err.message}`);
    // Re-throw so Mocha still marks the test as failed
    throw err;
  }
}

describe("Calculator Tests (Mocha + Chai)", () => {
  // add
  it("add(5,2) expected 7 PASS", () => {
    runWithMessage("add(5,2) expected 7", () => {
      expect(add(5, 2)).to.equal(7);
    });
  });

  it("add(5,2) expected 8 FAIL", () => {
    runWithMessage("add(5,2) expected 8", () => {
      expect(add(5, 2)).to.equal(8);
    });
  });

  // sub
  it("sub(5,2) expected 3 PASS", () => {
    runWithMessage("sub(5,2) expected 3", () => {
      expect(sub(5, 2)).to.equal(3);
    });
  });

  it("sub(5,2) expected 5 FAIL", () => {
    runWithMessage("sub(5,2) expected 5", () => {
      expect(sub(5, 2)).to.equal(5);
    });
  });

  // mul
  it("mul(5,2) expected 10 PASS", () => {
    runWithMessage("mul(5,2) expected 10", () => {
      expect(mul(5, 2)).to.equal(10);
    });
  });

  it("mul(5,2) expected 12 FAIL", () => {
    runWithMessage("mul(5,2) expected 12", () => {
      expect(mul(5, 2)).to.equal(12);
    });
  });

  // div
  it("div(10,2) expected 5 PASS", () => {
    runWithMessage("div(10,2) expected 5", () => {
      expect(div(10, 2)).to.equal(5);
    });
  });

  it("div(10,2) expected 2 FAIL", () => {
    runWithMessage("div(10,2) expected 2", () => {
      expect(div(10, 2)).to.equal(2);
    });
  });
});
