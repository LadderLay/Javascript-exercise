function duplicates(arr) {
  var temp = arr.sort();
  var box = [];
  for(var i = 1; i < temp.length; i++){
      if((temp[i] === temp[i -1]) && (box.indexOf(temp[i]) === -1))
         box.push(temp[i]);
  }
  return box;
}