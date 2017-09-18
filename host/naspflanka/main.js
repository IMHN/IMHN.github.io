//<![CDATA[

// unslider plugin===============================
(function(e,t){if(!e)return t;var n=function(){this.el=t;this.items=t;this.sizes=[];this.max=[0,0];this.current=0;this.interval=t;this.opts={speed:500,delay:3e3,complete:t,keys:!t,dots:t,fluid:t};var n=this;this.init=function(t,n){this.el=t;this.ul=t.children("ul");this.max=[t.outerWidth(),t.outerHeight()];this.items=this.ul.children("li").each(this.calculate);this.opts=e.extend(this.opts,n);this.setup();return this};this.calculate=function(t){var r=e(this),i=r.outerWidth(),s=r.outerHeight();n.sizes[t]=[i,s];if(i>n.max[0])n.max[0]=i;if(s>n.max[1])n.max[1]=s};this.setup=function(){this.el.css({overflow:"hidden",width:n.max[0],height:this.items.first().outerHeight()});this.ul.css({width:this.items.length*100+"%",position:"relative"});this.items.css("width",100/this.items.length+"%");if(this.opts.delay!==t){this.start();this.el.hover(this.stop,this.start)}this.opts.keys&&e(document).keydown(this.keys);this.opts.dots&&this.dots();if(this.opts.fluid){var r=function(){n.el.css("width",Math.min(Math.round(n.el.outerWidth()/n.el.parent().outerWidth()*100),100)+"%")};r();e(window).resize(r)}if(this.opts.arrows){this.el.parent().append('<p class="arrows"><span class="prev">â†</span><span class="next">â†’</span></p>').find(".arrows span").click(function(){e.isFunction(n[this.className])&&n[this.className]()})}if(e.event.swipe){this.el.on("swipeleft",n.prev).on("swiperight",n.next)}};this.move=function(t,r){if(!this.items.eq(t).length)t=0;if(t<0)t=this.items.length-1;var i=this.items.eq(t);var s={height:i.outerHeight()};var o=r?5:this.opts.speed;if(!this.ul.is(":animated")){n.el.find(".dot:eq("+t+")").addClass("active").siblings().removeClass("active");this.el.animate(s,o)&&this.ul.animate(e.extend({left:"-"+t+"00%"},s),o,function(i){n.current=t;e.isFunction(n.opts.complete)&&!r&&n.opts.complete(n.el)})}};this.start=function(){n.interval=setInterval(function(){n.move(n.current+1)},n.opts.delay)};this.stop=function(){n.interval=clearInterval(n.interval);return n};this.keys=function(t){var r=t.which;var i={37:n.prev,39:n.next,27:n.stop};if(e.isFunction(i[r])){i[r]()}};this.next=function(){return n.stop().move(n.current+1)};this.prev=function(){return n.stop().move(n.current-1)};this.dots=function(){var t='<ol class="dots">';e.each(this.items,function(e){t+='<li class="dot'+(e<1?" active":"")+'">'+(e+1)+"</li>"});t+="</ol>";this.el.addClass("has-dots").append(t).find(".dot").click(function(){n.move(e(this).index())})}};e.fn.unslider=function(t){var r=this.length;return this.each(function(i){var s=e(this);var u=(new n).init(s,t);s.data("unslider"+(r>1?"-"+(i+1):""),u)})}})(window.jQuery,false)

$('.slider').unslider({
	speed: 700,               //  The speed to animate each slide (in milliseconds)
	delay: 30000000,              //  The delay between slide animations (in milliseconds)
	complete: function() {},  //  A function that gets called after every slide animation
	keys: true,               //  Enable keyboard (left, right) arrow shortcuts
	dots: true,               //  Display dot navigation
    fluid: false            //  Support responsive design. May break non-responsive designs
});


$( "<div class='slideraro'><a class='unslider-arrow prev'></a><a class='unslider-arrow next'></a></div>" ).insertBefore( ".slider ul#label_with_thumbs" );

    var unslider = $('.slider').unslider();

    $('.unslider-arrow').click(function() {
        var fn = this.className.split(' ')[1];

        //  Either do unslider.data('unslider').next() or .prev() depending on the className
        unslider.data('unslider')[fn]();
    });


$(window).bind("load", function() {

});

