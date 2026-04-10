function createHeart() {
    const heartContainer = document.getElementById('heart-container');
    const heart = document.createElement('div');
    const hearts = ['❤️', '💖', '💝', '💕', '💗'];
    
    heart.classList.add('falling-heart');
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    
    heart.style.left = Math.random() * 95 + 'vw';
    heart.style.fontSize = Math.random() * 15 + 15 + 'px';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    
    heartContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 400);

function kirimPesan() {
    const nomorWA = "628978034906"; 
    window.open(`https://wa.me/${628978034906}`, '_blank');
}