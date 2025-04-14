const assert = require('assert');
const chunk = require('./arraychunk');

describe('Array Chunking', () => {
  it("should create chunk of specific size", () => {
    assert.deepEqual(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
    assert.deepEqual(chunk([1, 2, 3, 4, 5], 3), [[1, 2, 3], [4, 5]]);
  })
})
