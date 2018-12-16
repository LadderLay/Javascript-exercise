const unique = (arr) => {
  var box = [];
  for(var i = 0; i < arr.length; i++){
    if (i === arr.indexOf(arr[i]))
      box.push(arr[i]);
  }
  return box;
}