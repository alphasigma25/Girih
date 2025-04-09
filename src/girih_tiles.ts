"use strict";
import { Vec2d } from "./vector2d.js";

export const GirihType = Object.freeze({
  deca: 8,
  penta: 16,
  bowtie: 24,
  rhombus: 32,
  hexa: 40,
});

export class Girih {
  /**
   * @param {Vec2d} center
   * @param {GirihType} girihtype
   */
  constructor(center, girihtype) {
    this.center = center;
    this.girihtype = girihtype;
  }
}