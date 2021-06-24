import colls from '../../assets/collisions.json';

let tempDebug = null;

const getSize = (num1, num2) => {
    let result;
    if(!Math.sign(num1 - num2)) {
        result = num1 - num2;
    } else {
        result = num2 - num1;
    }

    console.log(result);

    return result;
};

function drawCollision(_scene, options = { once: false, x1: 0, y1: 0, x2: 0, y2: 0, player: null }) {
    const playerOffsetY = 70;

    if(!options.once) {        
        colls.map(col => {
            let rect = _scene.add.rectangle(col.x1, col.y1 + playerOffsetY, getSize(col.x1, col.x2), getSize(col.y1, col.y2), 0x6666ff);
            rect.displayOriginX = 0;
            rect.displayOriginY = 0;
            rect.angle = col.rotation;
            _scene.physics.add.existing(rect);

            rect.body.angle = col.rotation;
            rect.body.immovable = true;
            rect.body.moves = false;

            _scene.physics.add.collider(options.player, rect);
            console.log('added!', rect);
        });
    } else {
        tempDebug = _scene.add.rectangle(options.x1, options.y1 + playerOffsetY, getSize(options.x1, options.x2), getSize(options.y1, options.y2), 0x6666ff, .5);
        tempDebug.displayOriginX = 0;
        tempDebug.displayOriginY = 0;
    }
}

export function rotateTempCollision(action) {
    if(!tempDebug) throw Error('Temp collision is not created!');

    if(action === '+')
        tempDebug.angle += 5;
    else(action === '-')
        tempDebug.angle -= 5;    

    console.log(tempDebug.rotation);
}

export default drawCollision