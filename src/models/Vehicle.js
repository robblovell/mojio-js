(function() {
    var MojioModel, Vehicle, __hasProp = {}.hasOwnProperty, __extends = function(child, parent) {
        function ctor() {
            this.constructor = child;
        }
        for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child.__super__ = parent.prototype;
        return child;
    };
    MojioModel = require("./MojioModel");
    module.exports = Vehicle = function(_super) {
        function Vehicle(json) {
            Vehicle.__super__.constructor.call(this, json);
        }
        __extends(Vehicle, _super);
        Vehicle.prototype._schema = {
            Type: "Integer",
            OwnerId: "String",
            MojioId: "String",
            Name: "String",
            VIN: "String",
            LicensePlate: "String",
            IgnitionOn: "Boolean",
            VehicleTime: "String",
            LastTripEvent: "String",
            LastLocationTime: "String",
            LastLocation: "Object",
            LastSpeed: "Float",
            FuelLevel: "Float",
            LastAcceleration: "Float",
            LastAccelerometer: "Object",
            LastAltitude: "Float",
            LastBatteryVoltage: "Float",
            LastDistance: "Float",
            LastHeading: "Float",
            LastVirtualOdometer: "Float",
            LastOdometer: "Float",
            LastRpm: "Float",
            LastFuelEfficiency: "Float",
            CurrentTrip: "String",
            LastTrip: "String",
            LastContactTime: "String",
            MilStatus: "Boolean",
            DiagnosticCodes: "Object",
            FaultsDetected: "Boolean",
            LastLocationTimes: "Array",
            LastLocations: "Array",
            LastSpeeds: "Array",
            LastHeadings: "Array",
            LastAltitudes: "Array",
            Viewers: "Array",
            _id: "String",
            _deleted: "Boolean"
        };
        Vehicle.prototype._resource = "Vehicles";
        Vehicle.prototype._model = "Vehicle";
        Vehicle._resource = "Vehicles";
        Vehicle._model = "Vehicle";
        Vehicle.resource = function() {
            return Vehicle._resource;
        };
        Vehicle.model = function() {
            return Vehicle._model;
        };
        return Vehicle;
    }(MojioModel);
}).call(this);