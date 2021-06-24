import zones from '../../../assets/zones.json';
import showIFrame, { hideIFrame } from '../../showIFrame';
import showVideo, { hideVideo } from '../../showVideo';

let keyActive = false;
let activeZone = -1;

export function actionWatchInit() {
    document.addEventListener('keydown', function (event) {
        if(event.code === "KeyE") {
            keyActive = true;
        }

        if(event.code === "Escape") {
            hideIFrame();
            hideVideo();
            activeZone = -1;
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
            if( activeZone === 1 ||
                activeZone === 7 ||
                activeZone === 9 ||
                activeZone === 10
            ) {
                showVideo(zone.link);
                console.log('video');
            } else {
                showIFrame(zone.link);
                console.log('frame');
            }
        }
    })
}

export default actionWatchUpdate;