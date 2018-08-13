// var jQuerywindow = jQuery(window),garden;
//
// jQuery(function () {
//     // setup garden
// 	var jQueryloveHeart = jQuery("#loveHeart"),
// 	    offsetX = jQueryloveHeart.width() / 2,
// 			offsetY = jQueryloveHeart.height() / 2 - 55,
// 			jQuerygarden = jQuery("#garden"),
// 			gardenCanvas = jQuerygarden[0],
// 			gardenCtx = gardenCanvas.getContext("2d");
// 	garden = new Garden(gardenCtx, gardenCanvas);
// 	gardenCanvas.width = jQuery("#loveHeart").width();
// 	gardenCanvas.height = jQuery("#loveHeart").height();
// 	gardenCtx.globalCompositeOperation = "lighter"; // 显示源图像 + 目标图像
//
// 	jQuery("#content").css("width", jQueryloveHeart.width() + jQuery("#code").width());
// 	jQuery("#content").css("height", Math.max(jQueryloveHeart.height(), jQuery("#code").height()));
// 	jQuery("#content").css("margin-top", Math.max((jQuerywindow.height() - jQuery("#content").height()) / 2, 10)); // 垂直居中
// 	jQuery("#content").css("margin-left", Math.max((jQuerywindow.width() - jQuery("#content").width()) / 2, 10));  // 水平居中
//
// 	// renderLoop
// 	setInterval(function () {
// 		garden.render();
// 	}, Garden.options.growSpeed);
// });
//
// // 返回爱心点的坐标
// function getHeartPoint(angle) {
// 	var t = angle / Math.PI;
// 	var x = 19.5 * (16 * Math.pow(Math.sin(t), 3));
// 	var y = - 20 * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
// 	return new Array(offsetX + x, offsetY + y);
// }
//
// // 爱心效果
// function startHeartAnimation() {
// 	var angle = 10; // 度数
// 	var heart = new Array();
// 	var animationTimer = setInterval(function() {
// 		var bloom = getHeartPoint(angle);
// 		var draw = true;
// 		for (var i = 0; i < heart.length; i++) {  // 防止首位的颜色过度叠加(具体的还没弄懂)
// 			var p = heart[i];
// 			var distance = Math.sqrt(Math.pow(p[0] - bloom[0], 2) + Math.pow(p[1] - bloom[1], 2));
// 			if (distance < Garden.options.bloomRadius.max * 1.3) {
// 				draw = false;
// 				break;
// 			}
// 		}
// 		if (draw) {
// 			heart.push(bloom);
// 			garden.createRandomBloom(bloom[0], bloom[1]);   // 根据具体位置创建随机花朵;
// 		}
// 		if (angle >= 30) {
// 			clearInterval(animationTimer);
// 			showMessages();
// 		} else {
// 			angle += 0.2;
// 		}
// 	}, 75);
// }
//
//
//
// function timeElapse(date) {
// 	var current = Date();
// 	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
// 	var days = Math.floor(seconds / (3600 * 24));
// 	seconds = seconds % (3600 * 24);
// 	var hours = Math.floor(seconds / 3600);
// 	if (hours < 10) {
// 		hours = "0" + hours;
// 	}
// 	seconds = seconds % 3600;
// 	var minutes = Math.floor(seconds / 60);
// 	if (minutes < 10) {
// 		minutes = "0" + minutes;
// 	}
// 	seconds = seconds % 60;
// 	if (seconds < 10) {
// 		seconds = "0" + seconds;
// 	}
// 	var result = "<span class=\"digit\">" + days + "</span> days <span class=\"digit\">" + hours + "</span> hours <span class=\"digit\">" + minutes + "</span> minutes <span class=\"digit\">" + seconds + "</span> seconds";
// 	jQuery('#elapseClock').html(result);
// }
//
// function showMessages() {
// 	adjustWordsPosition();
// 	jQuery('#messages').fadeIn(5000, function() {
// 		showLoveU();
// 	});
// }
//
// function adjustWordsPosition() {
// 	jQuery('#words').css("position", "absolute");
// 	jQuery('#words').css("top", jQuery("#garden").position().top + 195);
// 	jQuery('#words').css("left", jQuery("#garden").position().left + 70);
// }
//
// function adjustCodePosition() {
// 	jQuery('#code').css("margin-top", (jQuery('#garden').height() - jQuery("#code").height()) / 2);
// }
//
// function showLoveU() {
// 	jQuery('#loveu').fadeIn(3000);
// }
//
// //模拟打字效果
// (function(jQuery) {
//     jQuery.fn.typewriter = function() {
//         this.each(function() {
//             var jQueryele = $(this),
//                 str = jQueryele.html(),
//                 progress = 0;
//             jQueryele.html('');
//             var timer = setInterval(function() {
//                 var current = str.substr(progress, 1);        // 每次截取一个字符
//                 if (current === '<') {                        // 如果是<则找到对应的>，并增加相应的progress的值;
//                     progress = str.indexOf('>', progress) + 1;  // 从<>的下一个开始
//                 } else {
//                     progress++;
//                 }
//                 // progress & 1 与运算 奇数 & 1 = 1,偶数 & 1 = 0；
//                 jQueryele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));  // 模拟出打字'_'闪烁效果
//             }, 75);
//         });
//         return this;
//     };
// })(jQuery);
//
//
// jQuery("#code").typewriter(); // 打字效果