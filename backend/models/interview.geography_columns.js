const mongoose = require('mongoose');

const tables = mongoose.Schema({
    table_name: {
        type: String 
    },
    colume_name: {
        type: String 
    }, 
    distinct_value: {
        type: String,
        unique: true
    },
    user_input : {
        type: String, 
        default : null
    }
})

module.exports = mongoose.model('interview.geography_columns', tables);