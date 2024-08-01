const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
const popoverButton = document.getElementById('popoverButton');
const popover = document.getElementById('popover');

// popoverButton.addEventListener('click', () => {
//     popover.style.display = popover.style.display === 'block' ? 'none' : 'block';
// });