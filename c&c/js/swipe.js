// let startX = 0;
// let isDragging = false;
// const slideWrapper = document.querySelector('.slide-wrapper');
// const slides = document.querySelectorAll('.slide');
// const slideWidth = window.innerWidth; // 슬라이드 하나의 너비를 viewport width로 설정
// const totalWidth = slides.length * slideWidth; // 슬라이드 총 너비 계산

// // 드래그 시작
// slideWrapper.addEventListener('mousedown', function(e) {
//     e.preventDefault();
//     startX = e.clientX;
//     isDragging = true;
//     slideWrapper.style.transition = 'none';
//     bestWrapper.style.transition = 'none' // 드래그 중에는 애니메이션을 비활성화
// });

// // 드래그 중
// slideWrapper.addEventListener('mousemove', function(e) {
//     if (isDragging) {
//         const deltaX = e.clientX - startX; // 드래그 거리 계산
//         let currentTransform = parseFloat(getComputedStyle(slideWrapper).transform.split(',')[4]) || 0;
//         let newTransform = currentTransform + deltaX;

//         // 슬라이드 경계 설정
//         newTransform = Math.min(newTransform, 0); // 왼쪽 경계
//         newTransform = Math.max(newTransform, -totalWidth + slideWidth); // 오른쪽 경계

//         slideWrapper.style.transform = `translateX(${newTransform}px)`;
//         startX = e.clientX; // 현재 위치를 업데이트
//     }
// });

// // 드래그 끝
// slideWrapper.addEventListener('mouseup', function(e) {
//     if (isDragging) {
//         isDragging = false;
//         const deltaX = e.clientX - startX;
//         let currentTransform = parseFloat(getComputedStyle(slideWrapper).transform.split(',')[4]) || 0;
//         let newTransform = currentTransform + deltaX;

//         // 슬라이드 경계 설정
//         newTransform = Math.min(newTransform, 0); // 왼쪽 경계
//         newTransform = Math.max(newTransform, -totalWidth + slideWidth); // 오른쪽 경계

//         // 이동 애니메이션
//         slideWrapper.style.transition = 'transform 0.5s ease';
//         slideWrapper.style.transform = `translateX(${newTransform}px)`;
//     }
// });

// // 모바일 터치 지원
// slideWrapper.addEventListener('touchstart', function(e) {
//     startX = e.touches[0].clientX;
//     isDragging = true;
// });

// slideWrapper.addEventListener('touchmove', function(e) {
//     if (isDragging) {
//         const deltaX = e.touches[0].clientX - startX;
//         let currentTransform = parseFloat(getComputedStyle(slideWrapper).transform.split(',')[4]) || 0;
//         let newTransform = currentTransform + deltaX;

//         // 슬라이드 경계 설정
//         newTransform = Math.min(newTransform, 0); // 왼쪽 경계
//         newTransform = Math.max(newTransform, -totalWidth + slideWidth); // 오른쪽 경계

//         slideWrapper.style.transform = `translateX(${newTransform}px)`;
//         startX = e.touches[0].clientX;
//     }
// });

// slideWrapper.addEventListener('touchend', function(e) {
//     if (isDragging) {
//         isDragging = false;
//         const deltaX = e.changedTouches[0].clientX - startX;
//         let currentTransform = parseFloat(getComputedStyle(slideWrapper).transform.split(',')[4]) || 0;
//         let newTransform = currentTransform + deltaX;

//         // 슬라이드 경계 설정
//         newTransform = Math.min(newTransform, 0); // 왼쪽 경계
//         newTransform = Math.max(newTransform, -totalWidth + slideWidth); // 오른쪽 경계

//         // 이동 애니메이션
//         slideWrapper.style.transition = 'transform 0.5s ease';
//         slideWrapper.style.transform = `translateX(${newTransform}px)`;
//     }
// });


