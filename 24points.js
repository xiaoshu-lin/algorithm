function _24points(nums) {
  function itr(v, rests, depth) {
    if (v.val === 24 && depth === 4) {
      let res = [];
      let node = v;
      while (node !== null) {
        res.push(node.target, (node.operator || ''));
        node = node.parent;
      }
      console.log([...res].reverse().join(''));
      return true;
    }

    if (rests.length === 0 || Math.floor(v.val) !== v.val) return false;

    for (let i = 0; i < rests.length; i++) {
      return itr({ val: v.val + rests[i], operator: '+', target: rests[i], parent: v }, [...rests.slice(0, i), ...rests.slice(i + 1)], depth + 1)
        || itr({ val: v.val - rests[i], operator: '-', target: rests[i], parent: v }, [...rests.slice(0, i), ...rests.slice(i + 1)], depth + 1)
        || itr({ val: v.val * rests[i], operator: 'x', target: rests[i], parent: v }, [...rests.slice(0, i), ...rests.slice(i + 1)], depth + 1)
        || itr({ val: v.val / rests[i], operator: '/', target: rests[i], parent: v }, [...rests.slice(0, i), ...rests.slice(i + 1)], depth + 1)
    }
  }

  return nums.some(
    (n, i) => itr({ val: n, target: n, parent: null, }, [...nums.slice(0, i), ...nums.slice(i + 1)], 1)
  );
}

const r = _24points([2, 6, 3, 7]);
console.log(r);