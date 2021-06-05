/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  let p = s.length - 1;
  let q = t.length - 1;
  while(p >= 0 || q >= 0) {
    if(s[p] === '#' || t[q] === '#') {
      if(s[p] === '#') {
        let shiftBy = 2;
        while(shiftBy > 0) {
          shiftBy--;
          p--;
          if(s[p] === '#') shiftBy += 2;
        }
      }
      if(t[q] === '#') {
        let shiftBy = 2;
        while(shiftBy > 0) {
          shiftBy--;
          q--;
          if(t[q] === '#') shiftBy += 2;
        }
      }
    } else {
      if(s[p] !== t[q])
        return false;
      else {
        p--;
        q--;
      }
    }
  }
  return true;
}