/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  const reverseSubstring = x => x.split("").reverse().join("");

  if (k > 1) {
    return s
      .match(new RegExp(`.{1,${k * 2}}`, "g"))
      .map(x => reverseSubstring(x.slice(0, k)) + x.slice(k))
      .join("");
  }

  return s;

  // if (k > s.length) return s.split("").reverse().join("");

  // const split = s.split("");

  // for (let i = 0; i < s.length; i += 2 * k) {
  //   const reverse = split.splice(i, k).reverse();
  //   split.splice(i, 0, ...reverse);
  // }

  // return split.join("");
};
