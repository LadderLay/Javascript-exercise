const parseData = (data) => {
  let rows = data.rows;
  let metaData = data.metaData;
  let arr = [];
  rows.map(x =>{
    let temp = {};
    for(let i in metaData){
      temp[metaData[i].name] = x[i];
    }
    arr.push(temp);
  })
  return arr;
}