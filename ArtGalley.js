document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;

    // Open the lightbox when an image is clicked
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            lightbox.classList.add('visible');
            lightboxImg.src = item.src;
            currentIndex = index;
        });
    });

    // Close the lightbox
    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('visible');
    });

    // Navigate to the previous image
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        lightboxImg.src = galleryItems[currentIndex].src;
    });

    // Navigate to the next image
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        lightboxImg.src = galleryItems[currentIndex].src;
    });

    // Close lightbox with the Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            lightbox.classList.remove('visible');
        }
        if (event.key === 'ArrowLeft') {
            prevBtn.click();
        }
        if (event.key === 'ArrowRight') {
            nextBtn.click();
        }
    });
});
