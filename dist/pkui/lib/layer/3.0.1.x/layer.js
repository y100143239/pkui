!function(a,b){"use strict";function c(a){var b,c;b=a,c=b.lastIndexOf("layer"),b=b.substring(0,c),h.config({path:b})}var d,e,f=a.layui&&layui.define,g={getPath:function(){var a=document.scripts,b=a[a.length-1],c=b.src;if(!b.getAttribute("merge"))return c.substring(0,c.lastIndexOf("/")+1)}(),config:{},end:{},minIndex:0,minLeft:[],btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],type:["dialog","page","iframe","loading","tips"]},h={v:"3.0.1",ie:function(){var b=navigator.userAgent.toLowerCase();return!!(a.ActiveXObject||"ActiveXObject"in a)&&((b.match(/msie\s(\d+)/)||[])[1]||"11")}(),index:a.layer&&a.layer.v?1e5:0,path:g.getPath,config:function(a,b){return a=a||{},h.cache=g.config=d.extend({},g.config,a),h.path=g.config.path||h.path,"string"==typeof a.extend&&(a.extend=[a.extend]),g.config.path&&h.ready(),a.extend?(f?layui.addcss("modules/layer/"+a.extend):h.link("skin/"+a.extend),this):this},link:function(b,c,e){if(h.path){var f=d("head")[0],g=document.createElement("link");"string"==typeof c&&(e=c);var i=(e||b).replace(/\.|\//g,""),j="layuicss-"+i,k=0;g.rel="stylesheet",g.href=h.path+b,g.id=j,d("#"+j)[0]||f.appendChild(g),"function"==typeof c&&!function b(){return++k>80?a.console&&console.error("layer.css: Invalid"):void(1989===parseInt(d("#"+j).css("width"))?c():setTimeout(b,100))}()}},ready:function(a){var b="skinlayercss",c="1110";return f?layui.addcss("modules/layer/default/layer.css?v="+h.v+c,a,b):h.link("skin/default/layer.css?v="+h.v+c,a,b),this},alert:function(a,b,c){var e="function"==typeof b;return e&&(c=b),h.open(d.extend({content:a,yes:c},e?{}:b))},confirm:function(a,b,c,e){var f="function"==typeof b;return f&&(e=c,c=b),h.open(d.extend({content:a,btn:g.btn,yes:c,btn2:e},f?{}:b))},msg:function(a,c,e){var f="function"==typeof c,i=g.config.skin,k=(i?i+" "+i+"-msg":"")||"layui-layer-msg",l=j.anim.length-1;return f&&(e=c),h.open(d.extend({content:a,time:3e3,shade:!1,skin:k,title:!1,closeBtn:!1,btn:!1,resize:!1,end:e},f&&!g.config.skin?{skin:k+" layui-layer-hui",anim:l}:function(){return c=c||{},(c.icon===-1||c.icon===b&&!g.config.skin)&&(c.skin=k+" "+(c.skin||"layui-layer-hui")),c}()))},load:function(a,b){return h.open(d.extend({type:3,icon:a||0,resize:!1,shade:.01},b))},tips:function(a,b,c){return h.open(d.extend({type:4,content:[a,b],closeBtn:!1,time:3e3,shade:!1,resize:!1,fixed:!1,maxWidth:210},c))}},i=function(a){var b=this;b.index=++h.index,b.config=d.extend({},b.config,g.config,a),document.body?b.creat():setTimeout(function(){b.creat()},50)};i.pt=i.prototype;var j=["layui-layer",".layui-layer-title",".layui-layer-main",".layui-layer-dialog","layui-layer-iframe","layui-layer-content","layui-layer-btn","layui-layer-close"];j.anim=["layer-anim","layer-anim-01","layer-anim-02","layer-anim-03","layer-anim-04","layer-anim-05","layer-anim-06"],i.pt.config={type:0,shade:.3,fixed:!0,move:j[1],title:"&#x4FE1;&#x606F;",offset:"auto",area:"auto",closeBtn:1,time:0,zIndex:19891014,maxWidth:360,anim:0,icon:-1,moveType:1,resize:!0,scrollbar:!0,tips:2},i.pt.vessel=function(a,b){var c=this,e=c.index,f=c.config,h=f.zIndex+e,i="object"==typeof f.title,k=f.maxmin&&(1===f.type||2===f.type),l=f.title?'<div class="layui-layer-title" style="'+(i?f.title[1]:"")+'">'+(i?f.title[0]:f.title)+"</div>":"";return f.zIndex=h,b([f.shade?'<div class="layui-layer-shade" id="layui-layer-shade'+e+'" times="'+e+'" style="'+("z-index:"+(h-1)+"; background-color:"+(f.shade[1]||"#000")+"; opacity:"+(f.shade[0]||f.shade)+"; filter:alpha(opacity="+(100*f.shade[0]||100*f.shade)+");")+'"></div>':"",'<div class="'+j[0]+(" layui-layer-"+g.type[f.type])+(0!=f.type&&2!=f.type||f.shade?"":" layui-layer-border")+" "+(f.skin||"")+'" id="'+j[0]+e+'" type="'+g.type[f.type]+'" times="'+e+'" showtime="'+f.time+'" conType="'+(a?"object":"string")+'" style="z-index: '+h+"; width:"+f.area[0]+";height:"+f.area[1]+(f.fixed?"":";position:absolute;")+'">'+(a&&2!=f.type?"":l)+'<div id="'+(f.id||"")+'" class="layui-layer-content'+(0==f.type&&f.icon!==-1?" layui-layer-padding":"")+(3==f.type?" layui-layer-loading"+f.icon:"")+'">'+(0==f.type&&f.icon!==-1?'<i class="layui-layer-ico layui-layer-ico'+f.icon+'"></i>':"")+(1==f.type&&a?"":f.content||"")+'</div><span class="layui-layer-setwin">'+function(){var a=k?'<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>':"";return f.closeBtn&&(a+='<a class="layui-layer-ico '+j[7]+" "+j[7]+(f.title?f.closeBtn:4==f.type?"1":"2")+'" href="javascript:;"></a>'),a}()+"</span>"+(f.btn?function(){var a="";"string"==typeof f.btn&&(f.btn=[f.btn]);for(var b=0,c=f.btn.length;b<c;b++)a+='<a class="'+j[6]+b+'">'+f.btn[b]+"</a>";return'<div class="'+j[6]+" layui-layer-btn-"+(f.btnAlign||"")+'">'+a+"</div>"}():"")+(f.resize?'<span class="layui-layer-resize"></span>':"")+"</div>"],l,d('<div class="layui-layer-move"></div>')),c},i.pt.creat=function(){var a=this,b=a.config,c=a.index,f=b.content,i="object"==typeof f,k=d("body");if(!d("#"+b.id)[0]){switch("string"==typeof b.area&&(b.area="auto"===b.area?["",""]:[b.area,""]),b.shift&&(b.anim=b.shift),6==h.ie&&(b.fixed=!1),b.type){case 0:b.btn="btn"in b?b.btn:g.btn[0],h.closeAll("dialog");break;case 2:var f=b.content=i?b.content:[b.content||"http://layer.layui.com","auto"];b.content='<iframe scrolling="'+(b.content[1]||"auto")+'" allowtransparency="true" id="'+j[4]+c+'" name="'+j[4]+c+'" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="'+b.content[0]+'"></iframe>';break;case 3:delete b.title,delete b.closeBtn,b.icon===-1&&0===b.icon,h.closeAll("loading");break;case 4:i||(b.content=[b.content,"body"]),b.follow=b.content[1],b.content=b.content[0]+'<i class="layui-layer-TipsG"></i>',delete b.title,b.tips="object"==typeof b.tips?b.tips:[b.tips,!0],b.tipsMore||h.closeAll("tips")}a.vessel(i,function(e,h,l){k.append(e[0]),i?function(){2==b.type||4==b.type?function(){d("body").append(e[1])}():function(){f.parents("."+j[0])[0]||(f.data("display",f.css("display")).show().addClass("layui-layer-wrap").wrap(e[1]),d("#"+j[0]+c).find("."+j[5]).before(h))}()}():k.append(e[1]),d(".layui-layer-move")[0]||k.append(g.moveElem=l),a.layero=d("#"+j[0]+c),b.scrollbar||j.html.css("overflow","hidden").attr("layer-full",c)}).auto(c),2==b.type&&6==h.ie&&a.layero.find("iframe").attr("src",f[0]),4==b.type?a.tips():a.offset(),b.fixed&&e.on("resize",function(){a.offset(),(/^\d+%$/.test(b.area[0])||/^\d+%$/.test(b.area[1]))&&a.auto(c),4==b.type&&a.tips()}),b.time<=0||setTimeout(function(){h.close(a.index)},b.time),a.move().callback(),j.anim[b.anim]&&a.layero.addClass(j.anim[b.anim]).data("anim",!0)}},i.pt.auto=function(a){function b(a){a=g.find(a),a.height(i[1]-k-l-2*(0|parseFloat(a.css("padding"))))}var c=this,f=c.config,g=d("#"+j[0]+a);""===f.area[0]&&f.maxWidth>0&&(h.ie&&h.ie<8&&f.btn&&g.width(g.innerWidth()),g.outerWidth()>f.maxWidth&&g.width(f.maxWidth));var i=[g.innerWidth(),g.innerHeight()],k=g.find(j[1]).outerHeight()||0,l=g.find("."+j[6]).outerHeight()||0;switch(f.type){case 2:b("iframe");break;default:""===f.area[1]?f.fixed&&i[1]>=e.height()&&(i[1]=e.height(),b("."+j[5])):b("."+j[5])}return c},i.pt.offset=function(){var a=this,b=a.config,c=a.layero,d=[c.outerWidth(),c.outerHeight()],f="object"==typeof b.offset;a.offsetTop=(e.height()-d[1])/2,a.offsetLeft=(e.width()-d[0])/2,f?(a.offsetTop=b.offset[0],a.offsetLeft=b.offset[1]||a.offsetLeft):"auto"!==b.offset&&("t"===b.offset?a.offsetTop=0:"r"===b.offset?a.offsetLeft=e.width()-d[0]:"b"===b.offset?a.offsetTop=e.height()-d[1]:"l"===b.offset?a.offsetLeft=0:"lt"===b.offset?(a.offsetTop=0,a.offsetLeft=0):"lb"===b.offset?(a.offsetTop=e.height()-d[1],a.offsetLeft=0):"rt"===b.offset?(a.offsetTop=0,a.offsetLeft=e.width()-d[0]):"rb"===b.offset?(a.offsetTop=e.height()-d[1],a.offsetLeft=e.width()-d[0]):a.offsetTop=b.offset),b.fixed||(a.offsetTop=/%$/.test(a.offsetTop)?e.height()*parseFloat(a.offsetTop)/100:parseFloat(a.offsetTop),a.offsetLeft=/%$/.test(a.offsetLeft)?e.width()*parseFloat(a.offsetLeft)/100:parseFloat(a.offsetLeft),a.offsetTop+=e.scrollTop(),a.offsetLeft+=e.scrollLeft()),c.attr("minLeft")&&(a.offsetTop=e.height()-(c.find(j[1]).outerHeight()||0),a.offsetLeft=c.css("left")),c.css({top:a.offsetTop,left:a.offsetLeft})},i.pt.tips=function(){var a=this,b=a.config,c=a.layero,f=[c.outerWidth(),c.outerHeight()],g=d(b.follow);g[0]||(g=d("body"));var h={width:g.outerWidth(),height:g.outerHeight(),top:g.offset().top,left:g.offset().left},i=c.find(".layui-layer-TipsG"),k=b.tips[0];b.tips[1]||i.remove(),h.autoLeft=function(){h.left+f[0]-e.width()>0?(h.tipLeft=h.left+h.width-f[0],i.css({right:12,left:"auto"})):h.tipLeft=h.left},h.where=[function(){h.autoLeft(),h.tipTop=h.top-f[1]-10,i.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color",b.tips[1])},function(){h.tipLeft=h.left+h.width+10,h.tipTop=h.top,i.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color",b.tips[1])},function(){h.autoLeft(),h.tipTop=h.top+h.height+10,i.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color",b.tips[1])},function(){h.tipLeft=h.left-f[0]-10,h.tipTop=h.top,i.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color",b.tips[1])}],h.where[k-1](),1===k?h.top-(e.scrollTop()+f[1]+16)<0&&h.where[2]():2===k?e.width()-(h.left+h.width+f[0]+16)>0||h.where[3]():3===k?h.top-e.scrollTop()+h.height+f[1]+16-e.height()>0&&h.where[0]():4===k&&f[0]+16-h.left>0&&h.where[1](),c.find("."+j[5]).css({"background-color":b.tips[1],"padding-right":b.closeBtn?"30px":""}),c.css({left:h.tipLeft-(b.fixed?e.scrollLeft():0),top:h.tipTop-(b.fixed?e.scrollTop():0)})},i.pt.move=function(){var a=this,b=a.config,c=d(document),f=a.layero,i=f.find(b.move),j=f.find(".layui-layer-resize"),k={};return b.move&&i.css("cursor","move"),i.on("mousedown",function(a){a.preventDefault(),b.move&&(k.moveStart=!0,k.offset=[a.clientX-parseFloat(f.css("left")),a.clientY-parseFloat(f.css("top"))],g.moveElem.css("cursor","move").show())}),j.on("mousedown",function(a){a.preventDefault(),k.resizeStart=!0,k.offset=[a.clientX,a.clientY],k.area=[f.outerWidth(),f.outerHeight()],g.moveElem.css("cursor","se-resize").show()}),c.on("mousemove",function(c){if(k.moveStart){var d=c.clientX-k.offset[0],g=c.clientY-k.offset[1],i="fixed"===f.css("position");if(c.preventDefault(),k.stX=i?0:e.scrollLeft(),k.stY=i?0:e.scrollTop(),!b.moveOut){var j=e.width()-f.outerWidth()+k.stX,l=e.height()-f.outerHeight()+k.stY;d<k.stX&&(d=k.stX),d>j&&(d=j),g<k.stY&&(g=k.stY),g>l&&(g=l)}f.css({left:d,top:g})}if(b.resize&&k.resizeStart){var d=c.clientX-k.offset[0],g=c.clientY-k.offset[1];c.preventDefault(),h.style(a.index,{width:k.area[0]+d,height:k.area[1]+g}),k.isResize=!0}}).on("mouseup",function(a){k.moveStart&&(delete k.moveStart,g.moveElem.hide(),b.moveEnd&&b.moveEnd()),k.resizeStart&&(delete k.resizeStart,g.moveElem.hide())}),a},i.pt.callback=function(){function a(){var a=e.cancel&&e.cancel(b.index,c);a===!1||h.close(b.index)}var b=this,c=b.layero,e=b.config;b.openLayer(),e.success&&(2==e.type?c.find("iframe").on("load",function(){e.success(c,b.index)}):e.success(c,b.index)),6==h.ie&&b.IE6(c),c.find("."+j[6]).children("a").on("click",function(){var a=d(this).index();if(0===a)e.yes?e.yes(b.index,c):e.btn1?e.btn1(b.index,c):h.close(b.index);else{var f=e["btn"+(a+1)]&&e["btn"+(a+1)](b.index,c);f===!1||h.close(b.index)}}),c.find("."+j[7]).on("click",a),e.shadeClose&&d("#layui-layer-shade"+b.index).on("click",function(){h.close(b.index)}),c.find(".layui-layer-min").on("click",function(){var a=e.min&&e.min(c);a===!1||h.min(b.index,e)}),c.find(".layui-layer-max").on("click",function(){d(this).hasClass("layui-layer-maxmin")?(h.restore(b.index),e.restore&&e.restore(c)):(h.full(b.index,e),setTimeout(function(){e.full&&e.full(c)},100))}),e.end&&(g.end[b.index]=e.end)},g.reselect=function(){d.each(d("select"),function(a,b){var c=d(this);c.parents("."+j[0])[0]||1==c.attr("layer")&&d("."+j[0]).length<1&&c.removeAttr("layer").show(),c=null})},i.pt.IE6=function(a){d("select").each(function(a,b){var c=d(this);c.parents("."+j[0])[0]||"none"===c.css("display")||c.attr({layer:"1"}).hide(),c=null})},i.pt.openLayer=function(){var a=this;h.zIndex=a.config.zIndex,h.setTop=function(a){var b=function(){h.zIndex++,a.css("z-index",h.zIndex+1)};return h.zIndex=parseInt(a[0].style.zIndex),a.on("mousedown",b),h.zIndex}},g.record=function(a){var b=[a.width(),a.height(),a.position().top,a.position().left+parseFloat(a.css("margin-left"))];a.find(".layui-layer-max").addClass("layui-layer-maxmin"),a.attr({area:b})},g.rescollbar=function(a){j.html.attr("layer-full")==a&&(j.html[0].style.removeProperty?j.html[0].style.removeProperty("overflow"):j.html[0].style.removeAttribute("overflow"),j.html.removeAttr("layer-full"))},a.layer=h,h.getChildFrame=function(a,b){return b=b||d("."+j[4]).attr("times"),d("#"+j[0]+b).find("iframe").contents().find(a)},h.getFrameIndex=function(a){return d("#"+a).parents("."+j[4]).attr("times")},h.iframeAuto=function(a){if(a){var b=h.getChildFrame("html",a).outerHeight(),c=d("#"+j[0]+a),e=c.find(j[1]).outerHeight()||0,f=c.find("."+j[6]).outerHeight()||0;c.css({height:b+e+f}),c.find("iframe").css({height:b})}},h.iframeSrc=function(a,b){d("#"+j[0]+a).find("iframe").attr("src",b)},h.style=function(a,b,c){var e=d("#"+j[0]+a),f=e.find(".layui-layer-content"),h=e.attr("type"),i=e.find(j[1]).outerHeight()||0,k=e.find("."+j[6]).outerHeight()||0;e.attr("minLeft");h!==g.type[3]&&h!==g.type[4]&&(c||(parseFloat(b.width)<=260&&(b.width=260),parseFloat(b.height)-i-k<=64&&(b.height=64+i+k)),e.css(b),k=e.find("."+j[6]).outerHeight(),h===g.type[2]?e.find("iframe").css({height:parseFloat(b.height)-i-k}):f.css({height:parseFloat(b.height)-i-k-parseFloat(f.css("padding-top"))-parseFloat(f.css("padding-bottom"))}))},h.min=function(a,b){var c=d("#"+j[0]+a),f=c.find(j[1]).outerHeight()||0,i=c.attr("minLeft")||181*g.minIndex+"px",k=c.css("position");g.record(c),g.minLeft[0]&&(i=g.minLeft[0],g.minLeft.shift()),c.attr("position",k),h.style(a,{width:180,height:f,left:i,top:e.height()-f,position:"fixed",overflow:"hidden"},!0),c.find(".layui-layer-min").hide(),"page"===c.attr("type")&&c.find(j[4]).hide(),g.rescollbar(a),c.attr("minLeft")||g.minIndex++,c.attr("minLeft",i)},h.restore=function(a){var b=d("#"+j[0]+a),c=b.attr("area").split(",");b.attr("type");h.style(a,{width:parseFloat(c[0]),height:parseFloat(c[1]),top:parseFloat(c[2]),left:parseFloat(c[3]),position:b.attr("position"),overflow:"visible"},!0),b.find(".layui-layer-max").removeClass("layui-layer-maxmin"),b.find(".layui-layer-min").show(),"page"===b.attr("type")&&b.find(j[4]).show(),g.rescollbar(a)},h.full=function(a){var b,c=d("#"+j[0]+a);g.record(c),j.html.attr("layer-full")||j.html.css("overflow","hidden").attr("layer-full",a),clearTimeout(b),b=setTimeout(function(){var b="fixed"===c.css("position");h.style(a,{top:b?0:e.scrollTop(),left:b?0:e.scrollLeft(),width:e.width(),height:e.height()},!0),c.find(".layui-layer-min").hide()},100)},h.title=function(a,b){var c=d("#"+j[0]+(b||h.index)).find(j[1]);c.html(a)},h.close=function(a){var b=d("#"+j[0]+a),c=b.attr("type"),e="layer-anim-close";if(b[0]){var f="layui-layer-wrap",i=function(){if(c===g.type[1]&&"object"===b.attr("conType")){b.children(":not(."+j[5]+")").remove();for(var e=b.find("."+f),h=0;h<2;h++)e.unwrap();e.css("display",e.data("display")).removeClass(f)}else{if(c===g.type[2])try{var i=d("#"+j[4]+a)[0];i.contentWindow.document.write(""),i.contentWindow.close(),b.find("."+j[5])[0].removeChild(i)}catch(a){}b[0].innerHTML="",b.remove()}"function"==typeof g.end[a]&&g.end[a](),delete g.end[a]};b.data("anim")&&b.addClass(e),d("#layui-layer-moves, #layui-layer-shade"+a).remove(),6==h.ie&&g.reselect(),g.rescollbar(a),b.attr("minLeft")&&(g.minIndex--,g.minLeft.push(b.attr("minLeft"))),setTimeout(function(){i()},h.ie&&h.ie<10||!b.data("anim")?0:200)}},h.closeAll=function(a){d.each(d("."+j[0]),function(){var b=d(this),c=a?b.attr("type")===a:1;c&&h.close(b.attr("times")),c=null})};var k=h.cache||{},l=function(a){return k.skin?" "+k.skin+" "+k.skin+"-"+a:""};h.prompt=function(a,b){var c="";if(a=a||{},"function"==typeof a&&(b=a),a.area){var f=a.area;c='style="width: '+f[0]+"; height: "+f[1]+';"',delete a.area}var g,i=2==a.formType?'<textarea class="layui-layer-input"'+c+">"+(a.value||"")+"</textarea>":function(){return'<input type="'+(1==a.formType?"password":"text")+'" class="layui-layer-input" value="'+(a.value||"")+'">'}();return h.open(d.extend({type:1,btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],content:i,skin:"layui-layer-prompt"+l("prompt"),maxWidth:e.width(),success:function(a){g=a.find(".layui-layer-input"),g.focus()},resize:!1,yes:function(c){var d=g.val();""===d?g.focus():d.length>(a.maxlength||500)?h.tips("&#x6700;&#x591A;&#x8F93;&#x5165;"+(a.maxlength||500)+"&#x4E2A;&#x5B57;&#x6570;",g,{tips:1}):b&&b(d,c,g)}},a))},h.tab=function(a){a=a||{};var b=a.tab||{};return h.open(d.extend({type:1,skin:"layui-layer-tab"+l("tab"),resize:!1,title:function(){var a=b.length,c=1,d="";if(a>0)for(d='<span class="layui-layer-tabnow">'+b[0].title+"</span>";c<a;c++)d+="<span>"+b[c].title+"</span>";return d}(),content:'<ul class="layui-layer-tabmain">'+function(){var a=b.length,c=1,d="";if(a>0)for(d='<li class="layui-layer-tabli xubox_tab_layer">'+(b[0].content||"no content")+"</li>";c<a;c++)d+='<li class="layui-layer-tabli">'+(b[c].content||"no  content")+"</li>";return d}()+"</ul>",success:function(b){var c=b.find(".layui-layer-title").children(),e=b.find(".layui-layer-tabmain").children();c.on("mousedown",function(b){b.stopPropagation?b.stopPropagation():b.cancelBubble=!0;var c=d(this),f=c.index();c.addClass("layui-layer-tabnow").siblings().removeClass("layui-layer-tabnow"),e.eq(f).show().siblings().hide(),"function"==typeof a.change&&a.change(f)})}},a))},h.photos=function(b,c,e){function f(a,b,c){var d=new Image;return d.src=a,d.complete?b(d):(d.onload=function(){d.onload=null,b(d)},void(d.onerror=function(a){d.onerror=null,c(a)}))}var g={};if(b=b||{},b.photos){var i=b.photos.constructor===Object,j=i?b.photos:{},k=j.data||[],m=j.start||0;if(g.imgIndex=(0|m)+1,b.img=b.img||"img",i){if(0===k.length)return h.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;")}else{var n=d(b.photos),o=function(){k=[],n.find(b.img).each(function(a){var b=d(this);b.attr("layer-index",a),k.push({alt:b.attr("alt"),pid:b.attr("layer-pid"),src:b.attr("layer-src")||b.attr("src"),thumb:b.attr("src")})})};if(o(),0===k.length)return;if(c||n.on("click",b.img,function(){var a=d(this),c=a.attr("layer-index");h.photos(d.extend(b,{photos:{start:c,data:k,tab:b.tab},full:b.full}),!0),o()}),!c)return}g.imgprev=function(a){g.imgIndex--,g.imgIndex<1&&(g.imgIndex=k.length),g.tabimg(a)},g.imgnext=function(a,b){g.imgIndex++,g.imgIndex>k.length&&(g.imgIndex=1,b)||g.tabimg(a)},g.keyup=function(a){if(!g.end){var b=a.keyCode;a.preventDefault(),37===b?g.imgprev(!0):39===b?g.imgnext(!0):27===b&&h.close(g.index)}},g.tabimg=function(a){k.length<=1||(j.start=g.imgIndex-1,h.close(g.index),h.photos(b,!0,a))},g.event=function(){g.bigimg.hover(function(){g.imgsee.show()},function(){g.imgsee.hide()}),g.bigimg.find(".layui-layer-imgprev").on("click",function(a){a.preventDefault(),g.imgprev()}),g.bigimg.find(".layui-layer-imgnext").on("click",function(a){a.preventDefault(),g.imgnext()}),d(document).on("keyup",g.keyup)},g.loadi=h.load(1,{shade:!("shade"in b)&&.9,scrollbar:!1}),f(k[m].src,function(c){h.close(g.loadi),g.index=h.open(d.extend({type:1,area:function(){var e=[c.width,c.height],f=[d(a).width()-100,d(a).height()-100];if(!b.full&&(e[0]>f[0]||e[1]>f[1])){var g=[e[0]/f[0],e[1]/f[1]];g[0]>g[1]?(e[0]=e[0]/g[0],e[1]=e[1]/g[0]):g[0]<g[1]&&(e[0]=e[0]/g[1],e[1]=e[1]/g[1])}return[e[0]+"px",e[1]+"px"]}(),title:!1,shade:.9,shadeClose:!0,closeBtn:!1,move:".layui-layer-phimg img",moveType:1,scrollbar:!1,moveOut:!0,anim:5*Math.random()|0,skin:"layui-layer-photos"+l("photos"),content:'<div class="layui-layer-phimg"><img src="'+k[m].src+'" alt="'+(k[m].alt||"")+'" layer-pid="'+k[m].pid+'"><div class="layui-layer-imgsee">'+(k.length>1?'<span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span>':"")+'<div class="layui-layer-imgbar" style="display:'+(e?"block":"")+'"><span class="layui-layer-imgtit"><a href="javascript:;">'+(k[m].alt||"")+"</a><em>"+g.imgIndex+"/"+k.length+"</em></span></div></div></div>",success:function(a,c){g.bigimg=a.find(".layui-layer-phimg"),g.imgsee=a.find(".layui-layer-imguide,.layui-layer-imgbar"),g.event(a),b.tab&&b.tab(k[m],a)},end:function(){g.end=!0,d(document).off("keyup",g.keyup)}},b))},function(){h.close(g.loadi),h.msg("&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;",{time:3e4,btn:["&#x4E0B;&#x4E00;&#x5F20;","&#x4E0D;&#x770B;&#x4E86;"],yes:function(){k.length>1&&g.imgnext(!0,!0)}})})}},g.run=function(b){d=b,e=d(a),j.html=d("html"),h.open=function(a){var b=new i(a);return b.index}},"function"==typeof define&&define.cmd?define(function(a,b,d){var e=a("jquery");return g.run(e),c(d.uri),h}):(g.run(a.jQuery),h.ready())}(window);