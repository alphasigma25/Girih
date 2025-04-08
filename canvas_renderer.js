import { Vec2d } from "./vector2d.js";
import { Girih, GirihType } from "./girih_tiles.js";

export class CanvasRenderer {

    /**
     * @param {HTMLCanvasElement} canvas
     */
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }

    /**
     * @param {Vec2d} p
     */
    drawPoint(p) {
        this.ctx.beginPath()
        this.ctx.moveTo(p.x, p.y)
        this.ctx.lineTo(p.x + 1, p.y + 1)
        this.ctx.stroke()
    }

    /**
     * @param {Vec2d} p1
     * @param {Vec2d} p2
     */
    drawLine(p1, p2) {
        this.ctx.beginPath()
        this.ctx.moveTo(p1.x, p1.y)
        this.ctx.lineTo(p2.x, p2.y)
        this.ctx.stroke()
    }

    /**
     * @param {Vec2d} center
     * @param {number} radius
     */
    drawCircle(center, radius) {
        this.ctx.beginPath();
        this.ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI);
        this.ctx.stroke();
    }

    /**
     * @param {Vec2d} center
     * @param {number} width
     * @param {number} height
     */
    drawRect(center, width, height) {
        this.ctx.beginPath();
        this.ctx.rect(center.x - width/2, center.y - height/2, width, height);
        this.ctx.stroke();
    }

    /**
     * @param {Girih} girih
     * @param {number} edgeLength
     */
    drawGirih(girih, edgeLength){
        let angles = girih.getAngles()
        this.drawFromAngles(girih.center, angles, edgeLength);
    }

    /**
     * @param {Vec2d} startPoint
     * @param {[number]} angles
     * @param {number} edge_length
     */
    drawFromAngles(startPoint, angles, edgeLength){
        let x = startPoint.x;
        let y = startPoint.y;

        this.ctx.beginPath();
        this.ctx.moveTo(x, y);

        let currAngle = angles[0];
        for (let i = 1; i < angles.length; i++) {
            // Calculer le prochain point en utilisant la longueur du côté et l'angle
            x += edgeLength * Math.cos((currAngle) * Math.PI / 180);
            y += edgeLength * Math.sin((currAngle) * Math.PI / 180);

            // Tracer la ligne jusqu'au nouveau point
            this.ctx.lineTo(x, y);

            // Mettre à jour l'angle actuel pour le prochain côté
            currAngle += angles[i]-180;
        }
        this.ctx.closePath();
        this.ctx.stroke();
    }

    clear(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}