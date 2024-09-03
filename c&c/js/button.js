const hiddenButton = document.querySelector('.more-info-button')
        const hiddenDiv = document.querySelector('.more-info')

        hiddenButton.addEventListener('click', ()=> {
            hiddenDiv.classList.toggle('hidden')
        })


let upBtn = document.querySelector('#topBtn');

const scroll = () => {
    if (window.scrollY !== 0) {
        setTimeout(() => {
            window.scrollTo(0, window.scrollY - 50);
            scroll();
        }, 1);
    }
}

upBtn.addEventListener('click', scroll);


const visibleBtn = document.querySelector('.search-button')
const visibleContent = document.querySelector('.search-box')
visibleBtn.addEventListener('click', ()=> {
    visibleContent.classList.toggle('active')
})





const resetBtn = document.querySelectorAll('.reset-button');
const backWrapper = document.querySelectorAll('.back-wrapper');

resetBtn.forEach((button, index) => {
    button.addEventListener('click', ()=> {
        backWrapper[index].style.transform = 'translateX(0px)';
    });
});


