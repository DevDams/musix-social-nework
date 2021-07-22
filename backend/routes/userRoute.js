const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user.controller')
const upload = require('../controllers/update-controller')
const User = require('../models/user.model')


// GET USER INFO
router.get('/user/:id', async(req, res) => {
    const userId = req.params.id
    const user = await UserController.getUser(userId)
    if (user !== null) {
        res.status(200).json(user)
    } else {
        res.status(404).json({ message: 'User not found' })
    }
})


// UPDATE USER INFO
router.post('/update', upload.single('file'), (req, res) => {
    if (req.file === undefined) {
        return ''
    }

    const imageUrl = `http://localhost:5001/file/${req.file.filename}`
    return res.send(imageUrl)
})


module.exports = router