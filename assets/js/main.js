let scrollingPhones = document.querySelectorAll(".mockup-scroll");

let offset = (-1 * window.innerHeight) / 2;

let options = {
    rootMargin: `0px 0px ${offset}px 0px`,
    threshold: 0
};

if (scrollingPhones.length > 0) {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.isScrolling) {
                entry.target.dataset.isScrolling = true;

                var i = 5;
                var int = setInterval(function() {
                    entry.target.scrollTo(0, i);
                    i += 1;
                    if (i >= 300) {
                        clearInterval(int);
                        entry.target.removeAttribute('data-is-scrolling');
                    }
                }, 5);
            }
        });
    }, options);

    scrollingPhones.forEach(phone => {
        observer.observe(phone);
    });
}
