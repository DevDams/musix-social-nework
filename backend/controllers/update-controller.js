const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const path = require('path');

const storage = new GridFsStorage({
    url: 'mongodb://localhost:27017/musix',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    file: (req, file) => {
        const match = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif']

        const mimetype = match.indexOf(file.minetype)
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype === -1 && extname === -1) {
            const filename = `${Date.now()}-any-name-${file.originalname}`
            return filename
        }

        return {
            bucketName: 'photo',
            filename: `${Date.now()}-any-name-${file.originalname}`
        }
    }
})
const upload = multer({ storage }).single('file')


module.exports = upload;