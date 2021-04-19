const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
let root;
let darkModeCheckbox;

document.addEventListener('DOMContentLoaded', function () {

    // === Header stickiness ================================================ //
    const stickyElm = document.querySelector('header')

    const observer = new IntersectionObserver(
        ([e]) => {
            e.target.classList.toggle('at-top', e.boundingClientRect.y < 0);
        },
        { threshold: [1] }
    );

    observer.observe(stickyElm)

    // === Hand waving ====================================================== //
    const wavingHand = document.querySelector('.wave');

    function waveTheHand() {
        if (wavingHand.classList.contains('animate-me')) return;
        wavingHand.classList.add('animate-me');
        setTimeout(() => wavingHand.classList.remove('animate-me'), 1600);
    }

    waveTheHand();
    wavingHand.addEventListener("mouseenter", waveTheHand);

    // === Dark mode ======================================================== //
    root = document.documentElement;
    darkModeCheckbox = document.getElementById('dark-mode');
    darkModeCheckbox.checked = false;
})

function toggleDarkMode() {
    if (root.classList.contains('dark')) {
        darkModeCheckbox.checked = false;
        root.classList.remove('dark');
    } else {
        darkModeCheckbox.checked = true;
        root.classList.add('dark');
    }
}

if (prefersDarkScheme.matches) {
    toggleDarkMode();
    darkModeCheckbox.checked = true;
}

function checkedDarkMode() {
    toggleDarkMode();
}
