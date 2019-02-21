const safeGet = (data, path) => {
  let paths = path.split('.');
  let temp = data;
  for(let i of paths){
    if (temp[i]){
      temp = temp[i];
    }else{
      return undefined;
    }
  }
  return temp
}