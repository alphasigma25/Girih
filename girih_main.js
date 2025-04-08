"use strict";
import { CanvasRenderer } from "./canvas_renderer.js";
import { Girih, GirihType } from "./girih_tiles.js";
import { Vec2d } from "./vector2d.js";

let canvas = document.getElementById('c');
let renderer = new CanvasRenderer(canvas);

let clear = document.getElementById('clear');
clear.addEventListener("click", () => {
    renderer.clear()
})

// shape selection

let shape = document.getElementsByName('shape');
let shape_selection = document.getElementById('shape');

let curr_shape = "1";
let currGirihType = -1;

shape_selection.addEventListener("click", () => {
    for (let i = 0; i < shape.length; i++) {
        if (shape[i].checked)
            curr_shape = shape[i].value;
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
            currGirihType = -1;
    }
    console.log(curr_shape);
});

// instantiation
let shapes = []

function addShape(center){
    let girih = new Girih(center, 10, currGirihType);
    shapes.push(girih);
}

// drawing on canvas

canvas.addEventListener("click", (ev) => {
    let new_p = new Vec2d(ev.offsetX, ev.offsetY)

    addShape(new_p);
})

canvas.addEventListener('mousemove', (ev) => {
    // Effacer le canvas
    renderer.clear();

    // Dessiner tous les cercles permanents
    shapes.forEach(c => {
        renderer.drawGirih(c, 10);
    });

    // Dessiner un cercle temporaire à l'emplacement de la souris
    let new_pos = new Vec2d(ev.offsetX, ev.offsetY)
    let new_girih = new Girih(new_pos, 10, currGirihType);
    renderer.drawGirih(new_girih, 10);
});
