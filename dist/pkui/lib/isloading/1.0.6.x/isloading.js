define(function(a){function b(a,b){this.element=a,this.options=d.extend({},g,b),this._defaults=g,this._name=f,this._loader=null,this.init()}function c(){d[f]||(d.isLoading=function(a){d("body").isLoading(a)})}var d=a("jquery"),e=e,f="isLoading",g={position:"right",text:"",class:"icon-refresh",tpl:'<span class="isloading-wrapper %wrapper%">%text%<i class="%class% icon-spin"></i></span>',disableSource:!0,disableOthers:[]};b.prototype={init:function(){d(this.element).is("body")&&(this.options.position="overlay"),this.show()},show:function(){var a=this,b=a.options.tpl.replace("%wrapper%"," isloading-show  isloading-"+a.options.position);switch(b=b.replace("%class%",a.options.class),b=b.replace("%text%",""!==a.options.text?a.options.text+" ":""),a._loader=d(b),d(a.element).is("input, textarea")&&!0===a.options.disableSource?d(a.element).attr("disabled","disabled"):!0===a.options.disableSource&&d(a.element).addClass("disabled"),a.options.position){case"inside":d(a.element).append(a._loader);break;case"overlay":var c=null;if(d(a.element).is("body"))c=d('<div class="isloading-overlay" style="position:fixed; left:0; top:0; z-index: 10000; background: rgba(0,0,0,0.5); width: 100%; height: '+d(e).height()+'px;" />'),d("body").prepend(c),d(e).on("resize",function(){c.height(d(e).height()+"px"),a._loader.css({top:d(e).height()/2-a._loader.outerHeight()/2+"px"})});else{var f=d(a.element).css("position"),g={},h=d(a.element).outerHeight()+"px",i="100%";g="relative"===f||"absolute"===f?{top:0,left:0}:d(a.element).position(),c=d('<div class="isloading-overlay" style="position:absolute; top: '+g.top+"px; left: "+g.left+"px; z-index: 10000; background: rgba(0,0,0,0.5); width: "+i+"; height: "+h+';" />'),d(a.element).prepend(c),d(e).on("resize",function(){c.height(d(a.element).outerHeight()+"px"),a._loader.css({top:c.outerHeight()/2-a._loader.outerHeight()/2+"px"})})}c.html(a._loader),a._loader.css({top:c.outerHeight()/2-a._loader.outerHeight()/2+"px"});break;default:d(a.element).after(a._loader)}a.disableOthers()},hide:function(){"overlay"===this.options.position?d(this.element).find(".isloading-overlay").first().remove():(d(this._loader).remove(),d(this.element).text(d(this.element).attr("data-isloading-label"))),d(this.element).removeAttr("disabled").removeClass("disabled"),this.enableOthers()},disableOthers:function(){d.each(this.options.disableOthers,function(a,b){var c=d(b);c.is("button, input, textarea")?c.attr("disabled","disabled"):c.addClass("disabled")})},enableOthers:function(){d.each(this.options.disableOthers,function(a,b){var c=d(b);c.is("button, input, textarea")?c.removeAttr("disabled"):c.removeClass("disabled")})}},d.fn[f]=function(a){return this.each(function(){if(a&&"hide"!==a||!d.data(this,"plugin_"+f))d.data(this,"plugin_"+f,new b(this,a));else{var c=d.data(this,"plugin_"+f);"hide"===a?c.hide():c.show()}})},c(),d.extend(g,{position:"inside",text:"",class:"isloading-icon",tpl:'<span class="isloading-wrapper %wrapper%">%text%<i class="%class%"></i></span>',disableSource:!0,disableOthers:[]})});