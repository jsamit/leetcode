const binarySearch = function(list,start,end,key) {
  if(start <= end) {
    let mid = parseInt((start+end)/2);
    if(list[mid] === key)
      return mid;
    else if(list[mid] > key)
      return binarySearch(list,start,mid-1,key);
    else
      return binarySearch(list,mid+1,end,key);
  } 
  return -1;
}

const fromToIndex = function(list,key) {
  let index = binarySearch(list,0,list.length-1,key);
  let lastLeft = lastRight = index;
  let count = 0;
  while(lastLeft >= 0) {
    let left = binarySearch(list,0,lastLeft-1,key); 
    if(left !== -1) lastLeft = left;
    else break;
    count++;
  }
  while(lastRight <= list.length-1) {
    let right = binarySearch(list,lastRight+1,list.length-1,key);
    if(right !== -1) lastRight = right;
    else break;
    count++;
  }
  console.log({count});
  return [lastLeft,lastRight];
}

const bruteFromToIndex = function(number,target) {
  for(let i=0; i<number.length; i++) {
        if(number[i] === target) {
           for(let j=i+1; j<number.length; j++) {
               if(number[j] === target) {
                   return [i,j];
               }
           } 
          return [i,i];
        }
    }
    return [-1,-1];
}

const list = [...Array(100000)].map(_ => 1);
console.log(fromToIndex(list,1));