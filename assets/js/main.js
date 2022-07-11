// Add copy functionality to code blocks
var codeBlocks = document.querySelectorAll('div.highlight');

codeBlocks.forEach(div => {

    let copy = document.createElement('button');
    copy.innerText = '📋';

    copy.addEventListener('click', function(e) {
        navigator.clipboard.writeText(div.querySelector('pre').innerText);
    });

    div.append(copy);
});
