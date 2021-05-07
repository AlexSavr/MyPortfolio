import Phaser from 'phaser';
import block from './assets/blocks/grass1.png';
import player from './assets/Player/player.png';

class Game extends Phaser.Scene {
    constructor() {
        super();
    }

    preload () {
        this.load.image('block', block);

        this.load.spritesheet('player', player, { frameWidth: 86, frameHeight: 170 });
    }

    create ()
    {
        this.add.tileSprite(709.5, 129, 1280, 129, 'block');
        this.add.tileSprite(640, 180, 1280, 129, 'block');
        this.add.tileSprite(709, 230, 1280, 129, 'block');
        this.add.tileSprite(640, 282, 1280, 129, 'block');
        this.add.tileSprite(709.5, 333, 1280, 129, 'block');
        this.add.tileSprite(640, 384, 1280, 129, 'block');
        this.add.tileSprite(709, 435, 1280, 129, 'block');
    
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('player', { frames: [ 0, 1, 2, 3 ] }),
            frameRate: 12,
            repeat: 2
        });
    
        const cody = this.add.sprite(600, 370);
        cody.setScale(1);
        cody.play('walk'); // https://phaser.io/examples/v3/view/animation/create-animation-from-sprite-sheet
    }
}

export default Game