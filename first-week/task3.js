function parseQuery(query)
{
  var arr1 = query.split('&')
  var obj = {}
  //console.log(arr1);
  for(var i = 0; i < arr1.length; i++)
    {
      var arr2 = arr1[i].split('=');
      //console.log(arr2);
      if(arr2[0]){obj[arr2[0]] = arr2[1]}//?
    }
  return obj;

}
var jerry = parseQuery("name=jerry&age=1");
	jerry;
    //console.log(jerry);

