'use strict';

const mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection('mongodb://localhost:27017/inventory');

autoIncrement.initialize(connection);

const Schema = mongoose.Schema;

const MaterialSchema = new Schema({
    materialName: {
        type: String,
        required: true
    },
    materialType: {
        type: String
    },
    qty: {
        type: Number
    },
    stockedDate: {
        type: String
    },
    companyFull: [{
        type: Schema.Types.ObjectId,
        ref: 'Vendor'
    }],
    company: [{
        type: String
    }]
});

MaterialSchema.plugin(autoIncrement.plugin, 'Material');
var Material = connection.model('Material', MaterialSchema);
//const Vendor = mongoose.model('Vendor', VendorSchema);

module.exports = Material;