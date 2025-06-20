const l = (log, str = ' ') => {
    console.log(log, str);
}
let user = new Object(); // синтаксис "конструктор объекта"
let user1 = {};  // синтаксис "литерал объекта"
/*
При использовании литерального синтаксиса {...} мы сразу можем поместить 
в объект несколько свойств в виде пар «ключ: значение»:
*/
user1 = {     // объект
    name: "John",  // под ключом "name" хранится значение "John"
    age: 30        // под ключом "age" хранится значение 30
  };
  /*
  У каждого свойства есть ключ (также называемый «имя» или «идентификатор»).
   После имени свойства следует двоеточие ":", и затем указывается значение свойства.
    Если в объекте несколько свойств, то они перечисляются через запятую.
В объекте user1 сейчас находятся два свойства:
Первое свойство с именем "name" и значением "John".
Второе свойство с именем "age" и значением 30.*/
// получаем свойства объекта:
l(user1.name); // John
l(user1.age); // 30
/*Для удаления свойства мы можем использовать оператор delete:
delete user.age;
*/

/*
Имя свойства может состоять из нескольких слов, но тогда оно должно быть заключено в кавычки:
*/
user1 = {
    name: "John",
    age: 30,
    "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
  };
//Объект, объявленный через const, может быть изменён.
const user2 = {
    name: "John"
};

user2.name = "Pete"; // (*)

l(user2.name); // Pete
/*
Квадратные скобки
Для свойств, имена которых состоят из нескольких слов, доступ к значению «через точку» не работает:
*/
// присваивание значения свойству
user2["likes birds"] = true;
l(`${user2.name}  ${user2["likes birds"] === true ? 'любит птиц' : 'не любит птиц'}`)

//функция опрделения имени свойств у объекта
const printObjectProperty = (obj, propName) =>{
    l(obj[propName]);
}
let userName = 'Валерия';
let surName = 'Теребилова';
let middleName = 'Сергеевна';


let me = {
userName,
surName,
middleName,
birthDate: {year: 1988, month: 3, day: 26},
occupation: 'Frontend разарботчик',
getAge(){
    //     let currentYear = new Date().getFullYear();
    // if (currentYear > this.birthDate.year) {
    //         let age = currentYear - this.birthDate.year;
    //         return l(`Мне ${age} лет`);
    //     }
    let now = new Date();
    let born = new Date(
        this.birthDate.year,
        this.birthDate.month + 1,
        this.birthDate.day,
    );
    let diffInMilliSeconds = now.getTime() - born.getTime();
    return l(`Мне ${Math.floor(diffInMilliSeconds / 1000 / 60 / 60 / 24 / 365.25)} лет`);
    },
married: true,
//метод объекта
sayHi(){
    l(`${this.userName} шлёт тебе привет!`)
},
}
printObjectProperty(me, 'userName') //Валерия
printObjectProperty(me, 'middleName') //Сергеевна
me.sayHi();
me.getAge()
let admin = me;
admin.userName = 'Админ';
admin.sayHi();