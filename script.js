document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');
    const galleryItems = document.querySelectorAll('.gallery-item img');

    // Open lightbox
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const fullImageUrl = item.getAttribute('data-full');
            lightboxImg.src = fullImageUrl;
            lightbox.classList.add('active');
        });
    });

    // Close lightbox
    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });

    // Close lightbox with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
        }
    });
});