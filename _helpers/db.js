const config = require('config.js');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || config.connectionString, {useNewUrlParser: true, useUnifiedTopology: true}).then((res)=>{
    console.log("DB Connected")
  });
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model')
};