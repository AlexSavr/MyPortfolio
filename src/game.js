import Phaser from 'phaser';
import config from './config';

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
    this.load.image('sky', 'assets/skies/space3.png');
}

function create ()
{

}

function update ()
{

}

export default {
    init
}