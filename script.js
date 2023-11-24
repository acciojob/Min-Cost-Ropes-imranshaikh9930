function mincost(arr)
{ 
//write your code here
// return the min cost

	 if (arr.length === 1) {
    return 0; // No cost to connect a single rope
  }

  let minCost = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const combinedLength = arr[i] + arr[j];
      const newArr = [...arr.slice(0, i), combinedLength, ...arr.slice(j + 1)];
      const cost = mincost(newArr);
      minCost = Math.min(minCost, cost + combinedLength);
    }
  }

  return minCost;
  
}

module.exports=mincost;
