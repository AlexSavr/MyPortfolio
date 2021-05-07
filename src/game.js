import Phaser from 'phaser';
import config from './config';
import block from './assets/blocks/grass1.png';
import player from './assets/Player/player.png';

let gameConfig = {
    ...config,
    scene: {
        preload,
        create
    }
}

new Phaser.Game(gameConfig);

function init() {
    console.log('Loading...');
}

function preload ()
{
    this.load.image('block', block);

    this.load.spritesheet('player', player, { frameWidth: 86, frameHeight: 170 });
}

function create ()
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
        frameRate: 10,
        repeat: -1
    });

    const cody = this.add.sprite(600, 370);
    cody.setScale(1);
    cody.play('walk'); // https://phaser.io/examples/v3/view/animation/create-animation-from-sprite-sheet
}

function update ()
{

}

export default {
    init
}