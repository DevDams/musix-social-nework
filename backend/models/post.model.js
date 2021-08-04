const mongoose = require('mongoose')


const PostSchema = new mongoose.Schema({
    userId: {
        // get all the current user information with this method
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    description: {
        type: String
    },
    audio: {
        type: String,
        required: true
    },
    likes: {
        type: Array,
        default: []
    }
}, { timestamps: true })

module.exports = mongoose.model('Post', PostSchema)