// Generated by CoffeeScript 1.8.0
(function() {
  var HeadingObserver, MojioModel,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  MojioModel = require('./MojioModel');

  module.exports = HeadingObserver = (function(_super) {
    __extends(HeadingObserver, _super);

    HeadingObserver.prototype._schema = {
      "HeadingLow": "Float",
      "HeadingHigh": "Float",
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
      "_id": "String",
      "_deleted": "Boolean"
    };

    HeadingObserver.prototype._resource = 'HeadingObservers';

    HeadingObserver.prototype._model = 'HeadingObserver';

    function HeadingObserver(json) {
      HeadingObserver.__super__.constructor.call(this, json);
    }

    HeadingObserver._resource = 'HeadingObservers';

    HeadingObserver._model = 'HeadingObserver';

    HeadingObserver.resource = function() {
      return HeadingObserver._resource;
    };

    HeadingObserver.model = function() {
      return HeadingObserver._model;
    };

    return HeadingObserver;

  })(MojioModel);

}).call(this);