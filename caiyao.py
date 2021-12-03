def output (data, t):
  dp = {}
  def dfs(node, left, rests):
    key = "[%d,%d],%d,%d"%(node[0],node[1],left,len(rests))
    if (dp.has_key(key)):
      return dp[key]
    __max = 0
    if (left - node[0] < 0):
      return 0
    for i, b in enumerate(rests):
      __max = max(__max,dfs(b, left - node[0], rests[0:i]+rests[i+1:]))
    dp[key] = __max+node[1]
    return __max+node[1]

  __max = 0
  for i, node in enumerate(data):
    __max = max(__max,dfs(node, t, data[0:i]+data[i+1:]))
  
  print(dp)
  return __max

t, n = map(lambda x:int(x), raw_input().split())
x = []
for i in range(0,n):
  x.append(map(lambda x:int(x), raw_input().split()))
print(output(x,t))