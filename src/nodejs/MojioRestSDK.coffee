# version 4.0.0
Http = require './HttpNodeWrapper'
SignalR = require './SignalRNodeWrapper'
FormUrlencoded = require 'form-urlencoded'
_ = require 'underscore'
MojioAuthSDK = require './MojioAuthSDK'

module.exports = class MojioRestSDK extends MojioAuthSDK

    constructor: (options={}) ->
        super(options)

    # REST
    save: (callback) -> # PUT or POST depending on if it exists
        @callback(callback) if (callback?)
        return @

    update: (callback) -> # PUT, throw error if it doesn't exist
        @callback(callback) if (callback?)
        return @

    create: (callback) -> # POST, throw error if it already exists
        @callback(callback) if (callback?)
        return @

    for: (user, callback) ->
        @callback(callback) if (callback?)
        return @

    query: (callback) -> # GET
        @callback(callback) if (callback?)
        return @

    destroy: (callback) -> # DELETE
        @callback(callback) if (callback?)
        return @