var newPara = document.createElement("p");
var node = document.createTextNode('I am a paragraph and I was added using JS');

newPara.appendChild(node);

var element = document.querySelector("#container");
element.appendChild(newPara);