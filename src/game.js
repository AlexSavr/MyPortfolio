import Phaser from 'phaser';
import block from './assets/blocks/grass1.png';
import player from './assets/Player/player.png';

class Game extends Phaser.Scene {
    constructor() {
        super();

        this.animationFrameRate = 10;
    }

    preload () {
        this.load.image('block', block);

        this.load.spritesheet('player', player, { frameWidth: 85, frameHeight: 170 });
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
            key: 'walkRight',
            frames: this.anims.generateFrameNumbers('player', { frames: [ 0, 1, 2, 3, 4, 5 ] }),
            frameRate: this.animationFrameRate,
            repeat: -1
        });

        this.anims.create({
            key: 'walkRightTop',
            frames: this.anims.generateFrameNumbers('player', { frames: [ 6, 7, 8, 9, 10, 11 ] }),
            frameRate: this.animationFrameRate,
            repeat: -1
        });

        this.anims.create({
            key: 'walkTop',
            frames: this.anims.generateFrameNumbers('player', { frames: [ 12, 13, 14, 15, 16, 17 ] }),
            frameRate: this.animationFrameRate,
            repeat: -1
        });

        this.anims.create({
            key: 'walkLeftTop',
            frames: this.anims.generateFrameNumbers('player', { frames: [ 18, 19, 20, 21, 22, 23 ] }),
            frameRate: this.animationFrameRate,
            repeat: -1
        });

        this.anims.create({
            key: 'walkLeft',
            frames: this.anims.generateFrameNumbers('player', { frames: [ 24, 25, 26, 27, 28, 29 ] }),
            frameRate: this.animationFrameRate,
            repeat: -1
        });

        this.anims.create({
            key: 'walkLeft',
            frames: this.anims.generateFrameNumbers('player', { frames: [ 24, 25, 26, 27, 28, 29 ] }),
            frameRate: this.animationFrameRate,
            repeat: -1
        });
    
        this.anims.create({
            key: 'walkLeftBottom',
            frames: this.anims.generateFrameNumbers('player', { frames: [ 30, 31, 32, 33, 34, 35 ] }),
            frameRate: this.animationFrameRate,
            repeat: -1
        });

        this.anims.create({
            key: 'walkRightBottom',
            frames: this.anims.generateFrameNumbers('player', { frames: [ 36, 37, 38, 39, 40, 41 ] }),
            frameRate: this.animationFrameRate,
            repeat: -1
        });

        this.anims.create({
            key: 'walkBottom',
            frames: this.anims.generateFrameNumbers('player', { frames: [ 42, 43, 44, 45, 46, 47 ] }),
            frameRate: this.animationFrameRate,
            repeat: -1
        });

        const cody = this.add.sprite(600, 370);
        cody.setScale(1);
        cody.play('walkRightBottom');
    }
}

export default Game