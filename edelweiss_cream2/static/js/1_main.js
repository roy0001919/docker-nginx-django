$('.section_9 #carouselBox').carousel({
    interval: 4000
});


(function($) {
    $.fn.animateNumbers = function(stop, commas, duration, ease) {
        return this.each(function() {
            var $this = $(this);
            var start = parseInt($this.text().replace(/,/g, ""));
			commas = (commas === undefined) ? true : commas;
            $({value: start}).animate({value: stop}, {
            	duration: duration == undefined ? 1000 : duration,
            	easing: ease == undefined ? "swing" : ease,
            	step: function() {
            		$this.text(Math.floor(this.value));
					if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
            	},
            	complete: function() {
            	   if (parseInt($this.text()) !== stop) {
            	       $this.text(stop);
					   if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
            	   }
            	}
            });
        });
    };
})(jQuery);

$('#spin').on('click', function(){
    $('#bubble_1 h3').animateNumbers(70);
} );

$(document).scroll(function(e) {
    const scroll = $(document).scrollTop();
    const width = $(document).width();
    const type = width < 500 ? 'mobile' : width < 960 ? 'pad' : 'pc'
    if (type === 'pad' && scroll >= 2600) {
        bubbleAnimate()
    }
    if (type === 'mobile' && scroll >= 1190) {
        bubbleAnimate()
    }
    if(type === 'pc' && scroll >= 3800) {
        bubbleAnimate()
    }

    if (type === 'pad' && scroll >= 5750) {
        percentAnimate()
    }
    if (type === 'mobile' && scroll >= 3000) {
        percentAnimate()
    }
    if(type === 'pc' && scroll >= 6950) {
        percentAnimate()
    }
})

function bubbleAnimate() {
    // $('#bubble_1 h3').animateNumbers(70);
    // $('#bubble_2 h3').animateNumbers(90);
    // $('#bubble_3 h3').animateNumbers(92);
    // $('#bubble_4 h3').animateNumbers(98);
    // $('#bubble_5 h3').animateNumbers(95);
    // $('#bubble_6 h3').animateNumbers(77);

    animateValue($('#bubble_1 h3'),50,70);
    animateValue($('#bubble_2 h3'),65,90);
    animateValue($('#bubble_3 h3'),74,92);
    animateValue($('#bubble_4 h3'),70,98);
    animateValue($('#bubble_5 h3'),72,95);
    animateValue($('#bubble_6 h3'),63,77);
}

function percentAnimate() {
    animateValue($('#percent'),80,100);
}


function animateValue(obj, start, end, duration=800) {
    if(obj.data('animate')) return

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.text(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
      if (progress === 1) {
        obj.data('animate', true);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const obj = $("#value");
  animateValue(obj, 40, 100, 800);