(function() {
    var AccelerationObserver, MojioModel, __hasProp = {}.hasOwnProperty, __extends = function(child, parent) {
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
    module.exports = AccelerationObserver = function(_super) {
        function AccelerationObserver(json) {
            AccelerationObserver.__super__.constructor.call(this, json);
        }
        __extends(AccelerationObserver, _super);
        AccelerationObserver.prototype._schema = {
            AccelerationLow: "Float",
            AccelerationHigh: "Float",
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
        AccelerationObserver.prototype._resource = "AccelerationObservers";
        AccelerationObserver.prototype._model = "AccelerationObserver";
        AccelerationObserver._resource = "AccelerationObservers";
        AccelerationObserver._model = "AccelerationObserver";
        AccelerationObserver.resource = function() {
            return AccelerationObserver._resource;
        };
        AccelerationObserver.model = function() {
            return AccelerationObserver._model;
        };
        return AccelerationObserver;
    }(MojioModel);
}).call(this);