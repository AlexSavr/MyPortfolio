import Phaser from 'phaser';

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        },
        debug: true
    }
}

export default config;