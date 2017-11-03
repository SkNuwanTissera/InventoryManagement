'use strict';

const express = require('express'),
    mongoose = require('mongoose');

mongoose.set('debug', false);

const MaterialModel = mongoose.model('Material'),
    DrugModel = mongoose.model('Drug');

const Router = express.Router();

Router.get('/', (req, res) => {
    MaterialModel.find().populate('drugs').exec().then(materials => {
        res.json(materials);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.get('/drugs/:id', (req, res) => {
    MaterialModel.find({ sellingDrugs: { "$in" : [req.params.id]} }).then(materials => {
        res.json(materials);
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
        const drugIds = material.drugs.map((drugId => drugId));
        return DrugModel.remove({_id: {$in: drugIds}});
    }).then(() => {
        res.sendStatus(200);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/:id/drugs', (req, res) => {
    let drug = new DrugModel(req.body);
    const materialId = req.params.id;
    drug.material = materialId;
    drug.save().then(drugDb => {
        return MaterialModel.findByIdAndUpdate(materialId, {$push: {"drugs": drugDb._id}})
    }).then(() => {
        return MaterialModel.findById(materialId).populate('drugs').exec();
    }).then(materialDb => {
        res.json(materialDb);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

module.exports = Router;