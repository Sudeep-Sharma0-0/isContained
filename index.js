function isContained(range1, range2, containmentType = 'full') {
  if (containmentType === 'full') {
    return (
      range1[0] >= range2[0] && range1[1] <= range2[1] ||
      range1[0] <= range2[0] && range1[1] >= range2[1]
    );
  } else if (containmentType === 'part') {
    return (
      (range1[0] >= range2[0] && range1[0] <= range2[1]) ||
      (range1[1] >= range2[0] && range1[1] <= range2[1]) ||
      (range2[0] >= range1[0] && range2[0] <= range1[1]) ||
      (range2[1] >= range1[0] && range2[1] <= range1[1])
    );
  } else {
    throw new Error('Invalid containment type. Use "full" or "part".');
  }
}

module.exports = {
  isContained,
};
