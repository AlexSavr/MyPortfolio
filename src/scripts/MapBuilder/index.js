import Ground from '../Ground/index';

/* 
G - grass
D - grass second
F - grass + flowers
S - stone
R - stone type 2
Test map:
{[
    'GGGGG ',
    'GGGDG ',
    'SSRSS ',
    'GGSSR ',
    'GGGGG '
]}

*/


class MapBuilder {
    constructor(scene, textLayers) {
        this.scene = scene;
        this.layerGround = [];
        this.layerObjects = [];
        this.textLayers = textLayers;
    }

    init() {
        this.calculateCountGround();

        this.layerGround.map(el => {
            el.init();
        });
    }

    create() {
        this.layerGround.map(el => {
            el.create();

            console.log(el);
        })
    }
    
    calculateCountGround() {
        let map = this.textLayers.ground;
        let startX = -10;
        let startY = 150;

        const size = 127;
        const stairsOffset = 18;

        for(let y = 0; y < map.length; y++) {
            var row = map[y];
            startX = y % 2 ? -10 : -10 + (size / 2);
            startY += (size / 2) - 18;
            
            for(let x = 0; x < row.length; x++) {
                var char = row[x];
                startX += size;
                console.log(x);

                switch(char) {
                    case 'G': this.layerGround.push(new Ground(this.scene, { frame: 4, name: 'grass_'+y+x, startX, startY })); break;
                    case 'F': this.layerGround.push(new Ground(this.scene, { frame: 5, name: 'flowers_grass_'+y+x, startX, startY })); break;
                    case 'D': this.layerGround.push(new Ground(this.scene, { frame: 7, name: 'grass2_'+y+x, startX, startY })); break;
                    case 'S': this.layerGround.push(new Ground(this.scene, { frame: 16, name: 'stone_'+y+x, startX, startY })); break;
                    case 'R': this.layerGround.push(new Ground(this.scene, { frame: 15, name: 'rock_'+y+x, startX, startY })); break;
                }
            }
        }
    }
}

export default MapBuilder