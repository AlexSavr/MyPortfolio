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
        this.debugState = {
            state: 0,
            x1: 0,
            y1: 0
        };
    }

    init() {
        this._scene.load.spritesheet('player', player, { frameWidth: 85, frameHeight: 170 });

        document.addEventListener('keydown', (event) => {
            if(event.code === "KeyO") {
                if(this.debugState.state === 0) {
                    this.debugState.x1 = this.x;
                    this.debugState.y1 = this.y;

                    this.debugState.state = 1;
                    return;
                } 
                
                
                console.log(`{ "position": { "x1": ${this.debugState.x1}, "y1": ${this.debugState.y1}, "x2": ${this.x}, "y2": ${this.y} }, "link": ""},`);
                this.debugState.state = 0;
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