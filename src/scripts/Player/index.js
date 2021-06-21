import player from '../../assets/Player/player.png';
import _animations from './components/greySkinAnimation';
import _controls, { _controlsUpdate } from './components/controls'
import actionWatchUpdate, { actionWatchInit } from './components/actionWatch';

class Player {
    constructor(scene, x, y) {
        this.model = null;
        this._scene = scene;
        this.frameRate = 10;
        // this.speed = 90;
        this.speed = 900;

        this.isMove = false;
        this.x = x || 1175;
        this.y = y || 654;
    }

    init() {
        this._scene.load.spritesheet('player', player, { frameWidth: 85, frameHeight: 170 });

        document.addEventListener('keydown', function (event) {

            if(event.code === "KeyO") {
                console.log(this.x, ',', this.y, this.model);
            }
        });
    }

    create(onPlayerMove = () => {}) {
        _animations(this._scene, this.frameRate);

        this.model = this._scene.physics.add.sprite(this.x, this.y);
        this.model.setCollideWorldBounds(true);
        this.model.play('stopRight');

        _controls(this.model, this.speed, ({ isMove, x, y }) => {
            this.isMove = isMove; 
            this.x = x; 
            this.y = y; 
        });

        actionWatchInit();
    }

    update() {
        _controlsUpdate();

        actionWatchUpdate(this.x, this.y);
        // console.log(this.x, this.y);
    }
}

export default Player