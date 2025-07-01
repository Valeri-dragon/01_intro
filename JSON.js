/**
 * JSON — текстовый формат хранения данных, который позволяет манипулировать такими структурами, как массив и объект,
 *  с помощью строкового представления. Данный формат не привязан к определённому языку,
 *  поэтому его можно использовать для передачи данных между разными сервисами в интернете. 
 * Нам он поможет избавиться от одного из главных недостатков LocalStorage — ограничения на формат хранения данных.
 * Работа с JSON в JavaScript осуществляется с помощью двух основных методов: stringify и parse.
 * 
 * Метод stringify позволяет преобразовать наши данные в строку
 * let data = { key: 'value' };
 * JSON.stringify(data);
 * результатом преобразования станет строка'{ "key": "value" }'
 * 
 * parse - используется для парсинга (чтения) JSON и преобразования его в JavaScript данные
 * let jsonData = '{"key":"value"} ';
 * JSON.parse(jsonData);
 * результатом чтения станет обычный объект {key: 'value'}
 * 
 // получение данных из LocalStorage
 const getJsonData = () => {
    return localStorage.getItem(`${container}_${title}`);
    }
 
  // запись данных в LocalStorage
const setJsonData = (data) =>{
    localStorage.setItem(`${container}_${title}`, data);
    }
  // преобразование данных из строки в объект
  const jsonToData = (data) => {
    return JSON.parse(data);
    }
 // преобразование объекта в строку
 const dataToJson = (data)=>{
    return JSON.stringify(data);
    }

    // метод addTodo будет получать в качестве параметра объект дела
    //объект будет иметь два ключа id  и  name
    const addTodo (itemList) => {
        // первым шагом будем получать текущее состояние списка дел

        let listToDo = getJsonData();

        // в случае, если данных по ключу в LocalStorage нет, то listToDo  будет содержать null
        //если listToDo имеет null, записываем туда пустой массив
        listToDo = listToDo ? jsonToData(listToDo) : [];

        //добавим дело в список дел и запишем в localStorage
        listToDo.push(itemList);
        setJsonData(dataToJson(listToDo));
        }

        // метод, удаляющий элемент из списка дел и LocalStorage
        const removeFromToDoList = (id) => {
            let listToDo = jsonToData(getJsonData());

            //создаём новый список  дел, в который перенесены все данные
            // кроме удаляемого элемента
            let newToDoList = [];
            for (let i = 0; i < listToDo.length; i++ ) {
            if(listToDo [i].id !== id) {
            newToDoList.push(listToDo[i])}
            }
}

// проведём преобразование нового списка дел в JSON и запишем в LocalStorage
setJsonData(dataToJson(newToDoList))
            }
 * 
 */