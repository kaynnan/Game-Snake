let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];

snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direct = "rigth";

function createBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function createSnake() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

document.addEventListener("keydown", update);

function update(event) {
    if (event.keyCode == 37 && direct != "right") direct = "left";
    if (event.keyCode == 38 && direct != "up") direct = "down";
    if (event.keyCode == 39 && direct != "left") direct = "right";
    if (event.keyCode == 40 && direct != "down") direct = "up";
}


function startGame() {

    if (snake[0].x > 15 * box && direct == "right") snake[0].x = 0;
    if (snake[0].x < 0 && direct == 'left') snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direct == "up") snake[0].y = 0;
    if (snake[0].y < 0 && direct == 'down') snake[0].y = 16 * box;

    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(game);
            alert('Game Over :(');
        }
    }


    createBG();
    createSnake();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direct == "right") snakeX += box;
    if (direct == "left") snakeX -= box;
    if (direct == "up") snakeY += box;
    if (direct == "down") snakeY -= box;

    snake.pop();

    let newHD = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHD);
}

let game = setInterval(startGame, 100);


