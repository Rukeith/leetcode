/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  const reformatString = (s) => {
    const res = [];
    const str = s.split('');
    for (let i = 0; i < str.length; i++) (str[i] === '#') ? res.pop() : res.push(str[i]);
    return res.join('');
  };

  return reformatString(S) === reformatString(T);
};