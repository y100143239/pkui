define(function(a){"use strict";var b,c=a("jquery");return b={timestamp:void 0},b.init=function(){this.timestamp=window.PKUI.timestamp},b.cache={list:{},set:{},ext:{select2:{}}},b=c.extend(b,{getDataList:function(a){var b,c;return b=this.cache.list,(c=b[a])?c:(this.request.getXmlAndCache(a),b[a])},getDataSet:function(a){var b,c,d;return b=this.cache.set,(c=b[a])?c:(d=this.getDataList(a),c=this.utils.convertDataListToDataSet(d),b[a]=c,c)},getExtDataList:function(a,b,c){var d,e,f;return f=this.cache.ext,f[b]||(f[b]={}),(e=f[b][a])?e:(d=this.getDataList(a),e=this.utils.convertDataListToExtDataList(d,b,c),f[b][a]=e,e)},getDicValue:function(a,b){var c=b;try{c=this.getDataSet(a)[b]}catch(a){console.info(a)}return c},clearCache:function(a){var d=b.cache;return this.timestamp="v="+(new Date).getTime(),!a||c.isArray(a)&&0===a.length?void(d={list:{},set:{}}):("string"==typeof a&&(a=[a]),void c.each(a,function(a,b){d.list.hasOwnProperty(b)&&delete d.list[b],d.set.hasOwnProperty(b)&&delete d.set[b]}))}}),b.request={syncAjax:function(a,b,d,e){e=e||"GET",c.ajax({type:e,url:a,async:!1,timeout:3e4,contentType:"application/x-www-form-urlencoded; charset=utf-8",cache:!0,dataType:"xml",success:function(a){b(a)},error:function(){d()}})},getXmlAndCache:function(a){var d;return d=this,"string"==typeof a&&(a=[a]),c.unique(a),c.each(a,function(a,c){var e=b.utils.getDicUrl(c);d.syncAjax(e,function(a){d.handleRequestDicSuccess(c,a)},function(){d.handleRequestDicError(c)})}),this},handleRequestDicSuccess:function(a,c){var d,e,f,g=b.utils.getDicUrl(a);f=this,d=c&&c.getElementsByTagName("row").length>0,e=b.cache.list,d?console.info(g,"\t字典获取成功。"):("isRepeated"==e[a]&&console.info(g,"\t字典获取失败: 第二次获取失败。"),console.info(g,"\t字典获取失败: 进行第二次获取。"),e[a]="isRepeated",b.request(g,function(b){f.handleRequestDicSuccess(a,b)},function(){f.handleRequestDicError(a)},"POST")),e[a]=b.utils.convertXmlDocToDataList(c)},handleRequestDicError:function(a){console.info(a,"\t字典获取失败: 网络原因/路径错误。")}},b.utils={getDicUrl:function(a){return 0!==a.indexOf("DIC_")?a:window.PKUI.dicPath+a+".xml?"+b.timestamp},convertXmlDocToDataList:function(a){var b,d;return b=[],d=a.getElementsByTagName("row"),c.each(d,function(a,c){b.push({code:c.getAttribute("DIC_CODE"),text:c.getAttribute("DIC_TEXT"),spell:c.getAttribute("DIC_SPELL"),aspell:c.getAttribute("DIC_ASPELL")})}),b},convertDataListToDataSet:function(a){var b;return b={},c.each(a,function(a,c){b[c.code]=c.text}),b},convertDataListToExtDataList:function(a,c,d){var e;if(d)return d(a);switch(c){case"select2":e=b.converter.get("select2")(a)}return e}},b.converter={get:function(a){return this[a]},select2:function(a){var b;return b=[],c.each(a,function(a,c){b.push({id:c.code,text:c.text,spell:c.spell+c.code})}),b}},b});