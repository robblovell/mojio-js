// Generated by CoffeeScript 1.10.0
(function() {
  var Mojio, MojioModel,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  MojioModel = require('./MojioModel');

  module.exports = Mojio = (function(superClass) {
    extend(Mojio, superClass);

    Mojio.prototype._schema = {
      "Type": "Integer",
      "OwnerId": "String",
      "Name": "String",
      "Imei": "String",
      "LastContactTime": "String",
      "VehicleId": "String",
      "_id": "String",
      "_deleted": "Boolean"
    };

    Mojio.prototype._resource = 'Mojios';

    Mojio.prototype._model = 'Mojio';

    function Mojio(json) {
      Mojio.__super__.constructor.call(this, json);
    }

    Mojio._resource = 'Mojios';

    Mojio._model = 'Mojio';

    Mojio.resource = function() {
      return Mojio._resource;
    };

    Mojio.model = function() {
      return Mojio._model;
    };

    return Mojio;

  })(MojioModel);

}).call(this);

//# sourceMappingURL=Mojio.js.map
