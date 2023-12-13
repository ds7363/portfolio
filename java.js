document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links
    let anchorSelector = 'a[href^="#"]';
    let anchorList = document.querySelectorAll(anchorSelector);
  
    anchorList.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        let destination = document.querySelector(this.hash);
        destination.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Sound on hover
    const hoverSound = new Audio('gamesound.mp3');
  
    document.querySelectorAll('.hover-sound').forEach(function (image) {
      image.addEventListener('mouseover', function () {
        hoverSound.currentTime = 0;
        hoverSound.play();
      });
  
      image.addEventListener('mouseout', function () {
        hoverSound.pause();
      });
    });

    // Sound on hover
    const hoverSound1 = new Audio('gym.mp3' );
  
    document.querySelectorAll('.hover-sound1').forEach(function (image) {
      image.addEventListener('mouseover', function () {
        hoverSound1.currentTime = 0;
        hoverSound1.play();
      });
  
      image.addEventListener('mouseout', function () {
        hoverSound1.pause();
    });
});
});

document.addEventListener('DOMContentLoaded', function () {
    const fireDiv = document.getElementById('toggleFire');
    const bunseenDiv = document.getElementById('Bunseen');
    const flagDiv = document.getElementById('Flag');
  
    fireDiv.addEventListener('click', function () {
      bunseenDiv.classList.toggle('visible');
      flagDiv.classList.toggle('visible');
    });
  });
  
  

  
  
  
  