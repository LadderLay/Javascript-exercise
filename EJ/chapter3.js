// 3-1, Minimum
function min(a, b) {
  if(a > b)
    return b;
  else
    return a;
}

// 3-2, Recursion
function isEven(n) {
  if(n === 0)
    return true;
  else if(n === 1)
    return false;
  else return isEven(n - 2);
}

// 3-3, Bean counting
function countBs(str) {
  let cnt = 0;
  for(let i = 0; i < str.length; i++){
    if(str.charAt(i) === "B")
      cnt++;
  }
  return cnt;
}
function countChar(str, ch) {
  let cnt = 0;
  for(let i = 0; i < str.length; i++){
    if(str.charAt(i) === ch)
      cnt++;
  }
  return cnt;
}