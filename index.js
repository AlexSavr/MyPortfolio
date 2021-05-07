import config from './src/config';
import 'normalize.css';
import './src/styles/styles.scss';
import Phaser from 'phaser';
import Game from './src/game';

document.addEventListener('DOMContentLoaded', () => {
    const gameConfig = {
        ...config,
        scene: [ Game ]
    }

    const game = new Phaser.Game(gameConfig);
})