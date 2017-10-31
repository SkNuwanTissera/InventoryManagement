'use strict';

const mongoose = require('mongoose');
const bcrypt   = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

const InvoiceSchema = new Schema({
    id:{
        type:String,
        required: true
    },
    cusName: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    notes:{
        type: String,
        required:true
    },
    items:[{
        name: {
            type: String,
            required: true
        },
        qty:{
            type: Number,
            required: true
        },
        price:{
            type: Number,
            required: true
        }
    }],


});

const Invoice = mongoose.model('Invoice', InvoiceSchema);

module.exports = Invoice;