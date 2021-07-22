const multer = require('multer')
const { GridFsStorage } = require('multer-gridfs-storage')

const storage = new GridFsStorage({
    url: 'mongodb://localhost:27017/musix',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    file: (req, file) => {
        const match = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif']

        if (match.indexOf(file.minetype) === -1) {
            const filename = `${Date.now()}-any-name-${file.originalname}`
            return filename
        }

        return {
            bucketName: 'photo',
            filename: `${Date.now()}-any-name-${file.originalname}`
        }
    }
})
const upload = multer({ storage })


module.exports = upload