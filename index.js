function longestSubstring(str) {
  let max = 0;
  let chars = {};
  for(let i=0; i<str.length; i++) {
    for(let j=i; j<str.length; j++) {
      let x = str[j];
      if(chars[str[j]]) {
        max = Math.max(j-i,max);
        break;
      }
      else chars[str[j]] = 1;
      if(j === str.length - 1) {
         max = Math.max(j-i+1,max);
      }
    }
    chars = {};
  }
  return max;
}

console.log(longestSubstring('bcccccddac'));