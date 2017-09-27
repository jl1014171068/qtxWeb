$(function() {
	//banner图模块
	var swiper = new Swiper('.banner_container', {
		pagination: '.banner_container_pagination',
		paginationClickable: true,
		spaceBetween: 30,
		centeredSlides: true,
		autoplay: 2500,
		autoplayDisableOnInteraction: false
	});
	/**
	 * 首页三级菜单
	 * @param $
	 */
	$('.home_nav_all,.category_panel').hover(function() {
		$(this).addClass('active');
	}, function() {
		$(this).removeClass('active');
	});

	$("img.lazy").lazyload({
		threshold: 400,
		failurelimit: 0
	});
});

$(function() {

	/**
	 * 首页多图切换专题
	 *
	 */
   if(!$('.index_specialbox').length){
   	return false;
   }
	function t() {
		$(".index_specialbox .item").off("mouseenter").on("mouseenter", function() {
			$(this).find(".textSpan").stop().animate({
				"padding-left": "60px"
			}), $(this).find("img").stop().animate({
				left: "0"
			}), $(this).stop().animate({
				width: "440px"
			}), $(".index_specialbox .index_specialbox_wrapper").stop().animate({
				"margin-left": "-60px",
				left: i + "px"
			})
		}), $(".index_specialbox .item").off("mouseleave").on("mouseleave", function() {
			$(this).stop().animate({
				width: "320px"
			}), $(this).find(".textSpan").stop().animate({
				"padding-left": "0"
			}), $(this).find("img").stop().animate({
				left: "-60px"
			}), $(".index_specialbox .index_specialbox_wrapper").stop().animate({
				"margin-left": 0,
				left: i + "px"
			})
		})
	}
	var e = $(".index_specialbox .index_specialbox_wrapper"),
		o = $(".index_specialbox .item").length,
		a = 350 * o - 30,
		n = 350,
		i = 0;
	t(), $(".index_special  .next").click(function() {
			var t = e[0].offsetLeft;
			if(2 * document.body.clientWidth - t > a) e.stop().animate({
				left: document.body.clientWidth - a + "px"
			}, 600), i = document.body.clientWidth - a;
			else {
				var o = Math.ceil((t - document.body.clientWidth) / n);
				e.stop().animate({
					left: o * n + "px"
				}, 600), i = o * n
			}
		}), $(".index_special  .prev").click(function() {
			var t = e[0].offsetLeft;
			if(document.body.clientWidth + t > 0) e.stop().animate({
				left: 0
			}, 600), i = 0;
			else {
				var o = Math.floor((t + document.body.clientWidth) / n);
				e.stop().animate({
					left: o * n + "px"
				}, 600), i = o * n
			}
		}),

		function(o) {
			o.onmousedown = function(s) {
				var s = s || event,
					c = s.clientX - o.offsetLeft,
					l = s.clientX,
					d = (new Date).getTime();
				$(".index_specialbox .item").off("mouseleave mouseenter"), $(".index_specialbox .item").stop().css({
					width: "320px"
				}), $(".index_specialbox .item").find(".textSpan").stop().css({
					"padding-left": "0"
				}), $(".index_specialbox .item").find("img").stop().css({
					left: "-60px"
				}), $(".index_specialbox .index_specialbox_wrapper").stop().css({
					"margin-left": 0
				}), document.onmousemove = function(t) {
					var t = t || event,
						e = t.clientX - c;
					e > 200 && (e = 200), e < document.body.clientWidth - a - 200 && (e = document.body.clientWidth -
						a - 200), o.style.left = e + "px", i = e
				}, document.onmouseup = function(s) {
					if(s.preventDefault(), document.onmousemove = document.onmouseup = null, s.clientX > l) {
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
					1 == s.which && Math.abs(s.clientX - l) < 10 && m - d < 300 && $(s.target).parents(".item").attr(
						"href") && window.open($(s.target).parents(".item").attr("href")), t()
				}
			}
		}($(".index_specialbox .index_specialbox_wrapper")[0])
});

(function($) {
	$.fn.extend({
		hotRefresh: function(options) {
			var opts = $.extend({}, defaluts, options);
			this.each(function() {
				var $dom = $(this),
					$trigger = $(this).find('.refresh'),
					currpage = 1,
					array = [],
					count = 0,
					item = $dom.find('.pub_hotRefresh_item');
				$trigger.click(function() {
					$.ajax({
						type: opts.type,
						url: opts.url + '?currpage=' + currpage,
						async: opts.async,
						data: opts.data,
						success: function(result) {
							window.result = result;
							currpage++;
							for(var i = 0; i < result.datas.length; i++) {
								var data = result.datas[i];
								var src = data.goods_image;
								! function(i) {
									array[i] = new Image;
									var front = $dom.find('.pub_hotRefresh_front');
									currpage % 2 == 0 && (front = $dom.find('.pub_hotRefresh_back'));
									array[i].onload = function() {
											front.eq(i).find('img').attr("alt", data.goods_name).attr('src', src);
											front.eq(i).find("a").attr("href", data.link),
												front.eq(i).find("h3").text(data.goods_name),
												front.eq(i).find(".price").text(data.goods_price),
												front.eq(i).find(".goods_marketprice").text(data.goods_marketprice),
												front.eq(i).find(".count").text(data.count),
												++count == data.length && item.off("mousemove mouseleave");
											item.find("img").css({
//												width: "100%",
//												height: "100%",
//												position: "absolute",
//												top: "0",
//												left: "0"
											});
//											item.find(".pub_hotRefresh_box").css("display", "none");
											item.css("overflow", "visible");
											if(currpage % 2 == 0) {
												$dom.find(".pub_hotRefresh_item .pub_hotRefresh_front").removeClass("AMhide");
												$dom.find(".pub_hotRefresh_item .pub_hotRefresh_back").addClass("AMhide");
												item.addClass("active").removeClass("out")
											} else {
												$dom.find(".pub_hotRefresh_item .pub_hotRefresh_front").addClass("AMhide");
												$dom.find(".pub_hotRefresh_item .pub_hotRefresh_back").removeClass("AMhide");
												item.addClass("out").removeClass("active")
											}

										},
										array[i].src = src;
								}(i);
							}
//							hotRefresh_hover();
						}
					});
					return false;
				});
			});
		}
	})
	var defaluts = {
		url: "/yinuovip/libs/data.json",
		type: "get",
		async: true,
		data: { currpage: 1, pageSize: 10 },
		dom: '.pub_hotRefresh'
	};
}(window.jQuery));