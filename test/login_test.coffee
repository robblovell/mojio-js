Mojio = require '../lib/Mojio.js'
config = require './config/mojio-config.coffee'

mojio = new Mojio(config)


assert = require("assert")
testdata = require('./data/mojio-test-data')
should = require('should')

describe 'Login', ->

    it 'can login', (done) ->
        mojio.login(testdata.username, testdata.password, (error, result) ->
            (error==null).should.be.true
            mojio.should.be.an.instanceOf(Mojio)
            mojio.token.should.be.ok
            result.should.be.an.instanceOf(Object)
            result._id.should.be.an.instanceOf(String)
            done()
        )

describe 'Logout', ->

    it 'can logout', (done) ->
        mojio.login(testdata.username, testdata.password, (error, result) ->
            mojio.logout((error, result) ->
                (error==null).should.be.true
                mojio.should.be.an.instanceOf(Mojio)
                (mojio.token==null).should.be.true
                done()
            )
        )