import { Module } from "./module";

function  log(message) {
    console.log(message)
}

let message = 'Hello world'

log(message)

class Point {
    private x: number;
    private y: number;

    constructor(x?: number, y?: number) {
        this.x = x
        this.y = y
    }

    draw() {
        console.log(this.x)
        console.log(this.y)
    }
}

//without constructor:
// let point = new Point();
// point.x = 1
// point.y = 6

//with constructor:
let point = new Point(1, 6)
point.draw()

class PointWithGettersSetters {
    //if access modifier is given, no need for fields, all the above is generated
    //_x is the naming convention as getters and setters have the same x() naming (lower case)
    constructor(private _x?: number, private _y?: number) {
    }

    draw() {
        console.log('x: ' + this._x)
        console.log('y: ' + this._y)
    }

    get x() {
        return this._x
    }

    set x(val) {
        if (val < 0) {
            throw new Error('value cannot be less than 0')
        } else this._x = val
    }
}

let point2 = new PointWithGettersSetters(1,2)
point2.x = 10;
point2.draw()


//Modules
let module = new Module(1,2)
module.log()