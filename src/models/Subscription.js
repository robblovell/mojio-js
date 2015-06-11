(function() {
    var MojioModel, Subscription, __hasProp = {}.hasOwnProperty, __extends = function(child, parent) {
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
    module.exports = Subscription = function(_super) {
        function Subscription(json) {
            Subscription.__super__.constructor.call(this, json);
        }
        __extends(Subscription, _super);
        Subscription.prototype._schema = {
            Type: "Integer",
            ChannelType: "Integer",
            ChannelTarget: "String",
            AppId: "String",
            OwnerId: "String",
            Event: "Integer",
            EntityType: "Integer",
            EntityId: "String",
            Interval: "Integer",
            LastMessage: "String",
            _id: "String",
            _deleted: "Boolean"
        };
        Subscription.prototype._resource = "Subscriptions";
        Subscription.prototype._model = "Subscription";
        Subscription._resource = "Subscriptions";
        Subscription._model = "Subscription";
        Subscription.resource = function() {
            return Subscription._resource;
        };
        Subscription.model = function() {
            return Subscription._model;
        };
        return Subscription;
    }(MojioModel);
}).call(this);