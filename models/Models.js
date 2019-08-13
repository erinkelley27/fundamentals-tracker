const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const Student = new Schema({
    name: String,
    initials: String,
    cohort: Number,
    fundamentalsScore: Number,
    javascriptScore: Number,
    reviewsAttended: Number,
    withdrawn: Boolean,
    graduated: Boolean
})

const Cohort = new Schema({
    cohort: Number,
    fundamentalsAvg: Number,
    javascriptAvg: Number,
    withdrawalRate: Number,
    graduationRate: Number,
    students: [Student]
})

module.exports = {
    Cohort: mongoose.model('Cohort', Cohort),
    Student: mongoose.model('Student', Student)
}