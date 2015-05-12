// Generated by CoffeeScript 1.8.0
(function() {
  var Event, MojioClient, assert, config, mojio_client, should, testObject, testdata;

  MojioClient = require('../lib/nodejs/MojioClient');

  Event = require('../lib/models/Event');

  config = require('./config/mojio-config.coffee');

  mojio_client = new MojioClient(config);

  assert = require('assert');

  testdata = require('./data/mojio-test-data');

  should = require('should');

  testObject = null;

}).call(this);

//# sourceMappingURL=events_test.js.map
