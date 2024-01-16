document.addEventListener('DOMContentLoaded', function () {
    const images = ['path_to_image1.jpg', 'path_to_image2.jpg', 'path_to_image3.jpg']; // Add paths to your images
    let currentIndex = 0;
    let interval = 60000;
    let slideshowInterval;

    const slideContent = document.querySelector('.slide-content');
    const prevButton = document.querySelector('.button-container button:nth-child(1)');
    const setButton = document.querySelector('.button-container button:nth-child(3)');
    const pauseButton = document.querySelector('.button-container button:nth-child(4)');
    const nextButton = document.querySelector('.button-container button:nth-child(5)');
    const intervalInput = document.querySelector('.button-container input');

    const updateImage = () => {
        slideContent.src = images[currentIndex];
    };

    const startSlideshow = () => {
        slideshowInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            updateImage();
        }, interval);
    };

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });

    setButton.addEventListener('click', () => {
        clearInterval(slideshowInterval);
        interval = parseInt(intervalInput.value) * 1000;
        if (!isNaN(interval) && interval > 0) {
            startSlideshow();
        } else {
            alert("Please enter a valid number of seconds.");
        }
    });

    pauseButton.addEventListener('click', () => {
        clearInterval(slideshowInterval);
    });

    startSlideshow();
});