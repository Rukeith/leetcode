/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  const map = new Map();
  let min = Number.MAX_SAFE_INTEGER;
  let commonInterests = [];

  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i);
  }

  for (let i = 0; i < list2.length; i++) {
    if (map.has(list2[i])) {
      const index = i + map.get(list2[i]);
      if (min > index) {
        min = index;
        commonInterests = [list2[i]];
      } else if (min === index) {
        commonInterests.push(list2[i]);
      }
    }
  }

  return commonInterests;
};
