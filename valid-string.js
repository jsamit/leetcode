function isValidParanthesis(str) {
  const paran = {
    '{' : '}',
    '[' : ']',
    '(' : ')',
  }
  const stack = [];
  for(let i=0; i<str.length; i++) {
    if(paran[str[i]]) stack.push(str[i]);
    else if(paran[stack.pop()] !== str[i]) {
      return false;
    }
  }
  return stack.length ? false : true;
}
function isValidString(str) {
  const chars = str.split('');
  const stack = [];
  for(let i=0; i<chars.length; i++) {
    if(chars[i] === '(') {
      stack.push(i);
    }
    else if(chars[i] === ')') {
      if(!stack.length) chars[i] = '';
      else stack.pop();
    }
  }
  while(stack.length) chars[stack.pop()] = '';
  return chars.join('');
  // return chars.joinWithout('',(data) => data !== -1);
}
Array.prototype.joinWithout = function(literal,context) {
  let str = ``;
  this.forEach(data => {
    if(context(data)) str += `${data}${literal}`;
  });
  return str;
}

console.log(isValidString('a)bc(d)'));
console.log(isValidString('()())()'));
console.log(isValidString('(a)())()'));