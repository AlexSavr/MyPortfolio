import Phaser from 'phaser';

const config = {
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: '#CCFFFF',
    physics: {
        default: 'arcade',
        arcade: {
            // debug: true,
            gravity: { y: 0 }
        },
        debug: true
    }
}

export default config;