const reversestring = require("./reversestring");

describe("Reverse String", () => {
  it("should be a function", () => {
    expect(typeof reversestring).toEqual("function");
  });

  it("should return a string", () => {
    expect(typeof reversestring("hello")).toEqual("string");
  });

  it("it should return the reverse string", () => {
    expect(reversestring("hello")).toEqual("olleh");
    expect(reversestring("car")).toEqual("rac");
    expect(reversestring("hello world")).toEqual("dlrow olleh");
  });
});
