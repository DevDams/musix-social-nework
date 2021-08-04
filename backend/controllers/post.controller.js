const Post = require('../models/post.model')
const User = require('../models/user.model')

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
        const post = await Post.find({ "userId": data })
        if (post) {
            return post
        } else {
            return { message: "user not found" }
        }
    }

    static async likePost(postId, userId) {
        const post = await Post.findById(postId)
        if (!post.likes.includes(userId)) {
            await post.updateOne({ $push: { likes: userId } })
            return { like: true }
        } else {
            await post.updateOne({ $pull: { likes: userId } })
            return { like: false }
        }
    }

    static async getTimeline() {
        // The find().populate('userId') is use to concatenate the post model with the user model
        const userPost = await Post.find().populate('userId')
        if (userPost) {
            return userPost
        } else {
            return { message: "No post found" }
        }
    }
}