const md = new remarkable.Remarkable({
    html: true
});

let bodyMd = document.getElementById("md");

let portfolio = fetch("/content/portfolio.md")
    .then(resp => resp.text())
    .then(data => {
        bodyMd.innerHTML = md.render(data);
    })
    .then(render)
    .catch(e => {
        throw e;
    });


function render() {

    let h1s = document.querySelectorAll("#md h1");

    let toc = document.getElementById("table-of-contents");
    let tocUl = toc.querySelector("ul");

    for (h1 of h1s) {

        let id = getHeadingID(h1)
        tableOfContentify(id, tocUl);
        sectionify(h1, id);
    }

    colorize()
}


function getHeadingID(h1) {
    let innerText = h1.innerText;

    let displayText = innerText.replace(/\s+\{.*\}/g, '');
    h1.innerText = displayText;

    let customId = /\{#(.*)\}/g.exec(innerText);
    let id = customId ? customId[1] : displayText.replace(/ /g, '-');

    return id
}


function tableOfContentify(id, tocUl) {

    tocUl.innerHTML += `<li><a href=#${id}>${toTOCCase(id)}</a></li>`;
}

function toTOCCase(string) {
    string = string.replace('-', ' ');

    string = string.replace(/\b\w/g, char => char.toUpperCase());

    return string;
}


function sectionify(h1, id) {

    let elements = descendUntilHeaderOrRule(h1);

    let section = document.createElement("SECTION");
    section.setAttribute("id", id);

    let content = document.createElement("DIV");
    content.setAttribute("class", "content");

    let items = divify(elements);
    addElementsToDiv(content, items);

    h1.insertAdjacentElement("beforebegin", section);
    section.insertAdjacentElement("beforeend", h1);
    section.insertAdjacentElement("beforeend", content);
    
}

function divify(elements) {

    let divs = [];
    
    let h2s = elements.filter(e => e.matches("h2"));

    for (h2 of h2s) {

        let elements = [h2, ...descendUntilHeaderOrRule(h2)];

        let item = document.createElement("DIV");
        item.setAttribute("class", "item");

        addElementsToDiv(item, elements);

        divs.push(item);
    }

    return divs;
}


function descendUntilHeaderOrRule(header) {

    let level = +header.tagName[1]
    let curr = header;
    let next = curr.nextElementSibling;

    let elements = [];

    while (next != null) {
        if (next.tagName == "HR" || +next.tagName[1] <= level) {
            break;
        } else {
            elements.push(next);
            curr = next;
            next = next.nextElementSibling;
        }
    }

    return elements;
}

function addElementsToDiv(div, elements) {
    for (element of elements) {
        div.insertAdjacentElement("beforeend", element);
    }
}

function colorize() {
    let colors = ["#ff6961", "#f0a30a", "#06d6a0", "#00b3e5", "#9560ff"];
    let items = document.querySelectorAll("#Projects .item");

    for (let i = 0; i < items.length; i++) {
        item = items[i];
        color = colors[i % colors.length];

        item.style.borderColor = color;
    }
}