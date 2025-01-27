! function(e) {
    "use strict";
    e("body").on("contextmenu", function(e) {
        return e.preventDefault(), e.stopPropagation(), !1
    }), e(document).on("keydown", function(e) {
        return !(e.ctrlKey && 85 == e.keyCode || e.ctrlKey && e.shiftKey && 73 == e.keyCode || e.ctrlKey && e.shiftKey && 75 == e.keyCode || e.metaKey && e.shiftKey && 91 == e.keyCode)
    }), e(window).on("load", function() {
        e("#navOnePage").onePageNav({
            scrollOffset: 80,
            end: function() {
                e(".meanclose").trigger("click")
            }
        })
    });
    var a = document.getElementById("audio_player");
    null !== a && a.addEventListener("timeupdate", function() {
            var t = a.currentTime,
                n = a.duration,
                i = Math.floor(t / n * 100);
            e("#audio_player").parents(".audio-player-wrap").find(".progress .progress-bar").attr("aria-valuenow", i), e("#audio_player").parents(".audio-player-wrap").find(".progress .progress-bar").css("width", i + "%"), e("#audio_player").parents(".audio-player-wrap").find(".current-duration").text(Math.floor(t)), e("#audio_player").parents(".audio-player-wrap").find(".total-duration").text(Math.floor(a.duration))
        }), e("#audioplayer").on("click", ".play", function() {
            var t = e(this);
            a.paused ? (a.play(), t.addClass("btn-pause"), t.removeClass("btn-play")) : (t.addClass("btn-play"), t.removeClass("btn-pause"), a.pause())
        }), e("#volume_control").on("change", "#rngVolume", function() {
            a.volume = e(this).val()
        }),
        function() {
            var a = e("#header-one"),
                t = e(window).width(),
                n = a.parents("#wrapper").find("#fixed-type-slider"),
                i = a.outerHeight();
            t < 992 && (i = e("body > .mean-bar").outerHeight(), e("#downFromTop").css("margin-top", i + "px"));
            n.css("margin-top", i + "px")
        }();
    var t, n, i = document.getElementById("price-range-filter");
    if (i) {
        noUiSlider.create(i, {
            start: [20, 80],
            connect: !0,
            range: {
                min: 0,
                max: 100
            },
            format: wNumb({
                decimals: 0
            })
        });
        var o = document.getElementById("price-range-min"),
            s = document.getElementById("price-range-max");
        i.noUiSlider.on("update", function(e, a) {
            a ? s.innerHTML = "$" + e[a] : o.innerHTML = "$" + e[a]
        })
    }
    e(document).on("mouseover", ".speaker-img-tooltip", function() {
        var a = e(this);
        t = '<div class="eventalk-tooltip"><div class="eventalk-tooltip-content">' + a.attr("data-tips") + '</div><div class="eventalk-tooltip-bottom"></div></div>', e("body").append(t);
        var t = e("body > .eventalk-tooltip"),
            n = t.outerHeight(),
            i = t.find(".eventalk-tooltip-bottom").outerHeight(),
            o = t.outerWidth(),
            s = a.outerWidth(),
            r = a.offset().top - (n + i),
            l = a.offset().left;
        (t.css({
            top: r + "px",
            left: l + "px",
            opacity: 1
        }).show(), o <= s) ? (l += (s - o) / 2, t.css("left", l + "px")) : ((l -= (o - s) / 2) < 0 && (l = 0), t.css("left", l + "px"))
    }).on("mouseout", ".speaker-img-tooltip", function() {
        e("body > .eventalk-tooltip").remove()
    }), e("#current_date").length && (document.getElementById("current_date").innerHTML = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][(t = new Date).getDay()] + " , " + ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][t.getMonth()] + " " + t.getDate() + " , " + t.getFullYear()), (-1 != (n = navigator.userAgent.toLowerCase()).indexOf("msie") || -1 != n.indexOf("trident")) && e("body").addClass("ie");
    var r = e(".popup-youtube");

    function l() {
        var a = e("body").find(">#wrapper"),
            t = e("#side-menu-trigger a.menu-times");
        a.removeClass("open").find(".offcanvas-mask").remove(), e("#offcanvas-body-wrapper").attr("style", ""), t.prev(".menu-bar").removeClass("open"), t.addClass("close")
    }
    r.length && r.magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1
    }), e(".zoom-gallery").length && e(".zoom-gallery").each(function() {
        e(this).magnificPopup({
            delegate: "a.ne-zoom",
            type: "image",
            gallery: {
                enabled: !0
            }
        })
    }), e(document).on("click", "#top-search-form .search-button", function(a) {
        return a.preventDefault(), e(this).prev("input.search-input").animate({
            width: ["toggle", "swing"],
            height: ["toggle", "swing"],
            opacity: "toggle"
        }, 500, "linear"), !1
    }), e(".loadmore-four-item").on("click", function(a) {
        a.preventDefault();
        var t = e(this),
            n = t.parents(".menu-list-wrapper").find(".menu-list").find(".menu-item.hidden").slice(0, 4);
        return n.length ? (n.animate({
            opacity: 0
        }), n.promise().done(function() {
            n.removeClass("hidden"), n.show().animate({
                opacity: 1
            }, 1e3)
        })) : t.text("No more item to display"), !1
    }), e(".loadmore-one-item").on("click", function(a) {
        a.preventDefault();
        var t = e(this),
            n = t.parents(".menu-list-wrapper").find(".menu-list").find(".menu-item.hidden").slice(0, 1);
        return n.length ? (n.animate({
            opacity: 0
        }), n.promise().done(function() {
            n.removeClass("hidden"), n.show().animate({
                opacity: 1
            }, 1e3)
        })) : t.text("No more item to display"), !1
    }), e(".loadmore-three-item").on("click", function(a) {
        a.preventDefault();
        var t = e(this),
            n = t.parents(".menu-list-wrapper").find(".menu-list").find(".menu-item.hidden").slice(0, 3);
        return n.length ? (n.animate({
            opacity: 0
        }), n.promise().done(function() {
            n.removeClass("hidden"), n.show().animate({
                opacity: 1
            }, 1e3)
        })) : t.text("No more item to display"), !1
    }), e("nav#dropdown").meanmenu({
        siteLogo: "<div class='mobile-menu-nav-back'><a href='index.html'><img src='img/logo.png'/></a></div>"
    }), e(".ex1").length && e(".ex1").zoom(), e.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i><p>TOP</p>',
        easingType: "linear",
        scrollSpeed: 900,
        animation: "fade"
    }), e("#wrapper").on("click", "#side-menu-trigger a.menu-bar", function(a) {
        a.preventDefault();
        var t = e(this),
            n = e(this).parents("body").find(">#wrapper"),
            i = e("<div />").addClass("offcanvas-mask");
        return n.addClass("open").append(i), t.addClass("open"), t.next(".menu-times").removeClass("close"), document.getElementById("offcanvas-body-wrapper").style.right = "0", !1
    }), e("#wrapper").on("click", "#side-menu-trigger a.menu-times", function(a) {
        a.preventDefault();
        var t = e(this);
        return e("#offcanvas-body-wrapper").attr("style", ""), t.prev(".menu-bar").removeClass("open"), t.addClass("close"), l(), !1
    }), e("#wrapper").on("click", "#offcanvas-nav-close a", function(e) {
        return l(), !1
    }), e(document).on("click", "#wrapper.open .offcanvas-mask", function() {
        l()
    }), e(document).on("keyup", function(e) {
        27 === e.which && (e.preventDefault(), l())
    }), e("#archive-search select.select2").length && e("#archive-search select.select2").select2({
        theme: "classic",
        dropdownAutoWidth: !0,
        width: "100%"
    }), e(window).on("load", function() {
        var a = e("#no-equal-gallery");
        if (a.length) var t = a.imagesLoaded(function() {
            t.isotope({
                itemSelector: ".no-equal-item",
                masonry: {
                    columnWidth: ".no-equal-item"
                }
            })
        });
        e("#preloader").fadeOut("slow", function() {
            e(this).remove()
        });
        var n = e(".ne-isotope");
        n.length > 0 && n.each(function() {
            var a = e(this),
                t = a.find(".isotope-classes-tab a.current").attr("data-filter"),
                n = a.find(".featuredContainer").isotope({
                    filter: t,
                    animationOptions: {
                        duration: 750,
                        easing: "linear",
                        queue: !1
                    }
                });
            a.find(".isotope-classes-tab").on("click", "a", function() {
                var a = e(this);
                a.parent(".isotope-classes-tab").find("a").removeClass("current"), a.addClass("current");
                var t = a.attr("data-filter");
                return n.isotope({
                    filter: t,
                    animationOptions: {
                        duration: 750,
                        easing: "linear",
                        queue: !1
                    }
                }), !1
            })
        });
        var i = e("#countdown");
        i.length && i.countdown("2018/10/13 14:00:00", function(a) {
            e(this).html(a.strftime("<div class='countdown-section'><h2>%D</h2> <h3>day%!D</h3> </div><div class='countdown-section'><h2>%H</h2> <h3>Hour%!H</h3> </div><div class='countdown-section'><h2>%M</h2> <h3>Minutes</h3> </div><div class='countdown-section'><h2>%S</h2> <h3>Second</h3> </div>"))
        });
        var o = e(".ne-isotope-all");
        if (o.length > 0) {
            var s = o.find(".isotope-classes-tab a.current").attr("data-filter");
            console.log(s);
            var r = o.find(".featuredContainer").isotope({
                filter: s,
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: !1
                }
            });
            o.find(".isotope-classes-tab").on("click", "a", function() {
                var a = e(this);
                a.parent(".isotope-classes-tab").find("a").removeClass("current"), a.addClass("current");
                var t = a.attr("data-filter");
                return r.isotope({
                    filter: t,
                    animationOptions: {
                        duration: 750,
                        easing: "linear",
                        queue: !1
                    }
                }), !1
            })
        }
    });
    var d = e("#accordion");
    d.children(".panel").children(".panel-collapse").each(function() {
        e(this).hasClass("in") && e(this).parent(".panel").children(".panel-heading").addClass("active")
    }), d.on("show.bs.collapse", function(a) {
        e(a.target).prev(".panel-heading").addClass("active")
    }).on("hide.bs.collapse", function(a) {
        e(a.target).prev(".panel-heading").removeClass("active")
    });
    var c = e("#contact-form");
    if (c.length && c.validator().on("submit", function(a) {
            var t = e(this),
                n = c.find(".form-response");
            if (!a.isDefaultPrevented()) return e.ajax({
                url: "vendor/php/contact-form-process.php",
                type: "POST",
                data: c.serialize(),
                beforeSend: function() {
                    n.html("<div class='alert alert-info'><p>Loading ...</p></div>")
                },
                success: function(e) {
                    "success" === e ? (t[0].reset(), n.html("<div class='alert alert-success'><p>Message has been sent successfully.</p></div>")) : n.html("<div class='alert alert-success'><p>" + e + "</p></div>")
                }
            }), !1;
            n.html("<div class='alert alert-success'><p>Please select all required field.</p></div>")
        }), e("#login-button").on("click", function(a) {
            a.preventDefault();
            var t = e(this),
                n = t.next("#login-form");
            t.hasClass("open") ? (n.slideUp("slow"), t.removeClass("open")) : (n.slideDown("slow"), t.addClass("open"))
        }), e("#login-form").on("click", ".form-cancel", function(a) {
            a.preventDefault();
            var t = e(this).parents("#login-form"),
                n = t.prev("#login-button");
            t.slideUp("slow"), n.removeClass("open")
        }), e("#googleMap").length) {
        google.maps.event.addDomListener(window, "load", function() {
            var e = {
                    zoom: 15,
                    scrollwheel: !1,
                    center: new google.maps.LatLng(17.3921706,78.3187052),
                    styles: [{
                        stylers: [{
                            saturation: -100
                        }]
                    }]
                },
                a = new google.maps.Map(document.getElementById("googleMap"), e);
            new google.maps.Marker({
                position: a.getCenter(),
                animation: google.maps.Animation.BOUNCE,
                icon: "img/map-marker.png",
                map: a
            })
        })
    }
    e(".et-carousel").each(function() {
        var a = e(this),
            t = a.data("loop"),
            n = a.data("items"),
            i = a.data("margin"),
            o = (a.data("stage-padding"), a.data("autoplay")),
            s = a.data("autoplay-timeout"),
            r = a.data("smart-speed"),
            l = a.data("dots"),
            d = a.data("nav"),
            c = a.data("nav-speed"),
            p = a.data("r-x-small"),
            u = a.data("r-x-small-nav"),
            m = a.data("r-x-small-dots"),
            f = a.data("r-x-medium"),
            h = a.data("r-x-medium-nav"),
            v = a.data("r-x-medium-dots"),
            g = a.data("r-small"),
            y = a.data("r-small-nav"),
            w = a.data("r-small-dots"),
            C = a.data("r-medium"),
            b = a.data("r-medium-nav"),
            k = a.data("r-medium-dots"),
            x = a.data("r-Large"),
            D = a.data("r-Large-nav"),
            H = a.data("r-Large-dots"),
            M = a.data("center");
        a.owlCarousel({
            loop: !!t,
            items: n || 4,
            lazyLoad: !0,
            margin: i || 0,
            autoplay: !!o,
            autoplayTimeout: s || 1e3,
            smartSpeed: r || 250,
            dots: !!l,
            nav: !!d,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            navSpeed: !!c,
            center: !!M,
            responsiveClass: !0,
            responsive: {
                0: {
                    items: p || 1,
                    nav: !!u,
                    dots: !!m
                },
                480: {
                    items: f || 2,
                    nav: !!h,
                    dots: !!v
                },
                768: {
                    items: g || 3,
                    nav: !!y,
                    dots: !!w
                },
                992: {
                    items: C || 4,
                    nav: !!b,
                    dots: !!k
                },
                1200: {
                    items: x || 5,
                    nav: !!D,
                    dots: !!H
                }
            }
        })
    }), e(window).on("load resize", function() {
        var a = e(window).height();
        e("a.logo-mobile").outerHeight();
        a -= 50, e(".mean-nav > ul").css("height", a + "px");
        var t = e(".add-top-margin"),
            n = e(".header-menu-fixed").outerHeight();
        t.css({
            "margin-top": n + "px"
        }), e(window).width() < 991 && e("body.mean-container").css("margin-top", 0)
    }), e(window).on("scroll", function() {
        var a, t = e("#sticker"),
            n = e("body"),
            i = t.outerHeight(),
            o = e(window).scrollTop(),
            s = e(window).width(),
            r = t.parent("#header-one"),
            l = t.parent("#header-two"),
            d = t.parent("#header-three"),
            c = (d.find(".header-top-bar").outerHeight(), t.prev(".header-top-bar"));
        if (s > 991) {
            n.css("padding-top", "");
            var p;
            r.length ? (p = i = 1, 0) : l.length ? p = l.find(".main-menu-area").outerHeight() + (p = n.find("#top-slider").outerHeight()) : d.length && o <= (p = c.outerHeight()) && d.hasClass("header-fixed") && d.css("top", "-" + o + "px"), o >= p ? ((d.length || r.length) && t.addClass("stick"), d.length ? d.hasClass("header-fixed") ? d.css("top", "-" + p + "px") : n.css("padding-top", i + "px") : l.length && (l.addClass("hide-menu"), (a = l.find(".main-menu-area").clone()).addClass("temp-main-menu stick").attr("id", ""), a.css({
                opacity: 0
            }), 0 == l.find(".temp-main-menu.stick").length && (l.append(a), l.find(".temp-main-menu.stick").animate({
                opacity: 1
            }, 100)), l.find(".temp-main-menu.stick").length > 1 && l.find(".temp-main-menu.stick").last().remove())) : (t.removeClass("stick"), d.length ? n.css("padding-top", 0) : l.length && (l.removeClass("hide-menu"), l.find(".stick.temp-main-menu").remove()))
        }
    }), e(".masonry-items").length && e(".masonry-items").masonry({
        itemSelector: ".masonry-item",
        columnWidth: ".masonry-item"
    }), e("#quantity-holder,#quantity-holder2").on("click", ".quantity-plus", function() {
        var a = e(this).parents(".quantity-holder").find("input.quantity-input"),
            t = parseInt(a.val(), 10);
        e.isNumeric(t) && t > 0 ? (t += 1, a.val(t)) : a.val(t)
    }).on("click", ".quantity-minus", function() {
        var a = e(this).parents(".quantity-holder").find("input.quantity-input"),
            t = parseInt(a.val(), 10);
        e.isNumeric(t) && t >= 2 ? (t -= 1, a.val(t)) : a.val(1)
    }), e(".menu-trigger").on("click", function() {
        var a = e("#main-nav-wrap"),
            t = e("#main-nav", a),
            n = t.find(" > ul").not(".temp-main-nav"),
            i = t.find("ul.temp-main-nav"),
            o = e(this);
        if (i.length) o.find("i").removeClass("flaticon-unchecked").addClass("flaticon-menu"), i.animate({
            top: "-100%"
        }, 500, function() {
            e(this).animate({
                opacity: 0
            }, 200, function() {
                e(this).remove()
            })
        });
        else {
            o.find("i").removeClass("flaticon-menu").addClass("flaticon-unchecked");
            var s = n.clone();
            s.css({
                visibility: "visible",
                position: "absolute",
                top: "-100%",
                left: 0,
                opacity: 0,
                width: n.outerWidth()
            }).addClass("temp-main-nav"), t.append(s), s.animate({
                opacity: 1
            }, 200, function() {
                e(this).animate({
                    top: 0
                }, 500)
            })
        }
    })
}(jQuery);