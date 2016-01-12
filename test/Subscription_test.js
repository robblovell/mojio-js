// Generated by CoffeeScript 1.10.0
(function() {
  var MojioClient, Subscription, assert, config, mojio_client, should, testObject, testdata;

  MojioClient = require('../lib/nodejs/MojioClient');

  Subscription = require('../lib/models/Subscription');

  config = require('./config/mojio-config.coffee');

  mojio_client = new MojioClient(config);

  assert = require('assert');

  testdata = require('./data/mojio-test-data');

  should = require('should');

  testObject = null;

  describe('Subscription', function() {
    before(function(done) {
      return mojio_client.login(testdata.username, testdata.password, function(error, result) {
        (error === null).should.be["true"];
        return done();
      });
    });
    it('can get Subscriptions from Model', function(done) {
      var subscription;
      subscription = new Subscription({});
      subscription.authorization(mojio_client);
      return subscription.query({}, function(error, result) {
        var i, instance, len, ref;
        (error === null).should.be["true"];
        mojio_client.should.be.an.instanceOf(MojioClient);
        result.Objects.should.be.an.instanceOf(Array);
        if ((result.Objects != null) && result.Objects instanceof Array) {
          ref = result.Objects;
          for (i = 0, len = ref.length; i < len; i++) {
            instance = ref[i];
            instance.should.be.an.instanceOf(Subscription);
          }
          testObject = instance;
        } else {
          result.should.be.an.instanceOf(Subscription);
          testObject = result;
        }
        return done();
      });
    });
    return it('can get Subscriptions', function(done) {
      return mojio_client.query(Subscription, {}, function(error, result) {
        var i, instance, len, ref;
        (error === null).should.be["true"];
        mojio_client.should.be.an.instanceOf(MojioClient);
        result.Objects.should.be.an.instanceOf(Array);
        ref = result.Objects;
        for (i = 0, len = ref.length; i < len; i++) {
          instance = ref[i];
          instance.should.be.an.instanceOf(Subscription);
        }
        return done();
      });
    });
  });

}).call(this);

//# sourceMappingURL=Subscription_test.js.map
