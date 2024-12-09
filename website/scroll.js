window.addEventListener('scroll', function() {
    const aboutSection = document.getElementById('about');
    if (window.scrollY > 50) {
        aboutSection.classList.add('scrolled');
    } else {
        aboutSection.classList.remove('scrolled');
    }
});
