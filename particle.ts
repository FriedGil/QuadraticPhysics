import { Vector } from "./vector";

export class Particle {
    p: Vector;
    v: Vector;
    a: Vector;
    r: number;
    m: number;
    constructor(p: Vector,v: Vector,a: Vector,r: number,m: number){
        this.p = p;
        this.v = v;
        this.a = a;
        this.r = r;
        this.m = m;
    }

}