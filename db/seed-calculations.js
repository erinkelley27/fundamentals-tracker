const { Cohort } = require('../models/Models')

Cohort.find({})
    .then(cohorts => {
        cohorts.forEach(cohort => {
            let fundamentalsTotal = 0
            let javascriptTotal = 0
            cohort.students.forEach(student => {
                if (student.fundamentalsScore) {
                    fundamentalsTotal += student.fundamentalsScore
                }
                if (student.javascriptScore) {
                    javascriptTotal += student.javascriptScore
                }
            })
            cohort.fundamentalsAvg = fundamentalsTotal / cohort.students.length
            cohort.javascriptAvg = javascriptTotal / cohort.students.length
            console.log('The fundamentals avg is: ' + cohort.fundamentalsAvg)
            console.log('The javascript avg is: ' + cohort.javascriptAvg)
            cohort.save()
        })
    })
    .catch(err => {
        console.log(err)
    })