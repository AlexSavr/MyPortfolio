import zones from '../../../assets/zones.json';
import showIFrame from '../../showIFrame';

let keyActive = false;
let activeZone = -1;

export function actionWatchInit() {
    document.addEventListener('keydown', function (event) {
        if(event.code === "KeyE") {
            keyActive = true;
        }
    });

    document.addEventListener('keyup', function (event) {
        if(event.code === "KeyE") {
            keyActive = false;
            activeZone = -1;
        }
    });
}

function actionWatchUpdate(x, y) {
    if(keyActive === false) return;

    zones.map((zone, i) => {
        if((x > zone.position.x1 && x < zone.position.x2) &&
            (y > zone.position.y1 && y < zone.position.y2) &&
            activeZone !== i
        ) {
            activeZone = i;
            showIFrame(zone.link);
        }
    })
}

export default actionWatchUpdate;