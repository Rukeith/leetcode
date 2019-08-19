/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  let w = Math.trunc(Math.sqrt(area));
  while (area % w !== 0) w -= 1;
  return [area / w, w];
};
