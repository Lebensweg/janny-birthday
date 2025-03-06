// Carousel Functionality
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
let currentIndex = 0;

function showItem(index) {
    // Hide all items
    carouselItems.forEach((item) => {
        item.classList.remove('active');
    });

    // Show the current item
    carouselItems[index].classList.add('active');
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
    showItem(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
    showItem(currentIndex);
});

// Show the first item initially
showItem(currentIndex);

// Music Play Button
const musicButton = document.getElementById('music-button');
const birthdayMusic = document.getElementById('birthdaymusic');

musicButton.addEventListener('click', () => {
    if (birthdayMusic.paused) {
        birthdayMusic.play().then(() => {
            musicButton.textContent = '🎵 Pause Music';
        }).catch((error) => {
            console.error("Error playing music:", error);
            alert("Error playing music. Please check the console for details.");
        });
    } else {
        birthdayMusic.pause();
        musicButton.textContent = '🎵 Play Music';
    }
});

// Camera Flash Effect
const cameraButton = document.getElementById('camera-button');
const flash = document.getElementById('flash');

cameraButton.addEventListener('click', () => {
    // Show the "Say cheese!" pop-up
    alert('Say cheese! 📸');

    // Trigger the flash effect
    flash.style.opacity = '1';
    setTimeout(() => {
        flash.style.opacity = '0';
    }, 500);
});
