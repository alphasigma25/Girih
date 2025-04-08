"use strict";
import { Vec2d } from "./vector2d.js";

// TODO : Utiliser l'enum de manière plus pratique / Correcte !!!!!!!!!!!!!!!!!!
export const GirihType = Object.freeze({
  deca: 8,
  penta: 16,
  bowtie: 24,
  rhombus: 32,
  hexa: 40,
  a0: 0,
  a36: 1,
  a72: 2,
  a108: 3,
  a144: 4,
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