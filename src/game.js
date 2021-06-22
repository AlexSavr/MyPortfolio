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

        this.player = new Player(this, 1175, 654);
    }

    preload () {
        this.player.init();

        // this.MapBuilder.init();

        loadFont('pixelArtFont', pixelArtFont);

        this.load.image('Sign', sign);
        this.load.image('Map', map);
    }

    create () {
        this.cameras.main.setBounds(600, 0, 5700, 4796);
        this.physics.world.setBounds(0, 0, 5100, 4096);
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