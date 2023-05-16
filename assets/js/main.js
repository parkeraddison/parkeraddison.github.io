// Add scroll reveal to all section elements
ScrollReveal().reveal('main section article', { delay: 200, distance: '20px' });
ScrollReveal().reveal('main section > *:not(article)', { delay: 200, distance: '20px' });

// Reveal TOC on scroll-up
var toc = document.querySelector('section.toc')
window.onscroll = function (e) {
    if (this.oldScroll > this.scrollY && this.scrollY > 100) {
        this.scrolledUpAmt = this.scrolledUpAmt + 1;
        if (this.scrolledUpAmt > 30) {
            toc.classList.add('scrolling');
        }
    } else {
        this.scrolledUpAmt = 0;
        toc.classList.remove('scrolling');
    }
    this.oldScroll = this.scrollY;
    }

// Add copy functionality to code blocks
var codeBlocks = document.querySelectorAll('div.highlight');
codeBlocks.forEach(div => {

    let copy = document.createElement('button');
    copy.innerText = '📋';

    copy.addEventListener('click', function(e) {
        navigator.clipboard.writeText(div.querySelector('pre').innerText).then(
            function(){
                copy.classList.add('activated');
                setTimeout(function(){ copy.classList.remove('activated'); }, 1500);
            }
        );
    });

    div.append(copy);
});
