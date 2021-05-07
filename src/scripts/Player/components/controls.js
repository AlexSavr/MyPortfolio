function _controls(_scene, player, speed) {

    // Enables movement
    document.addEventListener('keydown', (event) => {
        switch(event.code) {
            case 'KeyW': 
                player.setVelocityY(-speed);
            break;
            case 'KeyS':
                player.setVelocityY(speed);
            break;
            case 'KeyA':
                player.setVelocityX(-speed);
            break;
            case 'KeyD':
                player.setVelocityX(speed);
        }
    });

    document.addEventListener('keyup', (event) => {
        switch(event.code) {
            case 'KeyW': 
                player.setVelocityY(0);
            break;
            case 'KeyS':
                player.setVelocityY(0);
            break;
            case 'KeyA':
                player.setVelocityX(0);
            break;
            case 'KeyD':
                player.setVelocityX(0);
        }
    });
}

export default _controls