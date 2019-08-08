const { Cohort, Student } = require('../models/Models')
const cohortData = require('./data/cohorts.json')

Cohort.find({})
    .then(cohorts => {
        cohorts.forEach(cohort => {
            Student.find({ cohort: cohort.cohort })
                .then(students => {
                    students.forEach(student => {
                        cohort.students.push(student)
                    })
                    cohort.save()
                    console.log(cohort)
                })
        })
    })
    .catch(err => {
        console.log(err)
    })
