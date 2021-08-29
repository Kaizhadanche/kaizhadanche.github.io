function footer(){
	document.getElementById("footer").innerHTML = '<div class="footer-left">Powered by Github Pages<br /><a href="https://github.com/kaizhadanche/kaizhadanche.github.io" id="footer-left-1">Repository Code</a> · <a href="https://github.com/kaizhadanche/kaizhadanche.github.io/issues">Issues</a></div><div class="footer-right"><p><a href="/index.html" id="backtoindex"><span id="name-kjdc">开炸弹车</span></a> | <span id="name-lzya">Lzya</span> | <span id="name-cutie">Cutie</span></p><p><i class="fa fa-cc" aria-hidden="true"></i>&nbsp;除非另有声明，本网站内容采用<a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>协议授权。</p></div>';
};
function header(){
	document.getElementById("header").innerHTML = '<div style="clear:right;"></div><div class="title"><h1 id="title-text"><img src="/img/avatar.jpg" id="title-avatar"/>开炸弹车</h1></div><div class="search"><input id="search-in" type="text" placeholder="这是个单纯用于观赏的搜索框"/><i class="fa fa-search fa-2x" id="search-ico"></i></div><div style="clear: both;"></div>';
};
function exam(){
	var d = new Date();
	var dt = d.getTime();
	var e = new Date("2022-06-21");
	var et = e.getTime();
	var deltatimet = et-dt;
	if (deltatimet > 0) {
		var deltatime = Math.floor(deltatimet/86400000) + 1;
		document.getElementById("exam").innerHTML = "<i class='fa fa-info-circle'></i>&nbsp;距离中考还有" + deltatime + "天";
	} else if (deltatime < -172800000) {
		document.getElementById("exam").innerHTML = "<i class='fa check'></i>&nbsp;中考已结束";
	} else {
		document.getElementById("exam").innerHTML = "<i class='fa fa-pencil'></i>&nbsp;中考进行中";
	}
};
function swy(){
	// load seewithyou
	document.getElementById("seewithyou-load").innerHTML = '<div id="seewithyou"><img src="/img/swy.png" id="seewithyou-img"/><div class="seewithyou-button-1 seewithyou-button"><i class="fa fa-times"></i></div><div class="seewithyou-button-2 seewithyou-button"><i class="fa fa-home"></i></div><div class="seewithyou-button-3 seewithyou-button"><i class="fa fa-commenting-o"></i></div><div class="seewithyou-button-4 seewithyou-button"><i class="fa fa-angle-double-up"></i></div><div class="seewithyou-button-5 seewithyou-button"><i class="fa fa-long-arrow-right"></i></div><div class="seewithyou-says"></div></div><div id="seewithyou-right"><img src="/img/swy.png" id="seewithyou-img-right"/><div class="seewithyou-button-1-right seewithyou-button-right"><i class="fa fa-times"></i></div><div class="seewithyou-button-2-right seewithyou-button-right"><i class="fa fa-home"></i></div><div class="seewithyou-button-3-right seewithyou-button-right"><i class="fa fa-commenting-o"></i></div><div class="seewithyou-button-4-right seewithyou-button-right"><i class="fa fa-angle-double-up"></i></div><div class="seewithyou-button-5-right seewithyou-button-right"><i class="fa fa-long-arrow-left"></i></div><div class="seewithyou-says-right"></div></div>';
	// button
	$("#seewithyou-img").click(function (){
		$(".seewithyou-button").toggle();
	});
	$(".seewithyou-button-1").click(function (){
		$("#seewithyou").hide();
	});
	$(".seewithyou-button-2").click(function (){
		window.open("/index.html");
	});
	$(".seewithyou-button-3").click(function (){
		$(".seewithyou-says").show();
		$(".seewithyou-button").toggle();
		var swyr = Math.floor(Math.random() * 5);
		switch (swyr) {
			case 0:
				$(".seewithyou-says").text("看着塔什干就这么开心?......这样？随你高兴吧");
				break;
			case 1:
				$(".seewithyou-says").text("看塔什干把你们揍扁！γpa！");
				break;
			case 2:
				$(".seewithyou-says").text("塔什干认真起来是绝对不会输的！");
				break;
			case 3:
				$(".seewithyou-says").text("……嗯？你在干什么？要玩塔什干衣服上的球球吗？");
				break;
			case 4:
				$(".seewithyou-says").text("果然那个巧克力…有古怪…塔什干竟然落到这地步…呜…头还是晕晕的…");
		};
	});
	$(".seewithyou-button-4").click(function (){
		window.location.href = "#top";
	});
	$(".seewithyou-button-5").click(function (){
		$("#seewithyou").hide();
		$("#seewithyou-right").show();
		$(".seewithyou-button").toggle();
	});
	$(".seewithyou-says").click(function (){
		$(".seewithyou-says").toggle();
	});
	// button after turning right
	$("#seewithyou-img-right").click(function (){
		$(".seewithyou-button-right").toggle();
	});
	$(".seewithyou-button-1-right").click(function (){
		$("#seewithyou-right").hide();
	});
	$(".seewithyou-button-2-right").click(function (){
		window.open("/index.html");
	});
	$(".seewithyou-button-3-right").click(function (){
		$(".seewithyou-says-right").show();
		$(".seewithyou-button-right").toggle();
		var swyr = Math.floor(Math.random() * 5);
		switch (swyr) {
			case 0:
				$(".seewithyou-says-right").text("看着塔什干就这么开心?......这样？随你高兴吧");
				break;
			case 1:
				$(".seewithyou-says-right").text("看塔什干把你们揍扁！γpa！");
				break;
			case 2:
				$(".seewithyou-says-right").text("塔什干认真起来是绝对不会输的！");
				break;
			case 3:
				$(".seewithyou-says-right").text("……嗯？你在干什么？要玩塔什干衣服上的球球吗？");
				break;
			case 4:
				$(".seewithyou-says-right").text("果然那个巧克力…有古怪…塔什干竟然落到这地步…呜…头还是晕晕的…");
		};
	});
	$(".seewithyou-button-4-right").click(function (){
		window.location.href = "#top";
	});
	$(".seewithyou-button-5-right").click(function (){
		$("#seewithyou-right").hide();
		$("#seewithyou").show();
		$(".seewithyou-button-right").toggle();
	});
	$(".seewithyou-says-right").click(function (){
		$(".seewithyou-says-right").toggle();
	});
};