import Phaser from 'phaser';
import Player from './scripts/Player';
import Ground from './scripts/Ground';
import MapBuilder from './scripts/MapBuilder';

import block from './assets/blocks/grass1.png';
class Game extends Phaser.Scene {
    constructor() {
        super();

        this.player = new Player(this);
        // this.grass = new Ground(this, { 
        //     src: block,
        //     name: 'grass',
        //     startX: -10,
        //     startY: 150,
        //     rows: 12,
        //     columns: 10
        // });
        this.MapBuilder = new MapBuilder(this, {
            ground: [
                '  GGGGGGG',
                'GGGGGGGGGGG',
                'GGGGGGGGDGG',
                ' GGGGGGGGG',
                'GGGGGGGGGD',
                'GGGDGGGGG',
                'GGGGGGGGG',
                'GGGGGDGGGG',
                'GGGGGGGGGGG',
                'GGGGGGGGGGG',
                'GGGG   GGGG',
                'GGGG    GGG',
                'GGGG   GGGG',
                'GGGG    GGG',
                'GGGG   GGGG',
                'GGGGGGGGGGG',
                'GGGGGGGGGGG',
                'GGGGGGGGGGG',
                'GGGGGGGGGGG',
                'GGGGGGGGGGG',
                'GGGGGGGGGGG',
                'GGGGGGGGGGG',
                'GGGGGGGGGGG',
                ' GGGGGGGGG',
                '  GGGGGGG',
            ]
        });
    }

    preload () {
        this.player.init();
        // this.grass.init();

        this.MapBuilder.init();
    }

    create () {
        this.cameras.main.setBounds(-400, -200, 2048, 2048);
        this.physics.world.setBounds(0, 0, 2048, 2048);
        // this.grass.create();
        this.MapBuilder.create();
        this.player.create();

        this.cameras.main.startFollow(this.player.model, true, 0.2, 0.2);
    }

    update() {
        this.player.update();
    }
}

export default Game