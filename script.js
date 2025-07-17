<<<<<<< HEAD
function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    if (!envelope.classList.contains('opened')) {
      envelope.classList.add('opened');
      const music = document.getElementById('bg-music');
      music.play().catch(() => {}); // otomatik çalma engeli için
      launchConfetti();
    }
  }
  
  function launchConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    const colors = ['#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#00bcd4', '#4caf50', '#ffeb3b', '#ff9800', '#f44336'];
  
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * window.innerWidth + 'px';
      confetti.style.top = (Math.random() * -window.innerHeight) + 'px'; // yukardan rastgele başlasın
      confetti.style.animationDelay = (Math.random() * 3) + 's';
      const size = 5 + Math.random() * 10;
      confetti.style.width = size + 'px';
      confetti.style.height = size + 'px';
      confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '3px'; // yuvarlak ya da kare konfeti
      confettiContainer.appendChild(confetti);
  
      setTimeout(() => {
        confetti.remove();
      }, 4000);
    }
  }
=======
function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    if (!envelope.classList.contains('opened')) {
      envelope.classList.add('opened');
      const music = document.getElementById('bg-music');
      music.play().catch(() => {}); // otomatik çalma engeli için
      launchConfetti();
    }
  }
  
  function launchConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    const colors = ['#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#00bcd4', '#4caf50', '#ffeb3b', '#ff9800', '#f44336'];
  
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * window.innerWidth + 'px';
      confetti.style.top = (Math.random() * -window.innerHeight) + 'px'; // yukardan rastgele başlasın
      confetti.style.animationDelay = (Math.random() * 3) + 's';
      const size = 5 + Math.random() * 10;
      confetti.style.width = size + 'px';
      confetti.style.height = size + 'px';
      confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '3px'; // yuvarlak ya da kare konfeti
      confettiContainer.appendChild(confetti);
  
      setTimeout(() => {
        confetti.remove();
      }, 4000);
    }
  }
>>>>>>> f456911 (Initial commit with assets and scripts)
  