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
const openTooltip = (tooltip) => {
    tooltip.style.visibility = "visible";
    tooltip.style.opacity = '1';
};

const closeTooltip = (tooltip) => {
    tooltip.style.visibility = "hidden";
    tooltip.style.opacity = '0';
};

const toggleTooltip = () => {
    const tooltip = document.getElementById("tooltiptext");

    if (tooltip.style.opacity === '1') {
        closeTooltip(tooltip);
    } else {
        openTooltip(tooltip);
    }
}

const scrollCloseTooltip = () => {
    const tooltip = document.getElementById("tooltiptext");

    if (tooltip.style.opacity === '1') {
        closeTooltip(tooltip);
    }
}

/* Page scrolling */
const scrollTo = (element) => {
    element.scrollIntoView({
        behavior: "smooth"
    })
}

const scrollToTop = () => {
    scrollTo(document.documentElement);
}

const scrollToAbout = () => {
    scrollTo(document.getElementById("about"));
}

const scrollToUpdates = () => {
    scrollTo(document.getElementById("updates"));
}