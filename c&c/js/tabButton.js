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



function showPage(setId, pageId){
    var pages = document.querySelectorAll('#' + setId + ' .page');
    pages.forEach(function(page){
        page.classList.remove('active')
    });

    var activePage = document.querySelector('#' + setId + ' #' + pageId);
    if(activePage) {
        activePage.classList.add('active')
    }else {
        console.error(`Page with id` + pageId + `not found in set` + setId)
    }

    window.scrollTo(0, 0);

}




