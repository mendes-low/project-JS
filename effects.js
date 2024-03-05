const selectLocation = document.querySelector('.select-location');
const navbar = document.querySelectorAll('.header-top_navbar li');
const catologe = document.querySelector('.catologe');
const actionItems = document.querySelectorAll('.actions-item');
const hoverButton = document.querySelectorAll('#hoverEffect');
const footerItem = document.querySelectorAll('.footer-bottom_right-item p');

// seleciton location
selectLocation.addEventListener('mouseenter', () => {
    selectLocation.style.color = 'hsla(224, 10%, 21%, 1)';
    selectLocation.style.cursor = 'pointer';
});
selectLocation.addEventListener('mouseleave', () => {
    selectLocation.style.color = 'hsla(220, 5%, 38%, 1)';
})

// navbar
navbar.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.color = 'hsla(224, 10%, 21%, 1)';
        item.style.cursor = 'pointer';
    });
    item.addEventListener('mouseleave', () => {
        item.style.color = 'hsla(220, 5%, 38%, 1)';
    });
});

// catologe
catologe.addEventListener('mouseenter', () => {
    catologe.style.backgroundColor = 'hsla(224, 10%, 21%, 1)';
    catologe.style.color = 'hsla(0, 0%, 100%, 1)'
    catologe.style.cursor = 'pointer';
});
catologe.addEventListener('mouseleave', () => {
    catologe.style.backgroundColor = 'hsla(55, 97%, 62%, 1)';
    catologe.style.color = 'hsla(222, 22%, 12%, 1)';
});

// action-items
actionItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.color = 'hsla(224, 10%, 21%, 1)';
        item.style.cursor = 'pointer';
    });
    item.addEventListener('mouseleave', () => {
        item.style.color = 'hsla(220, 5%, 38%, 1)';
    });
})

// hover-buttom
hoverButton.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = 'hsla(224, 10%, 21%, 1)';
        item.style.color = 'hsla(0, 0%, 100%, 1)';
        item.style.cursor = 'pointer';
    });
    item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = 'transparent';
        item.style.color = 'hsla(222, 22%, 12%, 1)';
    });
});

// footer
// footerItem.forEach(item => {
//     item.addEventListener('mouseenter', () => {
//         item.innerHTML = '<ion-icon name="arrow-forward-outline"></ion-icon>';
//         item.style.cursor = 'pointer';
//     });
//     item.addEventListener('mouseleave', () => {
//         item.style.color = 'red'
//     });
// });


