function mincost(arr)
{ 
//write your code here
// return the min cost

	  const n = arr.length;

  // Initialize final cost variable
  let finalCost = 0;

  // Declaring a minHeap
  const minHeap = [];

  // Inserting all ropes to the minHeap
  for (let i = 0; i < n; i++) {
    minHeap.push(arr[i]);
  }

  // Convert the array into a min-heap
  minHeap.sort((a, b) => a - b);

  // Merge until there is only one rope left in minHeap
  while (minHeap.length > 1) {
    // Extract the smallest rope
    const smallest = minHeap.shift();

    // Extract the second smallest rope
    const secondSmallest = minHeap.shift();

    // Add cost of merging these two ropes to final answer
    finalCost += smallest + secondSmallest;

    // Insert the combined rope back in the minHeap
    minHeap.push(smallest + secondSmallest);

    // Re-sort the array to maintain the min-heap property
    minHeap.sort((a, b) => a - b);
  }

  // Return the finalCost
  return finalCost;
  
}

module.exports=mincost;
