(function(){var e,t,r={}.hasOwnProperty,n=function(e,t){function n(){this.constructor=e}for(var o in t)r.call(t,o)&&(e[o]=t[o]);return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e};t=require("./MojioModel"),module.exports=e=function(e){function t(e){t.__super__.constructor.call(this,e)}return n(t,e),t.prototype._schema={FuelLow:"Float",FuelHigh:"Float",Timing:"Integer",Type:"Integer",Name:"String",ObserverType:"Integer",AppId:"String",OwnerId:"String",Parent:"String",ParentId:"String",Subject:"String",SubjectId:"String",Transports:"Integer",Status:"Integer",Tokens:"Array",_id:"String",_deleted:"Boolean"},t.prototype._resource="FuelLevelObservers",t.prototype._model="FuelLevelObserver",t._resource="FuelLevelObservers",t._model="FuelLevelObserver",t.resource=function(){return t._resource},t.model=function(){return t._model},t}(t)}).call(this);