define(function(a){function b(a,b){this.$target=a,this.opts=d.extend(!0,{},this.defaults,b),this.init()}a("lib/component/intro/2.5.0/introjs.css");var c=a("intro").introJs,d=a("jquery"),e="pkui.intro",f=window.PKUI;b.prototype.defaults={startIntroSelector:"",prevLabel:"上一步",nextLabel:"下一步",skipLabel:"退出",doneLabel:"完成",tooltipPosition:"auto"},b.prototype.init=function(){var a=this.$target.attr("id");a||(a="intro_"+(new Date).getTime(),this.$target.attr("id",a)),this.introJsInstance=c("#"+a),this.introJsInstance.setOptions(this.opts),this.render(),this.bind()},b.prototype.render=function(){this.$startIntro=d(this.opts.startIntroSelector)},b.prototype.bind=function(){var a=this;this.$startIntro.on("click."+e,function(){a.introJsInstance.start()})},d.fn.Intro=function(a){return this.each(function(){var c=d(this),f=c.data(e);f||(c.attr("isrendered",!0),f=new b(c,a),c.data(e,f))}),this},f.component.Intro=d.fn.Intro});