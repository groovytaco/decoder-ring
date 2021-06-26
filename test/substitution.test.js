const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  it("It returns false if the given alphabet isn't exactly 26 characters long.", () => {
    const message = "general"
    const alphabet = "pqoejcbrgl";
    const actual = substitution(message, alphabet);
    const expected = false;
    expect(actual).to.eql(expected);
  });
  it("It correctly translates the given phrase, based on the alphabet given to the function.", () => {
    const message = "general";
    const alphabet = "plerotnghdsvqazwbykjf!@#$%"
    const actual = substitution(message, alphabet);
    const expected = "noaoypv";
    expect(actual).to.eql(expected);
  });
  it("It returns false if there are any duplicate characters in the given alphabet.", () => {
    const message = "general";
    const alphabet = "plerotnghdsvqaewbykjf!@#$%"
    const actual = substitution(message, alphabet);
    const expected = false;
    expect(actual).to.eql(expected);
  });
  it("It maintains spaces in the message, before and after encoding or decoding.", () => {
    const message1 = "general commander";
    const message2 = "noaoypv ezqqparoy";
    const alphabet = "plerotnghdsvqazwbykjf!@#$%"
    const actual1 = substitution(message1, alphabet);
    const actual2 = substitution(message2, alphabet, false);
    const expected1 = "noaoypv ezqqparoy";
    const expected2 = "general commander";
    expect(actual1).to.eql(expected1);
    expect(actual2).to.eql(expected2);
  });
  it("It ignores capital letters. (For example, the results of A Message and a message should be the same.)", () => {
    const message1 = "general commander";
    const message2 = "General Commander";
    const alphabet = "plerotnghdsvqazwbykjf!@#$%"
    const actual1 = substitution(message1, alphabet);
    const actual2 = substitution(message2, alphabet);
    const expected = "noaoypv ezqqparoy";
    expect(actual1).to.eql(expected);
    expect(actual2).to.eql(expected);
  });
});