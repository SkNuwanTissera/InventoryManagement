'use strict';

const mongoose = require('mongoose');

var connection = mongoose.createConnection('mongodb://localhost:27017/inventory');

const Schema = mongoose.Schema;

const VendorSchema = new Schema({
    companyName: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    tp: {
        type: String
    },
    email: {
        type: String
    }
});

var Vendor = connection.model('Vendor', VendorSchema);
//const Vendor = mongoose.model('Vendor', VendorSchema);

module.exports = Vendor;