define(function(a){function b(a){!b.isInited&&b.init(null),this.appId=null,this.$target=a,this.appDock=null,this.appWindow=null,this.isAppDestroy=!1,this.isAppDockDestroy=!1,this.isAppWindowDestroy=!1,this._init()}var c,d,e;return c=a("jquery"),d=a("./app-dock"),e=a("./app-window"),b.defaults={appSelector:'[data-pkui-app="true"]',optionsProp:"data-pkui-app-options",hideAllAppSelector:".topbar-home"},b.appList=[],b.isInited=!1,b.init=function(a){this.options=c.extend({},b.defaults,a),this._bind(),this.isInited=!0},b.hideAll=function(){c.each(this.appList,function(){this&&this.hide&&this.hide()})},b._bind=function(){c(window.document).on("click.shortcut.app",this.options.appSelector,function(){var a,d;return a=c(this),(d=a.data("appInstance"))?void d.show():void a.data("appInstance",new b(a))}).on("click.home.app",this.options.hideAllAppSelector,function(){b.hideAll()})},b.prototype.defaults={icon:"",title:"",src:"",mode:"default",data:""},c.extend(b.prototype,{show:function(){return this.appDock.show(),this.appWindow.show(),this},hide:function(){return this.appDock.hide(),this.appWindow.hide(),this},destroy:function(){return!this.isAppDockDestroy&&this.appDock.destroy(),!this.isAppWindowDestroy&&this.appWindow.destroy(),this.$target&&this.$target.data("appInstance",null),this.isAppDestroy=!0,this.$target=null,this.appDock=null,this.appWindow=null,b.appList[this.appId]=null,this}}),c.extend(b.prototype,{_init:function(){return this.options=c.extend({},this.defaults,this._getOptsFromTarget()),this.appDock=new d(this.options),this.appDock.appInstance=this,this.appWindow=new e(this.options),this.appWindow.appInstance=this,this.appId=b.appList.length,b.appList.push(this),this},_getOptsFromTarget:function(){var a=this.$target.attr(b.options.optionsProp);return c.parseJSON(a)}}),b});