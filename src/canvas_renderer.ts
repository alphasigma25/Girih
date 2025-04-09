"use strict";
import { Vec2d } from "./vector2d.js";
import { Girih, GirihType } from "./girih_tiles.js";

export class CanvasRenderer {
  /**
   * @param {HTMLCanvasElement} canvas
   */
  constructor(canvas) {
    this.canvas = canvas;
    const ctx = canvas.getContext("2d");
    if (ctx == null) throw new Error("Unsupported browser");
    this.ctx = ctx;
  }

  /**
   * @param {Girih} girih
   */
  drawGirih(girih) {
    this.drawFromAngles(girih.center, this.getAngles(girih.girihtype)); // TODO : Séparer center de start point
  }

  // TODO : Vraiment besoin d'une fonction ?
  /**
   * @param {Vec2d} startPoint
   * @param {number[]} angles
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
   * @returns {number[]}
   */
  getAngles(girihtype) {
    let angle = 36 * (girihtype & 7);

    switch (girihtype & ~7) {
      case GirihType.deca:
        return [angle, 144, 144, 144, 144, 144, 144, 144, 144, 144];

      case GirihType.penta:
        return [angle, 108, 108, 108, 108];

      case GirihType.bowtie:
        return [angle, 72, 360 - 144, 72, 72, 360 - 144];

      case GirihType.rhombus:
        return [angle, 108, 72, 108];

      case GirihType.hexa:
        return [angle, 72, 144, 144, 72, 144];

      default:
        throw new Error("Invalid girihtype");
    }
  }
}