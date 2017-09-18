require(["jquery", "carousel", "arttemplate", "bus", "common", "dotdotdot", "lazyload"], function (t, e, o, a, n, i, s) {
    $(function () {
        function t() {
            $(".NEW").css("overflow", "hidden"), $(".NEW").on("mousemove", function () {
                $(this).addClass("imghover"), $(this).find(".info_box").css("display", "table-cell")
            }), $(".NEW").on("mouseleave", function () {
                $(this).removeClass("imghover"), $(this).find(".info_box").css("display", "none")
            })
        }
 
        function e() {
            a++, $(".NEWS .refresh").addClass("active");
            var o = {};
            o.module = "Home.Index", o.action = "GetNewRecommend", o.pageIndex = a, o.pageSize = 10, $.ajax({
                data: o
            }).done(function (o) {
                var n = "@560h_560w_1e_1c_1wh_90Q",
                    i = [],
                    s = 0;
                console.log(a), console.log(o);
                for (var c = 0; c < o.Data.length; c++) {
                    c > 1 && (n = "@260h_260w_1e_1c_1wh_90Q");
                    var l = "https://cdn.ywart.com/yw/" + o.Data[c].ImgFileName + n;
                    ! function (a, n, c) {
                        i[a] = new Image;
                        var l = $(".NEW .front");
                        c % 2 == 0 && (l = $(".NEW .back")), i[a].onload = function () {
                            l.eq(a).find("img").attr("alt", o.Data[a].ArtistName + " " + o.Data[a].ArtworkName).attr(
                                "src", n), l.eq(a).find("a").attr("href", "/artworks/" + o.Data[a].ArtworkCode), l.eq(a)
                                .find("h3").text(o.Data[a].ArtistName), l.eq(a).find("h4").text(o.Data[a].ArtworkName),
                                l.eq(a).find(".info").html("<br />" + o.Data[a].Material + " " + o.Data[a].Size),
                                l.eq(a).find(".year").text(o.Data[a].CreateDateText), l.eq(a).find(".ysp_price").text(
                                "¥" + o.Data[a].PriceSaleText), ++s == o.Data.length && ($(".NEW").off(
                                "mousemove mouseleave"), $(".NEW").find("img").css({
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                                top: "0",
                                left: "0"
                            }), $(".NEW").find(".info_box").css("display", "none"), $(".NEW").css("overflow", "visible"),
                                c % 2 == 0 ? ($(".NEW .front").removeClass("AMhide"), $(".NEW .back").addClass("AMhide"),
                                $(".NEW").addClass("active").removeClass("out")) : ($(".NEW .front").addClass("AMhide"),
                                $(".NEW .back").removeClass("AMhide"), $(".NEW").addClass("out").removeClass("active")),
                                setTimeout(function () {
                                $(".NEWS .refresh").removeClass("active"), $(".NEWS .refresh").one("click", e), t()
                            }, 2e3))
                        }, i[a].src = n
                    }(c, l, a)
                }
            })
        }
        $("img.lazy").lazyload({
            threshold: 400,
            failurelimit: 0
        }), $("#owl-hero").owlCarousel({
            items: 1,
            autoplay: !0,
            autoplayTimeout: 5e3,
            loop: !0,
            mouseDrag: !1,
            touchDrag: !1,
            autoplaySpeed: 4e3,
            animateOut: "fadeOut"
        }), $(".QRcode .apple").click(function () {
            $(".QRcode .QRcodeimg img").hide(), $(".QRcode .iosQRcode").fadeIn(100)
        }), $(".QRcode .android").click(function () {
            $(".QRcode .QRcodeimg img").hide(), $(".QRcode .AndroidQRcode").fadeIn(100)
        }),
 
        function () {
            function t() {
                $(".SPECIAL").off("mouseenter").on("mouseenter", function () {
                    $(this).find(".box").stop().animate({
                        "padding-left": "60px"
                    }), $(this).find("img").stop().animate({
                        left: "0"
                    }), $(this).stop().animate({
                        width: "440px"
                    }), $(".SPECIALS .stage").stop().animate({
                        "margin-left": "-60px",
                        left: i + "px"
                    })
                }), $(".SPECIAL").off("mouseleave").on("mouseleave", function () {
                    $(this).stop().animate({
                        width: "320px"
                    }), $(this).find(".box").stop().animate({
                        "padding-left": "0"
                    }), $(this).find("img").stop().animate({
                        left: "-60px"
                    }), $(".SPECIALS .stage").stop().animate({
                        "margin-left": 0,
                        left: i + "px"
                    })
                })
            }
            var e = $(".SPECIALBOX .stage"),
                o = $(".SPECIALBOX .stage .SPECIAL").length,
                a = 350 * o - 30,
                n = 350,
                i = 0;
            t(), $(".SPECIALS .title .next").click(function () {
                var t = e[0].offsetLeft;
                if (2 * document.body.clientWidth - t > a) e.stop().animate({
                        left: document.body.clientWidth - a + "px"
                    }, 600), i = document.body.clientWidth - a;
                else {
                    var o = Math.ceil((t - document.body.clientWidth) / n);
                    e.stop().animate({
                        left: o * n + "px"
                    }, 600), i = o * n
                }
            }), $(".SPECIALS .title .prev").click(function () {
                var t = e[0].offsetLeft;
                if (document.body.clientWidth + t > 0) e.stop().animate({
                        left: 0
                    }, 600), i = 0;
                else {
                    var o = Math.floor((t + document.body.clientWidth) / n);
                    e.stop().animate({
                        left: o * n + "px"
                    }, 600), i = o * n
                }
            }),
 
            function (o) {
                o.onmousedown = function (s) {
                    var s = s || event,
                        c = s.clientX - o.offsetLeft,
                        l = s.clientX,
                        d = (new Date).getTime();
                    $(".SPECIAL").off("mouseleave mouseenter"), $(".SPECIAL").stop().css({
                        width: "320px"
                    }), $(".SPECIAL").find(".box").stop().css({
                        "padding-left": "0"
                    }), $(".SPECIAL").find("img").stop().css({
                        left: "-60px"
                    }), $(".SPECIALS .stage").stop().css({
                        "margin-left": 0
                    }), document.onmousemove = function (t) {
                        var t = t || event,
                            e = t.clientX - c;
                        e > 200 && (e = 200), e < document.body.clientWidth - a - 200 && (e = document.body.clientWidth -
                            a - 200), o.style.left = e + "px", i = e
                    }, document.onmouseup = function (s) {
                        if (s.preventDefault(), document.onmousemove = document.onmouseup = null, s.clientX > l) {
                            var c = Math.ceil(o.offsetLeft / n);
                            e.stop().animate({
                                left: c * n + "px"
                            }), i = c * n
                        } else {
                            var c = Math.floor(o.offsetLeft / n);
                            e.stop().animate({
                                left: c * n + "px"
                            }), i = c * n
                        }
                        i < document.body.clientWidth - a ? (e.stop().animate({
                            left: document.body.clientWidth - a + "px"
                        }), i = document.body.clientWidth - a) : i > 0 && (e.stop().animate({
                            left: 0
                        }), i = 0);
                        var m = (new Date).getTime();
                        1 == s.which && Math.abs(s.clientX - l) < 10 && m - d < 300 && $(s.target).parents(".SPECIAL").attr(
                            "href") && window.open($(s.target).parents(".SPECIAL").attr("href")), t()
                    }
                }
            }($(".SPECIALBOX .stage")[0])
        }(), $(".CATEGORYS .CName").click(function () {
            $(".CATEGORYS .CName").removeClass("active");
            var t = $(this);
            t.addClass("active");
            var e = t.attr("categoryname"),
                a = {};
            a.module = "Home.Index", a.action = "GetCategoryTopn", a.categoryname = e, $.ajax({
                data: a
            }).done(function (t) {
                var e = o("t_category_content", {
                    list: t.Data
                });
                $(".CATEGORYS .ITEMBOX").html(e)
            })
        }), $(".CATEGORYS .more").click(function () {
            var t = $(".CATEGORYS .active").attr("categoryname");
            location.href = "/buy?category=" + t
        });
        var a = 1;
        $(".NEWS .refresh").one("click", e), t(), $(".go").click(function () {
            $(".searchbar-submit").click()
        }), $(function () {
            var t = document.body.clientHeight;
            t + $(document).scrollTop() > 1573 && !$(".NEWBOX").hasClass("active") && $(".NEWBOX").addClass("active").css(
                "top", "50px").stop().animate({
                top: "0"
            }, 1e3), t + $(document).scrollTop() > 2031 && !$(".ITEMBOX").hasClass("active") && $(".ITEMBOX").addClass(
                "active").css("top", "50px").stop().animate({
                top: "0"
            }, 1e3), t + $(document).scrollTop() > 3520 && !$(".INSIGHT").hasClass("active") && $(".INSIGHT").addClass(
                "active").css("top", "50px").stop().animate({
                top: "0"
            }, 1e3), t + $(document).scrollTop() > 4220 && !$(".WHYUS .content").hasClass("active") && $(
                ".WHYUS .content").addClass("active").css("top", "50px").stop().animate({
                top: "0"
            }, 1e3)
        }), $(window).on("scroll", function () {
            var t = document.body.clientHeight;
            t + $(document).scrollTop() > 1573 && !$(".NEWBOX").hasClass("active") && $(".NEWBOX").addClass("active").css(
                "top", "50px").stop().animate({
                top: "0"
            }, 1e3), t + $(document).scrollTop() > 2031 && !$(".ITEMBOX").hasClass("active") && $(".ITEMBOX").addClass(
                "active").css("top", "50px").stop().animate({
                top: "0"
            }, 1e3), t + $(document).scrollTop() > 3520 && !$(".INSIGHT").hasClass("active") && $(".INSIGHT").addClass(
                "active").css("top", "50px").stop().animate({
                top: "0"
            }, 1e3), t + $(document).scrollTop() > 4220 && !$(".WHYUS .content").hasClass("active") && $(
                ".WHYUS .content").addClass("active").css("top", "50px").stop().animate({
                top: "0"
            }, 1e3), $(".owl-controls").css("bottom", $(document).scrollTop())
        })
    })
});
//# sourceMappingURL=../../map/script/page/Home.Index.min.js.map