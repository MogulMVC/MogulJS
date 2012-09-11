var speedFast = 125;
var speedNorm = 250;
var speedSlow = 500;(function($){
  
  $.fn.MHTMLAnimate = function(html, speed, callback){
    
    return this.each(function(){

      var element = $(this);
      var current = {width: element.width()+'px', height: element.height()+'px'};
      var final = {width: this.style.width, height: this.style.height};

      element.html(html);

      var next = {width: element.width()+'px', height: element.height()+'px'};

      element.css(current).animate(next, speed, function(){
	element.css(final);
	if($.isFunction(callback))callback();
      });
      
    });
    
  };

})(jQuery); 
 
 
(function($){
    
    function maybeCall(thing, ctx){
        return (typeof thing == 'function') ? (thing.call(ctx)) : thing;
    };
    
    function Tip(element, options){
        this.$element = $(element);
        this.options = options;
        this.enabled = true;
        this.fixTitle();
    };
    
    Tip.prototype = {
        show: function(){
            var title = this.getTitle();
            if(title && this.enabled){
                var $tip = this.tip();
                
                $tip.find('.MTipInner')[this.options.html ? 'html' : 'text'](title);
                $tip[0].className = 'MTip'; // reset classname in case of dynamic gravity
                $tip.remove().css({top: 0, left: 0, visibility: 'hidden', display: 'block'}).prependTo(document.body);
                
                var pos = $.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                });
                
                var actualWidth = $tip[0].offsetWidth,
                    actualHeight = $tip[0].offsetHeight,
                    gravity = maybeCall(this.options.gravity, this.$element[0]);
                
                var tp;
                switch (gravity.charAt(0)){
                    case 'N':
                        tp = {top: pos.top + pos.height + this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                        break;
                    case 'S':
                        tp = {top: pos.top - actualHeight - this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                        break;
                    case 'E':
                        tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth - this.options.offset};
                        break;
                    case 'W':
                        tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width + this.options.offset};
                        break;
                }
                
                if(gravity.length == 2){
                    if(gravity.charAt(1) == 'W'){
                        tp.left = pos.left + pos.width / 2 - 15;
                    } else {
                        tp.left = pos.left + pos.width / 2 - actualWidth + 15;
                    }
                }
                
                $tip.css(tp).addClass('MTip' + gravity);
                $tip.find('.MTipArrow')[0].className = 'MTipArrow MTipArrow' + gravity.charAt(0);
                if(this.options.className){
                    $tip.addClass(maybeCall(this.options.className, this.$element[0]));
                }
                
                if(this.options.fade){
                    $tip.stop().css({opacity: 0, display: 'block', visibility: 'visible'}).animate({opacity: this.options.opacity});
                } else {
                    $tip.css({visibility: 'visible', opacity: this.options.opacity});
                }
            }
        },
        
        hide: function(){
            if(this.options.fade){
                this.tip().stop().fadeOut(function(){ $(this).remove(); });
            } else {
                this.tip().remove();
            }
        },
        
        fixTitle: function(){
            var $e = this.$element;
            if($e.attr('title') || typeof($e.attr('original-title')) != 'string'){
                $e.attr('original-title', $e.attr('title') || '').removeAttr('title');
            }
        },
        
        getTitle: function(){
            var title, $e = this.$element, o = this.options;
            this.fixTitle();
            var title, o = this.options;
            if(typeof o.title == 'string'){
                title = $e.attr(o.title == 'title' ? 'original-title' : o.title);
            } else if(typeof o.title == 'function'){
                title = o.title.call($e[0]);
            }
            title = ('' + title).replace(/(^\s*|\s*$)/, "");
            return title || o.fallback;
        },
        
        tip: function(){
            if(!this.$tip){
                this.$tip = $('<div class="MTip"></div>').html('<div class="MTipArrow"></div><div class="MTipInner shadow_large"></div>');
            }
            return this.$tip;
        },
        
        validate: function(){
            if(!this.$element[0].parentNode){
                this.hide();
                this.$element = null;
                this.options = null;
            }
        },
        
        enable: function(){ this.enabled = true; },
        disable: function(){ this.enabled = false; },
        toggleEnabled: function(){ this.enabled = !this.enabled; }
    };
    
    $.fn.MTip = function(options){
        
        if(options === true){
            return this.data('MTip');
        } else if(typeof options == 'string'){
            var tip = this.data('MTip');
            if(tip) tip[options]();
            return this;
        }
        
        options = $.extend({}, $.fn.MTip.defaults, options);
        
        function get(ele){
            var tip = $.data(ele, 'MTip');
            if(!tip){
                tip = new Tip(ele, $.fn.MTip.elementOptions(ele, options));
                $.data(ele, 'MTip', tip);
            }
            return tip;
        }
        
        function enter(){
            var tip = get(this);
            tip.hoverState = 'in';
            if(options.delayIn == 0){
                tip.show();
            } else {
                tip.fixTitle();
                setTimeout(function(){ if (tip.hoverState == 'in') tip.show(); }, options.delayIn);
            }
        };
        
        function leave(){
            var tip = get(this);
            tip.hoverState = 'out';
            if(options.delayOut == 0){
                tip.hide();
            } else {
                setTimeout(function(){ if (tip.hoverState == 'out') tip.hide(); }, options.delayOut);
            }
        };
        
        if(!options.live) this.each(function(){ get(this); });
        
        if(options.trigger != 'manual'){
            var binder   = options.live ? 'live' : 'bind',
                eventIn  = options.trigger == 'hover' ? 'mouseenter' : 'focus',
                eventOut = options.trigger == 'hover' ? 'mouseleave' : 'blur';
            this[binder](eventIn, enter)[binder](eventOut, leave);
        }
        
        return this;
        
    };
    
    $.fn.MTip.defaults = {
        className: null,
        delayIn: 0,
        delayOut: 0,
        fade: false,
        fallback: '',
        gravity: 'n',
        html: false,
        live: false,
        offset: 0,
        opacity: 1,
        title: 'title',
        trigger: 'hover'
    };
    
    // Overwrite this method to provide options on a per-element basis.
    // For example, you could store the gravity in a 'tip-gravity' attribute:
    // return $.extend({}, options, {gravity: $(ele).attr('tip-gravity') || 'n' });
    // (remember - do not modify 'options' in place!)
    $.fn.MTip.elementOptions = function(ele, options){
        return $.metadata ? $.extend({}, options, $(ele).metadata()) : options;
    };
    
    $.fn.MTip.autoNS = function(){
        return $(this).offset().top > ($(document).scrollTop() + $(window).height() / 2) ? 'S' : 'N';
    };
    
    $.fn.MTip.autoWE = function(){
        return $(this).offset().left > ($(document).scrollLeft() + $(window).width() / 2) ? 'E' : 'W';
    };
    
    /**
     * yields a closure of the supplied parameters, producing a function that takes
     * no arguments and is suitable for use as an autogravity function like so:
     *
     * @param margin (int) - distance from the viewable region edge that an
     *        element should be before setting its tooltip's gravity to be away
     *        from that edge.
     * @param prefer (string, e.g. 'n', 'sw', 'w') - the direction to prefer
     *        if there are no viewable region edges effecting the tooltip's
     *        gravity. It will try to vary from this minimally, for example,
     *        if 'sw' is preferred and an element is near the right viewable 
     *        region edge, but not the top edge, it will set the gravity for
     *        that element's tooltip to be 'se', preserving the southern
     *        component.
     */
     $.fn.MTip.autoBounds = function(margin, prefer){
		return function(){
			var dir = {ns: prefer[0], ew: (prefer.length > 1 ? prefer[1] : false)},
			    boundTop = $(document).scrollTop() + margin,
			    boundLeft = $(document).scrollLeft() + margin,
			    $this = $(this);

			if($this.offset().top < boundTop) dir.ns = 'N';
			if($this.offset().left < boundLeft) dir.ew = 'W';
			if($(window).width() + $(document).scrollLeft() - $this.offset().left < margin) dir.ew = 'E';
			if($(window).height() + $(document).scrollTop() - $this.offset().top < margin) dir.ns = 'S';

			return dir.ns + (dir.ew ? dir.ew : '');
		}
	};
    
})(jQuery);
(function(window){

  function MClass(){ 
  }
  
  MClass.static = function(a,b){
    alert("Static");
  }
  
  window.MClass = MClass;
  
})(window);(function(window){

  function MColor(){ 
  }
  
  MColor.fadeHex = function(hex, hex2, ratio){
    var r = hex >> 16;
    var g = hex >> 8 & 0xFF;
    var b = hex & 0xFF;

    r += ((hex2 >> 16)-r) * ratio;
    g += ((hex2 >> 8 & 0xFF) - g) * ratio;
    b += ((hex2 & 0xFF) - b) * ratio;

    return(r<<16 | g<<8 | b);
  }
  
  window.MColor = MColor;
  
})(window);(function(window){

  function MLoad(){ 
  }
  
  MLoad.js = function(url){
    var headID = document.getElementsByTagName('head')[0];         
    var scriptNode = document.createElement('script');
    scriptNode.src = url;
    headID.appendChild(scriptNode);
  }
  
  MLoad.css = function(url){    
    var headID = document.getElementsByTagName('head')[0];         
    var cssNode = document.createElement('link');
    cssNode.href = url;
    cssNode.type = 'text/css';
    cssNode.rel = 'stylesheet';
    headID.appendChild(cssNode);
  }
  
  window.MLoad = MLoad;
  
})(window);(function(window){

  function MMath(){ 
  }
  
  MMath.random = function(min, max){
    return Math.random() * (max - min) + min;
  }
    
  MMath.linear_regression = function(x, y){
    
    // calculate number points
    var n = x.length;

    // ensure both arrays of points are the same size
    if(n != y.length){
      return ['Error'];
    }

    // calculate sums
    var x_sum = 0;

    for (var i = 0; i < x.length; i++) {
      x_sum += x[i];
    }

    var y_sum = 0;

    for (var i = 0; i < y.length; i++) {
      y_sum += y[i];
    }

    var xx_sum = 0;
    var xy_sum = 0;

    for(var i = 0; i < n; i++){
      xy_sum += (x[i] * y[i]);
      xx_sum += (x[i] * x[i]);
    }

    // calculate slope
    var m = ((n * xy_sum) - (x_sum * y_sum)) / ((n * xx_sum) - (x_sum * x_sum));

    // calculate intercept
    var b = (y_sum - (m * x_sum)) / n;

    // return result
    return [m,b];

  }
  
  window.MMath = MMath;
  
})(window);(function(window){

  function MTemperature(){ 
  }

  MTemperature.c2f = function(value){
    return value *  9/5 + 32;
  }

  MTemperature.c2k = function(value){
    return value + 273.15;
  }

  MTemperature.f2c = function(value){
    return (value - 32) * 5/9;
  }

  MTemperature.f2k = function(value){
    return (5/9 * (value - 32) + 273);
  }

  MTemperature.k2c = function(value){
    return value - 273.15;
  }

  MTemperature.k2f = function(value){
    return ((value - 273) * 1.8) + 32;
  }
  
  window.MTemperature = MTemperature;
  
})(window);(function(window){

  function MTime(){ 
  }

  MTime.sec2hms = function(sec){

    var hms = '';

    // do the hours first: there are 3600 seconds in an hour, so if we divide
    // the total number of seconds by 3600 and throw away the remainder, we're
    // left with the number of hours in those seconds
    var hours = parseInt(sec / 3600); 

    // dividing the total seconds by 60 will give us the number of minutes
    // in total, but we're interested in *minutes past the hour* and to get
    // this, we have to divide by 60 again and then use the remainder
    var minutes = parseInt(sec / 60) % 60; 

    // seconds past the minute are found by dividing the total number of seconds
    // by 60 and using the remainder
    var seconds = parseInt(sec % 60); 

    //Padding
    //Hours
    var hours_pad = '';

    if(hours < 10) {
      hours_pad = "0";
    }

    //Minutes
    var minutes_pad = '';

    if(minutes < 10) {
      minutes_pad = "0";
    }

    //Seconds
    var seconds_pad = '';

    if(seconds < 10) {
      seconds_pad = "0";
    }

    //Output
    //If there are hours
    if(hours >= 0) {
      hms = hours_pad + hours + ":" + minutes_pad + minutes + ":" + seconds_pad + seconds;
    }

    //If there are no hours but there are mins
    if(hours <= 0 && minutes > 0) {
      hms = minutes_pad + minutes + ":" + seconds_pad + seconds;
    }

    //If there are no hours and no minutes
    //This will display 00 if there are 0 seconds
    if(hours <= 0 && minutes <= 0) {
      hms = seconds_pad + seconds;
    }

    return hms;
  }
  
  window.MTime = MTime;
  
})(window);