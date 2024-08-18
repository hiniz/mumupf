// const viva = document.querySelector('.viva-carousel')
// let currentIndex = 0; 
// const slideWidth = 6;
// const totalSlides = viva.children.length
// const visibleslides = 4; 

// function showSlide (index) {
//     if (index >= totalSlides - visibleslides + 1) {
//         currentIndex = 0; 
//     } else if (index < 0) {
//         currentIndex = totalSlides - visibleSlildes;
//     } else {
//         currentIndex = index;
//     }
//     viva.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
// }

// document.querySelector('.prev').addEventListener('click', () => {
//     showSlide(currentIndex - 1);
//     });
    
//     document.querySelector('.next').addEventListener('click', () => {
//     showSlide(currentIndex + 1);
//     });


const vivaCarousel = document.querySelector('.viva-carousel');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentIndex = 0;

function carousel(){
    const productWidth = document.querySelector('.viva-products').offsetWidth + 20;
    vivaCarousel.computedStyleMap.transform = `trnaslateX(${- currentIndex * productWidth}px)`;
}

prev.addEventListener('click', ()=>{
    if(currentIndex > 0) {
        currentIndex--;
        carousel();
    }
});

next.addEventListener('click', ()=> {
    if(currentIndex < vivaCarousel.children.length - 3) {
        currentIndex ++; 
        carousel();
    }
});
