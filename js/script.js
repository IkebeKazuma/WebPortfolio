$(document).ready(function() {
	window.setTimeout(
		function(){
			$('body').fadeIn(500); // 0.5秒かけてフェードイン
		},
		100
	);

	$("#left-side-menu > a").click( function() {
		var src = $(this).attr("href"); 
		var main = $("#main-frame");
		var mainFrame = $("#main-frame > iframe");

		//フェードアウトして、iframeのソースかえて、フェードイン
		main.fadeTo(200,0.05,function() {
			mainFrame.attr("src", src);
		});
		return false;
	});
});

function MainFrameFadeIn(){
	$("#main-frame").fadeTo(200, 1);
}