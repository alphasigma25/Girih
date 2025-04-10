"use strict";
import { CanvasRenderer } from "./canvas_renderer.js";
import { Girih, GirihType } from "./girih_tiles.js";
import { Vec2d } from "./vector2d.js";

const canvas = document.getElementById("c");
const shape: NodeListOf<HTMLInputElement> = document.getElementsByName(
  "shape"
) as any; // TODO : Chercher une meilleure solution que as any

for (const element of shape) {
  if (!(element instanceof HTMLInputElement))
    throw new Error("Unsupported browser");
}

const shape_selection = document.getElementById("shape");
const clearButton = document.getElementById("clear");
const rotatecwButton = document.getElementById("rotatecw");
const rotateacwButton = document.getElementById("rotateacw");

if (canvas == null) throw new Error("Unsupported browser");
if (shape_selection == null) throw new Error("Unsupported browser");
if (clearButton == null) throw new Error("Unsupported browser");
if (rotatecwButton == null) throw new Error("Unsupported browser");
if (rotateacwButton == null) throw new Error("Unsupported browser");

if (!(canvas instanceof HTMLCanvasElement))
  throw new Error("Unsupported browser");

const renderer = new CanvasRenderer(canvas);

const shapes: Girih[] = [];

// TODO : Vraiment besoin d'une fonction ? oui. pour l'instant.
function addShape(center: Vec2d) {
  shapes.push(new Girih(center, currGirihType + currRotation));
  console.log(currGirihType + currRotation);
  console.log(currRotation);
}

function draw() {
  // Effacer le canvas
  renderer.clear();

  // Dessiner toutes les formes
  shapes.forEach((c) => {
    renderer.drawGirih(c);
  });
}

let currGirihType = GirihType.deca;
let currRotation = 0;

function RotateShapes(isClockwise: boolean){
  console.log("coucou")
  if (isClockwise) {currRotation += 1;}
  else { currRotation += 4; }
  currRotation = currRotation % 5;
  //console.log(currRotation);
}

rotatecwButton.addEventListener("click", () => {
  RotateShapes(true);
})
rotateacwButton.addEventListener("click", () => {
  RotateShapes(false);
})

shape_selection.addEventListener("click", () => {
  let curr_shape = "1";

  for (const element of shape) {
    if (element.checked) curr_shape = element.value;
  }

  switch (curr_shape) {
    case "1":
      currGirihType = GirihType.deca;
      break;
    case "2":
      currGirihType = GirihType.penta;
      break;
    case "3":
      currGirihType = GirihType.hexa;
      break;
    case "4":
      currGirihType = GirihType.rhombus;
      break;
    case "5":
      currGirihType = GirihType.bowtie;
      break;
    default:
      throw new Error("Unsupported browser");
  }
  console.log(currGirihType);
});

clearButton.addEventListener("click", () => {
  shapes.length = 0;
  renderer.clear();
});

canvas.addEventListener("click", (ev) => {
  addShape(new Vec2d(ev.offsetX, ev.offsetY));
});

canvas.addEventListener("mousemove", (ev) => {
  draw();

  // Dessiner la forme temporaire à l'emplacement de la souris
  renderer.drawGirih(
    new Girih(new Vec2d(ev.offsetX, ev.offsetY), currGirihType + currRotation)
  );
});

canvas.addEventListener("mouseleave", (ev) => {
  draw();
});
