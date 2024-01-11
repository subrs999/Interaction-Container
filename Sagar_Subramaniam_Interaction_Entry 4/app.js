let innerCursor = document.querySelector(".inner-cursor")
let sunnyInnit = document.querySelector("#sun")

document.addEventListener("mousemove", moveCursor);

function moveCursor(e){

    let x = e.clientX;
    let y = e.clientY;
    let w = window.innerWidth;
    let h = window.innerHeight;

    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;

    let Dist = Math.hypot((x-(w/2)), (y-(h/2)))
    let colorB = Math.abs(Math.sin((Math.PI * Dist) / (Math.hypot(w, h))));

    document.body.style.backgroundColor = `rgb(${colorB * 50},${colorB * 200},${(colorB) * 255})`;
    innerCursor.style.backgroundColor = `rgb(${colorB * 150},${colorB * 150},${(colorB) * 150})`;

}

sunnyInnit.addEventListener("click", () =>{
    document.removeEventListener("mousemove", moveCursor)
    document.getElementById("hidden1").style.opacity = "1";
    document.getElementById("hidden2").style.opacity = "1";
    document.getElementById("hidden3").style.opacity = "1";
    document.getElementById("hidden4").style.opacity = "1";
});

