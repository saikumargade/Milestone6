const mongoose = require('mongoose');
const newsSchema = mongoose.Schema({
    title: String,
    url: String,
    time: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('new',newsSchema);