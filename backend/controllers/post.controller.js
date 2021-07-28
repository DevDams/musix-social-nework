const Post = require('../models/post.model')

module.exports = class PostController {
    static async addPost(audio, desc) {
        const postData = {
            userId: desc.userId,
            description: desc.description,
            audio: audio.filename
        }
        const post = new Post({...postData})
        const output = await post.save()
        if (output) {
            return { success: true }
        } else {
            return { success: false }
        }
    }

    static async getPost(data) {
        const post = Post.find({ "userId": data })
        if (post) {
            return post
        } else {
            return { message: "user not found" }
        }
    }
}