function footer(){
	document.getElementById("footer").innerHTML = '<div class="footer-left">Powered by Github Pages<br /><a href="https://github.com/kaizhadanche/kaizhadanche.github.io" id="footer-left-1">Repository Code</a> · <a href="https://github.com/kaizhadanche/kaizhadanche.github.io/issues">Issues</a></div><div class="footer-right"><p><a href="../index.html" id="backtoindex"><span id="name-kjdc">开炸弹车</span></a> | <span id="name-lzya">Lzya</span> | <span id="name-cutie">Cutie</span></p><p><i class="fa fa-cc" aria-hidden="true"></i>&nbsp;除非另有声明，本网站内容采用<a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>协议授权。</p></div>';
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
