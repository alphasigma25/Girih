"use strict";
import { Vec2d } from "./vector2d.js";
import { Girih } from "./girih_tiles.js";

export class CanvasRenderer {
  /**
   * @param {HTMLCanvasElement} canvas
   */
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
  }

  /**
   * @param {Girih} girih
   * @param {number} edgeLength
   */
  drawGirih(girih) {
    this.drawFromAngles(girih.center, this.getAngles(girih.girihtype)); // TODO : Séparer center de start point
  }

  // TODO : Vraiment besoin d'une fonction ?
  /**
   * @param {Vec2d} startPoint
   * @param {[number]} angles
   */
  drawFromAngles(startPoint, angles) {
    let x = startPoint.x;
    let y = startPoint.y;

    this.ctx.beginPath();
    this.ctx.moveTo(x, y);

    // TODO : Gerer en utilisant des points et pas des angles
    let currAngle = angles[0];
    for (let i = 1; i < angles.length; i++) {
      // Calculer le prochain point en utilisant la longueur du côté et l'angle
      x += 10 * Math.cos((currAngle * Math.PI) / 180);
      y += 10 * Math.sin((currAngle * Math.PI) / 180);

      // Tracer la ligne jusqu'au nouveau point
      this.ctx.lineTo(x, y);

      // Mettre à jour l'angle actuel pour le prochain côté
      currAngle += angles[i] - 180;
    }
    this.ctx.closePath();
    this.ctx.stroke();
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  /**
   * @returns {[number]}
   */
  getAngles(girihtype) {
    let angles = [];
    // TODO : Enlever la catastrophe ?
    switch (girihtype) {
      case 8:
        angles = [0, 144, 144, 144, 144, 144, 144, 144, 144, 144];
        break;

      case 16:
        angles = [0, 108, 108, 108, 108];
        break;
      case 17:
        angles = [36, 108, 108, 108, 108];
        break;

      case 24:
        angles = [0, 72, 360 - 144, 72, 72, 360 - 144];
        break;
      case 25:
        angles = [36, 72, 360 - 144, 72, 72, 360 - 144];
        break;
      case 26:
        angles = [72, 72, 360 - 144, 72, 72, 360 - 144];
        break;
      case 27:
        angles = [108, 72, 360 - 144, 72, 72, 360 - 144];
        break;
      case 28:
        angles = [144, 72, 360 - 144, 72, 72, 360 - 144];
        break;

      case 32:
        angles = [0, 108, 72, 108];
        break;
      case 33:
        angles = [36, 108, 72, 108];
        break;
      case 34:
        angles = [72, 108, 72, 108];
        break;
      case 35:
        angles = [108, 108, 72, 108];
        break;
      case 36:
        angles = [144, 108, 72, 108];
        break;

      case 40:
        angles = [0, 72, 144, 144, 72, 144];
        break;
      case 41:
        angles = [36, 72, 144, 144, 72, 144];
        break;
      case 42:
        angles = [72, 72, 144, 144, 72, 144];
        break;
      case 43:
        angles = [108, 72, 144, 144, 72, 144];
        break;
      case 44:
        angles = [144, 72, 144, 144, 72, 144];
        break;

      default:
        throw new Error("Invalid girihtype");
    }
    return angles;
  }
}
