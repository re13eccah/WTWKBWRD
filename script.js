const images = [
    'g.png',
    'k.png',
    'l.png'
];

let currentIndex = 0;
const carouselImage = document.getElementById('carousel-image');

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    carouselImage.src = images[currentIndex];
}

setInterval(changeImage, 500); // Change image every 3 seconds

// Initial setup to show the first image
carouselImage.src = images[0];
carouselImage.classList.add('active');
