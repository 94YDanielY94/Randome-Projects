// ------Under development--------
const shankehade = document.getElementById("shankehade");
const moveamount = 10;
let x = 0;
let y = 0;
let curentx = x;
let curenty = y;
let moveupid = null;
let movedownid = null;
let moveleftid = null;
let moverightid = null;
let up, down, right, left;
let speed = 100;
let privkey;
document.addEventListener("keydown", (event) => {
	if (event.key.startsWith("Arrow")) {
		event.preventDefault();

		switch (event.key) {
			case "ArrowUp":
				move((up = 1), (down = 0), (right = 0), (left = 0));
				break;
			case "ArrowDown":
				move((up = 0), (down = 1), (right = 0), (left = 0));
				break;
			case "ArrowRight":
				move((up = 0), (down = 0), (right = 1), (left = 0));
				break;
			case "ArrowLeft":
				move((up = 0), (down = 0), (right = 0), (left = 1));
				break;
		}

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
	shankehade.style.top = `${y}px`;
	shankehade.style.left = `${x}px`;
}

function Colusion() {
	if (x >= 400 || x < 0 || y >= 400 || y < 0) {
		shankehade.style.top = 0;
		shankehade.style.left = 0;
		x = 0;
		y = 0;
        clearInterval(moveleftid);
		clearInterval(moveupid);
		clearInterval(movedownid);
        clearInterval(moverightid);

	}
}
