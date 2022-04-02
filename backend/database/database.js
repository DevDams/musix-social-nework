const mongoose = require('mongoose')


module.exports.connect = function() {
    mongoose.connect('mongodb://localhost:27017/projetHack', {useNewUrlParser: true, useUnifiedTopology: true})

    const db = mongoose.connection

    db.on('open', () => {
        console.log('Database connected')
    })

    db.on('error', (err) => {
        console.log(err)
    })
}

