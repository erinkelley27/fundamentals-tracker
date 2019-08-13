const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.use('/api/cohorts', require('./routes/cohort'))

app.listen(4000, () => {
    console.log("app listening on port 4000");
});