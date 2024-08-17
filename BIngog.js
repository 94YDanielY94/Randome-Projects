const boxs = document.querySelectorAll("#box");
let array = [];
for (let index = 1; index <= 25; index++) {
	array.push(index);
}
function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const randome = Math.floor(Math.random() * (i + 1));

		[array[i], array[randome]] = [array[randome], array[i]];
	}
}
shuffle(array);
boxs.forEach((box) => {
	box.textContent = array[box.attributes.value.textContent];
	box.onclick = function () {
		box.style.backgroundColor = "rgba(20,200,20,.3)";
		box.style.color = "white";
	};
});
