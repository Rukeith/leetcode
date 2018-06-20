/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  let pos = S.indexOf(C);
  const list = Array(S.length).fill(null).map((u, i) => Math.abs(pos - i));
  while (pos !== -1) {
    const next_pos = S.indexOf(C, pos + 1);
    for (let i = pos + 1; i < S.length; i++) {
      const dist = Math.abs(next_pos - i);
      if (list[i] > dist) list[i] = dist;
    }
    pos = next_pos;
  }
  return list;
};