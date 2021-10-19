// Add event listener to each element.
let accordion_menu = document.getElementsByClassName("faq-list");

for (i = 0; i < accordion_menu.length; i++) {
    accordion_menu[i].addEventListener('click', animateAccordionMenu);
}

function animateAccordionMenu(e) {
    let plus_sign = e.target.children[0];
    let drop_down = this.nextElementSibling;

    if (drop_down.style.display === 'flex') {
        drop_down.style.display = 'none'
        changePlusSign(plus_sign);
    } else {
        // Iterate over every drop down in the accordion menu.
        // Change display to none on all of them.
        for (i = 0; i < accordion_menu.length; i++) {
            accordion_menu[i].nextElementSibling.style.display = 'none';
        }
        drop_down.style.display = 'flex';
        changePlusSign(plus_sign);
    }
}

function changePlusSign(e) {
    e.style.transform = 'rotate(45deg)';
}
