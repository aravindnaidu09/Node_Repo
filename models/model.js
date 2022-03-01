const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    firstName: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    },
    address: {
        line: {
            required: true,
            type: String
        },
        state: {
            required: true,
            type: String
        },
        country: {
            required: true,
            type: String
        }
    }
});

module.exports = mongoose.model('Data', dataSchema);