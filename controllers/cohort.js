const { Cohort } = require('../models/Models')

module.exports = {
    index: (req, res) => {
        Cohort.find({})
            .then(cohorts => {
                res.json(cohorts)
            })
    },
    show: (req, res) => {
        Cohort.findOne({ cohort: req.params.cohort })
            .then(cohort => {
                res.json(cohort)
            })
    }
}