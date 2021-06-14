import Phaser from 'phaser';
import Player from './scripts/Player';
// import MapBuilder from './scripts/MapBuilder';
import loadFont from './scripts/loadFont';
import pixelArtFont from './assets/JoystixMonospace-Regular.ttf';
import sign from './assets/UI/Sign.png';
import map from './assets/map.png';

class Game extends Phaser.Scene {
    constructor() {
        super();

        // this.player = new Player(this, 1000, 1200);
        this.player = new Player(this, 2689, 1902);
        // this.MapBuilder = new MapBuilder(this, {
        //     ground: [
        //         'GGGGGGGGGGGGG',
        //         'GGGGGGGGDGGGG',
        //         'GGGGGGGGGGGGG',
        //         'GGGGGGGGGDGGG',
        //         'GGGDGGGGGGGGG',
        //         'GGGGGFGGGGGGG',
        //         'GGGGGDGGGGGGG',
        //         'GGGGGGGGGGGGG',
        //         'GGGGGGGGGGGGG',
        //         'GGGGGSSSGGGGG',
        //         'GGGGSSSSSGGDG',
        //         'GGGGSSSSSSGGG',
        //         'GGGGSSSSSSGGG',
        //         'GGGGGGGGSSGGG',
        //         'GGGGGGGGSSGGG',
        //         'GGGGGGGGSSGGG',
        //         'GGGGGGGGSSGGG',
        //         'GGGGGGDGSSGGG',
        //         'GGGGGGGGSSGGG',
        //         'GGGGGGGGSSGGG',
        //         'GGGGDGGGSSGGG', 
        //         ' GGGGGGGSSGGG',
        //         ' GGGGGGGSSGG',
        //         ' GGGGGGGSSGG',
        //         ' GGGGGGGSSGG',
        //         ' GGGGGGGSSGG',
        //         ' GGGGGGGSSGG',
        //         ' GGGGGGGSSGG',
        //         ' GGGGGGGSSGG',
        //         ' GGGGGGGSSGG',
        //     ]
        // });
    }

    preload () {
        this.player.init();

        // this.MapBuilder.init();

        loadFont('pixelArtFont', pixelArtFont);

        this.load.image('Sign', sign);
        this.load.image('Map', map);
    }

    create () {
        this.cameras.main.setBounds(-400, -200, 4096, 4096);
        this.physics.world.setBounds(0, 0, 4096, 4096);
        let mapSprite = this.add.sprite(2800, 2500, 'Map');

        // this.MapBuilder.create();
        this.player.create();
    
        this.cameras.main.startFollow(this.player.model, true, 0.8, 0.8);


        /* Top */
        // this.add.sprite(900, 1000, 'Sign');

        // this.add.text(900, 1000, 'AlexSavr\'s\nPortfolio', {
        //     fontFamily: 'pixelArtFont',
        //     color: 'white',
        //     fontSize: '20px',
        //     align: 'center'
        // });
    }

    update() {
        this.player.update();
    }
}

export default Game