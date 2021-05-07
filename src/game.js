import Phaser from 'phaser';
import Player from './scripts/Player';
import Ground from './scripts/Ground';
import block from './assets/blocks/grass1.png';
class Game extends Phaser.Scene {
    constructor() {
        super();

        this.player = new Player(this);
        this.grass = new Ground(this, { 
            src: block,
            name: 'grass',
            startX: 620,
            startY: 60,
            rows: 12,
            columns: 10
        });
    }

    preload () {
        this.player.init();
        this.grass.init();
    }

    create ()
    {
        this.grass.create();
        // this.add.tileSprite(709.5, 129, 1280, 129, 'block');
        // this.add.tileSprite(640, 180, 1280, 129, 'block');
        // this.add.tileSprite(709, 230, 1280, 129, 'block');
        // this.add.tileSprite(640, 282, 1280, 129, 'block');
        // this.add.tileSprite(709.5, 333, 1280, 129, 'block');
        // this.add.tileSprite(640, 384, 1280, 129, 'block');
        // this.add.tileSprite(709, 435, 1280, 129, 'block');
    
        this.player.create();
    }
}

export default Game