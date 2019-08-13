const express = require('express')
const router = express.Router()
const cohortController = require('../controllers/cohort')

router.get('/', cohortController.index)
router.get('/:cohort', cohortController.show)

module.exports = router