/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
  let pigs = 0;
  while (Math.pow(minutesToTest / minutesToDie + 1, pigs) < buckets) pigs++;
  return pigs;
};
