'use strict';

const express = require('express'),
    mongoose = require('mongoose');

mongoose.set('debug', false);

const InvoiceModel = mongoose.model('Invoice');


const Router = express.Router();

Router.get('/', (req, res) => {

        InvoiceModel.find().then(invoices => {
        res.json(invoices);

    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.get('/:id', (req, res) => {
    InvoiceModel.findById(req.params.id).then(invoices => {
        res.json(invoice || {});
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.post('/', (req, res) => {
    const invoice = new InvoiceModel(req.body);
   
    invoice.save().then(invoice => {
        res.json(invoice);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.put('/:id', (req, res) => {
    const invoice = req.body;
    delete invoice._id;
    const invoiceId = req.params.id;
    InvoiceModel.findByIdAndUpdate(invoiceId, {$set: invoice}).then(invoiceDb => {
        res.json(invoice);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

Router.delete('/:id', (req, res) => {
    InvoiceModel.findByIdAndRemove(req.params.id).then(() => {
        res.sendStatus(200);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});



module.exports = Router;