// Click effect 

export function clickEffect(e) {
    e.target.classList.add("click")
    setTimeout(() => {
        e.target.classList.remove("click")
    }, 300);

}

// Show an section with Scroll

export function appearWithScroll(element) {
    window.addEventListener('scroll', function () {
        var halfViewportHeight = window.innerHeight / 10 * 8.5;
        var div2Position = element.getBoundingClientRect().top;
        if (div2Position < halfViewportHeight) {

            element.style.opacity = "1";
        } else {

            element.style.opacity = "0";
        }
    })
};
