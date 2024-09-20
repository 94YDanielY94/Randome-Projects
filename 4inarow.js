const containerContainer = document.getElementById("container-container");
const posObject = {
	1: [1, 2, 3, 4, 5, 6, 7],
	2: [1, 2, 3, 4, 5, 6, 7],
	3: [1, 2, 3, 4, 5, 6, 7],
	4: [1, 2, 3, 4, 5, 6, 7],
	5: [1, 2, 3, 4, 5, 6, 7],
	6: [1, 2, 3, 4, 5, 6, 7],
};
const posContainerDiv = [];
for (let index = 0; index < 42; index++) {
	let div = document.createElement("div");
	div.className = "container";
	div.setAttribute('data', '0');
	posContainerDiv.push(div);
}
let row = 1;
let colmen = 1;
posContainerDiv.forEach((div) => {
	div.setAttribute("value", `${colmen}${posObject[colmen][row - 1]}`);
	containerContainer.appendChild(div);
	row++;
	if (row > 7) {
		row = 1;
		colmen++;
	}
	if (colmen > 6) {
		colmen = 1;
	}
});

let objectPaddingSpace = 1;
let objectDropSpace = 0;
let posState = 1;
let idseter = 1;
let childIterator = 0;
posContainerDiv.forEach((div) => {
	if (div.attributes.value.textContent.split("").pop().match(/1/)) {
		div.style.backgroundColor = "#542808";
	}
});
document.addEventListener("keydown", (event) => {
	if (event.key == "ArrowRight") {
		if (objectPaddingSpace !== 7) {
			objectPaddingSpace++;
			objectDropSpace += 59;
			document.getElementById(
				"objectmove"
			).style.marginLeft = `calc(${objectDropSpace}px + ${objectPaddingSpace}rem)`;
			posState++;
		}
	}
	if (event.key == "ArrowLeft") {
		if (objectPaddingSpace !== 1) {
			objectPaddingSpace--;
			objectDropSpace -= 59;
			document.getElementById(
				"objectmove"
			).style.marginLeft = `calc(${objectDropSpace}px + ${objectPaddingSpace}rem)`;
			posState--;
		}
	}
	posContainerDiv.forEach((div) => {
		div.style.backgroundColor = "#d2691e";
	});
	switch (posState) {
		case 1:
			posContainerDiv.forEach((div) => {
				if (div.attributes.value.textContent.split("").pop().match(/1/)) {
					div.style.backgroundColor = "#542808";
				}
			});
			break;
		case 2:
			posContainerDiv.forEach((div) => {
				if (div.attributes.value.textContent.split("").pop().match(/2/)) {
					div.style.backgroundColor = "#542808";
				}
			});
			break;
		case 3:
			posContainerDiv.forEach((div) => {
				if (div.attributes.value.textContent.split("").pop().match(/3/)) {
					div.style.backgroundColor = "#542808";
				}
			});
			break;
		case 4:
			posContainerDiv.forEach((div) => {
				if (div.attributes.value.textContent.split("").pop().match(/4/)) {
					div.style.backgroundColor = "#542808";
				}
			});
			break;
		case 5:
			posContainerDiv.forEach((div) => {
				if (div.attributes.value.textContent.split("").pop().match(/5/)) {
					div.style.backgroundColor = "#542808";
				}
			});
			break;
		case 6:
			posContainerDiv.forEach((div) => {
				if (div.attributes.value.textContent.split("").pop().match(/6/)) {
					div.style.backgroundColor = "#542808";
				}
			});
			break;
		case 7:
			posContainerDiv.forEach((div) => {
				if (div.attributes.value.textContent.split("").pop().match(/7/)) {
					div.style.backgroundColor = "#542808";
				}
			});
			break;
	}
	if (event.key == "Enter") {
		let childlengthReturn = []
		const o = document.getElementById("objectmove");
		console.log(o);
		
		switch (posState) {
			case 1:
				childlengthReturn = [];
				posContainerDiv.forEach((div) => {
					if (div.attributes.value.textContent.split("").pop().match(/1/)) {
						if (div.childElementCount) {
							childlengthReturn.push(div.childElementCount);							
							childIterator = childlengthReturn.length;
						}
					}
				});
				break;
			case 2:
				childlengthReturn = [];
				posContainerDiv.forEach((div) => {
					if (div.attributes.value.textContent.split("").pop().match(/2/)) {
						if (div.childElementCount) {
							childlengthReturn.push(div.childElementCount);							
							childIterator = childlengthReturn.length;
						}
					}
				});
				break;
			case 3:
				childlengthReturn = [];
				posContainerDiv.forEach((div) => {
					if (div.attributes.value.textContent.split("").pop().match(/3/)) {
						if (div.childElementCount) {
							childlengthReturn.push(div.childElementCount);							
							childIterator = childlengthReturn.length;
						}
					}
				});
				break;
			case 4:
				childlengthReturn = [];
				posContainerDiv.forEach((div) => {
					if (div.attributes.value.textContent.split("").pop().match(/4/)) {
						if (div.childElementCount) {
							childlengthReturn.push(div.childElementCount);							
							childIterator = childlengthReturn.length;
						}
					}
				});
				break;
			case 5:
				childlengthReturn = [];
				posContainerDiv.forEach((div) => {
					if (div.attributes.value.textContent.split("").pop().match(/5/)) {
						if (div.childElementCount) {
							childlengthReturn.push(div.childElementCount);							
							childIterator = childlengthReturn.length;
						}
					}
				});
				break;
			case 6:
				childlengthReturn = [];
				posContainerDiv.forEach((div) => {
					if (div.attributes.value.textContent.split("").pop().match(/6/)) {
						if (div.childElementCount) {
							childlengthReturn.push(div.childElementCount);							
							childIterator = childlengthReturn.length;
						}
					}
				});
				break;
			case 7:
				childlengthReturn = [];
				posContainerDiv.forEach((div) => {
					if (div.attributes.value.textContent.split("").pop().match(/7/)) {
						if (div.childElementCount) {
							childlengthReturn.push(div.childElementCount);							
							childIterator = childlengthReturn.length;
						}
					}
				});
				break;
		}
		if (childIterator < 6) {
			o.style.animation = `step${6 - childIterator} .5s  linear forwards`;
			setTimeout(() => {
				o.id = `a${idseter}`;
				
				const a = document.getElementById(`a${idseter}`);
				idseter++;
				a.style.animation = "";
				a.style.marginLeft = "";

				posContainerDiv.forEach((div) => {
					div.style.backgroundColor = "#d2691e";
					if (
						div.attributes.value.textContent == `${6 - childIterator}${posState}`
					) {
						div.appendChild(a);
						
						if (a.style.backgroundColor == 'tomato') {
							div.attributes.data.textContent = 1
						} else if(a.style.backgroundColor == 'teal') {
							div.attributes.data.textContent = 2
						}
					}
				});
				Fourinarowchaker();
				createObject();
			}, 500);
		}
	}
});
let colorSwich = 1;
function createObject() {
	childIterator = 0
	objectPaddingSpace = 1;
	objectDropSpace = 0;
	posState = 1;
	const obj = document.createElement("div");
	if (colorSwich == 1) {
		obj.style.backgroundColor = "teal";
		colorSwich = 2;
	} else {
		obj.style.backgroundColor = "tomato";
		colorSwich = 1;
	}
	obj.setAttribute("id", "objectmove");
	document.getElementById("gamecontainer").appendChild(obj);
	posContainerDiv.forEach((div) => {
		if (div.attributes.value.textContent.split("").pop().match(/1/)) {
			div.style.backgroundColor = "#542808";
		}
	});	
}
function checkForFourInARow() {
    for (let r = 0; r < 5; r++) {
        for (let c = 0; c <= 7 - 4; c++) {
            if (grid[r][c] === grid[r][c + 1] && grid[r][c] === grid[r][c + 2] && grid[r][c] === grid[r][c + 3] && grid[r][c] !== 0) {
                console.log(`Horizontal four in a row found at row ${r}, starting column ${c}`);
            }
        }
    }
}