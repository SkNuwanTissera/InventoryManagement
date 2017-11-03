'use strict';

const mongoose = require('mongoose');
const bcrypt   = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

const InvoiceSchema = new Schema({
    id:{
        type:String,

    },
    pono:{
        type:String
    },
    cusName: {
        type: String

    },
    date: {
        type: Date,

    },
    notes:{
        type: String,

    },
    item1:{
        name: {
            type: String,

        },
        qty:{
            type: Number,

        },
        price:{
            type: Number,

        }
    },


});

const Invoice = mongoose.model('Invoice', InvoiceSchema);

module.exports = Invoice;