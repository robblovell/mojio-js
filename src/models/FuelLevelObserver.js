(function() {
    var FuelLevelObserver, MojioModel, __hasProp = {}.hasOwnProperty, __extends = function(child, parent) {
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
    module.exports = FuelLevelObserver = function(_super) {
        function FuelLevelObserver(json) {
            FuelLevelObserver.__super__.constructor.call(this, json);
        }
        __extends(FuelLevelObserver, _super);
        FuelLevelObserver.prototype._schema = {
            FuelLow: "Float",
            FuelHigh: "Float",
            Timing: "Integer",
            Type: "Integer",
            Name: "String",
            ObserverType: "Integer",
            AppId: "String",
            OwnerId: "String",
            Parent: "String",
            ParentId: "String",
            Subject: "String",
            SubjectId: "String",
            Transports: "Integer",
            Status: "Integer",
            Tokens: "Array",
            _id: "String",
            _deleted: "Boolean"
        };
        FuelLevelObserver.prototype._resource = "FuelLevelObservers";
        FuelLevelObserver.prototype._model = "FuelLevelObserver";
        FuelLevelObserver._resource = "FuelLevelObservers";
        FuelLevelObserver._model = "FuelLevelObserver";
        FuelLevelObserver.resource = function() {
            return FuelLevelObserver._resource;
        };
        FuelLevelObserver.model = function() {
            return FuelLevelObserver._model;
        };
        return FuelLevelObserver;
    }(MojioModel);
}).call(this);