import Ground from '../Ground/index';

/* 
G - grass
D - grass second
S - stone
R - stone type 2
Test map:
{[
    'GGGGG',
    'GGGDG',
    'SSRSS',
    'GGSSR',
    'GGGGG'
]}

*/


class MapBuilder {
    constructor(_scene, textLayers) {
        this.layerGround = [];
        this.layerObjects = [];
        this.textLayers = textLayers;
    }

    init() {
        this.calculateCountGround();
    }

    create() {

    }
    
    calculateCountGround() {
        let map = this.textLayers.ground;
        let data = null;

        for(let y = 0; y < map.length; y++) {
            var row = map[y];

            for(let x = 0; x < row.length; x++) {
                var char = row[x];
                
                switch(char) {
                    case 'G': break;
                    case 'D': break;
                    case 'S': break;
                    case 'R': break;
                }

                // if(x === row.length - 1)
            }
        }
    }
}

export default MapBuilder