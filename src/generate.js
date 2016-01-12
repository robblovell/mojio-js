// Generated by CoffeeScript 1.10.0
(function() {
  var Combyne, fs;

  fs = require('fs');

  Combyne = require('combyne');

  fs.readFile('./models/schema.coffee', function(err, data) {
    var result;
    if (err) {
      throw err;
    }
    result = JSON.parse(data);
    return fs.readFile('./models/ModelTemplate.mustache', function(err, data) {
      var model_template;
      model_template = Combyne(data.toString());
      return fs.readFile('../test/TestTemplate.mustache', function(err, data) {
        var test_template;
        test_template = Combyne(data.toString());
        return fs.readFile('../test/TestTemplate_Short.mustache', function(err, data) {
          var event_model, event_schema, field, i, j, len, model, models, output, s, schema, short_test_template, spl, str, type, view, wstream;
          short_test_template = Combyne(data.toString());
          models = [];
          i = 0;
          for (model in result) {
            schema = result[model];
            console.log("Looking at " + model);
            if (model !== "App" && model !== "Login" && model !== "Address" && model !== "Location" && model !== "Trip" && model !== "User" && model !== "Vehicle" && model !== "Event" && model !== "Mojio" && model !== "Subscription" && model !== "Product" && model !== "Observer" && model !== "AccelerationObserver" && model !== "AccelerometerObserver" && model !== "AltitudeObserver" && model !== "BatteryVoltageObserver" && model !== "ConditionalObserver" && model !== "DiagnosticCodeObserver" && model !== "DistanceObserver" && model !== "EventObserver" && model !== "FuelLevelObserver" && model !== "GeoFenceObserver" && model !== "HeadingObserver" && model !== "OdometerObserver" && model !== "RPMObserver" && model !== "ScriptObserver" && model !== "SpeedObserver") {
              continue;
            }
            console.log("Processing " + model);
            view = {
              Resource: model + "s",
              Model: model,
              model: model.toLowerCase(),
              schema: ""
            };
            if (model === "Login") {
              view.Resource = model;
            }
            if (model === "Event") {
              for (event_model in result) {
                event_schema = result[event_model];
                if (event_model.indexOf("Event") !== -1) {
                  for (field in event_schema) {
                    type = event_schema[field];
                    schema[field] = type;
                  }
                }
              }
            }
            str = JSON.stringify(schema, null, 4);
            spl = str.split('\n');
            for (j = 0, len = spl.length; j < len; j++) {
              s = spl[j];
              view['schema'] += '            ' + s + '\n';
            }
            output = model_template.render(view);
            wstream = fs.createWriteStream("./models/" + model + ".coffee");
            wstream.write(output);
            wstream.end();
            if (model === "Address" || model === "Location" || model === "Observer" || model === "AccelerationObserver" || model === "AccelerometerObserver" || model === "AltitudeObserver" || model === "BatteryVoltageObserver" || model === "ConditionalObserver" || model === "DiagnosticCodeObserver" || model === "DistanceObserver" || model === "EventObserver" || model === "FuelLevelObserver" || model === "GeoFenceObserver" || model === "HeadingObserver" || model === "OdometerObserver" || model === "RPMObserver" || model === "ScriptObserver" || model === "SpeedObserver") {
              continue;
            }
            if (model !== "Vehicle" && model !== "Login") {
              if (model === "Event" || model === "Subscription" || model === "Trip" || model === "User") {
                output = short_test_template.render(view);
              } else {
                output = test_template.render(view);
              }
              wstream = fs.createWriteStream("../test/" + model + "_test.coffee");
              wstream.write(output);
              wstream.end();
            }
            models[i++] = view;
          }
          return fs.readFile('./MojioClientTemplate.mustache', function(err, data) {
            var client_template;
            client_template = Combyne(data.toString());
            view['models'] = models;
            view['http_require'] = "Http = require './HttpNodeWrapper'";
            view['http_request'] = "http = new Http()";
            view['signalr_default_scheme'] = 'http';
            view['signalr_default_port'] = '80';
            view['extra_signalr_params'] = "";
            view['signalr_require'] = "SignalR = require './SignalRNodeWrapper'";
            output = client_template.render(view);
            wstream = fs.createWriteStream("./nodejs/MojioClient.coffee");
            wstream.write(output);
            wstream.end();
            view['http_require'] = "Http = require './HttpBrowserWrapper'";
            view['http_request'] = "http = new Http()";
            view['extra_signalr_params'] = ", $";
            view['signalr_default_scheme'] = 'https';
            view['signalr_default_port'] = '443';
            view['signalr_require'] = "SignalR = require './SignalRBrowserWrapper'";
            output = client_template.render(view);
            wstream = fs.createWriteStream("./browser/MojioClient.coffee");
            wstream.write(output);
            wstream.end();
            view['http_require'] = "Http = require './HttpTitaniumWrapper'";
            view['http_request'] = "http = new Http()";
            view['extra_signalr_params'] = "";
            view['signalr_default_scheme'] = 'https';
            view['signalr_default_port'] = '443';
            view['signalr_require'] = "SignalR = require './SignalRTitaniumWrapper'";
            output = client_template.render(view);
            wstream = fs.createWriteStream("./titanium/MojioClient.coffee");
            wstream.write(output);
            return wstream.end();
          });
        });
      });
    });
  });

}).call(this);

//# sourceMappingURL=generate.js.map
