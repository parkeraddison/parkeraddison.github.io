let url = "http://pgaddison.com";

/* Adding listeners to links */
for (let link of document.getElementsByClassName("redirect-linkedin")) {
    addRedirect(link, function(e) {
        e.stopImmediatePropagation();
        url = "https://linkedin.com/in/parkeraddison/";
        directTo(
            '<b>Pro Tip:</b> The first few lines of my experience summaries are bullet points, but clicking <i>"See more"</i> reveals a more detailed description.',
            {name: "LinkedIn", color: "#0077b5"},
            1);
    });
}
for (let link of document.getElementsByClassName("redirect-github")) {
    addRedirect(link, function(e) {
        e.stopImmediatePropagation();
        url = "https://github.com/parkergreyaddison/"
        directTo(
            '<b>Wow:</b> GitHub is a really cool place :)',
            {name: "GitHub", color: "#3f4448"},
            2);
    });
}

function addRedirect(element, handler) {
    element.addEventListener("click", handler);
    element.addEventListener("touchend", handler);
}

function directTo(message, destination, speedMult) {

    document.addEventListener("click", redirect);
    document.addEventListener("touchend", redirect);


    document.body.innerHTML = `
    <div class="redirect-container">
        <div class="redirect-tip">
        ${message}
        </div>
        <div id="redirect-timer">
            <div id="redirect-progress"></div>
        </div>    
        <div class="redirect-destination">
        Directing to ${destination.name}. You can click anywhere to skip the wait.
        </div>
    </div>
`;
    startTimer(destination.color, speedMult);
}

function startTimer(color, speedMult) {
    const progress = document.getElementById("redirect-progress");
    progress.style.backgroundColor = color;
    let index = 500 / speedMult;
    let loading = setInterval(increment, 1);

    function increment() {
        if (index < 0) {
            clearInterval(loading);
            redirect(url);
        } else {
            index--;
            progress.style.width = index * speedMult / 5 + '%';
        }
    }
}

function redirect() {
    window.location.href = url;
}