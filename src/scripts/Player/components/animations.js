export default _animations;

function _animations(scene, frameRate) { // TODO: Refactor
    scene.anims.create({
        key: 'walkRight',
        frames: scene.anims.generateFrameNumbers('player', { frames: [ 0, 1, 2, 3, 4, 5 ] }),
        frameRate,
        repeat: -1
    });

    scene.anims.create({
        key: 'walkRightTop',
        frames: scene.anims.generateFrameNumbers('player', { frames: [ 6, 7, 8, 9, 10, 11 ] }),
        frameRate,
        repeat: -1
    });

    scene.anims.create({
        key: 'walkTop',
        frames: scene.anims.generateFrameNumbers('player', { frames: [ 12, 13, 14, 15, 16, 17 ] }),
        frameRate,
        repeat: -1
    });

    scene.anims.create({
        key: 'walkLeftTop',
        frames: scene.anims.generateFrameNumbers('player', { frames: [ 18, 19, 20, 21, 22, 23 ] }),
        frameRate,
        repeat: -1
    });

    scene.anims.create({
        key: 'walkLeft',
        frames: scene.anims.generateFrameNumbers('player', { frames: [ 24, 25, 26, 27, 28, 29 ] }),
        frameRate,
        repeat: -1
    });

    scene.anims.create({
        key: 'walkLeft',
        frames: scene.anims.generateFrameNumbers('player', { frames: [ 24, 25, 26, 27, 28, 29 ] }),
        frameRate,
        repeat: -1
    });

    scene.anims.create({
        key: 'walkLeftDown',
        frames: scene.anims.generateFrameNumbers('player', { frames: [ 30, 31, 32, 33, 34, 35 ] }),
        frameRate,
        repeat: -1
    });

    scene.anims.create({
        key: 'walkRightDown',
        frames: scene.anims.generateFrameNumbers('player', { frames: [ 36, 37, 38, 39, 40, 41 ] }),
        frameRate,
        repeat: -1
    });

    scene.anims.create({
        key: 'walkDown',
        frames: scene.anims.generateFrameNumbers('player', { frames: [ 42, 43, 44, 45, 46, 47 ] }),
        frameRate,
        repeat: -1
    });

}