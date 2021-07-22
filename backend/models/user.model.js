const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birth: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    pseudo: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    banner: {
        type: String,
        default: "https://media.istockphoto.com/photos/dramatic-twilight-cloudscape-sunset-sunrise-picture-id1158514405?k=6&m=1158514405&s=612x612&w=0&h=Kyo1MLQeLP-cmyVB_ucvzVL17-iKapYnlnRdrs9NV-M="
    },
    profilname: {
        type: String,
        default: "",
    },
    profilpic: {
        type: String,
        default: "https://i.guim.co.uk/img/media/cd59a408307ade77175cbef95d736687c971baf6/0_1869_5792_3473/master/5792.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1ccd7a4b4f2daa05ff26a5393439025c"
    },
    bio: {
        type: String,
        default: ""
    }
}, { timestamps: true })

module.exports = mongoose.model('User', UserSchema)

