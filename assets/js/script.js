var smallGlasses = document.querySelectorAll('.mini-glass');
var liters = document.getElementById('litres');
var percentage = document.getElementById('percentage');
var remained = document.getElementById('remain');

smallGlasses.forEach((glass, idx) => {
    glass.addEventListener('click', () => focusGlass(idx));
})

function focusGlass(idx){
    if(smallGlasses[idx].classList.contains('full')) {
        idx--
    }

    smallGlasses.forEach((glass, idx2) => {
        if(idx2 <= idx) {
            glass.classList.add('full');
        } else {
            glass.classList.remove('full');
        }
    })

    fillBigCup()    
}

function fillBigCup() {
    const fullCups = document.querySelectorAll('.mini-glass.full').length
    const totalCups = smallGlasses.length

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}






















