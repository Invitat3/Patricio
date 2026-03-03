// Temporizador
const eventDate = new Date("march 15, 2028 14:00:00").getTime();
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = "¡La fiesta ha comenzado!";
    }
}, 1000);

// Confeti
// Lilo & Stitch flotando


// Confeti
/* ===== Confetti ===== 
const confettiContainer = document.querySelector('.confetti');

function createConfettiPiece() {
    const piece = document.createElement('div');
    piece.classList.add('confetti-piece');
    piece.style.left = Math.random() * 100 + '%';
    piece.style.width = piece.style.height = Math.random() * 10 + 5 + 'px';
    piece.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 60%)`;
    piece.style.animationDuration = 3 + Math.random() * 3 + 's';
    piece.style.animationDelay = Math.random() * 3 + 's';
    confettiContainer.appendChild(piece);

    // Eliminar después de caer
    setTimeout(() => {
        piece.remove();
    }, 6000);
}

// Genera continuamente confetti
setInterval(createConfettiPiece, 200);
*/
/* ===== Burbujas flotando 
const bubblesContainer = document.querySelector('.bubbles');

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = Math.random() * 100 + '%';
    bubble.style.width = bubble.style.height = Math.random() * 20 + 10 + 'px';
    bubble.style.backgroundColor = 'rgb(238, 255, 0)';
    bubble.style.animationDuration = 4 + Math.random() * 3 + 's';
    bubblesContainer.appendChild(bubble);

    // Eliminar después de flotar
    setTimeout(() => {
        bubble.remove();
    }, 7000);
}

// Genera continuamente burbujas
setInterval(createBubble, 300);
===== */

//Musica

const music = document.getElementById('music');
const musicButton = document.getElementById('music-button');

// Al tocar cualquier parte de la página
document.body.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        musicButton.classList.remove('paused'); // animación activa
    } else {
        music.pause();
        musicButton.classList.add('paused'); // animación detenida
    }
});



// burbujas con gif
document.addEventListener("DOMContentLoaded", function() {

    const container = document.querySelector('.balloons');

    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');

        const size = 170; // tamaño fijo elegante
        balloon.style.width = size + "px";
        balloon.style.height = size * 2.5 + "px";

        balloon.style.left = Math.random() * 100 + "%";
        balloon.style.backgroundImage = "url('./imagen/burbujas.gif')";

        container.appendChild(balloon);

        setTimeout(() => {
            balloon.remove();
        }, 18000);
    }

    setInterval(createBalloon, 2500);
});

//confetti con imagen
document.addEventListener("DOMContentLoaded", function() {

    const container = document.querySelector('.confetti');

    function createConfettiPiece() {

        const piece = document.createElement('div');
        piece.classList.add('confetti-piece');

        piece.style.left = Math.random() * 100 + '%';

        const size = Math.random() * 80 + 140;
        piece.style.width = size + 'px';
        piece.style.height = size + 'px';

        const duration = 8 + Math.random() * 4;
        piece.style.animationDuration = duration + 's';

        const img = document.createElement("img");
        img.src = "imagen/confetti.gif"; // ajusta ruta
        img.style.width = "100%";
        img.style.height = "100%";

        piece.appendChild(img);
        container.appendChild(piece);

        // 👇 Esto es clave
        piece.addEventListener("animationend", function() {
            piece.remove();
        });
    }

    // 👇 Intervalo estable
    setInterval(createConfettiPiece, 1300);
});