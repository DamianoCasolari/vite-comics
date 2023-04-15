export function clickEffect(e) {
    e.target.classList.add("click")
    setTimeout(() => {
        e.target.classList.remove("click")
    }, 300);

}