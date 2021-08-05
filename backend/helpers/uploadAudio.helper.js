const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/audios')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname)
    }
})

const filefilter = (req, file, cb) => {
    if (file.mimetype === 'audio/mpeg' || file.mimetype === 'audio/mp3' || file.mimetype === 'audio/mp4' || file.mimetype === 'audio/ma4' || file.mimetype === 'audio/wav' || file.mimetype === 'audio/ogg') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const uploadAudio = multer({
    storage: storage,
    fileFilter: filefilter
})


module.exports = uploadAudio