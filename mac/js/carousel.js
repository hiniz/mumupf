const viva = document.querySelector('.viva-carousel')
let currentIndex = 0; 
const slideWidth = 6;
const totalSlides = viva.children.length
const visibleslides = 4; 

function showSlide (index) {
    if (index >= totalSlides - visibleslides + 1) {
        currentIndex = 0; 
    } else if (index < 0) {
        currentIndex = totalSlides - visibleSlildes;
    } else {
        currentIndex = index;
    }
    viva.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
}

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentIndex - 1);
    });
    
    document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentIndex + 1);
    });
