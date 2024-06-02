/*
In this challenge, you're expected to find the longest 
consecutive sequence of positive squares that sums up to a number.

Example:
  595 = 62 + 72 + 82 + 92 + 102 + 112 + 122 **.

Your task is to write the function longestSequence(n) that either finds 
the longest consecutive sequence of squares that sums to the number n, 
or determines that no such sequence exists.

Example:
  longestSequence(50) // => [3, 4, 5]
      // 9 + 16 + 25 = 50

  longestSequence(595) // => [6, 7, 8, 9, 10, 11, 12]

  longestSequence(10) // => []

Note: Return an empty array if no such sequence exists.
*/


// Solution

function longestSequence(n){
  // your solution here
  let i =2;
  let r = [1];
  while(r.length > 0){
    let s = sum(r);
    if(s== n) return r;
    if(s < n) r.push(i++);
    else r.shift();
  }
  return [];
}

function sum(r){
return r.reduce((a,b)=> a + (b*b),0);
}

// or

function longestSequence(n){
  const maxInt = Math.floor(Math.sqrt(n, 2));

  let currentNum = 0;
  let currentSeq = [];
  let longestSeq = [];
  
  for (let i = maxInt; i > 0; i--) {
    let currentSum = currentNum + Math.pow(i, 2);

    currentNum = currentSum;
    currentSeq.unshift(i);

    if (currentSum > n) {
      currentNum -= Math.pow(currentSeq.pop(), 2);
    } else if (currentSum === n && currentSeq.length > longestSeq.length) {
      longestSeq = currentSeq.slice();
    }
  }

  return longestSeq;
}