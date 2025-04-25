let currentIndex = 0;
const imagesContainer = document.querySelector(".carousel-images");
const images = document.querySelectorAll(".carousel-images img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const imagesPerView = 0;
const totalImages = images.length;
const imageWidth = 310; // 300px + 10px de margem

function updateCarousel() {
    const offset = currentIndex * imageWidth;
    imagesContainer.style.transform = `translateX(-${offset}px)`;
}

function showNext() {
    if (currentIndex < totalImages - imagesPerView) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
}

function showPrev() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalImages - imagesPerView;
    }
    updateCarousel();
}

nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);

// Passa automaticamente a cada 4 segundos
setInterval(showNext, 2000);
