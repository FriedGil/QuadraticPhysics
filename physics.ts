import { Particle } from "./particle";
import { Vector } from "./vector";


export function collision1dx(p1: Particle, p2: Particle, radsum = 0){
    return (-p1.v.x - Math.sqrt(-4 *(p1.a.x-p2.a.x)*(-radsum + p1.p.x-p2.p.x)+Math.pow((p1.v.x-p2.v.x),2)) + p2.v.x) / (2*(p1.a.x-p2.a.x));
}

export function collision1dy(p1: Particle, p2: Particle, radsum = 0) {
    return (-p1.v.y - Math.sqrt(-4 *(p1.a.y-p2.a.y)*(-radsum + p1.p.y-p2.p.y)+Math.pow((p1.v.y-p2.v.y),2)) + p2.v.y) / (2*(p1.a.y-p2.a.y));
}

export function eulercoll(p1: Particle, p2: Particle){

}