// 2-1, Looping a triangle

let str = "#";
for(let i = str.length; i <= 7; i++){
  console.log(str);
  str += "#";
}

// 2-2, FizzBu​​zz

for(let n = 1; n <= 100; n++){
    if(!(n % 3)){
        if(!(n % 5)){
            console.log("FizzBuzz");
        }else{
            console.log("Fizz");
        }
    }else if(!(n % 5)){
        console.log("Buzz");
    }else{
        console.log(n);
    }
}

// 2-3, Chessboard

let size = 8;
let str = "";
for(let i = 0; i < size; i++){
    for(let j = 0; j < size; j++){
        if((i + j) % 2){
            str += "#";
        }else{
            str += " ";
        }
    }
    str += "\n";
}
console.log(str);