// Retro visitor counter animation
let counter = document.getElementById('counter');
let count = 1;
setInterval(() => {
  count++;
  if (count > 99999) count = 1;
  counter.textContent = String(count).padStart(5, '0');
}, 2000);

// Button click sound effect
const clickSound = new Audio('https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg');

document.querySelectorAll('.nav-btn, .guestbook-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});

// Guestbook button fun alert
const guestbookBtn = document.querySelector('.guestbook-btn');
guestbookBtn.addEventListener('click', () => {
  setTimeout(() => {
    alert('Thank you for signing the Animagent Guestbook! (Feature coming soon)');
  }, 300);
}); 