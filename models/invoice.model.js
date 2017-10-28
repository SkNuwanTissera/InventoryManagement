'use strict';

const mongoose = require('mongoose');
const bcrypt   = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

const InvoiceSchema = new Schema({
    vatNo: {
        type: String,
        required: true
    },
    cusName: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
    

});

const Invoice = mongoose.model('Invoice', InvoiceSchema);

module.exports = Invoice;