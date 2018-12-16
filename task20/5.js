//求[a,b]区间随机数：Math.floor(Math.random()*(max-min+1))+min
const uniqueNums = (n) => {
  var box = [];
  while(box.length < n){
    x = Math.floor(Math.random()*(31))+2;
    if(box.indexOf(x) == -1)
      box.push(x);
  }
  return box;
}