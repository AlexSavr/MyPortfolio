import player from '../../assets/Player/player.png';
import _animations from './components/animations';

class Player {
    constructor(scene) {
        this.player = null;
        this._scene = scene;
        this.frameRate = 10;
    }

    init() {
        this._scene.load.spritesheet('player', player, { frameWidth: 85, frameHeight: 170 });
    }

    create() {
        _animations(this._scene, this.frameRate);

        this.player = this._scene.add.sprite(600, 370);
        this.player.setScale(1);
        this.player.play('walkRightBottom');
    }
}

export default Player