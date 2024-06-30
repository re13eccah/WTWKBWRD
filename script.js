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

// Initial setup to show the first image
carouselImage.src = images[0];

setInterval(changeImage, 500); 
