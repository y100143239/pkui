define(function(a){var b,c;return b=a("jquery"),c={options:null,_originData:null,_fmtData:null,init:function(a){return this.options=b.extend({},this.defaults,a),this._getData(),this},_getData:function(){var a=this;b.ajax({url:this.options.url,type:"GET",cache:!1,dataType:"text"}).done(function(c){c=window.PKUI.handleGridResult(c),0==c.success&&b.error("/(ㄒoㄒ)/~~[ 500 ]后台错误！"),a._originData=c.data,a._fmtData=window.PKUI.getTreeList({data:this._originData})}).fail(function(a,c){b.error("/(ㄒoㄒ)/~~[ "+c+" ]菜单数据获取失败！")})}},c.defaults={url:"http://192.168.1.151:8080/pkui/admin/allSysMenuListData",iconBasePath:"http://localhost:6333/pkui/app/desktop/images/default/small/"},c});