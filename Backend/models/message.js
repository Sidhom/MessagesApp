var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    private: {
        type: Boolean,
        required: true
    },
});

module.exports = mongoose.model('Message', MessageSchema);