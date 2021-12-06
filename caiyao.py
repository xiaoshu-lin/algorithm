def output (data, t):
  dp = []*t

  # def dfs(index, left):
  #   key = "[%d,%d]"%(index,left)
  #   if (dp.has_key(key)):
  #     return dp[key]
  #   if (index >= len(data)):
  #     dp[key] = 0
  #     return 0
  #   dp[key] = max(
  #     dfs(index + 1, left),
  #     dfs(index + 1, left - data[index][0]) + data[index][1] if left >= data[index][0] else 0,
  #   )
  #   return dp[key]
    
  # return dfs(0 ,t)

  for d in data:
    dp_copy = dp.copy()
    for _t in range(t,d[1],-1):
      dp[_t] = max()
    for k,v in dp_copy.items():
      if k+d[0] <= t:
        dp[k+d[0]] = max(
          dp_copy[k+d[0]] if dp_copy.has_key(k+d[0]) else 0,
          v+d[1],
        )
        # print(d, n, dp)

  # print(dp)
  return max(dp.values())

t, n = map(lambda x:int(x), raw_input().split())
x = []
for i in range(0,n):
  x.append(map(lambda x:int(x), raw_input().split()))
# print(x)
print(output(x,t))