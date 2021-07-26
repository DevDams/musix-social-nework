const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const database = require('./database/database')
const authRoute = require('./routes/authRoute')
const userRoute = require('./routes/userRoute')
const postRoute = require('./routes/postRoute')



app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next()
})
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

const PORT = process.env.PORT || 5001


app.use('/api/auth', authRoute)
app.use('/api', userRoute)
app.use('/api', postRoute)

app.listen(PORT, (err) => {
    if (err) throw err
    console.log(`App runing on port ${PORT}`)
})

database.connect()