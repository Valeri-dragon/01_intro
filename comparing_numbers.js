const l = (log) => {
    console.log(log);
};

let x = 10;
let y = 20;
l(x === y) //false
l(x < y) //true
l(x == y) // false
l(x === 10) //true
l(x !== y)//true
l(y !== 20)//false
l(x > y)//false
x = 20;
l(x >= y)//true
l(x <= y) //true