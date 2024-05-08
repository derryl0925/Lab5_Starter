// expose.js

window.addEventListener('DOMContentLoaded', init);
  
function init() {
  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti(); // Creating an instance of JSConfetti
  
  playButton.addEventListener('click', function() {
    jsConfetti.addConfetti(); // Using default confetti settings
  });
}