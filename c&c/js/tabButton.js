document.addEventListener('DOMContentLoaded', function(){
    const tabButton = document.querySelectorAll('.category-button');
    const tabContents = document.querySelectorAll('.products-container');

    tabButton.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');

            tabContents.forEach(content => {
                if (content.id === tabId){
                    content.classList.add('active')
                }else {
                    content.classList.remove('active')
                }
            })
        })
    })
})