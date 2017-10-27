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
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
    },
    age:{
        type:String
    },
    height:{
        type:String
    },
    weight:{
        type:String
    },
    email: {
        type: String,

    },
    userType: {
        type: String,

    },
    hospital: {
        type: String
    },
    bloodGroup:{
        type: String
    }
 ,

});

const Invoice = mongoose.model('User', InvoiceSchema);

module.exports = Invoice;