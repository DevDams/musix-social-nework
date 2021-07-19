const express = require('express')
const cors = require('cors')
const app = express()
const database = require('./database/database')
const authRoute = require('./routes/authRoute')

app.use(cors())
app.use(express.urlencoded({extended :true}))
app.use(express.json())

const PORT = process.env.PORT || 5001


app.use('/api/auth', authRoute)


app.listen(PORT, (err)=>{
 if (err )throw err
 console.log(`App runing on port ${PORT}`)
})

database.connect()