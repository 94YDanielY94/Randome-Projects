// ------Under development--------			
const shankehade = document.getElementById('shankehade');
const moveamount = 10;
let x = 0;
let y = 0;

// function start() {
//     const chacker = setInterval(moving,1000)
// }
document.addEventListener('keydown',event => {
    if(event.key.startsWith('Arrow')){

        event.preventDefault();
       
        switch(event.key){
            case "ArrowUp":
                const up = setInterval(() => {
                    y -= moveamount;
                    Colusion(up)
                    moving();
                }, 300)
                // clearInterval(down);
                // clearInterval(right);
                // clearInterval(left);
              
                break;
            case "ArrowDown":
                    y += moveamount;
                break;
            case "ArrowRight":
                const right = setInterval(() => {
                    x += moveamount;
                    Colusion(right)
                    moving();
                    // clearInterval(up);
                    clearInterval(down);
                    clearInterval(left);
                },300)
              
                break;
            case "ArrowLeft":
                const left = setInterval(() => {
                    x -= moveamount;
                    Colusion(left)
                    moving();
                    // clearInterval(up);
                    clearInterval(right);
                    clearInterval(down);
                },300)
                break;
        }
              
    }
    });
function moving() {
shankehade.style.top = `${y}px`
shankehade.style.left = `${x}px`     
}
function move(Arrow) {
    const Arroww = setInterval(() => {
        Colusion(Arroww)
        moving();
    },300)
}
function Colusion(up, down, right, left) {
    if ((x >= 400 || x < 0) || (y >= 400 || y < 0)) {
        shankehade.style.top = 0;
        shankehade.style.left = 0;
        clearInterval(up);
        clearInterval(down);
        clearInterval(right);
        clearInterval(left);
        x = 0;
        y = 0;
    }
}