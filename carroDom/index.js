// Obtener referencias a los elementos del juego
const gameContainer = document.getElementById('game-container');
const car = document.getElementById('car');
const obstaclesContainer = document.getElementById('obstacles-container');
const startBtn = document.getElementById('start-btn');

const gameWidth = gameContainer.offsetWidth;
const gameHeight = gameContainer.offsetHeight;
const carWidth = car.offsetWidth;
let carPosition = gameWidth / 2 - carWidth / 2;
let isGameRunning = false;

// Iniciar el juego
function startGame() {
    isGameRunning = true;
    startBtn.disabled = true;
    moveObstacles();
}

// Detener el juego
function stopGame() {
    isGameRunning = false;
    startBtn.disabled = false;
    clearObstacles();
}

// Actualizar la posición del carro
function updateCarPosition() {
    car.style.left = carPosition + 'px';
}

// Mover el carro hacia la izquierda
function moveLeft() {
    carPosition -= 10;
    if (carPosition < 0) {
        carPosition = 0;
    }
    updateCarPosition();
}

// Mover el carro hacia la derecha
function moveRight() {
    carPosition += 10;
    if (carPosition + carWidth > gameWidth) {
        carPosition = gameWidth - carWidth;
    }
    updateCarPosition();
}

// Generar un obstáculo
function generateObstacle() {
    const obstacle = document.createElement('div');
    obstacle.className = 'obstacle';
    obstacle.style.left = Math.floor(Math.random() * (gameWidth + 10000)) + 'px';
    obstaclesContainer.appendChild(obstacle);
}

// Mover los obstáculos hacia abajo y comprobar colisiones
function moveObstacles() {
    if (!isGameRunning) {
        return;
    }

    const obstacles = document.getElementsByClassName('obstacle');

    for (let i = 0; i < obstacles.length; i++) {
        const obstacle = obstacles[i];
        const obstacleTop = obstacle.offsetTop + obstacle.offsetHeight;

        // Comprobar colisión con el carro
        if (
            obstacleTop >= gameHeight - car.offsetHeight &&
            obstacle.offsetLeft <= carPosition + car.offsetWidth &&
            obstacle.offsetLeft + obstacle.offsetWidth >= carPosition
        ) {
            stopGame();
            return;
        }

        obstacle.style.top = obstacle.offsetTop + 10 + 'px';

        // Eliminar obstáculo cuando sale del área de juego
        if (obstacle.offsetTop > gameHeight) {
            obstaclesContainer.removeChild(obstacle);
        }
    }

    // Generar un nuevo obstáculo cada cierto tiempo
    setTimeout(generateObstacle, 2000);

    // Mover los obstáculos cada cierto tiempo
    requestAnimationFrame(moveObstacles);
}

// Controlar el movimiento del carro con las teclas de flecha
document.addEventListener('keydown', function (event) {
    if (!isGameRunning) {
        return;
    }

    if (event.code === 'ArrowLeft') {
        moveLeft();
    } else if (event.code === 'ArrowRight') {
        moveRight();
    }
});

// Controlar el inicio del juego con el botón
startBtn.addEventListener('click', startGame);
