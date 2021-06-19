const quickSort = function(list,start,end) {
  if(start >= end) {
    return ;
  }
  const partitionIndex = partition(list,start,end);
  quickSort(list,start,partitionIndex-1);
  quickSort(list,partitionIndex+1,end);
}

const partition = function(list,start,end) {
  const pivot = list[end];
  for(let i=start; i<=end; i++) {
    if(pivot > list[i]) {
      swap(list,i,start);
      start++;
    }
  }
  swap(list,start,end);
  return start;
}
const swap = function(list,first,last) {
  const temp = list[first];
  list[first] = list[last];
  list[last] = temp;
}
            
const list = [1,4,8,9,7,3,5,11,21,17,14,13,16,15]; // [1,3,4,5,7,8,9]
quickSort(list,0,list.length-1);
console.log(list);