//也许该找个时间学一下正则了
const extractStr = (str) => {
  let result = [];
  let temps = str.split('.').slice(0, -1);
  temps.map(temp => {
    let target = temp.lastIndexOf(':');
    if(target >= 0){
      result.push(temp.substring(target + 1))
    }
  })
  return result;
}