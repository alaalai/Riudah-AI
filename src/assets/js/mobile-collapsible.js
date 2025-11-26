/**
 * Mobile Collapsible
 * Turns long sections into accordions on mobile to save space.
 */

document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth < 768) {
        const collapsibles = document.querySelectorAll('.mobile-collapsible');

        collapsibles.forEach(section => {
            const header = section.querySelector('.collapsible-header');
            const content = section.querySelector('.collapsible-content');

            if (header && content) {
                // Initial state: collapsed
                content.style.display = 'none';

                header.addEventListener('click', () => {
                    const isOpen = content.style.display === 'block';
                    content.style.display = isOpen ? 'none' : 'block';
                    header.classList.toggle('active', !isOpen);
                });
            }
        });
    }
});
