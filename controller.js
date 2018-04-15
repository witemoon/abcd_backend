const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
//  https://github.com/typicode/lowdb
const leaseadapter = new FileSync('data/leaseData.json')
const leaseData = low(leaseadapter)

var controller = {
    getLease: function(req,res){
        res.send(leaseData);
    },
    login: function(req,res){
        res.send(req.body);
    }
}

module.exports.controller = controller;