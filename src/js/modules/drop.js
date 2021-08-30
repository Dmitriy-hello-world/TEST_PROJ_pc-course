const drop = (inputSelectors) => {

    const inputs = document.querySelectorAll(inputSelectors);

    ['drag','dragend','dragstart','dragexit'].forEach( event => {
        inputs.forEach( input => {
            input.addEventListener(event, preventDefault, false);
        });
    });

    function preventDefault(e) {
        e.preventDefault();
        e.stopPropagation();
    }

};

export default drop;