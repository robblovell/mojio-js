// Generated by CoffeeScript 1.10.0
(function() {
  var AltitudeObserver, MojioModel,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  MojioModel = require('./MojioModel');

  module.exports = AltitudeObserver = (function(superClass) {
    extend(AltitudeObserver, superClass);

    AltitudeObserver.prototype._schema = {
      "AltitudeLow": "Float",
      "AltitudeHigh": "Float",
      "Timing": "Integer",
      "Type": "Integer",
      "Name": "String",
      "ObserverType": "Integer",
      "AppId": "String",
      "OwnerId": "String",
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
      "NextAllowedBroadcast": "String",
      "_id": "String",
      "_deleted": "Boolean"
    };

    AltitudeObserver.prototype._resource = 'AltitudeObservers';

    AltitudeObserver.prototype._model = 'AltitudeObserver';

    function AltitudeObserver(json) {
      AltitudeObserver.__super__.constructor.call(this, json);
    }

    AltitudeObserver._resource = 'AltitudeObservers';

    AltitudeObserver._model = 'AltitudeObserver';

    AltitudeObserver.resource = function() {
      return AltitudeObserver._resource;
    };

    AltitudeObserver.model = function() {
      return AltitudeObserver._model;
    };

    return AltitudeObserver;

  })(MojioModel);

}).call(this);

//# sourceMappingURL=AltitudeObserver.js.map
