const express = require('express')
const app = express()

app.use('/api/cohorts', require('./routes/cohort'))

app.listen(4000, () => {
    console.log("app listening on port 4000");
});