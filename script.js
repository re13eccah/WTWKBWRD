const images = [
    'g.png',
    'k.png',
    'l.png',
    'm.png',
    'h.png',
    'v.png',
    'f.png'
];

const carouselImage = document.getElementById('carousel-image');
const carouselContainer = document.querySelector('.carousel');

// Set dimensions for the carousel container
carouselContainer.style.width = '400px';
carouselContainer.style.height = '300px';

// Set dimensions for the carousel image
carouselImage.style.width = '400px';
carouselImage.style.height = '300px';
carouselImage.style.objectFit = 'cover'; // Ensures the image covers the container

// Function to center the carousel vertically and horizontally
function centerCarousel() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const carouselWidth = carouselContainer.offsetWidth;
    const carouselHeight = carouselContainer.offsetHeight;

    const leftPosition = (windowWidth - carouselWidth) / 2;
    const topPosition = (windowHeight - carouselHeight) / 2;

    carouselContainer.style.left = `${leftPosition}px`;
    carouselContainer.style.top = `${topPosition}px`;
}

// Call centerCarousel initially and on window resize
centerCarousel();
window.addEventListener('resize', centerCarousel);

let currentIndex = 0;

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    carouselImage.src = images[currentIndex];
}

// Initial setup to show the first image
carouselImage.src = images[0];

setInterval(changeImage, 120); // Change image every 0.5 seconds (500 milliseconds)

// Function to generate a random color in hex format
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to update the text with flashing random colors
function updateFlashingText() {
    const flashingText = document.getElementById('flashing-text');
    flashingText.style.color = getRandomColor(); // Set random color
}

// Call updateFlashingText every 500 milliseconds (0.5 seconds)
setInterval(updateFlashingText, 100);
