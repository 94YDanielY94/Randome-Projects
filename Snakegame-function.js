// ------Under development--------
const gamecontainer = document.getElementById("container");
const snakehade = document.getElementById("snakehade");
const Snakefood = document.getElementById("Snakfood");
const snaketile1 = document.getElementById("snaketile1");
const scorediplay = document.getElementById("score");
const moveamount = 10;

let x = 10;
let y = 0;
let xpositionarray = [];
let ypositionarray = [];
let tilearray = [];
let poschackearray = [];
let Snakefoodx;
let Snakefoody;
let moveupid = null;
let movedownid = null;
let moveleftid = null;
let moverightid = null;
let up, down, right, left;
let speed = 100;
let tilecounter = 1;
let privkey;
let newkey;
let score = 0;

snakehade.style.top = `${y}px`;
snakehade.style.left = `${x}px`;

Snakefood.style.top = `${Randomreturn()}px`;
Snakefood.style.left = `${Randomreturn()}px`;

var numb = Snakefood.style.left.match(/\d/g);
Snakefoodx = numb.join("");
var numb = Snakefood.style.top.match(/\d/g);
Snakefoody = numb.join("");

function Randomreturn(tile) {
	let array = [];
	for (let index = 1; index < 41; index++) {
		let seq = 10 * (index - 1);
		array.push(seq);
	}
	let randompos = array[Math.floor(Math.random() * 40)];
	if (document.querySelectorAll(".newtile").length >= 1) {
		poschackearray.push(tile)
		poschackearray.forEach((element) => {
			console.log(element.style.top);
		});
		
	}
	
	// if (document.querySelectorAll(".newtile").length >= 1) {
	// 	let taliposes = document.querySelectorAll(".newtile");
	// 	console.log(taliposes);
		// taliposes.forEach(element => {
		// 	var numb = element.style.left.match(/\d/g);
		// 	let elementy = numb.join("");
		// 	var numb = element.style.top.match(/\d/g);
		// 	let elementx = numb.join("");
		// console.log(elementx);

		// if (Number(elementx) === randompos || Number(elementy) === randompos) {
		// 	console.log('ok');
		// 	console.log(`${randompos},${elementx},${elementy}`);
		// }
		// });
	// }
	return randompos;
}

document.addEventListener("keydown", (event) => {
	if (event.key.startsWith("Arrow")) {
		event.preventDefault();
		Colusion();
		switch (event.key) {
			case "ArrowUp":
				newkey = event.key;
				if (privkey == newkey || privkey == "ArrowDown") {
				} else {
					moveupid = setInterval(() => {
						y -= moveamount;
						Colusion();
						assign();
						xpositionarray.push(x);
						ypositionarray.push(y);
					}, speed);
					clearInterval(movedownid);
					clearInterval(moveleftid);
					clearInterval(moverightid);
				}
				break;
			case "ArrowDown":
				newkey = event.key;
				if (privkey == newkey || privkey == "ArrowUp") {
				} else {
					movedownid = setInterval(() => {
						y += moveamount;
						Colusion();
						assign();
						xpositionarray.push(x);
						ypositionarray.push(y);
					}, speed);
					clearInterval(moveupid);
					clearInterval(moveleftid);
					clearInterval(moverightid);
				}
				break;
			case "ArrowRight":
				newkey = event.key;
				if (privkey == newkey || privkey == "ArrowLeft") {
				} else {
					moveleftid = setInterval(() => {
						x += moveamount;
						Colusion();
						assign();
						xpositionarray.push(x);
						ypositionarray.push(y);
					}, speed);
					clearInterval(moveupid);
					clearInterval(moverightid);
					clearInterval(movedownid);
				}
				break;
			case "ArrowLeft":
				newkey = event.key;
				if (privkey == newkey || privkey == "ArrowRight") {
				} else {
					moverightid = setInterval(() => {
						x -= moveamount;
						Colusion();
						assign();
						xpositionarray.push(x);
						ypositionarray.push(y);
					}, speed);
					clearInterval(moveleftid);
					clearInterval(moveupid);
					clearInterval(movedownid);
				}
				break;
		}
		privkey = event.key;
	}
});
function assign(tile) {
	snakehade.style.top = `${y}px`;
	snakehade.style.left = `${x}px`;
	snaketile1.style.top = `${ypositionarray[ypositionarray.length - 1]}px`;
	snaketile1.style.left = `${xpositionarray[xpositionarray.length - 1]}px`;
	tilearray.push(tile);
	tilearray.forEach((element) => {
		if (element !== undefined) {
			element.style.left = `${
				xpositionarray[
					xpositionarray.length - element.attributes.value.textContent
				]
			}px`;
			element.style.top = `${
				ypositionarray[
					ypositionarray.length - element.attributes.value.textContent
				]
			}px`;
		}
	});
}

function Colusion() {
	if (x >= 400 || x < 0 || y >= 400 || y < 0) {
		x = 10;
		y = 0;
		privkey = null;
		newkey = null;
		xpositionarray = [];
		ypositionarray = [];
		tilearray = [];
		poschackearray = [];
		clearInterval(moveleftid);
		clearInterval(moveupid);
		clearInterval(movedownid);
		clearInterval(moverightid);
		Snakefood.style.top = `${Randomreturn()}px`;
		Snakefood.style.left = `${Randomreturn()}px`;
		snaketile1.style.top = 0;
		snaketile1.style.left = 0;
		numb = Snakefood.style.left.match(/\d/g);
		Snakefoodx = numb.join("");
		numb = Snakefood.style.top.match(/\d/g);
		Snakefoody = numb.join("");
		score = 0;
		tilecounter = 1;
		scorediplay.textContent = `score: ${score}`;

		if (document.querySelectorAll(".newtile").length >= 1) {
			let removetile = document.querySelectorAll(".newtile");
			removetile.forEach((element) => {
				element.remove();
			});
		}
	}

	if (x == Snakefoodx && y == Snakefoody) {
		addandassigntile();
		score++;
		scorediplay.textContent = `score: ${score}`;
	}
}
function addandassigntile() {
	const tile = document.createElement("div");
	tile.classList.add("newtile");
	gamecontainer.appendChild(tile);
	tilecounter++;
	tile.setAttribute("value", tilecounter);
	assign(tile);
	Snakefood.style.top = `${Randomreturn(tile)}px`;
	Snakefood.style.left = `${Randomreturn(tile)}px`;
	numb = Snakefood.style.left.match(/\d/g);
	Snakefoodx = numb.join("");
	numb = Snakefood.style.top.match(/\d/g);
	Snakefoody = numb.join("");
}
