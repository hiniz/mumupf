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








// shop
document.addEventListener('DOMContentLoaded', function() {
    const tabButton = document.querySelectorAll('.category-button')
    const tabContents = document.querySelectorAll('.products-container')

    tabButton.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');

            tabContents.foreach(content => {
                if (content.id === tabId) {
                    content.classList.add('active')
                }else {
                    content.classList.remove('active')
                }
            })
        })
    })
})