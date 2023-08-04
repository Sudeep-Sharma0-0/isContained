function isContained(range1, range2, containmentType = 'fully') {
  if (containmentType === 'fully') {
    return range1[0] >= range2[0] && range1[1] <= range2[1];
  } else if (containmentType === 'partially') {
    return (
      (range1[0] >= range2[0] && range1[0] <= range2[1]) ||
      (range1[1] >= range2[0] && range1[1] <= range2[1]) ||
      (range2[0] >= range1[0] && range2[0] <= range1[1]) ||
      (range2[1] >= range1[0] && range2[1] <= range1[1])
    );
  } else {
    throw new Error('Invalid containment type. Use "fully" or "partially".');
  }
}

module.exports = {
  isContained,
};
