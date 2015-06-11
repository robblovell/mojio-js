(function() {
    var MojioModel, OdometerObserver, __hasProp = {}.hasOwnProperty, __extends = function(child, parent) {
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
    module.exports = OdometerObserver = function(_super) {
        function OdometerObserver(json) {
            OdometerObserver.__super__.constructor.call(this, json);
        }
        __extends(OdometerObserver, _super);
        OdometerObserver.prototype._schema = {
            OdometerLow: "Float",
            OdometerHigh: "Float",
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
        OdometerObserver.prototype._resource = "OdometerObservers";
        OdometerObserver.prototype._model = "OdometerObserver";
        OdometerObserver._resource = "OdometerObservers";
        OdometerObserver._model = "OdometerObserver";
        OdometerObserver.resource = function() {
            return OdometerObserver._resource;
        };
        OdometerObserver.model = function() {
            return OdometerObserver._model;
        };
        return OdometerObserver;
    }(MojioModel);
}).call(this);