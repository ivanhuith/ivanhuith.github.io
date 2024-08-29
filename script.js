var modal = document.getElementById('Setting');
window.onclick = function(event) {
  if (event.target == Setting) {
    modal.style.display = "none";
  }
}

document.addEventListener('touchstart', function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

function ToDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
}