'use strict';

import pageUp from './modules/pageUp';
import modal from './modules/modal';
import timer from './modules/timer.js';
import burger from './modules/burger';

window.addEventListener('DOMContentLoaded', () => {

    pageUp('.page-up');
    modal();
    timer('.timer', '2021-06-30');
    burger();
});