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
        return res.status(201).json({ message: "Quelque chose s'est mal passé. Veillez réessayer" })
    }
})

module.exports = router