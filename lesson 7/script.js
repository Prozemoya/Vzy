const allParagraph = document.querySelectorAll('.text');

for (i = 0; i < allParagraph.length;  i++) {
    allParagraph[i].innerHTML += ' | change ' + (i + 1)
    console.log(allParagraph[i].innerHTML);
}