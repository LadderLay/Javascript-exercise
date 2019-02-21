const flatten = (arr) => {
    let result = [];
    arr.forEach((item) => {
      if(Array.isArray(item)){
        result = result.concat(flatten(item));//划重点！
      }else{
        result.push(item);
      }
    })
    return result;
}