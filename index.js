class Student {
    constructor(name, surname, email, age, sex, avgScore, phone = '', patronymic = '', imgUrl = '') {
        this.name = name
        this.surname = surname
        this.patronymic = patronymic
        this.age = age
        this.sex = sex
        this.avgScore = avgScore
        this.email = email
        this.imgUrl = imgUrl
        this.phone = phone
    }
    
}

const SexEnum = {
    0: 'Male',
    1: 'Female',
}

const tableBody = document.getElementById('stTBody')

const modalWindow = document.getElementById('modal')

const studentSurnameInput = document.getElementById('studSurname'),
    studentNameInput = document.getElementById('studName'),
    studentPatronimycInput = document.getElementById('studPatronomic'),
    studentAgeInput = document.getElementById('studAge'),
    studentSexInput = document.getElementById('studSex'),
    studentAvgScoreSelect = document.getElementById('studAverageScore'),
    addStudentInGroupButton = document.getElementById('addStudentInGroup'),
    showAllStudentsButton = document.getElementById('showAllStudents'),
    showStudentsInAgeButton = document.getElementById('showStudentsInAge'),
    showStudentsInScoreButton = document.getElementById('showStudentsInScore'),
    showStudentsInSexButton = document.getElementById('showStudentsInSex'),
    studentImageUrlInput = document.getElementById('studImage'),
    studentEmailInput = document.getElementById('studEmail')

const checkAgeInput = document.getElementById('checkAge'),
    checkScoreInput = document.getElementById('checkScore'),
    checkSexSelect = document.getElementById('checkSex')

const showAverageScoreOfStudents = document.getElementById('showAverageScoreOfStudents')

const group = [
    new Student('Name', 'Surname', "example@email.com", 20, SexEnum[0], 9, '+7 (988) 777-66-55', 'Patronymic', 'https://via.placeholder.com/500x500'),
    new Student('Name', 'Surname', "example@email.com", 20, SexEnum[0], 9, '+7 (988) 777-66-55', 'Patronymic', 'https://via.placeholder.com/500x500'),
    new Student('Name', 'Surname', "example@email.com", 20, SexEnum[0], 9, '+7 (988) 777-66-55', 'Patronymic', 'https://via.placeholder.com/500x500'),
    new Student('Name', 'Surname', "example@email.com", 20, SexEnum[0], 9, '+7 (988) 777-66-55', 'Patronymic', 'https://via.placeholder.com/500x500'),
    new Student('Name', 'Surname', "example@email.com", 20, SexEnum[0], 9, '+7 (988) 777-66-55', 'Patronymic', 'https://via.placeholder.com/500x500'),
    new Student('Name', 'Surname', "example@email.com", 20, SexEnum[0], 9, '+7 (988) 777-66-55', 'Patronymic', 'https://via.placeholder.com/500x500'),
    new Student('Name', 'Surname', "example@email.com", 25, SexEnum[1], 6, '+7 (988) 777-66-55', 'Patronymic', 'https://via.placeholder.com/500x500'),
    new Student('Name', 'Surname', "example@email.com", 25, SexEnum[1], 6, '+7 (988) 777-66-55', 'Patronymic', 'https://via.placeholder.com/500x500'),
    new Student('Name', 'Surname', "example@email.com", 25, SexEnum[1], 6, '+7 (988) 777-66-55', 'Patronymic', 'https://via.placeholder.com/500x500'),
    new Student('Name', 'Surname', "example@email.com", 25, SexEnum[1], 6, '+7 (988) 777-66-55', 'Patronymic', 'https://via.placeholder.com/500x500'),
    new Student('Name', 'Surname', "example@email.com", 25, SexEnum[1], 5, '+7 (988) 777-66-55', 'Patronymic', 'https://via.placeholder.com/500x500'),
    new Student('Name', 'Surname', "example@email.com", 25, SexEnum[1], 5, '+7 (988) 777-66-55', 'Patronymic', 'https://via.placeholder.com/500x500'),
    new Student('Name', 'Surname', "example@email.com", 25, SexEnum[1], 5, '+7 (988) 777-66-55', 'Patronymic', 'https://via.placeholder.com/500x500'),
    new Student('Name', 'Surname', "example@email.com", 25, SexEnum[1], 5, '+7 (988) 777-66-55', 'Patronymic', 'https://via.placeholder.com/500x500'),
    new Student('Name', 'Surname', "example@email.com", 25, SexEnum[1], 5, '+7 (988) 777-66-55', 'Patronymic', 'https://via.placeholder.com/500x500'),
]


function makeTableRows(students) {
    let counter = 0
    const studentRows = students.map(student => {
        return makeTableRow(counter++, student)
    })
    return studentRows
}

