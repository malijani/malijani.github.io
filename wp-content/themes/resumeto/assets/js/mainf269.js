(function ($) {
    $(document).ready(function () {

        var $rc_cm_comments_comment_item = $('.rc-cm-comments-comment-item');
        if ($rc_cm_comments_comment_item.length > 0) {
            $rc_cm_comments_comment_item.each(function () {
                var childrenElement = $(this).next('.rc-cm-comments-children');
                if (childrenElement.length > 0) {
                    childrenElement.addClass('rc-cm-comments-children-style');
                } else {
                    $(this).addClass('rc-cm-comments-comment-item-style');
                }
            });
        }


        if (($('.rc-cm-video-player-button')).length > 0) {
            $('.rc-cm-video-player-button').on('click', function (e) {
                $(this).addClass('d-none');

                var $currentVideo = $(this).siblings('video');

                // Pause all videos
                $('video').not($currentVideo).each(function () {
                    $(this).get(0).pause();
                });

                // Play the current video
                $currentVideo.prop("controls", true);
                $currentVideo.trigger('play');
            });

            $('.rc-cm-video-player video').on('click', function (e) {
                $('.rc-cm-video-player-button').removeClass('d-none');
                $('.rc-cm-video-player video').prop("controls", false);
                $('.rc-cm-video-player-video').trigger('pause');
            });
        }

        // btn click - scroll top
        if ($(".rc-footer-btn-scroll-top").length > 0) {
            $(".rc-footer-btn-scroll-top").on("click", function () {
                $("html").animate({scrollTop: 0}, "slow");
            });
        }


        // Swiper - home page - rc-product-items
        if ($('.rc-product-items-swiper').length > 0) {
            var rc_product_items_swiper = new Swiper(".rc-product-items-swiper", {
                slidesPerView: "auto",
                loop: false,
                spaceBetween: 30,
                breakpoints: {
                    300: {
                        slidesPerView: "auto",
                        spaceBetween: 30
                    },
                    990: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1400: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                }
            });
        }


        // isotope - tabs section work-samples
        if ($('.rc-cm-post-type-filter-grid').length > 0) {
            $('.rc-cm-post-type-filter-btn button').click(function () {
                $('.rc-cm-post-type-filter-btn button').removeClass('active');
                $(this).addClass('active');
            });

            var $rc_cm_post_type_filter = $('.rc-cm-post-type-filter-grid').isotope({
                // options
                itemSelector: '.rc-cm-post-type-filter-grid-item',
                layoutMode: 'masonry',
                originLeft: !astareh_params.is_rtl,
                masonry: {
                    columnWidth: '.rc-cm-post-type-filter-grid-item',
                    gutter: 30,
                }
            });

            $('.rc-cm-post-type-filter-btn button').on("click", function () {
                var widgetId = $(this).attr('data-widget-id');
                var value = $(this).attr('data-name');
                var $widget = $(
                    '.rc-cm-post-type-filter-grid[data-widget-id="' + widgetId + '"]'
                );
                var $filter = $widget.find('.rc-cm-post-type-filter-grid-item');

                $widget.isotope({filter: value});
            });
        }

        // Swiper - Section obtained-certificates
        if ($('.rc-obtained-certificates-swiper').length > 0) {
            var rc_obtained_certificates_sliders = document.querySelectorAll('.rc-obtained-certificates-swiper');

            rc_obtained_certificates_sliders.forEach(function (slider) {
                var rc_obtained_certificates_sliderId = slider.getAttribute('data-slider-id');

                var rc_obtained_certificates_sliderTopButton = document.querySelector(
                    '.rc-image-slider-swiper-next[data-slider-id="' + rc_obtained_certificates_sliderId + '"]'
                );
                var rc_obtained_certificates_sliderDownButton = document.querySelector(
                    '.rc-image-slider-swiper-prev[data-slider-id="' + rc_obtained_certificates_sliderId + '"]'
                );

                new Swiper(slider, {
                    loop: false,
                    slidesPerView: "auto",
                    spaceBetween: 30,
                    navigation: {
                        nextEl: rc_obtained_certificates_sliderTopButton,
                        prevEl: rc_obtained_certificates_sliderDownButton
                    }
                });
            });
        }


        // Swiper - Section colleagues
        if ($('.rc-colleagues-swiper').length > 0) {
            var rc_colleagues_sliders = document.querySelectorAll('.rc-colleagues-swiper');

            rc_colleagues_sliders.forEach(function (slider) {
                var rc_colleagues_sliderId = slider.getAttribute('data-slider-id');

                var rc_colleagues_sliderTopButton = document.querySelector(
                    '.rc-image-slider-swiper-next[data-slider-id="' + rc_colleagues_sliderId + '"]'
                );
                var rc_colleagues_sliderDownButton = document.querySelector(
                    '.rc-image-slider-swiper-prev[data-slider-id="' + rc_colleagues_sliderId + '"]'
                );

                new Swiper(slider, {
                    slidesPerView: "6",
                    loop: false,
                    breakpoints: {
                        300: {
                            slidesPerView: 3,
                            spaceBetween: 5
                        },
                        470: {
                            slidesPerView: 3,
                            spaceBetween: 5
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        990: {
                            slidesPerView: 3,
                            spaceBetween: 15
                        },
                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 15
                        },
                        1400: {
                            slidesPerView: 6,
                            spaceBetween: 15
                        }
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true
                    },
                    navigation: {
                        nextEl: rc_colleagues_sliderTopButton,
                        prevEl: rc_colleagues_sliderDownButton
                    }
                });
            });
        }

        // swiper - comments-swiper
        var $rc_user_comments_swiper = $(".rc-sec-user-comments-swiper");
        if ($rc_user_comments_swiper.length > 0) {
            var comment_sliders = document.querySelectorAll('.rc-sec-user-comments-swiper');
            comment_sliders.forEach(function (slider) {
                let sliderId = slider.getAttribute('data-slider-id');

                let sliderNextButton = document.querySelector(
                    '.rc-user-comments-slider-next[data-slider-id="' + sliderId + '"]'
                );
                let sliderPrevButton = document.querySelector(
                    '.rc-user-comments-slider-prev[data-slider-id="' + sliderId + '"]'
                );


                let rc_user_comments_slider = new Swiper(slider, {
                    spaceBetween: 15,
                    slidesPerView: 1,
                    navigation: {
                        nextEl: sliderNextButton,
                        prevEl: sliderPrevButton
                    }
                });
            });
        }


        // swiper - rc-cm-time-line
        if ($('.rc-cm-time-line').length > 0) {

            var sliders = document.querySelectorAll('.rc-cm-time-line');

            sliders.forEach(function (slider) {
                var sliderId = slider.getAttribute('data-slider-id');

                var sliderTopButton = document.querySelector(
                    '.rc-cm-time-line-btn-control-slider-top[data-slider-id="' + sliderId + '"]'
                );
                var sliderDownButton = document.querySelector(
                    '.rc-cm-time-line-btn-control-slider-dw[data-slider-id="' + sliderId + '"]'
                );

                var time_line_slider = new Swiper(slider, {
                    slidesPerView: "auto",
                    direction: "vertical",
                    loop: false,
                    autoHeight: true,
                    touchReleaseOnEdges: true,
                    navigation: {
                        nextEl: sliderDownButton,
                        prevEl: sliderTopButton
                    }
                });


            });

        }


        // swiper - rc-cm-item-box-2
        if ($('.rc-cm-item-box-two-slider-cnt').length > 0) {

            var sliders = document.querySelectorAll('.rc-cm-item-box-two-slider-cnt');

            sliders.forEach(function (slider) {
                var sliderId = slider.getAttribute('data-slider-id');

                var sliderTopButton = document.querySelector(
                    '.rc-cm-item-box-btn-control-slider-top[data-slider-id="' + sliderId + '"]'
                );
                var sliderDownButton = document.querySelector(
                    '.rc-cm-item-box-btn-control-slider-dw[data-slider-id="' + sliderId + '"]'
                );

                new Swiper(slider, {
                    slidesPerView: "auto",
                    direction: "vertical",
                    loop: false,
                    spaceBetween: 0,
                    autoHeight: true,
                    touchReleaseOnEdges: true,
                    navigation: {
                        nextEl: sliderDownButton,
                        prevEl: sliderTopButton
                    }
                });
            });
        }


        // share btn

        if ($('.rc-cm-title-box-one-share').length > 0) {
            // open share
            $('.rc-cm-title-box-one-share').on('click', function (e) {
                if ($('.rc-cm-title-box-one-share-cnt').hasClass('open')) {
                    $('.rc-cm-title-box-one-share-cnt').removeClass('open');
                } else {
                    $('.rc-cm-title-box-one-share-cnt').addClass('open');
                }
            });

            // click outside share - close
            $(document).on('click', function (e) {
                if ($(e.target).closest(".rc-cm-title-box-one-share-cnt").length === 0) {
                    $('.rc-cm-title-box-one-share-cnt').removeClass('open');
                }
            });

            // copy clipboard
            $('.rc-share-link-page-link-page-now-btn-copy').click(function () {
                var placeholder = $('.rc-share-link-page-link-page-now-link input').data('placeholder');
                console.log(placeholder);
                // ایجاد یک المان textarea برای کپی کردن placeholder در آن
                var textarea = document.createElement('textarea');
                textarea.value = placeholder;

                // افزودن المان textarea به صفحه
                document.body.appendChild(textarea);

                // انتخاب محتوای المان textarea
                textarea.select();
                textarea.setSelectionRange(0, textarea.value.length);

                // کپی کردن محتوای المان textarea به clipboard
                document.execCommand('copy');

                // حذف المان textarea از صفحه
                document.body.removeChild(textarea);

                // نمایش پیام موفقیت در کپی کردن
                alert('لینک با موفقیت کپی شد!');
            });

            // share social
            var pageLink = $('#rc-link-this-page').data('placeholder');

            // تابع برای باز کردن لینک در تب جدید
            function openShareLink(url) {
                window.open(url, '_blank');
            }

            // اضافه کردن رویداد کلیک به هر شبکه اجتماعی
            $('#rc-telegram-link-share').click(function (e) {
                e.preventDefault();
                var telegramLink = 'https://telegram.me/share/url?url=' + encodeURIComponent(pageLink);
                openShareLink(telegramLink);
            });

            $('#rc-twitter-link-share').click(function (e) {
                e.preventDefault();
                var twitterLink = 'https://twitter.com/share?url=' + encodeURIComponent(pageLink);
                openShareLink(twitterLink);
            });

            $('#rc-instagram-link-share').click(function (e) {
                e.preventDefault();
                var instagramLink = 'https://www.instagram.com/';
                openShareLink(instagramLink);
            });

            $('#rc-linkedin-link-share').click(function (e) {
                e.preventDefault();
                var linkedinLink = 'https://www.linkedin.com/shareArticle?url=' + encodeURIComponent(pageLink);
                openShareLink(linkedinLink);
            });

            $('#rc-facebook-link-share').click(function (e) {
                e.preventDefault();
                var facebookLink = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(pageLink);
                openShareLink(facebookLink);
            });


        }


        /*PLUS MINUS INPUT JS*/
        const inputNumber = $("input[type='number'].qty");
        if (inputNumber.length > 0) {
            inputNumber.wrap("<div class=\"quantity-number\"></div>");

// Add minus and plus button before and after number inputs
            $('<button type="button" class="plus-button">+</button></div>').insertAfter("input[type='number']");
            $('<button type="button" class="minus-button">-</button>').insertBefore("input[type='number']");

// Functions on each button
            const minusButton = $(".minus-button");
            const plusButton = $(".plus-button");

            minusButton.each(function (index) {
                $(this).on("click", function (evt) {
                    let inputNumber = $(evt.target).next("input[type='number']");
                    inputNumber[0].stepDown();
                    inputNumber.change();
                })
            });

            plusButton.each(function (index) {
                $(this).on("click", function (evt) {
                    let inputNumber = $(evt.target).prev("input[type='number']");
                    inputNumber[0].stepUp();
                    inputNumber.change();
                })
            });
        }

        /**
         * Woocommerce cart quantity show
         * @version 1.1.0
         * */
        if ($('body.woocommerce-cart').length) {

            $('input[type=hidden].qty').attr('type', 'text').attr('disabled', true).wrap("<div class=\"quantity-number\"></div>");
        }

        /**
         * Single portfolioe
         * @version 1.1.0
         * */

        if ($('body.single-portfolio').length) {
            // swiper - single portfolio

            var rcSinglePortfolioDw = new Swiper(".rcSinglePortfolioDw", {
                slidesPerView: "6",
                spaceBetween: 30,
                breakpoints: {
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    470: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    990: {
                        slidesPerView: 4,
                        spaceBetween: 15
                    },
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 15
                    },
                    1400: {
                        slidesPerView: 6,
                        spaceBetween: 15
                    }
                },
                navigation: false,

                on: {
                    slideChange: function () {
                        $('.swiper-slide').removeClass(
                            'swiper-slide-visible-first swiper-slide-visible-last'
                        );
                        $('.swiper-slide-visible:first').addClass('swiper-slide-visible-first');
                        $('.swiper-slide-visible:last').addClass('swiper-slide-visible-last');
                    },
                    init: function () {
                        var slideCount = $('.rcSinglePortfolioDw .swiper-slide').length;
                        if (slideCount < 6) {
                            $('.rcSinglePortfolioDw').addClass('rc-slider-cnt');
                        }
                    }
                }
            });


            var rcSinglePortfolio = new Swiper(".rcSinglePortfolio", {
                slidesPerView: "auto",
                spaceBetween: 10,
                autoHeight: false,
                calculateHeight: true,
                centeredSlides: true,
                thumbs: {
                    swiper: rcSinglePortfolioDw
                },
                zoom: {
                    maxRatio: 3,
                    minRatio: 1
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                on: {
                    slideChange: function () {
                        $('.swiper-slide').removeClass(
                            'swiper-slide-visible-first swiper-slide-visible-last'
                        );
                        $('.swiper-slide-visible:first').addClass('swiper-slide-visible-first');
                        $('.swiper-slide-visible:last').addClass('swiper-slide-visible-last');
                    }
                }
            });
            $('.swiper-slide').removeClass(
                'swiper-slide-visible-first swiper-slide-visible-last'
            );
            $('.swiper-slide-visible:first').addClass('swiper-slide-visible-first');
            $('.swiper-slide-visible:last').addClass('swiper-slide-visible-last');

            // video player

            $('.rc-cm-video-player-button').on('click', function (e) {
                $(this).addClass('d-none');

                var $currentVideo = $(this).siblings('video');

                // Pause all videos
                $('video')
                    .not($currentVideo)
                    .each(function () {
                        $(this)
                            .get(0)
                            .pause();
                    });

                // Play the current video
                $currentVideo.prop("controls", true);
                $currentVideo.trigger('play');
            });

            $('.rc-cm-video-player video').on('click', function (e) {
                $('.rc-cm-video-player-button').removeClass('d-none');
                $('.rc-cm-video-player video').prop("controls", false);
                $('.rc-cm-video-player-video').trigger('pause');
            });
        }
        /** End single portfolio**/


        /**
         * Single product
         * @version 1.1.0
         * */
        if ($('body.single-product').length) {

            var rcSingleProductDw = new Swiper(".rcSingleProductDw", {
                spaceBetween: 10,
                navigation: false,
                on: {
                    slideChange: function () {
                        $('.swiper-slide').removeClass('swiper-slide-visible-first swiper-slide-visible-last');
                        $('.swiper-slide-visible:first').addClass('swiper-slide-visible-first');
                        $('.swiper-slide-visible:last').addClass('swiper-slide-visible-last');
                    }
                }
            });


            rc_single_product_resize();

            $(window).resize(function () {
                rc_single_product_resize();
            });


            function rc_single_product_resize() {
                switch (rcSingleProductDw.slides.length) {
                    case 1:
                        rcSingleProductDw.params.slidesPerView = 1;
                        break;
                    case 2:
                        rcSingleProductDw.params.slidesPerView = 2;
                        break;
                    case 3:
                        rcSingleProductDw.params.slidesPerView = 3;
                        break;
                    case 4:
                        rcSingleProductDw.params.slidesPerView = 4;
                        break;
                    case 5:
                        rcSingleProductDw.params.slidesPerView = 5;
                        break;
                    case 6:
                        rcSingleProductDw.params.slidesPerView = 5;
                        break;
                    default:
                        // Default value if the number of slides is outside the range of 1 to 6
                        rcSingleProductDw.params.slidesPerView = 5;
                        break;
                }


                var slideCount = $('.rc-cm-slider-1-slider-dw .swiper-slide').length;
                var newWidth = slideCount * 200;


                if (rcSingleProductDw.slides.length >= 6) {
                    // Customize slidesPerView for mobile, tablet, and desktop
                    if (window.innerWidth < 500) {
                        rcSingleProductDw.params.slidesPerView = 1;
                        $('.rc-cm-slider-1-slider-dw').css('width', 120 + 'px');
                    } else if (window.innerWidth < 768) {
                        rcSingleProductDw.params.slidesPerView = 2;
                        rcSingleProductDw.params.spaceBetween = 30;
                        $('.rc-cm-slider-1-slider-dw').css('width', 260 + 'px');
                    } else if (window.innerWidth < 990) {
                        rcSingleProductDw.params.slidesPerView = 2;
                        rcSingleProductDw.params.spaceBetween = 30;
                        $('.rc-cm-slider-1-slider-dw').css('width', 260 + 'px');
                    } else if (window.innerWidth < 1200) {
                        rcSingleProductDw.params.slidesPerView = 3;
                        rcSingleProductDw.params.spaceBetween = 45;
                        $('.rc-cm-slider-1-slider-dw').css('width', 440 + 'px');
                    } else if (window.innerWidth < 1400) {
                        rcSingleProductDw.params.slidesPerView = 4;
                        rcSingleProductDw.params.spaceBetween = 20;
                        $('.rc-cm-slider-1-slider-dw').css('width', 530 + 'px');
                    } else if (window.innerWidth < 1800) {
                        rcSingleProductDw.params.slidesPerView = 5;
                        rcSingleProductDw.params.spaceBetween = 10;
                        $('.rc-cm-slider-1-slider-dw').css('width', 620 + 'px');
                    }
                }

                if (rcSingleProductDw.slides.length == 5) {
                    // Customize slidesPerView for mobile, tablet, and desktop
                    if (window.innerWidth < 500) {
                        rcSingleProductDw.params.slidesPerView = 1;
                        $('.rc-cm-slider-1-slider-dw').css('width', 120 + 'px');
                    } else if (window.innerWidth < 768) {
                        rcSingleProductDw.params.slidesPerView = 2;
                        rcSingleProductDw.params.spaceBetween = 30;
                        $('.rc-cm-slider-1-slider-dw').css('width', 260 + 'px');
                    } else if (window.innerWidth < 990) {
                        rcSingleProductDw.params.slidesPerView = 2;
                        rcSingleProductDw.params.spaceBetween = 30;
                        $('.rc-cm-slider-1-slider-dw').css('width', 260 + 'px');
                    } else if (window.innerWidth < 1200) {
                        rcSingleProductDw.params.slidesPerView = 3;
                        rcSingleProductDw.params.spaceBetween = 45;
                        $('.rc-cm-slider-1-slider-dw').css('width', 440 + 'px');
                    } else if (window.innerWidth < 1400) {
                        rcSingleProductDw.params.slidesPerView = 4;
                        rcSingleProductDw.params.spaceBetween = 20;
                        $('.rc-cm-slider-1-slider-dw').css('width', 530 + 'px');
                    } else if (window.innerWidth < 1800) {
                        rcSingleProductDw.params.slidesPerView = 5;
                        rcSingleProductDw.params.spaceBetween = 10;
                        $('.rc-cm-slider-1-slider-dw').css('width', 620 + 'px');
                    }
                }

                if (rcSingleProductDw.slides.length == 4) {
                    // Customize slidesPerView for mobile, tablet, and desktop
                    if (window.innerWidth < 500) {
                        rcSingleProductDw.params.slidesPerView = 1;
                        $('.rc-cm-slider-1-slider-dw').css('width', 110 + 'px');
                    } else if (window.innerWidth < 768) {
                        rcSingleProductDw.params.slidesPerView = 2;
                        $('.rc-cm-slider-1-slider-dw').css('width', 240 + 'px');
                    } else if (window.innerWidth < 990) {
                        rcSingleProductDw.params.slidesPerView = 2;
                        $('.rc-cm-slider-1-slider-dw').css('width', 240 + 'px');
                    } else if (window.innerWidth < 1200) {
                        rcSingleProductDw.params.slidesPerView = 3;
                        $('.rc-cm-slider-1-slider-dw').css('width', 350 + 'px');
                    } else if (window.innerWidth < 1800) {
                        rcSingleProductDw.params.slidesPerView = 4;
                        $('.rc-cm-slider-1-slider-dw').css('width', 480 + 'px');
                    }
                }


                if (rcSingleProductDw.slides.length == 3) {
                    // Customize slidesPerView for mobile, tablet, and desktop
                    if (window.innerWidth < 500) {
                        rcSingleProductDw.params.slidesPerView = 1;
                        $('.rc-cm-slider-1-slider-dw').css('width', 110 + 'px');
                    } else if (window.innerWidth < 768) {
                        rcSingleProductDw.params.slidesPerView = 2;
                        $('.rc-cm-slider-1-slider-dw').css('width', 240 + 'px');
                    } else if (window.innerWidth < 990) {
                        rcSingleProductDw.params.slidesPerView = 2;
                        $('.rc-cm-slider-1-slider-dw').css('width', 240 + 'px');
                    } else {
                        rcSingleProductDw.params.slidesPerView = 3;
                        $('.rc-cm-slider-1-slider-dw').css('width', 360 + 'px');
                    }
                }
                if (rcSingleProductDw.slides.length == 2) {
                    // Customize slidesPerView for mobile, tablet, and desktop
                    if (window.innerWidth < 500) {
                        rcSingleProductDw.params.slidesPerView = 1;
                        $('.rc-cm-slider-1-slider-dw').css('width', 110 + 'px');
                    } else if (window.innerWidth < 1800) {
                        rcSingleProductDw.params.slidesPerView = 2;
                        $('.rc-cm-slider-1-slider-dw').css('width', 240 + 'px');
                    }
                }
                if (rcSingleProductDw.slides.length == 1) {
                    // Customize slidesPerView for mobile, tablet, and desktop
                    if (window.innerWidth < 500) {
                        rcSingleProductDw.params.slidesPerView = 1;
                        $('.rc-cm-slider-1-slider-dw').css('width', 100 + 'px');
                    } else if (window.innerWidth < 768) {
                        rcSingleProductDw.params.slidesPerView = 1;
                        $('.rc-cm-slider-1-slider-dw').css('width', 100 + 'px');
                    } else if (window.innerWidth < 1024) {
                        rcSingleProductDw.params.slidesPerView = 1;
                        $('.rc-cm-slider-1-slider-dw').css('width', 100 + 'px');
                    } else if (window.innerWidth < 1800) {
                        rcSingleProductDw.params.slidesPerView = 1;
                        $('.rc-cm-slider-1-slider-dw').css('width', 100 + 'px');
                    }
                }
            }


            var rcSingleProduct = new Swiper(".rcSingleProduct", {
                zoom: true,
                autoHeight: true,
                spaceBetween: 10,
                thumbs: {
                    swiper: rcSingleProductDw
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                on: {
                    slideChange: function () {
                        $('.swiper-slide').removeClass('swiper-slide-visible-first swiper-slide-visible-last');
                        $('.swiper-slide-visible:first').addClass('swiper-slide-visible-first');
                        $('.swiper-slide-visible:last').addClass('swiper-slide-visible-last');
                    }
                }
            });
            $('.swiper-slide').removeClass('swiper-slide-visible-first swiper-slide-visible-last');
            $('.swiper-slide-visible:first').addClass('swiper-slide-visible-first');
            $('.swiper-slide-visible:last').addClass('swiper-slide-visible-last');


            // video player

            $('.rc-cm-video-player-button').on('click', function (e) {
                $(this).addClass('d-none');

                var $currentVideo = $(this).siblings('video');

                // Pause all videos
                $('video').not($currentVideo).each(function () {
                    $(this).get(0).pause();
                });

                // Play the current video
                $currentVideo.prop("controls", true);
                $currentVideo.trigger('play');
            });

            $('.rc-cm-video-player video').on('click', function (e) {
                $('.rc-cm-video-player-button').removeClass('d-none');
                $('.rc-cm-video-player video').prop("controls", false);
                $('.rc-cm-video-player-video').trigger('pause');
            });


            // tab product content

            $(".rc-single-product-tab-btn").click(function () {
                // Get the value of the data-tab attribute from the clicked button
                var tab = $(this).data("tab");

                // Hide all tab contents
                $(".rc-single-product-desc-feature-dw .rc-single-product-tab-content").removeClass("rc-show-tab");
                $(".rc-single-product-desc-feature-dw .rc-single-product-tab-content").css('height', '0');

                // Show the tab content corresponding to the clicked button using the data-tab attribute
                $(".rc-single-product-desc-feature-dw .rc-single-product-tab-content[data-tab='" + tab + "']").addClass("rc-show-tab");
                $(".rc-single-product-desc-feature-dw .rc-single-product-tab-content[data-tab='" + tab + "']").css('height', 'auto');

                // Add the 'active' clasns to the clicked button and remove it from siblings
                $(this).addClass("active").siblings().removeClass("active");
            });

            // Activate the first tab button
            $(".rc-single-product-tab-btn:first").addClass("active");

            // Show the content of the first tab
            $(".rc-single-product-desc-feature-dw .rc-single-product-tab-content:first").addClass("rc-show-tab");


        }
        /** End single product **/


        /**
         * Product archive
         * @version 1.1.0
         * */
        if ($('body.post-type-archive-product').length) {

            // ajax load more
            let load_more_button = $('.more-work-samples');
            var post_type_grid = $('.rc-cm-post-type-filter-grid');
            // isotope - tabs section work-samples
            let post_type_filter_button = $('.rc-cm-post-type-filter-btn button');
            // post object mustache template
            var post_type_mustache_template = $('#portfolio-template-js').html();


            // ############## ISOTOPE
            post_type_filter_button.click(function () {
                $('.rc-cm-post-type-filter-btn button').removeClass('active');
                $(this).addClass('active');
            });

            var $rc_cm_post_type_filter = post_type_grid.isotope({
                // options
                itemSelector: '.rc-cm-post-type-filter-grid-item',
                layoutMode: 'masonry',
                originLeft: !astareh_params.is_rtl,
                transitionDuration: '0.7s',
                masonry: {
                    columnWidth: '.rc-cm-post-type-filter-grid-item',
                    gutter: 30,
                }
            });

            post_type_filter_button.on("click", function () {
                var value = $(this).attr('data-name');
                $rc_cm_post_type_filter.isotope({filter: value})

            });


            // ############### LOGIC

            /**
             * Function to create custom portfolio template and render it in to filter
             * @param post
             * */
            function render_portfolio_post_box(post) {
                //Render post object template
                let output = $(Mustache.render(post_type_mustache_template, post));
                //@global $rc_cm_post_type_filter
                $rc_cm_post_type_filter.append(output).isotope('appended', output);
            }

            // ############## AJAX
            load_more_button.on('click', function (e) {
                e.preventDefault();
                var ajax_form_action = jQuery(this).attr('data-action');
                var ajax_form_nonce = jQuery(this).attr("data-nonce")
                var ajax_form_page = parseInt(jQuery(this).attr('data-page'));
                var ajax_posts_per_page = parseInt(jQuery(this).attr('data-posts-per-page'));
                var ajax_form_offset = parseInt(jQuery(this).attr('data-offset'));

                jQuery.ajax({
                    type: "post",
                    dataType: "json",
                    url: astareh_params.ajaxurl,
                    data: {
                        "action": ajax_form_action,
                        "nonce": ajax_form_nonce,
                        "page": ajax_form_page,
                        "offset": ajax_form_offset,
                        "dataType": 'json'
                    },
                    success: function (response) {
                        if (response.type !== "success") {
                            console.log('Error Handle for archive-portfolio');
                        }
                        load_more_button.attr('data-page', ajax_form_page + 1);
                        load_more_button.attr('data-offset', ajax_form_offset + ajax_posts_per_page);
                        /**
                         * Uses portfolio_posts object
                         * */
                        let posts = response.portfolio_posts;
                        if (Object.keys(posts).length === 0) {
                            load_more_button.addClass('d-none');
                            return;
                        }

                        $.each(posts, function (index, post) {
                            render_portfolio_post_box(post);
                        });
                        let active_filter_btn = $('.rc-cm-post-type-filter-tab-btns .active');
                        active_filter_btn.trigger('click');
                    },
                    error: function (e) {
                        console.log(e);
                    }

                })

            });


            if ($('.rc-cm-post-type-filter-tabs-cnt').length > 0) {
                rc_checkWidth_post_type_filter_btn();
                $(window).resize(function () {
                    rc_checkWidth_post_type_filter_btn();
                });
            }

            function rc_checkWidth_post_type_filter_btn() {
                var container = $('.rc-cm-post-type-filter-tabs-cnt');
                var btn = $('.rc-cm-post-type-filter-btn');
                console.log(container[0].scrollWidth);
                console.log(container.outerWidth());

                if (container[0].scrollWidth > container.outerWidth()) {
                    btn.removeClass('justify-content-md-center');
                } else {
                    btn.addClass('justify-content-md-center');
                }
            }
        }

        /** End product archive **/


        /**
         * Blog
         * @version 1.1.0
         * */

        if ($('body.blog').length) {
            var load_more_button = $('.more-blog-posts-BACK');
            var post_type_grid = $('.rc-cm-post-type-filter-grid-BACK');
            // isotope - tabs section work-samples
            let post_filter_button = $('.blog-archive-tabs-cnt .rc-isotope-filter-btn button-BACK')
            // post object mustache template
            var post_mustache_template = $('#post-template-js-BACK').html();


            post_filter_button.click(function () {
                $('.blog-archive-tabs-cnt .rc-isotope-filter-btn button').removeClass('active');
                $(this).addClass('active');
            });

            var $rc_blog_archive_filter = $('.rc-blog-archive-filter-grid').isotope({
                // options
                itemSelector: '.rc-blog-archive-filter-grid-item',
                layoutMode: 'masonry',
                originLeft: !astareh_params.is_rtl,
            });

            post_filter_button.on("click", function () {
                var value = $(this).attr('data-name');
                $rc_blog_archive_filter.isotope({filter: value})

            });

            // ############### LOGIC

            /**
             * Function to create custom post template and render it in to filter
             * @param post
             * */
            function render_portfolio_post_box(post) {
                //Render post object template
                let output = $(Mustache.render(post_mustache_template, post));
                //@global $rc_cm_post_type_filter
                $rc_blog_archive_filter.append(output).isotope('appended', output);
            }


            // ############## AJAX
            load_more_button.on('click', function (e) {
                e.preventDefault();
                var ajax_form_action = jQuery(this).attr('data-action');
                var ajax_form_nonce = jQuery(this).attr("data-nonce")
                var ajax_form_page = parseInt(jQuery(this).attr('data-page'));
                var ajax_posts_per_page = parseInt(jQuery(this).attr('data-posts-per-page'));
                var ajax_form_offset = parseInt(jQuery(this).attr('data-offset'));

                jQuery.ajax({
                    type: "post",
                    dataType: "json",
                    url: astareh_params.ajaxurl,
                    data: {
                        "action": ajax_form_action,
                        "nonce": ajax_form_nonce,
                        "page": ajax_form_page,
                        "offset": ajax_form_offset,
                        "dataType": 'json'
                    },
                    success: function (response) {
                        if (response.type !== "success") {
                            console.log('Error Handle for archive-posts');
                        }
                        load_more_button.attr('data-page', ajax_form_page + 1);
                        load_more_button.attr('data-offset', ajax_form_offset + ajax_posts_per_page);
                        /**
                         * Uses portfolio_posts object
                         * */
                        let posts = response.posts;
                        if (Object.keys(posts).length === 0) {
                            load_more_button.addClass('d-none');
                            return;
                        }

                        $.each(posts, function (index, post) {
                            render_portfolio_post_box(post);
                        });
                        let active_filter_btn = $('.rc-cm-post-type-filter-tab-btns .active');
                        active_filter_btn.trigger('click');
                    },
                    error: function (e) {
                        console.log(e);
                    }

                })

            });


            if ($('.blog-archive-tabs-cnt').length > 0) {
                rc_checkWidth_blog_post_type_filter_btn();
                $(window).resize(function () {
                    rc_checkWidth_blog_post_type_filter_btn();
                });
            }

            function rc_checkWidth_blog_post_type_filter_btn() {
                var container1 = $('.blog-archive-tabs-cnt');
                var btn1 = $('.rc-isotope-filter-btn');


                if (container1[0].scrollWidth > container1.outerWidth()) {
                    container1.removeClass('justify-content-md-center');
                } else {
                    container1.addClass('justify-content-md-center');
                }
            }
        }
        /** End blog **/

    });
    /*END DOCUMENT READY*/


    $(document).ajaxComplete(function () {
        /*PLUS MINUS INPUT JS*/
        const inputNumber = $("input[type='number'].qty");
        if (inputNumber.length > 0) {
            inputNumber.wrap("<div class=\"quantity-number\"></div>");

            // Add minus and plus button before and after number inputs
            $('<button type="button" class="plus-button">+</button></div>').insertAfter("input[type='number']");
            $('<button type="button" class="minus-button">-</button>').insertBefore("input[type='number']");

            // Functions on each button
            const minusButton = $(".minus-button");
            const plusButton = $(".plus-button");

            minusButton.each(function (index) {
                $(this).on("click", function (evt) {
                    let inputNumber = $(evt.target).next("input[type='number']");
                    inputNumber[0].stepDown();
                    inputNumber.change();
                })
            });

            plusButton.each(function (index) {
                $(this).on("click", function (evt) {
                    let inputNumber = $(evt.target).prev("input[type='number']");
                    inputNumber[0].stepUp();
                    inputNumber.change();
                })
            });
        }

        /**
         * Woocommerce cart quantity show
         * @version 1.1.0
         * */
        if ($('body.woocommerce-cart').length) {

            $('input[type=hidden].qty').attr('type', 'text').attr('disabled', true).wrap("<div class=\"quantity-number\"></div>");
        }
    });


})(jQuery);