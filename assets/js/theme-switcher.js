initializeSiteTheme();

function initializeSiteTheme() {

    if (localStorage.getItem('site-theme') == 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

function initializeThemeSwitcher() {

    switcher = document.getElementById('theme-switcher');

    if (document.documentElement.getAttribute('data-theme') == 'dark') {
        switcher.checked = true;
    } else {
        switcher.checked = false;
    }

    switcher.addEventListener('change', switchSiteTheme);
}

function switchSiteTheme(e) {

    // When we switch themes we'll want to store the selected theme in local
    // storage, then set the appropriate data attribute on the html element.
    //
    // Right beofre we do so, we can add a quick class to the root so that every
    // element gets a transition property applied. But we don't need this on all
    // the time, so we can remove it again afterwards.

    let theme;

    if (e.target.checked) {
        theme = 'dark';
        // localStorage.setItem('site-theme', 'dark');
        // document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        theme = 'light';
        // localStorage.setItem('site-theme', 'light');
        // document.documentElement.setAttribute('data-theme', 'light');
    }

    document.documentElement.classList.add('theme-transition');
    localStorage.setItem('site-theme', theme);
    window.setTimeout(function() {document.documentElement.setAttribute('data-theme', theme); });
    window.setTimeout(function() { document.documentElement.classList.remove('theme-transition'); }, 1000);
}
