var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var appointmentSchema = new Schema (
    {
        client: {
            type: String
        },
        advisor: {
            type: String
        },
        subject: String,
        address: Number,
        time: String,
        date: String,
        details: String
    }
)

module.exports = mongoose.model('appointment', appointmentSchema);