define(function(a){function b(a){var b,c;return"object"!=typeof a?"":(b=a.bgColor,c=a.color,"background-color: "+b+"; color: "+c+";")}var c=a("jquery"),d=a("../common/menuSource"),e=a("artTemplate"),f=a("../config/shortcut"),g={};return g.defaults={src:"__CTX__/static/desktop/tpl/system/index.html",mode:"default"},g.template='<div class="launchpad-shortcut"      data-pkui-app="true"     data-pkui-app-options=\'{         "icon": "{{icon}}",         "title": "{{menuName}}",         "src": "{{src}}",         "menuId": {{menuId}},         "mode": "{{mode}}"}\'>{{if isFontIcon}}         <span class="launchpad-shortcut-icon launchpad-shortcut-fonticon {{ fontIconClass }} " style="{{ fontIconStyle }}"><i class="{{icon}}"></i></span>{{else}}         <img class="launchpad-shortcut-icon" src="{{icon}}" alt="">{{/if}}     <p class="launchpad-shortcut-title">{{menuName}}</p></div>',g._init=function(){this.sysMenuSet=d.getSet(!0),this.config=f,this.render=e.compile(this.template)},g.getHtml=function(a){a(this._getHtml())},g._getHtml=function(){var a=this,d=this.sysMenuSet,e=this.defaults.src,f=this.defaults.mode,g="";return c.each(this.config,function(c,h){var i,j,k,l,m=!0,n="";return!(j=d[h.menuId])||(k=h.icon||j.icon||"fa fa-play",k.indexOf(".png")!==-1&&(m=!1),l=h.menuId,"string"==typeof l&&(l='"'+l+'"'),m&&(n=b(h.fontIconStyle)),i=a.render({icon:k,menuName:h.menuName||j.menuName,menuId:l,src:h.src||e,mode:h.mode||f,isFontIcon:m,fontIconClass:h.fontIconClass||"fonticon-default",fontIconStyle:n}),void(g+=i))}),g},g._init(),g});