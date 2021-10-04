const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tempSchema = new Schema({
    tempDegree : {
        type : Number
    }
});

module.exports = mongoose.model('temperature',tempSchema);