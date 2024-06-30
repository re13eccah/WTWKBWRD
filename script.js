const images = [
    'g.png',
    'k.png',
    'l.png',
    'm.png',
    'h.png',
    'v.png',
    'f.png',
    'a.png',
    'c.png',
    'd.png',
    'e.png',
    'p.png',
    'r.png',
    'x.png'
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

// Function to shuffle the images array
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

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
    // Shuffle the images array
    shuffle(images);

    // Change image source to the next shuffled image
    carouselImage.src = images[currentIndex];

    // Increment index or reset to 0 if reached end of array
    currentIndex = (currentIndex + 1) % images.length;
}

// Initial setup to show the first image
shuffle(images); // Shuffle images initially
carouselImage.src = images[currentIndex];

setInterval(changeImage, 120); // Change image every 0.12 seconds (120 milliseconds)

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

// Function to reveal letters of "FORGET" one by one and reset
function revealAndReset() {
    const textContainer = document.getElementById('forget-text');
    const word = "FORGET";
    let index = 0;

    // Interval function to reveal each letter
    const intervalId = setInterval(() => {
        if (index <= word.length) {
            textContainer.textContent = word.slice(0, index); // Update text content
            index++;
        } else {
            clearInterval(intervalId); // Stop interval after all letters are revealed
            setTimeout(() => {
                textContainer.textContent = ''; // Reset text after a delay
                setTimeout(revealAndReset, 1000); // Restart animation after reset
            }, 1000); // Delay before resetting text (1 second)
        }
    }, 1000); // Change letter every 1000 milliseconds (1 second)
}

// Call revealAndReset function to start revealing and resetting "FORGET"
revealAndReset();
