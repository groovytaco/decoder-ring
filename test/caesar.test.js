const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it("It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.", () => {
    const message = "winter";
    const actual1 = caesar(message, 0);
    const actual2 = caesar(message, -26);
    const actual3 = caesar(message, 26);
    const actual4 = caesar(message);
    const expected = false;
    expect(actual1).to.eql(expected);
    expect(actual2).to.eql(expected);
    expect(actual3).to.eql(expected);
    expect(actual4).to.eql(expected);
  });
  it("It ignores capital letters. (For example, the results of A Message and a message should be the same.)", () => {
    const message1 = "winter";
    const message2 = "WiNteR";
    const actual1 = caesar(message1, 3);
    const actual2 = caesar(message2, 3);
    const expected = "zlqwhu";
    expect(actual1).to.eql(expected);
    expect(actual2).to.eql(expected);
  });
  it("When encoding, it handles shifts that go past the end of the alphabet. (For example, shifting z to the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.)", () => {
    const message = "winter";
    const actual = caesar(message, 8);
    const expected = "eqvbmz";
    expect(actual).to.eql(expected);
  });
  it("It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.", () => {
    const message1 = "Winter is great!";
    const message2 = "eqvbmz qa ozmib!";
    const actual1 = caesar(message1, 8);
    const actual2 = caesar(message2, 8, false);
    const expected1 = "eqvbmz qa ozmib!";
    const expected2 = "winter is great!";
    expect(actual1).to.eql(expected1);
    expect(actual2).to.eql(expected2);
  });
});