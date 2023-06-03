window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    var opacity = 1 - (scrollPosition / window.innerHeight);
    
    document.querySelector('.first').style.opacity = opacity;
    document.querySelector('.second').style.opacity = 1 - opacity;
  });
  