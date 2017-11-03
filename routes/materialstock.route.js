'use strict';

const express = require('express'),
    mongoose = require('mongoose');

mongoose.set('debug', false);

const MaterialModel = mongoose.model('Material'),
    VendorModel = mongoose.model('Vendor');

const Router = express.Router();

Router.get('/', (req, res) => {
    MaterialModel.find().populate('vendors').exec().then(materials => {
        res.json(materials);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.get('/vendors/:id', (req, res) => {
    VendorModel.find({ companyName: { "$in" : [req.params.id]} }).then(vendor => {
        res.json(vendor);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.get('/:id', (req, res) => {
    MaterialModel.findById(req.params.id).then(material => {
        res.json(material || {});
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/', (req, res) => {
    const material = new MaterialModel(req.body);
    material.save().then(material => {
        res.json(material);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.put('/:id', (req, res) => {
    const material = req.body;
    delete material._id;
    const materialId = req.params.id;
    MaterialModel.findByIdAndUpdate(materialId, {$set: material}).then(materialDb => {
        res.json(material);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.delete('/:id', (req, res) => {
    MaterialModel.findByIdAndRemove(req.params.id).then((material) => {
        const vendorIds = material.vendors.map((vendorId => vendorId));
        return VendorModel.remove({_id: {$in: vendorIds}});
    }).then(() => {
        res.sendStatus(200);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/:id/vendors', (req, res) => {
    let vendor = new VendorModel(req.body);
    const materialId = req.params.id;
    vendor.material = materialId;
    vendor.save().then(vendorDb => {
        return MaterialModel.findByIdAndUpdate(materialId, {$push: {"vendors": vendorDb._id}})
    }).then(() => {
        return MaterialModel.findById(materialId).populate('vendors').exec();
    }).then(materialDb => {
        res.json(materialDb);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

module.exports = Router;