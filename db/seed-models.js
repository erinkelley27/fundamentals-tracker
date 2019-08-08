const { Cohort, Student } = require('../models/Models')

const cohortData = require('./data/cohorts.json')
const studentData = require('./data/students.json')

Cohort.deleteMany({})
    .then(() => {
        Cohort.create(cohortData)
            .then(cohorts => {
                console.log(cohorts)
            })
            .catch(err => {
                console.log(err)
            })
    })

Student.deleteMany({})
    .then(() => {
        Student.create(studentData)
            .then(students => {
                console.log(students)
            })
            .catch(err => {
                console.log(err)
            })
    })