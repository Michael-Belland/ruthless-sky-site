const unmuteOverlay = document.getElementById('unmute-overlay');
const unmuteText = document.getElementById('unmute-text');
const video = document.querySelector('video');

unmuteOverlay.addEventListener('click', function() {
  video.muted = false;
  unmuteOverlay.style.display = 'none';
});

unmuteText.addEventListener('click', function() {
  video.muted = false;
  unmuteOverlay.style.display = 'none';
});