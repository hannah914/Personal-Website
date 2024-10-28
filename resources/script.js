// Toggle menu icon and navbar visibility
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Close navbar when a link is clicked
let navItems = document.querySelectorAll('.navbar a');

menu.onclick = () => {
    menu.classList.toggle('bx-x'); // Change icon
    navbar.classList.toggle('open'); // Show/hide navbar
};

navItems.forEach(item => {
    item.onclick = () => {
        menu.classList.remove('bx-x'); // Reset icon
        navbar.classList.remove('open'); // Close navbar
    };
});