// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine, 
    options: {
        wireframes: false,
        background: "black"
    }
});

render.canvas.width = window.innerWidth
render.canvas.height = window.innerHeight

const gravityShapes = {
    isStatic: true,
    render: {
        fillStyle: "#00",
        strokeStyle: "#000000",
        lineWidth: "0",
    }
};

var G = Bodies.circle((490), 320, (50), gravityShapes);
var R = Bodies.rectangle((600), 330, (35), 70, gravityShapes);
var A = Bodies.circle((690), 330, (35), gravityShapes);
var V = Bodies.rectangle((793), 330, (65), (65), gravityShapes);
var I = Bodies.rectangle((880), 320, (20), (80), gravityShapes);
var T = Bodies.rectangle((950), 320, (40), (80), gravityShapes);
var Y = Bodies.rectangle((1040), 330, (65), (65), gravityShapes);
var text = Bodies.rectangle((760), 590, (1210), (210), gravityShapes);

let mouseX = 0
let mouseY = 0
window.addEventListener("mousemove", (e)=>{
    mouseX = e.clientX
    mouseY = e.clientY
})

function makeBox (){
    let box=Bodies.circle(mouseX, mouseY, 20,)
    Composite.add(engine.world, [box])
}


document.addEventListener("mousedown", (e)=> {
    setInterval(makeBox, 100)
  });


// add all of the bodies to the world
Composite.add(engine.world, [G, R, A, V, I, T, Y, text]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);