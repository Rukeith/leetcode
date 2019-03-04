/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  return helper(n).join('');
};

const helper = (n) => {
  if (n === 1) return [1];
  return say(helper(n - 1));
};

const say = (numbers) => {
  // start with something
  // as long as they're the same keep a counter
  // once it's done push it into the answer

  const ans = [];
  let prev = numbers.shift();
  let count = 1;

  while (numbers.length > 0) {
    const head = numbers.shift();
    if (head === prev) {
      count += 1;
    } else {
      ans.push(count);
      ans.push(prev);
      prev = head;
      count = 1;
    }
  }

  ans.push(count);
  ans.push(prev);

  return ans;
};
