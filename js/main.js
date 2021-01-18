const canvas = document.getElementById('canvas')
const game = new Game(canvas)
const audio = document.getElementById('bgm')

document.addEventListener('keydown',function(e) {
    if(e.key == "a" || e.key == "ArrowLeft") game.move('left');
    else if(e.key == "d" || e.key == "ArrowRight") game.move('right');
    else if(e.key == "s" || e.key == "ArrowDown") game.move('bottom');
    else if(e.key == "w"  || e.key == "ArrowUp") game.move('top');
});

let btnStart = document.getElementById('btn-start');
btnStart.addEventListener('click', function(e) {
    game.init();
    audio.loop = true;
    document.getElementsByClassName('container')[0].style.display = 'none'
    document.getElementsByClassName('canvas')[0].style.display = 'flex'
});

canvas.addEventListener('click', function(e) {
    let rect = canvas.getBoundingClientRect();
    let mouseLocation= {
        x: e.clientX - rect.x,
        y: e.clientY - rect.y,
    }

    if(mouseLocation.x >= game.restartButton.x &&
        mouseLocation.x <= game.restartButton.x + game.restartButton.w &&
        mouseLocation.y >= game.restartButton.y &&
        mouseLocation.y <= game.restartButton.y + game.restartButton.h) {
            game.restart();
        }
    if(mouseLocation.x >= game.musicBtn.x &&
        mouseLocation.x <= game.musicBtn.x + game.musicBtn.w &&
        mouseLocation.y >= game.musicBtn.y &&
        mouseLocation.y <= game.musicBtn.y + game.musicBtn.h) {
            if(game.musicBtn.status == false) {
                game.musicBtn.status = true;
                audio.play();    
            }else{
                game.musicBtn.status = false;
                audio.pause();
            }
            
        }
});