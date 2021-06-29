import animation from './modules/animation.js';
import promTimer from './modules/promTimer.js';
import modal from './modules/modal.js';
import filter from './modules/filter.js';
import calculator from './modules/calculator.js';


window.addEventListener('DOMContentLoaded', () => {
    

    animation();
    promTimer();
    modal('[data-modal]', '.modal');
    filter();
    calculator();


});

