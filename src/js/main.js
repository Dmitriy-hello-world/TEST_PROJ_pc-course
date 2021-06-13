'use strict';

import pageUp from './modules/pageUp';
import modal from './modules/modal';
import timer from './modules/timer.js';
import burger from './modules/burger';
import cards from './modules/cards';
import forms from './modules/form';

window.addEventListener('DOMContentLoaded', () => {

    pageUp('.page-up');
    modal();
    timer('.timer', '2021-06-30');
    burger();
    cards({
        triggerSelector: '.teachers__btn',
        backTrigger: '.teachers__back',
        mainSide: '.teachers__item',
        backSide: '.teachers__item-back',
        mainActiveSelector: 'teachers__item_active',
        backActiveSelector: 'teachers__item-back_active'
    });
    forms();
});