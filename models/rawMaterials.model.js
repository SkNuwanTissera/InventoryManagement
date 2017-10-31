'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rawMaterialSchema = new Schema({

    material_id: {
        type: String,
        required: true
    },

    materialName: {
        type: String

    },

    orderedDate: {
        type: String

    },

    materialUnitCost: {
        type: String
    },

    noOfUnits: {
        type: String
    }
});

const rawMaterials =  mongoose.model('rawMaterials',rawMaterialSchema);

module.exports = rawMaterials;