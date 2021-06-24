import image from '../assets/UI/BackgroundIFrame.png';

let closeBtn = null;

function showVideo(link) {
    if(closeBtn === null) {
        closeBtn = document.querySelector('.container-frame > i.close');
        closeBtn.addEventListener('click', () => {
            hideVideo();
        });
    }

    document.querySelector('.container-frame').classList.add("active");
    document.querySelector('.container-frame > img').src = image;
    document.querySelector('.container-frame > video').classList.add("active");
    document.querySelector('.container-frame > video').src = link;
    
}

export function hideVideo() {
    document.querySelector('.container-frame').classList.remove("active");
    document.querySelector('.container-frame > video').classList.remove("active");
    document.querySelector('.container-frame > video').src = null;
}

export default showVideo