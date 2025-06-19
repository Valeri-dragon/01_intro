const l = (log, str = ' ') => {
    console.log(log, str);
}
const printWeekDay = () => {
    //Суббота или Воскрсенье
    var days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];
    var d = new Date();
    var n = d.getDay();
    l(days[n]);

    l(days[n] === 'Суббота' || days[n] === 'Воскресенье' ? days[n] + "— это выходной" : days[n] + " — это точно не выходной")
    l(days[n])
}
printWeekDay();
//функция возвращающая индекс нужной карты

const findCardIndex = (cards, wantedCard = 'Туз') => {
    // let arr = cards, i, numIndex;
    // i = 0
    // numIndex = -1;
    // while (i < arr.length) {
    //     i++
    //     if (arr[i] == wantedCard) {
    //         numIndex = i;
    //         return l(numIndex === -1 ? `${wantedCard} отсутствует в массиве` : `Заданный элемент ${wantedCard} в массиве под порядковым номером ${numIndex}`)
    //     }
    // }
    for (let index in cards) {
        let card = cards[index];
        if (card === wantedCard) {
            return l(`Заданный элемент ${wantedCard} в массиве колоды под порядковым номером ${index}`)
        }
    }
    l(`${wantedCard} отсутствует в массиве колоды`)
    return -1;
}
/*функция с аргументами*/
const findCard = (cards, wantedCard = 'Туз') => {
    l(`Ищем в колоде карту ${wantedCard}`)
    let found = false
    let arr = [];
    for (let card of cards) {
        arr.push(card)
        l(`Из колоды вытянута карта ${card}`)
        if (card === wantedCard) {
            found = !found;
            break;
        }
    }
    l(`Карты в руке ${arr}`)
    l(found ? `Мы нашли карту ${wantedCard}` : `В колоде нет карты ${wantedCard} :-(`)
    findCardIndex(cards, wantedCard)
}
let cards = ['2', 'Король', 'Туз', '5', '6', 'Король', 'Дама',]
//Ищем значение по умолчанию (Туз) в переданной колоде карт
findCard(cards);
//Ищем пятёрку в переданной колоде карт
findCard(cards, '5');
let findCardInArr = findCardIndex(cards, 'Валет')
l(findCardInArr)

//undefined в JS значение по умолчанию, если явно ничего не прописано в коде
/*null пишем тогда, когда явно выражаем кодом отсутствие значения 
и не пишем ничего когда нам не важно вернется пустое 
*/

//Функции именование
const generateRandomNumber = (n, m) => {
    let range = Math.abs(m - n); //диапазон между числами m и n
    let numberinRange = Math.round(Math.random() * range);//округляем ранломное число умноженное на range
    //генерируем то число, которое находится в диапазоне,который сгенерировали в пременной range
    let min = Math.min(n, m);
    return min + numberinRange;
}
//tasks
/*
Создайте функцию с названием getAge(), которая будет рассчитывать возраст по году рождения.
 У функции будет всего один аргумент (параметр), который нужно передать в функцию. 
 Функция должна сделать расчёт возраста по текущему году.
 После расчёта функция должна вернуть результат с помощью команды return.
*/
const getAge = (year) => {
    let currentYear = new Date().getFullYear();
    if (currentYear > year) {
        let age = currentYear - year
        return age;
    }

    return 'Год рождения не может быть больше текущего'
}
let year = getAge(1998);
l(year);

/*
Напишите функцию filter(), которая создаёт массив email-адресов, не попавших в чёрный список. 
В качестве аргументов функция должна принимать два массива: массив строк с исходными email-адресами 
и массив строк с email-адресами в чёрном списке.
*/
const filter = (whiteList, blackList) => {
    l(whiteList.filter(e => !~blackList.indexOf(e)))
    return whiteList = whiteList.filter(e => !~blackList.indexOf(e));
}
/*
Внутри этой функции проверяем, есть ли очередной элемент в массиве arr: вернёт ли indexOf() что-то отличное от -1. 
Для короткой записи такой проверки удобно использовать побитовое НЕ ~ которое даст 0 в единственном случае, когда операнд равен -1.
 Его отрицание ! даст true в том же единственном случае. Итого эта функция вернёт true только, если элемент не найден в массиве arr.
*/
// Массив с почтовыми адресами:
let whiteList = ['my-email@gmail.ru', 'jsfunc@mail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru', 'goodday@day.ru'];
// Массив с почтовыми адресами в чёрном списке:
let blackList = ['jsfunc@mail.ru', 'goodday@day.ru'];
let whiteListEmail = filter(whiteList, blackList);
l(whiteListEmail)
/*
Создайте функцию arrSort(), аргументом (параметром) которой будет массив. 
Задача функции — сделать сортировку элементов переданного массива по возрастанию. 
Функция должна вернуть отсортированный массив, а результат выполнения функции должен быть выведен в консоль с помощью console.log.
*/
const arrsort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

            }

        }
    }
    return arr;
}
let sortArr = arrsort([2, 5, 1, 3, 4]);
l(sortArr);
/*Функция которая вычисляет и возвращает стоимость корзины товаров после применения всех скидок. 
В качестве аргументов функция принимает 3 параметра:
Общая сумма корзины
Количество товаров в корзине
Промокод (по умолчанию null)
Правила и порядок (порядок важен!) начисления скидок:
Если промокод равен 'ДАРИМ300', то из суммы вычитается 300 рублей. При этом если сумма меньше 300 рублей, то итоговая стоимость будет 0.
При количестве товаров в корзине ≥10 применяется скидка 5% ко всей сумме
При сумме, превышающей 50 000, применяется скидка 20% к сумме превышения (то есть к разнице суммы корзины и 50 000)
Если промокод равен 'СКИДКА15', то ко всей сумме применяется скидка 15%, но только если сумма ≥20 000
Каждая следующая скидка должна проверяться и применяться к сумме после применения предыдущих скидок.
*/
function getDiscountCarts(totalCart, totalItems, promo = null) {
    if (promo === 'ДАРИМ300') {
        totalCart -= 300;

        if (totalCart < 0) {
            totalCart = 0;
        }
    }
    if (totalItems >= 10) {
        totalCart *= 0.95;
    }
    if (totalCart > 50000) {
        totalCart -= (totalCart - 50000) * 0.2;
    }
    if (promo === 'СКИДКА15' && totalCart >= 20000) {
        totalCart *= 0.85;
    }

    return totalCart;;
}

export default getDiscountCarts;
  