function calculateAvgScore(students) {
    let sum = 0
    for(let i = 0; i < students.length; i++) {
        sum += students[i].avgScore
    }
    
    return Math.round(sum / students.length * 100) / 100
}

function makeTableRow(id, student) {
    const row = document.createElement("tr")

    const id_td = document.createElement('td')
    id_td.innerHTML = id

    const name_td = document.createElement('td')
    name_td.innerHTML = student.name

    const surname_td = document.createElement('td')
    surname_td.innerHTML = student.surname

    const patronymic_td = document.createElement('td')
    patronymic_td.innerHTML = student.patronymic

    const age_td = document.createElement('td')
    age_td.innerHTML = student.age

    const sex_td = document.createElement('td')
    sex_td.innerHTML = student.sex

    const avg_score_td = document.createElement('td')
    avg_score_td.innerHTML = student.avgScore
    
    const email_td = document.createElement('td')
    email_td.innerHTML = student.email

    const imageUrl_td = document.createElement('td')
    const image = document.createElement('img')
    image.src = student.imgUrl
    image.alt = `${student.name} ${student.surname} ${student.patronymic}`
    image.style.width = '100px'
    image.style.height = '100px'
    imageUrl_td.append(image)

    row.append(id_td, name_td, surname_td, patronymic_td, age_td, sex_td, avg_score_td, email_td, imageUrl_td)

    return row
}

function makeStudent(name, surname, patronymic, age, sex, avgScore, email, phone, imageUrl) {
    return new Student(name, surname, email, age, sex, avgScore, phone, patronymic, imageUrl)
}

showAllStudentsButton.addEventListener('click', (e) => {
    tableBody.innerHTML = ''
    const tableRows = makeTableRows(group)
    showAverageScoreOfStudents.innerHTML = calculateAvgScore(group)
    tableBody.append(...tableRows)
})

showStudentsInAgeButton.addEventListener('click', (e) => {
    if(checkAgeInput.value.length == 0)
        return
    const filteredStudents = group.filter(student => student.age < checkAgeInput.value)
    const tableRows = makeTableRows(filteredStudents)
    showAverageScoreOfStudents.innerHTML = calculateAvgScore(filteredStudents)
    tableBody.append(...tableRows)
})

showStudentsInScoreButton.addEventListener('click', e => {
    if(checkScoreInput.value.length == 0)
        return
    const filteredStudents = group.filter(student => student.avgScore < checkScoreInput.value)
    const tableRows = makeTableRows(filteredStudents)
    showAverageScoreOfStudents.innerHTML = calculateAvgScore(filteredStudents)
    tableBody.append(...tableRows)
})

showStudentsInSexButton.addEventListener('click', e => {
    const filteredStudents = group.filter(student => student.sex == checkSexSelect.value)
    const tableRows = makeTableRows(filteredStudents)
    showAverageScoreOfStudents.innerHTML = calculateAvgScore(filteredStudents)
    tableBody.append(...tableRows)
})

addStudentInGroupButton.addEventListener('click', e => {
    const hasLetter = /^[A-Za-z]+$/
    const isEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if(!hasLetter.test(studentNameInput) || !hasLetter.test(studentNameInput)) {
        showModal("Заполнены не все ячейки")
    }
    else if(!isEmail.test(studentEmailInput.value)){
        showModal("Неверный Email")
    }
    else if(studentAgeInput.value < 14) {
        showModal("Минимальный возрасть для поступления 14 лет")
    }
    else {
        const newStudent = makeStudent(
            studentNameInput.value, 
            studentSurnameInput.value, 
            studentPatronimycInput.value, 
            studentAgeInput.value,
            studentSexInput.value,
            studentAvgScoreSelect.value,
            studentEmailInput.value,
            studentImageUrlInput.value
            )

        group.push(newStudent)
                
        studentNameInput.value = ''
        studentSurnameInput.value = ''
        studentPatronimycInput.value = ''
        studentAgeInput.value = ''
        studentSexInput.value = ''
        studentAvgScoreSelect.value = ''
        studentImageUrlInput.value = ''
        studentEmailInput.value = ''

        showModal(`Студент ${newStudent.name} ${newStudent.surname} ${newStudent.patronymic} добавлен в группу`)
    }
})

function showModal(text) {
    const paragraph = document.createElement('p').innerHTML = text
    modalWindow.append(paragraph)

    modalWindow.classList.remove('nodispl')
    modalWindow.classList.add('rollup')

    setTimeout(() => {
        modalWindow.classList.remove('rollup')
        modalWindow.classList.add('nodispl')
    }, 1000)
}