// ------Under development--------
const shankehade = document.getElementById("shankehade");
const Shankfood = document.getElementById("Shankfood");
const scorediplay = document.getElementById("score");
const moveamount = 20;

let x = 0;
let y = 0;
let Shankfoodx;
let Shankfoody;
let moveupid = null;
let movedownid = null;
let moveleftid = null;
let moverightid = null;
let up, down, right, left;
let speed = 100;
let privkey;
let newkey;
let score = 0;

Shankfood.style.top = `${Randomreturn()}px`;
Shankfood.style.left = `${Randomreturn()}px`;

var numb = Shankfood.style.left.match(/\d/g);
Shankfoodx = numb.join("");
var numb = Shankfood.style.top.match(/\d/g);
Shankfoody = numb.join("");

function Randomreturn() {
	let array = [];
	for (let index = 1; index < 21; index++) {
		let seq = 20 * (index - 1);
		array.push(seq);
	}
	return array[Math.floor(Math.random() * 20)];
}

document.addEventListener("keydown", (event) => {
	if (event.key.startsWith("Arrow")) {
		event.preventDefault();

		switch (event.key) {
			case "ArrowUp":
				newkey = event.key;
				if (privkey == newkey || privkey == "ArrowDown") {
				} else {
					move((up = 1), (down = 0), (right = 0), (left = 0));
				}
				break;
			case "ArrowDown":
				newkey = event.key;
				if (privkey == newkey || privkey == "ArrowUp") {
				} else {
					move((up = 0), (down = 1), (right = 0), (left = 0));
				}
				break;
			case "ArrowRight":
				newkey = event.key;
				if (privkey == newkey || privkey == "ArrowLeft") {
				} else {
					move((up = 0), (down = 0), (right = 1), (left = 0));
				}
				break;
			case "ArrowLeft":
				newkey = event.key;
				if (privkey == newkey || privkey == "ArrowRight") {
				} else {
					move((up = 0), (down = 0), (right = 0), (left = 1));
				}
				break;
		}
		privkey = event.key;

		Colusion();
	}
});
function move(up, down, left, right) {
	if (up === 1) {
		moveupid = setInterval(() => {
			y -= moveamount;

			Colusion();
			assign();
		}, speed);
		clearInterval(movedownid);
		clearInterval(moveleftid);
		clearInterval(moverightid);
	} else if (down === 1) {
		movedownid = setInterval(() => {
			y += moveamount;

			Colusion();
			assign();
		}, speed);
		clearInterval(moveupid);
		clearInterval(moveleftid);
		clearInterval(moverightid);
	} else if (left === 1) {
		moveleftid = setInterval(() => {
			x += moveamount;

			Colusion();
			assign();
		}, speed);
		clearInterval(moveupid);
		clearInterval(moverightid);
		clearInterval(movedownid);
	} else if (right === 1) {
		moverightid = setInterval(() => {
			x -= moveamount;

			Colusion();
			assign();
		}, speed);
		clearInterval(moveleftid);
		clearInterval(moveupid);
		clearInterval(movedownid);
	}
}
function assign() {
	shankehade.style.transition = "0.05s";
	shankehade.style.top = `${y}px`;
	shankehade.style.left = `${x}px`;
}

function Colusion() {
	if (x >= 400 || x < 0 || y >= 400 || y < 0) {
		x = 0;
		y = 0;
		clearInterval(moveleftid);
		clearInterval(moveupid);
		clearInterval(movedownid);
		clearInterval(moverightid);
		Shankfood.style.top = `${Randomreturn()}px`;
		Shankfood.style.left = `${Randomreturn()}px`;
		numb = Shankfood.style.left.match(/\d/g);
		Shankfoodx = numb.join("");
		numb = Shankfood.style.top.match(/\d/g);
		Shankfoody = numb.join("");
		score = 0;
		scorediplay.textContent = `score: ${score}`;
	}

	if (x == Shankfoodx && y == Shankfoody) {
		Shankfood.style.top = `${Randomreturn()}px`;
		Shankfood.style.left = `${Randomreturn()}px`;
		numb = Shankfood.style.left.match(/\d/g);
		Shankfoodx = numb.join("");
		numb = Shankfood.style.top.match(/\d/g);
		Shankfoody = numb.join("");
		score++;
		scorediplay.textContent = `score: ${score}`;
	}
}
