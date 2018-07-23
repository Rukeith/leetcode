/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  let res = [[]];
  const map = {};
  nums.forEach((num) => {
    map[num] = map[num] ? map[num] : 0;
    map[num]++;
  });

  for (let num in map) {
    const resDup = [...res];
    const append = [];

    for (let i = 1; i <= map[num]; i++) {
      let resDupi = [...resDup];
      append.push(parseInt(num));

      for (let j = 0; j < resDupi.length; j++) {
        resDupi[j] = resDupi[j].concat(append);
      }
      res = res.concat(resDupi);
    }
  }

  return res;
};