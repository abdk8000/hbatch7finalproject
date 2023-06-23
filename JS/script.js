window.addEventListener('scroll', function () {
    var icon = document.querySelector('.fixed-icon');
    if (window.scrollY > 50) {
        icon.classList.add('show');
    } else {
        icon.classList.remove('show');
    }
});