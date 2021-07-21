const User = require('../models/user.model')
const bcrypt = require('bcrypt')

module.exports = class UserController {

    // CREATE NEW USER
    static async addUser(data) {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(data.password, salt)
        const userData = {
            name: data.name,
            birth: data.birth,
            telephone: data.telephone,
            email: data.email,
            password: hashedPassword,
            pseudo: data.pseudo
        }
        const user = new User({...userData})
        const output = await user.save()
        if (output) {
            return { success: true }
        } else {
            return { success: false }
        }
    }

    // LOGIN USER
    static async getUser(data) {
        const user = await User.findOne({pseudo: data.pseudo})
        if (!user) {
            return { message: 'Nom d\'utilisateur ou mot de passe incorrect' }
        }
        const validate = await bcrypt.compare(data.password, user.password)
        if (!validate) {
            return { message: 'Mot de passe incorrect' }
        }

        const { password, ...others } = user._doc
        return others
    }
}