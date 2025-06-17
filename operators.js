const l =(log)=>{
console.log(log);
}
let sum = 10 + 5; //15
let subtraction = 10 - 5; //5
let multiplication = 10 * 5; //50
let division = 10 / 5; // 2
let remains = 10 % 3 //1 вычисление остатка;
l (sum);
l (subtraction);
l (multiplication);
l (division);
l (remains);



//инкремент ++
let a = 10;
a++; //11
l (`a = ${a}`);
//декремент --
let b = 10;
b--; //9
l (`b = ${b}`);

//префиксная запись
++a;
l (`a = ${a}`);
--b;
l (`b = ${b}`);

sum += 5; //sum = sum + 5
l (sum)
sum -= 6; // sum = sum - 6 //14
l (sum);
sum *= 2; // sum = sum * 2 //28
l (sum);
sum /= 4; // sum = sum / 4 //7
l(sum);
sum %= 2; // sum = sum % 2 //1
l(sum);