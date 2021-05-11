import Phaser from 'phaser';
import Player from './scripts/Player';
import Ground from './scripts/Ground';
import MapBuilder from './scripts/MapBuilder';

import block from './assets/blocks/grass1.png';
class Game extends Phaser.Scene {
    constructor() {
        super();

        this.player = new Player(this, 1000, 1200);
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
                'GGGGGGGGGGGGG',
                'GGGGGGGGDGGGG',
                'GGGGGGGGGGGGG',
                'GGGGGGGGGDGGG',
                'GGGDGGGGGGGGG',
                'GGGGGFGGGGGGG',
                'GGGGGDGGGGGGG',
                'GGGGGGGGGGGGG',
                'GGGGGGGGGGGGG',
                'GGGGGSSSGGGGG',
                'GGGGSSSSSGGDG',
                'GGGGSSSSSSGGG',
                'GGGGSSSSSSGGG',
                'GGGGGGGGSSGGG',
                'GGGGGGGGSSGGG',
                'GGGGGGGGSSGGG',
                'GGGGGGGGSSGGG',
                'GGGGGGDGSSGGG',
                'GGGGGGGGSSGGG',
                'GGGGGGGGSSGGG',
                'GGGGDGGGSSGGG',
                ' GGGGGGGSSGGG',
                ' GGGGGGGSSGG',
                ' GGGGGGGSSGG',
                ' GGGGGGGSSGG',
                ' GGGGGGGSSGG',
                ' GGGGGGGSSGG',
                ' GGGGGGGSSGG',
                ' GGGGGGGSSGG',
                ' GGGGGGGSSGG',
            ]
        });
    }

    preload () {
        this.player.init();
        // this.grass.init();

        this.MapBuilder.init();
    }

    create () {
        this.cameras.main.setBounds(-400, -200, 4096, 4096);
        this.physics.world.setBounds(0, 0, 4096, 4096);
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