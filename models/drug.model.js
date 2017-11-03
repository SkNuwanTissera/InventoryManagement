'use strict';

const mongoose = require('mongoose');
const autoIncrement =require('mongoose-auto-increment');

var connection = mongoose.createConnection('mongodb://localhost:27017/inventory');

autoIncrement.initialize(connection);

const Schema = mongoose.Schema;

const DrugSchema = new Schema({

    drugName: {
        type: String

    },

    drugType: {  // generic and specific
        type: String

    },

    manufacturer: {
        type: String

    },

    genericName :{
        type: String

    },

    dateOfManufacture :{
        type: String

    },

    category :{ //dangerous or not
        type: String

    },

    dateOfExp :{
        type: String

    },

    quantity :{
             type : Number

    },

    batchNo :{
            type : String

    },

    unitPrice :{
            type : Number

    },
    price:{
      type: Number
    },

    vendors: [{
    type: String
}]


});

DrugSchema.plugin(autoIncrement.plugin,'Drug');
var Drug = connection.model('Drug', DrugSchema);

module.exports = Drug;


//Vendors was commented because vendor obj was referred to the vendor Model and data wasnt getting added to the table because of it