const images = [
    'g.png',
    'k.png',
    'l.png'
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

setInterval(changeImage, 500); // Change image every 0.5 seconds (500 milliseconds)
