const mongoose = require('mongoose');

const urlStatus = mongoose.Schema({
    url: {
        type: String 
    }, 
    status: {
        type: Boolean
    }
})

module.exports = mongoose.model('urlStatus1', urlStatus)