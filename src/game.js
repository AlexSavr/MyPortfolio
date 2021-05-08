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
        this.cameras.main.setBounds(-500, -500, 2048, 2048);
        this.physics.world.setBounds(0, 0, 2048, 2048);
        this.grass.create();
        this.player.create();

        this.cameras.main.startFollow(this.player.model, true, 0.2, 0.2);
    }

    update() {
        this.player.update();
    }
}

export default Game