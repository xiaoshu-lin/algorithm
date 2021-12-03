function lis(arr) {
  const dp = [arr[0]];
  function bs(n) {
    let a = 0, mid = b = this.length - 1;
    if (n > this[b]) return b + 1;
    while (a < b) {
      if (n === this[mid]) return mid;
      mid = Math.floor((a + b) / 2);
      if (n > this[mid]) a = mid + 1;
      else b = mid;
    }
    return a;
  }
  for (const n of arr.slice(1)) {
    dp[bs.call(dp, n)] = n;
  }
  console.log(dp);
  return dp.length;
}

lis([1,5,3,4,6,9,7,8])