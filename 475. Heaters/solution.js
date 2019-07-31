/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
  let cur = 0;
  let next = 0;
  let radius = 0;

  houses.sort((a, b) => a - b);
  heaters.sort((a, b) => a - b);

  for (let i = 0; i < houses.length; i++) {
    while (next <= heaters.length - 1 && houses[i] > heaters[next]) {
      cur = next;
      next++;
    }

    if (next > heaters.length - 1) {
      next = cur;
    }

    if (cur === next) {
      radius = Math.max(radius, Math.abs(heaters[cur] - houses[i]));
    } else {
      radius = Math.max(
        radius,
        Math.min(heaters[next] - houses[i], houses[i] - heaters[cur])
      );
    }
  }

  return radius;
};
