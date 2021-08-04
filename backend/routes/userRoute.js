const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user.controller')
const uploadImage = require('../helpers/uploadImage.helper')
// const uploadAudio= require('../helpers/uploadAudio.helper')


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


// UPDATE USER
router.post('/user/update', async (req, res) => {
    const user = await UserController.updateUser(req.body)
    if (user) {
        res.status(200).json(user)
    } else {
        res.status(201).json({ message: "Oups... Quelque chose s'est mal passé, veillez rééssayer" })
    }
})


// UPDATE USER BANNER PIC
router.post('/user/upload/banner/:id', uploadImage.single('file'), async (req, res) => {
    const user = await UserController.updateBanner(req.file, req.params.id)
    if (user) {
        res.status(200).json(user)
    } else {
        res.send(201).json({ message: "Oups... Quelque chose s'est mal passé, veillez rééssayer" })
    }
})


// UPDATE USER PROFIL PIC
router.post('/user/upload/profilpic/:id', uploadImage.single('file'), async (req, res) => {
    const user = await UserController.updateProfilPic(req.file, req.params.id)
    if (user) {
        res.status(200).json(user)
    } else {
        res.send(201).json({ message: "Oups... Quelque chose s'est mal passé, veillez rééssayer" })
    }
})
// UPDATE USER AUDIO
// router.post('/user/upload/audio/:id', uploadAudio.single('file'), async (req, res) => {
//     const user = await UserController.updateAudio(req.file, req.params.id)
//     if (user) {
//         res.status(200).json(user)
//     } else {
//         res.send(201).json({ message: "Oups... Quelque chose s'est mal passé, veillez rééssayer" })
//     }
// })


module.exports = router