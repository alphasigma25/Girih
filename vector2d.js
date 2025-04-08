"use strict";
export class Vec2d {
  /**
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `(${this.x},${this.y})`;
  }

  // TODO : Supprimer ?
  /**
   * @param {number} n
   * @return {Vec2d}
   */
  mult(n) {
    return new Vec2d(this.x * n, this.y * n);
  }

  // TODO : Supprimer ?
  /**
   * @param {Vec2d} o
   * @return {Vec2d}
   */
  add(o) {
    return new Vec2d(this.x + o.x, this.y + o.y);
  }

  // TODO : Supprimer ?
  /**
   * @param {Vec2d} o
   * @return {Vec2d}
   */
  mid(o) {
    return new Vec2d((this.x + o.x) / 2, (this.y + o.y) / 2);
  }

  // TODO : Supprimer ?
  /**
   * @param {Vec2d} v
   * @return {function(number): Vec2d}
   */
  inter(v) {
    return (i) => {
      return new Vec2d(
        this.x + i * (v.x - this.x),
        this.y + i * (v.y - this.y)
      );
    };
  }
}