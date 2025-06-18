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
    for (let index in cards){
        let card = cards[index];
        if(card === wantedCard){
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