const body = document.body;
const btn = document.querySelector(".btn");
const colorList = ["red", "purple", "yellow", "pink","blue"];

btn.addEventListener("click", changeBackground);

function changeBackground() {
	body.style.background = colorList[Math.floor(Math.random() * colorList.length)];
}