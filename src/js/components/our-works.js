document.addEventListener("DOMContentLoaded", () => {
    var controls = document.querySelectorAll('.btn-slider');
    for(var i=0; i<controls.length; i++){
        controls[i].style.display = 'inline-block';
    }

    var slides = document.querySelectorAll('#slider-show .slider-images');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide,30000);

    function nextSlide(){
        goToSlide(currentSlide+1);
        if (currentSlide == 0) {
            document.getElementById('circle-first').style.fill = "#ABC839";
            document.getElementById('circle-second').style.fill = "#CCCCCC";
            document.getElementById('circle-third').style.fill = "#CCCCCC";
        } else if (currentSlide == 1) {
            document.getElementById('circle-first').style.fill = "#CCCCCC";
            document.getElementById('circle-second').style.fill = "#ABC839";
            document.getElementById('circle-third').style.fill = "#CCCCCC";
        } else if (currentSlide == 2) {
            document.getElementById('circle-first').style.fill = "#CCCCCC";
            document.getElementById('circle-second').style.fill = "#CCCCCC";
            document.getElementById('circle-third').style.fill = "#ABC839";
        }
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
        document.getElementById('circle-first').style.fill = "#ABC839";
        document.getElementById('circle-second').style.fill = "#CCCCCC";
        document.getElementById('circle-third').style.fill = "#CCCCCC";
    };
    worksBtnSecond.onclick = function(){
        goToSlide(1);
        document.getElementById('circle-first').style.fill = "#CCCCCC";
        document.getElementById('circle-second').style.fill = "#ABC839";
        document.getElementById('circle-third').style.fill = "#CCCCCC";
    };
    worksBtnThird.onclick = function(){
        goToSlide(2);
        document.getElementById('circle-first').style.fill = "#CCCCCC";
        document.getElementById('circle-second').style.fill = "#CCCCCC";
        document.getElementById('circle-third').style.fill = "#ABC839";
    };

    // import Viewer from 'viewerjs';

    // const gallery = new Viewer(document.getElementById('images'));
});
