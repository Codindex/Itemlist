let item = require('../models/itemModel');

let itemList = [];


exports.itemList = function (req, res) {
    res.render('itemList.ejs', {items: itemList});
}

exports.itemNew = function(req, res) {
    let name = req.body.name;
    let count = req.body.count;
    res.render('itemAdd.ejs');
}

exports.itemSave = function(req, res) {
    let name = req.body.name;
    let count = req.body.count;
    res.redirect('/items');
}

exports.itemDelete = function(req, res) {
    itemList.splice(req.params.iditem, 1);

    res.redirect('/items');
}

exports.itemPaid = function(req, res) {
    itemList[req.params.iditem].paid = true;
    res.redirect('/items');
}