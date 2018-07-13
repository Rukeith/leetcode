/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  const result = [];

  function addInterval(interval) {
    for (let i = 0; i < result.length; i++) {
      if (result[i].end >= interval.start && interval.end >= result[i].start) {
        const removed = result.splice(i, 1)[0];
        const merged = new Interval(Math.min(interval.start, removed.start), Math.max(interval.end, removed.end));
        addInterval(merged);
        return;
      }
    }

    result.push(interval);
  }

  for (let i = 0; i < intervals.length; i++) addInterval(intervals[i]);
  return result;
};