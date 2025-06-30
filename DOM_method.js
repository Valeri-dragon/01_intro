//document.querySelector('body').parentNode - ссылается на родительский элемент //html
//document.querySelector('body').children- хранит список вложенных элементов
/*DOM
отрисовывается из HTML кода
который браузер получает перед загрузкой страницы
из JavaScript
DOM-элементы, которые создаются из JavaScript
let time = document.createElement("time");
document.body.append(time) // вставляет элемент в конец элемента, у которого мы вызвали метод вставки
document.body.prepend(time) // вставляет элемент в начало элемента, у которого мы вызвали метод вставки
document.body.before(time)  // добавит элемент перед элементом, для которого вызвали метод
document.body.after(time)  // добавит элемент после элемента, для которого вызвали метод
let strike = document.createElement("strike")
time.replaceWith(strike)  // заменяет один элемент на второй
strike.remove() // удаляет элемент из дома
time.innerHTML = '<div>27/06/2025</div>'  //вставляет html код в элемент
time.textContent = '28/06/2025'  //вставляет текст в элемент
time.id='time' // установка атрибута id у элемента
time.removeAttribute('id') // удаление атрибута id у элемента
time.classList.add('time','date') // добавление класса у элемента
time.classList.remove('date') // удаление класса у элемента
time.classList.toggle('date') // добавление/удаление  класса у элемента например при клике
time.classList.contains('date') // проверка наличия класса у элемента 
*/
/*События*/
/**
 * click — нажатие левой кнопки мыши
 * input – изменение текста в поле
 * Справочник по событиям https://developer.mozilla.org/ru/docs/web/events
 * elements.addEventListener('click', ()=>{
 * })
 */