(function(e){e.fn.resizeToParent=function(t){function r(e){e.css({width:"",height:"","margin-left":"","margin-top":""});var n=e.parents(t.parent).width();var r=e.parents(t.parent).height();var i=e.width();var s=e.height();var o=i/n;if(s/o<r){e.css({width:"auto",height:r});i=i/(s/r);s=r}else{e.css({height:"auto",width:n});i=n;s=s/o}var u=(i-n)/-2;var a=(s-r)/-2;e.css({"margin-left":u,"margin-top":a})}var n={parent:"div",delay:100};var t=e.extend(n,t);var i;var s=this;e(window).on("resize",function(){clearTimeout(i);i=setTimeout(function(){s.each(function(){r(e(this))})},t.delay)});return this.each(function(){var t=e(this);t.attr("src",t.attr("src"));t.load(function(){r(t)});if(this.complete){r(t)}})}})(jQuery);$(".imageContainer img").resizeToParent();

// Popular Post Snippet
$(".popular-posts ul li .item-snippet").each(function(){var t=$(this).text().substr(0,60),s=t.lastIndexOf(" ");s>52&&$(this).text(t.substr(0,s).replace(/[?,!\.-:;]*$/,"..."))});

$(".item-thumbnail img").each(function(){$(this).attr("src",$(this).attr("src").replace(/\/s[0-9]+(\-c)?\//,"/w100-h80-c/"))});
$("#recent-posts img").each(function(){$(this).attr("src",$(this).attr("src").replace(/\/s[0-9]+(\-c)?\//,"/w100-h80-c/"))});
$(".avatar-image-container img").each(function(){$(this).attr("src",$(this).attr("src").replace(/\/s[0-9]+(\-c)?\//,"/w70-h70-c/"))});

jQuery(document).ready(function($){
	
	"use strict";

	// Attach + To Top Menu
	$('#top-nav .menu-item-has-children > a, #main-nav ul li ul .menu-item-has-children > a').append(' +');

	// Attach Arrow To Main Menu
	$('#main-nav .menu-item-has-children > a').append('<span class="menu-arrow"></span>');
	
	// Prepend Menu Icons
	$('#logo').after('<div id="menu-icon"></div>');

	$('#top-nav .wrapper').append('<div id="top-menu-icon"></div>');
	
	// Toggle Nav
	$('#menu-icon').on('click', function(){
		$('#main-nav').slideToggle(250);
		$(this).toggleClass('active');
	});
	
	$(window).resize(function(){  
		var w = $(window).width();
		var navDisplay = $('#main-nav');
		if(w > 1000 && navDisplay.is(':hidden')) {  
			navDisplay.removeAttr('style');
		}
	});

	$('#top-menu-icon').on('click', function(){
		$('#top-nav ul').slideToggle(250);
		$(this).toggleClass('active');
	});
	
	$(window).resize(function(){  
		var w = $(window).width();
		var navDisplay = $('#top-nav ul');
		if(w > 1000 && navDisplay.is(':hidden')) {  
			navDisplay.removeAttr('style');
		}
	});

	
});

jQuery.easing.jswing=jQuery.easing.swing; jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,a,c,b,d){return jQuery.easing[jQuery.easing.def](e,a,c,b,d)},easeInQuad:function(e,a,c,b,d){return b*(a/=d)*a+c},easeOutQuad:function(e,a,c,b,d){return-b*(a/=d)*(a-2)+c},easeInOutQuad:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a+c:-b/2*(--a*(a-2)-1)+c},easeInCubic:function(e,a,c,b,d){return b*(a/=d)*a*a+c},easeOutCubic:function(e,a,c,b,d){return b*((a=a/d-1)*a*a+1)+c},easeInOutCubic:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a+c: b/2*((a-=2)*a*a+2)+c},easeInQuart:function(e,a,c,b,d){return b*(a/=d)*a*a*a+c},easeOutQuart:function(e,a,c,b,d){return-b*((a=a/d-1)*a*a*a-1)+c},easeInOutQuart:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a*a+c:-b/2*((a-=2)*a*a*a-2)+c},easeInQuint:function(e,a,c,b,d){return b*(a/=d)*a*a*a*a+c},easeOutQuint:function(e,a,c,b,d){return b*((a=a/d-1)*a*a*a*a+1)+c},easeInOutQuint:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a*a*a+c:b/2*((a-=2)*a*a*a*a+2)+c},easeInSine:function(e,a,c,b,d){return-b*Math.cos(a/ d*(Math.PI/2))+b+c},easeOutSine:function(e,a,c,b,d){return b*Math.sin(a/d*(Math.PI/2))+c},easeInOutSine:function(e,a,c,b,d){return-b/2*(Math.cos(Math.PI*a/d)-1)+c},easeInExpo:function(e,a,c,b,d){return 0==a?c:b*Math.pow(2,10*(a/d-1))+c},easeOutExpo:function(e,a,c,b,d){return a==d?c+b:b*(-Math.pow(2,-10*a/d)+1)+c},easeInOutExpo:function(e,a,c,b,d){return 0==a?c:a==d?c+b:1>(a/=d/2)?b/2*Math.pow(2,10*(a-1))+c:b/2*(-Math.pow(2,-10*--a)+2)+c},easeInCirc:function(e,a,c,b,d){return-b*(Math.sqrt(1-(a/=d)* a)-1)+c},easeOutCirc:function(e,a,c,b,d){return b*Math.sqrt(1-(a=a/d-1)*a)+c},easeInOutCirc:function(e,a,c,b,d){return 1>(a/=d/2)?-b/2*(Math.sqrt(1-a*a)-1)+c:b/2*(Math.sqrt(1-(a-=2)*a)+1)+c},easeInElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(0==a)return c;if(1==(a/=d))return c+b;f||(f=0.3*d);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return-(g*Math.pow(2,10*(a-=1))*Math.sin(2*(a*d-e)*Math.PI/f))+c},easeOutElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(0==a)return c;if(1== (a/=d))return c+b;f||(f=0.3*d);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return g*Math.pow(2,-10*a)*Math.sin(2*(a*d-e)*Math.PI/f)+b+c},easeInOutElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(0==a)return c;if(2==(a/=d/2))return c+b;f||(f=0.3*d*1.5);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return 1>a?-0.5*g*Math.pow(2,10*(a-=1))*Math.sin(2*(a*d-e)*Math.PI/f)+c:g*Math.pow(2,-10*(a-=1))*Math.sin(2*(a*d-e)*Math.PI/f)*0.5+b+c},easeInBack:function(e,a,c,b,d,f){void 0== f&&(f=1.70158);return b*(a/=d)*a*((f+1)*a-f)+c},easeOutBack:function(e,a,c,b,d,f){void 0==f&&(f=1.70158);return b*((a=a/d-1)*a*((f+1)*a+f)+1)+c},easeInOutBack:function(e,a,c,b,d,f){void 0==f&&(f=1.70158);return 1>(a/=d/2)?b/2*a*a*(((f*=1.525)+1)*a-f)+c:b/2*((a-=2)*a*(((f*=1.525)+1)*a+f)+2)+c},easeInBounce:function(e,a,c,b,d){return b-jQuery.easing.easeOutBounce(e,d-a,0,b,d)+c},easeOutBounce:function(e,a,c,b,d){return(a/=d)<1/2.75?7.5625*b*a*a+c:a<2/2.75?b*(7.5625*(a-=1.5/2.75)*a+0.75)+c:a<2.5/2.75? b*(7.5625*(a-=2.25/2.75)*a+0.9375)+c:b*(7.5625*(a-=2.625/2.75)*a+0.984375)+c},easeInOutBounce:function(e,a,c,b,d){return a<d/2?0.5*jQuery.easing.easeInBounce(e,2*a,0,b,d)+c:0.5*jQuery.easing.easeOutBounce(e,2*a-d,0,b,d)+0.5*b+c}});

(function(d){function b(a){var c=[].slice.call(arguments,1),b=0;a=d.event.fix(a||window.event);a.type="mousewheel";a.wheelDelta&&(b=a.wheelDelta/120);a.detail&&(b=-a.detail/3);c.unshift(a,b);return d.event.handle.apply(this,c)}var c=["DOMMouseScroll","mousewheel"];d.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=c.length;a;)this.addEventListener(c[--a],b,!1);else this.onmousewheel=b},teardown:function(){if(this.removeEventListener)for(var a=c.length;a;)this.removeEventListener(c[--a], b,!1);else this.onmousewheel=null}};d.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);

