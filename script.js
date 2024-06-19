document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector('nav ul');
    const menuToggle = document.querySelector('.menu-toggle');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('open');
    });
});
