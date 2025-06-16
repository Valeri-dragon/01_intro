const l = (log) => {
    console.log(log);
    }
//получение абсолютного (положительного) значения числа
Math.abs(-20); //20
l(Math.abs(-20));
Math.abs(20); //20
l(Math.abs(20));

//число PI, синус, косинус, тангес, арктангенс
Math.sin(Math.PI / 2); //1, синус 90 градусов
l(Math.sin(Math.PI / 2));
Math.cos(Math.PI * 2); //1, косинус 360 градусов
l(Math.cos(Math.PI * 2));
Math.tan(0);//0, тангенс 0 градусов
l(Math.tan(0));
Math.atan(0);//0, арктангенс 0 градусов
l(Math.atan(0));

//натуральный логарифм (Ln)
Math.log(Math.E); //1
l(Math.log(Math.E));

//округление
Math.round(3.8) // 4,  математичсекое округление
Math.round(3.2) // 3
Math.round(3.5) // 4
l(Math.round(3.8));
l(Math.round(3.2));
l(Math.round(3.5));
Math.floor(3.9);//3, округление вниз
l(Math.floor(3.9))
Math.ceil(3.2);//4, округление вверх
l(Math.ceil(3.2));

//наибольшее и наименьшее число
Math.max(10, 1, -40, 12, 5); // 12, наибольшее из переданных чисел
l(Math.max(10, 1, -40, 12, 5))
Math.min(10, 1, -40, 12, 5); // -40, наименьшее из переданных чисел
l(Math.min(10, 1, -40, 12, 5))

//возведение в степень
Math.pow(10,3); //10^3, 1000
l(Math.pow(10, 3));
l(10 ** 3) // запись возведения в степень, но не везде может поддерживаться
Math.sqrt(16); //4, квадратный корень числа
l(Math.sqrt(16))
Math.pow(16, 0.5);//4, тоже квадратный корень числа
l(Math.pow(16, 0.5));

//случайные числа
Math.random(); // случайное дробное число от 0 до 1
l(Math.random());
Math.round(Math.random() * 100); // случайное число от 0 до 100
l(Math.round(Math.random() * 100));

Math.round(Math.random() * 70) + 50; // случайное число от 50 до 120
l(Math.round(Math.random() * 70) + 50);