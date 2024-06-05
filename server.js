const express = require('express')

const app = express()
const PORT = 5000;
app.get('/', (req, res) => {

    res.send('our api testing works for us: cheers :)')

})
app.listen(PORT, (err, data) => {

    if(err) {

        console.log(err)

    }else {

        console.log(`server is running on port:${PORT}`)

    }

})