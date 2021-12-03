function bfs(nums) {
  const Q = [], R = new Set();
  let res = 0, curr = {
    coord: [0, 0],
    parent: null,
  };
  while (curr.coord.join(',') !== [4, 4].join(',')) {
    R.add(curr.coord.join(','));
    const { coord: [x, y] } = curr;
    const next = [
      [x, y - 1],
      [x + 1, y],
      [x, y + 1],
      [x - 1, y],
    ].filter(([a, b]) => a >= 0 && b >= 0)
      .filter(([a, b]) => a < nums[0].length && b < nums.length)
      .filter(([a, b]) => nums[b][a] === 0)
      .filter(x => !R.has(x.join(',')))
      .map(coord => ({ coord, parent: curr }));
    Q.push(...next);
    curr = Q.shift();
    if (!curr) throw new Error('无解！');
  }
  while (curr !== null) {
    console.log(curr.coord.join(','));
    curr = curr.parent;
    res++;
  }
  return res;
}

function anotherBfs(start, end, k) {
  const Q = [], R = new Set();
  let res = 0, curr = {
    status: start,
    parent: null,
  };
  while (curr.status.join(',') !== end.join(',')) {
    R.add(curr.status.join(','));

    const { status } = curr;
    const next = [...new Array(start.length - k + 1)]
      .map((_, i) => i)
      .map(i => [...status.slice(0, i), ...status.slice(i, i + k).reverse(), ...status.slice(i + k, start.length)])
      .filter(x => !R.has(x.join(',')))
      .map(status => ({ status, parent: curr }));

    Q.push(...next);
    curr = Q.shift();
    if (!curr) throw new Error('无解！');
  }
  while (curr !== null) {
    console.log(curr.status.join(','));
    curr = curr.parent;
    res++;
  }
  return res;
}

// const r = bfs(
//   [
//     [0, 1, 0, 0, 0],
//     [0, 1, 0, 1, 0],
//     [0, 0, 0, 0, 0],
//     [0, 1, 1, 1, 0],
//     [0, 0, 0, 1, 0],
//   ]
// );
const r = anotherBfs([1, 2, 3, 4, 5, 6], [3, 4, 1, 2, 5, 6], 3);
console.log(r);