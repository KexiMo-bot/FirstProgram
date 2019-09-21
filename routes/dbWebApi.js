var express = require('express');
var router = express.Router();
var dbservice = require('../services/db_mssql.js');

router.get('/readData/:appName/:spName/:json', function (req, res) {
    dbservice.operateDatabase(appName, spName, json, function (data) { 8     });
});

router.post('/postData', function (req, res) {
    dbservice.operateDatabase(appName, spName, json, function (data) {

    });
});