const l = (log, str = ' ') => {
    console.log(log, str);
}
/*
Ниже представлено несколько объектов, в которых содержится тех.информация
и характеристика о компьютере
*/
let motherBoard = {
    usbPortCount: 8,
    chipset: 'AMD X570',
    socket: 'AM3/AM4',
};

let cpu = {
    coreCount: 8,
    cpuManufacturer: 'AMD',
    socket: 'AM4',
};

let videoCard = {
    videoCardModel: 'NVidia GeForce GTX 1060',
    videoMemory: 4096,
}

let ram = {
    ramType: 'DDR4',
    ramVolume: 8192,
    ramFrequency: 3200,
}

let computer = {
    price: 100000,
    ...motherBoard,
    //св-во socket из объекта motherBoard будет заменено значением св-ва из объекта cpu
    ...cpu,
    ...videoCard,
    ...ram,
}
l(computer)
//альтернативный метод смешивания объектов между собой с помощью функции Object.assign

let computerWithAssign = Object.assign(
    //целевой объект, в который будут "замешаны" следующие
    {
        price: 100000,
    },
    //объекты подмешиваемые в первый
    motherBoard, cpu, videoCard, ram
)
l(computerWithAssign)

//получение списка имён свойств объекта в виде массива
l(Object.keys(computer));

//получение списка свойств (значений) объекта в виде массива
l(Object.values(computer));

//получение из объекта списка значений и их свойств в массив, в котором массивы, состоят из 2-х элементов
//где первый элемент название свойства (ключ), второй его свойство (значение)
l(Object.entries(computer));

/**
 * Объекты и их передача по ссылке
 * представим, что пользователь обратился в сервис для того, чтобы починить свой автомобиль
 * сервис это как бы функция, которая работает с различными объектами,
 * которые являются автомобилями.
 * Пользователь передаёт свой автомобиль сервису, а на выходе получается тот же самый объект, но
 * уже отремонтированный
 */
let digit = 20;
let otherDigit = digit;
l(digit)
//исходное значение digit не меняется, так как otherDigit копирует значение из digit
otherDigit += 5;
l(otherDigit);

let obj = {model: 'VW Polo',}
let otherObject = obj;

l(obj);
l(otherObject);
//obj и otherObj ссылаются на один же объект, поэтому свойство поменяется и там, и там
otherObject.model = 'Volrswagen Polo';
l(obj);
l(otherObject);
/**
 * из этого следует, что объекты так называемый ссылочный тип данных, это означает, что при присваивании переменной с объектом 
 * в другую переменную или пре передачи объекта в качестве параметра, объект не будет копироваться, вместо этого будет копироваться
 * ссылка на объект, а сам объект везде будет одним и тем же.
 * Другими словами любая переменная, в которую мы записываем объект на самом деле, хранит не сам объект, а ссылку на него.
 */
/*При сравнении двух переменных с объектами, они будут равны в том случае если указывают на один и тот же объект.
Во всех остальных случаях они будут не равны
*/
//obj1 и obj2 - ссылки на один и тот же объект.
let obj1 = { name: 'Какой-то объект'};
let obj2 = obj1;

//и они равны
l(obj1 === obj2);

//obj2 становится ссылкой на новый объект, хоть и с такими же свойтсвами
obj2 = { name: 'Какой-то объект' };
//и теперь obj1 и obj2 - ссылки на разные объекты, то есть они не равны
l(obj1 === obj2);

/*с особой осторожностью следует использовать функцию Object.assign()*/

let me = {
    name: 'Valeri',
};

// функция вернёт получившийся объект, но это будет тот же объект,
// который мы передали в первый аргумент, то есть она изменит объект me и вернёт его
//let newMe = Object.assign(me, {name: 'No Valeri'}, { surname: 'No Nikitina'});

//me и newMe - один и тот же объект, и мы его изменили
//l(newMe);
//l(me);

//l(me === newMe) //true

//как создать новый объект с помощью функции Object.assign()*/

//подмешиваем свойства в свежесозданный пустой объект
let newMe = Object.assign({}, me, {names:'No Valeri', surname: "No Nikitina"});
//или делаем тоже самое с помощью spread
let newMeWithSpread = { ...me, names:'No Valeri', surname: "No Nikitina"};

//исходный объект остался не тронутым
l(me);
l(newMe);
l(newMeWithSpread)
