const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
  it("When encoding, it translates the letters i and j to 42.", () => {
    const message = "Jillian";
    const actual = polybius(message);
    const expected = "42421313421133";
    expect(actual).to.eql(expected);
  });
  it("When decoding, it translates 42 to (i/j).", () => {
    const message = "42421313421133";
    const actual = polybius(message, false);
    const expected = "(i/j)(i/j)ll(i/j)an";
    expect(actual).to.eql(expected);
  });
  it("It ignores capital letters. (For example, the results of A Message and a message should be the same.)", () => {
    const message1 = "Jillian";
    const message2 = "jillian";
    const actual1 = polybius(message1);
    const actual2 = polybius(message2);
    const expected = "42421313421133";
    expect(actual1).to.eql(expected);
    expect(actual2).to.eql(expected);
  });
  it("It maintains spaces in the message, before and after encoding or decoding.", () => {
    const message1 = "Jill Ian";
    const message2 = "42421313 421133";
    const actual1 = polybius(message1);
    const actual2 = polybius(message2, false);
    const expected1 = "42421313 421133";
    const expected2 = "(i/j)(i/j)ll (i/j)an";
    expect(actual1).to.eql(expected1);
    expect(actual2).to.eql(expected2);
  });
});