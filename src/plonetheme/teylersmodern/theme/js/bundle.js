/* This is a bundle that uses RequireJS to pull in dependencies.
   These dependencies are defined in the registry.xml file */

+function(t,e,i){"use strict";var r={calc:!1};e.fn.rrssb=function(t){var r=e.extend({description:i,emailAddress:i,emailBody:i,emailSubject:i,image:i,title:i,url:i},t);r.emailSubject=r.emailSubject||r.title,r.emailBody=r.emailBody||(r.description?r.description:"")+(r.url?"\n\n"+r.url:"");for(var s in r)r.hasOwnProperty(s)&&r[s]!==i&&(r[s]=a(r[s]));r.url!==i&&(e(this).find(".rrssb-facebook a").attr("href","https://www.facebook.com/sharer/sharer.php?u="+r.url),e(this).find(".rrssb-tumblr a").attr("href","http://tumblr.com/share/link?url="+r.url+(r.title!==i?"&name="+r.title:"")+(r.description!==i?"&description="+r.description:"")),e(this).find(".rrssb-linkedin a").attr("href","http://www.linkedin.com/shareArticle?mini=true&url="+r.url+(r.title!==i?"&title="+r.title:"")+(r.description!==i?"&summary="+r.description:"")),e(this).find(".rrssb-twitter a").attr("href","https://twitter.com/intent/tweet?text="+(r.description!==i?r.description:"")+"%20"+r.url),e(this).find(".rrssb-hackernews a").attr("href","https://news.ycombinator.com/submitlink?u="+r.url+(r.title!==i?"&text="+r.title:"")),e(this).find(".rrssb-reddit a").attr("href","http://www.reddit.com/submit?url="+r.url+(r.description!==i?"&text="+r.description:"")+(r.title!==i?"&title="+r.title:"")),e(this).find(".rrssb-googleplus a").attr("href","https://plus.google.com/share?url="+(r.description!==i?r.description:"")+"%20"+r.url),e(this).find(".rrssb-pinterest a").attr("href","http://pinterest.com/pin/create/button/?url="+r.url+(r.image!==i?"&amp;media="+r.image:"")+(r.description!==i?"&description="+r.description:"")),e(this).find(".rrssb-pocket a").attr("href","https://getpocket.com/save?url="+r.url),e(this).find(".rrssb-github a").attr("href",r.url),e(this).find(".rrssb-print a").attr("href","javascript:window.print()"),e(this).find(".rrssb-whatsapp a").attr("href","whatsapp://send?text="+(r.description!==i?r.description+"%20":r.title!==i?r.title+"%20":"")+r.url)),(r.emailAddress!==i||r.emailSubject)&&e(this).find(".rrssb-email a").attr("href","mailto:"+(r.emailAddress?r.emailAddress:"")+"?"+(r.emailSubject!==i?"subject="+r.emailSubject:"")+(r.emailBody!==i?"&body="+r.emailBody:""))};var s=function(){var t=e("<div>"),i=["calc","-webkit-calc","-moz-calc"];e("body").append(t);for(var s=0;s<i.length;s++)if(t.css("width",i[s]+"(1px)"),1===t.width()){r.calc=i[s];break}t.remove()},a=function(t){if(t!==i&&null!==t){if(null===t.match(/%[0-9a-f]{2}/i))return encodeURIComponent(t);t=decodeURIComponent(t),a(t)}},n=function(){e(".rrssb-buttons").each(function(t){var i=e(this),r=e("li:visible",i),s=r.length,a=100/s;r.css("width",a+"%").attr("data-initwidth",a)})},l=function(){e(".rrssb-buttons").each(function(t){var i=e(this),r=i.width(),s=e("li",i).not(".small").eq(0).width(),a=e("li.small",i).length;if(s>170&&1>a){i.addClass("large-format");var n=s/12+"px";i.css("font-size",n)}else i.removeClass("large-format"),i.css("font-size","");25*a>r?i.removeClass("small-format").addClass("tiny-format"):i.removeClass("tiny-format")})},o=function(){e(".rrssb-buttons").each(function(t){var i=e(this),r=e("li",i),s=r.filter(".small"),a=0,n=0,l=s.eq(0),o=parseFloat(l.attr("data-size"))+55,c=s.length;if(c===r.length){var h=42*c,u=i.width();u>h+o&&(i.removeClass("small-format"),s.eq(0).removeClass("small"),d())}else{r.not(".small").each(function(t){var i=e(this),r=parseFloat(i.attr("data-size"))+55,s=parseFloat(i.width());a+=s,n+=r});var m=a-n;m>o&&(l.removeClass("small"),d())}})},c=function(t){e(".rrssb-buttons").each(function(t){var i=e(this),r=e("li",i);e(r.get().reverse()).each(function(t,i){var s=e(this);if(s.hasClass("small")===!1){var a=parseFloat(s.attr("data-size"))+55,n=parseFloat(s.width());if(a>n){var l=r.not(".small").last();e(l).addClass("small"),d()}}--i||o()})}),t===!0&&u(d)},d=function(){e(".rrssb-buttons").each(function(t){var i,s,a,l,o,c=e(this),d=e("li",c),h=d.filter(".small"),u=h.length;u>0&&u!==d.length?(c.removeClass("small-format"),h.css("width","42px"),a=42*u,i=d.not(".small").length,s=100/i,o=a/i,r.calc===!1?(l=(c.innerWidth()-1)/i-o,l=Math.floor(1e3*l)/1e3,l+="px"):l=r.calc+"("+s+"% - "+o+"px)",d.not(".small").css("width",l)):u===d.length?(c.addClass("small-format"),n()):(c.removeClass("small-format"),n())}),l()},h=function(){e(".rrssb-buttons").each(function(t){e(this).addClass("rrssb-"+(t+1))}),s(),n(),e(".rrssb-buttons li .rrssb-text").each(function(t){var i=e(this),r=i.width();i.closest("li").attr("data-size",r)}),c(!0)},u=function(t){e(".rrssb-buttons li.small").removeClass("small"),c(),t()},m=function(e,r,s,a){var n=t.screenLeft!==i?t.screenLeft:screen.left,l=t.screenTop!==i?t.screenTop:screen.top,o=t.innerWidth?t.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,c=t.innerHeight?t.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,d=o/2-s/2+n,h=c/3-a/3+l,u=t.open(e,r,"scrollbars=yes, width="+s+", height="+a+", top="+h+", left="+d);u&&u.focus&&u.focus()},f=function(){var t={};return function(e,i,r){r||(r="Don't call this twice without a uniqueId"),t[r]&&clearTimeout(t[r]),t[r]=setTimeout(e,i)}}();e(document).ready(function(){try{e(document).on("click",".rrssb-buttons a.popup",{},function(t){var i=e(this);m(i.attr("href"),i.find(".rrssb-text").html(),580,470),t.preventDefault()})}catch(i){}e(t).resize(function(){u(d),f(function(){u(d)},200,"finished resizing")}),h()}),t.rrssbInit=h}(window,jQuery);
/* do not include jquery multiple times */
if (window.jQuery) {
  define('jquery', [], function() {
    return window.jQuery;
  });
}


