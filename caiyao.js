function output(data, t) {
  // const m = new Map;
  let max = 0;
  function dfs(node, left, gains, rests) {
    if (left - node[0] < 0) {
      return;
    }
    max = Math.max(max, node[1] + gains);
    for (let i = 0; i < rests.length; i++) {
      dfs(rests[i], left - node[0], node[1] + gains, [...rests.slice(0, i), ...rests.slice(i + 1)])
    }
  }

  data.forEach((node, i) => dfs(node, t, 0, [...data.slice(0, i), ...data.slice(i + 1)]));
  return max;
}

const r = output(
  [
    [71, 100],
    [69, 1],
    [1, 2],
  ],
  70
);
console.log(r);