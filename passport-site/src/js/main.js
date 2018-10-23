;
(function() {

    'use strict';



    // iPad and iPod detection  
    var isiPad = function() {
        return (navigator.platform.indexOf("iPad") != -1);
    };

    var isiPhone = function() {
        return (
            (navigator.platform.indexOf("iPhone") != -1) ||
            (navigator.platform.indexOf("iPod") != -1)
        );
    };

    // Parallax
    var parallax = function() {
        $(window).stellar();
    };



    // Burger Menu
    var burgerMenu = function() {

        $('body').on('click', '.js-fh5co-nav-toggle', function(event) {

            event.preventDefault();

            if ($('#navbar').is(':visible')) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }



        });

    };


    var goToTop = function() {

        $('.js-gotop').on('click', function(event) {

            event.preventDefault();

            $('html, body').animate({
                scrollTop: $('html').offset().top
            }, 500);

            return false;
        });

    };


    // Page Nav
    var clickMenu = function() {

        $('#navbar a:not([class="external"])').click(function(event) {
            var section = $(this).data('nav-section'),
                navbar = $('#navbar');

            if ($('[data-section="' + section + '"]').length) {
                $('html, body').animate({
                    scrollTop: $('[data-section="' + section + '"]').offset().top
                }, 500);
            }

            if (navbar.is(':visible')) {
                navbar.removeClass('in');
                navbar.attr('aria-expanded', 'false');
                $('.js-fh5co-nav-toggle').removeClass('active');
            }

            event.preventDefault();
            return false;
        });


    };

    // Reflect scrolling in navigation
    var navActive = function(section) {

        var $el = $('#navbar > ul');
        $el.find('li').removeClass('active');
        $el.each(function() {
            $(this).find('a[data-nav-section="' + section + '"]').closest('li').addClass('active');
        });

    };

    var navigationSection = function() {

        var $section = $('section[data-section]');

        $section.waypoint(function(direction) {

            if (direction === 'down') {
                navActive($(this.element).data('section'));
            }
        }, {
            offset: '150px'
        });

        $section.waypoint(function(direction) {
            if (direction === 'up') {
                navActive($(this.element).data('section'));
            }
        }, {
            offset: function() { return -$(this.element).height() + 155; }
        });

    };





    // Window Scroll
    var windowScroll = function() {
        var lastScrollTop = 0;

        $(window).scroll(function(event) {

            var header = $('#fh5co-header'),
                scrlTop = $(this).scrollTop();

            if (scrlTop > 500 && scrlTop <= 2000) {
                header.addClass('navbar-fixed-top fh5co-animated slideInDown');
            } else if (scrlTop <= 500) {
                if (header.hasClass('navbar-fixed-top')) {
                    header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
                    setTimeout(function() {
                        header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
                    }, 100);
                }
            }

        });
    };



    // Animations
    // Home

    var homeAnimate = function() {
        if ($('#fh5co-home').length > 0) {

            $('#fh5co-home').waypoint(function(direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {


                    setTimeout(function() {
                        $('#fh5co-home .to-animate').each(function(k) {
                            var el = $(this);

                            setTimeout(function() {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);


                    $(this.element).addClass('animated');

                }
            }, { offset: '80%' });

        }
    };


    var introAnimate = function() {
        if ($('#fh5co-intro').length > 0) {

            $('#fh5co-intro').waypoint(function(direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {


                    setTimeout(function() {
                        $('#fh5co-intro .to-animate').each(function(k) {
                            var el = $(this);

                            setTimeout(function() {
                                el.addClass('fadeInRight animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 1000);


                    $(this.element).addClass('animated');

                }
            }, { offset: '80%' });

        }
    };

    var workAnimate = function() {
        if ($('#fh5co-work').length > 0) {

            $('#fh5co-work').waypoint(function(direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {


                    setTimeout(function() {
                        $('#fh5co-work .to-animate').each(function(k) {
                            var el = $(this);

                            setTimeout(function() {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);


                    $(this.element).addClass('animated');

                }
            }, { offset: '80%' });

        }
    };


    var testimonialAnimate = function() {
        var testimonial = $('#fh5co-testimonials');
        if (testimonial.length > 0) {

            testimonial.waypoint(function(direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {

                    var sec = testimonial.find('.to-animate').length,
                        sec = parseInt((sec * 200) - 400);

                    setTimeout(function() {
                        testimonial.find('.to-animate').each(function(k) {
                            var el = $(this);

                            setTimeout(function() {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);

                    setTimeout(function() {
                        testimonial.find('.to-animate-2').each(function(k) {
                            var el = $(this);

                            setTimeout(function() {
                                el.addClass('fadeInDown animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, sec);


                    $(this.element).addClass('animated');

                }
            }, { offset: '80%' });

        }
    };

    var pricingAnimate = function() {
        var pricing = $('#fh5co-pricing');
        if (pricing.length > 0) {

            pricing.waypoint(function(direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {

                    var sec = pricing.find('.to-animate').length,
                        sec = parseInt((sec * 200) - 400);

                    setTimeout(function() {
                        pricing.find('.to-animate').each(function(k) {
                            var el = $(this);

                            setTimeout(function() {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);

                    setTimeout(function() {
                        pricing.find('.to-animate-2').each(function(k) {
                            var el = $(this);

                            setTimeout(function() {
                                el.addClass('fadeInUp animated');
                            }, k * 800, 'easeInOutExpo');

                        });
                    }, sec);


                    $(this.element).addClass('animated');

                }
            }, { offset: '80%' });

        }
    };

    var benefitsAnimate = function() {
        var benefits = $('#fh5co-benefits');
        if (benefits.length > 0) {

            benefits.waypoint(function(direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {

                    var sec = benefits.find('.to-animate').length,
                        sec = parseInt((sec * 200) + 400);

                    setTimeout(function() {
                        benefits.find('.to-animate').each(function(k) {
                            var el = $(this);

                            setTimeout(function() {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);

                    setTimeout(function() {
                        benefits.find('.to-animate-2').each(function(k) {
                            var el = $(this);

                            setTimeout(function() {
                                el.addClass('bounceIn animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, sec);



                    $(this.element).addClass('animated');

                }
            }, { offset: '80%' });

        }
    };

    var aboutAnimate = function() {
        var about = $('#fh5co-about');
        if (about.length > 0) {

            about.waypoint(function(direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {


                    setTimeout(function() {
                        about.find('.to-animate').each(function(k) {
                            var el = $(this);

                            setTimeout(function() {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);



                    $(this.element).addClass('animated');

                }
            }, { offset: '80%' });

        }
    };

    var countersAnimate = function() {
        var counters = $('#fh5co-counters');
        if (counters.length > 0) {

            counters.waypoint(function(direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {

                    var sec = counters.find('.to-animate').length,
                        sec = parseInt((sec * 200) + 400);

                    setTimeout(function() {
                        counters.find('.to-animate').each(function(k) {
                            var el = $(this);

                            setTimeout(function() {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);

                    setTimeout(function() {
                        counters.find('.to-animate-2').each(function(k) {
                            var el = $(this);

                            setTimeout(function() {
                                el.addClass('bounceIn animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, sec);





                    $(this.element).addClass('animated');

                }
            }, { offset: '80%' });

        }
    };


    var contactAnimate = function() {
        var contact = $('#fh5co-contact');
        if (contact.length > 0) {

            contact.waypoint(function(direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {

                    setTimeout(function() {
                        contact.find('.to-animate').each(function(k) {
                            var el = $(this);

                            setTimeout(function() {
                                el.addClass('fadeInUp animated');
                            }, k * 200, 'easeInOutExpo');

                        });
                    }, 200);

                    $(this.element).addClass('animated');

                }
            }, { offset: '80%' });

        }
    };

    // Document on load.
    $(function() {

        parallax();

        burgerMenu();

        clickMenu();

        windowScroll();

        navigationSection();

        goToTop();


        // Animations
        homeAnimate();
        introAnimate();
        workAnimate();
        testimonialAnimate();
        benefitsAnimate();
        aboutAnimate();
        countersAnimate();
        contactAnimate();
        pricingAnimate();
    });

    // regional pricing dropdown
    var currencies = {
        USD: {
            listPrice: '$3,500',
            promoPrice: '$2,500'
        },
        EUR: {
            listPrice: '€3,500',
            promoPrice: '€2,500'
        },
        AUD: {
            listPrice: 'A$4,700',
            promoPrice: 'A$3,300'
        },
        JPY: {
            listPrice: '¥438,000',
            promoPrice: '¥313,000'
        },
        CNY: {
            listPrice: '￥23,000',
            promoPrice: '￥16,500'
        },
        INR: {
            listPrice: '₹234,000',
            promoPrice: '₹167,000'
        },
        GBP: {
            listPrice: '£2,800',
            promoPrice: '£2,000'
        },
        SGD: {
            listPrice: 'S$4,700',
            promoPrice: 'S$3,300'
        },
        ALT_USD: {
            listPrice: '$3,500 USD',
            promoPrice: '$2,500 USD'
        }
    };

    var updateCurrencies = function(currencyCode) {
        $("#bannerListPrice").html(currencies[currencyCode].listPrice);
        $("#bannerPromoPrice").html(currencies[currencyCode].promoPrice);

        $("#heroListPrice").html(currencies[currencyCode].listPrice);
        $("#heroPromoPrice").html(currencies[currencyCode].promoPrice);

        $("#footerListPrice").html(currencies[currencyCode].listPrice);
        $("#footerPromoPrice").html(currencies[currencyCode].promoPrice);
    }

    var learnMore = function() {
	    $("a[href='#learn-more']").click(function() {
	        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
	        return false;
	    });
    }

    var regionSelector = function() {
	    $('#localization').on("change", function() {
	        var currencyCode = $(this).find("option:selected").attr('currencyCode');
	        updateCurrencies(currencyCode);
	    });
    }

    var autodetectRegion = function() {
	    // regional pricing
	    $.getJSON('https://ipapi.co/json', function(data) {
	        var option = $("#localization option[value='" + data.country + "']");
	        option.attr('selected', 'selected');

	        var currencyCode = option.attr('currencyCode');

	        updateCurrencies(currencyCode);
	    });
    }

    // Document on load.
    $(function() {
    	learnMore();
    	regionSelector();
    	autodetectRegion();
	})

}());