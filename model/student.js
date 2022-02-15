class Student {
    constructor(name, surname, age, sex, avgScore, patronymic = '') {
        this.name = name
        this.surname = surname
        this.patronymic = patronymic
        this.age = age
        this.sex = sex
        this.avgScore = avgScore
    }
    
}

const SexEnum = {
    0: 'Male',
    1: 'Female',
}

module.exports = {
    Student,
    SexEnum
}