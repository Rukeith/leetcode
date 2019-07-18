/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  const arr1 = num1.split("");
  const arr2 = num2.split("");
  for (let i = 0; i < arr1.length; i++) arr1[i] = Number(arr1[i]);
  for (let i = 0; i < arr2.length; i++) arr2[i] = Number(arr2[i]);

  let carry = 0;
  let i = arr1.length - 1;
  let j = arr2.length - 1;
  let sum = "";
  while (i >= 0 || j >= 0 || carry == 1) {
    const s1 = i >= 0 ? arr1[i] : 0;
    const s2 = j >= 0 ? arr2[j] : 0;
    sum = ((s1 + s2 + carry) % 10) + sum;
    carry = s1 + s2 + carry > 9 ? 1 : 0;
    i--;
    j--;
  }
  return sum;
};
