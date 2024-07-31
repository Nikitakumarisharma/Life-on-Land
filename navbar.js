document.addEventListener('DOMContentLoaded', function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;

            const menuToggle = document.getElementById('menu-toggle');
            const mobileMenu = document.getElementById('mobile-menu');

            if (menuToggle && mobileMenu) {
                menuToggle.addEventListener('click', () => {
                    mobileMenu.classList.toggle('hidden');
                });
            }
        })
        .catch(error => console.error('Error loading navbar:', error));
});
