import getScrollSize from './scroll';

const modal = () => {
    let anyBtnPress = false;

    function bindModal(modalTriggerSelector,modalSelector, closeCroseSelector) {
        const triggers = document.querySelectorAll(modalTriggerSelector),
              modal = document.querySelector(modalSelector),
              crose = document.querySelector(closeCroseSelector),
              popups = document.querySelectorAll('[data-modal]'),
              scroll = getScrollSize(); //dependencies 

        //Here We create function, whitch can open modal and close other modals
        //Also this func check if any modals are open
        function showModal(e, item) {
            if (e.target) {
                let display;

                e.preventDefault();

                //check if any modals are open
                document.querySelectorAll('[data-modal]').forEach(item => {
                    if (window.getComputedStyle(item).display == 'block') {
                        display = 'block';
                    }
                }); 

                if (!display) {
                    popups.forEach(item => {
                        item.style.display = 'none';
                    });

                    anyBtnPress = true;

                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                    if (document.documentElement.scrollWidth > 992) {
                        document.body.style.marginRight = `${scroll}px`;
                    }
                
                    clearTimeout(timer);
                }
            }
        }
        
        //just open modal when user clicked on triggers
        triggers.forEach(item => {
            item.addEventListener('click', e => {
                showModal(e, item);
            });
        });

        //close all modals when user clicked on cross
        crose.addEventListener('click', () => {

            popups.forEach(item => {
                item.style.display = 'none';
            });
            document.body.style.overflow = '';
            document.body.style.marginRight = '0';

        });

        //close all modals when user clicked on substrate
        modal.addEventListener('click', e => {
            if(e.target == modal) {
                popups.forEach(item => {
                    item.style.display = 'none';
                });
                document.body.style.overflow = '';
                document.body.style.marginRight = '0';
            }
        });
    }

    function showModalByScroll(selector) {
        window.addEventListener('scroll', () => {
            if (!anyBtnPress && (window.pageYOffset + document.documentElement.clientHeight >= 
                document.documentElement.scrollHeight)) {
                document.querySelector(selector).click();
            }
        });
    }

    bindModal('[data-trigger]','.overlay','.overlay .modal__close');
    showModalByScroll('[data-trigger]');

    //in some seconds will appear modal window
    const timer = setTimeout(() => {

        if(!(document.querySelector('.mobile').classList.contains('mobile_active'))) {
            document.querySelector('.overlay').style.display = 'block';
            document.body.style.overflow = 'hidden';
        }        

        let scroll = getScrollSize();
        if (document.documentElement.scrollWidth > 992) {
            document.body.style.marginRight = `${scroll}px`;
        }

    }, 1000 * 30);

};

export default modal;