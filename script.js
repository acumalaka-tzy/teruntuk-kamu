function mulai() {
    var audio = document.getElementById("myAudio");
    
    audio.volume = 1.0;
    
    audio.play().catch(function(error) {
        console.log("Gagal putar musik:", error);
    });

    audio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);

    var overlay = document.getElementById("overlay");
    overlay.style.opacity = "0";
    setTimeout(function() {
        overlay.style.display = "none";
    }, 800);

    setInterval(createHeart, 400);
}

function createHeart() {
    const container = document.getElementById('heart-container');
    const heart = document.createElement('div');
    const hearts = ['❤️', '💖', '💝', '💕', '💗'];
    heart.classList.add('falling-heart');
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 95 + 'vw';
    heart.style.fontSize = Math.random() * 15 + 15 + 'px';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    container.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 6000);
}

function kirimPesan() {
    window.open("https://wa.me/628978034906", '_blank');
}
