/**В JavaScript можно выжелить три большие группы типов:
 * Простые - boolean , number, string, symbol, bigint. Отличительная способность простых типов в том, что  их значения копируются при присваивании (передаются по значению)
 * Нулевые - null, undefined. Отличительная способность - у каждого может быть только одно значение
 * Object - array [], function {}. Имеют две особенности: 1) являются ссылочным типом; (их значения не копируются при присваивании, а копируются только ссылки на них) 2) Они могут в себе объединять несколько 
 * значений других типов или даже вложенные объекты. Массивы и йункции являются частными случаями объектов и не выделяются в отдельные типы в языке javaScript
 */
/**
 * оператор typeof  вернет название типа значения написанного справа от него, бывает полезно, когда мы не уверены какой тип данных перед нами и мы хотим выполнить
 * набор операций в зависимости от того какой тип.
 */
//простые 
const l = (log, str = ' ') => {
    console.log(log, str);
}
l(typeof 1); //number
l(typeof '1'); //string
l(typeof false) //boolean
l(typeof 123n); //bigint
l(typeof Symbol()); //symbol

//составные
l(typeof {}); //Object
l(typeof []); //object
l(typeof function() {}); //function

//нулевые
l(typeof undefined); //undefined
l(typeof null); //object
let nul = null;
l(nul === null);
//расхождения typeof и системы типов

l(typeof null); //object, хотя реальный тип значения - null
l(typeof function () { }); //function, хотя в системе типов функция не выделяется в отдельный тип

//пример использования
l("getStringValue")
const getStringValue = (unknown) => {
    if (typeof unknown === 'string'){
        return unknown;
    }
    if (typeof unknown === 'function') {
        return unknown();
    }
    if (typeof unknown === 'object') {
        return unknown.toString();
    }
    return '';
}
l(getStringValue('just a string'));
l(getStringValue(function(a=3, b=2){return a + b}));
l(getStringValue([1, 2, 3]));
l(getStringValue({}));
l(getStringValue(true));

//tasks
/**
 * Создать функцию с названием getOlderUser(), которая будет определять, кто из двух пользователей старше. 
 * Аргументами функции являются два пользователя в виде двух объектов. Функция должна вернуть с помощью команды return имя старшего пользователя.
Созданную функцию нужно вызвать, передав ей два объекта: user1 и user2. Результат, который вернёт функция, необходимо вывести в консоль.
 */
let user1 = {
    name: 'Игорь',
    age: 17,
}
let user2 = {
    name: 'Оля',
    age: 21,
   }
const getOlderUser = (user1, user2)=>{
       if(user1.age>user2.age){
        return user1.name;
    }
    return user2.name;  
}
/**
 * Создать функцию getOlderUserArray(), в которую будете передавать массив объектов с пользователями.
 *  Функция должна вернуть имя старшего пользователя.
 */
let result = getOlderUser(user1, user2);
l(result)
let allUsers = [
    { name: 'Валя', age: 11 },
    { name: 'Таня', age: 24 },
    { name: 'Рома', age: 21 },
    { name: 'Надя', age: 34 },
    { name: 'Антон', age: 7 }
   ]

const getOlderUserArray = (usersArray)=>{
    let arr = [];
    for (let i of usersArray) {
        arr.push(i.age);
    }
    let obj = usersArray.filter(item => item.age >= Math.max(...arr))[0].name
    return obj;
}

l(getOlderUserArray (allUsers));
/*
Создать функцию filter(), фильтрующую массив объектов по значению свойства. 
Массив, название свойства и нужное значение должны передаваться в качестве аргументов.
*/
let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
   ]

const filter = (array, keySearch, valueSearch)=>{
    let search = [keySearch, valueSearch]
   
    return array.filter((user) => search.includes(user.name) && user.name == valueSearch); 
  
}
let resultFilter = filter(objects, 'name', 'Пётр');
l(resultFilter)