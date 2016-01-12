// Generated by CoffeeScript 1.10.0
(function() {
  var MojioModel, Vehicle,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  MojioModel = require('./MojioModel');

  module.exports = Vehicle = (function(superClass) {
    extend(Vehicle, superClass);

    Vehicle.prototype._schema = {
      "Type": "Integer",
      "OwnerId": "String",
      "MojioId": "String",
      "Name": "String",
      "VIN": "String",
      "LicensePlate": "String",
      "IgnitionOn": "Boolean",
      "VehicleTime": "String",
      "LastTripEvent": "String",
      "LastLocationTime": "String",
      "LastLocation": {
        "Lat": "Float",
        "Lng": "Float",
        "FromLockedGPS": "Boolean",
        "Dilution": "Float"
      },
      "LastSpeed": "Float",
      "FuelLevel": "Float",
      "LastAcceleration": "Float",
      "LastAccelerometer": "Object",
      "LastAltitude": "Float",
      "LastBatteryVoltage": "Float",
      "LastDistance": "Float",
      "LastHeading": "Float",
      "LastVirtualOdometer": "Float",
      "LastOdometer": "Float",
      "LastRpm": "Float",
      "LastFuelEfficiency": "Float",
      "CurrentTrip": "String",
      "LastTrip": "String",
      "LastContactTime": "String",
      "MilStatus": "Boolean",
      "DiagnosticCodes": "Object",
      "FaultsDetected": "Boolean",
      "LastLocationTimes": "Array",
      "LastLocations": "Array",
      "LastSpeeds": "Array",
      "LastHeadings": "Array",
      "LastAltitudes": "Array",
      "Viewers": "Array",
      "_id": "String",
      "_deleted": "Boolean"
    };

    Vehicle.prototype._resource = 'Vehicles';

    Vehicle.prototype._model = 'Vehicle';

    function Vehicle(json) {
      Vehicle.__super__.constructor.call(this, json);
    }

    Vehicle._resource = 'Vehicles';

    Vehicle._model = 'Vehicle';

    Vehicle.resource = function() {
      return Vehicle._resource;
    };

    Vehicle.model = function() {
      return Vehicle._model;
    };

    return Vehicle;

  })(MojioModel);

}).call(this);

//# sourceMappingURL=Vehicle.js.map
