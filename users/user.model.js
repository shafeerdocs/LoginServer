const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    role: { type: String, required: true },
    loggedIn: { type: Boolean, default: false,required: true},
    loginHistory: { type: Date, default: Date.now , required: true},
    logoutHistory: { type: Date, default: Date.now , required: true},
    createdDate: { type: Date, default: Date.now }
});



module.exports = mongoose.model('User', schema);