let modal = document.getElementById("contact-modal");

let contactLink = document.getElementsByClassName("contact-link")[0];

let contactClose = document.getElementsByClassName("contact-close")[0];

contactLink.addEventListener("click", function() {
    modal.style.display = "block";
});

contactClose.addEventListener("click", function() {
    modal.style.display = "none";
});

window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}