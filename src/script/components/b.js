function t() {
		$(".pub_hotRefresh_item").css("overflow", "hidden"), $(".pub_hotRefresh_item").on("mousemove", function() {
			$(this).addClass("imghover"), $(this).find(".pub_hotRefresh_box").css("display", "table-cell")
		}), $(".pub_hotRefresh_item").on("mouseleave", function() {
			$(this).removeClass("imghover"), $(this).find(".pub_hotRefresh_box").css("display", "none")
		})
	}

	function e() {
		a++, $(".pub_hotRefresh .refresh").addClass("active");
		var o = {
//			module:"Home.Index",
//			action:"Getpub_hotRefresh_itemRecommend", 
//			pageIndex: a,
//			pageSize: 10,
		};
		$.ajax({
			type:"get",
			url:"/yinuovip/libs/data.json",
			async:true,
			data:o,
			success:function(o){
				console.log(o);
				var n = "@560h_560w_1e_1c_1wh_90Q",
				i = [],
				s = 0;
			for(var c = 0; c < o.Data.length; c++) {
				c > 1 && (n = "@260h_260w_1e_1c_1wh_90Q");
				var l = "https://cdn.ywart.com/yw/" + o.Data[c].ImgFileName + n;
				! function(a, n, c) {
					i[a] = new Image;
					var l = $(".pub_hotRefresh_item .pub_hotRefresh_front");
					c % 2 == 0 && (l = $(".pub_hotRefresh_item .pub_hotRefresh_back")), 
					i[a].onload = function() {
						l.eq(a).find("img").attr("alt", o.Data[a].ArtistName + " " + o.Data[a].ArtworkName)
						    .attr("src", n), l.eq(a).find("a").attr("href", "/artworks/" + o.Data[a].ArtworkCode), l.eq(a)
							.find("h3").text(o.Data[a].ArtistName),
							l.eq(a).find("h4").text(o.Data[a].ArtworkName),
							l.eq(a).find(".info").html("<br />" + o.Data[a].Material + " " + o.Data[a].Size),
							l.eq(a).find(".year").text(o.Data[a].CreateDateText),
							l.eq(a).find(".ysp_price").text(
								"¥" + o.Data[a].PriceSaleText), 
								    ++s == o.Data.length && ($(".pub_hotRefresh_item").off(
									"mousemove mouseleave"),
									$(".pub_hotRefresh_item").find("img").css({
									width: "100%",
									height: "100%",
									position: "absolute",
									top: "0",
									left: "0"
								}),
								$(".pub_hotRefresh_item").find(".pub_hotRefresh_box").css("display", "none"),
								$(".pub_hotRefresh_item").css("overflow", "visible"),
								c % 2 == 0 ? ($(".pub_hotRefresh_item .pub_hotRefresh_front").removeClass("AMhide"), 
								$(".pub_hotRefresh_item .pub_hotRefresh_back").addClass("AMhide"),
									$(".pub_hotRefresh_item").addClass("active").removeClass("out")) : ($(".pub_hotRefresh_item .pub_hotRefresh_front").addClass("AMhide"),
									$(".pub_hotRefresh_item .pub_hotRefresh_back").removeClass("AMhide"), 
									$(".pub_hotRefresh_item").addClass("out").removeClass("active")),
								setTimeout(function() {
									$(".pub_hotRefresh .refresh").removeClass("active"), $(".pub_hotRefresh .refresh").one("click", e), t()
								}, 2e3))
					}, i[a].src = n
				}(c, l, a)
			}
			}
		});
	}
	var a = 1;
	$(".pub_hotRefresh .refresh").one("click", e), t();
	$(function() {
		var t = document.body.clientHeight;
		t + $(document).scrollTop() > 1573 && !$(".pub_hotRefresh_wrapper").hasClass("active") && $(".pub_hotRefresh_wrapper").addClass("active").css(
			"top", "50px").stop().animate({
			top: "0"
		})
	});
	$(window).on("scroll", function() {
		var t = document.body.clientHeight;
		t + $(document).scrollTop() > 1573 && !$(".pub_hotRefresh_wrapper").hasClass("active") && $(".pub_hotRefresh_wrapper").addClass("active").css(
			"top", "50px").stop().animate({
			top: "0"
		})
	})