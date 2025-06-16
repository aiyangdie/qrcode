/*
	背景图片动画效果
*/

(function() {
	"use strict";

	var $body = document.querySelector('body');

	// Play initial animations on page load.
	window.addEventListener('load', function() {
		window.setTimeout(function() {
			$body.classList.remove('is-preload');
		}, 100);
	});

	// 背景图片轮播
	(function() {
		// 设置
		var settings = {
			// 图片和位置
			images: {
				'images/01.webp': 'center',
				'images/02.webp': 'center',
				'images/03.webp': 'center'
			},
			// 切换延迟
			delay: 6000
		};

		// 变量
		var pos = 0, lastPos = 0,
			$wrapper, $bgs = [], $bg,
			k, v;

		// 创建背景容器和背景元素
		$wrapper = document.createElement('div');
		$wrapper.id = 'bg';
		$body.appendChild($wrapper);

		for (k in settings.images) {
			// 创建背景元素
			$bg = document.createElement('div');
			$bg.style.backgroundImage = 'url("' + k + '")';
			$bg.style.backgroundPosition = settings.images[k];
			$wrapper.appendChild($bg);

			// 添加到数组
			$bgs.push($bg);
		}

		// 主循环
		$bgs[pos].classList.add('visible');
		$bgs[pos].classList.add('top');

		// 如果只有一张图片或浏览器不支持transition，则退出
		if ($bgs.length == 1)
			return;

		window.setInterval(function() {
			lastPos = pos;
			pos++;

			// 如果到达末尾，返回开始
			if (pos >= $bgs.length)
				pos = 0;

			// 切换顶部图片
			$bgs[lastPos].classList.remove('top');
			$bgs[pos].classList.add('visible');
			$bgs[pos].classList.add('top');

			// 短暂延迟后隐藏上一张图片
			window.setTimeout(function() {
				$bgs[lastPos].classList.remove('visible');
			}, settings.delay / 2);

		}, settings.delay);
	})();
})(); 