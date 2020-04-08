// Generated by CoffeeScript 1.9.3
(function() {
  var FormUrlencoded, Http, MojioGroupingSDK, MojioSharingSDK, SignalR, _,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Http = require('./HttpNodeWrapper');

  SignalR = require('./SignalRNodeWrapper');

  FormUrlencoded = require('form-urlencoded');

  _ = require('underscore');

  MojioGroupingSDK = require('./MojioGroupingSDK');

  module.exports = MojioSharingSDK = (function(superClass) {
    extend(MojioSharingSDK, superClass);

    function MojioSharingSDK(options) {
      if (options == null) {
        options = {};
      }
      MojioSharingSDK.__super__.constructor.call(this, options);
    }

    MojioSharingSDK.prototype.share = function(user, callback) {
      if ((callback != null)) {
        this.callback(callback);
      }
      return this;
    };

    MojioSharingSDK.prototype["with"] = function(user, callback) {
      if ((callback != null)) {
        this.callback(callback);
      }
      return this;
    };

    MojioSharingSDK.prototype.access = function(rules, callback) {
      if ((callback != null)) {
        this.callback(callback);
      }
      return this;
    };

    MojioSharingSDK.prototype.revoke = function(user, callback) {
      if ((callback != null)) {
        this.callback(callback);
      }
      return this;
    };

    MojioSharingSDK.prototype.from = function(user, callback) {
      if ((callback != null)) {
        this.callback(callback);
      }
      return this;
    };

    return MojioSharingSDK;

  })(MojioGroupingSDK);

}).call(this);

//# sourceMappingURL=MojioSharingSDK.js.map