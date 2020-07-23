const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    // name: {
    //     type: String,
    //     require: true
    // },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    }
})


userSchema.methods.encryptPassword = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password)
}

const User = mongoose.model('User', userSchema)
module.exports = User