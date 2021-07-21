const express = require('express')
const router = express.Router()
const UserController = require('../controllers/auth.controller')


// REGISTER
router.post('/signup', async (req, res) => {
    const { success } = await UserController.addUser(req.body)
    if (success) {
        return res.status(200).json({ message: "Inscription terminé. Veillez vous connecter à votre compte" })
    } else {
        return res.status(200).json({ message: "Quelque chose s'est mal passé. Veillez réessayer" })
    }
})


// LOGIN
router.post('/login', async (req, res) => {
    const user = await UserController.getUser(req.body)
    res.status(200).json(user)
})

module.exports = router