const l = (log, str = ' ') => {
    console.log(log, str);
}
let computer = {
    usbPortCount: 8,
    chipset: 'AMD X570',
    coreCount: 8,
    cpuManufacturer: 'AMD',
    socket: 'AM4',
    videoCardModel: 'NVidia GeForce GTX 1060',
    videoMemory: 4096,
    ramType: 'DDR4',
    ramVolume: 8192,
    ramFrequency: 3200,
    price: 100000,
}

let values = Object.values(computer); // значения свойств в виде массива
l('\n\nVALUES\n')
l(values)
let keys = Object.keys(computer);// список наименования свойств в массиве
l('\n\nKEYS\n')
l(keys)
let entries = Object.entries(computer); // массив с массивами, в которых 1-й элемент имя свойства, 2-й элемент значение  свойства
l('\n\ENTRIES\n')
l(entries);
l('\n\nVALUE\n')
for (let value of values) {
   
    l(value)
}
l('\n\nKEY\n')
for (let key of keys) {

    l(`${key}: ${computer[key]}`)
}
l('\n\ENTRY[0]:ENTRY[1]\n')
for (let entry of entries) {

    l(`${entry[0]}: ${entry[1]}`);
}
//так же, но более читаемо
l('\n\key: value\n')
for (let [key, value] of entries) {

    l(`${key}:${value}`)
}

/*УСТАРЕВШИЙ МЕТОД, КОГДА НЕ БЫЛО МЕТОДОВ Object.values, Object.keys, Object.entries*/
l('\nУСТАРЕВШИЙ МЕТОД, КОГДА НЕ БЫЛО МЕТОДОВ Object.values, Object.keys, Object.entries')
for (let key in computer) {
    if(!computer.hasOwnProperty(key)){
        continue;
    }
    l('\n'+key+':' +' '+computer[key])
}