class Ground {
    constructor(scene, { src, name, startX, startY, rows, columns }) {
        this._scene = scene;

        this.src = src;
        this.name = name;

        this.startX = startX || 0;
        this.startY = startY || 0;
        this.rows = rows || 1;
        this.columns = columns || 1;
        this.size = 129;
    }

    init() {
        if(!this.src) throw Error('[Ground] src is undefined');
        if(!this.name) throw Error('[Ground] Name is undefined');

        this._scene.load.image(this.name, this.src);
    }

    create() {
        for(let i = 0; i <= this.rows; i++) {
            const   width = this.size * this.columns,
                    height = this.size,
                    yOffset = (this.size / 2) - 18;

            let x = this.startX, 
                y = this.startY + (yOffset * i);

            if(i % 2) {
                x = this.startX + (this.size / 2);
            }

            this._scene.add.tileSprite(x, y, width, height, this.name);
        }
    }
}

export default Ground