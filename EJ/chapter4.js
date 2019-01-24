// 4-1, The sum of a range
function range(from, to, n){
    let array = [];
    if(n == null){
        n = 1;
    }
    if(from > to){
        for(let i = from; i >= to; i += n){
            array.push(i);
        }
    }else{
        for(let i = from; i <= to; i += n){
            array.push(i);
        }
    }   
    return array;
}
function sum(array){
    let result = 0;
    for(let i = 0; i < array.length; i++){
        result += array[i];
    }
    return result;
}

// 4-2, Reversing an array

function reverseArray(array){
    let result = [];
    for(let i = array.length - 1; i >= 0; i--){
        result.push(array.pop());
    }
    return result;
}
function reverseArrayInPlace(array){
    let temp;
    let len = Math.floor(array.length / 2);
    for(let i = 0; i < len; i++){
        temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
}
// 4-3, A list   X



// 4-4, Deep comparison  X

function deepEqual(){
    
}