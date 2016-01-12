// Generated by CoffeeScript 1.9.3
(function() {
  var MojioSDK, async, should;

  MojioSDK = require('../../src/nodejs/MojioSDK');

  should = require('should');

  async = require('async');

  describe('Node Mojio Push SDK', function() {
    var changeVehicle, execute, mojio, sdk, testErrorResult, user, vehicle;
    sdk = new MojioSDK();
    user = null;
    mojio = null;
    vehicle = null;
    testErrorResult = function(error, result) {
      (error === null).should.be["true"];
      return (result !== null).should.be["true"];
    };
    changeVehicle = function(vehicle, cb) {
      return sdk.vehicle(vehicle).update(function(error, result) {
        if (error != null) {
          cb("Error: Vehicle could not be saved", null);
        }
        if (result != null) {
          return console.log("vehicle changed:" + result);
        }
      });
    };
    execute = function(test) {
      return async.series([
        function(cb) {
          console.log("Authorize");
          return sdk.authorize({
            type: "token",
            user: "unittest@moj.io",
            password: "mojioRocks"
          }, (function(error, result) {
            vehicle = result;
            return cb(error, result);
          }));
        }, function(cb) {
          console.log("Mock User");
          return sdk.mock().user({}).callback(function(error, result) {
            user = result;
            return cb(error, result);
          });
        }, function(cb) {
          console.log("Mock Mojio");
          return sdk.mojio({
            UserId: user.id,
            Imei: "9991234567891234"
          }).mock(function(error, result) {
            mojio = result;
            return cb(error, result);
          });
        }, function(cb) {
          console.log("Mock Vehicle");
          return sdk.mock().vehicle({
            MojioId: mojio.id,
            UserId: user.id,
            Speed: 80
          }, (function(error, result) {
            vehicle = result;
            return cb(error, result);
          }));
        }, function(cb) {
          return test(cb);
        }
      ], function(error, results) {
        if (error != null) {
          console.log(error);
        }
        (error === null).should.be["true"];
        (result !== null).should.be["true"];
        return done();
      });
    };
    beforeEach(function() {
      user = null;
      mojio = null;
      return vehicle = null;
    });
    it('can create an observer of vehicles with minimum defaults', function(done) {
      this.timeout(2000);
      return execute(function(cb) {
        console.log("Start observer test");
        return sdk.observe({
          key: "UnitTestVehicleDefault"
        }).vehicles().callback(function(error, result) {
          testErrorResult(error, result);
          if (typeof result === 'boolean') {
            console.log("Change Vehicle");
            return changeVehicle(vehicle, cb);
          } else if (++callbackTimes === 2 || result instanceof 'object') {
            return cb(null, result);
          }
        });
      }, done);
    });
    return it('can create a complex observer of vehicles', function(done) {
      this.timeout(2000);
      return execute(function(cb) {
        return sdk.observe({
          key: "AccidentStateOnVehicleForMojio"
        }).vehicles().fields(["VIN", "AccidentState", "Battery", "Location", "Heading", "Altitude", "Speed", "Accelerometer", "LastContactTime", "GatewayTimeStamp", "FuelLevel"]).where("Battery > min or Battery < max and MojioId == [mojio id]").throttle("1 second").debounce({
          DataPoints: 6,
          TimeWindow: "timespan"
        }).transport({
          Type: "SignalR",
          Callback: function(error, result) {
            testErrorResult(error, result);
            return done();
          }
        }).callback(function(error, result) {
          testErrorResult(error, result);
          return changeVehicle(vehicle, cb);
        });
      }, done);
    });
  });

}).call(this);

//# sourceMappingURL=NodePushSDK_test.js.map
