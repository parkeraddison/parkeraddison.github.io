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

/* Toggle the tooltip on click, close on scroll */
function openTooltip() {
    tooltiptext.style.visibility = "visible";
    tooltiptext.style.opacity = '1';

    document.addEventListener("click", closeTooltip);
    document.addEventListener("scroll", closeTooltip);
};

function closeTooltip() {
    tooltiptext.style.visibility = "hidden";
    tooltiptext.style.opacity = '0';

    document.removeEventListener("click", closeTooltip);
    document.removeEventListener("scroll", closeTooltip);
};

function toggleTooltip(e) {
    e.stopImmediatePropagation();
    if (tooltiptext.style.opacity === '1') {
        closeTooltip();
    } else {
        openTooltip();
    }
}

function scrollCloseTooltip() {
    if (tooltiptext.style.opacity === '1') {
        closeTooltip();
    }
}

// Add event listener for tooltip
const tooltip = document.getElementById("tooltip");
const tooltiptext = document.getElementById("tooltiptext");
tooltip.addEventListener("click", toggleTooltip);
// tooltip.addEventListener("touchstart", toggleTooltip, false);

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