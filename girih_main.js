"use strict";
import { CanvasRenderer } from "./canvas_renderer.js";
import { Girih, GirihType } from "./girih_tiles.js";
import { Vec2d } from "./vector2d.js";

const canvas = document.getElementById("c");
const renderer = new CanvasRenderer(canvas);

// shape selection

const shape = document.getElementsByName("shape");
const shape_selection = document.getElementById("shape");

let currGirihType = GirihType.deca;

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
      currGirihType = -1; // TODO : !!!!!!!!!!!!!!!!!!!!!!!!!
  }
});

// instantiation
const shapes = [];

// TODO : Vraiment besoin d'une fonction ?
function addShape(center) {
  shapes.push(new Girih(center, 10, currGirihType));
}

// drawing on canvas

document.getElementById("clear").addEventListener("click", () => {
  shapes.length = 0;
  renderer.clear();
});

canvas.addEventListener("click", (ev) => {
  addShape(new Vec2d(ev.offsetX, ev.offsetY));
});

canvas.addEventListener("mousemove", (ev) => {
  // Effacer le canvas
  renderer.clear();

  // Dessiner toutes les formes
  shapes.forEach((c) => {
    renderer.drawGirih(c, 10);
  });

  // Dessiner la forme temporaire à l'emplacement de la souris
  renderer.drawGirih(
    new Girih(new Vec2d(ev.offsetX, ev.offsetY), 10, currGirihType),
    10
  );
});