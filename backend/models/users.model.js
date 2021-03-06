const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: {
        type: String,

    },
    last_name: {
        type: String,

    },
    email: {
        type: String,

    },
    projects: {
        type: String,

    },
    currentProject: {
        type: String,

    },
    about: {
        type: String,
    },
    password: {
        type: String,
    },
    avatar: {
        type: String,
    }
}, {
    timestamps: true,
})
const User = mongoose.model('User', userSchema)
module.exports = User;