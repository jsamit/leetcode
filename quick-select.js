const quickSelect = function(list,start,end,whichIndex) {
  if(start <= end) {
    const partitionIndex = partition(list,start,end);
  if(partitionIndex === whichIndex)
    return list[whichIndex];
  else if(partitionIndex > whichIndex)
    return quickSelect(list,start,partitionIndex-1,whichIndex);
  else
    return quickSelect(list,partitionIndex+1,end,whichIndex);
  }
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
const val = quickSelect(list,0,list.length-1,list.length - 3);
console.log(val);