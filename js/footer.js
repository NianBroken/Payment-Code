/*
Program name: Payment Code
Author: NianBroken
Website: https://www.nianbroken.top/
Gmail: suinian666@gmail.com
Time: 2023.06.06
*/
document.addEventListener("DOMContentLoaded", function () {
	// 选择容器元素和所有二维码元素
	var container = document.querySelector(".container");
	var qrCodes = document.querySelectorAll(".qrcode");

	// 创建页脚元素并添加类名
	var footer = document.createElement("div");
	footer.classList.add("footer");

	// 创建第一行页脚元素并设置文本内容、字体大小和颜色
	var line1 = document.createElement("div");
	line1.textContent = "若无法直接付款 请截图保存后再扫描二维码";
	line1.style.fontSize = "16px"; // 设置初始的第一行页脚的字体大小
	line1.style.color = "#000000"; // 设置第一行页脚的字体颜色
	footer.appendChild(line1);

	// 创建第二行页脚元素并设置文本内容、字体大小和颜色
	var line2 = document.createElement("div");
	line2.textContent = "USDT:TDieuomyJMeN7tK5XwP1nhykw5dDiDLZ4n";
	line2.style.fontSize = "14px"; // 设置初始的第二行页脚的字体大小
	line2.style.color = "#666666"; // 设置第二行页脚的字体颜色
	line2.style.cursor = "pointer"; // 设置鼠标样式为指针
	footer.appendChild(line2);

	// 创建复制成功提示元素并设置初始隐藏状态
	var copySuccess = document.createElement("div");
	copySuccess.textContent = "复制成功";
	copySuccess.style.display = "none"; // 初始隐藏复制成功提示
	footer.appendChild(copySuccess);

	// 将页脚元素添加到容器中
	container.appendChild(footer);

	// 强制显示页脚
	footer.style.display = "block";

	// 更新页脚字体大小的函数
	var updateFooterFontSize = function () {
		// 获取容器的宽度
		var containerWidth = container.offsetWidth;
		var fontSize;

		// 根据容器宽度设置页脚字体大小
		if (containerWidth <= 348) {
			fontSize = "12px";
		} else if (containerWidth <= 355) {
			fontSize = "12px";
		} else if (containerWidth <= 360) {
			fontSize = "12px";
		} else if (containerWidth <= 386) {
			fontSize = "14px";
		} else if (containerWidth <= 464) {
			fontSize = "18px";
		} else if (containerWidth <= 570) {
			fontSize = "20px";
		} else if (containerWidth <= 610) {
			fontSize = "20px";
		} else {
			fontSize = "22px";
		}

		// 根据页脚字体大小设置第一行和第二行的字体大小
		line1.style.fontSize = fontSize;
		line2.style.fontSize = parseInt(fontSize) - 3 + "px";
	};

	// 初始化页脚字体大小
	updateFooterFontSize();

	// 监听窗口调整大小事件，更新页脚字体大小
	window.addEventListener("resize", updateFooterFontSize);

	// 复制第二行页脚内容的函数
	line2.addEventListener("click", function () {
		var textToCopy = line2.textContent;
		var copyTextArea = document.createElement("textarea");
		copyTextArea.value = textToCopy;
		copyTextArea.style.position = "fixed";
		copyTextArea.style.opacity = 0;
		document.body.appendChild(copyTextArea);
		copyTextArea.select();
		document.execCommand("copy");
		document.body.removeChild(copyTextArea);
		copySuccess.style.display = "block"; // 显示复制成功提示
		setTimeout(function () {
			copySuccess.style.display = "none"; // 1秒后隐藏复制成功提示
		}, 1000);
	});
});
