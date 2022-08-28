var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema (
    {
        last_name: {
            type: String
        },
        first_name: {
            type: String
        },
        gender: String,
        mobile_number: Number,
        email: {type: String,
                unique: true},
        password: String,
    }
)

module.exports = mongoose.model('user', userSchema);