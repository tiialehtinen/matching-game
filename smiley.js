
var leftSide = document.getElementById("leftSide");
var rightSide = document.getElementById("rightSide");

var numberOfFaces = 5;

function generateFaces(){
    var i = 0;
    while (i < numberOfFaces){ // while loop, remember i++
        var smiley = document.createElement("IMG");//element must be created first before can append to it.
        smiley.setAttribute("src","smile.png"); // element.setAttribute(attribute name, attribute value)
        smiley.style.left = Math.floor(Math.random()*400) + "px";
        smiley.style.top = Math.floor(Math.random()*400) + "px";
        smiley.setAttribute("alt", "Smiley Face");
        leftSide.appendChild(smiley);//document.appendChild(element). var leftSide is document.getElement etc
        i++;
    }
    var leftSideImages = leftSide.cloneNode(true);// first must find what is copied. We have that in a variable.
    leftSideImages.removeChild(leftSideImages.lastChild); // remove last Child from left side.
    rightSide.appendChild(leftSideImages);// then must attach the copy where wanted.

    leftSide.lastChild.onclick = function nextLevel(event) {
        event.stopPropagation();
        generateFaces();

    }

}

var the_body = document.getElementsByTagName("body")[0];
the_body.onclick = function gameOver(){
    alert("Game Over");
    leftSide.lastChild.onclick = null;
    the_body.onclick = null;
};