//Query selector returns the first HTML Element
const b = document.querySelector(".button");
const circles = document.querySelectorAll(".circle");
console.log(circles);

function moveCircles() {
    circles.forEach(function(elem, index) {
        elem.classList.toggle('move-circles');
        elem.style.backgroundColor = color;
    });
}

b.onclick = function (){
    // alert("Button clicked!")
    moveCircles;
};
