(function(){var e,t,r={}.hasOwnProperty,n=function(e,t){function n(){this.constructor=e}for(var o in t)r.call(t,o)&&(e[o]=t[o]);return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e};t=require("./MojioModel"),module.exports=e=function(e){function t(e){t.__super__.constructor.call(this,e)}return n(t,e),t.prototype._schema={Type:"Integer",OwnerId:"String",Name:"String",Imei:"String",LastContactTime:"String",VehicleId:"String",_id:"String",_deleted:"Boolean"},t.prototype._resource="Mojios",t.prototype._model="Mojio",t._resource="Mojios",t._model="Mojio",t.resource=function(){return t._resource},t.model=function(){return t._model},t}(t)}).call(this);