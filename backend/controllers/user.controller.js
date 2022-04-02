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
    /* static async updateUser(data) {
        const userId = data.id
        const findUser = User.findById(userId)
        if (findUser) {
            if (data.username !== '' && data.pseudo !== '' && data.bio !== '') {
                const user = User.updateOne({ _id: userId }, { $set: { profilname: data.username, pseudo: data.pseudo, bio: data.bio } })
                return user
            } // rules for username
            if (data.username !== '' && data.pseudo !== '' && data.bio === '') {
                const user = User.updateOne({ _id: userId }, { $set: { profilname: data.username, pseudo: data.pseudo } })
                return user
            }
            if (data.username !== '' && data.pseudo === '' && data.bio !== '') {
                const user = User.updateOne({ _id: userId }, { $set: { profilname: data.username, bio: data.bio } })
                return user
            }
            if (data.username !== '' && data.pseudo === '' && data.bio === '') {
                const user = User.updateOne({ _id: userId }, { $set: { profilname: data.username } })
                return user
            } // rule for pseudo
            if (data.pseudo !== '' && data.username === '' && data.bio !== '') {
                const user = User.updateOne({ _id: userId }, { $set: { pseudo: data.pseudo, bio: data.bio } })
                return user
            }
            if (data.pseudo !== '' && data.username !== '' && data.bio === '') {
                const user = User.updateOne({ _id: userId }, { $set: { pseudo: data.pseudo, profilname: data.username } })
                return user
            }
            if (data.pseudo !== '' && data.username === '' && data.bio === '') {
                const user = User.updateOne({ _id: userId }, { $set: { pseudo: data.pseudo } })
                return user
            } // rule for bio
            if (data.bio !== '' && data.username === '' && data.pseudo !== '') {
                const user = User.updateOne({ _id: userId }, { $set: { pseudo: data.pseudo, bio: data.bio } })
                return user
            }
            if (data.bio !== '' && data.username !== '' && data.pseudo === '') {
                const user = User.updateOne({ _id: userId }, { $set: { bio: data.bio, profilname: data.username } })
                return user
            }
            if (data.bio !== '' && data.username === '' && data.pseudo === '') {
                const user = User.updateOne({ _id: userId }, { $set: { bio: data.bio } })
                return user
            }
        } else {
            return { message: "Désolé, vous ne pouvez pas modifier ce profil" }
        }
    } */


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