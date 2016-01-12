(function(){var e,t,r;e=require("./HttpTitaniumWrapper"),r="tbd";var n="",o=null;Ti.API.info('DON"T LOAD SingnalR!!'),module.exports=t=function(){function t(e){var t,r,n,o,i,s,a,u;this.options=e,null==this.options&&(this.options={hostname:this.defaults.hostname,port:this.defaults.port,version:this.defaults.version,scheme:this.defaults.scheme,live:this.defaults.live}),null==(t=this.options).hostname&&(t.hostname=_.hostname),null==(r=this.options).port&&(r.port=_.port),null==(n=this.options).version&&(n.version=_.version),null==(o=this.options).scheme&&(o.scheme=_.scheme),null==(i=this.options).signalr_port&&(i.signalr_port=_.signalr_port),null==(s=this.options).signalr_scheme&&(s.signalr_scheme=_.signalr_scheme),null==(a=this.options).signalr_hub&&(a.signalr_hub=_.signalr_hub),this.options.application=this.options.application,this.options.secret=this.options.secret,this.options.observerTransport="SingalR",this.conn=null,this.hub=null,this.connStatus=null,this.auth_token=null,this.access_token=null,null==(u=this.options).tokenRequester&&(u.tokenRequester=function(){return document.location.hash.match(/access_token=([0-9a-f-]{36})/)})}var r,i,s,a,u,l,c,p,d,_,h,f;return _={hostname:"api.moj.io",port:"443",version:"v1",scheme:"https",signalr_scheme:"https",signalr_port:"443",signalr_hub:"ObserverHub",live:!0},f=!1,t.prototype.getResults=function(e,t){var r,n,o,i,s,a,u,l;if(Ti.API.info("test getResults, results is"+t),a=[],t instanceof Array)for(r=t.length,Ti.API.info("debugging, result is Array?"+r),n=0,i=t.length;i>n;n++)Ti.API.info("data is array!"),l=t[n],a.push(new e(l));else if(t.Data instanceof Array)for(r=t.Data.length,Ti.API.info("debugging, result data is Array?"+r),u=t.Data,o=0,s=u.length;s>o;o++)l=u[o],null!=l.LastLocation&&(Ti.API.info("result is : "+l),Ti.API.info("ref is : "+JSON.stringify(l)),LastLocation=l.LastLocation,Ti.API.info("LastLocation : "+LastLocation),Lat=LastLocation.Lat,Ti.API.info("Lat : "+Lat)),a.push(new e(l));else null!==l.Data?(Ti.API.info("debugging, result is Data?"),a.push(new e(l.Data))):(Ti.API.info("result is result"),a.push(new e(l)));return a},t._makeParameters=function(e){var t,r,n;0===e.length&&"",r="?";for(t in e)n=e[t],r+=encodeURIComponent(t)+"="+encodeURIComponent(n)+"&";return r.slice(0,-1)},t.prototype.getPath=function(e,t,r,n){return n&&t&&r&&""!==t&&""!==r?"/"+encodeURIComponent(e)+"/"+encodeURIComponent(t)+"/"+encodeURIComponent(r)+"/"+encodeURIComponent(n):t&&r&&""!==t&&""!==r?"/"+encodeURIComponent(e)+"/"+encodeURIComponent(t)+"/"+encodeURIComponent(r):t&&""!==t?"/"+encodeURIComponent(e)+"/"+encodeURIComponent(t):r&&""!==r?"/"+encodeURIComponent(e)+"/"+encodeURIComponent(r):"/"+encodeURIComponent(e)},t.prototype.dataByMethod=function(e,t){switch(t.toUpperCase()){case"POST":return this.stringify(e);default:return e}},t.prototype.stringify=function(e){return JSON.stringify(e)},t.prototype.request=function(r,n){var o,i;return i={hostname:this.options.hostname,host:this.options.hostname,port:this.options.port,scheme:this.options.scheme,path:"/"+this.options.version,method:r.method,withCredentials:!1},i.path="/"+this.options.version+this.getPath(r.resource,r.id,r.action,r.key),null!=r.parameters&&Object.keys(r.parameters).length>0&&(i.path+=t._makeParameters(r.parameters)),i.headers={},null!=this.getTokenId()&&(i.headers.MojioAPIToken=this.getTokenId()),null!=r.headers&&(i.headers+=r.headers),i.headers["Content-Type"]="application/json",null!=r.body&&(i.body=r.body),Ti.API.info("Z Yang, debugging: "+i.headers),o=new e,o.request(i,n)},t.prototype.login_resource="Login",t.prototype.authorize=function(e,t){if(n=this.options.appname,null===o){var r,i;null==t&&(t="full"),r={hostname:this.options.hostname,host:this.options.hostname,port:this.options.port,scheme:this.options.scheme,path:this.options.live?"/OAuth2/authorize":"/OAuth2Sandbox/authorize",method:"Get",withCredentials:!1},r.path+="?response_type=token",r.path+="&client_id="+this.options.application,r.path+="&redirect_uri="+e,r.path+="&scope="+t,r.headers={},null!=this.getTokenId()&&(r.headers.MojioAPIToken=this.getTokenId()),r.headers["Content-Type"]="application/json",i=r.scheme+"://"+r.host+":"+r.port+r.path;var s=Titanium.UI.createWebView();return Ti.API.info("webview"),s.setUrl(i),s.addEventListener("load",function(e){if(0===e.url.indexOf(n)){e.bubble=!1,s.stopLoading();var t=e.url.indexOf("token");o=e.url.substring(t+6,t+42),Ti.API.info("obtained token: "+o),f=!0,s.setVisible(!1),s.hide(),window.remove(s),window.close()}}),s}},t.prototype.isauthorized=function(){return f},t.prototype.token=function(e){var t,r;return this.user=null,t=o,r=o,Ti.API.info("token",r),r?this.request({method:"GET",resource:this.login_resource,id:r},function(t){return function(r){var n=r.error;return n?e(n,null):(t.auth_token=JSON.parse(this.responseText),e(n,t.auth_token))}}(this)):e("token for authorization not found.",null)},t.prototype.showtoken=function(){return null==o&&alert("haven't got the token yet!"),o},t.prototype.unauthorize=function(e){var t,r;t={hostname:this.options.hostname,host:this.options.hostname,port:this.options.port,scheme:this.options.scheme,path:"/account/logout",method:"Get",withCredentials:!1},t.path+="?Guid="+this.getTokenId(),t.path+="&client_id="+this.options.application,t.path+="&redirect_uri="+e,t.headers={},null!=this.getTokenId()&&(t.headers.MojioAPIToken=this.getTokenId()),t.headers["Content-Type"]="application/json",r=t.scheme+"://"+t.host+":"+t.port+t.path;var n=Titanium.UI.createWebView();return n.setUrl(r),n},t.prototype._login=function(e,t,r){return this.request({method:"POST",resource:this.login_resource,id:this.options.application,parameters:{userOrEmail:e,password:t,secretKey:this.options.secret}},r)},t.prototype.login=function(e,t,r){return this._login(e,t,function(e){return function(t,n){return null!=n&&(e.auth_token=n),r(t,n)}}(this))},t.prototype._logout=function(e){return this.request({method:"DELETE",resource:this.login_resource,id:"undefined"!=typeof mojio_token&&null!==mojio_token?mojio_token:this.getTokenId()},e)},t.prototype.logout=function(e){return this._logout(function(t){return function(r,n){return t.auth_token=null,e(r,n)}}(this))},h={},r=require("../models/App"),h.App=r,s=require("../models/Mojio"),h.Mojio=s,c=require("../models/Trip"),h.Trip=c,p=require("../models/User"),h.User=p,d=require("../models/Vehicle"),h.Vehicle=d,u=require("../models/Product"),h.Product=u,l=require("../models/Subscription"),h.Subscription=l,i=require("../models/Event"),h.Event=i,a=require("../models/Observer"),h.Observer=a,t.prototype.model=function(e,t){var r,n,o,i,s;if(null==t&&(t=null),null===t)return h[e];if(null!=t.Data&&t.Data instanceof Array)for(i=t,i.Objects=new Array,s=t.Data,n=0,o=s.length;o>n;n++)r=s[n],i.Objects.push(new h[e](r));else i=new h[e](null!=t.Data?t.Data:t);return i._client=this,i},t.prototype.query=function(e,t,r){var n,o,i,s;if(t instanceof Object){if(t.criteria instanceof Object){o="",i=t.criteria;for(n in i)s=i[n],o+=n+"="+s+";";t.criteria=o}return this.request({method:"GET",resource:e.resource(),parameters:t},function(t){return function(n,o){return o=JSON.parse(this.responseText),r(n,t.model(e.model(),o))}}(this))}return"string"==typeof t?this.request({method:"GET",resource:e.resource(),parameters:{id:t}},function(t){return Ti.API.info("mojioclient!"),function(n,o){return o=JSON.parse(this.responseText),r(n,t.model(e.model(),o))}}(this)):r("criteria given is not in understood format, string or object.",null)},t.prototype.get=function(e,t,r){return this.query(e,t,r)},t.prototype.save=function(e,t){return this.request({method:"PUT",resource:e.resource(),body:e.stringify(),parameters:{id:e._id}},t)},t.prototype.put=function(e,t){return this.save(e,t)},t.prototype.create=function(e,t){return this.request({method:"POST",resource:e.resource(),body:e.stringify()},t)},t.prototype.post=function(e,t){return this.create(e,t)},t.prototype["delete"]=function(e,t){return this.request({method:"DELETE",resource:e.resource(),parameters:{id:e._id}},t)},t.prototype._schema=function(e){return this.request({method:"GET",resource:"Schema"},e)},t.prototype.schema=function(e){return this._schema(function(){return function(t,r){return e(t,r)}}(this))},t.prototype.watch=function(e,t,r){return this.request({method:"POST",resource:a.resource(),body:e.stringify()},function(){return function(t,n){return t?r(t,null):e=new a(n)}}(this))},t.prototype.ignore=function(e,t,r){return e||r("Observer required."),null!=e.subject?null===e.parent?this.signalr.unsubscribe(this.options.signalr_hub,"Unsubscribe",e.id(),e.subject.id(),t,r):this.signalr.unsubscribe(this.options.signalr_hub,"Unsubscribe",e.id(),e.subject.model(),t,r):null===e.parent?this.signalr.unsubscribe(this.options.signalr_hub,"Unsubscribe",e.id(),e.SubjectId,t,r):this.signalr.unsubscribe(this.options.signalr_hub,"Unsubscribe",e.id(),e.Subject,t,r)},t.prototype.observe=function(e,t,r,n){var o;return null==t&&(t=null),null===t?(o=new a({ObserverType:"Generic",Status:"Approved",Name:"Test"+Math.random(),Subject:e.model(),SubjectId:e.id(),Transports:"SignalR"}),this.request({method:"PUT",resource:a.resource(),body:o.stringify()},function(e){return function(t,i){return t?n(t,null):(o=new a(i),e.signalr.subscribe(e.options.signalr_hub,"Subscribe",o.id(),o.SubjectId,r,function(){return n(null,o)}))}}(this))):(o=new a({ObserverType:"Generic",Status:"Approved",Name:"Test"+Math.random(),Subject:e.model(),Parent:t.model(),ParentId:t.id(),Transports:"SignalR"}),this.request({method:"PUT",resource:a.resource(),body:o.stringify()},function(t){return function(i,s){return i?n(i,null):(o=new a(s),t.signalr.subscribe(t.options.signalr_hub,"Subscribe",o.id(),e.model(),r,function(){return n(null,o)}))}}(this)))},t.prototype.unobserve=function(e,t,r,n,o){return e&&null!=t?null===r?this.signalr.unsubscribe(this.options.signalr_hub,"Unsubscribe",e.id(),t.id(),n,o):this.signalr.unsubscribe(this.options.signalr_hub,"Unsubscribe",e.id(),t.model(),n,o):o("Observer and subject required.")},t.prototype.store=function(e,t,r,n){return e&&e._id?this.request({method:"PUT",resource:e.resource(),id:e.id(),action:"store",key:t,body:JSON.stringify(r)},function(){return function(e,t){return e?n(e,null):n(null,t)}}(this)):n("Storage requires an object with a valid id.")},t.prototype.storage=function(e,t,r){return e&&e._id?this.request({method:"GET",resource:e.resource(),id:e.id(),action:"store",key:t},function(){return function(e,t){return e?r(e,null):r(null,t)}}(this)):r("Get of storage requires an object with a valid id.")},t.prototype.unstore=function(e,t,r){return e&&e._id?this.request({method:"DELETE",resource:e.resource(),id:e.id(),action:"store",key:t},function(){return function(e,t){return e?r(e,null):r(null,t)}}(this)):r("Storage requires an object with a valid id.")},t.prototype.getToken=function(){return null!=this.auth_token?this.auth_token:null},t.prototype.getTokenId=function(){return null!=this.auth_token?this.auth_token._id:null},t.prototype.getUserId=function(){return null!=this.auth_token?this.auth_token.UserId:null},t.prototype.isLoggedIn=function(){return null!==this.getUserId()},t.prototype.getCurrentUser=function(e){if(null!=this.user)e(this.user);else{if(!this.isLoggedIn())return!1;get("users",this.getUserId()).done(function(t){return null!=t?(this.getUserId()===this.user._id&&(this.user=t),e(this.user)):void 0})}return!0},t}()}).call(this);