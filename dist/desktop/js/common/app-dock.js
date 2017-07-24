define(function(a){function b(a){!b.isInited&&b.init(null),this.appInstance=null,this.$target=null,this.options=null,this._init(a)}var c,d,e,f;window.PKUI;return c=a("jquery"),d=a("artTemplate"),e=a("../../tpl/desktop/dockItem.html"),f=d.compile(e,{escape:!1}),d.helper("dockItemIconFormat",function(a){return a?a.indexOf("fa-")!==-1?'<span class="dock-item-icon dock-item-fonticon"><i class="'+a+'"></i></span>':a.indexOf(".png")!==-1?'<img class="dock-item-icon" src="'+a+'">':"":""}),b.namespace="pkui.app.dock",b.events={remove:"remove."+b.namespace,add:"add."+b.namespace,close:"click.close."+b.namespace,show:"click.show."+b.namespace},b.defaults={$container:".topbar-dock"},b.isInited=!1,b.init=function(a){this.options=c.extend({},this.defaults,a),this.options.$container=this.prototype.$container=c(this.options.$container),this.manager.init(),this.isInited=!0},b.manager={containerSelector:".topbar-dock",$container:null,$dock:null,$dockDropmenuContainer:".dock-dropmenu",$dockDropmenu:".dock-dropmenu-list",$indicator:".dock-dropmenu-indicator",itemSelector:".topbar-dock-item",itemMargin:0,itemPadding:0,itemGap:0,stepItemWith:10,itemWidth:0,minItemWidth:0,maxItemWidth:0,availableContainerWidth:0,itemNum:0,displayItemNum:0,hiddenItemNum:0,minWidthItemNum:0,maxWidthItemNum:0,init:function(){this._init(),this._calAvailableContainerWidth(),this._calItemNum(),this._bindOnAddDockItem(),this._bindOnClickIndicator(),this._bindOnRemoveDockItem(),this._bindClearMenu(),this._bindClickItenInDropmenu()},_init:function(){return c.extend(this,{itemMargin:6,itemPadding:26,itemGap:32,itemWidth:136,minItemWidth:60,maxItemWidth:136}),this.$dockDropmenuContainer=c(this.$dockDropmenuContainer),this.$dockDropmenu=c(this.$dockDropmenu),this.$indicator=c(this.$indicator),this.$dockDropmenuContainer.appendTo(c(document.body)),this},_calAvailableContainerWidth:function(){var a,d,e,f,g;return a=b.options.$container,d=a.parent(),e=a.siblings(),f=d.width(),this.$container=a,e.each(function(){var a;a=c(this),g=parseInt(a.outerWidth())+parseInt(a.css("margin-left"))+parseInt(a.css("margin-right")),f-=g}),f-=parseInt(a.css("padding-left"))+parseInt(a.css("padding-right"))+parseInt(a.css("margin-left"))+parseInt(a.css("margin-right")),this.availableContainerWidth=f-10-40,this},_calItemNum:function(){return this.itemNum=this.$container.find(this.itemSelector).size()+this.$dockDropmenu.find(this.itemSelector).size(),this.minWidthItemNum=Math.floor(this.availableContainerWidth/(this.minItemWidth+this.itemGap)),this.maxWidthItemNum=Math.floor(this.availableContainerWidth/(this.maxItemWidth+this.itemGap)),this},_bindOnAddDockItem:function(){var a;a=this,this.$container.on(b.events.add,a.itemSelector,function(){var b,d,e,f,g;if(b=c(this),a.itemNum++,a.$dockDropmenu.addClass("hidden"),a.hiddenItemNum>0)return b.appendTo(a.$dockDropmenu),b.show(),void a.hiddenItemNum++;if(a.itemNum<=a.maxWidthItemNum)return a.displayItemNum++,void b.show();if(a.itemNum<=a.minWidthItemNum){d=a.itemWidth+a.itemGap;do d-=a.stepItemWith,e=d*a.itemNum;while(e>=a.availableContainerWidth);return f=d-a.itemGap-1,f<a.minItemWidth&&(f=a.minItemWidth),a.itemWidth=f,a.$container.find(a.itemSelector).css("width",f),a.displayItemNum++,void b.show()}a.$indicator.show(),g=a.$indicator.offset(),a.$dockDropmenuContainer.css({top:g.top+30,left:g.left}),a.$dockDropmenu.append(this),a.hiddenItemNum++,b.show()})},_bindOnRemoveDockItem:function(){var a;a=this,a.$container.add(a.$dockDropmenu).on(b.events.remove,a.itemSelector,function(){var b,d,e,f;if(b=c(this),b.hide(),a.itemNum--,b.parent().is(a.containerSelector)){if(a.hiddenItemNum>0)return a.$dockDropmenu.find(a.itemSelector).eq(0).css("width",a.itemWidth).appendTo(a.$container),a.hiddenItemNum--,void(0===a.hiddenItemNum&&(a.$dockDropmenu.toggleClass("hidden"),a.$indicator.hide()));if(a.itemNum<a.maxWidthItemNum)return void a.displayItemNum--;d=a.itemWidth+a.itemGap;do d+=a.stepItemWith,e=d*a.itemNum;while(e<=a.availableContainerWidth);return f=d-a.itemGap-a.stepItemWith-1,f>a.maxItemWidth&&(f=a.maxItemWidth),a.itemWidth=f,a.$container.find(a.itemSelector).css("width",f),void a.displayItemNum--}a.hiddenItemNum--,0===a.hiddenItemNum&&(a.$dockDropmenu.toggleClass("hidden"),a.$indicator.hide())})},_bindOnClickIndicator:function(){var a;return a=this,this.$indicator.on("click.app",function(){a.$dockDropmenu.toggleClass("hidden")}),this},_bindClearMenu:function(){var a;return a=this,c(document).on("click.app",function(b){b.target!=a.$indicator.get(0)&&a.$dockDropmenu.addClass("hidden")}),this},_bindClickItenInDropmenu:function(){var a;return a=this,this.$dockDropmenu.on("click.app",this.itemSelector,function(){var b,d;b=c(this),d=a.$container.find(a.itemSelector).last(),b.css("width",a.itemWidth),a.$dockDropmenu.append(d),a.$container.prepend(b)}),this}},b.prototype.defaults={icon:"",title:"",dockTemplateName:"desktop/dockItem",addAnimateClass:"animated flash",showAnimateClass:"animated flash"},c.extend(b.prototype,{show:function(){return this.$container.add(b.manager.$dockDropmenu).find(b.manager.itemSelector).removeClass("active "+this.options.showAnimateClass),this.$target.addClass("active "+this.options.showAnimateClass),this},hide:function(){return this.$target.removeClass("active"),this},destroy:function(){return this.$target&&this.$target.trigger(b.events.remove),this.$target.remove(),this.appInstance.isAppDockDestroy=!0,this.$target=null,this.options=null,this.appInstance=null,this}}),c.extend(b.prototype,{_init:function(a){return this.options=c.extend({},this.defaults,a),this._create(),this},_create:function(){var a,d,e,g;return e=this,a={icon:this.options.icon,title:this.options.title},g=f(a),d=c(g),d.hide(),e.$container.append(d),e.$target=d,e.show(),e._bindEvent(),d.trigger(b.events.add),this},_bindEvent:function(){var a;return a=this,a.$target.find(".dock-item-btn").on(b.events.close,function(b){b.stopPropagation(),a.appInstance&&!a.appInstance.isAppDestroy&&a.appInstance.destroy()}),a.$target.on(b.events.show,function(){a.appInstance.show()}),this}}),b});