let lastScrollTop = 0;
const navbar = document.querySelector(".navlist");

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll down -> Hide navbar
        navbar.style.top = "-100px";
    } else {
        // Scroll up -> Show navbar
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});
