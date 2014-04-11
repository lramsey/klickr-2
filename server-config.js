'use strict';

var express = require('express');
var cors = require('cors');
var handler = require('./lib/request-handler');

var app = express();

app.configure(function() {
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/app'));
  app.use(cors());
});

app.get('/klicks/:id', handler.getKlick);
app.get('/klicks', handler.getAllKlicks);
app.post('/klicks', handler.createKlick);

app.get('/*', handler.invalidRoute);

module.exports = app;