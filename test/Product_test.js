// Generated by CoffeeScript 1.10.0
(function() {
  var MojioClient, Product, assert, config, mojio_client, should, testObject, testdata;

  MojioClient = require('../lib/nodejs/MojioClient');

  Product = require('../lib/models/Product');

  config = require('./config/mojio-config.coffee');

  mojio_client = new MojioClient(config);

  assert = require('assert');

  testdata = require('./data/mojio-test-data');

  should = require('should');

  testObject = null;

  describe('Product', function() {
    before(function(done) {
      return mojio_client.login(testdata.username, testdata.password, function(error, result) {
        (error === null).should.be["true"];
        return done();
      });
    });
    it('can get Products from Model', function(done) {
      var product;
      product = new Product({});
      product.authorization(mojio_client);
      return product.get({}, function(error, result) {
        var i, instance, len, ref;
        (error === null).should.be["true"];
        mojio_client.should.be.an.instanceOf(MojioClient);
        result.Objects.should.be.an.instanceOf(Array);
        if ((result.Objects != null) && result.Objects instanceof Array) {
          ref = result.Objects;
          for (i = 0, len = ref.length; i < len; i++) {
            instance = ref[i];
            instance.should.be.an.instanceOf(Product);
          }
          testObject = instance;
        } else {
          result.should.be.an.instanceOf(Product);
          testObject = result;
        }
        return done();
      });
    });
    it('can get Products', function(done) {
      return mojio_client.get(Product, {}, function(error, result) {
        var i, instance, len, ref;
        (error === null).should.be["true"];
        mojio_client.should.be.an.instanceOf(MojioClient);
        result.Objects.should.be.an.instanceOf(Array);
        ref = result.Objects;
        for (i = 0, len = ref.length; i < len; i++) {
          instance = ref[i];
          instance.should.be.an.instanceOf(Product);
        }
        return done();
      });
    });
    it('can create, find, save, and delete Product', function(done) {
      var product;
      product = new Product().mock();
      return mojio_client.post(product, function(error, result) {
        (error === null).should.be["true"];
        product = new Product(result);
        return mojio_client.get(Product, product.id(), function(error, result) {
          (error === null).should.be["true"];
          mojio_client.should.be.an.instanceOf(MojioClient);
          result.should.be.an.instanceOf(Product);
          return mojio_client.put(result, function(error, result) {
            (error === null).should.be["true"];
            result.should.be.an.instanceOf(Object);
            product = new Product(result);
            return mojio_client["delete"](product, function(error, result) {
              (error === null).should.be["true"];
              (result.result === "ok").should.be["true"];
              return done();
            });
          });
        });
      });
    });
    return it('can create, save, and delete Product from model', function(done) {
      var product;
      product = new Product().mock();
      product.authorization(mojio_client);
      product._id = null;
      return product.post(function(error, result) {
        (error === null).should.be["true"];
        result.should.be.an.instanceOf(Object);
        product = new Product(result);
        product.authorization(mojio_client);
        return product.get(product.id(), function(error, result) {
          result.should.be.an.instanceOf(Product);
          product = new Product(result);
          product.authorization(mojio_client);
          return product.put(function(error, result) {
            (error === null).should.be["true"];
            result.should.be.an.instanceOf(Object);
            product = new Product(result);
            product.authorization(mojio_client);
            return product["delete"](function(error, result) {
              (error === null).should.be["true"];
              (result.result === "ok").should.be["true"];
              return done();
            });
          });
        });
      });
    });
  });

}).call(this);

//# sourceMappingURL=Product_test.js.map
