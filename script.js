// *************** Active Menu ******************

document.addEventListener("DOMContentLoaded", function() {
    var currentURL = window.location.href;

    document.querySelectorAll('nav a').forEach(function(link) {
        if (link.href === currentURL) {
            link.classList.add('active');
        }
    });
});

// ****************** Hamburger Menu **********************

document.getElementById('menu-icon').addEventListener('click',      function () {
    var nav = document.querySelector('nav');
    nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
});