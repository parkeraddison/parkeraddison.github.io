const md = new remarkable.Remarkable({
    html: true
});

let bodyMd = document.getElementById("md");

cv = fetch("/content/portfolio.md")
    .then(resp => resp.text())
    .then(data => {
        bodyMd.innerHTML = md.render(data);
    })
    .then(() => tableOfContentify())
    .catch(e => {
        throw e;
    });

function tableOfContentify() {

    let h1s = document.querySelectorAll("#md h1");
    let toc = document.getElementById("table-of-contents");
    let tocUl = toc.querySelector("ul");

    for (h1 of h1s) {

        let innerText = h1.innerText;

        let displayText = innerText.replace(/\s+\{.*\}/g, '');

        let customId = /\{#(.*)\}/g.exec(innerText);
        let id = customId ? customId[1] : displayText.replace(/ /g, '-');

        h1.innerText = displayText;
        h1.setAttribute("id", id);

        tocUl.innerHTML += `<li><a href=#${id}>${toTOCCase(id)}</a></li>`;
    }
}

function toTOCCase(string) {
    string = string.replace('-', ' ');

    string = string.replace(/\b\w/g, char => char.toUpperCase());

    return string;
}
