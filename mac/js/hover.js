// 이미지위에 커서 올리면 바뀌는거 

const bestsellerContent = document.getElementsByClassName('bestseller-content')

for (let i = 0; i < bestsellerContent.length; i++) {
    const imgBefore = bestsellerContent[i].querySelector('#before-bestseller-img')
    const imgAfter = bestsellerContent[i].querySelector('#after-bestseller-img')

    imgAfter.addEventListener('mouseover', function(){
        imgBefore.style.opacity = '0';
        imgAfter.style.opacity = '1';
    });

    imgAfter.addEventListener('mouseout', function(){
        imgBefore.style.opacity = '1';
        imgAfter.style.opacity = '0';
    })
}