(function(b){b.fn.lofJSidernews=function(a){return this.each(function(){new b.lofSidernews(this,a)})};b.lofSidernews=function(a,c){this.settings={direction:"",mainItemSelector:"li",navInnerSelector:"ul",navSelector:"li",navigatorEvent:"click",wapperSelector:".lof-main-wapper",interval:4E3,auto:!0,maxItemDisplay:3,startItem:0,navPosition:"vertical",navigatorHeight:100,navigatorWidth:310,duration:600,navItemsSelector:".lof-navigator li",navOuterSelector:".lof-navigator-outer",isPreloaded:!0,easing:"easeInOutQuad"}; b.extend(this.settings,c||{});this.previousNo=this.nextNo=null;this.maxWidth=this.settings.mainWidth||600;this.wrapper=b(a).find(this.settings.wapperSelector);this.slides=this.wrapper.find(this.settings.mainItemSelector);if(this.wrapper.length&&this.slides.length)if(this.settings.maxItemDisplay>this.slides.length&&(this.settings.maxItemDisplay=this.slides.length),this.currentNo=isNaN(this.settings.startItem)||this.settings.startItem>this.slides.length?0:this.settings.startItem,this.navigatorOuter= b(a).find(this.settings.navOuterSelector),this.navigatorItems=b(a).find(this.settings.navItemsSelector),this.navigatorInner=this.navigatorOuter.find(this.settings.navInnerSelector),"horizontal"==this.settings.navPosition?(this.navigatorInner.width(this.slides.length*this.settings.navigatorWidth),this.navigatorOuter.width(this.settings.maxItemDisplay*this.settings.navigatorWidth),this.navigatorOuter.height(this.settings.navigatorHeight)):(this.navigatorInner.height(this.slides.length*this.settings.navigatorHeight), this.navigatorOuter.height(this.settings.maxItemDisplay*this.settings.navigatorHeight),this.navigatorOuter.width(this.settings.navigatorWidth)),this.navigratorStep=this.__getPositionMode(this.settings.navPosition),this.directionMode=this.__getDirectionMode(),"opacity"==this.settings.direction?(this.wrapper.addClass("lof-opacity"),b(this.slides).css("opacity",0).eq(this.currentNo).css("opacity",1)):this.wrapper.css({left:"-"+this.currentNo*this.maxSize+"px",width:this.maxWidth*this.slides.length}), this.settings.isPreloaded)this.preLoadImage(this.onComplete);else this.onComplete()};b.lofSidernews.fn=b.lofSidernews.prototype;b.lofSidernews.fn.extend=b.lofSidernews.extend=b.extend;b.lofSidernews.fn.extend({startUp:function(a,c){seft=this;this.navigatorItems.each(function(a,c){b(c).click(function(){seft.jumping(a,!0);seft.setNavActive(a,c)});b(c).css({height:seft.settings.navigatorHeight,width:seft.settings.navigatorWidth})});this.registerWheelHandler(this.navigatorOuter,this);this.setNavActive(this.currentNo); this.settings.buttons&&"object"==typeof this.settings.buttons&&this.registerButtonsControl("click",this.settings.buttons,this);this.settings.auto&&this.play(this.settings.interval,"next",!0);return this},onComplete:function(){setTimeout(function(){b(".preload").fadeOut(900)},400);this.startUp()},preLoadImage:function(a){var c=this,b=this.wrapper.find("img"),d=0;b.each(function(a,f){if(f.complete){if(d++,d>=b.length)c.onComplete()}else f.onload=function(){d++;if(d>=b.length)c.onComplete()},f.onerror= function(){d++;if(d>=b.length)c.onComplete()}})},navivationAnimate:function(a){if(a<=this.settings.startItem||a-this.settings.startItem>=this.settings.maxItemDisplay-1)this.settings.startItem=a-this.settings.maxItemDisplay+2,0>this.settings.startItem&&(this.settings.startItem=0),this.settings.startItem>this.slides.length-this.settings.maxItemDisplay&&(this.settings.startItem=this.slides.length-this.settings.maxItemDisplay);this.navigatorInner.stop().animate(eval("({"+this.navigratorStep[0]+":-"+this.settings.startItem* this.navigratorStep[1]+"})"),{duration:500,easing:"easeInOutQuad"})},setNavActive:function(a,c){this.navigatorItems&&(this.navigatorItems.removeClass("active"),b(this.navigatorItems.get(a)).addClass("active"),this.navivationAnimate(this.currentNo))},__getPositionMode:function(a){return"horizontal"==a?["left",this.settings.navigatorWidth]:["top",this.settings.navigatorHeight]},__getDirectionMode:function(){switch(this.settings.direction){case "opacity":return this.maxSize=0,["opacity","opacity"];default:return this.maxSize= this.maxWidth,["left","width"]}},registerWheelHandler:function(a,c){a.bind("mousewheel",function(a,b){Math.abs(b);0<b?c.previous(!0):c.next(!0);return!1})},registerButtonsControl:function(a,c,b){for(var d in c)switch(d.toString()){case "next":c[d].click(function(){b.next(!0)});break;case "previous":c[d].click(function(){b.previous(!0)})}return this},onProcessing:function(a,c,b){this.previousNo=this.currentNo+(0<this.currentNo?-1:this.slides.length-1);this.nextNo=this.currentNo+(this.currentNo<this.slides.length- 1?1:1-this.slides.length);return this},finishFx:function(a){a&&this.stop();a&&this.settings.auto&&this.play(this.settings.interval,"next",!0);this.setNavActive(this.currentNo)},getObjectDirection:function(a,b){return eval("({'"+this.directionMode[0]+"':-"+this.currentNo*a+"})")},fxStart:function(a,c,e){"opacity"==this.settings.direction?(b(this.slides).stop().animate({opacity:0},{duration:this.settings.duration,easing:this.settings.easing}),b(this.slides).eq(a).stop().animate({opacity:1},{duration:this.settings.duration, easing:this.settings.easing})):this.wrapper.stop().animate(c,{duration:this.settings.duration,easing:this.settings.easing});return this},jumping:function(a,b){this.stop();if(this.currentNo!=a){var e=eval("({'"+this.directionMode[0]+"':-"+this.maxSize*a+"})");this.onProcessing(null,b,0,this.maxSize).fxStart(a,e,this).finishFx(b);this.currentNo=a}},next:function(a,b){this.currentNo+=this.currentNo<this.slides.length-1?1:1-this.slides.length;this.onProcessing(b,a,0,this.maxSize).fxStart(this.currentNo, this.getObjectDirection(this.maxSize),this).finishFx(a)},previous:function(a,b){this.currentNo+=0<this.currentNo?-1:this.slides.length-1;this.onProcessing(b,a).fxStart(this.currentNo,this.getObjectDirection(this.maxSize),this).finishFx(a)},play:function(a,b,e){this.stop();if(!e)this[b](!1);var d=this;this.isRun=setTimeout(function(){d[b](!0)},a)},stop:function(){null!=this.isRun&&(clearTimeout(this.isRun),this.isRun=null)}})})(jQuery);

