"use strict";
import { Vec2d } from "./vector2d.js";

export const enum GirihType {
  deca = 8,
  penta = 16,
  bowtie = 24,
  rhombus = 32,
  hexa = 40,
}

export class Girih {
  girihtype: GirihType;
  center: Vec2d;

  constructor(center: Vec2d, girihtype: GirihType) {
    this.center = center;
    this.girihtype = girihtype;
  }
}