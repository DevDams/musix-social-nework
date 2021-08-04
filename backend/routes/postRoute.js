const express = require('express')
const router = express.Router()
const PostController = require('../controllers/post.controller')
const uploadAudio = require('../helpers/uploadAudio.helper')


// CREATE NEW AUDIO
router.post('/post', uploadAudio.single('file'), async (req, res) => {
    const { success } = await PostController.addPost(req.file, req.body)
    if (success) {
        return res.status(200).json({ message: "Audio ajouté avec succes !" })
    } else {
        return res.status(201).json({ message: "Quelque chose s'est mal passé. Veuillez réessayer" })
    }
})


// GET ALL POST
router.get('/user/post/:id', async (req, res) => {
    const userId = req.params.id
    const post = await PostController.getPost(userId)
    if (post !== null) {
        res.status(200).json(post)
    } else {
        res.status(404).json({ message: 'User not found' })
    }
})

module.exports = router