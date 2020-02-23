let cards = document.querySelectorAll(".card.contains-anchor");

for (card of cards) {
    card.addEventListener("click", function() {
        console.log("Clicked on a card.");
        if (window.getSelection().toString().length > 0) {
            return;
        } else {
            window.location = this.querySelector("a").href;
        }
    });
}