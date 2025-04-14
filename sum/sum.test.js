const sum = require("./sum");

it("Adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toEqual(3);
});
