document.addEventListener("DOMContentLoaded", () => {
    var controls = document.querySelectorAll('.btn-slider');
    for(var i=0; i<controls.length; i++){
        controls[i].style.display = 'inline-block';
    }

    var slides = document.querySelectorAll('#slider-show .slider-images');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide,4000);

    function nextSlide(){
        goToSlide(currentSlide+1);
    }

    function previousSlide(){
        goToSlide(currentSlide-1);
    }

    function goToSlide(n){
        slides[currentSlide].className = 'slider-images';
        currentSlide = (n+slides.length)%slides.length;
        slides[currentSlide].className = 'slider-images showing';
    }

    var worksBtnFirst = document.getElementById('works-btn-first');
    var worksBtnSecond = document.getElementById('works-btn-second');
    var worksBtnThird = document.getElementById('works-btn-third');

    worksBtnFirst.onclick = function(){
        goToSlide(0);
    };
    worksBtnSecond.onclick = function(){
        goToSlide(1);
    };
    worksBtnThird.onclick = function(){
        goToSlide(2);
    };

    if (worksBtnFirst) {
        document.getElementById('circle-first').style.cssText = "fill: #ABC839";
        document.getElementById('circle-second').style.cssText = "fill: #CCCCCC";
        document.getElementById('circle-third').style.cssText = "fill: #CCCCCC";
    } else if (worksBtnSecond) {
        document.getElementById('circle-first').style.cssText = "fill: #CCCCCC";
        document.getElementById('circle-second').style.cssText = "fill: #ABC839";
        document.getElementById('circle-third').style.cssText = "fill: #CCCCCC";
    } else if (worksBtnThird) {
        document.getElementById('circle-first').style.cssText = "fill: #CCCCCC";
        document.getElementById('circle-second').style.cssText = "fill: #CCCCCC";
        document.getElementById('circle-third').style.cssText = "fill: #ABC839";
    }
});