// Generated by CoffeeScript 1.8.0
(function() {
  var Mojio, MojioClient, Vehicle, assert, config, mojio_client, should, testObject, testdata;

  MojioClient = require('../lib/nodejs/MojioClient');

  Vehicle = require('../lib/models/Vehicle');

  Mojio = require('../lib/models/Mojio');

  config = require('./config/mojio-config.coffee');

  mojio_client = new MojioClient(config);

  assert = require('assert');

  testdata = require('./data/mojio-test-data');

  should = require('should');

  testObject = null;

  describe('Vehicle', function() {
    before(function(done) {
      return mojio_client.login(testdata.username, testdata.password, function(error, result) {
        (error === null).should.be["true"];
        return done();
      });
    });
    it('can get Vehicles from Model', function(done) {
      var vehicle;
      vehicle = new Vehicle({});
      vehicle.authorization(mojio_client);
      return vehicle.get({}, function(error, result) {
        var instance, _i, _len, _ref;
        (error === null).should.be["true"];
        mojio_client.should.be.an.instanceOf(MojioClient);
        result.Objects.should.be.an.instanceOf(Array);
        if ((result.Objects != null) && result.Objects instanceof Array) {
          _ref = result.Objects;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            instance = _ref[_i];
            instance.should.be.an.instanceOf(Vehicle);
          }
          testObject = instance;
        } else {
          result.should.be.an.instanceOf(Vehicle);
          testObject = result;
        }
        return done();
      });
    });
    it('can get Vehicles', function(done) {
      return mojio_client.get(Vehicle, {}, function(error, result) {
        var instance, _i, _len, _ref;
        (error === null).should.be["true"];
        mojio_client.should.be.an.instanceOf(MojioClient);
        result.Objects.should.be.an.instanceOf(Array);
        _ref = result.Objects;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          instance = _ref[_i];
          instance.should.be.an.instanceOf(Vehicle);
        }
        return done();
      });
    });
    it('can create, find, save, and delete Vehicle', function(done) {
      return mojio_client.get(Mojio, {}, function(error, result) {
        var instance, mojio, vehicle, _i, _len, _ref;
        (error === null).should.be["true"];
        mojio_client.should.be.an.instanceOf(MojioClient);
        result.Objects.should.be.an.instanceOf(Array);
        _ref = result.Objects;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          instance = _ref[_i];
          instance.should.be.an.instanceOf(Mojio);
        }
        mojio = new Mojio(result.Objects[0]);
        vehicle = new Vehicle({
          "Type": "Vehicle",
          "MojioId": mojio.id(),
          "Name": "String",
          "VIN": "String",
          "LicensePlate": "String"
        });
        vehicle.authorization(mojio_client);
        vehicle._id = null;
        return mojio_client.post(vehicle, function(error, result) {
          (error === null).should.be["true"];
          vehicle = new Vehicle(result);
          return mojio_client.get(Vehicle, vehicle.id(), function(error, result) {
            (error === null).should.be["true"];
            mojio_client.should.be.an.instanceOf(MojioClient);
            result.should.be.an.instanceOf(Vehicle);
            return mojio_client.put(result, function(error, result) {
              (error === null).should.be["true"];
              result.should.be.an.instanceOf(Object);
              vehicle = new Vehicle(result);
              return mojio_client["delete"](vehicle, function(error, result) {
                (error === null).should.be["true"];
                (result.result === "ok").should.be["true"];
                return done();
              });
            });
          });
        });
      });
    });
    return it('can create, save, and delete Vehicle from model', function(done) {
      return mojio_client.get(Mojio, {}, function(error, result) {
        var instance, mojio, vehicle, _i, _len, _ref;
        (error === null).should.be["true"];
        mojio_client.should.be.an.instanceOf(MojioClient);
        result.Objects.should.be.an.instanceOf(Array);
        _ref = result.Objects;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          instance = _ref[_i];
          instance.should.be.an.instanceOf(Mojio);
        }
        mojio = new Mojio(result.Objects[0]);
        vehicle = new Vehicle({
          "Type": "Vehicle",
          "MojioId": mojio.id(),
          "Name": "String",
          "VIN": "String",
          "LicensePlate": "String"
        });
        vehicle.authorization(mojio_client);
        vehicle._id = null;
        return vehicle.post(function(error, result) {
          (error === null).should.be["true"];
          result.should.be.an.instanceOf(Object);
          vehicle = new Vehicle(result);
          vehicle.authorization(mojio_client);
          return vehicle.get(vehicle.id(), function(error, result) {
            result.should.be.an.instanceOf(Vehicle);
            vehicle = new Vehicle(result);
            vehicle.authorization(mojio_client);
            return vehicle.put(function(error, result) {
              (error === null).should.be["true"];
              result.should.be.an.instanceOf(Object);
              vehicle = new Vehicle(result);
              vehicle.authorization(mojio_client);
              return vehicle["delete"](function(error, result) {
                (error === null).should.be["true"];
                (result.result === "ok").should.be["true"];
                return done();
              });
            });
          });
        });
      });
    });
  });

}).call(this);

//# sourceMappingURL=Vehicle_test.js.map
