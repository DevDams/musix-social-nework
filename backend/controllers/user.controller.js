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
        const findUser = User.findById(userId)
        if (findUser) {
            if (data.username) {
                const user = User.updateOne({ _id: userId }, { $set: { profilname: data.username } })
                return user
            }
            if (data.pseudo) {
                const user = User.updateOne({ _id: userId }, { $set: { pseudo: data.pseudo } })
                return user
            }
            if (data.bio) {
                const user = User.updateOne({ _id: userId }, { $set: { bio: data.bio } })
                return user
            }
        } else {
            return { message: "Désolé, vous ne pouvez pas modifier ce profil" }
        }
    }

    // UPDATE USER BANNER
    static async updateBanner(data, id) {
        const findUser = User.findById(id)
        if (findUser) {
            if (data !== undefined ) {
                const user = User.updateOne({ _id: id }, { $set: { banner: data.filename } })
                return user
            } else {
                return { message: "Veillez choisir une image s'il vous plait"}
            }
        } else {
            return { message: "Désolé, vous ne pouvez pas modifier ce profil" }
        }
    }

    // UPDATE USER PROFIL PIC
    static async updateProfilPic(data, id) {
        const findUser = User.findById(id)
        if (findUser) {
            if (data !== undefined ) {
                const user = User.updateOne({ _id: id }, { $set: { profilpic: data.filename } })
                return user
            } else {
                return { message: "Veillez choisir une image s'il vous plait"}
            }
        } else {
            return { message: "Désolé, vous ne pouvez pas modifier ce profil" }
        }
    }
}