let url = "http://parkeraddison.com";

const overlay = document.getElementById("overlay");

let redirectTimeout;

let currentScrollPosition;

/* Adding listeners to links */
for (let link of document.getElementsByClassName("redirect-linkedin")) {
    addRedirect(link, function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        url = "https://linkedin.com/in/parkeraddison/";
        currentScrollPosition = document.documentElement.scrollTop;
        directTo(
            '<b>Pro Tip:</b> The first few lines of my experience summaries are bullet points, but I write more detailed descriptions if you click <i>"See more"</i>.',
            {name: "LinkedIn", color: "#0077b5"},
            4000);
    });
}
for (let link of document.getElementsByClassName("redirect-github")) {
    addRedirect(link, function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        url = "https://github.com/parkergreyaddison/";
        currentScrollPosition = document.documentElement.scrollTop;
        directTo(
            "<b>Take a peek:</b> Make sure to check out my comments.  I'm particularly proud of my `coding-challenges` comments!",
            {name: "GitHub", color: "#3f4448"},
            4000);
    });
}

function addRedirect(element, handler) {
    element.addEventListener("click", handler);
    element.addEventListener("touchend", handler);
}

function directTo(message, destination, duration) {

    overlay.addEventListener("click", redirect);
    overlay.addEventListener("touchend", redirect);


    overlay.innerHTML = `
    <div id="redirect-container">
        <div id="redirect-tip">
        ${message}
        </div>
        <div id="redirect-timer">
            <div id="redirect-progress"></div>
        </div>    
        <div id="redirect-destination">
        Directing to ${destination.name}. You can click anywhere to skip the wait.
        </div>
    </div>
`;
    startTimer(destination.color, duration);
}

function startTimer(color, duration) {
    scroll(0,0);
    const progress = document.getElementById("redirect-progress");
    progress.style.transition = `width ${duration}ms linear`;
    progress.style.width = "100%";
    overlay.style.display = "grid";
    document.body.style.overflow = "hidden";

    setTimeout(function() {
        progress.style.width = "0%";
        overlay.style.fontSize = "1em";
        overlay.style.backgroundColor = color;
    }, 15);
    redirectTimeout = setTimeout(redirect, duration);
}

function redirect() {
    scroll(0, currentScrollPosition);
    clearTimeout(redirectTimeout);
    overlay.style.display = "none";
    document.body.style.overflow = "scroll";
    window.location.href = url;
}