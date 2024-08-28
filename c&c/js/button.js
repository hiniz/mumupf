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
