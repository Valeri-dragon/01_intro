const l = (log) => {
    console.log(log);
}
let x = 0;

if (Math.random() > 0.5){
    x = 10;
} else {
    x = 20;
}

//то же самое (лаконичная запись блока if(){} else{})
x = Math.random() > 0.5 ? 10 : 20;
l(x)
//bad example
 
let age = 23;
let isAdult = age > 18 ? true : false;

l(isAdult)
//correct option

let isAdultDoneRight = age > 18;
l(isAdultDoneRight)