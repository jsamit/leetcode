function almostPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g,'');
  console.log(str);
  let left = 0;
  let right = str.length - 1;
  while(left < right) {
    if(str[left] !== str[right]) {
      return removeOneCharacter(`${str.slice(0,left)}${str.slice(left+1,str.length)}`) || removeOneCharacter(`${str.slice(0,right)}${str.slice(right+1,str.length)}`);
    }
    left++;
    right--;
  }
  return true;
}

function removeOneCharacter(str) {
  console.log({str});
  let left = 0;
  let right = str.length - 1;
  while(left < right) {
    if(str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
console.log(almostPalindrome('abcdefdba'));