const { Cohort } = require('../models/Models')

Cohort.find({})
    .then(cohorts => {
        cohorts.forEach(cohort => {
            let fundamentalsTotal = 0
            let javascriptTotal = 0
            let withdrawalRate = 0
            let graduationRate = 0
            cohort.students.forEach(student => {
                if (student.fundamentalsScore) {
                    fundamentalsTotal += student.fundamentalsScore
                }
                if (student.javascriptScore) {
                    javascriptTotal += student.javascriptScore
                }
                if (student.withdrawn) {
                    if (student.withdrawn === true) {
                        withdrawalRate++
                    }
                }
                if (student.graduated) {
                    if (student.graduated === true) {
                        graduationRate++
                    }
                }
            })
            cohort.fundamentalsAvg = fundamentalsTotal / cohort.students.length
            cohort.javascriptAvg = javascriptTotal / cohort.students.length
            cohort.withdrawalRate = parseInt((withdrawalRate / cohort.students.length) * 100)
            cohort.graduationRate = parseInt((graduationRate / cohort.students.length) * 100)
            console.log('The fundamentals avg is: ' + cohort.fundamentalsAvg)
            console.log('The javascript avg is: ' + cohort.javascriptAvg)
            console.log('The withdrawal rate is: ' + cohort.withdrawalRate + '%')
            console.log('The graduation rate is: ' + cohort.graduationRate + '%')
            cohort.save()
        })
    })
    .catch(err => {
        console.log(err)
    })