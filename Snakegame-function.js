// ------Under development--------			
const shankehade = document.getElementById('shankehade');
const moveamount = 10;
let x = 0;
let y = 0;
 x += moveamount;
        y = 0;
document.addEventListener('keydown',event => {
    if(event.key.startsWith('Arrow')){

        event.preventDefault();
       
        switch(event.key){
            case "ArrowUp":
                y -= moveamount;
                break;
            case "ArrowDown":
                y += moveamount;
                break;
            case "ArrowRight":
                x += moveamount;
                break;
            case "ArrowLeft":
                x -= moveamount;
                break;
        }
              
    }
});
shankehade.style.top = `${y}px`
shankehade.style.left = `${x}px` 