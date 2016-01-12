(function(){var e,t,r={}.hasOwnProperty,n=function(e,t){function n(){this.constructor=e}for(var o in t)r.call(t,o)&&(e[o]=t[o]);return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e};e=require("./MojioModel"),module.exports=t=function(e){function t(e){t.__super__.constructor.call(this,e)}return n(t,e),t.prototype._schema={Type:"Integer",OwnerId:"String",MojioId:"String",Name:"String",VIN:"String",LicensePlate:"String",IgnitionOn:"Boolean",VehicleTime:"String",LastTripEvent:"String",LastLocationTime:"String",LastLocation:"Object",LastSpeed:"Float",FuelLevel:"Float",LastAcceleration:"Float",LastAccelerometer:"Object",LastAltitude:"Float",LastBatteryVoltage:"Float",LastDistance:"Float",LastHeading:"Float",LastVirtualOdometer:"Float",LastOdometer:"Float",LastRpm:"Float",LastFuelEfficiency:"Float",CurrentTrip:"String",LastTrip:"String",LastContactTime:"String",MilStatus:"Boolean",DiagnosticCodes:"Object",FaultsDetected:"Boolean",LastLocationTimes:"Array",LastLocations:"Array",LastSpeeds:"Array",LastHeadings:"Array",LastAltitudes:"Array",Viewers:"Array",_id:"String",_deleted:"Boolean"},t.prototype._resource="Vehicles",t.prototype._model="Vehicle",t._resource="Vehicles",t._model="Vehicle",t.resource=function(){return t._resource},t.model=function(){return t._model},t}(e)}).call(this);