const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user.controller')


// GET USER INFO
router.get('/user/:id', async(req, res) => {
    const userId = req.params.id
    const user = await UserController.getUser(userId)
    if (user !== null) {
        res.status(200).json(user)
        console.log(user);
    } else {
        res.status(404).json({ message: 'User not found' })
    }
})


// UPDATE USER
router.post('/user/update', async (req, res) => {
    const user = await UserController.updateUser(req.body)
    res.status(200).json(user)
})



module.exports = router