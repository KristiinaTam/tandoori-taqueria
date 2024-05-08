var navButtons = document.querySelectorAll('.nav-btn');
navButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    this.classList.toggle('collapse');
  });
});