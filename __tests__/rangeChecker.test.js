const { isContained } = require('../index.js');

// Test for fully contained range
test('Fully contained range should return true', () => {
  const range1 = [2, 5];
  const range2 = [3, 4];
  expect(isContained(range1, range2)).toBe(true);
});

// Test for partially contained range
test('Partially contained range should return true', () => {
  const range1 = [2, 5];
  const range2 = [4, 7];
  expect(isContained(range1, range2, 'part')).toBe(true);
});

// Test for invalid containment type
test('Invalid containment type should throw an error', () => {
  const range1 = [2, 5];
  const range2 = [3, 4];
  expect(() => isContained(range1, range2, 'invalid')).toThrow();
});

