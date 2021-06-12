const burger = () => {
    const trigger = document.querySelector('.burger'),
          close = document.querySelector('.mobile__close'),
          menu = document.querySelector('.mobile'),
          links = document.querySelectorAll('.mobile__item');

    trigger.addEventListener('click', () => {
        menu.classList.add('mobile_active');
    });

    close.addEventListener('click', () => {
        menu.classList.remove('mobile_active');
    });

    links.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('mobile_active');
        });
    });
};
export default burger;