/*
 * jQuery Messenger Plugin
 *
 * Copyright 2013, Teena Thomas
 * 
 */

(function( $ ){

   $.fn.displayMessage = function(options) {

        // Default configuration properties.
         var defaults = {
                  message       : 'Error message',
                  background    : '#111111',
                  color         : '#FFFFFF',
                  speed         : 'fast',
                  type          : 'custom',
                  position      : 'relative', // relative, absolute, fixed
                  autohide      : false
         }
         

        var options = $.extend( defaults, options );        
        $(this).slideUp('fast');
        $(this).removeClass().empty();
        return this.each(function() {

          var sticky = (options.sticky == false) ? 'relative' : 'absolute';
          $(this).addClass('messenger-'+options.type+'_bar').css('position',options.position).css('background-color',options.background);
          $(this).append('<div><span class="messenger-'+options.type+'_text"></span></div>').css('color',options.color);
          $(this).find('span').html(options.message);

          $(this).slideDown(options.speed ,function(){

             var parent = ($(this).attr('id')) ? "#"+$(this).attr('id') : "."+$(this).attr('class');
             var close_button = ($(this).find('a').attr('id')) ? "#"+$(this).find('a').attr('id') : "."+$(this).find('a').attr('class');

             if(options.autohide == true)
             {                 
                $(this).delay(3000).slideUp('slow');
                $('.messenger-custom_close').hide();               
             }

             $(parent+">div>"+close_button).bind("click", function (event) {
              event.preventDefault();
                $(parent+">div>"+close_button).animate({"opacity": "hide"}, function(){
                    $(parent+">div>span").fadeOut("slow").html("");
                    $(parent+">div>"+close_button).parent().parent().slideUp(options.speed);
                });               
                 
             });

      });

   });

   };
})( jQuery );
