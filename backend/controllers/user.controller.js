const User = require('../models/user.model')

module.exports = class UserController {

    // GET NEW
    static async getUser(data) {
        const user = User.findById(data)
        if (user) {
            return user
        } else {
            return { message: "user not found" }
        }
    }

    // UPDATE USER
    static async updateUser(data) {
        const userId = data.id
        if (user) {
            if (data.username !== '' && data.pseudo !== '' && data.bio !== '') {
                const user = User.updateOne({ _id: userId }, { $set: { username: data.username, pseudo: data.pseudo, bio: data.bio } })
                return user
            }
            if (data.username !== '') {
                const user = User.updateOne({ _id: userId }, { $set: { username: data.username, pseudo: data.pseudo, bio: data.bio } })
                return user
            }
            if (data.pseudo !== '') {
                const user = User.updateOne({ _id: userId }, { $set: { username: data.username, pseudo: data.pseudo, bio: data.bio } })
                return user
            }
            if (data.bio !== '') {
                const user = User.updateOne({ _id: userId }, { $set: { username: data.username, pseudo: data.pseudo, bio: data.bio } })
                return user
            }
        } else {
            return { message: "Désolé, vous ne pouvez pas modifier ce profil" }
        }
    }
}