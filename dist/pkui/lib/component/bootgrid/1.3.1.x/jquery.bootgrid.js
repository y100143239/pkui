define(function(a){a("jquery"),a("colResizable"),a("bootstrap-dropdown");var b=a("dataSource");!function(a,c,d){"use strict";function e(a){function b(b){return c.identifier&&b[c.identifier]==a[c.identifier]}var c=this;return!this.rows.contains(b)&&(this.rows.push(a),!0)}function f(b){var c=this.footer?this.footer.find(b):a(),d=this.header?this.header.find(b):a();return a.merge(c,d)}function g(b){return b?a.extend({},this.cachedParams,{ctx:b}):this.cachedParams}function h(){var b={current:this.current,rowCount:this.rowCount,sort:this.sortDictionary,searchPhrase:this.searchPhrase},c=this.options.post;return c=a.isFunction(c)?c():c,this.options.requestHandler(a.extend(!0,b,c))}function i(b){return"."+a.trim(b).replace(/\s+/gm,".")}function j(){var b=this.options.url;return a.isFunction(b)?b():b}function k(){this.element.trigger("initialize"+J),o.call(this),this.selection=this.options.selection&&null!=this.identifier,q.call(this),s.call(this),E.call(this),C.call(this),t.call(this),p.call(this),this.element.trigger("initialized"+J),l(this),this.element.on("loaded"+J,function(){var b=a(this);b.data("isColResizable")!==!0&&(b.colResizable({liveDrag:!0}),b.data("isColResizable",!0))})}function l(b){var d,e,f=b.element,g=b.options,h=a(g.queryFormSelector);1===h.size()&&(e=h.find("[onclick*='reload']").eq(0),d=h.find(":input[type='text']"),h.on("submit"+J,function(a){a.preventDefault(),e.trigger("click")}),1===h.find(":submit").size()||1===d.size()||d.on("keypress"+J,function(a){var b=a.keyCode?a.keyCode:a.which;13!==b&&"13"!==b||e.trigger("click")})),g.selectedCallback&&"function"==typeof c[g.selectedCallback]&&f.on("selected"+J,function(a,d){c[g.selectedCallback].call(b,d)}),g.deselectedCallback&&"function"==typeof c[g.deselectedCallback]&&f.on("deselected"+J,function(a,d){c[g.deselectedCallback].call(b,d)}),g.beforeloadCallback&&"function"==typeof c[g.beforeloadCallback]&&f.on("load"+J,function(a){c[g.beforeloadCallback].call(b)}),g.afterloadCallback&&"function"==typeof c[g.afterloadCallback]&&f.on("loaded"+J,function(a){c[g.afterloadCallback].call(b)}),g.failloadCallback&&"function"==typeof c[g.failloadCallback]&&f.on("failload"+J,function(a){c[g.failloadCallback].call(b)}),g.dblclickCallback&&"function"==typeof c[g.dblclickCallback]&&f.on("dblclick"+J,"tr[data-row-id]",function(d){var e=a(this),f=b.currentRows[e.index()];c[g.dblclickCallback].call(b,e,f)})}function m(a){this.options.highlightRows}function n(a){return a.visible}function o(){var b=this,d=this.element.find("thead > tr").first(),e=!1;d.children().each(function(){var d=a(this),f=d.data(),g={id:f.columnId,identifier:null==b.identifier&&f.identifier||!1,converter:b.options.converters[f.converter||f.type]||b.options.converters.string,text:d.text(),align:f.align||"left",headerAlign:f.headerAlign||"left",cssClass:f.cssClass||"",headerCssClass:f.headerCssClass||"",formatter:b.options.formatters[f.formatter]||c[f.formatter]||c.PKUI.bootgridFormatter[f.formatter]||null,dic:f.dic,order:e||"asc"!==f.order&&"desc"!==f.order?null:f.order,searchable:!(f.searchable===!1),sortable:!(f.sortable===!1),visible:!(f.visible===!1),visibleInSelection:!(f.visibleInSelection===!1),width:a.isNumeric(f.width)?f.width+"px":"string"==typeof f.width?f.width:null};b.columns.push(g),null!=g.order&&(b.sortDictionary[g.id]=g.order),g.identifier&&(b.identifier=g.id,b.converter=g.converter),b.options.multiSort||null===g.order||(e=!0)})}function p(){function b(a){for(var b,c=new RegExp(e.searchPhrase,e.options.caseSensitive?"g":"gi"),d=0;d<e.columns.length;d++)if(b=e.columns[d],b.searchable&&b.visible&&b.converter.to(a[b.id]).search(c)>-1)return!0;return!1}function d(a,b){e.currentRows=a,r.call(e,b),e.options.keepSelection||(e.selectedRows=[]),A.call(e,a),v.call(e),x.call(e),e.element._bgBusyAria(!1).trigger("loaded"+J)}var e=this;if(this.element._bgBusyAria(!0).trigger("load"+J),H.call(this),this.options.ajax){var f=h.call(this),g=j.call(this);if(null==g||"string"!=typeof g||0===g.length)throw new Error("Url setting must be a none empty string or a function that returns one.");this.xqr&&this.xqr.abort();var i={url:g,data:f,success:function(b){e.xqr=null,"string"==typeof b&&(b=a.parseJSON(b)),b=e.options.responseHandler(b),e.current=b.current,d(b.rows,b.total)},error:function(a,b,c){e.xqr=null,"abort"!==b&&(w.call(e),e.element._bgBusyAria(!1).trigger("loaded"+J))}};i=a.extend(this.options.ajaxSettings,i),this.xqr=a.ajax(i)}else{var k=this.searchPhrase.length>0?this.rows.where(b):this.rows,l=k.length;this.rowCount!==-1&&(k=k.page(this.current,this.rowCount)),c.setTimeout(function(){d(k,l)},10)}}function q(){if(!this.options.ajax){var b=this,c=this.element.find("tbody > tr");c.each(function(){var c=a(this),d=c.children("td"),f={};a.each(b.columns,function(a,b){f[b.id]=b.converter.from(d.eq(a).text())}),e.call(b,f)}),r.call(this,this.rows.length),I.call(this)}}function r(a){this.total=a,this.totalPages=this.rowCount===-1?1:Math.ceil(this.total/this.rowCount)}function s(){var b=this.options.templates,c=this.element.parent().hasClass(this.options.css.responsiveTable)?this.element.parent():this.element;this.element.addClass(this.options.css.table),0===this.element.children("tbody").length&&this.element.append(b.body),1&this.options.navigation&&(this.header=a(b.header.resolve(g.call(this,{id:this.element._bgId()+"-header"}))),c.before(this.header)),2&this.options.navigation&&(this.footer=a(b.footer.resolve(g.call(this,{id:this.element._bgId()+"-footer"}))),c.after(this.footer))}function t(){if(0!==this.options.navigation){var b=this.options.css,c=i(b.actions),d=f.call(this,c);if(d.length>0){var e=this,h=this.options.templates,j=a(h.actions.resolve(g.call(this)));if(this.options.ajax){var k=h.icon.resolve(g.call(this,{iconCss:b.iconRefresh})),l=a(h.actionButton.resolve(g.call(this,{content:k,text:this.options.labels.refresh}))).on("click"+J,function(a){a.stopPropagation(),e.current=1,p.call(e)});j.append(l)}z.call(this,j),u.call(this,j),G.call(this,d,j)}}}function u(b){if(this.options.columnSelection&&this.columns.length>1){var c=this,d=this.options.css,e=this.options.templates,f=e.icon.resolve(g.call(this,{iconCss:d.iconColumns})),h=a(e.actionDropDown.resolve(g.call(this,{content:f}))),j=i(d.dropDownItem),k=i(d.dropDownItemCheckbox),l=i(d.dropDownMenuItems);a.each(this.columns,function(b,f){if(f.visibleInSelection){var m=a(e.actionDropDownCheckboxItem.resolve(g.call(c,{name:f.id,label:f.text,checked:f.visible}))).on("click"+J,j,function(b){b.stopPropagation();var d=a(this),e=d.find(k);if(!e.prop("disabled")){f.visible=e.prop("checked");var g=c.columns.where(n).length>1;d.parents(l).find(j+":has("+k+":checked)")._bgEnableAria(g).find(k)._bgEnableField(g),c.element.find("tbody").empty(),E.call(c),p.call(c)}});h.find(i(d.dropDownMenuItems)).append(m)}}),b.append(h)}}function v(){if(0!==this.options.navigation){var b=i(this.options.css.infos),c=f.call(this,b);if(c.length>0){var d=this.current*this.rowCount,e=a(this.options.templates.infos.resolve(g.call(this,{end:0===this.total||d===-1||d>this.total?this.total:d,start:0===this.total?0:d-this.rowCount+1,total:this.total})));G.call(this,c,e)}}}function w(){var a=this.element.children("tbody").first(),b=this.options.templates,c=this.columns.where(n).length;this.selection&&(c+=1);var d=a.width(),e=a.height()||100,f="width:"+d+"px;height:"+e+"px;";a.html(b.noResults.resolve(g.call(this,{columns:c,style:f})))}function x(){if(0!==this.options.navigation){var b=i(this.options.css.pagination),c=f.call(this,b)._bgShowAria(this.rowCount!==-1);if(this.rowCount!==-1&&c.length>0){var d=this.options.templates,e=this.current,h=this.totalPages,j=a(d.pagination.resolve(g.call(this))),k=h-e,l=(this.options.padding-e)*-1,m=k>=this.options.padding?Math.max(l,1):Math.max(l-this.options.padding+k,1),n=2*this.options.padding+1,o=h>=n?n:h;y.call(this,j,"first","&laquo;","first")._bgEnableAria(e>1),y.call(this,j,"prev","&lt;","prev")._bgEnableAria(e>1);for(var p=0;p<o;p++){var q=p+m;y.call(this,j,q,q,"page-"+q)._bgEnableAria()._bgSelectAria(q===e)}0===o&&y.call(this,j,1,1,"page-1")._bgEnableAria(!1)._bgSelectAria(),y.call(this,j,"next","&gt;","next")._bgEnableAria(h>e),y.call(this,j,"last","&raquo;","last")._bgEnableAria(h>e),G.call(this,c,j)}}}function y(b,c,d,e){var f=this,h=this.options.templates,j=this.options.css,k=g.call(this,{css:e,text:d,page:c}),l=a(h.paginationItem.resolve(k)).on("click"+J,i(j.paginationButton),function(b){b.stopPropagation(),b.preventDefault();var c=a(this),d=c.parent();if(!d.hasClass("active")&&!d.hasClass("disabled")){var e={first:1,prev:f.current-1,next:f.current+1,last:f.totalPages},g=c.data("page");f.current=e[g]||g,p.call(f)}c.trigger("blur")});return b.append(l),l}function z(b){function c(a){return a===-1?d.options.labels.all:a}var d=this,e=this.options.rowCount;if(a.isArray(e)){var f=this.options.css,h=this.options.templates,j=a(h.actionDropDown.resolve(g.call(this,{content:c(this.rowCount)}))),k=i(f.dropDownMenu),l=i(f.dropDownMenuText),m=i(f.dropDownMenuItems),n=i(f.dropDownItemButton);a.each(e,function(b,e){var f=a(h.actionDropDownItem.resolve(g.call(d,{text:c(e),action:e})))._bgSelectAria(e===d.rowCount).on("click"+J,n,function(b){b.preventDefault();var e=a(this),f=e.data("action");f!==d.rowCount&&(d.current=1,d.rowCount=f,e.parents(m).children().each(function(){var b=a(this),c=b.find(n).data("action");b._bgSelectAria(c===f)}),e.parents(k).find(l).text(c(f)),p.call(d))});j.find(m).append(f)}),b.append(j)}}function A(c){if(c.length>0){var d=this,e=this.options.css,f=this.options.templates,h=this.element.children("tbody").first(),j=!0,k="";a.each(c,function(c,h){var i="",l=' data-row-id="'+(null==d.identifier?c:h[d.identifier])+'"',m="";if(d.selection){var n=a.inArray(h[d.identifier],d.selectedRows)!==-1,o=f.select.resolve(g.call(d,{type:"checkbox",value:h[d.identifier],checked:n}));i+=f.cell.resolve(g.call(d,{content:o,css:e.selectCell,style:"width: 32px;",title:""})),j=j&&n,n&&(m+=e.selected,l+=' aria-selected="true"')}var p=null!=h.status&&d.options.statusMapping[h.status];p&&(m+=p),a.each(d.columns,function(c,j){if(j.visible){var k=a.isFunction(j.formatter)?j.formatter.call(d,j,h):j.converter.to(h[j.id]),l=j.cssClass.length>0?" "+j.cssClass:"";try{j.dic&&(k=b.getDicValue(j.dic,k))}catch(a){console.info("/(ㄒoㄒ)/~~字典翻译出错：["+j.dic+"]["+k+"]",a)}var m=null==k||""===k?"&nbsp;":k,n=String(m).replace(/<.*>/g,"");i+=f.cell.resolve(g.call(d,{content:m,css:("right"===j.align?e.right:"center"===j.align?e.center:e.left)+l,style:null==j.width?"":"width:"+j.width+";",title:n}))}}),m.length>0&&(l+=' class="'+m+'"'),k+=f.row.resolve(g.call(d,{attr:l,cells:i}))}),d.element.find("thead "+i(d.options.css.selectBox)).prop("checked",j),h.html(k),B.call(this,h)}else w.call(this)}function B(b){var c=this,d=i(this.options.css.selectBox);this.selection&&b.off("click"+J,d).on("click"+J,d,function(b){b.stopPropagation();var d=a(this),e=c.converter.from(d.val());d.prop("checked")?c.select([e]):c.deselect([e])}),b.off("click"+J,"> tr").on("click"+J,"> tr",function(b){b.stopPropagation();var d=a(this),e=null==c.identifier?d.data("row-id"):c.converter.from(d.data("row-id")+""),f=null==c.identifier?c.currentRows[e]:c.currentRows.first(function(a){return a[c.identifier]==e});c.selection&&c.options.rowSelect&&(d.hasClass(c.options.css.selected)?c.deselect([e]):c.select([e])),c.element.trigger("click"+J,[c.columns,f])})}function C(){if(0!==this.options.navigation){var b=this.options.css,d=i(b.search),e=f.call(this,d);if(e.length>0){var h=this,j=this.options.templates,k=null,l="",m=i(b.searchField),n=a(j.search.resolve(g.call(this))),o=n.is(m)?n:n.find(m);o.on("keyup"+J,function(b){b.stopPropagation();var d=a(this).val();(l!==d||13===b.which&&""!==d)&&(l=d,(13===b.which||0===d.length||d.length>=h.options.searchSettings.characters)&&(c.clearTimeout(k),k=c.setTimeout(function(){D.call(h,d)},h.options.searchSettings.delay)))}),G.call(this,e,n)}}}function D(a){this.searchPhrase!==a&&(this.current=1,this.searchPhrase=a,p.call(this))}function E(){var b=this,c=this.element.find("thead > tr"),d=this.options.css,e=this.options.templates,f="",h=this.options.sorting;if(this.selection){var j=this.options.multiSelect?e.select.resolve(g.call(b,{type:"checkbox",value:"all"})):"";f+=e.rawHeaderCell.resolve(g.call(b,{content:j,css:d.selectCell,style:"width: 32px;"}))}if(a.each(this.columns,function(a,c){if(c.visible){var i=b.sortDictionary[c.id],j=h&&i&&"asc"===i?d.iconUp:h&&i&&"desc"===i?d.iconDown:"",k=e.icon.resolve(g.call(b,{iconCss:j})),l=c.headerAlign,m=c.headerCssClass.length>0?" "+c.headerCssClass:"";f+=e.headerCell.resolve(g.call(b,{column:c,icon:k,sortable:h&&c.sortable&&d.sortable||"",css:("right"===l?d.right:"center"===l?d.center:d.left)+m,style:null==c.width?"":"width:"+c.width+";"}))}}),c.html(f),h){var k=i(d.sortable);c.off("click"+J,k).on("click"+J,k,function(c){c.preventDefault(),F.call(b,a(this)),I.call(b),p.call(b)})}if(this.selection&&this.options.multiSelect){var l=i(d.selectBox);c.off("click"+J,l).on("click"+J,l,function(c){c.stopPropagation(),a(this).prop("checked")?b.select():b.deselect()})}}function F(a){var b=this.options.css,c=i(b.icon),d=a.data("column-id")||a.parents("th").first().data("column-id"),e=this.sortDictionary[d],f=a.find(c);if(this.options.multiSort||(a.parents("tr").first().find(c).removeClass(b.iconDown+" "+b.iconUp),this.sortDictionary={}),e&&"asc"===e)this.sortDictionary[d]="desc",f.removeClass(b.iconUp).addClass(b.iconDown);else if(e&&"desc"===e)if(this.options.multiSort){var g={};for(var h in this.sortDictionary)h!==d&&(g[h]=this.sortDictionary[h]);this.sortDictionary=g,f.removeClass(b.iconDown)}else this.sortDictionary[d]="asc",f.removeClass(b.iconDown).addClass(b.iconUp);else this.sortDictionary[d]="asc",f.addClass(b.iconUp)}function G(b,c){b.each(function(b,d){a(d).before(c.clone(!0)).remove()})}function H(){var a=this;c.setTimeout(function(){if("true"===a.element._bgAria("busy")){var b=a.options.templates,c=(a.element.children("thead").first(),a.element.children("tbody").first()),d=a.columns.where(n).length;a.selection&&(d+=1);var e,f=c.width(),h=a.rowCount!==-1?8:a.rowCount,i=a.options.rowHeight||24,j=c.height();j<100&&(j=h*i),e="width: "+f+"px;height: "+j+"px",c.html(b.loading.resolve(g.call(a,{columns:d,style:e})))}},250)}function I(){function a(c,d,e){function f(a){return"asc"===h.order?a:a*-1}e=e||0;var g=e+1,h=b[e];return c[h.id]>d[h.id]?f(1):c[h.id]<d[h.id]?f(-1):b.length>g?a(c,d,g):0}var b=[];if(!this.options.ajax){for(var c in this.sortDictionary)(this.options.multiSort||0===b.length)&&b.push({id:c,order:this.sortDictionary[c]});b.length>0&&this.rows.sort(a)}}var J=".rs.jquery.bootgrid",K=function(b,c){this.element=a(b),this.origin=this.element.clone(),this.options=a.extend(!0,{},K.defaults,this.element.data(),c);var d=this.options.rowCount=this.element.data().rowCount||this.options.rowCount;this.options.$element=this.element,this.columns=[],this.current=1,this.currentRows=[],this.identifier=null,this.selection=!1,this.converter=null,this.rowCount=a.isArray(d)?d[0]:d,this.rows=[],this.searchPhrase="",this.selectedRows=[],this.sortDictionary={},this.total=0,this.totalPages=0,this.cachedParams={lbl:this.options.labels,css:this.options.css,ctx:{}},this.header=null,this.footer=null,this.xqr=null};if(K.defaults={navigation:3,padding:2,columnSelection:!0,rowCount:[10,25,50,-1],selection:!1,multiSelect:!1,rowSelect:!1,keepSelection:!1,highlightRows:!1,sorting:!0,multiSort:!1,searchSettings:{delay:250,characters:1},ajax:!1,ajaxSettings:{method:"POST"},post:{},url:"",caseSensitive:!0,requestHandler:function(a){return a},responseHandler:function(a){return a},converters:{numeric:{from:function(a){return+a},to:function(a){return a+""}},string:{from:function(a){return a},to:function(a){return a}}},css:{actions:"actions btn-group",center:"text-center",columnHeaderAnchor:"column-header-anchor",columnHeaderText:"text",dropDownItem:"dropdown-item",dropDownItemButton:"dropdown-item-button",dropDownItemCheckbox:"dropdown-item-checkbox",dropDownMenu:"dropdown btn-group",dropDownMenuItems:"dropdown-menu pull-right",dropDownMenuText:"dropdown-text",footer:"bootgrid-footer container-fluid",header:"bootgrid-header container-fluid",icon:"icon glyphicon",iconColumns:"glyphicon-th-list",iconDown:"glyphicon-chevron-down",iconRefresh:"glyphicon-refresh",iconSearch:"glyphicon-search",iconUp:"glyphicon-chevron-up",infos:"infos",left:"text-left",pagination:"pagination",paginationButton:"button",responsiveTable:"table-responsive",right:"text-right",search:"search form-group",searchField:"search-field form-control",selectBox:"select-box",selectCell:"select-cell",selected:"active",sortable:"sortable",table:"bootgrid-table table"},formatters:{},labels:{all:"All",infos:"Showing {{ctx.start}} to {{ctx.end}} of {{ctx.total}} entries",loading:"Loading...",noResults:"No results found!",refresh:"Refresh",search:"Search"},statusMapping:{0:"success",1:"info",2:"warning",3:"danger"},__templates:{actionButton:'<button class="btn btn-default" type="button" title="{{ctx.text}}">{{ctx.content}}</button>',actionDropDown:'<div class="{{css.dropDownMenu}}"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"><span class="{{css.dropDownMenuText}}">{{ctx.content}}</span> <span class="caret"></span></button><ul class="{{css.dropDownMenuItems}}" role="menu"></ul></div>',actionDropDownItem:'<li><a data-action="{{ctx.action}}" class="{{css.dropDownItem}} {{css.dropDownItemButton}}">{{ctx.text}}</a></li>',actionDropDownCheckboxItem:'<li><label class="{{css.dropDownItem}}"><input name="{{ctx.name}}" type="checkbox" value="1" class="{{css.dropDownItemCheckbox}}" {{ctx.checked}} /> {{ctx.label}}</label></li>',actions:'<div class="{{css.actions}}"></div>',body:"<tbody></tbody>",cell:'<td class="{{ctx.css}}" style="{{ctx.style}}">{{ctx.content}}</td>',footer:'<div id="{{ctx.id}}" class="{{css.footer}}"><div class="row"><div class="col-sm-6"><p class="{{css.pagination}}"></p></div><div class="col-sm-6 infoBar"><p class="{{css.infos}}"></p></div></div></div>',header:'<div id="{{ctx.id}}" class="{{css.header}}"><div class="row"><div class="col-sm-12 actionBar"><p class="{{css.search}}"></p><p class="{{css.actions}}"></p></div></div></div>',headerCell:'<th data-column-id="{{ctx.column.id}}" class="{{ctx.css}}" style="{{ctx.style}}"><a href="javascript:void(0);" class="{{css.columnHeaderAnchor}} {{ctx.sortable}}"><span class="{{css.columnHeaderText}}">{{ctx.column.text}}</span>{{ctx.icon}}</a></th>',icon:'<span class="{{css.icon}} {{ctx.iconCss}}"></span>',infos:'<div class="{{css.infos}}">{{lbl.infos}}</div>',loading:'<tr><td colspan="{{ctx.columns}}" class="loading">{{lbl.loading}}</td></tr>',noResults:'<tr><td colspan="{{ctx.columns}}" class="no-results">{{lbl.noResults}}</td></tr>',pagination:'<ul class="{{css.pagination}}"></ul>',paginationItem:'<li class="{{ctx.css}}"><a data-page="{{ctx.page}}" class="{{css.paginationButton}}">{{ctx.text}}</a></li>',rawHeaderCell:'<th class="{{ctx.css}}">{{ctx.content}}</th>',row:"<tr{{ctx.attr}}>{{ctx.cells}}</tr>",search:'<div class="{{css.search}}"><div class="input-group"><span class="{{css.icon}} input-group-addon {{css.iconSearch}}"></span> <input type="text" class="{{css.searchField}}" placeholder="{{lbl.search}}" /></div></div>',select:'<input name="select" type="{{ctx.type}}" class="{{css.selectBox}}" value="{{ctx.value}}" {{ctx.checked}} />'}},K.prototype.append=function(a){if(this.options.ajax);else{for(var b=[],c=0;c<a.length;c++)e.call(this,a[c])&&b.push(a[c]);I.call(this),m.call(this,b),p.call(this),this.element.trigger("appended"+J,[b])}return this},K.prototype.clear=function(){if(this.options.ajax);else{var b=a.extend([],this.rows);this.rows=[],this.current=1,this.total=0,p.call(this),this.element.trigger("cleared"+J,[b])}return this},K.prototype.destroy=function(){return a(c).off(J),1&this.options.navigation&&this.header.remove(),2&this.options.navigation&&this.footer.remove(),this.element.before(this.origin).remove(),this},K.prototype.reload=function(){return this.current=1,p.call(this),this},K.prototype.remove=function(a){if(null!=this.identifier){a=a||this.selectedRows;for(var b,c=[],d=0;d<a.length;d++){b=a[d];for(var e=0;e<this.rows.length;e++)if(this.rows[e][this.identifier]==b){c.push(this.rows[e]),this.rows.splice(e,1);break}}this.current=1,p.call(this),this.element.trigger("removed"+J,[c])}return this},K.prototype.search=function(a){if(a=a||"",this.searchPhrase!==a){var b=i(this.options.css.searchField),c=f.call(this,b);c.val(a)}return D.call(this,a),this},K.prototype.select=function(b){if(this.selection){b=b||this.currentRows.propValues(this.identifier);for(var c,d,e,f=[];b.length>0&&(this.options.multiSelect||1!==f.length);)if(c=b.pop(),a.inArray(c,this.selectedRows)===-1)for(d=0;d<this.currentRows.length;d++)if(e=this.currentRows[d][this.identifier],"number"==typeof e&&"string"==typeof c&&(e+=""),e===c){f.push(this.currentRows[d]),this.selectedRows.push(c);break}if(f.length>0){var g=i(this.options.css.selectBox),h=this.selectedRows.length>=this.currentRows.length;for(d=0;!this.options.keepSelection&&h&&d<this.currentRows.length;)h=a.inArray(this.currentRows[d++][this.identifier],this.selectedRows)!==-1;for(this.element.find("thead "+g).prop("checked",h),this.options.multiSelect||this.element.find("tbody > tr "+g+":checked").trigger("click"+J),d=0;d<this.selectedRows.length;d++)this.element.find('tbody > tr[data-row-id="'+this.selectedRows[d]+'"]').addClass(this.options.css.selected)._bgAria("selected","true").find(g).prop("checked",!0);this.element.trigger("selected"+J,[f])}}return this},K.prototype.deselect=function(b){if(this.selection){b=b||this.currentRows.propValues(this.identifier);for(var c,d,e,f=[];b.length>0;)if(c=b.pop(),e=a.inArray(c,this.selectedRows),e!==-1)for(d=0;d<this.currentRows.length;d++){var g=this.currentRows[d][this.identifier];if("number"==typeof g&&"string"==typeof c&&(g+=""),g===c){f.push(this.currentRows[d]),this.selectedRows.splice(e,1);break}}if(f.length>0){var h=i(this.options.css.selectBox);for(this.element.find("thead "+h).prop("checked",!1),d=0;d<f.length;d++)this.element.find('tbody > tr[data-row-id="'+f[d][this.identifier]+'"]').removeClass(this.options.css.selected)._bgAria("selected","false").find(h).prop("checked",!1);this.element.trigger("deselected"+J,[f])}}return this},K.prototype.sort=function(b){var c=b?a.extend({},b):{};return c===this.sortDictionary?this:(this.sortDictionary=c,E.call(this),I.call(this),p.call(this),this)},K.prototype.getColumnSettings=function(){return a.merge([],this.columns)},K.prototype.getCurrentPage=function(){return this.current},K.prototype.getCurrentRows=function(){return a.merge([],this.currentRows)},K.prototype.getRowCount=function(){return this.rowCount},K.prototype.getSearchPhrase=function(){return this.searchPhrase},K.prototype.getSelectedRows=function(){return a.merge([],this.selectedRows)},K.prototype.getSortDictionary=function(){return a.extend({},this.sortDictionary)},K.prototype.getTotalPageCount=function(){return this.totalPages},K.prototype.getTotalRowCount=function(){return this.total},a.fn.extend({_bgAria:function(a,b){return b?this.attr("aria-"+a,b):this.attr("aria-"+a)},_bgBusyAria:function(a){return null==a||a?this._bgAria("busy","true"):this._bgAria("busy","false")},_bgRemoveAria:function(a){return this.removeAttr("aria-"+a)},_bgEnableAria:function(a){return null==a||a?this.removeClass("disabled")._bgAria("disabled","false"):this.addClass("disabled")._bgAria("disabled","true")},_bgEnableField:function(a){return null==a||a?this.removeAttr("disabled"):this.attr("disabled","disable")},_bgShowAria:function(a){return null==a||a?this.show()._bgAria("hidden","false"):this.hide()._bgAria("hidden","true")},_bgSelectAria:function(a){return null==a||a?this.addClass("active")._bgAria("selected","true"):this.removeClass("active")._bgAria("selected","false")},_bgId:function(a){return a?this.attr("id",a):this.attr("id")}}),!String.prototype.resolve){var L={checked:function(a){return"boolean"==typeof a?a?'checked="checked"':"":a}};String.prototype.resolve=function(b,c){var d=this;return a.each(b,function(b,e){if(null!=e&&"function"!=typeof e)if("object"==typeof e){var f=c?a.extend([],c):[];f.push(b),d=d.resolve(e,f)+""}else{L&&L[b]&&"function"==typeof L[b]&&(e=L[b](e)),b=c?c.join(".")+"."+b:b;var g=new RegExp("\\{\\{"+b+"\\}\\}","gm");d=d.replace(g,e.replace?e.replace(/\$/gi,"&#36;"):e)}}),d}}Array.prototype.first||(Array.prototype.first=function(a){for(var b=0;b<this.length;b++){var c=this[b];if(a(c))return c}return null}),Array.prototype.contains||(Array.prototype.contains=function(a){for(var b=0;b<this.length;b++){var c=this[b];if(a(c))return!0}return!1}),Array.prototype.page||(Array.prototype.page=function(a,b){var c=(a-1)*b,d=c+b;return this.length>c?this.length>d?this.slice(c,d):this.slice(c):[]}),Array.prototype.where||(Array.prototype.where=function(a){for(var b=[],c=0;c<this.length;c++){var d=this[c];a(d)&&b.push(d)}return b}),Array.prototype.propValues||(Array.prototype.propValues=function(a){for(var b=[],c=0;c<this.length;c++)b.push(this[c][a]);return b});var M=a.fn.bootgrid;a.fn.bootgrid=function(b){var c=Array.prototype.slice.call(arguments,1),d=null,e=this.each(function(e){var f=a(this),g=f.data(J),h="object"==typeof b&&b;if((g||"destroy"!==b)&&(g||(f.data(J,g=new K(this,h)),k.call(g),f.attr("isrendered","true")),"string"==typeof b))if(0===b.indexOf("get")&&0===e)d=g[b].apply(g,c);else if(0!==b.indexOf("get"))return g[b].apply(g,c)});return"string"==typeof b&&0===b.indexOf("get")?d:e},a.fn.bootgrid.Constructor=K,a.fn.bootgrid.noConflict=function(){return a.fn.bootgrid=M,this}}(jQuery,window),+function(a,b){function c(b,c){var d,e,f;return e=[],f=[],b?(e.push(f),d=a(b),d.find("input[name], select[name]").each(function(){var b,d,e,g,h;h=a(this),h.is(":radio")&&!h.is(":checked")||(b=h.data("property")||h.attr("name"),d=h.data("operator")||"=",e=h.data("value")||h.val(),g=(h.data("datatype")||"0")+"",e=a.trim(e),e&&(c[b]=e,"like"===d&&(e="%"+e+"%"),f.push({property:b,operator:d,value:e,datatype:g})))}),e):e}var d=a.fn.bootgrid.Constructor,e=".rs.jquery.bootgrid";a.extend(d.defaults,{navigation:3,padding:4,columnSelection:!0,rowCount:[10,5,15,20,25,30,50,100,200,1e3],rowSelect:!0,ajax:!0,ajaxSettings:{type:"POST",dataType:"json"},requestHandler:function(b){var d,e,f,g,h,i,j,k,l={},m={oredCriteria:c(this.queryFormSelector,l),orderByClause:"",pager:{start:0,limit:20,pageSize:20,totalRecords:0}};if(h=b.current,i=b.rowCount,j=b.sort,d=i*(h-1),g=h*i,e=i,f=1===h?0:this.$element.bootgrid("getTotalRowCount"),this.requestPage=h,k="",j)for(var n in j)j.hasOwnProperty(n)&&(k&&(k+=","),k+=n.replace(/([A-Z])/g,"_$1").toUpperCase()+" "+j[n].toUpperCase());return m.orderByClause=k||"",m.pager={start:d,limit:g,pageSize:e,totalRecords:f},b={start:d,limit:g,pageSize:e,totalRecords:f,txtQuery:JSON.stringify(m)},b=a.extend(l,b,{pageIndex:h,size:e})},responseHandler:function(c){var d,f,g,h={current:1,rowCount:10,rows:[],total:1123},i=this.requestPage,j=this.totalRecordsUrl,k=this.$element,l=k.get(0).id,m=a("#"+l+"-footer"),n=1e8;if(c.hasOwnProperty("data")&&a.isArray(c.data))console.info("使用 老式接口（GridResult）");else{if(!a.isArray(c))throw b.layer&&b.layer.msg("获取数据失败，请刷新数据表格！"),k.trigger("failload"+e),"获取数据失败!";console.info("使用 新式接口（[{...},{...},...]）")}return f=k.bootgrid("getRowCount")||10,g=c.totalRecords,0===g||g===n||void 0===g&&!j?(m.addClass("no-totalRecords"),d=c.data||c,g=0===d.length?n:d.length<f?(i-1)*f+d.length:n):(g>0||j)&&m.removeClass("no-totalRecords"),void 0===g&&(1===i?a.ajax({url:j,data:a(this.queryFormSelector).serialize(),async:!1}).done(function(a){try{g=parseInt(a)}catch(a){console.info(a)}if(isNaN(g)||g<0)throw b.layer&&b.layer.msg("获取总数失败：500。"),"获取总数失败：500。"}).fail(function(){throw b.layer&&b.layer.msg("获取总数失败：网络原因/路径错误"),"获取总数失败：网络原因/路径错误"}):g=this.$element.bootgrid("getTotalRowCount")),h={current:i,rowCount:f,rows:c.data||c,total:g}},css:{actions:"pkui-grid-actions btn-group hidden",center:"text-center",columnHeaderAnchor:"pkui-grid-columnHeaderAnchor",columnHeaderText:"pkui-grid-columnHeaderText",dropDownItem:"pkui-grid-dropDownItem",dropDownItemButton:"pkui-grid-dropDownItemButton",dropDownItemCheckbox:"pkui-grid-dropDownItemCheckbox",dropDownMenu:"dropdown btn-group",dropDownMenuItems:"dropdown-menu pull-right",dropDownMenuText:"dropdown-text",footer:"pkui-grid-footer",header:"pkui-grid-header",icon:"pkui-grid-icon fa",iconColumns:"fa-bars",iconDown:"fa-sort-down",iconRefresh:"fa-refresh",iconSearch:"fa-search",iconUp:"fa-sort-up",infos:"pkui-grid-infos",left:"text-left",pagination:"pkui-grid-pagination",paginationButton:"pkui-grid-paginationButton",responsiveTable:"table-responsive",right:"text-right",search:"pkui-grid-search",searchField:"pkui-grid-searchField",selectBox:"pkui-grid-selectBox",selectCell:"pkui-grid-selectCell",selected:"active",sortable:"sortable",table:"pkui-grid-table",actionButton:"pkui-grid-actionRefreshButton",actionDropDownButton:"pkui-grid-actionDropDownButton",cell:"pkui-grid-cell",selectLabel:"pkui-grid-selectLabel"},formatters:{},labels:{all:"所有",infos:"显示 {{ctx.start}} - {{ctx.end}}， 共 {{ctx.total}} 条",loading:"加载...",noResults:"没有数据!",refresh:"刷新",search:"搜索"},templates:{actionButton:'<button class="btn btn-default" type="button" title="{{ctx.text}}">{{ctx.content}}</button>',actionDropDown:'<div class="{{css.dropDownMenu}}"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"><span class="{{css.dropDownMenuText}}">{{ctx.content}}</span> <span class="caret"></span></button><ul class="{{css.dropDownMenuItems}}" role="menu"></ul></div>',actionDropDownItem:'<li><a data-action="{{ctx.action}}" class="{{css.dropDownItem}} {{css.dropDownItemButton}}">{{ctx.text}}</a></li>',actionDropDownCheckboxItem:'<li><label class="{{css.dropDownItem}}"><input name="{{ctx.name}}" type="checkbox" value="1" class="{{css.dropDownItemCheckbox}}" {{ctx.checked}} /> {{ctx.label}}</label></li>',actions:'<div class="{{css.actions}}"></div>',body:"<tbody></tbody>",cell:'<td class="{{ctx.css}}" style="{{ctx.style}}"><p class="{{css.cell}}" title="{{ctx.title}}">{{ctx.content}}</p></td>',footer:'<div id="{{ctx.id}}" class="{{css.footer}}"><p class="{{css.pagination}}"></p><p class="{{css.infos}}"></p></div>',header:'<div id="{{ctx.id}}" class="{{css.header}}"><p class="{{css.search}}"></p><p class="{{css.actions}}"></p><p title="列表设置" class="pkui-grid-setting fa fa-gear"></p></div>',headerCell:'<th data-column-id="{{ctx.column.id}}" class="{{ctx.css}}" style="{{ctx.style}}"><a href="javascript:void(0);" class="{{css.columnHeaderAnchor}} {{ctx.sortable}}"><span class="{{css.columnHeaderText}}">{{ctx.column.text}}{{ctx.icon}}</span></a></th>',icon:'<span class="{{css.icon}} {{ctx.iconCss}}"></span>',infos:'<div class="{{css.infos}}">{{lbl.infos}}</div>',loading:'<tr><td colspan="{{ctx.columns}}" class="loading" style="{{ctx.style}}">{{lbl.loading}}</td></tr>',noResults:'<tr><td colspan="{{ctx.columns}}" class="no-results" style="{{ctx.style}}">{{lbl.noResults}}</td></tr>',pagination:'<ul class="{{css.pagination}}"></ul>',paginationItem:'<li class="{{ctx.css}}"><a data-page="{{ctx.page}}" class="{{css.paginationButton}}">{{ctx.text}}</a></li>',rawHeaderCell:'<th class="{{ctx.css}}" style="{{ctx.style}}">{{ctx.content}}</th>',row:"<tr{{ctx.attr}}>{{ctx.cells}}</tr>",search:'<!--<div class="{{css.search}}"><div class="pkui-grid-input-group"><span class="{{css.icon}} pkui-grid-input-group-addon {{css.iconSearch}}"></span> <input type="text" class="{{css.searchField}}" placeholder="{{lbl.search}}" /></div></div>-->',select:'<label class="{{css.selectLabel}}"><input name="select" type="{{ctx.type}}" class="{{css.selectBox}}" value="{{ctx.value}}" {{ctx.checked}} /></label>'}}),a(document).on("click",".pkui-grid-setting",function(){var b=a(this);b.siblings().toggleClass("hidden")}),d.prototype.getSelectedRowsDataList=function(){var b=this.element,c=this.currentRows,d=this.getSelectedRows(),e=[];
return a.each(d,function(a,d){var f=b.find('tr[data-row-id="'+d+'"]'),g=c[f.index()];e.push(g)}),e},d.prototype.deleteRow=function(b){var c=this,e=this.element;a.isArray(b)||"string"!=typeof b||(b=[b]),a.each(b,function(a,b){var f=e.find("tr[data-row-id='"+b+"']"),g="."+d.defaults.css.selectBox;f.addClass("deleted").on("click dblclick",function(a){a.stopPropagation()}).find(g).attr("disabled",!0).removeAttr("checked").end().find("a,input,button").not(g).remove(),c.deselect([b+""])})},b.PKUI.component.datagrid=a.fn.bootgrid}(jQuery,window)});