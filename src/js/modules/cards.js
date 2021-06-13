const cards = ({triggerSelector,backTrigger,mainSide,backSide,mainActiveSelector, backActiveSelector}) => {
    const triggers = document.querySelectorAll(triggerSelector),
          backTriggers = document.querySelectorAll(backTrigger),
          main = document.querySelectorAll(mainSide),
          back = document.querySelectorAll(backSide);

    function bindCards(trigger, isback = false) {
        trigger.forEach( (item,i) => {
            item.addEventListener('click', e => {
    
                e.preventDefault();
    
                if (e.target) {
                    main.forEach( (item,j) => {
                        if ( i == j && !isback) {
                            item.classList.add(mainActiveSelector);
                            back[j].classList.add(backActiveSelector);
                        } else if ( i == j && isback) {
                            item.classList.remove(mainActiveSelector);
                            back[j].classList.remove(backActiveSelector);
                        }
                    });
                }
            });
        });
    }

    bindCards(triggers);
    bindCards(backTriggers, true);


};

export default cards;