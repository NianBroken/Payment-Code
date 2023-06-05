/*
Program name: Payment Code
Author: NianBroken
Website: https://www.nianbroken.top/
Gmail: suinian666@gmail.com
Time: 2023.06.06
*/
document.addEventListener("DOMContentLoaded", function () {
	// 创建用于显示 container.offsetWidth 的元素
	var offsetWidthDisplay = document.createElement("div"); // 创建一个 div 元素作为显示容器的宽度
	offsetWidthDisplay.textContent = "Container Offset Width: "; // 设置显示容器的初始文本内容
	offsetWidthDisplay.style.position = "fixed"; // 设置显示容器的定位为固定定位
	offsetWidthDisplay.style.bottom = "0"; // 设置显示容器距离底部的位置为 0
	offsetWidthDisplay.style.right = "0"; // 设置显示容器距离右侧的位置为 0
	offsetWidthDisplay.style.background = "#ffffff"; // 设置显示容器的背景颜色为白色
	offsetWidthDisplay.style.padding = "10px"; // 设置显示容器的内边距为 10px
	offsetWidthDisplay.style.fontSize = "16px"; // 设置显示容器的字体大小为 16px

	// 控制显示或隐藏
	function toggleOffsetWidthDisplay(show) {
		if (show) {
			document.body.appendChild(offsetWidthDisplay); // 将显示容器添加到页面中
		} else {
			document.body.removeChild(offsetWidthDisplay); // 从页面中移除显示容器
		}
	}

	// 更新 container.offsetWidth 的显示值
	function updateOffsetWidth(container) {
		offsetWidthDisplay.textContent = "Container Offset Width: " + container.offsetWidth + "px"; // 更新显示容器的文本内容为 container 的宽度
	}

	// 创建 ResizeObserver 实例
	var resizeObserver = new ResizeObserver(function (entries) {
		entries.forEach(function (entry) {
			var container = entry.target; // 获取 ResizeObserver 监听的目标元素
			updateOffsetWidth(container); // 更新容器宽度的显示值
		});
	});

	// 监听页面加载完成事件，获取 container.offsetWidth 的初始值
	window.addEventListener("load", function () {
		var container = document.querySelector(".container"); // 获取包含容器的元素
		updateOffsetWidth(container); // 获取初始的容器宽度值

		// 监听 container 元素的大小变化
		resizeObserver.observe(container);
	});

	// 示例：通过设置 showOffsetWidth 来切换显示状态
	var showOffsetWidth = true; // 控制是否显示容器宽度的标志(仅在开发阶段才需要开启)
	toggleOffsetWidthDisplay(showOffsetWidth); // 根据标志切换显示或隐藏
});
