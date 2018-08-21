/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const edges = [];
  const inDegree = Array(numCourses).fill(0);
  const queue = [];
  const answer = [];

  for (let index = 0; index < numCourses; index++) {
    edges[index] = [];
  }
  for (let index = 0; index < prerequisites.length; index++) {
    inDegree[prerequisites[index][0]]++;
    edges[prerequisites[index][1]].push(prerequisites[index][0]);
  }
  for (let index = 0; index < numCourses; index++) {
    if (inDegree[index] === 0) {
      queue.push(index);
    }
  }

  while (queue.length) {
    let queueLength = queue.length;

    while (queueLength) {
      queueLength--;
      const curCourse = queue.shift();
      answer.push(curCourse);

      for (let index = 0; index < edges[curCourse].length; index++) {
        const targetCourse = edges[curCourse][index];
        inDegree[targetCourse]--;

        if (inDegree[targetCourse] === 0) {
          queue.push(targetCourse);
        }
      }
    }
  }

  return answer.length === numCourses ? answer : [];
};