/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let cur = 0,
    write = 0;
  for (let read = 0; read < chars.length; read++) {
    if (read === chars.length - 1 || chars[cur] !== chars[read + 1]) {
      chars[write++] = chars[cur];

      if (read - cur > 0) {
        for (let c of `${read - cur + 1}`) {
          chars[write++] = c;
        }
      }
      cur = read + 1;
    }
  }
  return write;
};
