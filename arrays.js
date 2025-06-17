const l = (log) => {
    console.log(log);
}
let arr = [1, 'cat', 777, 'ararat']
arr.forEach((e, i)=>{
    l(i+1 +") "+ e + " тип данных " + typeof e)
})
l( `${arr}  " тип данных "  ${typeof arr}`)

let alphabet = [];

//добавить в конец массива
alphabet.push('Г');
alphabet.push('Д');
alphabet.push('Е', 'Ё', 'Ж', 'З');

l(alphabet)

//добавить в начало массива

alphabet.unshift('В');
alphabet.unshift('А', 'Б');
l(alphabet)
l(alphabet.length)