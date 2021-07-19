const express = require('express')
const router = express.Router()
const User = require('../models/user.model')
const UserController = require('../controllers/auth.controller')
const bcrypt = require('bcrypt')


// REGISTER
router.post('/signup', async (req, res) => {
    const { success } = await UserController.addUser(req.body)
    if (success) {
        res.status(200).json({ message: "Inscription terminé. Veillez vous connecter à votre compte" })
    } else {
        res.status(200).json({ message: "Quelque chose s'est mal passé. Veillez réessayer" })
    }
})

// LOGIN
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({userName: req.body.username})
        if (!user) {
            res.status(400).json('Wrong credentials')
        }
        const validate = await bcrypt.compare(req.body.password, user.password)
        if (!validate) {
            res.status(400).json('Wrong credentials')
        }

        const { password, ...others } = user._doc
        res.status(200).json(others)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router