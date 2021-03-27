var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    destinationId: {
        type: String,
        required: false
    },
    senderId: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Message', MessageSchema);