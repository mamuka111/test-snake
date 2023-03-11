let snake = document.getElementById('snake');
let food = document.getElementById('food');

let x = 0;
let y = 0;
let speed = 10;
let direction = 'right';

function moveSnake() {
    if (direction === 'right') {
        x += speed;
    } else if (direction === 'left') {
        x -= speed;
    } else if (direction === 'up') {
        y -= speed;
    } else if (direction === 'down') {
        y += speed;
    }

    snake.style.left = x + 'px';
    snake.style.top = y + 'px';
}

function changeDirection(event) {
    if (event.keyCode === 37) {
        direction = 'left';
    } else if (event.keyCode === 38) {
        direction = 'up';
    } else if (event.keyCode === 39) {
        direction = 'right';
    } else if (event.keyCode === 40) {
        direction = 'down';
    }
}

document.addEventListener('keydown', changeDirection);

setInterval(function() {
    moveSnake();
}, 100);