var keyboard = { up: false, down: false, left: false, right: false };
var keysCount = 0;

export function _controls(player, speed, onPlayerMove = () => {}) {
    var currentSpeed = speed;

    if (keysCount > 1) {
        currentSpeed /= Math.sqrt(2);
    }

    document.addEventListener('keydown', function (event) {
        switch (event.keyCode) {
            case 87: keyboard.up = true;    player.setVelocityY(-currentSpeed); keyDown(player, event, onPlayerMove); break;
            case 83: keyboard.down = true;  player.setVelocityY(currentSpeed); keyDown(player, event, onPlayerMove); break;
            case 65: keyboard.left = true;  player.setVelocityX(-currentSpeed); keyDown(player, event, onPlayerMove); break;
            case 68: keyboard.right = true; player.setVelocityX(currentSpeed); keyDown(player, event, onPlayerMove); break;
        }
      });
      
    document.addEventListener('keyup', function (event) {
        switch (event.keyCode) {
            case 87: keyboard.up = false; keyUp(player, event, onPlayerMove); break;
            case 83: keyboard.down = false; keyUp(player, event, onPlayerMove);break;
            case 65: keyboard.left = false; keyUp(player, event, onPlayerMove);break;
            case 68: keyboard.right = false; keyUp(player, event, onPlayerMove); break;
        }

    });
}

function keyDown(player, event, onPlayerMove) {
    changeAnimation(player, event);
    onPlayerMove({ isMove: true, x: player.x, y: player.y });
}

function keyUp(player, event, onPlayerMove) {
    player.setVelocityX(0);
    player.setVelocityY(0);
    changeAnimation(player, event);
    onPlayerMove({ isMove: false, x: player.x, y: player.y });
}

export function _controlsUpdate() {
    keysCount += keyboard.up ? 1 : 0;
    keysCount += keyboard.down ? 1 : 0;
    keysCount += keyboard.left ? 1 : 0;
    keysCount += keyboard.right ? 1 : 0;
}

function changeAnimation(player, event) { // TODO: Fix bugs with walk
    switch(event.type) {
        case 'keydown': {
            if(keyboard.up && keyboard.left) player.play('walkLeftTop', true);
            if(keyboard.up && keyboard.right) player.play('walkRightTop', true);
            if(keyboard.down && keyboard.left) player.play('walkLeftDown', true);
            if(keyboard.down && keyboard.right) player.play('walkRightDown', true);


            if((keyboard.up && keyboard.left) || (keyboard.up && keyboard.right) || 
               (keyboard.down && keyboard.left) || (keyboard.down && keyboard.right))
               return;

            if(keyboard.up) player.play('walkTop', true);
            if(keyboard.down) player.play('walkDown', true);
            if(keyboard.left) player.play('walkLeft', true);
            if(keyboard.right) player.play('walkRight', true);
            break;
        }
        case 'keyup': {
            if(Object.values(keyboard).find(el => el === true))
                changeAnimation(player, 'keydown');
            else { // TODO: Play stop animation for corner animation
                switch(event.code) {
                    case 'KeyW': player.play('stopTop'); break;
                    case 'KeyS': player.play('stopDown'); break;
                    case 'KeyA': player.play('stopLeft'); break;
                    case 'KeyD': player.play('stopRight'); break;
                }
            }
            player.stop();
            break;
        }
    }
}

export default _controls