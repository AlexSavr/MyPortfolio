import player from '../../assets/Player/player.png';
import _animations from './components/animations';
import _controls, { _controlsUpdate } from './components/controls'

class Player {
    constructor(scene) {
        this.player = null;
        this._scene = scene;
        this.frameRate = 10;
        this.speed = 90;
    }

    init() {
        this._scene.load.spritesheet('player', player, { frameWidth: 85, frameHeight: 170 });
    }

    create() {
        _animations(this._scene, this.frameRate);

        this.player = this._scene.physics.add.sprite(600, 370);
        this.player.setCollideWorldBounds(true);
        this.player.play('stopRight');

        _controls(this.player, this.speed);
    }

    update() {
        _controlsUpdate();
    }
}

export default Player