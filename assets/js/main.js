        ;
        (function($) {



          $.BcMain = {

            init: function() {

              $(document).ready(function(e) {


                $('#relate_link').owlCarousel({
                  stagePadding: 50,
                  loop: true,
                  margin: 10,
                  dots: false,
                  nav: true,
                  responsive: {
                    0: {
                      items: 2
                    },
                    600: {
                      items: 4
                    },
                    1000: {
                      items: 6
                    }
                  }
                });
                $('#banner').owlCarousel({
                  loop: true,
                  dots: true,
                  items: 1,
                  margin: 10,
                  autoHeight: true,
                  
                });

                // Card Add Points
                $(".btn-add-point").on('click', function(addIcon) {
                  addIcon.preventDefault();
                  var _this = $(this);
                  _this.toggleClass('active');
                });

              });

              $(window).on('load', function(e) {


              });

            },

            components: {



            },

            /**
             *
             *
             * @var
             */
            helpers: {

              Math: {



              },



              /**
               * Detect Internet Explorer (IE)
               *
               * @return version of IE or false, if browser is not Internet Explorer
               */

              detectIE: function() {

                var ua = window.navigator.userAgent;

                var msie = ua.indexOf('MSIE ');
                if (msie > 0) {
                  // IE 10 or older => return version number
                  var ieV = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
                  document.querySelector('body').className += 'ie ie' + ieV + ' ';
                }

                var trident = ua.indexOf('Trident/');
                if (trident > 0) {
                  // IE 11 => return version number
                  var rv = ua.indexOf('rv:');
                  var ieV = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
                  document.querySelector('body').className += 'ie ie' + ieV + ' ';
                }

                var edge = ua.indexOf('Edge/');
                if (edge > 0) {
                  // IE 12 (aka Edge) => return version number
                  var ieV = parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
                  document.querySelector('body').className += 'ie ie' + ieV + ' ';
                }

                // other browser
                return false;

              },


              /**
               * Bootstrap navigation options
               *
               */
              bootstrapNavOptions: {
                init: function() {
                  this.mobileHideOnScroll();
                },

                mobileHideOnScroll: function() {
                  var $collection = $('.navbar');
                  if (!$collection.length) return;

                  var $w = $(window),
                    breakpointsMap = {
                      'sm': 576,
                      'md': 768,
                      'lg': 992,
                      'xl': 1200
                    };

                  $('body').on('click.HSMobileHideOnScroll', '.navbar-toggler', function(e) {
                    var $navbar = $(this).closest('.navbar');

                    if ($navbar.length) {
                      $navbar.data('mobile-menscroll-position', $w.scrollTop());
                    }
                    e.preventDefault();
                  });

                  $w.on('scroll.HSMobileHideOnScroll', function(e) {
                    $collection.each(function(i, el) {
                      var $this = $(el),
                        $toggler, $nav, offset, $hamburgers, breakpoint;
                      if ($this.hasClass('navbar-expand-xl')) breakpoint = breakpointsMap['xl'];
                      else if ($this.hasClass('navbar-expand-lg')) breakpoint = breakpointsMap['lg'];
                      else if ($this.hasClass('navbar-expand-md')) breakpoint = breakpointsMap['md'];
                      else if ($this.hasClass('navbar-expand-xs')) breakpoint = breakpointsMap['xs'];

                      if ($w.width() > breakpoint) return;

                      $toggler = $this.find('.navbar-toggler');
                      $nav = $this.find('.navbar-collapse');

                      if (!$nav.data('mobile-scroll-hide')) return;

                      if ($nav.length) {
                        offset = $this.data('mobile-menscroll-position');

                        if (Math.abs($w.scrollTop() - offset) > 40 && $nav.hasClass('show')) {
                          $toggler.trigger('click');
                          $hamburgers = $toggler.find('.is-active');
                          if ($hamburgers.length) {
                            $hamburgers.removeClass('is-active');
                          }
                        }
                      }
                    });
                  });
                }
              }

            },

            /**
             *
             *
             * @var
             */
            settings: {
              rtl: false
            }

          };

          $.BcMain.init();

        })(jQuery);