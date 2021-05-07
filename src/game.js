import Phaser from 'phaser';
import config from './config';
import block from './assets/blocks/grass1.png';

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
    // this.add.tilemap(0, 0, 'block', '__BASE').setOrigin(0, 0);
}

function update ()
{

}

export default {
    init
}