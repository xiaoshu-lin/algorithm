const m = new Map;
function output(data, t) {
  function dfs(node, left, rests) {
    const key = [...node, left, rests.length];
    if (m.has(key)) return m.get(key);
    if (left - node[0] < 0 || rests.length === 0) {
      m.set(key, 0);
      m.set(key.join(','), 0);
      return 0;
    }
    const a = Math.max(
      ...rests.map(
        (_, i) => dfs(rests[i], left - node[0], [...rests.slice(0, i), ...rests.slice(i + 1)])
      )
    )
    if (m.has(key.join(',')) && m.get(key.join(',')) !== a + node[1]) console.log(key, a + node[1], m.get(key.join(',')));
    m.set(key, a + node[1]);
    m.set(key.join(','), a + node[1]);
    return a + node[1];
  }

  return Math.max(...data.map(
    (node, i) => dfs(node, t, [...data.slice(0, i), ...data.slice(i + 1)])
  ))
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
console.log(m);