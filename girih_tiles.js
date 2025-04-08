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
  // TODO : Pourquoi edge_length est une variable !!!!!!!!!!!!!!!
  /**
   * @param {Vec2d} center
   * @param {number} edge_length
   * @param {GirihType} girihtype
   */
  constructor(center, edge_length, girihtype) {
    this.center = center;
    this.edge_length = edge_length;
    this.girihtype = girihtype;
  }

  // TODO : Déplacer
  /**
   * @returns {[number]}
   */
  getAngles() {
    let angles = [];
    // TODO : Enlever la catastrophe ?
    switch (this.girihtype) {
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