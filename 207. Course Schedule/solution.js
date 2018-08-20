/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const adj = [];
  const record = [];

  for (let i = 0; i < numCourses; i++) {
    adj[i] = [];
    record[i] = 0;
  }

  for (let i = 0; i < prerequisites.length; i++) {
    const oneList = adj[prerequisites[i][0]]
    oneList[oneList.length] = prerequisites[i][1];
  }

  const helper = (n, record, adj) => {
    if (record[n] === 1) return false;
    else if (record[n] === 2) return true;

    record[n] = 1;
    let flag = true;
    const oneList = adj[n];

    for (let i = 0; i < oneList.length; i++) {
      if (!helper(oneList[i], record, adj)) {
        flag = false;
        break;
      }
    }

    record[n] = 2;
    return flag;
  }

  for (let i = 0; i < record.length; i++) {
    if (!helper(i, record, adj)) return false;
  }

  return true;
};