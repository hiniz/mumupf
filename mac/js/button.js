// 카테고리별 등장

document.addEventListener('DOMContentLoaded', function(){
    const tabButton = document.querySelectorAll('.bestseller-category');
    const tabContents = document.querySelectorAll('.bestseller-contents-container')

    tabButton.forEach(button => {
        button.addEventListener('click', ()=> {
            const tabId = button.getAttribute('data-tab');

            tabContents.forEach(content => {
                if (content.id === tabId) {
                    content.classList.add('active')
                }else {
                    content.classList.remove('active')
                }
            })
        })
    })
})



