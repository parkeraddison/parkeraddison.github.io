
const md = new remarkable.Remarkable({
    html: true
});

let bodyMd = document.getElementById("md");

cv = fetch("https://raw.githubusercontent.com/parkeraddison/resume/master/cv.md")
.then(resp => resp.text())
.then(data => {
    bodyMd.innerHTML = md.render(data);
})
.then(() => interactivate())
.then(() => {
    document.getElementById("Statement").click();
    setTimeout(() => {
        document.getElementById("Education").click();
    }, 600);
})
.catch(e => {
    throw e;
});

function interactivate() {
    let h3s = document.getElementsByTagName("H3");

    for (h3 of h3s) {

        h3.setAttribute("id", h3.innerText.replace(/ /g, '-'));

        let elements = descendUntilHeaderOrRule(h3);

        let collapsible = document.createElement("DIV");
        collapsible.setAttribute("class", "collapsible");

        let content = document.createElement("DIV");
        content.setAttribute("class", "content");

        addElementsToDiv(content, elements);

        h3.insertAdjacentElement("beforebegin", collapsible);
        collapsible.insertAdjacentElement("beforeend", h3);
        collapsible.insertAdjacentElement("afterend", content);
    }

    let collapsibles = document.getElementsByClassName("collapsible");

    for (coll of collapsibles) {
        coll.addEventListener("click", function() {
            this.classList.toggle("active");
            // let content = this.getElementsByClassName("content")[0];
            let content = this.nextElementSibling;
            content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
        });
    }
}

/**
 * Starts at element which is a header and keeps working its way down the DOM
 * until it reaches an header of equal or lesser level or a horizonal rule.
 * Returns all elements that should be included within that heading.
*/
function descendUntilHeaderOrRule(header) {
    
    let level = +header.tagName[1]
    let curr = header;
    let next = curr.nextElementSibling;

    let elements = [];

    while (next != null) {
        if (next.tagName == "HR" || +next.tagName <= level) {
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