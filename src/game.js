import Phaser from 'phaser';
import block from './assets/blocks/grass1.png';

import Player from './scripts/Player';

class Game extends Phaser.Scene {
    constructor() {
        super();

        this.player = new Player(this);
    }

    preload () {
        this.player.init();
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
    
        this.player.create();
    }
}

export default Game