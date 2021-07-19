const express = require('express')

const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.urlencoded({extended :true}))
app.use(express.json())

const port = process.env.PORT || 5001

app.get('/user', (req,res) => {
    res.status(200).json({"bont": "zboeuifvaozeivbiezrav"})
})

app.post('/signup', (req,res) => {
    console.log("body", req.body)
   res.status(200).json({sucess:true,info:"post"})
})

app.listen(port, (err)=>{
 if (err )throw err

 console.log(`App runing on port ${port}`)
})