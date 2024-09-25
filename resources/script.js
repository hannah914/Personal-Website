let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navItems = document.querySelectorAll('.navbar a'); // Adjust the selector based on your HTML

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

navItems.forEach(item => {
    item.onclick = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('open');
    };
});