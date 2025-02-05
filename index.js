const canvas = document.getElementById('gamearea');
const context = canvas.getContext('2d');

const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 50,
    height: 50,
    color: 'blue',
    speed: 5
};


function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}


function drawPlayer() {
    context.fillStyle = player.color;
    context.fillRect(player.x, player.y, player.width, player.height);
}


function updatePlayer() {
    clearCanvas();
    drawPlayer();
}


document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            player.y -= player.speed;
            break;
        case 'ArrowDown':
            player.y += player.speed;
            break;
        case 'ArrowLeft':
            player.x -= player.speed;
            break;
        case 'ArrowRight':
            player.x += player.speed;
            break;
    }
    updatePlayer();
});


updatePlayer();
