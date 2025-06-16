const l = (log) => {
    console.log(log);
}
/*
Вычисляем расстояние между двумя точками.
Даны координатыx, y 2-х точек. Нужно вывести расстояние между ними. 
Вычисляем по теореме Пифагора
*/

let x1 = 10;
let y1 = 2;

let x2 = -3;
let y2 = 3;

let cathetus1 = Math.abs (x1 - x2);
let cathetus2 = Math.abs(y1 - y2);
l(Math.sqrt(Math.pow(cathetus1, 2) + Math.pow(cathetus2, 2)));

/*
Сравниваем 2 дробных числа с указанной точностью.
Даны 2 числа и кол-во знаков после запятой, которое необходимо учитывать.
Вывести инфорацию, равны ли эти числа, больше ли первое число или меньше второго.
*/

let first = 0.1 + 0.2 + 0.033;
let second = 0.33334;
let precision = 3;

let firstNormalized = Math.round( first * Math.pow(10, precision));
let secondNormalized = Math.round(second * Math.pow(10, precision));

l(`Исходные числа равны ${first === second}`);
l(`Числа равны ${firstNormalized === secondNormalized}`);
l(`Первое число больше ${firstNormalized > secondNormalized}`);
l(`Первое число меньше ${firstNormalized < secondNormalized}`);

/*
Генератор случайных чисел между n и m.
Учесть, что n необязательно меньше, чем m
*/
let n = -100;
let m = 350;

//кол-во цифр, которые могут быть сгенерированы
let range = Math.abs(m - n);
//округлённое число от 0 до range
let numberInRange = Math.round(Math.random() * range);
//левая граница возможного числа
let min = Math.min(n, m);
l(min + numberInRange);

/*
Выводим отдельную целую и дробную части числа с точностью n
*/
let precision1 = 3;
let number = 0x12f + .3 + .1;

l(`Исходное число ${number}`);
l(`Целая часть ${Math.floor(number)}`);
// остаток от деления на 1 возвращает дробную часть
l(`Дробная часть ${Math.round(number % 1 * Math.pow(10, precision1))}`);


/*
Вычисляем площадь прямоугольника, противоположные углы  которого представлены указанными точками.
для x3 = 2, y3 = 3, x4 = 10, y4 = 5 площадь равна 16;
для x3 = 10, y3 = 5, x4 = 2, y4 = 3 площадь равна 16;
для x3 = -5, y3 = 8, x4 = 10, y4 = 5 площадь равна 45;
для x3 = 5, y3 = 8, x4 = 5, y4 = 5 площадь равна 0;
для x3 = 8, y3 = 1, x4 = 5, y4 = 1 площадь равна 0.
*/

const  RectangleArea = (x3, y3, x4, y4)=>{
    let cathetus1 = Math.abs(x3 - x4);
    let cathetus2 = Math.abs(y3 - y4);
    let rectangleArea = Math.sqrt(Math.pow(cathetus1, 2) * Math.pow(cathetus2, 2));
    l(`Площадь прямоугольника равна ${rectangleArea}`)
}

RectangleArea(2, 3, 10, 5);
RectangleArea(10, 5, 2, 3);
RectangleArea(-5, 8, 10, 5);
RectangleArea(5, 8, 5, 5);
RectangleArea(8, 1, 5, 1);
/*
Вычислите дробные части чисел a и b с точностью n.
Выведите получившиеся числа с помощью console.log. Выведите результаты их сравнения (>, <, ≥, ≤, ===, ≠) с помощью console.log.*/


const CalculateFractionalParts = (a, b, n) =>{
    let fractionA = Math.floor(a % 1 * Math.pow(10, n));
    let fractionB = Math.floor(b % 1 * Math.pow(10, n));

    l(`Для a = ${a}, b = ${b}, n = ${n} дробные части: ${fractionA}, ${fractionB}.`);

    l(`${fractionA} > ${fractionB}: ${fractionA > fractionB}`);
    l(`${fractionA} < ${fractionB}: ${fractionA < fractionB}`);
    l(`${fractionA} >= ${fractionB}: ${fractionA >= fractionB}`);
    l(`${fractionA} <= ${fractionB}: ${fractionA <= fractionB}`);
    l(`${fractionA} === ${fractionB}: ${fractionA === fractionB}`);
    l(`${fractionA} !== ${fractionB}: ${fractionA !== fractionB}`);
}
CalculateFractionalParts(13.123456789, 2.123, 5);
CalculateFractionalParts(13.890123, 2.891564, 2);
CalculateFractionalParts(13.890123, 2.891564, 3);
/*
 Генератор двух случайных чисел в диапазоне между n и m включительно.
  Учесть, что n и m могут быть отрицательными, а также может быть n > m или n < m.
*/

const NumberRandom = (n, m) => {
    //кол-во цифр, которые могут быть сгенерированы
    let range = Math.abs(m - n);
    //округлённое число от 0 до range
    let numberInRange = Math.round(Math.random() * range);
    //левая граница возможного числа
    let min = Math.min(n, m);
    l(min + numberInRange);
    l(`${n} > ${m}: ${n > m}`);
    l(`${n} < ${m}: ${n < m}`);
    l(`${n} >= ${m}: ${n >= m}`);
    l(`${n} <= ${m}: ${n <= m}`);
    l(`${n} === ${m}: ${n === m}`);
    l(`${n} !== ${m}: ${n !== m}`);
    }

NumberRandom(100,-5)