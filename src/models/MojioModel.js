(function() {
    var MojioModel;
    module.exports = MojioModel = function() {
        function MojioModel(json) {
            this._client = null;
            this.validate(json);
        }
        MojioModel._resource = "Schema";
        MojioModel._model = "Model";
        MojioModel.prototype.setField = function(field, value) {
            this[field] = value;
            return this[field];
        };
        MojioModel.prototype.getField = function(field) {
            return this[field];
        };
        MojioModel.prototype.validate = function(json) {
            var field, value, _results;
            _results = [];
            for (field in json) {
                value = json[field];
                _results.push(this.setField(field, value));
            }
            return _results;
        };
        MojioModel.prototype.stringify = function() {
            return JSON.stringify(this, this.replacer);
        };
        MojioModel.prototype.replacer = function(key, value) {
            return "_client" === key || "_schema" === key || "_resource" === key || "_model" === key ? void 0 : value;
        };
        MojioModel.prototype.query = function(criteria, callback) {
            var property, query_criteria, value;
            if (null === this._client) {
                callback("No authorization set for model, use authorize(), passing in a mojio _client where login() has been called successfully.", null);
                return;
            }
            if (criteria instanceof Object) {
                if (null == criteria.criteria) {
                    query_criteria = "";
                    for (property in criteria) {
                        value = criteria[property];
                        query_criteria += "" + property + "=" + value + ";";
                    }
                    criteria = {
                        criteria: query_criteria
                    };
                }
                return this._client.request({
                    method: "GET",
                    resource: this.resource(),
                    parameters: criteria
                }, function(_this) {
                    return function(error, result) {
                        return callback(error, _this._client.model(_this.model(), result));
                    };
                }(this));
            }
            return "string" == typeof criteria ? this._client.request({
                method: "GET",
                resource: this.resource(),
                parameters: {
                    id: criteria
                }
            }, function(_this) {
                return function(error, result) {
                    return callback(error, _this._client.model(_this.model(), result));
                };
            }(this)) : callback("criteria given is not in understood format, string or object.", null);
        };
        MojioModel.prototype.get = function(criteria, callback) {
            return this.query(criteria, callback);
        };
        MojioModel.prototype.create = function(callback) {
            if (null === this._client) {
                callback("No authorization set for model, use authorize(), passing in a mojio _client where login() has been called successfully.", null);
                return;
            }
            return this._client.request({
                method: "POST",
                resource: this.resource(),
                body: this.stringify()
            }, callback);
        };
        MojioModel.prototype.post = function(callback) {
            return this.create(callback);
        };
        MojioModel.prototype.save = function(callback) {
            if (null === this._client) {
                callback("No authorization set for model, use authorize(), passing in a mojio _client where login() has been called successfully.", null);
                return;
            }
            return this._client.request({
                method: "PUT",
                resource: this.resource(),
                body: this.stringify(),
                parameters: {
                    id: this._id
                }
            }, callback);
        };
        MojioModel.prototype.put = function(callback) {
            return this.save(callback);
        };
        MojioModel.prototype["delete"] = function(callback) {
            return this._client.request({
                method: "DELETE",
                resource: this.resource(),
                parameters: {
                    id: this._id
                }
            }, callback);
        };
        MojioModel.prototype.observe = function(object, subject, observer_callback, callback) {
            null == subject && (subject = null);
            return this._client.observe(object, subject, observer_callback, callback);
        };
        MojioModel.prototype.unobserve = function(object, subject, observer_callback, callback) {
            null == subject && (subject = null);
            return this._client.observe(object, subject, observer_callback, callback);
        };
        MojioModel.prototype.store = function(model, key, value, callback) {
            return this._client.store(model, key, value, callback);
        };
        MojioModel.prototype.storage = function(model, key, callback) {
            return this._client.storage(model, key, callback);
        };
        MojioModel.prototype.unstore = function(model, key, callback) {
            return this._client.unstore(model, key, callback);
        };
        MojioModel.prototype.statistic = function(expression, callback) {
            return callback(null, true);
        };
        MojioModel.prototype.resource = function() {
            return this._resource;
        };
        MojioModel.prototype.model = function() {
            return this._model;
        };
        MojioModel.prototype.schema = function() {
            return this._schema;
        };
        MojioModel.prototype.authorization = function(client) {
            this._client = client;
            return this;
        };
        MojioModel.prototype.id = function() {
            return this._id;
        };
        MojioModel.prototype.mock = function(type, withid) {
            var field, value, _ref;
            null == withid && (withid = false);
            _ref = this.schema();
            for (field in _ref) {
                value = _ref[field];
                if ("Type" === field) this.setField(field, this.model()); else if ("UserName" === field) this.setField(field, "Tester"); else if ("Email" === field) this.setField(field, "test@moj.io"); else if ("Password" === field) this.setField(field, "Password007!"); else if ("_id" !== field || withid) switch (value) {
                  case "Integer":
                    this.setField(field, "0");
                    break;

                  case "Boolean":
                    this.setField(field, false);
                    break;

                  case "String":
                    this.setField(field, "test" + Math.random());
                }
            }
            return this;
        };
        return MojioModel;
    }();
}).call(this);