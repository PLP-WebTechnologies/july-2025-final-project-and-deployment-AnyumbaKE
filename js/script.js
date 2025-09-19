document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('year').textContent = new Date().getFullYear();

    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    menuToggle.addEventListener('click', () => {
        const hidden = mobileNav.hidden;
        mobileNav.hidden = !hidden;
        menuToggle.setAttribute('aria-expanded', String(!hidden));
    });

    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileNav.hidden = true));
    
});