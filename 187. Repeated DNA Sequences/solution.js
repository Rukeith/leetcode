/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  const res = [];
  const seen = new Set();
  const multiple = new Set();
  const values = {
    A: 0,
    C: 1,
    G: 2,
    T: 3
  };

  let key = 0;
  for (let i = 0; i < 10; i++) {
    key = (key << 2) | values[s[i]];
  }
  seen.add(key);
  
  const mask = (1 << 20) - 1;
  for (let i = 10; i < s.length; i++) {
    key = (key << 2) & mask | values[s[i]];

    if (multiple.has(key)) continue;
    if (seen.has(key)) {
      multiple.add(key);
      res.push(s.substring(i - 9, i + 1));
    } else {
      seen.add(key);
    }
  }
  
  return res;
};