document.querySelectorAll('.slide-wrapper').forEach((slideWrapper, index) => {
    let startX = 0;
    let isDragging = false;
    const slides = slideWrapper.querySelectorAll('.slide');
    const slideWidth = window.innerWidth; // 슬라이드 하나의 너비를 viewport width로 설정
    const totalWidth = slides.length * slideWidth; // 슬라이드 총 너비 계산
    const resetButton = document.querySelector('.reset-button')



    // 드래그 시작
    slideWrapper.addEventListener('mousedown', function(e) {
        e.preventDefault();
        startX = e.clientX;
        isDragging = true;
        slideWrapper.style.transition = 'none';
    });

    // 드래그 중
    slideWrapper.addEventListener('mousemove', function(e) {
        if (isDragging) {
            const deltaX = e.clientX - startX; // 드래그 거리 계산
            let currentTransform = parseFloat(getComputedStyle(slideWrapper).transform.split(',')[4]) || 0;
            let newTransform = currentTransform + deltaX;

            // 슬라이드 경계 설정
            newTransform = Math.min(newTransform, 0); // 왼쪽 경계
            newTransform = Math.max(newTransform, -totalWidth + slideWidth); // 오른쪽 경계

            slideWrapper.style.transform = `translateX(${newTransform}px)`;

            startX = e.clientX; // 현재 위치를 업데이트
        }
    });

    // 드래그 끝
    slideWrapper.addEventListener('mouseup', function(e) {
        if (isDragging) {
            isDragging = false;
            const deltaX = e.clientX - startX;
            let currentTransform = parseFloat(getComputedStyle(slideWrapper).transform.split(',')[4]) || 0;
            let newTransform = currentTransform + deltaX;

            // 슬라이드 경계 설정
            newTransform = Math.min(newTransform, 0); // 왼쪽 경계
            newTransform = Math.max(newTransform, -totalWidth + slideWidth); // 오른쪽 경계

            // 이동 애니메이션
            slideWrapper.style.transition = 'transform 0.5s ease';
            slideWrapper.style.transform = `translateX(${newTransform}px)`;
        }
    });

    // // 모바일 터치 지원
    // slideWrapper.addEventListener('touchstart', function(e) {
    //     startX = e.touches[0].clientX;
    //     isDragging = true;
    // });

    // slideWrapper.addEventListener('touchmove', function(e) {
    //     if (isDragging) {
    //         const deltaX = e.touches[0].clientX - startX;
    //         let currentTransform = parseFloat(getComputedStyle(slideWrapper).transform.split(',')[4]) || 0;
    //         let newTransform = currentTransform + deltaX;

    //         // 슬라이드 경계 설정
    //         newTransform = Math.min(newTransform, 0); // 왼쪽 경계
    //         newTransform = Math.max(newTransform, -totalWidth + slideWidth); // 오른쪽 경계

    //         slideWrapper.style.transform = `translateX(${newTransform}px)`;
    //         startX = e.touches[0].clientX;
    //     }
    // });

    // slideWrapper.addEventListener('touchend', function(e) {
    //     if (isDragging) {
    //         isDragging = false;
    //         const deltaX = e.changedTouches[0].clientX - startX;
    //         let currentTransform = parseFloat(getComputedStyle(slideWrapper).transform.split(',')[4]) || 0;
    //         let newTransform = currentTransform + deltaX;

    //         // 슬라이드 경계 설정
    //         newTransform = Math.min(newTransform, 0); // 왼쪽 경계
    //         newTransform = Math.max(newTransform, -totalWidth + slideWidth); // 오른쪽 경계

    //         // 이동 애니메이션
    //         slideWrapper.style.transition = 'transform 0.5s ease';
    //         slideWrapper.style.transform = `translateX(${newTransform}px)`;
    //     }
    // });

    
    resetButton.addEventListener('click', function() {
        slideWrapper.style.transform = 'transform 0.5s ease';
        slideWrapper.style.transform = 'trnaslateX(0)'; 
    });
});
