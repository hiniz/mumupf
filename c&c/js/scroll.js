const header = document.querySelector('header');

window.addEventListener('scroll', ()=> {
    let currentScroll = window.pageYOffset || documentElement.scrollTop; 

    if (currentScroll > 980) {
        header.classList.add('hidden');
    }else {
        header.classList.remove('hidden');
    }

});