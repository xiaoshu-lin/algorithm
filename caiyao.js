const m = new Map;
function output(data, t) {
  function dfs(index, left) {
    const key = [index, left].join(',');
    if (m.has(key)) return m.get(key);
    if (index >= data.length) {
      m.set(key, 0);
      // m.set(key.join(','), 0);
      return 0;
    }
    const a = Math.max(
      dfs(index + 1, left),
      left > data[index][0] ? dfs(index + 1, left - data[index][0]) + data[index][1] : 0,
    )
    m.set(key, a);
    // m.set(key.join(','), a + node[1]);
    return a;
  }

  return dfs(0, t);
}

const r = output(
  // [
  //   [71, 100],
  //   [69, 1],
  //   [1, 2],
  // ],
  // 70
  [[71, 26], [34, 59], [82, 30], [23, 19], [1, 66], [88, 85], [12, 94]], 1000
);
console.log(r);
console.log([...m.entries()])