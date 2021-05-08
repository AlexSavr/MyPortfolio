import spritesheet from '../../assets/blocks/spritesheet.png';

class Ground {
    constructor(scene, { src, name, startX, startY, rows, columns, frame = -1 }) {
        this._scene = scene;

        this.src = frame !== -1 ? spritesheet : src;
        this.name = name;
        this.frame = frame;

        this.startX = startX || 0;
        this.startY = startY || 0;
        this.rows = rows || 1;
        this.columns = columns || 1;
        this.size = 129;
    }

    init() {
        if(!this.src) throw Error('[Ground] src is undefined');
        if(!this.name) throw Error('[Ground] Name is undefined');

        if(this.frame === -1)
            this._scene.load.image(this.name, this.src);
        else 
            this._scene.load.spritesheet(this.name, this.src, { frameWidth: 140, frameHeight: 129 });
    }

    create() {
        if(this.frame === -1) {
            this.fillArea();
        } else {
            this._scene.anims.create({
                key: 'blocks',
                frames: this._scene.anims.generateFrameNumbers(this.name, { frames: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17 ] }),
                frameRate: 0,
                repeat: 0
            });

            let tile = this._scene.add.sprite(this.startX, this.startY, this.name, this.frame);
            tile.setOrigin(0, 0.5);
        }
    }

    fillArea() {
        for(let i = 0; i <= this.rows; i++) {
            const   width = this.size * this.columns,
                    height = this.size,
                    yOffset = (this.size / 2) - 18;

            let x = this.startX, 
                y = this.startY + (yOffset * i);

            if(i % 2) {
                x = this.startX + (this.size / 2);
            }

            let tile = this._scene.add.tileSprite(x, y, width, height, this.name);
            tile.setOrigin(0, 0.5);
        }
    }
}

export default Ground