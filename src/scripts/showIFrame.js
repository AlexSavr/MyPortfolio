import image from '../assets/UI/BackgroundIFrame.png';

let closeBtn = null;

function showIFrame(link) {
    if(closeBtn === null) {
        closeBtn = document.querySelector('.container-frame > i.close');
        closeBtn.addEventListener('click', () => {
            hideIFrame();
        });
    }

    document.querySelector('.container-frame').classList.add("active");
    document.querySelector('.container-frame > img').src = image;
    document.querySelector('.container-frame > iframe').src = link;

}

export function hideIFrame() {
    document.querySelector('.container-frame').classList.remove("active");
    document.querySelector('.container-frame > iframe').src = null;
}

export default showIFrame