(function(e,t){if(!e)return t;var n=function(){this.el=t;this.items=t;this.sizes=[];this.max=[0,0];this.current=0;this.interval=t;this.opts={speed:500,delay:3e3,complete:t,keys:!t,dots:t,fluid:t};var n=this;this.init=function(t,n){this.el=t;this.ul=t.children("ul");this.max=[t.outerWidth(),t.outerHeight()];this.items=this.ul.children("li").each(this.calculate);this.opts=e.extend(this.opts,n);this.setup();return this};this.calculate=function(t){var r=e(this),i=r.outerWidth(),s=r.outerHeight();n.sizes[t]=[i,s];if(i>n.max[0])n.max[0]=i;if(s>n.max[1])n.max[1]=s};this.setup=function(){this.el.css({overflow:"hidden",width:n.max[0],height:this.items.first().outerHeight()});this.ul.css({width:this.items.length*100+"%",position:"relative"});this.items.css("width",100/this.items.length+"%");if(this.opts.delay!==t){this.start();this.el.hover(this.stop,this.start)}this.opts.keys&&e(document).keydown(this.keys);this.opts.dots&&this.dots();if(this.opts.fluid){var r=function(){n.el.css("width",Math.min(Math.round(n.el.outerWidth()/n.el.parent().outerWidth()*100),100)+"%")};r();e(window).resize(r)}if(this.opts.arrows){this.el.parent().append('<p class="arrows"><span class="prev">â†</span><span class="next">â†’</span></p>').find(".arrows span").click(function(){e.isFunction(n[this.className])&&n[this.className]()})}if(e.event.swipe){this.el.on("swipeleft",n.prev).on("swiperight",n.next)}};this.move=function(t,r){if(!this.items.eq(t).length)t=0;if(t<0)t=this.items.length-1;var i=this.items.eq(t);var s={height:i.outerHeight()};var o=r?5:this.opts.speed;if(!this.ul.is(":animated")){n.el.find(".dot:eq("+t+")").addClass("active").siblings().removeClass("active");this.el.animate(s,o)&&this.ul.animate(e.extend({left:"-"+t+"00%"},s),o,function(i){n.current=t;e.isFunction(n.opts.complete)&&!r&&n.opts.complete(n.el)})}};this.start=function(){n.interval=setInterval(function(){n.move(n.current+1)},n.opts.delay)};this.stop=function(){n.interval=clearInterval(n.interval);return n};this.keys=function(t){var r=t.which;var i={37:n.prev,39:n.next,27:n.stop};if(e.isFunction(i[r])){i[r]()}};this.next=function(){return n.stop().move(n.current+1)};this.prev=function(){return n.stop().move(n.current-1)};this.dots=function(){var t='<ol class="dots">';e.each(this.items,function(e){t+='<li class="dot'+(e<1?" active":"")+'">'+(e+1)+"</li>"});t+="</ol>";this.el.addClass("has-dots").append(t).find(".dot").click(function(){n.move(e(this).index())})}};e.fn.unslider=function(t){var r=this.length;return this.each(function(i){var s=e(this);var u=(new n).init(s,t);s.data("unslider"+(r>1?"-"+(i+1):""),u)})}})(window.jQuery,false);

