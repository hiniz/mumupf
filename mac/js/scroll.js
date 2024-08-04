  // 헤더이벤트
const header = document.querySelector('header');
let timeout;

window.addEventListener("scroll", () => {
    header.classList.add("hidden")

    clearTimeout(timeout);

    timeout = setTimeout(function(){
        header.classList.remove("hidden")
    }, 300)
});
  
  window.addEventListener('scroll', function() {
    document.querySelectorAll('.campaign-page, .count-page').forEach(div => {
      const rect = div.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        div.classList.add('visible');
      }
    });
  });