function do_ecommerce_transactions() {
  /* Checkout steps */
  if (jQuery("body.template-cart").length > 0) {
    setTimeout(function() {
      var category = "Product";
      if (jQuery("body.section-tickets").length > 0) {
        category = "Ticket";
      }
      /* Checkout step 1. */
      products = [];
      cart_items = jQuery("tr.cart_item");
      for (var i = 0; i < cart_items.length; i++) {
        var title = jQuery(cart_items[i]).find('.cart_item_title').text();
        var price = jQuery(cart_items[i]).find('.cart_item_price').text();
        var raw_quantity = jQuery(cart_items[i]).find('.cart_item_count').val();
        var quantity = parseInt(raw_quantity);
        if (quantity > 0) {
          var new_product = {
            "name": title,
            "price": price,
            "quantity": quantity,
            "category": category
          }
          products.push(new_product);
        }
      }

      if (typeof dataLayer != 'undefined') {
        dataLayer.push({
          'event': 'checkout',
          'ecommerce': {
            'checkout': {
              'actionField': {'step': 1},
              'products': products
           }
         },
         'eventCallback': function() {
            // do nothing
         }
        });
      }
    }, 2000);
  };

  /* Checkout step 2. */
  if (jQuery("body.template-checkout").length > 0 && !jQuery("body.template-checkout #cart.final-checkout").length) {
    var category = "Product";
    if (jQuery("body.section-tickets").length > 0) {
      category = "Ticket";
    }

    if (typeof dataLayer != 'undefined') {
      dataLayer.push({
        'event': 'checkout',
        'ecommerce': {
          'checkout': {
            'actionField': {'step': 2},
            'products': []
         }
       },
       'eventCallback': function() {
          // do nothing
       }
      });
    }
  };

  /* Checkout step 3. */
  if (jQuery("body.template-checkout").length > 0 && jQuery("body.template-checkout #cart.final-checkout").length) {
    var category = "Product";
    if (jQuery("body.section-tickets").length > 0) {
      category = "Ticket";
    }

    setTimeout(function() {
      products = [];
      cart_items = jQuery("tr.cart_item");
      for (var i = 0; i < cart_items.length; i++) {
        var title = jQuery(cart_items[i]).find('.cart_item_title').text();
        var price = jQuery(cart_items[i]).find('.cart_item_original_price').text();
        var raw_quantity = jQuery(cart_items[i]).find('.cart_item_count').text();
        var quantity = parseInt(raw_quantity);
        if (quantity > 0) {
          var new_product = {
            "name": title,
            "price": price,
            "quantity": quantity,
            "category": category
          }
          products.push(new_product);
        }
      }

      if (typeof dataLayer != 'undefined') {
        dataLayer.push({
          'event': 'checkout',
          'ecommerce': {
            'checkout': {
              'actionField': {'step': 3},
              'products': products
           }
         },
         'eventCallback': function() {
            // do nothing
         }
        });
      }
    }, 1500); 
  };

  if (jQuery("body.template-checkout #cart.final-checkout").length > 0) {
    jQuery("#form-checkout").submit(function(evt) {
      var category = "Product";
      if (jQuery("body.section-tickets").length > 0) {
        category = "Ticket";
      }

      products = [];
      cart_items = jQuery("tr.cart_item");
      for (var i = 0; i < cart_items.length; i++) {
        var title = jQuery(cart_items[i]).find('.cart_item_title').text();
        var price = jQuery(cart_items[i]).find('.cart_item_original_price').text();
        var raw_quantity = jQuery(cart_items[i]).find('.cart_item_count').text();
        var quantity = parseInt(raw_quantity);
        if (quantity > 0) {
          var new_product = {
            "name": title,
            "price": price,
            "quantity": quantity,
            "category": category
          }
          products.push(new_product);
        }
      };

      if (typeof dataLayer != 'undefined') {
        dataLayer.push({
          'event': 'checkout',
          'ecommerce': {
            'checkout': {
              'actionField': {'step': 4},
              'products': products
           }
         },
         'eventCallback': function() {
            // do nothing
         }
        });
      }
    });
  };
};

