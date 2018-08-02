/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let sum_of_all = 0;
  let smallest = gas[0] - cost[0];
  let index = 0;

  for (let i = 0; i < gas.length; i++) {
    sum_of_all += gas[i] - cost[i];
  
    if (sum_of_all < smallest) {
      index = i;
      smallest = sum_of_all;
    }
  }

  if (sum_of_all < 0) return -1;
  return (index === gas.length - 1) ? 0 : index + 1;
};