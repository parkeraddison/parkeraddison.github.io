const md = new remarkable.Remarkable({
    html: true
});

let bodyMd = document.getElementById("md");

function loadPage(pagename) {
    let page = fetch(`/content/${pagename}.md`)
    .then(resp => resp.text())
    .then(data => {
        bodyMd.innerHTML = md.render(data);
    })
    .then(render)
    .catch(e => {
        throw e;
    });
}

function render() {
    let imgs = document.getElementsByTagName("img");

    for (img of imgs) {
        
        let caption = img.parentElement;

        caption.setAttribute("class", "caption");

        caption.insertAdjacentElement("beforebegin", img);
    }
}