var panoramas = [];
var panorama = null;
var interval_time = 55;
var heading_increase = 0.01;
var pov_pitch = 0; /* original pitch */
var acceleration = 0.004;
var heading_high_limit = 300; /* Start point */
var heading_low_limit = 197.98; 
var heading_middle = heading_high_limit - ((heading_high_limit - heading_low_limit) / 2);
var pov_interval = null;

function getPanorama(uid) {
  for (var i = 0; i < panoramas.length; i++) {
    var pano = panoramas[i];
    var curr_uid = pano.uid;
    if (curr_uid == uid) {
      return pano;
    }
  };
  
  return false;
}

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

jQuery(document).ready(function($){
  
  if (isMobile.any()) {
    jQuery("body").addClass("mobile");
  } else {
    jQuery("body").addClass("no-touch");
  }
  
  var isLateralNavAnimating = false;
  //open/close lateral navigation
  jQuery('.cd-nav-trigger, .cd-nav-trigger-menu').on('click', function(event) {
    event.preventDefault();
    if (slickCarousel != undefined) {
      if (slickCarousel.playing) {
        slickCarousel.pauseCurrentSlide();
      }
    }
    if( !isLateralNavAnimating ) {
      if(jQuery(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
      jQuery('body').toggleClass('navigation-is-open');
      jQuery('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
        isLateralNavAnimating = false;
      });
    }
  });

  /* --- ECOMMERCE --- */
  do_ecommerce_transactions();
  /* ----------------- */
});

require([
  'jquery',
], function($, dep1, logger){
  'use strict';

  // initialize only if we are in top frame
  if (window.parent === window) {
    jQuery(document).ready(function() {
      jQuery('body').addClass('teylersmodern-main');
    });
  }
});



