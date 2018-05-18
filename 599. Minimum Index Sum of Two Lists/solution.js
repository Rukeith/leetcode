/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  let leastSumIndex = Infinity;
  const commonRes = [];
  const longerList = list1.length > list2.length ? list1 : list2;
  const shorterList = list1.length <= list2.length ? list1 : list2;

  for (let i = 0; i < longerList.length; i++) {
    const currentEl = longerList[i];
    const secondIndex = shorterList.indexOf(currentEl);
    if (secondIndex !== -1) {
      const sumIndex = secondIndex + i;
      if (sumIndex <= leastSumIndex) {
        commonRes.push(currentEl);
        leastSumIndex = sumIndex;
      }
    }
  }

  return commonRes;
};