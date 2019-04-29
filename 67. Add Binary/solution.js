/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let i = 0;
  let alen = a.length;
  let blen = b.length;
  let carryOn = 0;
  let res = "";
  while (alen - 1 - i >= 0 || blen - 1 - i >= 0 || carryOn > 0) {
    let abit = alen - 1 - i >= 0 ? parseInt(a[alen - 1 - i]) : 0;
    let bbit = blen - 1 - i >= 0 ? parseInt(b[blen - 1 - i]) : 0;
    let curr = carryOn ^ abit ^ bbit;
    carryOn = abit + bbit + carryOn > 1 ? 1 : 0;
    res = curr + res;
    ++i;
  }
  return res;
};
