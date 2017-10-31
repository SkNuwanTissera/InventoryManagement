'use strict';

const mongoose = require('mongoose');
const bcrypt   = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name:{
        type:String
    }

});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;