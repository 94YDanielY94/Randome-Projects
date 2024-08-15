const boxs = document.querySelectorAll('#box');
const starter = {
    X: ['X', "O", "X", "O", "X", "O", "X", "O", "X"],
    O:["O", "X", "O", "X", "O", "X", "O", "X", 'O']
}
let counter = 0;
boxs.forEach(element => {
    element.addEventListener('click', () => {
        if (document.body.style.backgroundColor == 'rgb(255, 141, 141)') {
            document.body.style.backgroundColor = 'rgb(141, 164, 255)'
        } else {
            document.body.style.backgroundColor = 'rgb(255, 141, 141)'
        }
        element.textContent = starter.X[counter];
        if (counter == starter.X.length) {
           boxs.forEach(element => {
               element.textContent = '';
           });
            counter = 0;
        } else {
            counter++;
        }        
    })
});