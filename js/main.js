/* Twemoji parse */
window.onload = function() {twemoji.parse(document.body)};

/* Scroll Reveal */
window.sr = ScrollReveal();
sr.reveal(".scroll-reveal", {
    duration: 1500
})
sr.reveal(".slide-in", {
    distance: '2em',
    origin: 'bottom',
    opacity: null,
    duration: 600,
    easing: 'ease-in-out'
});

/* Page scrolling */
function scrollTo(element) {
    window.scroll({
        behavior: "smooth",
        left: 0,
        top: element.offsetTop
    })
}

function scrollToTop() {
    scrollTo(document.documentElement);
}

function scrollToAbout() {
    scrollTo(document.getElementById("about"));
}

function scrollToUpdates() {
    scrollTo(document.getElementById("updates"));
}