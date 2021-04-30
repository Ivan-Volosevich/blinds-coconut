document.addEventListener("DOMContentLoaded", () => {
    var slides = document.querySelectorAll('#hero-slides .hero-slide');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide,7000);

    function nextSlide(){
        goToSlide(currentSlide+1);
    }
    
    function goToSlide(n){
        slides[currentSlide].className = 'hero-slide';
        currentSlide = (n+slides.length)%slides.length;
        slides[currentSlide].className = 'hero-slide showing';
    }
});