$(document).ready(function(){var e="",t=20;$.ajax({url:""+e+"/feeds/posts/default?alt=json-in-script&max-results="+t,type:"get",dataType:"jsonp",success:function(e){function t(){$("#adbreakingnews li:first").slideUp(function(){$(this).appendTo($("#adbreakingnews ul")).slideDown()})}var n,r,s="",a=e.feed.entry;if(void 0!==a){s="<ul>";for(var l=0;l<a.length;l++){for(var o=0;o<a[l].link.length;o++)if("alternate"==a[l].link[o].rel){n=a[l].link[o].href;break}r=a[l].title.$t,s+='<li><a href="'+n+'" target="_blank">'+r+"</a></li>"}s+="</ul>",$("#adbreakingnews").html(s),setInterval(function(){t()},5e3)}else $("#adbreakingnews").html("<span>No result!</span>")},error:function(){$("#adbreakingnews").html("<strong>Error Loading Feed!</strong>")}})});

!function($,window,undefined){"use strict";$.fn.tabslet=function(options){var defaults={mouseevent:"click",attribute:"href",animation:!1,autorotate:!1,pauseonhover:!0,delay:2e3,active:1,controls:{prev:".prev",next:".next"}},options=$.extend(defaults,options);return this.each(function(){var $this=$(this),_cache_li=[],_cache_div=[];$this.find("> div").each(function(){_cache_div.push($(this).css("display"))});var elements=$this.find("> ul li"),i=options.active-1;if(!$this.data("tabslet-init")){$this.data("tabslet-init",!0),options.mouseevent=$this.data("mouseevent")||options.mouseevent,options.attribute=$this.data("attribute")||options.attribute,options.animation=$this.data("animation")||options.animation,options.autorotate=$this.data("autorotate")||options.autorotate,options.pauseonhover=$this.data("pauseonhover")||options.pauseonhover,options.delay=$this.data("delay")||options.delay,options.active=$this.data("active")||options.active,$this.find("> div").hide(),options.active&&($this.find("> div").eq(options.active-1).show(),$this.find("> ul li").eq(options.active-1).addClass("active"));var fn=eval(function(){$(this).trigger("_before"),$this.find("> ul li").removeClass("active"),$(this).addClass("active"),$this.find("> div").hide(),i=elements.index($(this));var t=$(this).find("a").attr(options.attribute);return options.animation?$this.find(t).animate({opacity:"show"},"slow",function(){$(this).trigger("_after")}):($this.find(t).show(),$(this).trigger("_after")),!1}),init=eval("$this.find('> ul li')."+options.mouseevent+"(fn)"),t,forward=function(){i=++i%elements.length,"hover"==options.mouseevent?elements.eq(i).trigger("mouseover"):elements.eq(i).click(),options.autorotate&&(clearTimeout(t),t=setTimeout(forward,options.delay),$this.mouseover(function(){options.pauseonhover&&clearTimeout(t)}))};options.autorotate&&(t=setTimeout(forward,options.delay),$this.hover(function(){options.pauseonhover&&clearTimeout(t)},function(){t=setTimeout(forward,options.delay)}),options.pauseonhover&&$this.on("mouseleave",function(){clearTimeout(t),t=setTimeout(forward,options.delay)}));var move=function(t){"forward"==t&&(i=++i%elements.length),"backward"==t&&(i=--i%elements.length),elements.eq(i).click()};$this.find(options.controls.next).click(function(){move("forward")}),$this.find(options.controls.prev).click(function(){move("backward")}),$this.on("destroy",function(){$(this).removeData().find("> ul li").each(function(){$(this).removeClass("active")}),$(this).find("> div").each(function(t){$(this).removeAttr("style").css("display",_cache_div[t])})})}})},$(document).ready(function(){$('[data-toggle="tabslet"]').tabslet()})}(jQuery);

//]]>
