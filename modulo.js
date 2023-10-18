import { holaAuxiliar } from "./auxiliar.js"

const divs = document.querySelectorAll('.hidden-div');

function checkDivVisibility() {
    divs.forEach((div) => {
        console.log("DIVS",div)
        const divTop = div.getBoundingClientRect().top;
        const divBottom = div.getBoundingClientRect().bottom;

        if (divTop < window.innerHeight && divBottom >= 0) {
            if(div.classList.contains('hidden-div'))
                div.classList.remove('hidden-div');
            
            div.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkDivVisibility);

