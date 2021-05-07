document.addEventListener("DOMContentLoaded", () => {
    
    // const observer = new MutationObserver(function(mutations) {
    //     mutations.forEach(function(mutation) {
    //         console.log('is it works? ', mutation);
    //     })
    // })    

    // // let os = new OnScreen();
    // console.log('u r at X---- ', window.pageXOffset, 'u r at Y---- ', window.pageYOffset);

    // observer.observe(window.pageYOffset, {attributes: true});
    // console.log('what is ---Y , ', observer.observe(window.pageYOffset, {attributes: true}))

    


    // let mutationObserver = new MutationObserver(function(mutations) {
    //     mutations.forEach(function(mutation) {
    //       console.log(mutation);
    //     });
    //   });

    // const observer = new MutationObserver(os);
    // console.log('new at---- ', observer);
    // observer.observe(targetNode, config);

    var controls = document.querySelectorAll('.controls');
    for(var i=0; i<controls.length; i++){
        controls[i].style.display = 'inline-block';
    }

    var slides = document.querySelectorAll('#slides .slide');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide,5000);

    function nextSlide(){
        goToSlide(currentSlide+1);
        if (currentSlide == 0) {
            document.getElementById('spec-circle-first').style.fill = "#ABC839";
            document.getElementById('line-left').style.fill = "#ABC839";
            document.getElementById('spec-circle-second').style.fill = "#CCCCCC";
            document.getElementById('line-mid').style.fill = "#CCCCCC";
            document.getElementById('spec-circle-third').style.fill = "#CCCCCC";
            document.getElementById('line-right').style.fill = "#CCCCCC";
        } else if (currentSlide == 1) {
            document.getElementById('spec-circle-first').style.fill = "#CCCCCC";
            document.getElementById('line-left').style.fill = "#CCCCCC";
            document.getElementById('spec-circle-second').style.fill = "#ABC839";
            document.getElementById('line-mid').style.fill = "#ABC839";
            document.getElementById('spec-circle-third').style.fill = "#CCCCCC";
            document.getElementById('line-right').style.fill = "#CCCCCC";
        } else if (currentSlide == 2) {
            document.getElementById('spec-circle-first').style.fill = "#CCCCCC";
            document.getElementById('line-left').style.fill = "#CCCCCC";
            document.getElementById('spec-circle-second').style.fill = "#CCCCCC";
            document.getElementById('line-mid').style.fill = "#CCCCCC";
            document.getElementById('spec-circle-third').style.fill = "#ABC839";
            document.getElementById('line-right').style.fill = "#ABC839";
        }
    }

    function previousSlide(){
        goToSlide(currentSlide-1);
        if (currentSlide == 0) {
            document.getElementById('spec-circle-first').style.fill = "#ABC839";
            document.getElementById('line-left').style.fill = "#ABC839";
            document.getElementById('spec-circle-second').style.fill = "#CCCCCC";
            document.getElementById('line-mid').style.fill = "#CCCCCC";
            document.getElementById('spec-circle-third').style.fill = "#CCCCCC";
            document.getElementById('line-right').style.fill = "#CCCCCC";
        } else if (currentSlide == 1) {
            document.getElementById('spec-circle-first').style.fill = "#CCCCCC";
            document.getElementById('line-left').style.fill = "#CCCCCC";
            document.getElementById('spec-circle-second').style.fill = "#ABC839";
            document.getElementById('line-mid').style.fill = "#ABC839";
            document.getElementById('spec-circle-third').style.fill = "#CCCCCC";
            document.getElementById('line-right').style.fill = "#CCCCCC";
        } else if (currentSlide == 2) {
            document.getElementById('spec-circle-first').style.fill = "#CCCCCC";
            document.getElementById('line-left').style.fill = "#CCCCCC";
            document.getElementById('spec-circle-second').style.fill = "#CCCCCC";
            document.getElementById('line-mid').style.fill = "#CCCCCC";
            document.getElementById('spec-circle-third').style.fill = "#ABC839";
            document.getElementById('line-right').style.fill = "#ABC839";
        }
    }

    function goToSlide(n){
        slides[currentSlide].className = 'slide';
        currentSlide = (n+slides.length)%slides.length;
        slides[currentSlide].className = 'slide showing';
    }

    var specBtnFirst = document.getElementById('spec-btn-first');
    var specBtnSecond = document.getElementById('spec-btn-second');
    var specBtnThird = document.getElementById('spec-btn-third');

    specBtnFirst.onclick = function(){
        goToSlide(0);
        document.getElementById('spec-circle-first').style.fill = "#ABC839";
        document.getElementById('line-left').style.fill = "#ABC839";
        document.getElementById('spec-circle-second').style.fill = "#CCCCCC";
        document.getElementById('line-mid').style.fill = "#CCCCCC";
        document.getElementById('spec-circle-third').style.fill = "#CCCCCC";
        document.getElementById('line-right').style.fill = "#CCCCCC";
    };
    specBtnSecond.onclick = function(){
        goToSlide(1);
        document.getElementById('spec-circle-first').style.fill = "#CCCCCC";
        document.getElementById('line-left').style.fill = "#CCCCCC";
        document.getElementById('spec-circle-second').style.fill = "#ABC839";
        document.getElementById('line-mid').style.fill = "#ABC839";
        document.getElementById('spec-circle-third').style.fill = "#CCCCCC";
        document.getElementById('line-right').style.fill = "#CCCCCC";
    };
    specBtnThird.onclick = function(){
        goToSlide(2);
        document.getElementById('spec-circle-first').style.fill = "#CCCCCC";
        document.getElementById('line-left').style.fill = "#CCCCCC";
        document.getElementById('spec-circle-second').style.fill = "#CCCCCC";
        document.getElementById('line-mid').style.fill = "#CCCCCC";
        document.getElementById('spec-circle-third').style.fill = "#ABC839";
        document.getElementById('line-right').style.fill = "#ABC839";
    };

    var next = document.getElementById('next');
    var previous = document.getElementById('previous');

    next.onclick = function(){
        nextSlide();
    };
    previous.onclick = function(){
        previousSlide();
    };
});