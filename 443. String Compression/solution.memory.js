/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  for (let i = 0; i < chars.length; i++) {
    const start = i;
    let counter = 1;
    while (chars[i] === chars[i + 1]) {
      counter++;
      i++;
    }

    if (counter > 1) {
      chars[i] = counter.toString();
      chars.splice(start + 1, counter - 1, ...String(counter));
      i = i - counter + 2;
    }
  }
  return chars.length;
};
