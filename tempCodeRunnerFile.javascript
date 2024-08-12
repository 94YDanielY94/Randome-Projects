let ok = true
let setin = setInterval(() => {
    if (ok) {
            console.log('ok');
    }
    NO()
}, 1000)
function NO() {
    ok = false
}