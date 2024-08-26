const hiddenButton = document.querySelector('.more-info-button')
        const hiddenDiv = document.querySelector('.more-info')

        hiddenButton.addEventListener('click', ()=> {
            hiddenDiv.classList.toggle('hidden')
        })