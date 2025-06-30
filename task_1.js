(() => {
    const createStudentCard = (formNode) => {
        let nameUser;
        let ageUser;
        const { elements } = formNode
        Array.from(elements)
            .filter((item) => !!item.name)
            .map((element) => {
                const { name, value } = element
                if (name === 'name') {
                    nameUser = value
                    console.log(nameUser)
                }
                if (name === 'age') {
                    ageUser = value
                    console.log(ageUser)
                }
                return nameUser, ageUser
            })

        if (nameUser === '' && ageUser === '') {
            alert(`Заполните форму`)
        }
        else if (nameUser === '') {
            alert(`Введите Имя`)
        }
        else if (ageUser === '') {
            alert(`Укажите возраст`)
        }
        else {
            formNode.insertAdjacentHTML('afterend', `
                <div>
                <h2>${nameUser}</h2>
                <p>${ageUser}</p>
                </div>
                `)
        }
    }



    let allStudents = [
        { name: 'Валя', age: 11 },
        { name: 'Таня', age: 24 },
        { name: 'Рома', age: 21 },
        { name: 'Надя', age: 34 },
        { name: 'Антон', age: 7 }
    ]
    const createStudentsList = (listArr) => {
        let div = document.createElement('div');
        div.classList.add('students__container');

        document.body.append(div);

        let list = document.createElement('ul');
        div.appendChild(list);

        for (let student of listArr) {
            let item = document.createElement('li');
            list.appendChild(item);

            let head = document.createElement('h2');
            head.textContent = student.name;
            item.appendChild(head);

            let span = document.createElement('span');
            span.textContent = 'Возраст: ' + student.age;
            item.appendChild(span);

            div.style.backgroundColor = 'aquamarine';
            div.style.border = '3px solid black';
            div.style.padding = '15px';
        }

        return;

    };
     document.body.addEventListener('click', (e) => {
        if (e.target.id === 'btnUserData') {
            e.preventDefault()
            let parentEl = e.target.parentElement
            createStudentCard(parentEl)
        }
        if (e.target.id === 'getStudents') {
            let blockStudents = document.querySelector('.students__container')
            if (blockStudents) { 
                blockStudents.remove() 
            }
            createStudentsList(allStudents)
        }

    })

})()