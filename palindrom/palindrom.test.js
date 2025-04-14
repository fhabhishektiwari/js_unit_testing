const palindrom = require("./palindrom");
describe("palindrom", () => {
  it("should be a function", () => {
    expect(typeof palindrom).toEqual("function");
  });
  it("should return a boolean", () => {
    expect(typeof palindrom("hello")).toEqual("boolean");
  });

  it("should return true if is a palindrom", () => {
    expect(palindrom("wow")).toBeTruthy();
    expect(palindrom("rotator")).toBeTruthy();
    expect(palindrom("kayak")).toBeTruthy();
  });

  it("should return false if is not a palindrom", () => {
    expect(palindrom("nikku")).toBeFalsy();
    expect(palindrom("racer")).toBeFalsy();
    expect(palindrom("miu")).toBeFalsy();
  });

  it("should return false if is includes spaces", () => {
    expect(palindrom(" bye")).toBeFalsy();
    expect(palindrom(" hello")).toBeFalsy();
    expect(palindrom(" world")).toBeFalsy();
  });
});
