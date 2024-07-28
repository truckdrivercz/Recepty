document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('show');
});

document.getElementById('close-menu').addEventListener('click', function() {
    document.getElementById('nav-links').classList.remove('show');
});
