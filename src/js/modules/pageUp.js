function pageUp(upItem) {

    const up = document.querySelector(upItem),
          links = document.querySelectorAll('a[href^="#"]');

    window.addEventListener('scroll', () => {

        if (window.pageYOffset > 1300) {
            up.style.opacity = '1';
        } else {
            up.style.opacity = '0';
        }

    });

    function slowScroll(event,link) {
        event.preventDefault();

        const id = link.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    links.forEach(link => {
        link.addEventListener('click', event => {
            slowScroll(event,link);
        });
    });
}

export default pageUp;