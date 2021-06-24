import player from '../../assets/Player/player.png';
import _animations from './components/greySkinAnimation';
import _controls, { _controlsUpdate } from './components/controls'
import actionWatchUpdate, { actionWatchInit } from './components/actionWatch';
import drawCollision, { rotateTempCollision } from '../Collision/drawCollision';

class Player {
    constructor(scene, x, y) {
        this.model = null;
        this._scene = scene;
        this.frameRate = 10;
        // this.speed = 90;
        this.speed = 990;

        this.isMove = false;
        this.x = x || 1175;
        this.y = y || 600;

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
            if(event.code === "KeyR") {
                rotateTempCollision('+');
            }
            if(event.code === "KeyE") {
                rotateTempCollision('-');
            }
            if(event.code === "KeyP") {
                if(this.debugState.state === 0) {
                    this.debugState.x1 = this.x;
                    this.debugState.y1 = this.y;

                    this.debugState.state = 1;
                    return;
                } 
                
                
                console.log(`{ "x1": ${this.debugState.x1}, "y1": ${this.debugState.y1}, "x2": ${this.x}, "y2": ${this.y}, "rotation": 0 }`);
                this.debugState.state = 0;

                drawCollision(this._scene, { once: true, x1: this.debugState.x1, y1: this.debugState.y1, x2: this.x, y2: this.y });
            }
        });
    }

    create(onPlayerMove = () => {}) {
        _animations(this._scene, this.frameRate);

        this.model = this._scene.physics.add.sprite(this.x, this.y);
        this.model.setCollideWorldBounds(true);
        this.model.play('stopRight');

        this.model.body.setSize(60, 18);
        this.model.body.offset.y = 140;


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