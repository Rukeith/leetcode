/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
  const swapIndexes = [];

  if (A.length !== B.length) return false;
  if (A === B) return A.length > new Set(A).size;

  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) swapIndexes.push(i);
  }

  if (swapIndexes.length === 2) {
    const swappedA = A.split('');
    swappedA[swapIndexes[0]] = A[swapIndexes[1]];
    swappedA[swapIndexes[1]] = A[swapIndexes[0]];
    return swappedA.join('') === B;
  }

  return false;
};