// 5-1, Flattening
// reduce, concat
function flatten(arrays){
    let result = arrays.reduce((res, array) => {
        return res.concat(array);
    })    
    console.log(result);
}
/*
reduce的callback里面accumulator是上一次返回的累计值
*/ 

// 5-2，Your own loop  

function loop(start, action1, action2, action){
    for(let i = start; action1(i); i = action2(i)){
        action(i);
    }
}
loop(4, n => n > 0, n => n - 1, console.log);

// 5-3，Everything 

function every(array, test){
    for(let i = 0; i < array.length; i++){
        if(!test(array[i])){
            return false;
        }
    }
    return true;
}

// 5-4， Dominant writing direction  X
//不会

function dominantDirection(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({direction}) => direction != "none");

    function characterCount(script) {
        return script.ranges.reduce((count, [from, to]) => {
          return count + (to - from);
        }, 0);
    }
    scripts.reduce((a, b) => {
        return characterCount(a) > characterCount(b) ? a : b;
    })
    
}




function textScripts(text) {
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.name : "none";
    }).filter(({name}) => name != "none");
  
    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";
  
    return scripts.map(({name, count}) => {
      return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(", ");
  }
  
  console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
  // → 61% Han, 22% Latin, 17% Cyrillic