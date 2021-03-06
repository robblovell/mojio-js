// Generated by CoffeeScript 1.10.0
(function() {
  var Event, MojioModel,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  MojioModel = require('./MojioModel');

  module.exports = Event = (function(superClass) {
    extend(Event, superClass);

    Event.prototype._schema = {
      "Type": "Integer",
      "MojioId": "String",
      "VehicleId": "String",
      "OwnerId": "String",
      "EventType": "Integer",
      "Time": "String",
      "Location": {
        "Lat": "Float",
        "Lng": "Float",
        "FromLockedGPS": "Boolean",
        "Dilution": "Float"
      },
      "TimeIsApprox": "Boolean",
      "BatteryVoltage": "Float",
      "ConnectionLost": "Boolean",
      "_id": "String",
      "_deleted": "Boolean",
      "Accelerometer": {
        "X": "Float",
        "Y": "Float",
        "Z": "Float"
      },
      "TripId": "String",
      "Altitude": "Float",
      "Heading": "Float",
      "Distance": "Float",
      "FuelLevel": "Float",
      "FuelEfficiency": "Float",
      "Speed": "Float",
      "Acceleration": "Float",
      "Deceleration": "Float",
      "Odometer": "Float",
      "RPM": "Integer",
      "DTCs": "Array",
      "MilStatus": "Boolean",
      "Force": "Float",
      "MaxSpeed": "Float",
      "AverageSpeed": "Float",
      "MovingTime": "Float",
      "IdleTime": "Float",
      "StopTime": "Float",
      "MaxRPM": "Float",
      "EventTypes": "Array",
      "Timing": "Integer",
      "Name": "String",
      "ObserverType": "Integer",
      "AppId": "String",
      "Parent": "String",
      "ParentId": "String",
      "Subject": "String",
      "SubjectId": "String",
      "Transports": "Integer",
      "Status": "Integer",
      "Tokens": "Array",
      "TimeWindow": "String",
      "BroadcastOnlyRecent": "Boolean",
      "Throttle": "String",
      "NextAllowedBroadcast": "String"
    };

    Event.prototype._resource = 'Events';

    Event.prototype._model = 'Event';

    function Event(json) {
      Event.__super__.constructor.call(this, json);
    }

    Event._resource = 'Events';

    Event._model = 'Event';

    Event.resource = function() {
      return Event._resource;
    };

    Event.model = function() {
      return Event._model;
    };

    return Event;

  })(MojioModel);

}).call(this);

//# sourceMappingURL=Event.js.map
