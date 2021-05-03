document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 1;
    showSlides(slideIndex);

    let prodBtnFirst = document.getElementById("btn-prod-first");
    let prodBtnSecond = document.getElementById("btn-prod-second");
    let prodBtnThird = document.getElementById("btn-prod-third");
    let prodBtnFourth = document.getElementById("btn-prod-fourth");

    prodBtnFirst.onclick = function(){
        showSlides(1);
    };

    prodBtnSecond.onclick = function(){
        showSlides(2);
    };
    
    prodBtnThird.onclick = function(){
        showSlides(3);
    };

    prodBtnFourth.onclick = function(){
        showSlides(4);
    };

    function showSlides(n) {
        let i;
        let slides = document.querySelectorAll(".slider-item-prod");
        let btns = document.querySelectorAll(".btn-class");
        if (n > slides.length) {
          slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < btns.length; i++) {
            btns[i].className = btns[i].className.replace(" active", "");
        }
        slides[n - 1].style.display = "flex";
        btns[n - 1].className += " active";
    }
});