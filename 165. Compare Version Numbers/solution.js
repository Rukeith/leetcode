/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  version1 = version1.split(".");
  version2 = version2.split(".");
  const len = Math.max(version1.length, version2.length);

  for (let i = 0; i < len; i++) {
    if (parseInt(version1[i] || 0) > parseInt(version2[i] || 0)) return 1;
    else if (parseInt(version1[i] || 0) < parseInt(version2[i] || 0)) return -1;
  }

  return 0;
};